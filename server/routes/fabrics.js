const express = require("express");
const router = express.Router();
// const { Fabrics } = require("./database");

// const fabricsRouter = Router();

router.get("/", async (req, res) => {
try {

  res.send("Proof of concept");
} catch (err) {
  console.error(err);
  res.sendStatus(500);
}
});

module.exports = router;
