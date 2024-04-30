# Uniting Gamers App: Frontend

## Contents
1. Authors
2. Installation
3. Usage
4. File Structure
5. Bugs
6. License

## Authors
- Jaakulan Subeethakumar
- Jennifer Alexandra Thompson
- Nada El-Falou

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

## File Structure
In the root of the frontend folder:
1. `App.js`: the main file, envoked when app is run. It sets up all app screens and organises them in the stack to allow navigation between screens.

2. `Navigation.js`: App.js helper, organises navigation between screens in the hamburger menu navigation bar.

3. `app/`: directory containing app screens, components, assets and helpers
    1. `assets/`: contains all images needed for frontend of app, organised by which screen the image belongs to.
    2. `components`: contains `*.js` files for individual components in screens to allow for flexibility in app modification. Organised by which screen the component is used in.
    3. `helpers/`: helper functions, mainly contains regex functions for login and signup pages.
    4. `screens/`: contains the main screens or pages of the app, which `App.js` referred to. These screens in turn use the assets, components and helpers mentioned above.

## Bugs
1. Profile componenets overlap / need formatting on IOS.
2. AddGamecard page is off format in Android to accomodate the sizes in IOS. Need to make the format different for each operating system.
3. There was an issue with integrating the functionality to upload a profile and background image for the user.
4. AddGamecard button errors.

## Next Steps
1. Everywhere you make a request to the server, add a Auth header to the request using the token string in AsyncStorage.getItem('token') appended to the string Bearer. Here is an example: 
```
axios.post(url, headers: { 'Authorization': 'Bearer ' + 'AsyncStorage.getItem('token') }, body)
```
2. In server.js, add the checkToken middleware for all the routers other than the authentication router, example:
```
app.use('/api/games', checkToken, gamesRouter);
```
3. Passwords are currently stored as plain string for ease of testing, once ready, apply your preferred encryption algorithm and make the necessary changes.
4. To add SignOut, simply send the user to login and clear the AsyncStorage
5. Upload profile page needs to be intengrated.

## License
[MIT](https://opensource.org/licenses/MIT)
