const multer=require('multer');const path=require('path');const fs=require('fs');const dir=path.join(process.cwd(),'uploads','aadhaar');fs.mkdirSync(dir,{recursive:true});
const storage=multer.diskStorage({destination:(_r,_f,cb)=>cb(null,dir),filename:(_r,f,cb)=>cb(null,`${Date.now()}-${Math.round(Math.random()*1e9)}${path.extname(f.originalname)}`)});
const filter=(_r,f,cb)=>['image/jpeg','image/png','application/pdf'].includes(f.mimetype)?cb(null,true):cb(new Error('Only JPG, PNG and PDF files are allowed'));
module.exports=multer({storage,fileFilter:filter,limits:{fileSize:5*1024*1024}});
