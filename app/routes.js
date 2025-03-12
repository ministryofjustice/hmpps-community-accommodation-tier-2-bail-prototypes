
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



// Eligibility route
router.post('/beta/v2/eligibility-answer', (req, res) => {
	// Make a variable and give it the value from 'know-nhs-number'
	const eligibility = req.session.data['eligibility'];
	
	// Check whether the variable matches a condition
	if (eligibility === 'no') {
	  // Send user to next page
	  res.redirect('/beta/v2/ineligible');
	} else {
	  // Send user to ineligible page
	  res.redirect('/beta/v2/consent');
	}
  });
  

  // Consent route
router.post('/beta/v2/consent-answer', (req, res) => {
	// Make a variable and give it the value from 'know-nhs-number'
	const consent = req.session.data['consent'];
	
	// Check whether the variable matches a condition
	if (consent === 'no') {
	  // Send user to next page
	  res.redirect('/beta/v2/ineligible-consent');
	} else {
	  // Send user to ineligible page
	  res.redirect('/beta/v2/task-list-start');
	}
  });