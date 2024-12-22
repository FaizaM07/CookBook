const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const connectDb=require("./config/connectionDb")
const cors=require("cors")

const router = express.Router();

router.post('/', (req, res) => {
    console.log('Request received at /recipe');
    console.log('Request body:', req.body);

    // Send a success response
    res.status(201).json({ message: 'Recipe added successfully!', data: req.body });
});

module.exports = router;


const PORT = process.env.PORT || 5000;
connectDb()


app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});


app.get('/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
});





app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.use("/",require("./routes/user"))
app.use("/recipe",require("./routes/recipe"))

app.listen(PORT,(err)=>{
    console.log(`app is listening on port ${PORT}`)
})