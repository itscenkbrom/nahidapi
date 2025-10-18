const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Fotoğraf ve artist verileri (bunu istediğin kadar artırabilirsin)
const data = {
  results: [
    {
      artist_name: "ゴマねこ",
      artist_href: "https://www.pixiv.net/en/users/35398686",
      source_url: "https://www.pixiv.net/en/artworks/118668944",
      url: "https://nekos.best/api/v2/neko/989a6b0a-da7b-4455-b816-306b98c5cb19.png"
    },
    {
      artist_name: "アニメ猫",
      artist_href: "https://www.pixiv.net/en/users/12345678",
      source_url: "https://www.pixiv.net/en/artworks/98765432",
      url: "https://nekos.best/api/v2/neko/abcdefg-1234.png"
    },
    {
      artist_name: "猫神",
      artist_href: "https://www.pixiv.net/en/users/87654321",
      source_url: "https://www.pixiv.net/en/artworks/11223344",
      url: "https://nekos.best/api/v2/neko/1122aa-bb33.png"
    }
  ]
};

// Ana sayfa
app.get('/', (req, res) => {
  res.send('NahidaApi çalışıyor! /mita endpointini kullanın.');
});

// /mita endpoint (random fotoğraf döner)
app.get('/mita', (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * data.results.length);
    const randomResult = data.results[randomIndex];
    res.json({ results: [randomResult] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Sağlık kontrolü
app.get('/health', (req, res) => {
  res.send('API is healthy!');
});

app.listen(port, () => {
  console.log(`NahidaApi listening at http://localhost:${port}`);
});
