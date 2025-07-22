// ADDED LANGUAGE SUPPORT AT TOP
let currentLanguage = 'id'; // 'id' or 'en'

// English translations
const englishTranslations = {
  homeButton: "Home",
  mapsButton: "Map",
  helpButton: "Guide",
  languageButton: "Language",
  sceneInfo: "Scene: ",
  panelClose: "×",
  tutorialTitle: "VR Travila User Guide"
};

const indonesianTranslations = {
  homeButton: "Beranda",
  mapsButton: "Peta",
  helpButton: "Panduan",
  languageButton: "Bahasa",
  sceneInfo: "Scene: ",
  panelClose: "×",
  tutorialTitle: "Panduan Penggunaan VR Travila"
};

const sceneDescriptionsEN = [
  `<h3>Traditional Lampung Village</h3>
  <p>Lampung has cultural wealth reflected in its unique traditional villages and houses.</p>
  <p><strong>Featured villages:</strong></p>
  <ul>
    <li>Sukau Traditional Village (West Lampung)</li>
    <li>Kenali Pekon (West Lampung)</li>
    <li>Pugung Village (East Lampung)</li>
    <li>Krui Village (West Coast)</li>
    <li>Batu Bedil Pekon (Tanggamus)</li>
  </ul>`,

  `<h3>Sukau Traditional Village</h3>
  <p><strong>Location:</strong> West Lampung</p>
  <p><strong>Tribe:</strong> Saibatin (Lampung nobility)</p>
  <p><strong>Characteristics:</strong></p>
  <ul>
    <li>Nuwo Balak houses with towering roofs</li>
    <li>Still holds traditional ceremonies like Ngebabali (harvest thanksgiving)</li>
  </ul>
  <p><strong>Activities:</strong> Tapis cloth making and silver crafts</p>`,

  `<h3>Kenali Pekon</h3>
  <p><strong>Location:</strong> West Lampung</p>
  <p><strong>Tribe:</strong> Pepadun</p>
  <p><strong>Unique Features:</strong></p>
  <ul>
    <li>Wooden stilt houses with palm fiber roofs</li>
    <li>Strong clan (marga) system still maintained</li>
  </ul>
  <p><strong>Traditions:</strong></p>
  <ul>
    <li>Cakak Pepadun (traditional wrestling)</li>
    <li>Nyambai (traditional deliberation)</li>
  </ul>`,

  `<h3>Pugung Village</h3>
  <p><strong>Location:</strong> East Lampung</p>
  <p><strong>Unique Features:</strong></p>
  <ul>
    <li>Archaeological site with megalithic stones</li>
    <li>Hindu-Buddhist relics</li>
  </ul>
  <p><strong>Architecture:</strong> Blend of Lampung and Javanese (transmigrants) houses</p>`,

  `<h3>Krui Village</h3>
  <p><strong>Location:</strong> West Coast</p>
  <p><strong>Ethnic Group:</strong> Peminggir (coastal people)</p>
  <p><strong>Culture:</strong></p>
  <ul>
    <li>Fishermen houses made of bamboo and wood</li>
    <li>Annual sea offering tradition</li>
  </ul>`,

  `<h3>Batu Bedil Pekon</h3>
  <p><strong>Location:</strong> Tanggamus</p>
  <p><strong>History:</strong></p>
  <ul>
    <li>Site where Batu Bedil inscription was found</li>
    <li>Relics from Srivijaya Kingdom</li>
  </ul>
  <p><strong>Architecture:</strong></p>
  <ul>
    <li>Traditional houses with elephant ornaments (symbol of strength)</li>
  </ul>`,

  `<h3>Traditional Lampung House</h3>
  <p>Differentiated by sub-tribes (Pepadun vs. Saibatin) and functions.</p>
  <p><strong>Example: Lamban Pesagi (Coastal Community House)</strong></p>
  <p><strong>Characteristics:</strong></p>
  <ul>
    <li>Square shape with wooden walls</li>
    <li>Lower roof to withstand coastal winds</li>
  </ul>
  <p><strong>Example Location:</strong> Hanakau Village (West Coast)</p>`,

  `<h3>Nuwo Sesat (Pepadun House)</h3>
  <p><strong>Structure:</strong></p>
  <ul>
    <li>Wooden stilt house 1.5-2 meters high</li>
    <li>Pyramid-shaped roof from palm fiber or zinc</li>
    <li>Odd-numbered stairs (usually 7 or 9 steps)</li>
  </ul>
  <p><strong>Function:</strong></p>
  <ul>
    <li>Venue for traditional deliberations (Sesat Agung)</li>
    <li>Symbol of egalitarianism (leadership through deliberation)</li>
  </ul>
  <p><strong>Ornaments:</strong></p>
  <ul>
    <li>Bamboo shoot motif carvings (symbolizing growth)</li>
    <li>Tapis cloth displayed on walls</li>
  </ul>`,

  `<h3>Nuwo Balak (Saibatin House)</h3>
  <p><strong>Structure:</strong></p>
  <ul>
    <li>More majestic with large wooden pillars</li>
    <li>Buffalo horn-shaped roof (symbol of nobility)</li>
    <li>Has an anjung (veranda) for receiving guests</li>
  </ul>
  <p><strong>Function:</strong></p>
  <ul>
    <li>Residence of the penyimbang (traditional leader)</li>
    <li>Used for wedding rituals or traditional title ceremonies</li>
  </ul>
  <p><strong>Ornaments:</strong></p>
  <ul>
    <li>Swastika motif (symbol of prosperity)</li>
    <li>Buffalo horns on roof (social status symbol)</li>
  </ul>`,

  `<h3>Active Traditional Villages & Houses</h3>
  <p><strong>Kenali Village</strong></p>
  <ul>
    <li>Still has 10+ authentic Nuwo Sesat houses</li>
    <li>Holds annual traditional festival</li>
  </ul>
  <p><strong>Marga Traditional House Complex</strong></p>
  <ul>
    <li>Well-maintained collection of Pepadun houses</li>
    <li>Often used for cultural training</li>
  </ul>`,
  
  `<h3>Active Traditional Villages & Houses</h3>
  <p><strong>Kenali Village</strong></p>
  <ul>
    <li>Still has 10+ authentic Nuwo Sesat houses</li>
    <li>Holds annual traditional festival</li>
  </ul>
  <p><strong>Marga Traditional House Complex (Central Lampung)</strong></p>
  <ul>
    <li>Well-maintained collection of Pepadun houses</li>
    <li>Often used for cultural training</li>
  </ul>`
];

