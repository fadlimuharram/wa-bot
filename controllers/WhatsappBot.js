import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config();

const { SID: accountSid, KEY: TwilloAuthToken } = process.env;

twilio(accountSid, TwilloAuthToken);
const { MessagingResponse } = twilio.twiml;

export default async (event, context) => {
	const twiml = new MessagingResponse();

	try {
		const dt = JSON.parse(
			'{"' + decodeURI(event.body.replace(/&/g, '","').replace(/=/g, '":"')) + '"}',
		);

		const q = dt.Body;
		let msg = 'abc';

		if (q === 'hi') {
			msg = '[1] untuk melihat jam [2] untuk melihat hari [3] untuk melihat bulan';
		} else {
			if (q === '1') {
				msg = 'jam';
			} else if (q === '2') {
				msg = 'hari';
			} else if (q === '3') {
				msg = 'bulan';
			}
		}

		twiml.message(msg);

		return twiml.toString();
	} catch (error) {
		return error.toString();
	}
};
