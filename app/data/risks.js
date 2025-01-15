
const riskCategories = {
	'Health needs': {
		'Communication needs': {
			'Need and severity': {},
			'Info on independent living': {},
			'Support they have / will require': {},
		},
		'Learning difficulties': {
			'Need and effect on everyday life': {},
			'Medication / treatment': {},
		},
		'Mobility needs': {
			'Need and effect on everyday life': {},
			'Ability to use stairs': {},
			'Medication / treatment': {},
		},
		'Epilepsy': {
			'Frequency / recency of seizures': {},
			'When seizures typically occur (day, night, both)': {},
			'Medication / treatment': {},
		}
	},
	'Risk to self': {
		"Substance or alcohol abuse": {
			"Substances misused and methods": {},
			"Amount of consumption": {},
			"Medication / treatment": {},
			"Engagement with support whilst in custody": {},
			"Referral for community support": {},
		},
		"Mental health": {
			"Need, severity, and effect on everyday life": {},
			"Status of clinical diagnosis": {},
			"Ability to live independently / in shared accomodation": {},
			"Medication / treatment": {},
			"Engagement with support whilst in custody": {},
			"Referral for community support": {},
		},
		"Self-harm and suicide": {
			"Details of incidents (treatment required, methods)": {},
			"Current concerns": {},
			"Details of ACCT history (when opened/closed, reasons)": {},
			"Referral for community support": {},
		},
		"Exploitation (risk to self)": {
			"Known perpetrator(s)": {},
			"Nature of exploitation": {},
			"Safeguarding measures / restraining orders": {},
			"Areas to avoid": {},

		},
		"Domestic violence (victim)": {
			"Known perpetrator(s)": {},
			"Details of incidents": {},
			"Safeguarding measures / restraining orders": {},
			"Areas to avoid": {},
		},
		"Sex work": {
			"Details of incidents": {},
			"Risk in community": {},
			"Safeguarding measures / restraining orders": {},
			"Areas to avoid": {},
			"Support they have / will require": {},
		},
		"Media interest": {
			"Current concerns": {},
			"Areas to avoid": {},
		},
		"Isolation": {
			"Current concerns": {},
			"Safeguarding measures / restraining orders": {},
			"Areas to avoid": {},
			"Support they have / will require": {},
		}
	},
	'Risk of serious harm': {
		'Exploitation (risk to others)': {
			'Specific risk to others': {
				'Known victim(s)': {},
				'Public': {},
				'Shared accommodation residents': {},
			},
			'Nature of exploitation': {},
			'Safeguarding measures / Restraining orders': {},
			'Areas to avoid': {},
		},
		'Domestic violence (perpetrator)': {
			'Specific risk to others': {
				'Known victim(s)': {},
				'Ex- or future partners': {},
				'Family members': {},
			},
			'Details of incidents': {},
			'Safeguarding measures / Restraining orders': {},
			'Areas to avoid': {},
		},
		'Gang involvement': {
			'Specific risk to others': {
				'Staff': {},
				'Public': {},
				'Shared accommodation residents': {},
			},
			'Gang details: name, areas and/or rivals': {},
			'Safeguarding measures / Restraining orders': {},
			'Areas to avoid': {},
		},
		'Violent offences': {
			'Specific risk to others': {
				'Known victim(s)': {},
				'Public': {},
				'Shared accommodation residents': {},
				'Staff': {},
			},
			'Details of incidents': {},
			'Safeguarding measures / Restraining orders': {},
			'Name, relationship or location of victims': {},
		},
		'Drug supply offences': {
			'Specific risk to others': {
				'Applicant': {},
				'Public': {},
				'Drug users': {},
				'Shared accommodation residents': {},
			},
			'Details of incidents': {},
			'County lines involvement': {},
			'Safeguarding measures / Restraining orders': {},
			'Areas to avoid': {},
		},
		'Hate-related attitudes': {
			'Specific risk to others': {
				'Public': {},
				'Known victim(s)': {},
				'Staff': {},
				'Residents': {},
				'Ethnic minorities': {},
				'Religious groups': {},
				'LGBTQ+ community': {},
				'Women': {},
			},
			'Details of incidents': {},
			'Cell-sharing risk assessment (CSRA)': {},
		},
		'Acquisitive offending': {
			'Specific risk to others': {
				'Public': {},
				'Homeowners': {},
				'Shop owners / staff': {},
			},
			'Details of incidents': {},
			'Safeguarding measures / Restraining orders': {},
			'Areas to avoid': {},
		},
		'Cuckooing': {
			'Specific risk to others': {
				'Known victim(s)': {},
				'Public': {},
				'Shared accomodation residents': {},
				'Drug users': {},
			},
			'Details of incidents': {},
		},
		'Financial abuse or fraud': {
			'Specific risk to others': {
				"Known victim(s)": {},
				"Vulnerable adults": {},
				"Shared accomodation residents": {},
				"Ex- or future partners": {},
				"Family members": {},
			},
			'Details of incidents': {},
			'Safeguarding measures / Restraining orders': {},
			'Areas to avoid': {},
		},
		'Arson': {
			'Specific risk to others': {
				"Known victim(s)": {},
				"Public": {},
				"Shared accomodation residents ": {},
				"Staff": {},
				"Ex- or future partners": {},
				"Family members": {},
			},
			'Details of incidents': {},
			'Safeguarding measures / Restraining orders': {},
			'Areas to avoid': {},
		},
		'Weapons': {
			'Specific risk to others': {
				'Public': {},
				'Shared accomodation residents': {},
				'Staff': {},
			},
			'Details of incidents': {},
		},
		'Risk to staff': {
			"Specific risk to others": {
				"Staff": {},
				"Probation worker": {},
				"Other": {},
			},
			"Details of incidents": {},
			"If incidents occurred in supported accomodation": {},
			"License / Bail conditions": {},
			"Safeguarding measures / restraining orders": {},
			"Areas to avoid": {},
		},
		'Risk to property / criminal damage': {
			"Specific risk to others": {
				"Staff": {},
				"Public": {},
				"Shared accomodation residents": {},
			},
			"Details of incidents": {},
			"If incidents occurred in supported accomodation": {},
		},
	}
}

module.exports = riskCategories
