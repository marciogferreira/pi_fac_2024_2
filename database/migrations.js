const Connection = require('../config/Connection')


require('../models/TypeUserModel')
require('../models/UserModel')
require('../models/TypePaymentModel')
require('../models/CategoryModel')
require('../models/ProductModel')
require('../models/OrdersModel')
require('../models/OrderItemsModel')
require('../models/TransactionsModel')
// CHAMA OS OUTROS MODELS

Connection.sync({ force: false })
