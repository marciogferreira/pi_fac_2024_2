const Connection = require('../config/Connection')


require('../models/TypeUserModel')
require('../models/UserModel')
// CHAMA OS OUTROS MODELS

Connection.sync({ force: false })