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
  artist_name: "omgRimuu",
  url: "https://i.redd.it/7mtv74ytsxh91.png"
},
{
  artist_name: "PolaiMath",
  url: "https://i.redd.it/wfhpohzcsk5c1.jpg"
},
{
  artist_name: "Kamui",
  url: "https://i.redd.it/qw527i3o0pn91.jpg"
},
{
  artist_name: "Ryann",
  url: "https://i.pinimg.com/736x/f2/44/4d/f2444dfc9e0c7c4e64597412b811bc4d.jpg"
},
{
  artist_name: "Orjinal çizim",
  url: "https://i.pinimg.com/736x/d8/35/08/d83508121f9064ac90703b8d661b0369.jpg"
},
{
  artist_name: "ごとー/gotoh",
  url: "https://upload-os-bbs.hoyolab.com/upload/2023/04/18/235340161/68cd4f9e67483a10c24faceb332d5e00_6827247691906521503.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70"
},
{
  artist_name: "ごとー/gotoh",
  url: "https://upload-os-bbs.hoyolab.com/upload/2023/04/18/235340161/b49b99d8ecd7ec6f5ac01ed39da38ad3_4080935816671732147.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70"
},
{
  artist_name: "透明Tomei",
  url: "https://webstatic.hoyoverse.com/upload/event/2023/05/10/3a11160f0c89d07ab0c7211e704e7279_6850114456873958335.jpg?x-oss-process=image/format,webp/quality,Q_90"
},
{
  artist_name: "@cmdxca",
  url: "https://webstatic.hoyoverse.com/upload/event/2023/05/10/0e1f4f5dfc3bf3f937078d557f94f446_7469995819212079767.jpg?x-oss-process=image/format,webp/quality,Q_90"
},
{
  artist_name: "Yamyouw",
  url: "https://webstatic.hoyoverse.com/upload/event/2023/05/10/aac7e1424f574462c8fd0349d51bd30e_2368863229368451857.jpg?x-oss-process=image/format,webp/quality,Q_90"
},
{
  artist_name: "HoNyo",
  url: "https://webstatic.hoyoverse.com/upload/event/2023/05/10/2ebcc6f6f561d7b86d2770f32b499cfa_8949037441543876409.jpg?x-oss-process=image/format,webp/quality,Q_90"
},
{
  artist_name: "@mr1thonk",
  url: "https://webstatic.hoyoverse.com/upload/event/2023/05/10/2452d2c2b565b920463e38454f5e1131_525517277231510511.jpg?x-oss-process=image/format,webp/quality,Q_90"
},
{
  artist_name: "紺_",
  url: "https://webstatic.hoyoverse.com/upload/event/2023/05/10/05790b07d281390729004eb938adaa67_7599353038525595451.jpg?x-oss-process=image/format,webp/quality,Q_90"
},
{
  artist_name: "冰灕kori",
  url: "https://webstatic.hoyoverse.com/upload/event/2023/05/10/b633230c2893ace86e0039ce92edfdc1_7781155569480902013.jpg?x-oss-process=image/format,webp/quality,Q_90"
},
{
  artist_name: "AaaAaaAAaHyuN",
  url: "https://webstatic.hoyoverse.com/upload/event/2023/05/10/e1e41af39dad90b40d571197269de5b5_6190656606068062762.jpg?x-oss-process=image/format,webp/quality,Q_90"
},
{
  artist_name: "玄米Kome",
  url: "https://webstatic.hoyoverse.com/upload/event/2023/05/10/3e97f51da660125f0572e187657a67d5_3049130503459032752.jpg?x-oss-process=image/format,webp/quality,Q_90"
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


