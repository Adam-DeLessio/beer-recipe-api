const Recipe = require('../model/Recipe')

module.exports = {
	index: (req, res) => {
		Recipe.find({}).then((recipe) => {
			res.json(recipe)
		})
	}
}