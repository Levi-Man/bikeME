//Edited the import and changed it to types since it is a schema and not a model
const { Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//Edited the schema to include the default id
const insuranceSchema = new Schema({

    insuranceId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    
    age:{
        type: Number,
        ref: 'User',
        required: true
    },

    rentalPerDay: {
        type: Number,
        required: true
    },

    yearsDriving:{
        type: Number,
        ref: 'User',
        required: true
    }, 

    insuranceQuotePerDay: {
        type: Number,
        required: true,
    }

    // take user's age and number of years driving and bike price per day
    // calculation for insurance quote
    // return insurance quote per day
});
insuranceSchema.pre('save', async function () {
    const basePremium = 50; // Base premium amount
    const ageFactor = this.userAge >= 25 ? 0.8 : 1.2; // Adjust premium based on age
    const drivingFactor = this.yearsDriving > 5 ? 0.9 : 1.1; // Adjust premium based on driving experience
    const priceFactor = this.rentalPerDay / 1000; // Adjust premium based on bike price per day

    // Perform calculation based on age, yearsDriving, and bikePricePerDay
    this.insuranceQuotePerDay =  basePremium * ageFactor * drivingFactor * priceFactor;
});

// // Calculate insurance
// function calculateInsuranceQuote(age, yearsDriving, bikePricePerDay) {
//     const basePremium = 50; // Base premium amount
//     const ageFactor = age >= 25 ? 0.8 : 1.2; // Adjust premium based on age
//     const drivingFactor = yearsDriving > 5 ? 0.9 : 1.1; // Adjust premium based on driving experience
//     const priceFactor = bikePricePerDay / 1000; // Adjust premium based on bike price per day

//     // Perform calculation based on age, yearsDriving, and bikePricePerDay
//     return basePremium * ageFactor * drivingFactor * priceFactor;
// };

const Insurance = model('Insurance', insuranceSchema)

module.exports = Insurance;