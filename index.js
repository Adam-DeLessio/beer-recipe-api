const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const recipeRoutes = require('./routes/recipeRoutes')
const Recipe = require('./model/Recipe')

app.use(bodyParser.json())
app.use(cors())
app.use('/', recipeRoutes)


// Create new brewery
recipeRoutes.route('/create').post(function (req, res) {
  const recipe = new Recipe(req.body);
  recipe.save()
    .then(brew => {
      res.json(brew);
    })
    .catch(err => {
      res.status(400).send("failed");
    });
});

// Also create new brewery, not sure which way is correct
// app.post('/', (req, res) => {
// 	Brewery.create(req.body).then(brew => {
// 		res.json(brew)
// 	})
// })





// Get all breweries
// Example: http://localhost:6969/
app.get('/', (req, res) => {
	Recipe.find({}).then(brew => {
		res.json(brew)
	})
})

// Get brewery by name
// Example: http://localhost:6969/name/Back%20Bay%20Brewing%20Company
app.get('/name/:name', (req, res) => {
	Recipe.find({ name: req.params.name }).then(brew => {
		res.json(brew)
	})
})

// Get brewery by the short id number
// Example: https://mysterious-lowlands-53459.herokuapp.com/id/7082
app.get('/id/:id', (req, res) => {
	Recipe.find({ id: req.params.id }).then(brew => {
		res.json(brew)
	})
})

// Get brewery by id
// Example: http://localhost:6969/id/5e091e1336567ffd665821d9
// app.get('/id/:_id', (req, res) => {
// 	Recipe.findById(req.params._id).then(brew => {
// 		res.json(brew)
// 	})
// })

// Delete brewery by id ?
// app.delete('/id/:_id', (req, res) => {
// 	Recipe.findOneAndDelete({ _id: req.params._id }).then(brew => {
// 		res.json(brew)
// 	})
// })


app.set("port", process.env.PORT || 8080)

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get("port")} 🌟`)
})







