const { Schema } = require('mongoose');
const {Insurance, Bike} = require('../models');


const contractSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    bike: {type: Schema.Types.ObjectId, ref: 'Bike'},
    duration: {
        type: Number,
        required: true
    },
    rentalPriceSub: {
        type: Number,
        required: true
        // ( dailyRentalPrice + dailyRentalInsurance ) * duration
    },
    rentalPriceTotal: {
        type: Number,
        required: true
        // ( dailyRentalPrice + dailyRentalInsurance ) * duration * Tax
    }
});
contractSchema.pre('save', async function (next) {
    try {
        // Retrieve bike price per day from the associated bike
        const bike = await Bike.findById(this.bike);
        const bikePricePerDay = bike ? bike.bikePricePerDay : 0; // Set default value if bike not found

        // Retrieve insurance per day from the associated insurance
        const insurance = await Insurance.findOne({ user: this.user, bike: this.bike });
        const insurancePerDay = insurance ? insurance.insuranceQuotePerDay : 0; // Set default value if insurance not found
        
        // Calculate rental price subtotal
        this.rentalPriceSub = (bikePricePerDay + insurancePerDay) * this.duration;

        // Calculate rental price total with 13% HST (Harmonized Sales Tax)
        const HST_PERCENTAGE = 0.13;
        this.rentalPriceTotal = this.rentalPriceSub * (1 + HST_PERCENTAGE);

        next();
    } catch (error) {
        next(error);
    }
});

const Contract = model('Contract', contractSchema);

module.exports = Contract;