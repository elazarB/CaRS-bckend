// const mongoose = require("mongoose");
// const Joi = require("joi");

// let pricesSchema = new mongoose.Schema({
//   category: String,
//   dayPrice:String,
//   youngDriverIns: String,
//   phone_number: String,
//   another_phone_number: String,
//   country: String,
//   city: String,
//   address: String,
//   email: String,
//   added_by: String,
//   drivers: Array,
//   images: Array,
//   files: Array,
// })
// exports.PricesModel = mongoose.model("prices", pricesSchema)

// exports.validatePrices = (_reqBody) => {
//   let joiSchema = Joi.object({
//     name: Joi.string().min(2).max(150).required(),
//     ID_type: Joi.string().min(2).max(150).required(),
//     identity: Joi.string().min(2).max(150).required(),
//     phone_number: Joi.string().min(2).max(12).required(),
//     another_phone_number: Joi.string().min(2).max(12).allow(null,""),
//     country: Joi.string().min(2).max(150).required(),
//     city: Joi.string().min(2).max(150).required(),
//     address: Joi.string().min(2).max(150).required(),
//     email: Joi.string().min(2).max(150).email().required(),
//     drivers: Joi.array().min(1).max(100).allow(null,""),
//     images: Joi.array().min(0).max(100).allow(null,""),
//     files: Joi.array().min(0).max(100).allow(null,""),
//   })
//   return joiSchema.validate(_reqBody)
// }