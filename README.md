
  

# Pokemon Stats

  

### Show pokemon stats parsed from a Excel File

- Nodejs api + MongoDB + xlsx Parser + React app + Semantic UI + ApexCharts

  
  

## run:
- CLone this repository and change the current branch: 
```
	git clone https://github.com/Badaueba/teste-desenvolvimento-web.git
	cd teste-desenvolvimento-web
	git checkout AlanGuilhermeAlves
```

- install front end dependencies:

```

cd client

npm install

cd ..

```

* install backend dependencies on root folder:

```

npm install

npm start

```

* The application will open automatically on your default browser > localhost:3000

---

#### Troubleshooting 
- The app was created on  **windows system operation**, so if you are using **unix based system** and the following **error** appear after npm start: 
**''System limit for number of file watchers reached''**
- then run this command on terminal: 
```` 
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```` 