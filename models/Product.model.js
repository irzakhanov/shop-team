const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    brand: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Brand",
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
