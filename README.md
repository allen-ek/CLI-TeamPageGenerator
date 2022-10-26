# CLI team profile html generator

# Authors

Allen Klein


- [Link to Github Repository](https://github.com/allen-ek/CLI-TeamPageGenerator)

## Why?
I wanted to create a command line profile generator for software teams. That takes inputted data about the team members from
the command line using the inquirer package.

## What I learned
I learned how to use Node js to create a command line application that will create and generate a html file.
The jest package to design and learn about test driven devopement as well as the inquirer package to get inputted information through the command line.
## Technologies Used
Bootstrap
Inquirer NPM
Node.js
Jest NPM
CSS
HTML

## Code Snippet
```html
class Employee{
    constructor(name,id,email){
        this.name=name;
        this.id=id;
        this.email=email;
    }
    // Getter
    getName() {
        return this.name;
    }

    getId(){
        return this.id;
    }
      
    getEmail(){
        return this.email;
    }
      
      getRole() {
        return 'Employee';
    }
}
```
The code snippet above was the code for the parent class of Engineer Intern and Manager. Which allowed these child classes to inherit some of the
methods and parameters.

