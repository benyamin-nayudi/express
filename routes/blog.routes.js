const data =  require('../db/db.json')
const express = require('express')

const router = express.Router();

router.get('/getAllBlogs', (req, res) => {
    res.send(data)
})

router.get("/:id", (req, res) => {
    const params = req.params;

    console.log(params);

    // if(params.id){
    //     return res.status(500).json({error: 'there is no ID specified'})
    // }


    const result = data.find(item => item.id === Number(params.id))

    if(!result){
        return res.status(400).json({error: 'there is no data available'})
    }else {
        return res.status(200).json(result)
    }
})

module.exports = router
