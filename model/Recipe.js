const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const express = require('express')

const RecipeSchema = new Schema({
	id: Number,
    name: {
        type: String,
        required: true
    }
    tagline: String,
    first_brewed: String,
    description: String,
    image_url: String,
    abv: Number,
    ibu: Number,
    target_fg: Number,
    target_og: Number,
    ebc: Number,
    srm: Number,
    ph: Number,
    attenuation_level: Number,
    volume: {
        value: Number,
        unit: String
    },
    boil_volume: {
        value: Number,
        unit: String
    },
    method: {
        mash_temp: [
        {
            temp: {
                value: Number,
                unit: String
            },
            duration: Number
        }
    ],
    fermentation: {
        temp: {
            value: Number,
            unit: String
        }
    },
    twist: String
    },
    ingredients: {
        malt: [
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                }
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                }
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                }
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                }
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                }
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                }
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                }
            }   
        ],
        hops: [
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                },
                add: String,
                attribute: String
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                },
                add: String,
                attribute: String
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                },
                add: String,
                attribute: String
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                },
                add: String,
                attribute: String
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                },
                add: String,
                attribute: String
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                },
                add: String,
                attribute: String
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                },
                add: String,
                attribute: String
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                },
                add: String,
                attribute: String
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                },
                add: String,
                attribute: String
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                },
                add: String,
                attribute: String
            },
            {
                name: String,
                amount: {
                    value: Number,
                    unit: String
                },
                add: String,
                attribute: String
            }
        ],
        yeast: String
    },
    food_pairing: Array,
    brewers_tips: String,
    contributed_by: String
})

const Recipe = mongoose.model('Recipe', RecipeSchema)
module.exports = Recipe



      