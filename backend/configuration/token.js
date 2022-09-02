//JWT (JSON Web Token is the package used to generate our token)
const jwt = require('jsonwebtoken');

/*Creating an anonymous function which takes id as a parameter
to generate a unique token*/
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

};

module.exports = generateToken;
