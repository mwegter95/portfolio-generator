const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);




// fs.writeFile('./index.html', pageHTML(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ]);
};

inquirer
    .prompt([
        
    ])
    .then(answers => console.log(answers));