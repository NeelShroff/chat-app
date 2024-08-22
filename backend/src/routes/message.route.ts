import express from "express";


const router = express.Router();

router.post("/conversation",(req,res)=>{
    res.send("conversation route");
})
;
export default router

