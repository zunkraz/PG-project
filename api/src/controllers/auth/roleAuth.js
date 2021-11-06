module.exports = (req, res, next) => {
    console.log(req.cookies.isAdmin);
    if(req && req.cookies.isAdmin){
        next();
    }
    else {
        return res.status(401).json({message: 'Not allowed'})
    }
}