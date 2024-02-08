const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const insuranceSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bike: {
        type: Schema.Types.ObjectId,
        ref: 'Bike',
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
insuranceSchema.pre('save', async function (next, {User, Bike}) {
    try {
        const user = await User.findById(this.user);
        const bike = await Bike.findById(this.bike);
        if (!user || !bike) {
            throw new Error('User or bike not found');
        }
        // Calculate insurance quote per day using calculateInsuranceQuote method
        this.insuranceQuotePerDay = this.calculateInsuranceQuote(user.age, user.yearsDriving, bike.bikePricePerDay);
        next();
    } catch (error) {
        next(error);
    }
});

// Calculate insurance
function calculateInsuranceQuote(age, yearsDriving, bikePricePerDay) {
    const basePremium = 50; // Base premium amount
    const ageFactor = age >= 25 ? 0.8 : 1.2; // Adjust premium based on age
    const drivingFactor = yearsDriving > 5 ? 0.9 : 1.1; // Adjust premium based on driving experience
    const priceFactor = bikePricePerDay / 1000; // Adjust premium based on bike price per day

    // Perform calculation based on age, yearsDriving, and bikePricePerDay
    return basePremium * ageFactor * drivingFactor * priceFactor;
};

module.exports = {
    insuranceSchema,
    calculateInsuranceQuote
};