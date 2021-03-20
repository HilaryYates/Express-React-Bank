const express = require("express");

const app = express();

app.use(express.static("dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
// let fetch = require("node-fetch");
// let cors = require("cors");
// app.use(cors());

const account = (() => {
  let transactions;
  return {
    transactions: transactions,
  };
})();
transactions = [];

app.post("/add", (req, res) => {
  console.log(typeof req.body, req.body, Object.keys(req.body).length === 0);
  console.log(req.body.amount);
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
