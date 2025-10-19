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
},
  {
  artist_name: "Den99",
  url: "https://cdnb.artstation.com/p/assets/images/images/059/214/871/large/den99-c90fb801-9768-4094-b353-61b8c41dacb6.jpg?1675884189"
},
{
  artist_name: "H.K Karl",
  url: "https://cdna.artstation.com/p/assets/images/images/062/094/622/large/karl-hanqing-kjellgren-illustration33-6.jpg?1682351441"
},
{
  artist_name: "SPark",
  url: "https://cdna.artstation.com/p/assets/images/images/077/881/108/large/spark-spark-240710.jpg?1720605728"
},
{
  artist_name: "Siren Cove",
  url: "https://cdnb.artstation.com/p/assets/images/images/060/413/321/large/siren-cove-image3-14.jpg?1678497709"
},
{
  artist_name: "H-Battuosai",
  url: "https://cdna.artstation.com/p/assets/images/images/053/727/506/large/h-battousai-nahida-uplox.jpg?1662905358"
},
{
  artist_name: "amagumo",
  url: "https://cdnb.artstation.com/p/assets/images/images/090/162/407/large/amagumo-nahida.jpg?1753108444"
},
{
  artist_name: "Jowie Ng",
  url: "https://cdnb.artstation.com/p/assets/images/images/073/837/651/large/jowie-ng-nahida.jpg?1710600103"
},
{
  artist_name: "た〜く",
  url: "https://pbs.twimg.com/media/G3GxdKSa0AAjFsa?format=jpg&name=4096x4096"
},
{
  artist_name: "た〜く",
  url: "https://pbs.twimg.com/media/F9S6EMibUAAZ8Kb?format=jpg&name=large"
},
{
  artist_name: "た〜く",
  url: "https://pbs.twimg.com/media/Fy6s3AEaUAI_bGv?format=jpg&name=large"
},
{
  artist_name: "た〜く",
  url: "https://pbs.twimg.com/media/F9X85XPbcAAPQzQ?format=jpg&name=large"
},
{
  artist_name: "YUtuKI",
  url: "https://pbs.twimg.com/media/G3D8KUWboAAPlV-?format=jpg&name=large"
},
{
  artist_name: "고양히",
  url: "https://pbs.twimg.com/media/G2qgAdLaEAAALDP?format=jpg&name=large"
},
{
  artist_name: "고양히",
  url: "https://pbs.twimg.com/media/GuMJq7EbUAAZf20?format=jpg&name=large"
},
{
  artist_name: "Iza",
  url: "https://cdna.artstation.com/p/assets/images/images/056/746/258/large/iza-nahida.jpg?1669985395"
},
{
  artist_name: "Jadee",
  url: "https://cdna.artstation.com/p/assets/images/images/062/314/034/large/jadee-img-2907.jpg?1682850358"
},
{
  artist_name: "向晚未晚",
  url: "https://cdna.artstation.com/p/assets/images/images/055/594/300/large/-.jpg?1667317178"
},
{
  artist_name: "向晚未晚",
  url: "https://cdnb.artstation.com/p/assets/images/images/055/717/751/large/-qq-20221105004931.jpg?1667580599"
},
{
  artist_name: "ShaLosti",
  url: "https://cdna.artstation.com/p/assets/images/images/076/862/558/large/shalosti-.jpg?1718018647"
},
{
  artist_name: "KTP0001",
  url: "https://cdnb.artstation.com/p/assets/images/images/064/384/773/large/ktp0001-asset.jpg?1687808093"
},
{
  artist_name: "fei mo",
  url: "https://cdna.artstation.com/p/assets/images/images/062/044/384/large/fei-mo-.jpg?1682234618"
},
{
  artist_name: "takoyanii",
  url: "https://cdna.artstation.com/p/assets/images/images/052/680/535/large/takoyanii-kusanali.jpg?1660406745"
},
{
  artist_name: "FinallyV",
  url: "https://cdna.artstation.com/p/assets/images/images/054/784/706/large/finallyv-kusanali.jpg?1665382886"
},
{
  artist_name: "Yxmczk",
  url: "https://cdna.artstation.com/p/assets/images/images/055/298/098/large/yxmczk-bg.jpg?1666623396"
},
{
  artist_name: "Ken",
  url: "https://cdnb.artstation.com/p/assets/images/images/055/789/317/large/ken-nahida.jpg?1667763974"
},
{
  artist_name: "Allenerie",
  url: "https://cdnb.artstation.com/p/assets/images/images/058/022/185/large/andrea-rosaline-allenerie-2022-october-4th-nahida-forpost.jpg?1673225561"
},
{
  artist_name: "Arepko",
  url: "https://cdna.artstation.com/p/assets/images/images/054/436/334/large/arepko-.jpg?1664532962"
},
{
  artist_name: "御芊✧ʏᴜᴄʜɪᴇɴ",
  url: "https://cdnb.artstation.com/p/assets/images/images/054/824/603/large/-20220927.jpg?1665467874"
},
{
  artist_name: "雲小猫",
  url: "https://cdnb.artstation.com/p/assets/images/images/055/660/283/large/-202201103.jpg?1667461589"
},
{
  artist_name: "Luxearte",
  url: "https://cdna.artstation.com/p/assets/images/images/054/015/864/large/luxearte-fanart-14-final-low-res.jpg?1663583979"
},
{
  artist_name: "Darrio",
  url: "https://cdnb.artstation.com/p/assets/images/images/075/824/659/large/darrio-nahihi.jpg?1715540852"
},
{
  artist_name: "Danggart",
  url: "https://cdna.artstation.com/p/assets/images/images/053/173/276/large/dang-kusanali-ban-crop.jpg?1661591617"
},
{
  artist_name: "mini D",
  url: "https://cdnb.artstation.com/p/assets/images/images/056/879/419/large/mini-d-850.jpg?1670320394"
},
{
  artist_name: "JIHA",
  url: "https://cdnb.artstation.com/p/assets/images/images/061/846/971/large/jiha-.jpg?1681774548"
},
{
  artist_name: "Yeurei",
  url: "https://cdnb.artstation.com/p/assets/images/images/066/074/517/large/yeurei-nahida4-small.jpg?1691995370"
},
{
  artist_name: "Allenerie",
  url: "https://cdna.artstation.com/p/assets/images/images/055/451/522/large/andrea-rosaline-allenerie-2022-october-4th-nahida-acrylic.jpg?1666969957"
},
{
  artist_name: "Zeaveer",
  url: "https://cdnb.artstation.com/p/assets/images/images/054/552/969/large/zeaveer-nahida.jpg?1664816096"
},
{
  artist_name: "Kyu Sung Kim",
  url: "https://cdnb.artstation.com/p/assets/images/images/078/823/869/large/kyu-sung-kim-230731-qq-nahida.jpg?1723165985"
},
{
  artist_name: "Lance Kim",
  url: "https://cdna.artstation.com/p/assets/images/images/083/838/538/large/lance-kim-nahida-hq.jpg?1736906728"
},
{
  artist_name: "向晚未晚",
  url: "https://cdnb.artstation.com/p/assets/images/images/055/538/223/large/-.jpg?1667206868"
},
{
  artist_name: "Chin Chongcha",
  url: "https://cdna.artstation.com/p/assets/images/images/057/551/474/large/chin-chongcha-nahidasnapshot.jpg?1671924491"
},
{
  artist_name: "SWZ",
  url: "https://cdnb.artstation.com/p/assets/images/images/078/109/363/large/swz-sample.jpg?1721216641"
},
{
  artist_name: "SWZ",
  url: "https://cdna.artstation.com/p/assets/images/images/078/109/368/large/swz-sample.jpg?1721216651"
},
{
  artist_name: "Hebbtia",
  url: "https://cdna.artstation.com/p/assets/images/images/081/324/824/large/hebbtia-.jpg?1729955403"
},
{
  artist_name: "Kevin Manguera",
  url: "https://cdnb.artstation.com/p/assets/images/images/055/318/955/large/kevin-manguera-nahida-fa-a4.jpg?1666667842"
},
{
  artist_name: "Dvora Lecomte",
  url: "https://cdnb.artstation.com/p/assets/images/images/068/186/771/large/deborah-rudeau-elysium-nahida-1.jpg?1697184543"
},
{
  artist_name: "Natalia",
  url: "https://cdnb.artstation.com/p/assets/images/images/056/669/077/large/enise-studio-natalia-kusanali.jpg?1669821359"
},
{
  artist_name: "万老板",
  url: "https://cdna.artstation.com/p/assets/images/images/061/100/096/large/wboss-beautiful-greenery.jpg?1680016717"
},
{
  artist_name: "Qianhua Liu",
  url: "https://cdnb.artstation.com/p/assets/images/images/066/400/161/large/qianhua-liu-nahida-up.jpg?1692805720"
},
{
  artist_name: "Shinypudding",
  url: "https://cdna.artstation.com/p/assets/images/images/056/435/550/large/shinypudding-nahida.jpg?1669229262"
},
{
  artist_name: "ibuminae",
  url: "https://cdnb.artstation.com/p/assets/images/images/054/474/185/large/vlex-asset.jpg?1664630367"
},
{
  artist_name: "HAYUN",
  url: "https://cdnb.artstation.com/p/assets/images/images/057/031/373/large/hayun-1.jpg?1673684720"
},
{
  artist_name: "k1sulk1ns",
  url: "https://cdna.artstation.com/p/assets/images/images/072/922/124/large/k1sulk1ns-.jpg?1708514999"
},
{
  artist_name: "Ramube",
  url: "https://cdnb.artstation.com/p/assets/images/images/064/620/689/large/ramube-108-6.jpg?1688381436"
},
{
  artist_name: "no gong",
  url: "https://cdnb.artstation.com/p/assets/images/images/082/787/297/large/no-gong-101841441-p0.jpg?1733923352"
},
{
  artist_name: "Cathy",
  url: "https://cdna.artstation.com/p/assets/images/images/057/671/860/large/kai-xi-cathy-wang-nahida.jpg?1672320482"
},
{
  artist_name: "Fuu",
  url: "https://cdnb.artstation.com/p/assets/images/images/059/864/277/large/fuu-baka.jpg?1677298855"
},
{
  artist_name: "MeiCai",
  url: "https://cdnb.artstation.com/p/assets/images/images/088/140/843/large/meicai-.jpg?1747554204"
},
{
  artist_name: "Von Grechii",
  url: "https://cdnb.artstation.com/p/assets/images/images/054/731/213/large/von-grechii-kusanali-sket.jpg?1665233878"
},
{
  artist_name: "renene",
  url: "https://upload-os-bbs.hoyolab.com/upload/2024/02/06/21083969/1292a40737b8ad685cbc9e0cd0a16ac8_5849077854283477784.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70"
},
{
  artist_name: "tsuyutya",
  url: "https://cdn.donmai.us/original/ed/1c/__nahida_genshin_impact_drawn_by_tsuyutya__ed1ca464aa1ae3795c3ed34052dc3fae.jpg"
},
{
  artist_name: "Ame Akira",
  url: "https://cdn.donmai.us/original/18/43/__nahida_genshin_impact_drawn_by_ame_akira__1843485ee3d3669391b6c35b91323c36.jpg"
},
{
  artist_name: "Shu Syu",
  url: "https://cdn.donmai.us/original/74/fd/__nahida_genshin_impact_drawn_by_shuu_syuuuuuuuuuu__74fd625ff3daf9678c9a2e8c18dc2b3a.png"
},
{
  artist_name: "Miyashiroki",
  url: "https://cdn.donmai.us/original/33/ab/__nahida_genshin_impact_drawn_by_miyashirokiyu__33ab1fce96280ec159078ac58dfa56fe.png"
},
{
  artist_name: "Ustya0",
  url: "https://cdn.donmai.us/original/dd/06/__nahida_genshin_impact_drawn_by_ustya_0__dd0650856f103ea193ffbc588230c944.png"
},
{
  artist_name: "Popopo84",
  url: "https://cdn.donmai.us/original/52/4e/__nahida_slime_and_dendro_slime_genshin_impact_drawn_by_popopo_84__524eb485b2d5d271d4a1754d72c4ba7d.jpg"
},
{
  artist_name: "Tenpi3152",
  url: "https://cdn.donmai.us/original/d5/22/__scaramouche_nahida_and_wanderer_genshin_impact_drawn_by_tenpi_hello_3152__d52201143ac83fd39361d392ae6257c1.jpg"
},
{
  artist_name: "Urotsuki9625",
  url: "https://cdn.donmai.us/original/a5/b7/__nahida_genshin_impact_drawn_by_urotsuki_ku9625__a5b76ed7e4c2b0fa62a9a0b9a82e5ef2.jpg"
},
{
  artist_name: "Harukui",
  url: "https://cdn.donmai.us/original/e7/8a/__nahida_and_aranara_genshin_impact_drawn_by_harukui__e78ab0d3e3edc917cf4efcfaa6f86cbf.jpg"
},
{
  artist_name: "Oishii Sasa",
  url: "https://cdn.donmai.us/original/77/87/__nahida_and_jirachi_pokemon_and_1_more_drawn_by_oishii_sasa__778796215d2c701f6b4d5ad76d062eb9.png"
},
{
  artist_name: "Meroharom",
  url: "https://cdn.donmai.us/original/17/0f/__nahida_genshin_impact_drawn_by_meroharome__170fd8cd5539079a30b4a39a137ac4eb.png"
},
{
  artist_name: "TamengOfficial",
  url: "https://cdn.donmai.us/original/0f/ac/__nahida_genshin_impact_drawn_by_tameng_official__0fac27fb6d5523c02fb88d5e1be68f17.png"
},
{
  artist_name: "YUtuKI",
  url: "https://cdn.donmai.us/original/63/47/__nahida_genshin_impact_drawn_by_yutukicom__6347f10d1938b453e3a35f13249404cf.png"
},
{
  artist_name: "Hamo Miyormo",
  url: "https://cdn.donmai.us/original/4f/35/__nahida_genshin_impact_drawn_by_hamo_miyo_rmo2__4f35cd2de490760807eeb0ceaffcaa8d.jpg"
},
{
  artist_name: "Didtldms0312",
  url: "https://cdn.donmai.us/original/a0/3f/__nahida_genshin_impact_drawn_by_didtldms0312__a03f3a72bdb53e929132a13af632e8d7.jpg"
},
{
  artist_name: "Rei_sss353",
  url: "https://cdn.donmai.us/original/f8/35/__nahida_genshin_impact_drawn_by_rei_sss35_ss3__f8354d3dc99eb1b15595c2d0950ed200.jpg"
},
{
  artist_name: "Osuzu0613",
  url: "https://cdn.donmai.us/original/63/a2/__nahida_genshin_impact_drawn_by_osuzu0613__63a2a36457e017e5cb095849a537e510.jpg"
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





