const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = {...err}

    //Log to Console for Dev
    console.log(error);

    

    error.message = err.message
    
    //Mongoose Bad ObjectId
    if(err.name === 'CastError'){
        const message =  `Bootcamp not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    //Mongoose Duplicate Key
    if(err.code === 11000){
        const message = `Bootcamp Already Exist`;
        error = new ErrorResponse(message, 400);
    }

    //Mongoose Validation Error
    if(err.name === 'ValidationError'){
        console.log("Got Here")
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }
    console.log(err.name);

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })
}; 

module.exports = errorHandler;