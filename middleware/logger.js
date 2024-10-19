const logger = (req, res, next) => {

    console.log('i am a middleware');
    next();
    // if(req.url === '/'){
    //     next();
    // }
    // else {
    //     res.json({error: "this page doesn't exists"})
    // }

}

module.exports = logger