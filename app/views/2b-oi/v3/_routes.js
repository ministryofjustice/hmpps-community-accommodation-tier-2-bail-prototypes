const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('*', function(req, res, next){
	// Change the service name for this whole feature
	res.locals['serviceName'] = 'Short-Term Accommodation (CAS-2) Bail'

	next()
})

router.post('/lookup', function (req, res) {
	res.redirect('confirm');
})

router.post('/confirm', function (req, res) {
	res.redirect('reason');
})

router.post('/reason', (req, res) => {
	if (req.session.data['reason'] == 'Applicant was ineligible or too high risk') {
		res.redirect('unsuitable');
	} else if (req.session.data['reason'] == 'No suitable beds') {
		res.redirect('no-beds');
	} else {
		res.redirect('submitted');
	}
})

router.post('/unsuitable', function (req, res) {
	res.redirect('submitted');
})

router.post('/no-beds', function (req, res) {
	res.redirect('submitted');
})


// Add your routes above the module.exports line
module.exports = router