var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//get all dog_breeds
router.get("/", async function (req, res) {
  try {
    const response = await db("select * from dog_breeds;");
    res.send({ dog_breeds: response.data });
  } catch (error) {
    res.status(500).send();
  }
});
// GET one dog_breed
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const response = await db(`select * from dog_breeds where id = ${id}`);
    const dog_breed = response.data[0];

    if (!dog_breed) {
      res.status(404).send();
      return;
    }
    res.send({ dog_breed });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

