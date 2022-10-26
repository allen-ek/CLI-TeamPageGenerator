//Template for Engineer Card
function engineerCards(data){
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${data.getRole()}:${data.getName()}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Id:${data.getId()}</li>
        <li class="list-group-item">Email:<a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
        <li class="list-group-item">Github:<a href="https://www.github.com/${data.getGithub()}" target= "_blank">${data.getGithub()}</a></li>
      </ul>
</div>
  `
}
//Templeate for intern card
function internCards(data){
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${data.getRole()}:${data.getName()}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Id:${data.getId()}</li>
        <li class="list-group-item">Email:<a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
        <li class="list-group-item">School:${data.getSchool()}</li>
      </ul>
</div>
  `
}
//Template for manager card
function managerCards(data) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${data.getRole()}:${data.getName()}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Id:${data.getId()}</li>
        <li class="list-group-item">Email:<a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
        <li class="list-group-item">Office Number:${data.getOfficeNumber()}</li>
      </ul>
</div>
  `
}
//creates the header
function templates(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Team</title>
    </head>
    <header>
    <div class="jumbotron jumbotron-fluid">
        <h1 class ="text-center">Team Profile</h1>
    </header>
    </div>
    <body>
       
${empCards(data)}
</body>
`}
//translates array of objects into relevant html card strings
function empCards(teamArr){
let htmlString = ''
  
    for(let i = 0; i < teamArr.length; i++ ) {
      if (teamArr[i].getRole() === "Manager"){
        htmlString = htmlString + managerCards(teamArr[i])
      }
      if (teamArr[i].getRole() === "Engineer"){
        htmlString = htmlString + engineerCards(teamArr[i])
      }
      if (teamArr[i].getRole() === "Intern"){
        htmlString = htmlString + internCards(teamArr[i])
      }
    } return htmlString
  }
  
  module.exports = templates;
