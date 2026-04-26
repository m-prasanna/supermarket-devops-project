const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Backend API Running Successfully 🚀");
});

app.get("/api/products", (req, res) => {
    const products = [
        { id: 1, name: "Rice", price: 250 },
        { id: 2, name: "Milk", price: 180 },
        { id: 3, name: "Bread", price: 150 }
    ];

    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});