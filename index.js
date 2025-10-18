const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sağlık kontrolü
app.get('/health', (req, res) => {
  res.send('API is healthy!');
});

// NekoApi benzeri endpoint
app.get('/mita', (req, res) => {
  const data = {
    results: [
      {
        artist_name: "ゴマねこ",
        artist_href: "https://www.pixiv.net/en/users/35398686",
        source_url: "https://www.pixiv.net/en/artworks/118668944",
        url: "https://nekos.best/api/v2/neko/989a6b0a-da7b-4455-b816-306b98c5cb19.png"
      }
    ]
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`NahidaApi listening at http://localhost:${port}`);
});
