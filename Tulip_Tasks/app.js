
//Task-06 as app.js
const express = require("express"); 
const app = express();

app.post("/tasks", (req, res) => { 
  res.json({ 
    received: req.body 
  }); 
});


app.use((err, req, res, next) => { 
  console.error(err);

  res.status(500).json({
    error:"Something went wrong",
    message: err.message
  }) 
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});
