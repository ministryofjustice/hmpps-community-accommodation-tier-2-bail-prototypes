const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const riskCategories = require('../../../data/risks')

router.get('*', function (req, res, next) {
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
	const hasContext = Object.keys(riskCategories).find(category => {
		const slug = category.toLowerCase().replaceAll(/\W/g, '-')
		const question = req.session.data[slug];
		if (question) {
			return Object.keys(riskCategories[category]).find(risk => question.includes(risk)) !== undefined;
		} else {
			return false;
		}
	})

	if (hasContext !== undefined) {
		res.redirect('info-needed--context');
	} else {
		res.redirect('note');
	}
})

router.post('/fei/info-needed--context', (req, res, next) => {
	res.redirect('../dashboard');
})

router.post('/fei/note', (req, res, next) => {
	res.redirect('../dashboard');
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

router.post('/rejection/area-unsuitable--transport', (req, res, next) => {
	res.redirect('../dashboard');
})

router.post('/rejection/ineligible', (req, res, next) => {
	res.redirect('../dashboard');
})

router.post('/rejection/suitable-property', (req, res, next) => {
	res.redirect('../dashboard');
})

router.post('/rejection/circumstances', (req, res, next) => {
	res.redirect('../dashboard');
})











// Add your routes above the module.exports line
module.exports = router
