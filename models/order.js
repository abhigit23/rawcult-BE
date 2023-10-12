const mongoose = require("mongoose");

const singleOrderItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: Array, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    tax: {
      type: Number,
      required: true,
    },

    shippingFee: {
      type: Number,
      required: true,
    },

    subtotal: {
      type: Number,
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },

    orderItems: [singleOrderItemSchema],

    status: {
      type: String,
      enum: ["pending", "failed", "paid", "delivered", "cancelled"],
      default: "pending",
    },

    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },

    clientSecret: {
      type: String,
    },
    paymentIntentId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
