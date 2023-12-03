const db = require("./index")

const organizador = db.sequelize.define("organizador", {
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    }
})


module.exports = organizador