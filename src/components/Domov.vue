<!-- src/components/Domov.vue -->
<template>
  <section id="domov" class="domov-section">
    <main>
      <div class="i-con">
        <img id="img1" src="../assets/images/img.png" />
        <img id="bt" src="../assets/images/bt.png" />
      </div>

      <div class="m-text">
        <h3>PRIPOJTE SA K NÁM</h3>
        <h1>Internet od HRUŠKU</h1>
        <p>
          Od roku 2005 sa špecializujeme na sieťové technológie a ich integráciu do
          prostredia malých a stredne veľkých firiem a domácností. Naším cieľom je
          uspokojiť vaše požiadavky na vysokej úrovni. Špecializujeme sa hlavne na
          pripojenie bytov a domov internetovej siete vo <b>Zvolene</b> a jeho okolí.
        </p>
      </div>
    </main>

    <div class="info">
      <div class="h-i">
        <h2>U nás získate</h2>
        <p id="info-text">{{ rotationText }}</p>
        <div class="dh">
          <img class="img-h" src="../assets/images/path1.png" />
          <img class="img-r" ref="image" src="../assets/images/path2.png" />
          <svg
            width="389.06342"
            height="115.51642"
            viewBox="0 0 102.9397 30.563719"
            version="1.1"
            id="svg4"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
          >
            <defs id="defs1">
              <linearGradient id="linearGradient58" inkscape:collect="always">
                <stop
                  style="stop-color: #5bff00; stop-opacity: 1"
                  offset="0"
                  id="stop58"
                />
                <stop
                  style="stop-color: #21ffab; stop-opacity: 0"
                  offset="1"
                  id="stop59"
                />
              </linearGradient>
              <radialGradient
                inkscape:collect="always"
                xlink:href="#linearGradient58"
                id="radialGradient59"
                cx="167.46352"
                cy="152.71957"
                fx="167.46352"
                fy="152.71957"
                r="50.442402"
                gradientTransform="matrix(1.020808,0.01197264,-0.00565699,0.482324,17.232828,113.46252)"
                gradientUnits="userSpaceOnUse"
              />
            </defs>
            <g
              inkscape:label="Layer 1"
              inkscape:groupmode="layer"
              id="layer1"
              transform="translate(-135.26207,-169.35846)"
            >
              <rect
                style="
                  display: none;
                  fill: #001f24;
                  fill-opacity: 1;
                  fill-rule: evenodd;
                  stroke-width: 1.40819;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                id="rect1"
                width="510.41843"
                height="289.66995"
                x="-0.70630205"
                y="-0.5851199"
                ry="2.3357532"
                sodipodi:insensitive="true"
              />
              <path
                id="path1"
                style="
                  display: none;
                  fill: url(#radialGradient59);
                  fill-rule: evenodd;
                  stroke: none;
                  stroke-width: 1.396;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-opacity: 1;
                "
                d="m 187.67014,179.63481 a 50.442524,50.442524 0 0 0 -50.4424,50.4424 50.442524,50.442524 0 0 0 0.0739,1.03352 h 100.737 a 50.442524,50.442524 0 0 0 0.0739,-1.03352 50.442524,50.442524 0 0 0 -50.4424,-50.4424 z"
              />
              <path
                :style="{ fill: pathStyles.path2 }"
                ref="path2"
                style="
                  fill-opacity: 1;
                  fill-rule: evenodd;
                  stroke: #00ff36;
                  stroke-width: 0.696;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
                d="m 140.90725,197.05826 12.89001,-12.89001 1.76576,-5.65042 -19.95303,19.95304 z"
                id="path2"
              />
              <path
                :style="{ fill: pathStyles.path3 }"
                ref="path3"
                style="
                  fill-opacity: 1;
                  fill-rule: evenodd;
                  stroke: #00ff36;
                  stroke-width: 0.696;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
                d="m 163.71258,178.61542 17.57307,-4.84685 4.32493,-4.0423 -27.20215,7.50267 z"
                id="path3"
              />
              <path
                :style="{ fill: pathStyles.path4 }"
                ref="path4"
                style="
                  fill-opacity: 1;
                  fill-rule: evenodd;
                  stroke: #00ff36;
                  stroke-width: 0.696;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
                d="m 193.21764,173.6112 17.579,4.82532 5.78408,-1.26079 -27.21133,-7.46931 z"
                id="path4"
              />
              <path
                :style="{ fill: pathStyles.path5 }"
                ref="path5"
                style="
                  fill-opacity: 1;
                  fill-rule: evenodd;
                  stroke: #00ff36;
                  stroke-width: 0.696;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
                d="m 220.02537,184.06022 12.26764,13.48369 5.56084,2.03032 -18.98964,-20.872 z"
                id="path5"
              />
            </g>
          </svg>
        </div>
      </div>

      <div class="con-ponuka">
        <div class="img-con">
          <img :src="images[currentIndex].src" :alt="images[currentIndex].alt" />
          <div class="caption">{{ images[currentIndex].alt }}</div>
        </div>
        <div class="controls">
          <div class="arrow left" @click="prevImage">&#9664;</div>
          <div class="arrow right" @click="nextImage">&#9654;</div>
        </div>
      </div>

      <p>
        Ponúkame kompletné vybudovanie počítačových sietí a neobmedzené vysokorýchlostné
        pripojenie do siete internet pre všetkých. Aplikujeme technológie, ktoré prinášajú
        efektívnosť, a zároveň si zachovávajú priaznivý pomer cena/výkon. U každého
        klienta vykonáme bezplatnú obhliadku a prekonzultujeme možnosti jeho pripojenia do
        našej siete.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Domov",
  data() {
    return {
      currentRotationDegrees: 0,
      rotationText: "",

      paths: {
        path3: "#00ff36",
        path3: "none",
        path4: "none",
        path5: "none",
      },

      currentIndex: 1,
      images: [
        {
          src: new URL("../assets/images/hruska3.png", import.meta.url).href,
          alt: "montáž a zariadenie zadarmo",
        },
        {
          src: new URL("../assets/images/hruska1.png", import.meta.url).href,
          alt: "pripojenie do 24hodín",
        },
        {
          src: new URL("../assets/images/hruska4.png", import.meta.url).href,
          alt: "služby bez viazanosti",
        },
        {
          src: new URL("../assets/images/hruska2.png", import.meta.url).href,
          alt: "bezplatný servis do 24 hodín od nahlásenia poruchy",
        },
      ],
    };
  },
  computed: {
    pathStyles() {
      return {
        path2:
          this.currentRotationDegrees >= 20 && this.currentRotationDegrees < 32.5
            ? "#00ff36"
            : "none",

        path3:
          this.currentRotationDegrees >= 32.5 && this.currentRotationDegrees < 45
            ? "#00ff36"
            : "none",

        path4:
          this.currentRotationDegrees >= 45 && this.currentRotationDegrees < 52.5
            ? "#00ff36"
            : "none",

        path5: this.currentRotationDegrees >= 52.5 ? "#00ff36" : "none",
      };
    },
  },

  mounted() {
    this.updateFillPaths();
    setInterval(this.updateFillPaths, 400);
  },

  methods: {
    updateFillPaths() {
      const computedStyle = window.getComputedStyle(this.$refs.image);
      const transform = computedStyle.getPropertyValue("transform");
      const matrix = new DOMMatrix(transform);
      this.currentRotationDegrees = (Math.atan2(matrix.b, matrix.a) * 180) / Math.PI;

      if (this.currentRotationDegrees >= 20 && this.currentRotationDegrees < 32.5) {
        this.rotationText = "montáž a zariadenie zadarmo";
      } else if (
        this.currentRotationDegrees >= 32.5 &&
        this.currentRotationDegrees < 45
      ) {
        this.rotationText = "pripojenie do 24hodín";
      } else if (
        this.currentRotationDegrees >= 45 &&
        this.currentRotationDegrees < 52.5
      ) {
        this.rotationText = "služby bez viazanosti";
      } else {
        this.rotationText = "bezplatný servis do 24 hodín od nahlásenia poruchy";
      }
    },

    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    goToImage(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.i-con {
  position: relative;
}

main #img1 {
  width: 70vw;
}

@keyframes bt {
  from {
    left: 22.8vw;
  }

  to {
    left: 65vw;
  }
}

main #bt {
  width: 8vw;
  position: absolute;
  top: -5%;
  animation: bt 2s ease-in-out;
  left: 65vw;
}

.m-text {
  position: absolute;
  right: 15vw;
  top: 250px;
}

@keyframes text {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.info {
  padding: 0 10%;
  padding-bottom: 50px;
  color: #2cbdbd;
}

.info p {
  color: #148569;
  text-align: center;
}

.h-i {
  color: #2cbdbd;
}

.h-i h2 {
  position: relative;
  top: 13vh;
}

.img-h {
  width: 40vw;
  position: relative;
  right: -20vw;
}

.img-r {
  width: 12vw;
  position: relative;
  right: 12vw;
  bottom: 13vw;
  animation: rotate 5s ease-in-out infinite alternate;
}

.dh {
  position: relative;
  top: -3vw;
}

#svg4 {
  width: 16vw;
  position: absolute;
  left: 20.2vw;
  top: 13vw;
}

.con-ponuka {
  position: relative;
  left: 20%;
  margin-top: 100px;
  margin-bottom: 60px;
}

.img-con {
  width: 39vw;
  overflow: hidden;
  position: relative;
  background: #011615;
  border-radius: 15px;
}

.img-con img {
  width: 100%;
  display: block;
}

.controls {
  position: absolute;
  top: 50%;
  left: -5.5vw;
  width: 50vw;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  transform: translateY(-50%);
}

.arrow {
  border: 4px #00ff4c solid;
  color: #00ff4c;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  background-color: #00100c;
  transition: background-color 0.3s;
}

.arrow:hover {
  background-color: #02331e;
}

.caption {
  position: absolute;
  bottom: 10px;
  left: 25%;
  width: 50%;
  text-align: center;
  color: #00ff4c;
  background: #01221c;
  padding: 5px 20px;
  border-radius: 50px;
}

@keyframes rotate {
  0% {
    transform: rotate(20deg);
  }

  100% {
    transform: rotate(70deg);
  }
}

#path2,
#path3,
#path4,
#path5 {
  fill: none;
}

