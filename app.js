/** @format */

const express = require("express");

const app = express();

app.get("/health", (req, res) => {
    res.status(200).send("Hello World!");
});

// == Global error-handler == //
app.use((err, req, res, next) => {
    const errObj = {
        message: err?.message || "Someting went wrong",
        status: err?.status || 500,
    };
    console.error(err);
    res.status(errObj.status).json(errObj);
});

module.exports = app;
