const Account = require("./data/accounts-model");

const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  Account.find()
    .then(data => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

server.post("/", (req, res) => {
  Account.add(req.body)
    .then(data => {
      res.status(200).json({ message: "item added successfully" });
    })
    .catch(err => {
      res.status(500).json({ message: "server error" });
    });
});

server.put("/:id", (req, res) => {
  Account.update(req.params.id, req.body)
    .then(data => {
      res.status(200).json({ message: "item updated successfully" });
    })
    .catch(err => {
      res.status(500).json({ message: "server error" });
    });
});

server.delete("/:id", (req, res) => {
  Account.remove(req.params.id)
    .then(data => {
      res.status(200).json({ message: "item removed successfully" });
    })
    .catch(err => {
      res.status(500).json({ message: "server error" });
    });
});

module.exports = server;
