# Uniting Gamers App: Backend

## Contents
1. Authors
2. Installation
3. Usage
4. File Structure
5. Bugs
6. License

## Authors
- Jaakulan Subeethakumar
- Hamzah Shahid
- Arjun Sahni
- Thomas Tsangaris
- Herjot Dhaliwal

## Installation
1. Download or clone this repo
2. Ensure you have NodeJS and npm working on your machine. You can install them from [nodejs.org](https://nodejs.org/en/download/)
3. Install dependencies.

```
npm install
```

## Usage
Run the app locally by running
```
npm start
# or
expo start
```
then follow the directions from the metro bundler. 

To deploy the app for deveopment purposes, follow the deployment instructions in the metro bundler. This will allow anyone with the link to open the app through Expo Go, even if they are not running on the same machine or connected to the same LAN.

## Database

The database we currently use is hosted on AWS 

## File Structure
In the root of the frontend folder:
1. `Server.js`: is the entry point for the server, the port and routes are set up here.

2. `routes`: This folder contains the routers used to define the routes for different endpoints

3. `models`: This folder contains the data required to connect to the database. This includes the file for connecting to the database as well as the the the database logic used by the endpoints.
4. `controllers`: This folder contains controller used to handle file I/O for the image endpoint, this also uses the 'uploads' folder to store uploaded images.
5. `config`: This folder contains the config info for the db and the external apis we use
6. `test-html`: This contains html code which can be used to upload an image to the server as it was not implemented on the front end


## Bugs
1. Create gamecard is not currently in working condition as it still has an issue

## License
[MIT](https://opensource.org/licenses/MIT)
