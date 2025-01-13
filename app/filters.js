//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter
const addFunction = govukPrototypeKit.views.addFunction
const riskCategories = require('./data/risks')

addFilter('cleanArray', (array) => {
	return array.filter(item => {
		return (item && (item !== ""))
	})
})

addFilter('push', (array, item) => {
	array.push(item)
	return array
})

addFunction('slugify', (string) => {
	return string.toLowerCase().replaceAll(/\W/g, '-')
})

addFunction('riskCategories', () => {
	return riskCategories
})
