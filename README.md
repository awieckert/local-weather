# Local-Weather

# Description
The goal of this exercise was to introduce us to working with API's and persistent databases, specifically Firebase.

We were task with allowing a user to check the weather of a given US zip code. Upon return of the current weather, the user should be able to view three day and five day forecasts.

Our users needed to be able to save forecasts they thought were interesting.... yes....interesting. The user should be able to mark the forecast as frightening by clicking a button, in this case a frowny face.

New users needed to be able to register for our site and login. Each user should only be able to see their saved forecasts and not others.

A user should be able to log out of the site when finished looking at forecasts.

# Screenshots
Sign-in Page <br>
![homepage](https://raw.githubusercontent.com/awieckert/local-weather/master/img/Screenshot%20(21).png)

Create Account <br>
![homepage](https://raw.githubusercontent.com/awieckert/local-weather/master/img/Screenshot%20(32).png)

Current Weather <br>
![homepage](https://raw.githubusercontent.com/awieckert/local-weather/master/img/Screenshot%20(22).png)

Three Day Forecast <br>
![homepage](https://raw.githubusercontent.com/awieckert/local-weather/master/img/Screenshot%20(23).png)

Five Day Forecast <br>
![homepage](https://raw.githubusercontent.com/awieckert/local-weather/master/img/Screenshot%20(24).png)

Saved Forecasts <br>
![homepage](https://raw.githubusercontent.com/awieckert/local-weather/master/img/Screenshot%20(25).png)

Home Page <br>
![homepage](https://raw.githubusercontent.com/awieckert/local-weather/master/img/Screenshot%20(26).png)

Frightening forecast on frowny face click <br>
![homepage](https://raw.githubusercontent.com/awieckert/local-weather/master/img/Screenshot%20(27).png)

Delete Saved Forecast <br>
![homepage](https://raw.githubusercontent.com/awieckert/local-weather/master/img/Screenshot%20(29).png)

Logout <br>
![homepage](https://raw.githubusercontent.com/awieckert/local-weather/master/img/Screenshot%20(30).png)

Logout bring you to the Sign-in Page <br>
![homepage](https://raw.githubusercontent.com/awieckert/local-weather/master/img/Screenshot%20(21).png)

# How to run
This site is deploy on firebase and can be found at `https://local-weather-900ce.firebaseapp.com/`
This project can also be used by following the instructions below
1. Requires node.js
1. Requires git bash
1. Requires grunt with browserify module.
1. clone down this repo https://github.com/awieckert/local-weather
1. type the following commands:
1. cd into `/lib`
1. `npm init`
1. `npm install grunt matchdep grunt-contrib-watch grunt-browserify gruntify-eslint --save-dev`
1. `grunt`
1. In bash terminal `npm install http-server`
1. in exTracker/ local directory
1. type `hs -p 8080` into terminal
1. In browser navigate to `localhost:8080`
1. enter following command if nothing is displayed `ctrl + shift + r`

# Contributors
Planning: <br>
Tom,<br>
Ana,<br>
Mary,<br>
[Adam Wieckert](https://github.com/awieckert)

Code:<br>
[Adam Wieckert](https://github.com/awieckert)