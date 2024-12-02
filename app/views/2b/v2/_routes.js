const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('*', function(req, res, next){
	// Change the service name for this whole feature
	res.locals['serviceName'] = 'Short-Term Accommodation (CAS-2) Bail'

	next()
})

router.post('/upload', function (req, res) {
	res.redirect('confirm');
})

router.post('/confirm', function (req, res) {
	res.redirect('submitted');
})



// Add your routes above the module.exports line
module.exports = router