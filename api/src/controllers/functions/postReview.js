const Review = require('../../models/Review');


module.exports = (body) => {
    const {rate, userId, text} = body;
    const newReview = new Review ({
        rate,
        userId,
        text
    })
    return newReview.save()
};