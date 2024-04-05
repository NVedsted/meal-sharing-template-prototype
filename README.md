<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://www.hackyourfuture.dk/static/logo-dark.svg" alt="Project logo"></a>
</p>

<h3 align="center">Meal Sharing</h3>

---

<p align="center">
Website for sharing meals together. Invite your best friends or your family for dinner!
</p>

Link to deployed website: TODO

## 🏁 Getting Started

### Environment variables

Secrets, e.g. passwords and usernames, must not be added to Git! Instead secrets are provided through environment variables. Environment variables are not committed to Git and have a key-value structure.

Remember to copy the `example.env` file, and rename the copied file to `.env`. In the `.env` file add the relevant host, database name, database user and pasword to your own local database. If you are unsure of these things then select your database in the Mysql Workbench. Now press `Database` -> `Manage Connections...`. Here you can see everything you need except the password. If you forgot that, reset it.

### Prerequisites

- Postman
- MySQL Workbench

### Installing

To install run `npm install`

## 🎈 Usage

To run `npm run dev`

The api can now be found on `http://localhost:3000/api/` an example is `http://localhost:3000/api/meals`

## ⛏️ Built Using

- [Mysql](https://www.npmjs.com/package/mysql) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ☁️ Deployment

[Deployment guide](https://github.com/HackYourFuture-CPH/deployment-guide)

## ✍️ Authors

- [@benna100](https://github.com/benna100) - Idea & Initial work
