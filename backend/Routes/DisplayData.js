const express = require('express')
const router = express.Router()

router.post("/foodData",(req,res)=>{
    try {
        // console.log(global.food_items);
        res.send([global.food_items,global.FoodCategory])
    } catch (error) {
        console.error(error.message);
        console.log("server error");
    }
})

module.exports = router