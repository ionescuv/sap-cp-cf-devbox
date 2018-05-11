const { spawn } = require('child_process');
const ENV_FILE = "/env.json";
const JS_FILE = "start.js";

function getEnvironment(path){
	envConfig = require("./" + path + ENV_FILE);

	try {
		for (const key in envConfig) {
			console.log("Preparing environment: " + key);
			if (typeof envConfig[key] != "string")
				envConfig[key] = JSON.stringify(envConfig[key]);
		}
	} catch (err) {
		console.error(err);
	}
	return envConfig;
}


module.exports = function(path) {
	console.log(`Spawning new process [${path}]`);
	
	environment = getEnvironment(path);
	
	const ls = spawn('node', [JS_FILE], {
		cwd: "runLocal/" + path,
		env: environment
	});
	
	console.log("..done");	

	ls.stdout.on('data', (data) => {
	  console.log(`[CHILD STDOUT]: ${data}`);	  
	});

	ls.stderr.on('data', (data) => {
	  console.log(`[CHILD STDERR]: ${data}`);
	});

	ls.on('close', (code) => {
	  console.log(`child process exited with code ${code}`);
	});
	
	ls.on('error', (err) => {
	  console.log('Failed to start subprocess.' + err);
	});

}