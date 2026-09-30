const r=require('express').Router(),c=require('../controllers/auth.controller'),{protect}=require('../middleware/auth.middleware');r.post('/login',c.login);r.get('/me',protect,c.me);module.exports=r;
