const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./backend/routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
}).then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use('/api/contact', contactRoutes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
