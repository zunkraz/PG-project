module.exports = (req, res, next) => {
    console.log(req.body);
    if(req && req.body.isAdmin){
        next();
    }
    else {
        return res.status(401).json({message: 'Not allowed'})
    }
}