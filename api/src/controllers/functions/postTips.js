const Tip = require ('./../../models/Tip');

module.exports = (body) => {
    const {text,userId} = body
    const newTip = new Tip ({
        text,
        userId
    })
    return newTip.save()
};