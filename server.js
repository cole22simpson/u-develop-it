const express = require('express');
const { rmSync } = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ entended: true }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});