const Sequelize = require('sequelize')
const sequelize = new Sequelize('jmeg','root','root', {
    host: 'localhost',
    dialect:'mysql'
})

sequelize.authenticate()
.then(()=> {
    console.log('Authentication successful')
})
.catch((error)=>{
    console.log('Error: ' + error)
})

module.exports = sequelize
