export const getInsurance = (age, yearsDriving, bikePricePerDay) => {
    const basePremium = 200; // Base premium amount
    const ageFactor = age >= 25 ? 1.2 : 1.7; // Adjust premium based on age
    // console.log(user.age)
    const drivingFactor = yearsDriving > 5 ? 1.2 : 1.5; // Adjust premium based on driving experience
    const priceFactor = bikePricePerDay / 1000; // Adjust premium based on bike price per day

    // Perform calculation based on age, yearsDriving, and bikePricePerDay
    let insurancePerDay = basePremium * ageFactor * drivingFactor * priceFactor;
    return insurancePerDay;
}


