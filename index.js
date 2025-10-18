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
      artist_name: "たら/ tara",
      url: "https://i.pximg.net/img-master/img/2025/10/18/18/18/24/136419989_p0_master1200.jpg"
    },
    {
      artist_name: "アニメ猫",
      url: "https://i.pximg.net/img-master/img/2025/10/12/14/42/00/136177763_p0_master1200.jpg"
    },
    {
      artist_name: "lovetraveling",
      url: "https://i.pximg.net/img-master/img/2025/10/17/21/58/13/136387535_p0_master1200.jpg"
    },
    {
  artist_name: "变态萝莉控",
  url: "https://i.pximg.net/img-master/img/2025/10/13/13/04/53/136219814_p0_master1200.jpg"
},
{
  artist_name: "わさび",
  url: "https://i.pximg.net/img-master/img/2025/09/20/18/27/39/135325007_p0_master1200.jpg"
},
{
  artist_name: "白百合",
  url: "https://i.pximg.net/img-master/img/2025/09/23/00/14/32/135423417_p0_master1200.jpg"
},
{
  artist_name: "眠",
  url: "https://i.pximg.net/img-master/img/2025/09/16/18/00/01/135172603_p0_master1200.jpg"
},
{
  artist_name: "めろは",
  url: "https://i.pximg.net/img-master/img/2025/09/22/21/00/10/135414143_p0_master1200.jpg"
},
{
  artist_name: "晚晚喵",
  url: "https://i.pximg.net/img-master/img/2025/10/12/14/42/00/136177763_p0_master1200.jpg"
},
{
  artist_name: "しわ子",
  url: "https://i.pximg.net/img-master/img/2025/09/23/03/10/08/135428420_p0_master1200.jpg"
},
{
  artist_name: "Azu (秋の予感)",
  url: "https://i.pximg.net/img-master/img/2025/09/23/11/13/39/135431716_p0_master1200.jpg"
},
{
  artist_name: "胡ﾏ田 ﾏｺ",
  url: "https://i.pximg.net/img-master/img/2025/09/23/01/24/56/135426026_p0_master1200.jpg"
},
{
  artist_name: "めだ茶",
  url: "https://i.pximg.net/img-master/img/2025/09/23/21/06/01/135455385_p0_master1200.jpg"
},
{
  artist_name: "スバル",
  url: "https://i.pximg.net/img-master/img/2025/09/28/07/58/13/135622747_p0_master1200.jpg"
},
{
  artist_name: "LemonZTeA",
  url: "https://i.pximg.net/img-master/img/2025/09/28/20/56/48/135647035_p0_master1200.jpg"
},
{
  artist_name: "のんさん",
  url: "https://i.pximg.net/img-master/img/2025/09/28/21/54/19/135649888_p0_master1200.jpg"
},
{
  artist_name: "浅银黎星",
  url: "https://i.pximg.net/img-master/img/2025/09/28/14/01/06/135632128_p0_master1200.jpg"
},
{
  artist_name: "Decopon",
  url: "https://i.pximg.net/img-master/img/2025/09/29/23/06/15/135690585_p0_master1200.jpg"
},
{
  artist_name: "ころあい",
  url: "https://i.pximg.net/img-master/img/2025/10/02/14/32/35/135784078_p0_master1200.jpg"
},
{
  artist_name: "Neko(0w0)",
  url: "https://i.pximg.net/img-master/img/2025/10/03/15/01/09/135820367_p0_master1200.jpg"
},
{
  artist_name: "みラァ",
  url: "https://i.pximg.net/img-master/img/2025/10/05/22/22/05/135921877_p0_master1200.jpg"
},
{
  artist_name: "kumanee",
  url: "https://i.pximg.net/img-master/img/2025/10/07/21/50/09/135995686_p0_master1200.jpg"
},
{
  artist_name: "Black Swordsman",
  url: "https://i.pximg.net/img-master/img/2025/10/08/07/15/32/136010926_p0_master1200.jpg"
},
{
  artist_name: "Crob.フェロー",
  url: "https://i.pximg.net/img-master/img/2025/09/19/00/40/51/135262353_p0_master1200.jpg"
},
{
  artist_name: "Rio",
  url: "https://i.pximg.net/img-master/img/2025/10/08/22/20/40/136029128_p0_master1200.jpg"
},
{
  artist_name: "めとろ",
  url: "https://i.pximg.net/img-master/img/2025/10/09/14/29/58/136056053_p0_master1200.jpg"
},
{
  artist_name: "うちゆうじん",
  url: "https://i.pximg.net/img-master/img/2025/10/12/01/18/41/136160011_p0_master1200.jpg"
},
{
  artist_name: "kareyaカレー屋",
  url: "https://i.pximg.net/img-master/img/2025/10/12/23/10/15/136198539_p0_master1200.jpg"
},
{
  artist_name: "桃源莉可",
  url: "https://i.pximg.net/img-master/img/2023/10/28/19/33/42/112920862_p0_master1200.jpg"
},
{
  artist_name: "lovetraveling",
  url: "https://i.pximg.net/img-master/img/2025/09/18/04/15/17/135230894_p0_master1200.jpg"
},
{
  artist_name: "稲羽の青兎",
  url: "https://i.pximg.net/img-master/img/2025/10/16/00/48/32/136322812_p0_master1200.jpg"
},
{
  artist_name: "踏梦_Official",
  url: "https://i.pximg.net/img-master/img/2025/10/12/12/32/46/136174164_p0_master1200.jpg"
},
{
  artist_name: "霜月ミナト",
  url: "https://i.pximg.net/img-master/img/2025/10/18/18/18/24/136419989_p0_master1200.jpg"
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

