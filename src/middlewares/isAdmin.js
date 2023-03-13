const isAdmin = (req, res, next) => {
    const { user } = req.session;

    if (user !== undefined) {
        return next()
        
    } else {
        return res.redirect("/")
    }

    
}

module.exports = isAdmin;