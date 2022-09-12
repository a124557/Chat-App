const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      default: "https://img.icons8.com/ios-glyphs/344/user--v1.png",
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async (enteredPass) => {
  return await bcrypt.compare(enteredPass, this.password);
};

//Before saving we run the following function to encrypt user passwords
userSchema.pre("save", async function (next) {
  //If current password is not modified we will run next()
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
