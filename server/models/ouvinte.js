
const db = require("./index")

const ouvinte = db.sequelize.define("ouvinte", {
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    },
    instituicao:{
        type: db.Sequelize.STRING
    },
    funcao:{
        type: db.Sequelize.STRING
    }
})


module.exports = ouvinte