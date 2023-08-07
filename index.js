const PORT = process.env.PORT || 5000;
const Application = require('./utils/Application');
const userRouter = require('./src/news-router');
const jsonParser = require('./utils/parseJson');
const parseUrl = require('./utils/parseUrl');
const mongoose = require('mongoose');
const app = new Application()

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));

app.addRouter(userRouter);


const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://maksxp:shaggy@cluster0.xjwf7ws.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
