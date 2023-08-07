module.exports = (req, res) => {
    // res.writeHead(200, {
    //     'Content-type': 'application/json',
    //     'Access-Control-Allow-Origin': 'http://localhost:3000',
    //     'Access-Control-Allow-Methods': '*',
    // })
    res.send = (data) => {
        res.end(JSON.stringify(data));
    }
}
