const mongoose = require('./connection')
const data = require('./recipes.json')
const Recipe = require('../model/Recipe')

Recipe.deleteMany({}).then(() => {
	Recipe
		.create(data).then((returnData) => {
			console.log(returnData)
			process.exit()
		})
		.catch((err) => {
			console.log("seed didn't work")
		})
})