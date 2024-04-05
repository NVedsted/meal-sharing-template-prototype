import express from "express";
import ViteExpress from "vite-express";
import mealsRouter from "./api/meals.js";

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use("/api/meals", mealsRouter);

ViteExpress.config({ ignorePaths: (path) => path.startsWith("/api/") });
ViteExpress.listen(app, port, () =>
  console.log(`Server running on port ${port}!`)
);
