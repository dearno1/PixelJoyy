//playsound
function playsound() {
  const sound = document.getElementById('coinsound');
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}
//buttonsound
document.addEventListener('DOMContentLoaded', () => {
  const allButtons = document.querySelectorAll('button');
  allButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      playsound();
    });
  });

//headersound
  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    link.addEventListener('click', (e) => {
      e.preventDefault(); 
      playsound();
      setTimeout(() => {
        window.location.href = href; 
      }, 300); 
    });
  });
});

//mario-sound
document.addEventListener('DOMContentLoaded', () => {
  const bgmusic = document.getElementById('bg-music');
  const toggleMusicBtn = document.getElementById('toggleMusicBtn');

 //startwithcilck
  document.addEventListener('click', () => {
    if (bgmusic.paused) {
      bgmusic.play().catch(err => console.log('Autoplay blocked', err));
    }
  }, { once: true });

});
//movebanner
let currentBannerIndex = 0;
const bannerTrack = document.querySelector('.banner-track');
const banners = document.querySelectorAll('.banner-slide');

function updateBanner() {
  bannerTrack.style.transform = `translateX(${-currentBannerIndex * 100}%)`;
}

function moveBanner(direction) {
  currentBannerIndex += direction;
  if (currentBannerIndex < 0) currentBannerIndex = banners.length - 1;
  if (currentBannerIndex >= banners.length) currentBannerIndex = 0;
  updateBanner();
}
setInterval(() => moveBanner(1), 10000);

