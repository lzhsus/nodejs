let express=require("express")
let app = express();
let fs=require('fs')
exports.addFiles =async function (req, res,cd) {
    await app.get('/',(req,res,next)=>{
       res.send('1000')
   })
}