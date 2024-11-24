const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const CustomerModel = require("./Models/customer")



// Load environment variables
dotenv.config();  

// Initialize the app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((error) => console.error("MongoDB connection error:", error));

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is undefined. Please check your environment variables.");
    process.exit(1); // Exit the app if the URI is missing
}

// Define routes
app.post("/signup", (req, res) => {
    console.log("Request body:", req.body); // Log request payload
    CustomerModel.create(req.body)
        .then(employee => {
            console.log("Created customer:", employee);
            res.json(employee);
        
        })
        .catch(err => {
            console.error("Error:", err.message);
            res.status(400).json({ error: err.message });
        });
});


app.post("/login", (req, res) => {
    const{email, password}=req.body// Log request payload
    CustomerModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json('success')
            }
            else{
               res.json("password is incrrect");
               
            }
        }
        else{
            res.json("no record")
        }
        
    }
)
    .catch()

});

app.post("/logout", (req, res) => {
    const{email, password}=req.body// Log request payload
    CustomerModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json('success')
            }
            else{
                res.json("password is incrrect")
               
            }
        }
        else{
            res.json("no record")
        }
        
    }
)
    .catch()

});



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
