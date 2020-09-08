const dotenv = require('dotenv');
const twilio = require('twilio');
dotenv.config();

const { SID: accountSid, KEY: TwilloAuthToken } = process.env;

twilio(accountSid, TwilloAuthToken);
const { MessagingResponse } = twilio.twiml;

class WhatsappBot {
	static async hi(req, res, next) {
		return res.status(200).send({
			message: 'hello world',
		});
	}
	static async exampleMsg(req, res, next) {
		const twiml = new MessagingResponse();
		const q = req.body.Body;
		const selectedMsg = req.session.pilihan;

		try {
			let msg = '';
			req.session.pilihan = q;

			if (!selectedMsg && q === 'hi') {
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

			res.set('Content-Type', 'text/xml');

			return res.status(200).send(twiml.toString());
		} catch (error) {
			return next(error);
		}
	}
}

module.exports = WhatsappBot;
