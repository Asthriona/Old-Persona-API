const router = require('express').Router();

router.get('/', (req,res)=>{
    res.send("Persona 4 EndPoints.")
})

module.exports = router