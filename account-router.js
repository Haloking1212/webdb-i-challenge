const express = require("express");

const db = require("./data/dbConfig.js");

const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const accounts = await db("accounts")
        res.status(200).json(accounts);
    } catch (err) {
        res.status(500).json({ message: "failled to get accounts" })
    }
})

router.get("/:id", async (req,res) => {
    try {
        const account = await db("accounts").where("id", req.params.id)
        res.status(200).json(account);
    } catch (err) {
        res.status(500).json({ message: "failled to get account by id" })
    }
})

router.post("/", async (req,res) => {
    try {
        const accounts = await db("accounts").insert(req.body)
        res.status(200).json(accounts);
    } catch (err) {
        res.status(500).json({ message: "failled to create to account" })
    }
})

router.put("/:id", async (req,res) => {
    try {
        const accounts = await db("accounts").update(req.body).where("id", req.params.id)
        res.status(200).json(accounts);
    } catch (err) {
        res.status(500).json({ message: "failled to update to account" })
    }
})

router.delete("/:id", async (req,res) => {
    try {
        const accounts = await db("accounts").delete(req.body).where("id", req.params.id)
        res.status(200).json(accounts);
    } catch (err) {
        res.status(500).json({ message: "failled to delete the account" })
    }
})


module.exports = router;