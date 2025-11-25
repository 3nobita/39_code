//app.js

const express = require("express");
const app = express();
const path = require("path");

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use('/SnapFolio', express.static(path.join(__dirname, 'SnapFolio'))); // for portfolio
app.use(express.static('public')) // for img and


// Import the route properly
const baseRoutes = require("./routes/main/base"); // Ensure this path is correct

app.use("/", baseRoutes); 
 
// Start the server
const PORT = 3000; 
app.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:${PORT}`);
}); 
