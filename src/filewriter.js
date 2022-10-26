const fs = require('fs');

const filewriter = (fileContent) => {
	fs.writeFile('./dist/team.html', fileContent, (err) => {
		if (err) {
			console.log("Your team html file was not created");
		} else {
			console.log('Your team html file was created in the dist folder');
		}
	});
};

module.exports = filewriter;