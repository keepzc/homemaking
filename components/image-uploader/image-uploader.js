import {getDataSet} from "../../utils/utils";
import FileUploader from "../../utils/file-uploader";

Component({
    properties: {
        // 默认展示的图片文件
        files: {
            type: Array,
            value: []
        },
        // 最大上传图片数量
        maxCount: {
            type: Number,
            value: 1
        },
        // 单个图片文件大小限制，单位 M
        size: {
            type: Number,
            value: 2
        },
        // 可选图片大小类型，original：原图，compressed：压缩图
        // 默认都可以
        sizeType: {
            type: Array,
            value: ['original', 'compressed']
        },
        // 可选图片来源，album: 从相册选图, camera：使用相机
        // 默认都可以
        sourceType: {
            type: Array,
            value: ['album', 'camera']
        },
    },
    observers:{
        files:function (newValue){
            if(!newValue.length){
                return
            }
            const _files = []
            newValue.forEach((item,index) => {
                const file ={
                    id: item.id,
                    key: index + '',
                    path: item.path,
                    status: this.data.uploadStatusEnum.SUCCESS,
                    error: ''
                }
                _files.push(file)
            })
            this.setData({
                _files
            })
        }
    },
    data: {
        _files: [],
        uploadStatusEnum: {
            ERROR: 0,
            UPLOADING: 1,
            SUCCESS: 2
        }
    },
    methods: {
        handlePreview: function (event){
            this.triggerEvent('hidepage')
            const index = getDataSet(event, 'index')
            const urls = this.data._files.map(item => item.path)
            wx.previewImage({
                urls,
                current: urls[index]
            })
        },
        handleDelete: function (event){
            const index = getDataSet(event,'index')
            const deldata = this.data._files.splice(index,1)
            this.setData({
                _files: this.data._files
            })
            this.triggerEvent('delete', {index, item: deldata[0]})
        },
        handleChooseImage:async function (event){
            this.triggerEvent('hidepage')
            const res = await wx.chooseImage({
                count: this.data.maxCount,
                sizeType: this.data.sizeType,
                sourceType: this.data.sizeType
            })
            this.triggerEvent('choose', {file: res.tempFiles})
            const _files = this._filesFilter(res.tempFiles)
            this.setData({
                _files
            })
            const uploadTask = _files.filter(item => item.status === this.data.uploadStatusEnum.UPLOADING)
            this._executeUpload(uploadTask)
        },
        _filesFilter(tempFiles){
            let error =''
            const res =[]
            tempFiles.forEach((item, index) =>{
                //将m转化为字节
                if(item.size >(1024 * 1024 * this.data.size)){
                    error = `图片大小不能超过${this.data.size}M`
                    this.triggerEvent('validateFail', {item, error})
                }
                const length = this.data._files.length
                res.push({
                    id: null,
                    key: index + length + '',
                    path: item.path,
                    status: error ? this.data.uploadStatusEnum.ERROR : this.data.uploadStatusEnum.UPLOADING,
                    error: error
                })
            })
            // 由于无法判断用户是一次上传多张图片，还是一次一次上传多张图片所以contact连接
            return this.data._files.concat(res)
        },
        //执行图片上传
        async _executeUpload(uploadTask) {
            const successFile =[]
            for (const file of uploadTask) {
                try{
                    const res =  await FileUploader.upload(file.path, file.key)
                    file.id = res[0].id
                    file.status = this.data.uploadStatusEnum.SUCCESS
                    //由于页面状态改变， 找到这条数据重新赋值
                    this.data._files[file.key] = file
                    successFile.push(file)
                }catch (e) {
                    file.status = this.data.uploadStatusEnum.ERROR
                    file.error = e
                    this.triggerEvent('validateFail', {file, error: e})
                }
            }
            this.setData({
                _files: this.data._files
            })
            if(successFile.length){
                this.triggerEvent('uploadSuccess', {files: successFile})
            }
        }
    }
});
