const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirth: {
     type: Date,
     required: true,
    }, 
    licenseDate: {
      type: Date, 
      required: true,
    },
      contracts: [{type: Schema.Types.ObjectId, ref: 'Contract'}],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// virtual property to compute age
userSchema.virtual('age').get(function() {
  const currentDate = new Date();
  const birthDate = new Date(this.dateOfBirth);
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDifference = currentDate.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
    return age - 1;
  }
  return age;
});

// virtual property to compute years driving
userSchema.virtual('yearsDriving').get(function() {
  const currentDate = new Date();
  const firstLicenseDate = new Date(this.licenseDate);
  const yearsDriving = currentDate.getFullYear() - firstLicenseDate.getFullYear();
  const monthDifference = currentDate.getMonth() - firstLicenseDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < firstLicenseDate.getDate())) {
    return yearsDriving - 1;
  }
  return yearsDriving;
});

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
