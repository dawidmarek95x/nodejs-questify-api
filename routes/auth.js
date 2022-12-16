const express = require("express");
const router = express.Router();

// Przykład poprawnego routingu:
// router.post("/register", validateRegistration, register);
// gdzie:
// validateRegistration - middleware w postaci metody (funkcji) dla walidacji formularza rejestracji
// register - kontroler w postaci metody (funkcji) obsługującej żądane zapytanie

module.exports = router;