// Scene data
const sceneDescriptions = [
 
  `<h3>Desa Tradisional Lampung</h3>
  <p>Lampung memiliki kekayaan budaya yang tercermin dari desa-desa tradisional dan rumah adat yang unik.</p>
  <p><strong>Beberapa desa yang ditampilkan:</strong></p>
  <ul>
    <li>Desa Adat Sukau (Lampung Barat)</li>
    <li>Pekon Kenali (Lampung Barat)</li>
    <li>Kampung Pugung (Lampung Timur)</li>
    <li>Desa Krui (Pesisir Barat)</li>
    <li>Pekon Batu Bedil (Tanggamus)</li>
  </ul>`,

  `<h3>Desa Adat Sukau</h3>
  <p><strong>Lokasi:</strong> Lampung Barat</p>
  <p><strong>Suku:</strong> Saibatin (bangsawan Lampung)</p>
  <p><strong>Ciri Khas:</strong></p>
  <ul>
    <li>Rumah Nuwo Balak dengan atap menjulang</li>
    <li>Masih mengadakan upacara adat seperti Ngebabali (syukuran panen)</li>
  </ul>
  <p><strong>Aktivitas:</strong> Pembuatan kain tapis dan kerajinan perak</p>`,

  `<h3>Pekon Kenali</h3>
  <p><strong>Lokasi:</strong> Lampung Barat</p>
  <p><strong>Suku:</strong> Pepadun</p>
  <p><strong>Keunikan:</strong></p>
  <ul>
    <li>Rumah panggung kayu beratap ijuk</li>
    <li>Sistem marga (klan) masih kuat</li>
  </ul>
  <p><strong>Tradisi:</strong></p>
  <ul>
    <li>Cakak Pepadun (gulat adat)</li>
    <li>Nyambai (musyawarah adat)</li>
  </ul>`,

  `<h3>Kampung Pugung</h3>
  <p><strong>Lokasi:</strong> Lampung Timur</p>
  <p><strong>Fitur Unik:</strong></p>
  <ul>
    <li>Situs purbakala dengan batu megalitik</li>
    <li>Peninggalan Hindu-Buddha</li>
  </ul>
  <p><strong>Arsitektur:</strong> Perpaduan rumah Lampung dan Jawa (transmigran)</p>`,

  `<h3>Desa Krui</h3>
  <p><strong>Lokasi:</strong> Pesisir Barat</p>
  <p><strong>Etnis:</strong> Peminggir (pesisir)</p>
  <p><strong>Budaya:</strong></p>
  <ul>
    <li>Rumah nelayan berbahan bambu dan kayu</li>
    <li>Tradisi sedekah laut setiap tahun</li>
  </ul>`,

  `<h3>Pekon Batu Bedil</h3>
  <p><strong>Lokasi:</strong> Tanggamus</p>
  <p><strong>Sejarah:</strong></p>
  <ul>
    <li>Tempat ditemukannya prasasti Batu Bedil</li>
    <li>Peninggalan Kerajaan Sriwijaya</li>
  </ul>
  <p><strong>Arsitektur:</strong></p>
  <ul>
    <li>Rumah adat dengan ornamen gajah (simbol kekuatan)</li>
  </ul>`,

  `<h3>Rumah Adat Lampung</h3>
  <p>Dibedakan berdasarkan sub-suku (Pepadun vs. Saibatin) dan fungsinya.</p>
  <p><strong>Contoh: Lamban Pesagi (Rumah Masyarakat Pesisir)</strong></p>
  <p><strong>Ciri Khas:</strong></p>
  <ul>
    <li>Bentuk persegi dengan dinding papan</li>
    <li>Atap lebih rendah untuk menahan angin pantai</li>
  </ul>
  <p><strong>Contoh Lokasi:</strong> Desa Hanakau (Pesisir Barat)</p>`,

  `<h3>Nuwo Sesat (Rumah Pepadun)</h3>
  <p><strong>Struktur:</strong></p>
  <ul>
    <li>Panggung kayu setinggi 1,5–2 meter</li>
    <li>Atap berbentuk limas dari ijuk atau seng</li>
    <li>Tangga berjumlah ganjil (biasanya 7 atau 9 anak tangga)</li>
  </ul>
  <p><strong>Fungsi:</strong></p>
  <ul>
    <li>Tempat musyawarah adat (Sesat Agung)</li>
    <li>Simbol egaliter (kepemimpinan berdasarkan musyawarah)</li>
  </ul>
  <p><strong>Ornamen:</strong></p>
  <ul>
    <li>Ukiran motif pucuk rebung (pertumbuhan)</li>
    <li>Kain tapis dipajang di dinding</li>
  </ul>`,

  `<h3>Nuwo Balak (Rumah Saibatin)</h3>
  <p><strong>Struktur:</strong></p>
  <ul>
    <li>Lebih megah dengan tiang kayu besar</li>
    <li>Atap berbentuk tanduk kerbau (simbol kebangsawanan)</li>
    <li>Memiliki anjung (serambi) untuk menerima tamu</li>
  </ul>
  <p><strong>Fungsi:</strong></p>
  <ul>
    <li>Tempat tinggal penyimbang (tokoh adat)</li>
    <li>Digunakan untuk ritual pernikahan atau pengukuhan gelar adat</li>
  </ul>
  <p><strong>Ornamen:</strong></p>
  <ul>
    <li>Motif swastika (lambang kemakmuran)</li>
    <li>Tanduk kerbau di atap (status sosial)</li>
  </ul>`,

  `<h3>Desa & Rumah Adat yang Masih Aktif</h3>
  <p><strong>Desa Kenali</strong></p>
  <ul>
    <li>Masih memiliki 10+ rumah Nuwo Sesat asli</li>
    <li>Mengadakan festival adat tahunan</li>
  </ul>
  <p><strong>Kompleks Rumah Adat Marga</strong></p>
  <ul>
    <li>Kumpulan rumah adat Pepadun yang terawat</li>
    <li>Sering digunakan untuk pelatihan budaya</li>
  </ul>`,
  
  `<h3>Desa & Rumah Adat yang Masih Aktif</h3>
       <p><strong>Desa Kenali</strong></p>
       <ul>
          <li>Masih memiliki 10+ rumah Nuwo Sesat asli</li>
          <li>Mengadakan festival adat tahunan</li>
        </ul>
        <p><strong>Kompleks Rumah Adat Marga (Lampung Tengah)</strong></p>
        <ul>
          <li>Kumpulan rumah adat Pepadun yang terawat</li>
          <li>Sering digunakan untuk pelatihan budaya</li>
        </ul>`,
];

