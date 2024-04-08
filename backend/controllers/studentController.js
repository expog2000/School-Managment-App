const registerStudent=async (req,res)=>{
    const {name,contact}=req.body;

    res.json({
        name,
        contact,
    });
};
module.exports=registerStudent;