//gamedata
const gameData = {
  action: [
    {
      name: "Hyper Light Drifter",
      image: "https://cdn1.epicgames.com/offer/62d6f15b1bb345f6a42585b4c8c847a0/HLD_EGS_Landscape_01b_2560x1440-208bf00c64b87051db6d55aa94fac336",
      description: "เกมแอ็คชั่นผจญภัยที่มีกราฟิกพิกเซลสุดอลังการและการต่อสู้ที่ลื่นไหล",
      rating: "9.3/10",
      review: "กราฟิกสวยงามและการต่อสู้ที่ท้าทาย การสำรวจโลกก็สนุก",
    },
    {
      name: "Katana Zero",
      image: "https://th.bing.com/th/id/OIP.vazuF65XiU_hHbxYzdokpwHaDt?w=1600&h=800&rs=1&pid=ImgDetMain",
      description: "เกมแอ็คชั่นที่มีกราฟิกพิกเซลและเนื้อเรื่องที่เข้มข้นเกี่ยวกับการสังหาร",
      rating: "9.5/10",
      review: "การเล่นที่รวดเร็วและท้าทาย เนื้อเรื่องมีความลึกซึ้ง",
    },
    {
      name: "Shovel Knight",
      image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000051927/2a12b8555d28f76eea46bb3c0439266f0f29307ef1787675582195147c7895bd",
      description: "เกมแอ็คชั่นที่มีพิกเซลสไตล์ย้อนยุคกับการผจญภัยที่น่ารัก",
      rating: "9.4/10",
      review: "เกมที่ท้าทายและเต็มไปด้วยความสนุก รวมถึงกราฟิกที่โดดเด่น",
    },
    {
      name: "Dead Cells",
      image: "https://th.bing.com/th/id/OIP.FtDnaBFsequ93gMudoPV_AHaEK?rs=1&pid=ImgDetMain",
      description: "เกมแอ็คชั่นแนว Metroidvania ที่มีกราฟิกพิกเซลและระบบการต่อสู้ที่ยืดหยุ่น",
      rating: "9.6/10",
      review: "การออกแบบด่านที่ดีเยี่ยมและการต่อสู้ที่มีความหลากหลาย",
    }
  ],
  adventure: [
    {
      name: "Fez",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/224760/header.jpg",
      description: "เกมผจญภัยในโลก 2D ที่มีการเปลี่ยนมุมมองเป็น 3D พร้อมกราฟิกพิกเซลสวยๆ",
      rating: "9.4/10",
      review: "การไขปริศนาในโลกที่เต็มไปด้วยความลึกลับและจินตนาการ",
    },
    {
      name: "Terraria",
      image: "https://th.bing.com/th/id/OIP.WAI9mmhLkDVDpEz9Jz-RvwHaDt?rs=1&pid=ImgDetMain",
      description: "เกมผจญภัยที่เน้นการสำรวจและสร้างสิ่งต่างๆ ในโลกที่เต็มไปด้วยการทำลายและสร้างใหม่",
      rating: "9.3/10",
      review: "ความเสรีในการสร้างโลกและการผจญภัยในโลกพิกเซลสุดน่ารัก",
    },
    {
      name: "Starbound",
      image: "https://th.bing.com/th/id/OIP.uPoQ2n3ql_1zZphSjKUqHgHaEK?rs=1&pid=ImgDetMain",
      description: "เกมผจญภัยในอวกาศที่คุณสามารถสำรวจและสร้างโลกใหม่ได้ในกราฟิกพิกเซล",
      rating: "9.1/10",
      review: "การสำรวจจักรวาลที่ไม่รู้จบ และการสร้างที่มีความหลากหลาย",
    },
    {
      name: "The Escapists 2",
      image: "https://www.gaminginstincts.com/wp-content/uploads/2017/08/Escapist2.jpghttps://th.bing.com/th/id/OIP.l5XOfJ3eCvYfH7dHBrp7bQHaEK?rs=1&pid=ImgDetMain",
      description: "เกมผจญภัยแนวหลบหนีจากคุกที่เต็มไปด้วยกลยุทธ์และการแก้ปัญหาผ่านกราฟิกพิกเซล",
      rating: "9.0/10",
      review: "กลยุทธ์ในการหลบหนีที่ต้องการความคิดสร้างสรรค์และการวางแผน",
    }
  ],
  puzzle: [
    {
      name: "Lemmings",
      image: "https://th.bing.com/th/id/OIP.qlqhIbCThQAaJQOeG-6WOAHaEK?rs=1&pid=ImgDetMain",
      description: "เกมพัซเซิลที่คุณต้องช่วยเหล่า Lemmings หลบหนีจากอันตราย",
      rating: "9.0/10",
      review: "เกมพัซเซิลคลาสสิกที่เต็มไปด้วยความท้าทายและการวางแผน",
    },
    {
      name: "Braid",
      image: "https://th.bing.com/th/id/OIP.L_TftvikNeiMleg5Op0PUwHaEK?w=505&h=284&rs=1&pid=ImgDetMain",
      description: "เกมพัซเซิลที่มีการควบคุมเวลาเป็นหลักในโลกที่มีกราฟิกพิกเซลสวยงาม",
      rating: "9.6/10",
      review: "การเล่นที่ท้าทายและเรื่องราวที่สอดคล้องกับการเล่นที่ลึกซึ้ง",
    },
    {
      name: "Inside",
      image: "https://img.opencritic.com/game/2848/o/Jo0HjaKf.jpg",
      description: "เกมพัซเซิลที่เต็มไปด้วยความลึกลับและท้าทายในการแก้ปัญหา",
      rating: "9.5/10",
      review: "กราฟิกพิกเซลที่น่าทึ่งและการเล่นที่ซับซ้อน",
    },
    {
      name: "The Talos Principle",
      image: "https://th.bing.com/th/id/OIP.Mplu8lEIwAbcezz_QJTyuAHaEK?rs=1&pid=ImgDetMain",
      description: "เกมพัซเซิลที่ท้าทายคุณในการแก้ปริศนาในโลกที่เต็มไปด้วยความสงสัย",
      rating: "9.2/10",
      review: "ความท้าทายในการคิดแก้ปัญหาที่ซับซ้อนและกราฟิกพิกเซลที่สวยงาม",
    }
  ],
  simulation: [
    {
      name: "Stardew Valley",
      image: "https://images.pushsquare.com/f6b5a9a5050bd/stardew-valley-1-5-ps4.original.jpg",
      description: "เกมจำลองชีวิตในฟาร์มที่มีกราฟิกพิกเซลและกิจกรรมต่างๆ ให้ทำ",
      rating: "9/10",
      review: "เกมอินดี้ที่อบอุ่นและให้ความรู้สึกที่ดีในการสร้างชีวิตของคุณ",
    },
    {
      name: "The Sims 1",
      image: "https://th.bing.com/th/id/OIP.iAOmMMQAmWWn0BrDOp06HgHaFj?rs=1&pid=ImgDetMain",
      description: "สร้างชีวิตในโลกพิกเซลตามจินตนาการของคุณ",
      rating: "8.8/10",
      review: "เกมจำลองชีวิตที่มีระบบสร้างและควบคุมชีวิตได้อย่างลึกซึ้ง",
    },
    {
      name: "Dwarf Fortress",
      image: "https://twinfinite.net/wp-content/uploads/2022/11/dwarf-fortress.jpg",
      description: "เกมจำลองการสร้างอาณาจักรของคนแคระที่เต็มไปด้วยความท้าทาย",
      rating: "9.4/10",
      review: "โลกพิกเซลที่ลึกซึ้งและระบบการจำลองที่เต็มไปด้วยรายละเอียด",
    },
    {
      name: "RimWorld",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/294100/ss_44a8828a81f12d2c4103c42df902e804d851a380.1920x1080.jpg?t=1699265633",
      description: "เกมจำลองการอยู่รอดบนดาวต่างดาวในโลกพิกเซลที่เต็มไปด้วยความท้าทาย",
      rating: "9.2/10",
      review: "การจำลองที่ลึกซึ้งและเรื่องราวที่เกิดจากการเล่นที่ยากจะคาดเดา",
    }
  ],
  rpg: [
    {
      name: "Undertale",
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/undertale-3.jpg",
      description: "เกม RPG ที่มีการผสมผสานระหว่างการต่อสู้และการพูดคุยกับมอนสเตอร์ในโลกพิกเซล",
      rating: "9.8/10",
      review: "เนื้อเรื่องที่ลึกซึ้งและการเล่นที่มีทางเลือกมากมาย",
    },
    {
      name: "EarthBound",
      image: "https://th.bing.com/th/id/OIP.ZCM2f-BXn3jvyn4djMQE2gHaEK?rs=1&pid=ImgDetMain",
      description: "เกม RPG คลาสสิกที่มีเรื่องราวและการผจญภัยในโลกพิกเซล",
      rating: "9.6/10",
      review: "การผจญภัยที่เต็มไปด้วยความตลกและอบอุ่นในโลกพิกเซล",
    },
    {
      name: "Chrono Trigger",
      image: "https://steamcdn-a.akamaihd.net/steam/apps/613830/ss_0ea9f4c76097bb20814f126d814affb6a68cf466.1920x1080.jpg?t=1534198912",
      description: "เกม RPG ที่มีการเดินทางข้ามเวลาในโลกพิกเซลสุดคลาสสิก",
      rating: "9.7/10",
      review: "ระบบการต่อสู้ที่ยอดเยี่ยมและการเล่าเรื่องที่น่าจดจำ",
    },
    {
      name: "Secret of Mana",
      image: "https://th.bing.com/th/id/OIP.6eBX9TKxrvb08iFF6aXwDQHaEK?rs=1&pid=ImgDetMain",
      description: "เกม RPG ที่มีการต่อสู้ที่สนุกและกราฟิกพิกเซลสุดคลาสสิก",
      rating: "9.4/10",
      review: "การเล่นที่เต็มไปด้วยความสนุกและตัวละครที่น่ารัก",
    }
  ],
  horror: [
    {
      name: "Lone Survivor",
      image: "https://th.bing.com/th/id/OIP.sgfL4-v2TRXQLRyg4KH8WQHaEK?rs=1&pid=ImgDetMain",
      description: "เกมสยองขวัญที่เต็มไปด้วยบรรยากาศความหวาดกลัวในโลกพิกเซล",
      rating: "9.2/10",
      review: "บรรยากาศหลอนและการเล่นที่สร้างความรู้สึกไม่ปลอดภัย",
    },
    {
      name: "Yume Nikki",
      image: "https://th.bing.com/th/id/OIP.jJ-TlMbtWXOBdb8_cTjVWgHaDw?rs=1&pid=ImgDetMain",
      description: "เกมสยองขวัญที่เต็มไปด้วยความลึกลับในฝันที่มีกราฟิกพิกเซล",
      rating: "9.4/10",
      review: "การสำรวจในโลกฝันที่เต็มไปด้วยความสยองขวัญและความลึกลับ",
    },
    {
      name: "OneShot",
      image: "https://th.bing.com/th/id/OIP.ca7lwSdTOCr8PMChXzv3FAHaDa?rs=1&pid=ImgDetMain",
      description: "เกมสยองขวัญที่มีการเล่นที่เปลี่ยนมุมมองและมีเนื้อเรื่องที่เต็มไปด้วยความลึกลับ",
      rating: "9.5/10",
      review: "เนื้อเรื่องที่อบอุ่นและการเล่นที่เต็มไปด้วยความคิดสร้างสรรค์",
    },
    {
      name: "Dark Scavenger",
      image: "https://gepig.com/game_cover_460w/4083.jpg",
      description: "เกมสยองขวัญที่เต็มไปด้วยการผจญภัยและการต่อสู้ในโลกพิกเซลที่น่ากลัว",
      rating: "9.3/10",
      review: "การต่อสู้ที่สนุกและบรรยากาศที่สร้างความหลอน",
    }
  ]
};

