const express = require("express");
const router = express.Router();
const { elegen, getElegens, elereq, eleused, getEleused, getElereqs, updateEleReqStatus } = require("../controller/electricity");

router.post("/elegen", elegen);
router.get("/getelegens", getElegens);

router.post("/elereq", elereq);
router.get("/getelereqs", getElereqs);

router.post("/eleused", eleused);
router.get("/geteleused", getEleused);

router.put("/updatereq", updateEleReqStatus);



module.exports = router;