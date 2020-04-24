const express = require("express");
const router = express.Router();

const sh = require("shelljs");

// @route   GET /
// @desc    Download using WGET
// @access  Public
router.get("/", (req, res) => {
  sh.exec(
    "sar -u 1 1 | awk '{ print $8 }' 2>&1",
    { silent: true },
    (code, stdout, stderr) => {
      const cpu =
        stdout
          .toString()
          .split("\n")
          .filter((x) => x !== "")[2] / 10;
      console.log(
        `CPU Utilization: ${100 - cpu * 10}% [${Math.round(10 - cpu)}]`
      );
      res.status(200).json({
        c: Math.round(10 - cpu),
      });
    }
  );
});

module.exports = router;
