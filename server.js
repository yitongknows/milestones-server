import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blogs.js";

const app = express();

app.use(cors());
// our server get accept json as request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(methodOverride("_method"));

//set up routes
app.use("/blogs", blogRoutes);

app.use("*", (req, res) =>
    res.status(404).json({
        error: "Page not found",
    })
);

export default app;
