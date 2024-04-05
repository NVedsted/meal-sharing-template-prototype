import express from "express";
import knex from "../database.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("title");
    response.json(titles);
  } catch (error) {
    response.status(500).send("Internal server error");
    console.error(error);
  }
});

export default router;
