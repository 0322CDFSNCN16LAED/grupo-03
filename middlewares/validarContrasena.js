const { body } = require("express-validator");

module.exports = [
    body("name").notEmpty(),
    body("user").notEmpty(),
    body("mail").isEmail(),
    body("contrasena").isLength(10),
    body("confirmar").custom((value, extra) => {
        if (value !== extra.req.body.contrasena) {
            throw new Error("La Contraseña no coincide; favor intentar de nuevo");
        }
        return true;
    }),
];