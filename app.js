const inquirer = require('inquirer');

inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }])
    .then(answers => console.log(answers));


// console.log(inquirer)
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');


// const pageHTML = generatePage(name, github);
// const profileDataArgs = process.argv.slice(2);
// const profileDataArgs = process.argv.slice(2, process.argv.length);


// const [name, github] = profileDataArgs;
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// console.log(profileDataArgs);

// fs.writeFile('./index.html', pageHTML, err => {
// if (err) throw err;

// fs.writeFile('./index.html', generatePage(name, github), err => {
// if (err) throw new Error(err);

// console.log('Portfolio complete! Check out index.html to see the output!');
// });






// // Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//     });

//     console.log('================');

//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);