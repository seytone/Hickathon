const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./src/queries');
const port = 9001;

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: __dirname });
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.get('/absences', db.getAbsences);
app.get('/absences/:id', db.getAbsenceById);
app.post('/absences', db.createAbsence);
app.post('/absences/moderate/:id', db.moderateAbsence);
app.put('/absences/:id', db.updateAbsence);
app.delete('/absences/:id', db.deleteAbsence);

app.get('/user/absences/:user_id', db.getAbsencesByUserId);

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});