# BerryHealthy Backend

## Set up Instructions
1. Make sure you are in the backend folder
2. Run `npm install` to install the dependencies
3. `cd` into the `Seeds` folder and run these in order
```sh
node children_seeds.js
node parents_seeds.js 
```
4. `cd ..` to return to the backend folder
5. Run `npm run start:dev` to start nodemon port 3000

** If you don't have mongodb installed, follow these steps **

For Mac Users, run the following commands in your macOS Terminal
```sh
brew tap mongodb/brew
brew update
brew install mongodb-community@6.0
brew services start mongodb-community@6.0
```
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/

#### Firebase Instructions
npm install -g firebase-tools
