const express = require('express');
const router = express.Router();
const { createAccount, getAllAccounts, updateAccount, deleteAccount, getAccountById } = require("../controller/accountController");

router.post("/", createAccount);
router.get("/", getAllAccounts);
router.get("/:id", getAccountById);
router.put("/:id", updateAccount);
router.delete("/:id", deleteAccount);

module.exports = router;