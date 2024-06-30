const express = require('express');
const bodyParser = require('body-parser');


const app = express();

var items = ['Buy Food', 'Cook Food', 'Code Your Programme'];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('Public'));


app.get('/', function(req, res) {
	
	var today = new Date();
	
	let options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long'
	};

	var day = today.toLocaleDateString("en-US", options);
 	
	
	res.render("list", {kindOfDay: day, newListItems: items});

});

app.post('/', (req, res) => {
	let item = req.body.newItem;

	items.push(item);

	res.redirect('/');
})


app.listen(3000, function() {
	console.log('Server start on port 3000')
});