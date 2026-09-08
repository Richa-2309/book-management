const express = require("express");

const server = express();
const PORT = 8080;

// Global Middleware
server.use((req, res, next) => {
    console.log("Global Middleware");
    next();
});

server.use(express.static("public"));

// Route Middlewares
const firstMiddleware = (req, res, next) => {
    console.log("First Middleware");
    next();
};

const secondMiddleware = (req, res, next) => {
    console.log("Second Middleware");
    next();
};

// Root Routes
server
    .route("/")
    .get((req, res) => res.send("GET request is working"))
    .post((req, res) => res.send("POST request is working"))
    .put((req, res) => res.send("PUT request is working"))
    .delete((req, res) => res.send("DELETE request is working"));

// Routes with common middleware
const commonMiddleware = [firstMiddleware, secondMiddleware];

server.get("/send", ...commonMiddleware, (req, res) => {
    res.send("Send route is working");
});

server.get("/send2", ...commonMiddleware, (req, res) => {
    res.send("Send2 route is working");
});

// Start Server
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
