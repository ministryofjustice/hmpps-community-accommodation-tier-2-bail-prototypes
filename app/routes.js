
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const express = require('express');
const path = require('path');

router.use('/assets', express.static(path.join(__dirname, '/node_modules/@ministryofjustice/frontend/moj/assets')))


router.use("/:hypothesis/v:version", (req, res, next) => {
	try {
		return require(`./views/${req.params.hypothesis}/v${req.params.version}/_routes`)(req, res, next)
	} catch (e) { next() }
})

router.use('/', (req, res, next) => {
	// Add a local var if the prototype is running locally
	if (req.get('host').includes('localhost')) {
		res.locals.local = true

		// Grab the current URL for the remote prototype link
		res.locals.currentURL = req.url
	}

	next()
})