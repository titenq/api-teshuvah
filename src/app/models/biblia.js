const mongoose = require('../../database');

const BibliaSchema = new mongoose.Schema({
  livro: String,
  capitulo: String,
  versiculo: String,
  verso: {
    he: {
      livro: String,
      capitulo: String,
      versiculo: String,
      verso: String
    },
    pt: {
      livro: String,
      capitulo: String,
      versiculo: String,
      verso: String
    },
    tr: {
      livro: String,
      capitulo: String,
      versiculo: String,
      verso: String
    },
    comentario: String
  }
},
{ collection: 'biblia' });

const Biblia = mongoose.model('Biblia', BibliaSchema);

module.exports = Biblia;
