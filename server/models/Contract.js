const { Schema, model } = require('mongoose');

// const {Insurance, Bike} = require('../models');

const dateFormat = require('../utils/dateFormat');

const contractSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp),
    },
    userName: {
        type: String
    },
    bikeInfo: {
        type: String
    },

    rentalPerDay: {
        type: Number,
        required: true
    },

    insurancePerDay: {
        type: Number,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },
    rentalPriceSub: {
        type: Number,
    },
    rentalPriceTotal: {
        type: Number,
    }
});

// // Define a pre-save hook to calculate rental prices
// contractSchema.pre('save', async function (next) {
//     try {
//         // Retrieve bike price per day from the associated bike
//         const Bike = require('../models/Bike'); // Import here to avoid circular dependency
//         const bike = await Bike.findById(this.bike);
//         const bikePricePerDay = bike ? bike.bikePricePerDay : 0; // Set default value if bike not found

//         // Retrieve insurance per day from the associated insurance
//         const Insurance = require('../models/Insurance'); // Import here to avoid circular dependency
//         const insurance = await Insurance.findOne({ user: this.user, bike: this.bike });
//         const insurancePerDay = insurance ? insurance.insuranceQuotePerDay : 0; // Set default value if insurance not found

//         // Calculate rental price subtotal
//         this.rentalPriceSub = (bikePricePerDay + insurancePerDay) * this.duration;

//         // Calculate rental price total with 13% HST (Harmonized Sales Tax)
//         this.rentalPriceTotal = this.rentalPriceSub * 1.13;

//         next();
//     } catch (error) {
//         next(error);
//     }
// });

const Contract = model('Contract', contractSchema);

module.exports = Contract;
