const bcryptjs = require('bcryptjs');
const senhaCriptografada = '$2a$10$zYtkdszXnZQpViW4/n4f/uJE7eoYdDsrhqSeDw3NfwfbGyX/8GoSe'

const confere = bcryptjs.compareSync('123', senhaCriptografada)

const hash = bcryptjs.hashSync('456', 10)

console.log(hash)


console.log(confere)








