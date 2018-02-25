### Installation:

##### Requirements:
postgres  
npm  
both can be installed through [homebrew](https://brew.sh/index_sv)

1. $ npm install -g sequelize-cli
2. $ npm install
3. $ createdb bookings
4. $ sequelize db:migrate
5. $ npm run start:dev

Now a server should be running, and the databaser should be updated by migrations (basically code telling the 
database how it's tables should be created or updated or deleted. This is useful because these migrations have a 
timestamp; we can undo and redo database changes, which saves time.

##### api path specification:

Run server and open api paths in google chrome.

Prefix paths with 'localhost:8000/...' (or 127.0.0.1:8000/...)

- localhost:8000/api/people (full path)
- /api/employees
- /api/businesspartners
- /api/teams
