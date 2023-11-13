const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/randomnumber', (req, res) => {
    const randomNumber = Math.floor(Math.random()*10)+1;
    res.json({cost: randomNumber});
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})