const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/contactController');

router.post('/', sendMessage);

router.get('/test', (req, res) => {
    res.json({ message: "API is working" });
});

module.exports = router;