//randomgame
const buttons = document.querySelectorAll('.game-button');
const popup = document.getElementById('popup');
const gameTitle = document.getElementById('game-title');
const gameImage = document.getElementById('game-image');
const gameDescription = document.getElementById('game-description');
const gameRating = document.getElementById('game-rating');
const gameReview = document.getElementById('game-review');
const acceptBtn = document.getElementById('accept-btn');
//popup
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const quest = button.getAttribute('quest');
    const games = gameData[quest];
    const randomGame = games[Math.floor(Math.random() * games.length)];

    gameTitle.textContent = randomGame.name;
    gameImage.src = randomGame.image;
    gameDescription.textContent = randomGame.description;
    gameRating.textContent = `Rating: ${randomGame.rating}`;
    gameReview.textContent = `Review: ${randomGame.review}`;
    
    popup.style.display = 'flex'; 
  });
});


acceptBtn.addEventListener('click', () => {
  popup.style.display = 'none'; 
});

//gamecard
const stack = document.getElementById('cardstack');
let cards = Array.from(stack.querySelectorAll('.game-card'));
let currentIndex = 0;

function likeGame() {
  const currentCard = cards[currentIndex];
  const gameName = currentCard.dataset.name;
  addToFavorites(gameName);
}
//showpopup
function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.textContent = message;
  popup.style.display = "block";

  //hidepopup
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

//gpopup
function addToFavorites(gameName) {
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (!favs.includes(gameName)) {
    favs.push(gameName);
    localStorage.setItem("favorites", JSON.stringify(favs));
    showPopup(`💘 เพิ่ม ${gameName} ลงใน Treasure Chest แล้ว!`);
  } else {
      showPopup(`⚠️ ${gameName} มีอยู่แล้วใน Treasure Chest!`);
  }
}


