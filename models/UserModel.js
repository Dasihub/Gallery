const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    date: {type: String, required: true}
})

module.exports = model('users', schema)