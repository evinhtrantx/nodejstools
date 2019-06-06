const SMTPServer = require("smtp-server").SMTPServer;
const fs = require("fs");
var fileIndex = 0;
const tmpData = "c:/tmp/smtp-"
const localhost = new SMTPServer({
	onData (stream,session,callback){
		console.log("Data comming");
		var outfile = tmpData + fileIndex + ".eml";
		var output = fs.createWriteStream(outfile);
		stream.pipe(output);
		console.log("Done writing to:" + outfile);
		fileIndex++;
	},
	
	authOptional:true
});
localhost.listen(2500,"localhost",function(){
	console.log("listening on port 2500");
	
});
