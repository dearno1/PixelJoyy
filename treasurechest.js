const gameDataa = {
    "Stardew Valley": {
        img: "https://images.pushsquare.com/f6b5a9a5050bd/stardew-valley-1-5-ps4.original.jpg",
        link: "https://store.steampowered.com/app/413150/Stardew_Valley/",
        desc: "เริ่มชีวิตใหม่ในฟาร์มของคุณเองในหุบเขาสงบแห่งนี้",
        genre: "Simulation, RPG",
        platforms: ["PC", "Mac", "Switch"]
    },
    "Fez": {
        img: "https://cdn.akamai.steamstatic.com/steam/apps/224760/header.jpg",
        link: "https://store.steampowered.com/app/224760/Fez/",
        desc: "สลับมุมมอง 2D/3D เพื่อไขปริศนาโลกสุดประหลาด",
        genre: "แพลตฟอร์ม, ปริศนา",
        platforms: ["PC", "PS4"]
    },
    "Eastward": {
        img: "https://cdn.akamai.steamstatic.com/steam/apps/977880/header.jpg",
        link: "https://store.steampowered.com/app/977880/Eastward/",
        desc: "ผจญภัยในโลกสไตล์พิกเซลกับเรื่องราวลึกลับ",
        genre: "ผจญภัย, RPG",
        platforms: ["PC", "Switch"]
    },
    "Katana ZERO": {
        img: "https://cdn.akamai.steamstatic.com/steam/apps/460950/header.jpg",
        link: "https://store.steampowered.com/app/460950/Katana_ZERO/",
        desc: "นักฆ่านีโอนัวร์ที่สามารถควบคุมเวลาได้",
        genre: "แอ็กชัน, นีโอนัวร์",
        platforms: ["PC", "Switch"]
    },
    "Owlboy": {
        img: "https://cdn.akamai.steamstatic.com/steam/apps/115800/header.jpg",
        link: "https://store.steampowered.com/app/115800/Owlboy/",
        desc: "บินไปในโลกสุดงดงามกับ Otus นกฮูกนักผจญภัย",
        genre: "ผจญภัย, แพลตฟอร์ม",
        platforms: ["PC", "Switch"]
    },
    "Shovel Knight": {
        img: "https://cdn.akamai.steamstatic.com/steam/apps/250760/header.jpg",
        link: "https://store.steampowered.com/app/250760/Shovel_Knight/",
        desc: "นักขุดผู้กล้าที่ต้องปกป้องโลกในสไตล์ 8-bit",
        genre: "แอ็กชัน, ผจญภัย, แพลตฟอร์ม",
        platforms: ["PC", "Switch", "PS4"]
    },
    "Super Meat Boy": {
        img: "https://cdn.akamai.steamstatic.com/steam/apps/40800/header.jpg",
        link: "https://store.steampowered.com/app/40800/Super_Meat_Boy/",
        desc: "แพลตฟอร์มระดับฮาร์ดคอร์ กู้แฟนสาวจากด่านสุดโหด",
        genre: "แพลตฟอร์ม, แอ็กชัน",
        platforms: ["PC", "Switch"]
    },
    "Hotline Miami": {
        img: "https://cdn.akamai.steamstatic.com/steam/apps/219150/header.jpg",
        link: "https://store.steampowered.com/app/219150/Hotline_Miami/",
        desc: "แอ็กชันเลือดสาด เร็ว ดุเดือด ในโลกนีโอนัวร์",
        genre: "แอ็กชัน, นีโอนัวร์",
        platforms: ["PC", "Switch"]
    },
    "Dead Cells": {
        img: "https://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg",
        link: "https://store.steampowered.com/app/588650/Dead_Cells/",
        desc: "แอ็กชัน Roguelike และ Metroidvania รวมกัน!",
        genre: "แอ็กชัน, Roguelike, Metroidvania",
        platforms: ["PC", "Switch", "PS4"]
    },
    "Octopath Traveler": {
        img: "https://th.bing.com/th/id/OIP.EPoxAtSmUsJD55S_0-B9NgHaEP?w=616&h=353&rs=1&pid=ImgDetMain",
        link: "https://store.steampowered.com/app/921570/OCTOPATH_TRAVELER/",
        desc: "RPG 8 ตัวละคร 8 เรื่องราว แฟนตาซีสุดสวย",
        genre: "RPG",
        platforms: ["PC", "Switch"]
    },
    "The Messenger": {
        img: "https://cdn.akamai.steamstatic.com/steam/apps/764790/header.jpg",
        link: "https://store.steampowered.com/app/764790/The_Messenger/",
        desc: "นินจาพิกเซลผู้กอบกู้อนาคต!",
        genre: "แอ็กชัน, ผจญภัย, แพลตฟอร์ม",
        platforms: ["PC", "Switch"]
    },
    "Celeste": {
        img: "https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg",
        link: "https://store.steampowered.com/app/504230/Celeste/",
        desc: "แพลตฟอร์มสุดเข้มข้นกับการปีนเขาเพื่อค้นหาตัวตน",
        genre: "แพลตฟอร์ม, ผจญภัย",
        platforms: ["PC", "Switch", "PS4"]
    }
    
};

