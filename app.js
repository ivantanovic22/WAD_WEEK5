const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

const mustache = require("mustache-express");
app.engine("mustache", mustache());
app.set("view engine", "mustache");

const modules = {
  RSPI: { name: "Research Skills and Professional Issues", leader: "Mark Jenkins", Description: "A module in which students learn the fundamentals of research and handling proessional, legal and social issues, as an intro to their dissertation ." },
  WebAppDev: { name: "Web Application Development 2", leader: " Fiona Fairlie", Description: " The continuation of Web App Development 1, in which students learn the basics of developing web applications." },
  IP3: { name: "Integrated Project 3", leader: "Ross Crawford", Description: "A annual project which requires students to team up in groups and present a project of their choice by implementing planning, design and development." },
};

app.get("/modules/:name", (req, res, next) => {
  const info = modules[req.params.name];
  if (!info) return next(); // will eventually fall through to 404
  res.render("modulePage", {
    modulesInfo: info,
  });
});

app.get(req, res) {
res.send("No module Selected.");
}
app.get("/modules/:name", (req, res, next) => {


const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port}` +
      "; press Ctrl-C to terminate."
  )
);