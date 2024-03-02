const asyncHandler = (requestHandler)=>{(req,res,next)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}}

export {asyncHandler}

//Notes*

// asyncHandler will be a HOF will taka function as parameter and can be wrintten in try catch way also  above we have done it in Promice form

// const asyncHandler = (fn)=>{}
// const asyncHandler = (func) => {()=>{}}
// //can be written as 
// const asyncHandler = (func) => ()=> {}

// const asyncHandler = (fn) => async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         req.status(err.codd || 50).json({
//             success: false,
//             message: err.message
//         })
//     }
// }