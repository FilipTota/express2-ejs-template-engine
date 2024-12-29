import express from "express";
const PORT = process.env.PORT || 8000;

const app = express();

// Config ejs
app.set("view engine", "ejs"); // Set the view engine
app.set("views", "views"); // Set the folder that we want as our view folder ("views", "views") -> set views folder to a folder called views

app.get("/", (req, res) => {
  // sice we are using template engine, we have acces to res.render
  res.render("index"); // it's gonna look for index page in my views folder

  // with ejs template engine we can also pass in the dynamic data, not just render html pages
  // data example:
  res.render("index", {
    title: "My website",
    message: "Hello from EJS",
    people: ["John", "Jane", "Jack"],
  }); // usage example inside index.ejs
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
