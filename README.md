# Star Wars Demo Project

![Star Wars Demo](https://github.com/theluxaz/star-wars-task/blob/master/src/static/demo.png?raw=true)


## About The Project

This project was created as an example in order demonstrate frontend development skills. It was created in 2 days, with all of the functionality developed on day 1. CSS, tests and cleanup were finished up on day 2.

It includes:
* React 
* Typescript
* Page Routing
* Mobile Functionality
* API Handling
* UI Creation
* Redux Storage
* Unit Test Coverage



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

The following must be installed to run this project locally on your machine.
* Node.js
* Npm (or Yarn)

### Installation

The following describes how to install the required tools to run this project.

1. Clone the repo
   ```sh
   git clone https://github.com/theluxaz/star-wars-task.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```


## Usage

To run the project locally, please use:

```sh
   npm start
   ```

To run the tests provided with coverage, use

```sh
   npm run test:coverage
   ```

## Troubleshooting

Please wait patiently as some API calls to https://swapi.dev/ take a long time to be served. While running locally CORS issues may also appear.

The https://swapi.dev/ free API sometimes cannot handle many character requests and starts throttling them. To avoid this, a "Testing" mode is available which reduces the amount of character API calls to their servers and loads the films statically. 

To enable this, please set the variable TESTING in constants.ts to True.

```sh
   export const TESTING = true
   ```

## Roadmap

* Refactor Films.tsx 
* Additional tests for full coverage
* Fix double clicking bugs

## License

Distributed under the MIT License.
