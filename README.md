# dex
A slack bot for checking how happy your team is

## Usage
Register the bot, provide the required token and setup your neo4j db.
Log on to the bot chat and type `help` for more information.

## Configuration

### Env variables
* SLACK_TOKEN: Your slack api token. (Defaults to "<token>")
* DB_USER:     Your db username. (Defaults to "neo4j")
* DB_PASSWORD: Your db password. (Defaults to "password")

## Notes

Make sure to either provide the ´SLACK_TOKEN´env variable or manually set it in `app/config/constants.js`.
Make sure to log into neo4j before running the bot and setup the appropriate username/password.
