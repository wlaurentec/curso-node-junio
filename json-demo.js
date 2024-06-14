const curso = require('./curso.json')

console.log(curso)

let infoCurso = {
  "title": "Curso Node",
  "description": "Curso de Node",
  "author": "wlaurentec",
  "url": "https://github.com/wlaurentec/curso-node-junio",
  "version": "1.0.0"
}

console.log(typeof infoCurso)

let infoCursoJSON = JSON.stringify(infoCurso)

console.log(infoCursoJSON)

let infoCursoJSONParse = JSON.parse(infoCursoJSON)

console.log(infoCursoJSONParse)
