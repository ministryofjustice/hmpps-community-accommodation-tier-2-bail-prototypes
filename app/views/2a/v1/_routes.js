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
	} else if (req.session.data['status'] == 'Referral cancelled') {
		res.redirect('rejection/reason');
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





// Rejection

router.post('/rejection/reason', (req, res, next) => {
	if (req.session.data['reason'] == 'Too high risk / ineligible') {
		res.redirect('ineligible');
	} else if (req.session.data['reason'] == 'No suitable property available') {
		res.redirect('suitable-property');
	} else if (req.session.data['reason'] == 'No suitable area available') {
		res.redirect('area-unsuitable');
	} else if (req.session.data['reason'] == 'Change of circumstances') {
		res.redirect('circumstances');
	} else { next() }
})

router.post('/rejection/area-unsuitable', (req, res, next) => {
	let question = req.session.data['unsuitable-area']

	if (question) {
		if (question.includes('Transport time / cost')) {
			res.redirect('area-unsuitable--transport');
		} else {
			next();
		}
	} else { next() }
})











// Add your routes above the module.exports line
module.exports = router