//Favorites
const container = document.getElementById("treasurechest");
const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

if (favorites.length === 0) {
    container.innerHTML = "<p>Your treasure chest is empty</p>";
} else {
    favorites.forEach(game => {
        const data = gameDataa[game]; 
        if (!data) return; //skipnextgame

        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
            <a href="${data.link}" target="_blank">
                <img src="${data.img}" alt="${game}">
            </a>
            <h3>${game}</h3>
            <p>${data.desc}</p>
            <p><strong>แนวเกม:</strong> ${data.genre}</p>
            <div>${data.platforms.map(p => `<span class="tag">${p}</span>`).join('')}</div>
            <div class="card-actions">
                <button onclick="removeFromFavorites('${game}')">🗑️ ลบ</button>
            </div>
        `;
        container.appendChild(card); //addcard
    });
}

//remove
function removeFromFavorites(gameName) {
    const updatedFavorites = favorites.filter(g => g !== gameName); //cheackgame
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    location.reload(); 
}
//recommendations
function getRecommendedGames() {
    const recommendations = [];
    const added = new Set(favorites); //savegame

   
    const likedGenres = new Set();
    favorites.forEach(game => {
        const gameInfo = gameDataa[game]; //gameDataa from fav
        if (gameInfo && gameInfo.genre) {
            gameInfo.genre.split(',').map(g => g.trim()).forEach(g => likedGenres.add(g));
        }
    });

    Object.entries(gameDataa).forEach(([name, data]) => {
        if (added.has(name)) return; //if have skip

        const gameGenres = data.genre.split(',').map(g => g.trim());
        const hasCommonGenre = gameGenres.some(genre => likedGenres.has(genre)); //cheack

        if (hasCommonGenre) {
            recommendations.push({ name, data });
        }
    });

    return recommendations;
}
//renderRecommendations
function renderRecommendations() {
    const recContainer = document.getElementById("recommendations");
    const recommended = getRecommendedGames();

    if (recommended.length === 0) {
        recContainer.innerHTML = "<p style='text-align:center;'>No recommendations yet. Like more games to see suggestions</p>";
        return;
    }

    recommended.forEach(({ name, data }) => {
        const card = document.createElement("div");
        card.className = "game-card"; //css
        card.innerHTML = `
            <a href="${data.link}" target="_blank">
                <img src="${data.img}" alt="${name}">
            </a>
            <h3>${name}</h3>
            <p>${data.desc}</p>
            <p><strong>แนวเกม:</strong> ${data.genre}</p>
            <div>${data.platforms.map(p => `<span class="tag">${p}</span>`).join('')}</div>
        `;
        recContainer.appendChild(card); //addcard
    });
}
renderRecommendations();
