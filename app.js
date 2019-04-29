// 使用express 插件 创建数据库
let express=require("express")
let app = express();
let Api = require("./server/index");
// 设置静态文件夹
app.use(express.static('public'));
app.use(express.static('upload'));
// 设置模板引擎
//请求方式 
app.get('/',(req,res,next)=>{
    res.send('ok')
})

Api.addFiles().then(res=>{
    console.log(res)
})
app.listen(4000)