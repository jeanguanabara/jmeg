const bcryptjs = require('bcryptjs');
const senhaCriptografada = '$2a$10$X.Xqh4dPjupQAky1bhQnM.vaJOW9QT77FQqexfK4tNnl5BuBNExRO'

const confere = bcryptjs.compareSync('122', senhaCriptografada)

const hash = bcryptjs.hashSync('123', 10)



console.log(hash)


console.log(confere)








