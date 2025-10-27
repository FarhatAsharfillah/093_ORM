const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models');
app.use(express.json());
app.use(express.urlencoded({ 
    extended: true 
}));

app.listen(PORT, async () => {
    console.log(`Server is running on port 3000`);
});

db.sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Database synced and server is running on port 3000');
        })
    })
    .catch((err) => {
        console.error('Failed to sync database:', err);
    });