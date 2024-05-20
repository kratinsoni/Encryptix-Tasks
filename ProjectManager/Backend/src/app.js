import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, //by changing CORS_ORIGIN we can control which IPs are allowed and blocked
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public")); //serving static files

//routes import

import userRoutes from "./routes/user.routes.js";
import healthCheckRoutes from "./routes/healthcheck.routes.js";
import projectRoutes from "./routes/project.routes.js";

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/healthcheck", healthCheckRoutes);
app.use("/api/v1/projects", projectRoutes);

export { app };
