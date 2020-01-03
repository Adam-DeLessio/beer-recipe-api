const mongoose = require('mongoose')
// const mongoURL = 'mongodb://localhost/api-project'
let mongoURI = ''
mongoose.Promise = Promise

if (process.env.NODE_ENV === 'production') {
	mongoURI = process.env.DB_URL
} else {
	mongoURI = 'mongodb://localhost/beer-recipe-api'
}

mongoose.connect(mongoURI, {
	useNewUrlParser : true,
    useUnifiedTopology: true
})
	.then( feedback => console.log('connected') )
	.catch( err => console.log('connection failed', err) )

module.exports = mongoose