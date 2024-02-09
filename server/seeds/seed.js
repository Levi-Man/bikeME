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

    categoriesData.forEach((c) => {
      console.log(c)
      let filteredBikes = insertedBikes.map((b) => {
        let bikeIds = []
        if (b.category == c.name) {
          return b._id
        }
      }
      )
      let filteredCategoryBike = filteredBikes.filter((b) =>
        b
      )
      console.log(filteredCategoryBike)
      if (filteredCategoryBike.length > 0)
        Category.create({ name: c.name, bikes: filteredCategoryBike })
    })

    // Insert new users
    const insertedUsers = await User.insertMany(usersData);

    // // Insert categories
    // const insertedCategories = await Category.insertMany(categoriesData)

    // // Retrieve the generated user and bike names
    // const bikeName = insertedBikes.map(bike => bike.model);
    // const userName = insertedUsers.map(user => user.name);
    // const categoryIds = insertedCategories.map(category => category._id);

    // Create contract objects with rentalPriceSub and rentalPriceTotal calculated
    // const contracts = contractsData.map((contract, index) => {
    //   const bike = insertedBikes.find(bike => bike.model === contract.bikeName);
    //   const user = insertedUsers.find(user => user.name === contract.user);

    //   if (!bike) {
    //     throw new Error(`Bike with name "${contract.bikeName}" not found`);
    //   }

    //   if (!user) {
    //     throw new Error(`User with name "${contract.user}" not found`);
    //   }

    //   const bikePricePerDay = bike.bikePricePerDay;
    //   const insuranceQuotePerDay = calculateInsuranceQuote(
    //     user.age,
    //     user.yearsDriving,
    //     bikePricePerDay
    //   );
    //   const rentalPriceSub = (bikePricePerDay + insuranceQuotePerDay) * contract.duration;
    //   const rentalPriceTotal = rentalPriceSub * 1.13; // Total with 13% HST

    //   return {
    //     ...contract,
    //     user: user._id, // Use user's _id
    //     bike: bike._id, // Use bike's _id
    //     rentalPriceSub,
    //     rentalPriceTotal,
    //   };
    // });

    // Insert new contracts
    // await Contract.insertMany(contracts);

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Close database connection
    // mongoose.disconnect();
    process.exit(0);
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
  // Sport bikes
  {
    make: 'Suzuki',
    model: 'GSX-R750',
    year: 2020,
    mileage: 1500,
    description: 'Sportbike',
    category: 'Sport',
    bikePricePerDay: 55.75,
    availability: true,
    images: [{ url: 'https://cdn-0.totalmotorcycle.com/wp-content/uploads/2019/09/2020-Suzuki-GSX-R750c.jpg', description: 'Image 21' }, { url: 'https://cdn-0.totalmotorcycle.com/wp-content/uploads/2019/09/2020-Suzuki-GSX-R750a-1024x683.jpg', description: 'Image 22' },  { url: 'https://www.webbikeworld.com/wp-content/uploads/2019/12/2020-Suzuki-GSX-R750-01-scaled.jpg', description: 'Image 23' }],
  },
  {
    make: 'Kawasaki',
    model: 'Ninja 650',
    year: 2021,
    mileage: 1200,
    description: 'Sportbike',
    category: 'Sport',
    bikePricePerDay: 45.90,
    availability: true,
    images: [{ url: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/2021_Ninja%20650%20Performance_GN3_FRONT.004.png', description: 'Image 24' }, { url: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/21MY_Ninja_650_GN3_STU_2.png', description: 'Image 25' }, { url: 'https://kawasaki.ie/wp-content/uploads/2021/04/21MY_Ninja-650_-GN3_ACT-1.001.jpg', description: 'Image 26' }],
  },
  {
    make: 'Ducati',
    model: 'Panigale V4',
    year: 2022,
    mileage: 800,
    description: 'Superbike',
    category: 'Sport',
    bikePricePerDay: 90.25,
    availability: true,
    images: [{ url: 'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2021/11/25141850/2022_ducati_panigale_v4_001.jpg', description: 'Image 27' }, { url: 'https://topgear.com.my/sites/default/files/article-image/2022-ducati-panigale-v4-s-launch-specs-world-premiere-dwp-9.JPG', description: 'Image 28' }, { url: 'https://c.ndtvimg.com/2021-11/bd5757g_2022-ducati-panigale-v4-s_625x300_26_November_21.jpg', description: 'Image 29' }],
  },
  {
    make: 'Yamaha',
    model: 'MT-09',
    year: 2019,
    mileage: 1800,
    description: 'Naked Bike',
    category: 'Sport',
    bikePricePerDay: 60.00,
    availability: true,
    images: [{ url: 'https://www.motosportsc.com/wp-content/uploads/2018/10/2019-MT-09-Dark-Blue_3.png', description: 'Image 30' }, { url: 'https://www.motosport100limites.com/wp-content/uploads/2018/10/2019-MT-09-Dark-Blue_1-1-745x473.png', description: 'Image 31' }, { url: 'https://motos.inf.br/wp-content/uploads/2018/05/2017-Yamaha-MT-09-02-1-1024x683.jpg', description: 'Image 32' }],
  },
  {
    make: 'Honda',
    model: 'CB500F',
    year: 2020,
    mileage: 1000,
    description: 'Naked Bike',
    category: 'Sport',
    bikePricePerDay: 50.50,
    availability: true,
    images: [{ url: 'https://cdn-0.totalmotorcycle.com/wp-content/uploads/2018/11/2019-Honda-CB500F4.jpg', description: 'Image 33' }, { url: 'https://livingwithgravity.com/wp-content/uploads/2020/09/2021-Honda-cb500f-5.jpg', description: 'Image 34' }, { url: 'https://d2bywgumb0o70j.cloudfront.net/2020/05/04/359323d72d8e802dc14c99f0befb928d_3839ed0163c3c430.jpg', description: 'Image 35' }],
  },
  // Adventure bikes
  {
    make: 'BMW',
    model: 'R1250GS Adventure',
    year: 2021,
    mileage: 2000,
    description: 'Adventure Touring',
    category: 'Adventure',
    bikePricePerDay: 110.50,
    availability: true,
    images: [{ url: 'https://cdn.autopapo.com.br/box/uploads/2019/09/02183936/07-bmw-r-1250-gs-adventure-studio.jpg', description: 'Image 36' }, { url: 'https://img1.stcrm.it/images/23488233/HOR_STD/1000x/bmw-r-1250-gs-adventure-2021-02.jpg', description: 'Image 37' }, { url: 'https://www.hornig.jp/press/2018/bmw-r-1250-gs-adventure-2g.jpg', description: 'Image 38' }],
  },
  {
    make: 'KTM',
    model: '790 Adventure',
    year: 2020,
    mileage: 1500,
    description: 'Adventure Touring',
    category: 'Adventure',
    bikePricePerDay: 95.75,
    availability: true,
    images: [{ url: 'https://www.totalmotorcycle.com/wp-content/uploads/2020/01/2020-KTM-790-Adventure-R4b.jpg', description: 'Image 39' }, { url: 'https://www.motorcyclespecs.co.za/Gallery_A-L_16/KTM-790-Adventure-19-02.jpg', description: 'Image 40' }, { url: 'https://mcn-images.bauersecure.com/wp-images/4732/ktm-790-adventure-r-01b.jpg', description: 'Image 41' }],
  },
  {
    make: 'Triumph',
    model: 'Tiger 800 XCx',
    year: 2019,
    mileage: 1800,
    description: 'Adventure Touring',
    category: 'Adventure',
    bikePricePerDay: 85.25,
    availability: true,
    images: [{ url: 'https://images.motoren-toerisme.be/2018-12/2019_thriumph_tiger1200xcx_01.jpg?auto=format&fit=max&h=1024&ixlib=php-1.1.0&q=65&s=b59fd4ea9494ed6caadb4a3dbfafed09', description: 'Image 42' }, { url: 'https://farm5.staticflickr.com/4641/38199371114_6b08886882_b.jpg', description: 'Image 43' }, { url: 'https://autocdn.co.uk/images_vehicles/2019/12/05/raw/5de90969ac98f-tiger-800-xca.jpg', description: 'Image 44' }],
  },
  {
    make: 'Honda',
    model: 'Africa Twin',
    year: 2022,
    mileage: 1000,
    description: 'Adventure Touring',
    category: 'Adventure',
    bikePricePerDay: 105.00,
    availability: true,
    images: [{ url: 'https://motonewsworld.com/wp-content/uploads/2021/08/2022-honda-crf1100l-africa-twin-1-1536x1024.jpg', description: 'Image 45' }, { url: 'https://cdn-0.totalmotorcycle.com/wp-content/uploads/2021/08/2022-Honda-Africa-Twin5-1536x1152.jpg', description: 'Image 46' }, { url: 'https://bikeundbusiness.de/fileadmin/user_upload/honda_crf1100l_africa-twin_adventure-sports_modell-2022_02.jpg', description: 'Image 47' }],
  },
  {
    make: 'Yamaha',
    model: 'Tenere 700',
    year: 2021,
    mileage: 1200,
    description: 'Adventure Touring',
    category: 'Adventure',
    bikePricePerDay: 98.50,
    availability: true,
    images: [{ url: 'https://www.totalmotorcycle.com/wp-content/uploads/2018/11/2021-Yamaha-Tenere-700e.jpg', description: 'Image 48' }, { url: 'https://www.motorevistacr.com/wp-content/uploads/2020/06/Yamaha-T%C3%A9n%C3%A9r%C3%A9-700-2021-1140x641.jpg', description: 'Image 49' }, { url: 'https://s3.amazonaws.com/the-drive-staging/message-editor/1541533524125-19_tenere700_ceramicice_action_004.jpg', description: 'Image 50' }],
  },
  // Cruiser bikes
  {
    make: 'Harley-Davidson',
    model: 'Iron 883',
    year: 2020,
    mileage: 2000,
    description: 'Cruiser',
    category: 'Cruiser',
    bikePricePerDay: 85.00,
    availability: true,
        images: [{ url: 'https://ultimatemotorcycling.com/wp-content/uploads/2019/09/2020-harley-sportster-iron-883-buyers-guide-1.jpg', description: 'Image 51' }, { url: 'https://cdn-0.totalmotorcycle.com/wp-content/uploads/2019/08/2020-Harley-Davidson-Iron-883c.jpg', description: 'Image 52' }, { url: 'https://www.webbikeworld.com/wp-content/uploads/2020/01/2020-Harley-Davidson-Iron-883-06.jpg', description: 'Image 53' }],
  },
  {
    make: 'Indian',
    model: 'Scout',
    year: 2019,
    mileage: 2500,
    description: 'Cruiser',
    category: 'Cruiser',
    bikePricePerDay: 95.25,
    availability: true,
    images: [
      { url: 'https://www.motoplanete.com/indian/zoom-700px/Indian-1133-scout-2019-700px.jpg', description: 'Image 54' },
      { url: 'https://i.pinimg.com/originals/28/14/6f/28146f7e182405e1b12a7da107a09873.jpg', description: 'Image 55' },
      { url: 'https://ultimatemotorcycling.com/wp-content/uploads/2020/08/2019-Indian-Scout-recall-brake-issues-2.jpg', description: 'Image 56' }
    ],
  },
  {
    make: 'Kawasaki',
    model: 'Vulcan S',
    year: 2021,
    mileage: 1800,
    description: 'Cruiser',
    category: 'Cruiser',
    bikePricePerDay: 75.50,
    availability: true,
    images: [
      { url: 'https://images.medialinksonline.com/imagestream/8412/3956943x1200x880_FFFFFF_E.jpg', description: 'Image 57' },
      { url: 'https://www.totalmotorcycle.com/wp-content/uploads/2020/10/2021-Kawasaki-Vulcan-S-ABS5.jpg', description: 'Image 58' },
      { url: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/21MY_Vulcan_S__GY1_ACT__4_.jpg', description: 'Image 59' }
    ],
  },
  {
    make: 'Yamaha',
    model: 'Bolt R-Spec',
    year: 2020,
    mileage: 1500,
    description: 'Cruiser',
    category: 'Cruiser',
    bikePricePerDay: 80.75,
    availability: true,
    images: [
      { url: 'https://tse2.mm.bing.net/th?id=OIP.PP6mf_GvLLIuXkyUAnPGtgHaE8&pid=Api&P=0&h=180', description: 'Image 60' },
      { url: 'https://cdn-0.totalmotorcycle.com/wp-content/uploads/2019/09/2020-Yamaha-Bolt-R-Spec3.jpg', description: 'Image 61' },
      { url: 'https://www.totalmotorcycle.com/wp-content/uploads/2019/09/2020-Yamaha-Bolt-R-Spec2.jpg', description: 'Image 62' }
    ],
  },
  {
    make: 'Honda',
    model: 'Shadow Phantom',
    year: 2021,
    mileage: 1200,
    description: 'Cruiser',
    category: 'Cruiser',
    bikePricePerDay: 70.90,
    availability: true,
    images: [
      { url: 'https://www.spare-wheel.com/sites/default/files/media-insert/Honda-Shadow-Phantom-bike--m01.jpg', description: 'Image 63' },
      { url: 'https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2020/10/Shadow.jpg', description: 'Image 64' },
      { url: 'https://hondapros.com/wp-content/uploads/2020/09/2021-Honda-Shadow-Phantom-front.jpg', description: 'Image 65' }
    ],
  },
  // Retro bikes
  {
    make: 'Triumph',
    model: 'Bonneville T120',
    year: 2022,
    mileage: 800,
    description: 'Classic Retro',
    category: 'Retro',
    bikePricePerDay: 88.50,
    availability: true,
    images: [
      { url: 'https://cdn-0.totalmotorcycle.com/wp-content/uploads/2021/04/2021-Triumph-Bonneville-T120f.jpg', description: 'Image 66' },
      { url: 'https://ridermagazine.com/wp-content/uploads/2021/02/2021-Triumph-Bonneville-T120-5.jpg', description: 'Image 67' },
      { url: 'https://moto-station.com/wp-content/uploads/maxitest/1533574194-fullsizeoutput_8e7.jpeg', description: 'Image 68' }
    ],
  },
  {
    make: 'Ducati',
    model: 'Scrambler Icon',
    year: 2019,
    mileage: 1800,
    description: 'Scrambler Retro',
    category: 'Retro',
    bikePricePerDay: 82.75,
    availability: true,
    images: [
      { url: 'https://pictures.topspeed.com/IMG/crop/201809/ducati-scrambler-ico-4_800x0w.jpg', description: 'Image 69' },
      { url: 'https://www.totalmotorcycle.com/wp-content/uploads/2018/10/2019-Ducati-Scrambler-Icon4.jpg', description: 'Image 70' },
      { url: 'https://imgd.aeplcdn.com/476x268/bw/ec/23064/Ducati-Scrambler-Icon-First-Ride-Review-71167.jpg?v=201711021421', description: 'Image 71' }
    ],
  },
  {
    make: 'Harley-Davidson',
    model: 'Roadster',
    year: 2020,
    mileage: 1500,
    description: 'Retro Sportster',
    category: 'Retro',
    bikePricePerDay: 95.25,
    availability: true,
    images: [
      { url: 'https://01eb5e2bd0fe98678e75-4438c3e13430ac0573fa02e8fa2e87ed.ssl.cf1.rackcdn.com/20XL1200CXORANGE/860c36b1dce12b83e1d7a6c39d5956cc.jpg', description: 'Image 72' },
      { url: 'https://cdp.azureedge.net/products/USA/HD/2020/MC/CRUISER/ROADSTER/50/PERFORMANCE_ORANGE/2000000008.jpg', description: 'Image 73' },
      { url: 'https://cdp.azureedge.net/products/USA/HD/2020/MC/CRUISER/ROADSTER/50/PERFORMANCE_ORANGE/2000000017.jpg', description: 'Image 74' }
    ],
  },
  {
    make: 'Royal Enfield',
    model: 'Interceptor 650',
    year: 2021,
    mileage: 1000,
    description: 'Classic Retro',
    category: 'Retro',
    bikePricePerDay: 75.00,
    availability: true,
    images: [
      { url: 'https://www.theindianwire.com/wp-content/uploads/2021/03/2021-Royal-Enfield-Interceptor-650.jpg', description: 'Image 75' },
      { url: 'https://img3.stcrm.it/images/24523358/2000x/annunciomymoto.jpg', description: 'Image 76' },
      { url: 'https://www.njuskalo.hr/image-w920x690/cestovni-motori/royal-enfield-interceptor-650-sunset-strip-my21-slika-157897897.jpg', description: 'Image 77' }
    ],
  },
  {
    make: 'Moto Guzzi',
    model: 'V7 III Stone',
    year: 2020,
    mileage: 1200,
    description: 'Classic Retro',
    category: 'Retro',
    bikePricePerDay: 78.50,
    availability: true,
    images: [
      { url: 'https://www.motorcyclespecs.co.za/Gallery_M-Z_16/moto-guzzi-v7-stone-centenario-21-03.jpg', description: 'Image 78' },
      { url: 'https://img1.stcrm.it/images/24023503/HOR_STD/1000x/moto-guzzi-v7-stone-centenario-2021-04.jpg', description: 'Image 79' },
      { url: 'https://ridermagazine.com/wp-content/uploads/2021/06/LC3_6509_1200x800.jpg', description: 'Image 80' }
    ],
  },
  // Touring bikes
  {
    make: 'Honda',
    model: 'Gold Wing Tour',
    year: 2022,
    mileage: 800,
    description: 'Luxury Touring',
    category: 'Touring',
    bikePricePerDay: 120.00,
    availability: true,
    images: [
      { url: 'https://www.honda.co.uk/engineroom/bikes/gold-wing-assen-road-trip/assets/gWaQEf858a/goldwing_1074x865-1074x865.png', description: 'Image 81' },
      { url: 'https://assets.allautoexperts.com/fileman/Honda_2022_Gold_Wing_.jpg', description: 'Image 82' },
      { url: 'https://powersports.honda.com/street/touring/gold-wing/-/media/products/family/gold-wing/gallery/extended/gold-wing-automatic-dct/2022/2022-gold-wing-gallery-03-2400xauto.jpg', description: 'Image 83' }
    ],
  },
  {
    make: 'BMW',
    model: 'K1600GT',
    year: 2021,
    mileage: 1000,
    description: 'Luxury Touring',
    category: 'Touring',
    bikePricePerDay: 130.25,
    availability: true,
    images: [
      { url: 'https://gearopen.com/wp-content/uploads/2020/08/2021-BMW-K-1600-Grand-America-First-Look-cruiser-motorcycle-touring-1-1536x1024-1.jpg', description: 'Image 84' },
      { url: 'https://cdn-0.totalmotorcycle.com/wp-content/uploads/2020/07/2021-BMW-K1600-Grand-America2.jpg', description: 'Image 85' },
      { url: 'https://www.totalmotorcycle.com/wp-content/uploads/2019/07/2020-BMW-K1600GT5.jpg', description: 'Image 86' }
    ],
  },
  {
    make: 'Harley-Davidson',
    model: 'Electra Glide Standard',
    year: 2021,
    mileage: 1500,
    description: 'Touring',
    category: 'Touring',
    bikePricePerDay: 110.75,
    availability: true,
    images: [
      { url: 'https://mmagazin.mk/wp-content/uploads/2021/04/Harley-Davidson-Electra-Glide-Revival-2021.jpg', description: 'Image 87' },
      { url: 'https://cdp.azureedge.net/products/USA/HD/2021/MC/TOUR/ELECTRA_GLIDE_REVIVAL/50/HI-FI_BLUE_-_BIRCH_WHITE/2000000002.jpg', description: 'Image 88' },
      { url: 'https://journal.classiccars.com/media/2021/05/210045_MY21_FLH_ElectraGlideRevival_Ridng_JK_0346-1280x982.jpeg', description: 'Image 89' }
    ],
  },
  {
    make: 'Kawasaki',
    model: 'Versys 1000 SE LT+',
    year: 2022,
    mileage: 800,
    description: 'Sport Touring',
    category: 'Touring',
    bikePricePerDay: 115.90,
    availability: true,
    images: [
      { url: 'https://cdn-0.totalmotorcycle.com/wp-content/uploads/2021/10/2022-Kawasaki-Versys-1000-SE-LT3-1024x768.jpg', description: 'Image 90' },
      { url: 'https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/17893651-0-112343961.png', description: 'Image 91' },
      { url: 'https://cdp.azureedge.net/products/USA/KA/2022/MC/TOURING/VERSYS_1000_SE_LT-/50/METALLIC_DIABLO_BLACK_-_METALLIC_FLAT_SPARK_B/2000000004.jpg', description: 'Image 92' }
    ],
  },
  {
    make: 'Yamaha',
    model: 'FJR1300ES',
    year: 2019,
    mileage: 1800,
    description: 'Sport Touring',
    category: 'Touring',
    bikePricePerDay: 125.50,
    availability: true,
    images: [
      { url: 'https://cdp.azureedge.net/products/USA/YA/2019/MC/SUPRSPRTTR/FJR1300ES/50/MATTE_PHANTOM_BLUE/2000000002.jpg', description: 'Image 93' },
      { url: 'https://crs1.powersporttechnologies.com/photogallery/Yamaha/2019_Yamaha_FJR_1300ES_BLU.jpg', description: 'Image 94' },
      { url: 'https://motorcyclemojo.com/wp-content/gallery/yamaha-2019/2019_FJR1300ES_Blue_A9.jpg', description: 'Image 95' }
    ],
  },
];

module.exports = bikesData;




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
