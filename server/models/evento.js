const db = require('./index');

const evento = db.sequelize.define("evento",{
    organizador:{
        type: db.Sequelize.STRING
    },
    editorChefe:{
        type: db.Sequelize.STRING
    },
    nomeEvento:{
        type: db.Sequelize.STRING
    },
    categoria:{
        type: db.Sequelize.STRING
    },
    edicao:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    },
    inicio:{
        type: db.Sequelize.DATE
    },
    final:{
        type: db.Sequelize.DATE
    },
    area:{
        type: db.Sequelize.STRING
    },
    tipo:{
        type: db.Sequelize.STRING
    }
})

module.exports = evento;