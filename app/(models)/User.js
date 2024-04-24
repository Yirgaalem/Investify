import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    // stock: String,
    // crypto: String,
     stock: 
    [{
      stockName: String,
      amount: Number,
      purchasePrice: Number,
    }],
    crypto: 
    [{
      cryptoName: String,
      amount: Number,
      purchasePrice: Number,
    }],
    // picture: Image,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;