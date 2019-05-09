//this tool is used to test smtp server
const SMTPClient = require('smtp-client').SMTPClient;
let smtpClient = new SMTPClient({
	host:"localhost",
	port: 25
});
(async function(){
	await smtpClient.connect();
	await smtpClient.greet({hostname:"localhost"});
	await smtpClient.mail({from:"vinht@omnix.com.au"});
	await smtpClient.rcpt({to:"support@omnix.com.au"});
	await smtpClient.data("this is a test data");
	await smtpClient.quit();
})().catch(console.error);