const Tip = require ('./../../models/Tip');

module.exports = (body) => {
    const {text,userId,isApproved} = body
    const newTip = new Tip ({
        text,
        userId,
        isApproved
    })
    return newTip.save()
};