#info-text {
  position: absolute;
  text-align: left;
  margin-top: 13vw;
  font-size: 20px;
  width: 300px;
  color: #9dff00;
  text-transform: uppercase;
}

@media (max-width: 1180px) {
  .dh {
    top: 4vw;
  }
}

@media (max-width: 880px) {
  .i-con {
    margin-top: 100px;
    position: relative;
    left: 50px;
  }

  .con-ponuka {
    left: -5%;
  }

  .img-con {
    width: 70vw;
  }

  .controls {
    left: -5.5vw;
    width: 80vw;
  }

  .h-i h2 {
    position: initial;
  }

  .m-text {
    position: relative;
    top: 60px;
    margin-bottom: 150px;
    left: 6vw;
  }

  .m-text p,
  .m-text h1 {
    text-align: left;
    width: 74vw;
  }

  h1 {
    text-align: center;
    font-weight: bold;
  }

  .info {
    position: relative;
    top: 100px;
    margin-bottom: 90px;
  }

  .img-h {
    left: 0;
    width: 70vw;
  }

  .img-r {
    width: 18vw;
    right: -19vw;
    bottom: 38vw;
  }

  #svg4 {
    width: 25vw;
    left: 2vw;
    top: 14vw;
  }

  #info-text {
    font-size: 4vw;
    margin-top: 20px;
  }

  .dh {
    top: 20vw;
  }

  .info p {
    margin-top: 100px;
  }

  .m-text p {
    font-size: 3.8vw;
  }
}

@media (max-width: 880px) {
  .caption {
    font-size: 3vw;
    left: 20%;
  width: 60%;
  }
}
</style>
