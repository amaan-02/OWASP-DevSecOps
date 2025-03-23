const express = require("express");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");

const app = express();

// Enable Cookie Parser for CSRF token storage
app.use(cookieParser());

// Enable CSRF protection
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);

app.get("/", (req, res) => {
    res.send(`CSRF Token: ${req.csrfToken()}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
