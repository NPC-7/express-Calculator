//JS hint ES-ver:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req,res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result + ".\nThank you for using Express Calculator! 🙏");
});

app.get("/bmicalculator",function (req,res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {

  var theWeight = Number(req.body.weight);
  var theHeight = Number(req.body.height);

  var bmiResult = theWeight/(Math.pow(theHeight,2));

  res.send("Your weight and height are "+theWeight+"kg and "+theHeight+"meter(s). So, your BMI result is "+bmiResult+". Thanks for using BMI-Calculator by Express Calculator! 🙏");
});

app.listen(3000, function () {
  console.log("====WARNING====\nServer started on port 3000");
})
