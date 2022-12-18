const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./config/passport");

const indexRouter = require("./routes/index");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/", indexRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: `Use api on routes:
      /auth/register - User registration, POST: { email, password }
      /auth/login - User authentication, POST: { email, password }
      /auth/logout - Logout, POST: No content, [need auth middleware]
      /auth/refresh - Get new pair of tokens (use Bearer {refreshToken} instead of accessToken), POST: { sid }, [need auth middleware]

      /card - Create card, POST: { title, difficulty, category, date, time, type }, [need auth middleware]
      /card - Edit card, PATCH: { title, difficulty, category, date, time, type }, [need auth middleware]
      /card/:cardId - Delete card, DELETE, [need auth middleware]
      /card - Get all user card, GET, [need auth middleware]
      /card/complete/:cardId - Confirm that card is completed, PATCH, [need auth middleware]`,
    data: "Not found",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    data: "Internal Server Error",
  });
});

module.exports = app;
