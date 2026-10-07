const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Allow the server to receive JSON data
app.use(express.json());

// Allow the server to receive normal HTML form data
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "ELICAN Forms API is running!"
    });
});

// Contact form endpoint
app.post("/api/contact", (req, res) => {

    const { name, email, message } = req.body;

    console.log("New message received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({
        success: true,
        message: "Your message was received successfully."
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
