import app from "./server.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT || 8000;

const options = {
    autoIndex: false, // Don't build indexes
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity,
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

mongoose
    .connect(process.env.DB_URI, options)
    .then(() => {
        app.listen(port, () => {
            console.log(`Serving on port ${port}`);
        });
    })
    .catch((err) => console.log("error"));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
