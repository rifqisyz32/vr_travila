<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>VR Travila</title>
    <link rel="stylesheet" href="style.css" />

    <!-- Font Awesome untuk ikon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

    <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
    <script src="script.js" defer></script>
  </head>

  <body>
    <!-- Tombol UI dengan ikon dan tooltip -->
    <div id="homeButton" class="hud-button icon-only" aria-label="Home">
      <i class="fas fa-home"></i>
    </div>
    <div id="mapsButton" class="hud-button icon-only" aria-label="Google Maps">
      <i class="fas fa-map-marked-alt"></i>
    </div>
    <div id="sceneInfo" class="hud-button">Scene: 1</div>
    <div id="languageButton" class="hud-button icon-only" aria-label="Bahasa">
      <i class="fas fa-language"></i>
    </div>
    <div id="helpButton" class="hud-button icon-only" aria-label="Panduan">
      <i class="fas fa-question-circle"></i>
    </div>

    <!-- Panel info -->
    <div id="fixedInfoPanel">
      <button class="panel-close-btn">×</button>
    </div>

    <a-scene>
      <a-assets>
        <!-- Panorama -->
        <img id="pano0" src="https://cdn.glitch.global/.../PANO0.jpg?v=1749137184515" />
        <img id="pano1" src="https://cdn.glitch.global/.../PANO1.jpg?v=1749137214049" />
        <img id="pano2" src="https://cdn.glitch.global/.../PANO2.jpg?v=1749137223693" />
        <img id="pano3" src="https://cdn.glitch.global/.../PANO3.jpg?v=1749137228280" />
        <img id="pano4" src="https://cdn.glitch.global/.../PANO4.jpg?v=1749137240036" />
        <img id="pano5" src="https://cdn.glitch.global/.../PANO5.jpg?v=1749137219733" />
        <img id="pano6" src="https://cdn.glitch.global/.../PANO6.jpg?v=1749136888340" />
        <img id="pano7" src="https://cdn.glitch.global/.../PANO7.jpg?v=1749137275221" />
        <img id="pano8" src="https://cdn.glitch.global/.../PANO8.jpg?v=1749138729501" />
        <img id="pano9" src="https://cdn.glitch.global/.../PANO9.jpg?v=1749137199734" />

        <!-- Panah navigasi -->
        <img id="arrow-right" src="https://cdn.glitch.global/.../arrow%20right.png?v=1749137975766" />
        <img id="arrow-left" src="https://cdn.glitch.global/.../arrow%20left.png?v=1749137974089" />

        <!-- Info -->
        <img id="info-icon" src="https://img.icons8.com/3d-fluency/94/info-1.png" />

        <!-- Suara -->
        <audio id="click-sound" src="https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3" preload="auto"></audio>
      </a-assets>

      <!-- Kamera & cursor -->
      <a-entity id="cameraRig">
        <a-entity id="camera" camera look-controls position="0 1.6 0">
          <a-entity id="cursor"
                    cursor="fuse: true; fuseTimeout: 1000"
                    position="0 0 -1"
                    geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                    material="color: #5171ff; shader: flat">
          </a-entity>
        </a-entity>
      </a-entity>

      <!-- Latar -->
      <a-sky id="sky" src="#pano0" rotation="0 -90 0"></a-sky>

      <!-- Panah -->
      <a-image id="nextArrow" src="#arrow-right" position="0 1.6 -3" width="0.7" height="0.7" class="clickable"></a-image>
      <a-image id="prevArrow" src="#arrow-left" position="0 1.6 3" rotation="0 180 0" width="0.7" height="0.7" class="clickable"></a-image>

      <!-- Hotspot info -->
      <a-entity id="hotspot" position="1 1.5 -2" visible="true">
        <a-image src="#info-icon" width="0.3" height="0.3" class="clickable" look-at="[camera]"></a-image>
      </a-entity>
    </a-scene>
  </body>
</html>
