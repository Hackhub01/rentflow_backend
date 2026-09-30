const crypto=require('crypto');
module.exports=()=>({username:`TEN${Date.now().toString().slice(-7)}`,password:crypto.randomBytes(5).toString('hex')});
