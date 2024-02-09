const mongoose = require('mongoose');
const { Bike, User, Contract, Category } = require('../models');
const { calculateInsuranceQuote } = require('../models/Insurance')


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bikeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('connected', async () => {
  // MongoDB connection is open, start seeding data
  seedData();
});

const seedData = async () => {
  try {
    // Remove existing data
    await Promise.all([User.deleteMany(), Bike.deleteMany(), Contract.deleteMany(), Category.deleteMany()]);

    // Insert new bikes
    const insertedBikes = await Bike.insertMany(bikesData);

    // Insert new users
    const insertedUsers = await User.insertMany(usersData);

    // Insert categories
    const insertedCategories = await Category.insertMany(categoriesData)

    // Retrieve the generated user and bike names
    const bikeName = insertedBikes.map(bike => bike.model);
    const userName = insertedUsers.map(user => user.name);
// const categoryIds = insertedCategories.map(category => category._id);

    // Create contract objects with rentalPriceSub and rentalPriceTotal calculated
    const contracts = contractsData.map((contract, index) => {
      const bike = insertedBikes.find(bike => bike.model === contract.bikeName);
      const user = insertedUsers.find(user => user.name === contract.user);
      
      if (!bike) {
        throw new Error(`Bike with name "${contract.bikeName}" not found`);
      }
      
      if (!user) {
        throw new Error(`User with name "${contract.user}" not found`);
      }

      const bikePricePerDay = bike.bikePricePerDay;
      const insuranceQuotePerDay = calculateInsuranceQuote(
        user.age,
        user.yearsDriving,
        bikePricePerDay
      );
      const rentalPriceSub = (bikePricePerDay + insuranceQuotePerDay) * contract.duration;
      const rentalPriceTotal = rentalPriceSub * 1.13; // Total with 13% HST
      
      return {
        ...contract,
        user: user._id, // Use user's _id
        bike: bike._id, // Use bike's _id
        rentalPriceSub,
        rentalPriceTotal,
      };
    });

    // Insert new contracts
    await Contract.insertMany(contracts);

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Close database connection
    mongoose.disconnect();
  }
};

// // Function to calculate insurance and rental prices
// const calculateInsurance = (duration, age, yearsDriving, bikePricePerDay) => {
//   const insuranceQuotePerDay = calculateInsuranceQuote(age, yearsDriving, bikePricePerDay);
//   return {
//     duration,
//     rentalPriceSub: duration * bikePricePerDay,
//     rentalPriceTotal: duration * (bikePricePerDay + insuranceQuotePerDay),
//     insuranceQuotePerDay,
//   };
// };

// Array of bike data
const bikesData = [
  {
    make: 'Honda',
    model: 'CBR600RR',
    year: 2021,
    mileage: 1000,
    description: 'Sportbike',
    category: 'Sport',
    bikePricePerDay: 50.99,
    images: [{ url: 'image1.jpg', description: 'Image 1' }, { url: 'image2.jpg', description: 'Image 2' }],
  },
  {
    make: 'Yamaha',
    model: 'YZF-R6',
    year: 2020,
    mileage: 1500,
    description: 'Supersport',
    category: 'Sport',
    bikePricePerDay: 60.50,
    images: [{ url: 'image3.jpg', description: 'Image 3' }, { url: 'image4.jpg', description: 'Image 4' }],
  },
  {
    make: 'Kawasaki',
    model: 'Ninja ZX-10R',
    year: 2022,
    mileage: 800,
    description: 'Superbike',
    category: 'Sport',
    bikePricePerDay: 70.75,
    images: [{ url: 'image5.jpg', description: 'Image 5' }, { url: 'image6.jpg', description: 'Image 6' }],
  },
  {
    make: 'BMW',
    model: 'R1250GS',
    year: 2021,
    mileage: 500,
    description: 'Adventure Touring',
    category: 'Adventure',
    bikePricePerDay: 90.25,
    images: [{ url: 'image7.jpg', description: 'Image 7' }, { url: 'image8.jpg', description: 'Image 8' }],
  },
  {
    make: 'Ducati',
    model: 'Monster 821',
    year: 2019,
    mileage: 2000,
    description: 'Naked Bike',
    category: 'Retro',
    bikePricePerDay: 75.90,
    images: [{ url: 'image9.jpg', description: 'Image 9' }, { url: 'image10.jpg', description: 'Image 10' }],
  },
  {
    make: 'Triumph',
    model: 'Street Triple RS',
    year: 2020,
    mileage: 1200,
    description: 'Naked Bike',
    category: 'Retro',
    bikePricePerDay: 65.75,
    images: [{ url: 'image11.jpg', description: 'Image 11' }, { url: 'image12.jpg', description: 'Image 12' }],
  },
  {
    make: 'Harley-Davidson',
    model: 'Fat Boy',
    year: 2018,
    mileage: 3000,
    description: 'Cruiser',
    category: 'Cruiser',
    bikePricePerDay: 85.50,
    images: [{ url: 'image13.jpg', description: 'Image 13' }, { url: 'image14.jpg', description: 'Image 14' }],
  },
  {
    make: 'KTM',
    model: '390 Adventure',
    year: 2021,
    mileage: 800,
    description: 'Adventure Touring',
    category: 'Adventure',
    bikePricePerDay: 55.40,
    images: [{ url: 'image15.jpg', description: 'Image 15' }, { url: 'image16.jpg', description: 'Image 16' }],
  },
  {
    make: 'Suzuki',
    model: 'GSX-R1000',
    year: 2019,
    mileage: 1800,
    description: 'Superbike',
    category: 'Sport',
    bikePricePerDay: 80.25,
    images: [{ url: 'image17.jpg', description: 'Image 17' }, { url: 'image18.jpg', description: 'Image 18' }],
  },
  {
    make: 'Honda',
    model: 'Rebel 500',
    year: 2020,
    mileage: 1000,
    description: 'Cruiser',
    category: 'Cruiser',
    bikePricePerDay: 70.00,
    images: [{ url: 'image19.jpg', description: 'Image 19' }, { url: 'image20.jpg', description: 'Image 20' }],
  },
];

const usersData = [
  {
    username: 'john_doe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    licenseDate: new Date('2020-01-01'),
    dateOfBirth: new Date('1990-01-01'),
  },
  {
    username: 'jane_smith',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    password: 'password456',
    licenseDate: new Date('2018-05-15'),
    dateOfBirth: new Date('1985-06-20'),
  },
  {
    username: 'michael_johnson',
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@example.com',
    password: 'password789',
    licenseDate: new Date('2019-08-10'),
    dateOfBirth: new Date('1995-03-12'),
  },
];

const contractsData = [
  {
    username: 'john_doe',
    bikeName: 'R1250GS',
    duration: 5,
    rentalPriceSub: '',
    rentalPriceTotal: '',
  },
  {
    username: 'jane_smith',
    bikeName: 'Monster 821',
    duration: 3,
    rentalPriceSub: '',
    rentalPriceTotal: '',
  },
  {
    username: 'michael_johnson',
    bikeName: 'Ninja ZX-10R',
    duration: 3,
    rentalPriceSub: '',
    rentalPriceTotal: '',
  },
];

const categoriesData = [
  { name: 'Sport' },
  { name: 'Cruiser' },
  { name: 'Adventure' },
  { name: 'Retro' },
  { name: 'Touring' }
];