const teste = (res,req,next)=> {
    console.log('teste')
    console.log(res.url)
    return next()
}

module.exports = teste