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
  artist_name: "-Omni_Soul ve Bushy11",
  url: "https://m.gjcdn.net/fireside-post-image/900/38915162-if7mgqx5-v4.png"
},
{
  artist_name: "KiBeRRy",
  url: "https://f4.bcbits.com/img/a2284778107_10.jpg"
},
{
  artist_name: "symphonicbrush (Carlo Pereyra)",
  url: "https://i.redd.it/214qhgw0e9j41.png"
},
{
  artist_name: "Vic_03",
  url: "https://m.gjcdn.net/fireside-post-image/800/22711943-awj7sfjt-v4.webp"
},
{
  artist_name: "Jolibe Arts",
  url: "https://i.imgur.com/azWEU2R.jpeg"
},
{
  artist_name: "MultisouLzERO",
  url: "https://i1.sndcdn.com/artworks-000354216069-4rmpke-t500x500.jpg"
},
{
  artist_name: "KiBeRRy",
  url: "https://m.gjcdn.net/fireside-post-image/700/23450307-s8p5pnva-v4.webp"
},
{
  artist_name: "Veyo <3",
  url: "https://i.pinimg.com/736x/d2/78/e0/d278e0af38d350ee7cbb94ef855e3726.jpg"
},
{
  artist_name: "*Bilinmiyor*",
  url: "https://i.pinimg.com/736x/d3/d3/7f/d3d37f2615ddace7a08095beec04ce2d.jpg"
},
{
  artist_name: "sansurichin",
  url: "https://i.pinimg.com/1200x/f6/54/50/f654502276aa8ad06f257f0db3f722e4.jpg"
},
{
  artist_name: "UsagiSii",
  url: "https://i.pinimg.com/1200x/79/f5/9e/79f59e8e21e3d222b2dcd1656e1ab68c.jpg"
},
{
  artist_name: "Talandar322",
  url: "https://i.imgur.com/7l7FTwT.jpeg"
},
{
  artist_name: "anon",
  url: "https://i.imgur.com/YNl4hMM.jpeg"
},
{
  artist_name: "sanaklimov",
  url: "https://i.imgur.com/Y7rvU6p.jpeg"
},
{
  artist_name: "596o3 (Кот Манул)",
  url: "https://i.imgur.com/XUAujmR.png"
},    
{
  artist_name: "shenidraws",
  url: "https://64.media.tumblr.com/7ff1e11882f3ac1b6efb9660403b585e/127701d7ab7708d9-21/s2048x3072/52f513df679047ed8bf263c1792373a6e40c8be2.png"
},   
{
  artist_name: "shenidraws",
  url: "https://64.media.tumblr.com/23b5afb5a78ac262966cae31f9bff97f/127701d7ab7708d9-81/s2048x3072/79113e8192e773162d67e727288671f97992b793.png"
},
{
  artist_name: "symphonicbrush (Carlo Pereyra)",
  url: "https://i.redd.it/hnpgczwqnqm01.jpg"
},
{
  artist_name: "shenidraws",
  url: "https://64.media.tumblr.com/4a7bde97254ab3d95640fe14de99231c/127701d7ab7708d9-3a/s2048x3072/98a0ed6524bdc0a89de0d87c42595d6b2ed8e1dc.png"
}, 
{
  artist_name: "shenidraws",
  url: "https://64.media.tumblr.com/e05531fa4f1ce14e54ed30cb23085705/254259ea2c25c483-17/s2048x3072/73acc09360c9a1f0d38bcc5d24ba7ef60c787b1d.png"
},
{
  artist_name: "shenidraws",
  url: "https://64.media.tumblr.com/14400939f2f7bf1330f45184379fef2c/254259ea2c25c483-b3/s2048x3072/715540878adad09a70336c95dde1bc202af3bb84.png"
},
{
  artist_name: "shenidraws",
  url: "https://64.media.tumblr.com/98799ec0f480a6cef66d7e091fd46908/9ad5ed03da1286ef-3d/s2048x3072/2913227d8e439b25880dba9894df371a76730adb.png"
}, 
{
  artist_name: "shenidraws",
  url: "https://64.media.tumblr.com/465e0abcd786d9bd528ad2a5623b0dd1/9ad5ed03da1286ef-ab/s2048x3072/68bff377814ff94b9eafa6a0592d17d1033cee9b.png"
},
{
  artist_name: "shenidraws",
  url: "https://64.media.tumblr.com/48d053ddee81578d0d2701cb7fcdefd6/759533b03c96f516-4d/s2048x3072/f4c826d0205be353909ef011cb47c4ef77b62299.png"
},
{
  artist_name: "shenidraws",
  url: "https://64.media.tumblr.com/7d9d9aa2177741f753208f862252db24/759533b03c96f516-fd/s2048x3072/a2a7f2dd87f8006a8c98f647c26a0ddf2dff93a8.png"
},
{
  artist_name: "shenidraws",
  url: "https://64.media.tumblr.com/9701090c286ceca9ec6d3ecf60dec30f/759533b03c96f516-ea/s2048x3072/b021fd02eab2936df49bd9b4104549112282e466.png"
},
{
  artist_name: "shenidraws",
  url: "https://64.media.tumblr.com/389c77c374ea60d3562a9af10c150e26/294255aecbd9107b-26/s2048x3072/66e5cd052665572aa73a34c9e8cc8886436be2d9.png"
},
{
  artist_name: "shenidraws",
  url: "https://64.media.tumblr.com/f7a63887221093021212877c25b4f055/294255aecbd9107b-e9/s2048x3072/749b6b940296c49f1b3eb8c5ab53d196439c64ff.png"
},
{
  artist_name: "clophiadraws",
  url: "https://64.media.tumblr.com/31c4e013b4ec56cc03e0338058930190/tumblr_psvaiatduY1ua2z8lo1_r1_1280.gif"
},
{
  artist_name: "capri_s7n",
  url: "https://64.media.tumblr.com/053a1e93a91d8d095546c73ed7ad1095/a838d7e9f2001856-83/s1280x1920/56cbab44d0d7062a78b4285793da7cc0d7897408.png"
},
{
  artist_name: "viarayy01-blog",
  url: "https://64.media.tumblr.com/038f5ea1f3ba478637451099c03e83b3/c42bcad82fbce018-8a/s2048x3072/7f1e2fac9423350f316d86348667b264075909a1.png"
},
{
  artist_name: "dailyflowey",
  url: "https://64.media.tumblr.com/9b74f28c9b337fcf4fa7ed30d3947347/81e799dade1b6814-85/s1280x1920/f4511344c381f503c78f85383249eeec476eaff5.jpg"
},
{
  artist_name: "univer-underfell",
  url: "https://64.media.tumblr.com/ef7fdb46827596e48312b71bd5b40cbc/f6d02de1e0420544-19/s640x960/856c4401a23bf01931c0c5150a4f64236b51ad1c.jpg"
},
{
  artist_name: "easily-addicted",
  url: "https://64.media.tumblr.com/90623c6b9d44d8bcfc8157f0a7d14785/71dca27f0e0e77dc-b9/s2048x3072/5a2933dd2bb82467715c3078fbc6d55044b7b521.pnj"
}
  ]
};

// Ana sayfa
app.get('/', (req, res) => {
  res.send('DokiTaleApi çalışıyor! /doki endpointini kullanın.');
});

// /mita endpoint (random fotoğraf döner)
app.get('/doki', (req, res) => {
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
  console.log(`DokiTaleApi listening at http://localhost:${port}`);
});






