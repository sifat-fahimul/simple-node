const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Wow from node project first with node mon');
});

const users = [
    { id: 0, name: 'abdul', email: 'abdul@gmail.com', phone: '018 55 66 99' },
    { id: 1, name: 'kader', email: 'kader@gmail.com', phone: '018 55 66 99' },
    { id: 2, name: 'jolil', email: 'jolil@gmail.com', phone: '018 55 66 99' },
    { id: 3, name: 'kholil', email: 'kholil@gmail.com', phone: '018 55 66 99' },
];

//query parameter use
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits/mangos/fazli', (req, res) => {
    res.send('yummy yummy tok marka fozli')
})

app.listen(port, () => {
    console.log('listing to ', port);
})