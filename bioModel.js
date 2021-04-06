var mongoose = require('mongoose');

//schema
var bioSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telef: {
        type: String,
        required: true
    },
    morada: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Bio Model
var Bio = module.exports = mongoose.model('bio', bioSchema);

module.exports.get = function (callback, limit) {
   Bio.find(callback).limit(limit); 
}