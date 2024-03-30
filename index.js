const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it is live on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'Blue Long Sleeve Polo',
        size: 'X-Large'
    }

    )
}
);
