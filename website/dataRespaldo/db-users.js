const fs = require("fs");
const path = require("path");

const userFilePath = path.join(__dirname, "./users.json");

module.exports = {
    getAll: function () {
        return JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
    },
    
    saveAll: function (user) {      
        const fileTxt = JSON.stringify(user, null, 4);
        fs.writeFileSync(userFilePath, fileTxt);
    },
    getOne: function (id) {
        return this.getAll().find((p) => p.id == id);
    },
    findByEmail: function (email) {
        return this.getAll().find((p) => p.email == email);
    }
};
