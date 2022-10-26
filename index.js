const inquirer = require('inquirer');
const Employee=require('./lib/Employee');
const Engineer=require('./lib/Engineer');
const Intern=require('./lib/Intern');
const Manager=require('./lib/Manager');
const fs = require('fs');
const filewriter=require('./src/filewriter');
const templates = require('./src/templates');
var team=[];
//function call to start the application
start();

//function to start the prompt
function start(){
    return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 
      
       `What is the team manager's name?`,
    },
    {
        type: 'input',
        name: 'id',
        message: 
        `What is the team manager's id?`,
      },
      {
        type: 'input',
        name: 'ofnumber',
        message: 
        `What is the team manager's office number?`,
      },
      {
        type: 'input',
        name: 'email',
        message: 
        `What is the team manager's email?`,
      }]).then(answers=>{
        //pushes Manager object into team array
        answers=new Manager(answers.name,answers.id,answers.email,answers.ofnumber)
        addMembers();
        team.push(answers);
        
      });
}//end of start function

//Function to loop team members and push to array
function addMembers(){
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: `What employee would you like to add? Choose Done if no more employees?`,
      choices:['Engineer','Intern','Done'],
      default:['Engineer'],  
    }
    
  ]).then((answers)=>{
    if (answers.employee === "Engineer"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What is engineer's name?`
        },
        {
          type: "input",
          name: "id",
          message: `What is engineer's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `What is engineer's email?`
        },
        {
          type: "input",
          name: "github",
          message: `What is engineer's GitHub??`
        }
      ]).then((answers)=>{
        //pushes Engineer object into team array
        answers = new Engineer(answers.name, answers.id, answers.email,answers.github);
        team.push(answers)
        addMembers();
      })
    }
    if (answers.employee === "Intern"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What is intern's name?`
        },
        {
          type: "input",
          name: "id",
          message: `What is  intern's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `What is intern's email?`
        },
        {
          type: "input",
          name: "school",
          message: `What is intern's school?`
        }
      ]).then((answers)=>{
        //pushes intern object into team array
        answers = new Intern(answers.name, answers.id, answers.email,answers.school);
        team.push(answers)
        addMembers();
      })
    }
      //Populate templeates with relevant team array data and generates html    
        templates(team);
        filewriter(templates(team));
    return ;
  });    
}
    
  