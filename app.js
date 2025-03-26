const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

const API_KEY = 'rnd_nRUMpnXvohN0GNZdX9W04EnT8dB6'; // הכנס כאן את ה-API Key שלך

app.get('/list-services', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving services');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
