//GET  /quizes/question
exports.question = function(req, res){
  res.render('quizes/question',  {pregunta: 'Capital de Italia'});
 };

// GET /quizes/answer
exports.answer = function(req, res) {
 if (req.query.respuesta==='Roma'){
  res.render('quizes/answer', {respuesta:'Correcto'});
  }else{
  res.render('quizes/answer', {respuesta: 'Incorrecto'});
  }
};
<<<<<<< HEAD
//GET  /author
exports.author = function(req, res){
  res.render('author',  {Autor: 'Autor de esta practica:Quiz-040776'});
=======
//GET  /autor
exports.author = function(req, res){
  res.render('author',  {Autor: 'Autor de esta practica:Quiz-040776'});
>>>>>>> ce2cf116dbcb72d4340cacd24626eb7a4f46016d
 };
