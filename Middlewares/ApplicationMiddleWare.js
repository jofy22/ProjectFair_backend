const applicationMiddleware = (res,req,next)=>{
    console.log("Inside applicationMiddleware");
    next();
}
module.exports=applicationMiddleware
    