const tutorialContent = `
  <div class="panel-header">
    <h3>Panduan Penggunaan VR Travila</h3>
  </div>
  <ul>
    <li>Gerakkan smartphone atau mouse untuk melihat sekitar</li>
    <li>Arahkan kursor ke tombol panah untuk berpindah scene</li>
    <li>Arahkan kursor ke ikon "i" untuk melihat informasi mengenai desa Lampung</li>
    <li>Klik tombol "Beranda" untuk kembali ke scene awal</li>
    <li>Klik tombol "Peta" untuk melihat alamat foto di halaman Google Maps</li>
    <li>Klik tombol "Bahasa" untuk mengganti bahasa aplikasi</li>
  </ul>

`;

const tutorialContentEN = `
  <div class="panel-header">
    <h3>VR Travila User Guide</h3>
  </div>
  <ul>
    <li>Move your smartphone or mouse to look around</li>
    <li>Point the cursor at the arrow button to switch scenes</li>
    <li>Point the cursor at the "i" icon to view information about Lampung village</li>
    <li>Click the "Home" button to return to the initial scene</li>
    <li>Click the "Map" button to view the photo location on Google Maps</li>
    <li>Click the "Language" button to change the application language</li>
  </ul>
`;

// Adjusted positions for the info button in each scene [x, y, z]
const hotspotPositions = [
  [1, 1.5, -2],    // Scene 0
  [1.5, 1.5, -2],   // Scene 1
  [2.5, 2, 1.5], // Scene 2
  [-4, 1.5, 2],    // Scene 3
  [4, 2, 4], // Scene 4 
  [-3, 1.5, -1],  // Scene 5
  [0.5, 2.5, -2], // Scene 6
  [3, 1.5, -1],     // Scene 7
  [-4, 1.5, -1.5], // Scene 8
  [1, 2, 2]      // Scene 9
];

