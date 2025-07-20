# Booker Assessment #

This project uses [Playwright](https://playwright.dev/) for automated browser testing.

## Pre-Requisites ##

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Git (to clone the repository)

## Installation ##

### Clone the Repository ##
bash
git clone https://github.com/Anwar1206/Booker-Assessment.git
cd Booker-Assessment

### Install Dependencies ###

* bash
* npm install

### Install Playwright Browsers ###

* bash
* npx playwright install

## Running the Tests ##

### To run all tests using Playwright Test: ###
* bash
* npx playwright test

### To run a specific file: ###
* bash
* npx playwright test tests/example.spec.ts

### To run in headed mode: ###
* bash
* npx playwright --headed

## To run with debugging enabled: ##
* bash
* npx playwright test --debug

## Project Structure ##

Booker-Assessment/

├── tests/                
├── playwright.config.ts  
├── package.json          
└── README.md             