# Tech_Blog

## Note

This site is not fully finishedand functionally due to time issues.

## Description

The goal of this project was to build the frontend and backend of a tech blog website using routes, requests, and SQL database manipulation. The created websites acts as a blogging site where users can create and login with an amount using their email and a password, post about topics, and comment on other users posts. During this project I reviewed how to use routes and requests, practiced manipulating SQL databases, and used handlebars for creating dynamic webpages.

## Installation

The runtime Node.js must be installed, after which all necessary packages can be installed by typing "npm i" into the terminal. A SQL dialect and workbench must be installed as well, and it is recommended that MySQL be used as this is the version used during testing. For testing purposes the database should also be seeded by typing "node seeds/seeds.js" in the temrinal.

## Usage

The created website is intended to act as a blog site where users can create accounts, view and make posts, and comment on posts. To intialize the site the user should type "node server.js" in ther terminal. Upon going to the site's main page, the user should be a selection of posts from users and see a navbar with the site's title and the option to log in. Clicking the log in option should bring the user to a log in and account creation page, and after sucessfully filling in either field and hitting confirm the user should be brought to their personal dahsboard, which lists any posts they have made. While on their dashboard users should be able to create new posts, edit their existing posts, and delete their existing posts. While on the homepage, logged in users should be able to click on a post that is not their's and make a comment on it. Comment, much like posts, should be able to be deleted. Logged in users should be able to log out by clicking the log out button that replaces the log in button while logged in.

## Credits

N/A

## License

Please refer to the license in the repo

## Links and Images
Github Repo URL: https://github.com/fortu038/Tech_Blog
Deployed Site URL (may be down due to technical issues with host): https://techblog-production.up.railway.app/