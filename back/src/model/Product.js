const { model, Schema: { Types: { ObjectId }}, Schema} = require('mongoose')

const schema = new Schema({

    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: ''
    },
    amount: {
        type: Number,
        default: ''
    },
    imageUrl: {
        type: String,
        default: ''
    },
    category: {
        type: ObjectId,
    },
})

module.exports = model('Product', schema)
