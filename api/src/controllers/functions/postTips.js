const Tip = require ('./../../models/Tip');

module.exports = (text) => {
    const newTip = new Tip (text)
    return newTip.save()
};