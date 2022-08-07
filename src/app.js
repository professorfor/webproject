const express = require("express");
const app = express();
const port = 8000;
const path = require("path")
const hbs = require("hbs");

// for deploiying purpose
// const port =  process.env.PORT || 8000;

// public static path 

// console.log(path.join(__dirname, "../public"))
const staticPath = (path.join(__dirname, "../public"))
app.use(express.static(staticPath));

// set handlebar engine:: batan hoga express application ko
app.set('view engine', 'hbs');
// for partial 
const templates_path = (path.join(__dirname, "../templates/views"));
const partials_path = (path.join(__dirname, "../templates/partials"));
app.set('views', templates_path);
hbs.registerPartials(partials_path);


// routing 
app.get("", (req, res)=>{
 res.render("index")
});

app.get("/about", (req, res)=>{
 res.render("about")
});

app.get("/weather", (req, res)=>{
 res.render("weather")
});

app.get("*", (req, res)=>{
 res.render("404error", {
    errorMsg: "Opps! Page Not Found"
 })
});


app.listen(port, ()=>{
    console.log(`Listening to the port at ${port}`);
});