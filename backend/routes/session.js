const router = require("express").Router()
const Session = require('../model/Session');

router.get('/',async(req,res)=>{
    try {
        const session = await Session.find();
       res.status(200).json(session);
   } catch (error) {
      res.status(500).json(error);
   }
})

router.post('/',async(req,res)=>{
    const newSession = new Session(req.body);
    try {
        const savedSession = await newSession.save();
        res.status(201).json(savedSession);
    } catch (error) {
       res.status(500).json(error);
    }
})
module.exports = router