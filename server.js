const cors = require('cors')
const express = require('express')
require('dotenv').config()
const app = express();
// app.use(cors())
app.use(express.static('dist'))

const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     res.send("server is ready");
// })
//get a list of 5 jokes
const jokes = [
    {
        "id": 1,
        "title": "Why Don't Scientists Trust Atoms?",
        "content": "Because they make up everything!"
    },
    {
        "id": 2,
        "title": "Parallel Lines",
        "content": "Parallel lines have so much in common… it’s a shame they’ll never meet."
    },
    {
        "id": 3,
        "title": "The Scarecrow",
        "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
        "id": 4,
        "title": "Elevator Joke",
        "content": "I’m reading a book on anti-gravity. It’s impossible to put down."
    },
    {
        "id": 5,
        "title": "Skeleton's Problem",
        "content": "Why didn’t the skeleton go to the party? Because he had no body to go with."
    }
]
app.get("/api/jokes", (req, res) => {
    res.json(jokes)
})

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);

})
