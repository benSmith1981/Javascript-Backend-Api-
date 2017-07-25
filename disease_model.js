'use strict'
// Load required packages
var mongoose = require('mongoose');

var DiseaseSchema = new mongoose.Schema({
    humanID: String, //"1",
    editInfoID: Number,  //"1"
    editInfoTimestamp: Number, //12.345,
    editInfoField: String, //"nr. 7",
    deleted: Boolean,
    diseaseList: [String], //[ { "id" : 7 }, { "id" : 15 } ],
    canEditList: [String] //[ { "id" : "2" }, { "id" : "3"}, { "id" : "4"} ],
})

module.exports = mongoose.model('Diseases', DiseaseSchema);