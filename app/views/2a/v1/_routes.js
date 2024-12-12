const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('*', function(req, res, next){
	// Change the service name for this whole feature
	res.locals['serviceName'] = 'Short-Term Accommodation (CAS-2) Bail'

	next()
})

router.post('/status', (req, res, next) => {
	if (req.session.data['status'] == 'More information requested') {
		res.redirect('fei/info-needed');
	} else { next() }
})


// FEI

router.post('/fei/info-needed', (req, res, next) => {
	let question = req.session.data['info-needed']

	if (question) {
		if (question.includes('Health needs') || question.includes('Risk to self') || question.includes('Risk of serious harm')) {
			res.redirect('info-needed--details');
		} else {
			res.redirect('note');
		}
	} else { next() }
})

router.post('/fei/info-needed--details', (req, res, next) => {
	let question = req.session.data['health-needs']

	if (question) {
		if (question.includes('Communication needs') || question.includes('Learning difficulties / disabilities')  || question.includes('Mobility needs') || question.includes('Epilepsy')) {
			res.redirect('info-needed--context');
		} else {
			res.redirect('note');
		}
	} else { next() }
})

router.post('/fei/info-needed--context', (req, res, next) => {
	res.redirect('note');
})




// Add your routes above the module.exports line
module.exports = router