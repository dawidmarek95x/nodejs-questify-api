const express = require("express");
const router = express.Router();

// Przykład poprawnego routingu:
// router.post("/", authenticateUser, validateCreation, addCard);
// gdzie:
// authenticateUser - middleware w postaci metody (funkcji) sprawdzającej ważność tokena użytkownika
// validateCreation - middleware w postaci metody (funkcji) dla walidacji danych podanych do utworzenia nowej karty
// addCard - kontroler w postaci metody (funkcji) obsługującej żądane zapytanie

module.exports = router;