
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

  //Fixed address
  router.post('/beta/v2/address-answer', (req, res) => {
	// Make a variable and give it the value from 'know-nhs-number'
	const address = req.session.data['address'];
	
	// Check whether the variable matches a condition
	if (address === 'no') {
	  // Send user to next page
	  res.redirect('/beta/v2/no-fixed-address');
	} else {
	  // Send user to ineligible page
	  res.redirect('/beta/v2/fixed-address-details');
	}
  });

  //Probation supervision route
  router.post('/beta/v2/probation-answer', (req, res) => {
	// Make a variable and give it the value from 'know-nhs-number'
	const probation = req.session.data['probation'];
	
	// Check whether the variable matches a condition
	if (probation === 'no') {
	  // Send user to next page
	  res.redirect('/beta/v2/prev-conviction');
	} else {
	  // Send user to ineligible page
	  res.redirect('/beta/v2/probation');
	}
  });

    //OASys route
	router.post('/beta/v2/oasys-answer', (req, res) => {
		// Make a variable and give it the value from 'know-nhs-number'
		const oasys = req.session.data['oasys'];
		
		// Check whether the variable matches a condition
		if (oasys === 'yes') {
		  // Send user to next page
		  res.redirect('/beta/v2/oasys-new');
		} else {
		  // Send user to ineligible page
		  res.redirect('/beta/v2/prev-conviction');
		}
	  });

	   //Conviction route
	router.post('/beta/v2/conviction-answer', (req, res) => {
		// Make a variable and give it the value from 'know-nhs-number'
		const conviction = req.session.data['conviction'];
		
		// Check whether the variable matches a condition
		if (conviction === 'relevant') {
		  // Send user to next page
		  res.redirect('/beta/v2/add-prev-conviction');
		} else {
		  // Send user to ineligible page
		  res.redirect('/beta/v2/task-list-offence');
		}
	  });

	     //ACCT route
	router.post('/beta/v2/risks/acct-answer', (req, res) => {
		// Make a variable and give it the value from 'know-nhs-number'
		const acct = req.session.data['acct'];
		
		// Check whether the variable matches a condition
		if (acct === 'yes') {
		  // Send user to next page
		  res.redirect('/beta/v2/risks/add-acct');
		} else {
		  // Send user to ineligible page
		  res.redirect('/beta/v2/risks/violence-details');
		}
	  });

	       //Bail
	router.post('/beta/v2/bail-answer', (req, res) => {
		// Make a variable and give it the value from 'know-nhs-number'
		const bail = req.session.data['bail'];
		
		// Check whether the variable matches a condition
		if (bail === 'yes') {
		  // Send user to next page
		  res.redirect('/beta/v2/court');
		} else {
		  // Send user to ineligible page
		  res.redirect('/beta/v2/task-list-bail');
		}
	  });

	  	       //Prison application
	router.post('/beta/v2/type-answer', (req, res) => {
		// Make a variable and give it the value from 'know-nhs-number'
		const type = req.session.data['type'];
		
		// Check whether the variable matches a condition
		if (type === 'court') {
		  // Send user to next page
		  res.redirect('/beta/v2/start');
		} else {
		  // Send user to ineligible page
		  res.redirect('/beta/v2/start-prison');
		}
	  });

	  	  	       //Skip equality questions
	router.post('/beta/v2/equality-answer', (req, res) => {
		// Make a variable and give it the value from 'know-nhs-number'
		const skip = req.session.data['skip'];
		
		// Check whether the variable matches a condition
		if (skip === 'yes') {
		  // Send user to next page
		  res.redirect('/beta/v2/equality/disability');
		} else {
		  // Send user to ineligible page
		  res.redirect('/beta/v2/task-list-personal');
		}
	  });

	  router.post('/beta/v2/id-answer', function(request, response) {

		var exports = request.session.data['id-docs']
		if (exports.includes("None of these options")){
			response.redirect("/beta/v2/alt-id")
		} else {
			response.redirect("/beta/v2/task-list-funding")
		}
	})