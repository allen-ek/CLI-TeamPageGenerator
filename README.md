# CLI team profile html generator

# Authors

Allen Klein

- [Link to Site]( https://allen-ek.github.io/WeatherDash/)
- [Link to Github Repository](https://github.com/allen-ek/WeatherDash)

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
var requestURL="https://api.openweathermap.org/data/2.5/weather?q="+inputEl.value+"&appid=6cda419b1462d4e231cfcd1dac976851";
    fetch(requestURL)
        .then(function(response){
            
            return response.json();
        })
         .then(function(data){
```
The code snippet above was the code that allowed for retriving information through a fetch using a api key to retrive information from the Open Weather API.

![Site](Screenshot.png