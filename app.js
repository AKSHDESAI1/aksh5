import express from "express";
import connectDb from "./db/connectdb.js";
import router from "./routes/web.js";

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost://27017";
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://aksh2137:aksh2137@cluster0.jpqpxva.mongodb.net/";

//Connect Database
connectDb(DATABASE_URL);

app.use(express.urlencoded({ extended: false }))

//Define Directory where template fikes has been Located.
app.set('views', './views');
//Define Template Engine that which I have used.
app.set('view engine', 'ejs');

//Define Static Css and Js directory.
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.redirect('/student');
})

//Load Routes
app.use('/student', router);

app.listen(PORT, () => {
    console.log(`Server is Listening at ${PORT} Port.`);
})