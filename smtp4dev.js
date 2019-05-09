const SMTPServer = require("smtp-server").SMTPServer;
const fs = require("fs");
const outfile = "C:/users/vinht/Documents/tmp/smtp1.txt";
const output = fs.createWriteStream(outfile);
const localhost = new SMTPServer({
	onData (stream,session,callback){
		stream.pipe(output);
	},
	
	authOptional:true
});
localhost.listen(25,"localhost",function(){
	console.log("listening on port 25");
	
});
