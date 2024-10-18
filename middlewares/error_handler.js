const error_handler = (error,req,res,next) => {
    console.log(error.status)
    if (error.status === 400) {
        return res.status(400).json({ //se arroja cuando el formato no es un arreglo
            sucess: false,
            response:error,
            message:"The body of the request must be an object or an array"
        })
    } else
    return res.status(500).json({
        sucess: false,
        response:error,
        message:"General error"
    })
}

export default error_handler