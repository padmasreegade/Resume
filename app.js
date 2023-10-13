var http = require('http');
const express = require('express');
const app = express();
var path = require('path');
var server = http.createServer(app);

app.engine('.html', require('ejs').__express);
app.set('views', __dirname);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index');});

app.get('/index.html', function(req, res){
    res.render('index');});
    
app.get('/education.html', function(req, res){
    res.render('education.html');});
    
app.get('/experience.html', function(req, res){
    res.render('experience.html');});
    
app.get('/certifications.html', function(req, res){
    res.render('certifications.html');});

app.get('/awards.html', function(req, res){
    res.render('awards.html');});
    
app.get('/projects.html', function(req, res){
    res.render('projects.html');});
    
server.listen(8080);
