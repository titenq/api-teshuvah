const mongoose = require('../../database');

const BibliaSchema = new mongoose.Schema({
  he: {
    livro: String,
    capitulo: String,
    versiculo: String,
    verso: String,
    require: false
  },
  pt: {
    livro: String,
    capitulo: String,
    versiculo: String,
    verso: String,
    require: false
  },
  tr: {
    livro: String,
    capitulo: String,
    versiculo: String,
    verso: String,
    require: false
  },
  comentario: String
},
{ collection: 'biblia' });

const Biblia = mongoose.model('Biblia', BibliaSchema);

module.exports = Biblia;
