const express = require('express');
const jwt = require('jsonwebtoken');
const RoutesPrivates = express.Router()

// MIDDLEWARE - AUTORIZATION JWT
RoutesPrivates.use((request, response, next) => {
    try {
        const token = request.headers.token || null;
        jwt.verify(token, 'SUA_CHAVE_TOKEN');
    } catch(e) {
        return response.status(500).json({
            message: 'Sem autorização ' + e 
        })
    }
    next();
})

RoutesPrivates.use(UserRoutes);

module.exports = RoutesPrivates;