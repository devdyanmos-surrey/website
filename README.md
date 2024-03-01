# Hackathon Surrey 24 repo for DevDyanmos

## Setup Instructions

First cd into the ```backend``` folder.
```bash
cd backend
```



To start the web server you need to run the following sequence of commands.

start the venv
```bash
source venv/bin/activate
```

### Install Required Python Modules

```bash
pip install -r django djangorestwork
pip install django-cors-headers
```
### Start Web Server

run the django web server.
```bash
python manage.py runserver/python3 manage.py runserver
```

### [Install Node.js](https://nodejs.org/en/)

### Install Node Modules

First cd into the ```frontend``` folder.
```bash
cd frontend
```
Next install all dependicies.
```bash
npm install
```

### Compile the Front-End

Run the production compile script
```bash
npm run build
```
or for development:
```bash
npm run dev
```
___
How to Contribute
1. Clone the repo
3. Clone the [Website](https://github.com/Team-Surtes/Website) repository.
4. Make your changes on a new branch.
5. Always make ur branch is upto date by running
   ```
   git pull
   ```
7. Perform a merge request.