// DOM elements
const sky = document.getElementById("sky");
const sceneInfo = document.getElementById("sceneInfo");
const cursor = document.querySelector("#cursor");
const nextArrow = document.querySelector("#nextArrow");
const prevArrow = document.querySelector("#prevArrow");
const clickSound = document.getElementById("click-sound");
const fixedInfoPanel = document.getElementById("fixedInfoPanel");
const hotspot = document.getElementById("hotspot");
const homeButton = document.getElementById("homeButton");
const helpButton = document.getElementById("helpButton");
const mapsButton = document.getElementById("mapsButton");
const languageButton = document.getElementById("languageButton");

// Create overlay element
const panelOverlay = document.createElement('div');
panelOverlay.id = 'panelOverlay';
document.body.appendChild(panelOverlay);

// State
let currentScene = 0;
const totalScenes = 10;

// Utility functions
function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// Core functions
function updateScene() {
  sky.setAttribute("src", `#pano${currentScene}`);
  const translations = currentLanguage === 'id' ? indonesianTranslations : englishTranslations;
  sceneInfo.textContent = `${translations.sceneInfo}${currentScene + 1}`;
  const pos = hotspotPositions[currentScene];
  hotspot.setAttribute("position", { x: pos[0], y: pos[1], z: pos[2] });
}

