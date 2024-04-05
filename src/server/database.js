import knex from "knex";
import "dotenv/config";

const myKnex = knex({
  client: "pg",
  connection: process.env.PG_CONNECTION_STRING,
});

myKnex.raw("SELECT VERSION()").then(() => {
  console.log("Connected succesfully to the database!");
});

export default myKnex;