function toggleLanguage() {
  playClickSound();
  currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
  updateLanguage();
}


function updateLanguage() {
  const translations = currentLanguage === 'id' ? indonesianTranslations : englishTranslations;

  // Update icon button labels
  homeButton.querySelector(".button-label").textContent = translations.homeButton;
  mapsButton.querySelector(".button-label").textContent = translations.mapsButton;
  helpButton.querySelector(".button-label").textContent = translations.helpButton;
  languageButton.querySelector(".button-label").textContent = translations.languageButton;

  updateScene();
}


// Panel management
function showPanel(content) {
  fixedInfoPanel.innerHTML = `
    <div class="panel-content">
      <button class="panel-close-btn">×</button>
      ${content}
    </div>
  `;
  fixedInfoPanel.style.display = "block";
  panelOverlay.style.display = "block";

  // Add close button event listener
  document.querySelector('.panel-close-btn').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    closePanel();
  });
}

function closePanel() {
  fixedInfoPanel.style.display = "none";
  panelOverlay.style.display = "none";
}

function showHelp() {
  playClickSound();
  const content = currentLanguage === 'id' ? tutorialContent : tutorialContentEN;
  
  // Close if same content is already shown
  if (fixedInfoPanel.style.display === "block") {
    const currentContent = currentLanguage === 'id' ? tutorialContent : tutorialContentEN;
    if (fixedInfoPanel.innerHTML.includes(currentContent)) {
      closePanel();
      return;
    }
  }
  
  showPanel(content);
}

function nextScene() {
  playClickSound();
  currentScene = (currentScene + 1) % totalScenes;
  updateScene();
  closePanel();
}

function prevScene() {
  playClickSound();
  currentScene = (currentScene - 1 + totalScenes) % totalScenes;
  updateScene();
  closePanel();
}

function goHome() {
  playClickSound();
  currentScene = 0;
  updateScene();
  closePanel();
}

function toMaps() {
  playClickSound();
  window.open('https://maps.app.goo.gl/UT4gzrJoreDuqbFh9', '_blank');
}

// Event listeners
hotspot.addEventListener("click", (e) => {
  e.stopPropagation();
  playClickSound();
  const content = currentLanguage === 'id' ? 
    sceneDescriptions[currentScene] : 
    sceneDescriptionsEN[currentScene];
  showPanel(content);
});

languageButton.addEventListener("click", toggleLanguage);
nextArrow.addEventListener("click", nextScene);
prevArrow.addEventListener("click", prevScene);
homeButton.addEventListener("click", goHome);
helpButton.addEventListener("click", showHelp);
mapsButton.addEventListener("click", toMaps);
panelOverlay.addEventListener("click", closePanel);

// Cursor interaction
[nextArrow, prevArrow, hotspot].forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.setAttribute("material", "color", "green");
  });
  el.addEventListener("mouseleave", () => {
    cursor.setAttribute("material", "color", "blue");
  });
});

// Event listeners
document.addEventListener('click', function(e) {
  // Handle close button click
  if (e.target.classList.contains('panel-close-btn')) {
    closePanel();
    return;
  }
  
  // Handle overlay click
  if (e.target === panelOverlay) {
    closePanel();
  }
});

// Initialize
updateLanguage();
updateScene();