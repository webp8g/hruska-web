<!-- src/components/Tv.vue -->
<template>
  <section id="tv" class="tv-section">
    <main class="sub-section">
      <h1>TV</h1>

      <div class="row">
        <div class="col b no-select" v-for="(plan, index) in plans" :key="index">
          <div class="image-grid" :id="'imageGrid' + (index + 1)">
            <h2>{{ plan.name }}</h2>
            <p class="p">{{ plan.price }} / mesiac</p>

            <div class="ch">
              <span class="check"></span>
              <p class="p-check">{{ plan.channels }} programov</p>
              <span class="zob" @click="toggleChannels(index)">zobraziť ponuku</span>
            </div>

            <div v-if="showChannels[index]" class="channel-list">
              <div
                v-for="(channel, imgIndex) in accumulatedChannels[index]"
                :key="imgIndex"
                class="image-container"
                :ref="'imageContainer' + index"
              >
                <img
                  v-show="isVisible[index][imgIndex]"
                  :data-src="channel.path"
                  :alt="channel.name"
                  class="lazy-image"
                  @mouseover="showTooltip(imgIndex, index)"
                  @mouseleave="hideTooltip(index)"
                />
                <span v-if="tooltipVisible[index] === imgIndex" class="tooltip">{{
                  channel.name
                }}</span>
              </div>
            </div>
            <button
              v-if="showChannels[index]"
              @click="toggleChannels(index)"
              class="close-b"
            >
              x
            </button>
          </div>
        </div>
      </div>
    </main>

    <div class="pI">
      <button @click="openComponent">Partnerský Internet a Televízia</button>
      <button @click="closeComponent" v-show="isClicked" class="close-c">x</button>
    </div>

    <partnerskyInternetATv :showComponent="isClicked" />
  </section>
</template>

<script>
import partnerskyInternetATv from "./partnerskyInternetATv.vue";

export default {
  name: "Tv",
  components: {
    partnerskyInternetATv,
  },
  data() {
    return {
      isClicked: false,
      plans: [
        { name: "STANDARD", price: "8,50€", channels: 110 },
        { name: "RODINA", price: "16,50€", channels: 138 },
        { name: "MAXI", price: "24,50€", channels: 176 },
      ],
      showChannels: [false, false, false],
      accumulatedChannels: [[], [], []],
      imageData: [
        [
          {
            path: new URL("../assets/images/kanal/JEDNOTKAHD.png", import.meta.url).href,
            name: "JEDNOTKA HD",
          },
          {
            path: new URL("../assets/images/kanal/DVOJKAHD.png", import.meta.url).href,
            name: "DVOJKA HD",
          },
          {
            path: new URL("../assets/images/kanal/RTVS_24.png", import.meta.url).href,
            name: "RTVS 24",
          },
          {
            path: new URL("../assets/images/kanal/markiza.png", import.meta.url).href,
            name: "MARKÍZA",
          },
          {
            path: new URL("../assets/images/kanal/doma.png", import.meta.url).href,
            name: "DOMA",
          },
          {
            path: new URL("../assets/images/kanal/dajto.png", import.meta.url).href,
            name: "DAJTO",
          },
          {
            path: new URL("../assets/images/kanal/markiza-krimi.png", import.meta.url)
              .href,
            name: "MARKÍZA KRIMI",
          },
          {
            path: new URL("../assets/images/kanal/JOJ-Tv.png", import.meta.url).href,
            name: "JOJ",
          },
          {
            path: new URL("../assets/images/kanal/joj-plus.png", import.meta.url).href,
            name: "JOJ PLUS",
          },
          {
            path: new URL("../assets/images/kanal/joj-sport.png", import.meta.url).href,
            name: "JOJ ŠPORT",
          },
          {
            path: new URL("../assets/images/kanal/Jojko.png", import.meta.url).href,
            name: "Jojko",
          },
          {
            path: new URL("../assets/images/kanal/rik.png", import.meta.url).href,
            name: "RIK",
          },
          {
            path: new URL("../assets/images/kanal/TA3.png", import.meta.url).href,
            name: "TA3",
          },
          {
            path: new URL("../assets/images/kanal/CT1.png", import.meta.url).href,
            name: "CT1",
          },
          {
            path: new URL("../assets/images/kanal/CT2.png", import.meta.url).href,
            name: "CT2",
          },
          {
            path: new URL("../assets/images/kanal/CT24.png", import.meta.url).href,
            name: "CT24",
          },
          {
            path: new URL("../assets/images/kanal/CTart.png", import.meta.url).href,
            name: "CTart",
          },
          {
            path: new URL("../assets/images/kanal/CTdecko.png", import.meta.url).href,
            name: "CTdecko.",
          },
          {
            path: new URL("../assets/images/kanal/CTsport.png", import.meta.url).href,
            name: "CTsport.",
          },
          {
            path: new URL("../assets/images/kanal/Seznam.png", import.meta.url).href,
            name: "Seznam.png",
          },
          {
            path: new URL("../assets/images/kanal/prima-news.png", import.meta.url).href,
            name: "PrimaNEWS",
          },
          {
            path: new URL("../assets/images/kanal/PrimaPLUS.png", import.meta.url).href,
            name: "PrimaPLUS",
          },
          {
            path: new URL("../assets/images/kanal/NOVAInternational.png", import.meta.url)
              .href,
            name: "NOVAInternational",
          },
          {
            path: new URL("../assets/images/kanal/OCKO-TVHD.png", import.meta.url).href,
            name: "OCKO-TVHD",
          },
          {
            path: new URL("../assets/images/kanal/OCKOBlackHD.png", import.meta.url).href,
            name: "OCKOBlackHD",
          },
          {
            path: new URL("../assets/images/kanal/OCKOExpresHD.png", import.meta.url)
              .href,
            name: "OCKOExpresHD",
          },
          {
            path: new URL("../assets/images/kanal/OCKOSTARHD.png", import.meta.url).href,
            name: "OCKOSTARHD",
          },
          {
            path: new URL("../assets/images/kanal/FILM-BOX.png", import.meta.url).href,
            name: "FILM-BOX",
          },
          {
            path: new URL("../assets/images/kanal/Barrandov.png", import.meta.url).href,
            name: "Barrandov",
          },
          {
            path: new URL("../assets/images/kanal/Barrandov-KINO.png", import.meta.url)
              .href,
            name: "BarrandovKINO",
          },
          {
            path: new URL("../assets/images/kanal/Barrandov-KRIMI.png", import.meta.url)
              .href,
            name: "BarrandovKRIMI",
          },
          {
            path: new URL("../assets/images/kanal/ARENA-SPORT-1.png", import.meta.url)
              .href,
            name: "ARENA SPORT 1",
          },
          {
            path: new URL("../assets/images/kanal/ARENA-SPORT-2.png", import.meta.url)
              .href,
            name: "ARENA SPORT 2",
          },
          {
            path: new URL("../assets/images/kanal/Natura.png", import.meta.url).href,
            name: "Natura.png",
          },
          {
            path: new URL("../assets/images/kanal/RETRO.png", import.meta.url).href,
            name: "RETRO",
          },
          {
            path: new URL("../assets/images/kanal/LifeTV.png", import.meta.url).href,
            name: "LifeTV",
          },
          {
            path: new URL("../assets/images/kanal/BBC.png", import.meta.url).href,
            name: "BBC",
          },
          {
            path: new URL(
              "../assets/images/kanal/PanoramaKubinskaHola.png",
              import.meta.url
            ).href,
            name: "PanoramaKubinskaHola",
          },
          {
            path: new URL(
              "../assets/images/kanal/PanoramaMalinoBrdo.png",
              import.meta.url
            ).href,
            name: "PanoramaMalinoBrdo'",
          },
          {
            path: new URL("../assets/images/kanal/TV-LUX.png", import.meta.url).href,
            name: "TV-LUX",
          },
          {
            path: new URL("../assets/images/kanal/LoungeTV.png", import.meta.url).href,
            name: "LoungeTV",
          },
          {
            path: new URL("../assets/images/kanal/TVRUZOMBEROK.png", import.meta.url)
              .href,
            name: "TVRUZOMBEROK",
          },
          {
            path: new URL("../assets/images/kanal/NOE-TV.png", import.meta.url).href,
            name: "NOE-TV",
          },
          {
            path: new URL("../assets/images/kanal/POLAT-TV.png", import.meta.url).href,
            name: "POLAT-TV",
          },
          {
            path: new URL("../assets/images/kanal/SkyNews.png", import.meta.url).href,
            name: "SkyNews",
          },
          {
            path: new URL("../assets/images/kanal/FRANCE24.png", import.meta.url).href,
            name: "FRANCE24",
          },
          {
            path: new URL("../assets/images/kanal/Mnau-KRUH.png", import.meta.url).href,
            name: "Mnau",
          },
          {
            path: new URL("../assets/images/kanal/Mnam-KRUH.png", import.meta.url).href,
            name: "Mnam",
          },
          {
            path: new URL("../assets/images/kanal/hobbytv.png", import.meta.url).href,
            name: "hobbytv",
          },
          {
            path: new URL("../assets/images/kanal/PaprikaTV.png", import.meta.url).href,
            name: "PaprikaTV",
          },
          {
            path: new URL("../assets/images/kanal/FILMpro.png", import.meta.url).href,
            name: "FILMpro",
          },
          {
            path: new URL("../assets/images/kanal/M1.png", import.meta.url).href,
            name: "M1",
          },
          {
            path: new URL("../assets/images/kanal/M2.png", import.meta.url).href,
            name: "M2",
          },
          {
            path: new URL("../assets/images/kanal/DUNA-TV.png", import.meta.url).href,
            name: "DUNA-TV",
          },
          {
            path: new URL("../assets/images/kanal/DUNA-WORLD.png", import.meta.url).href,
            name: "DUNA-WORLD",
          },
          {
            path: new URL("../assets/images/kanal/M4.png", import.meta.url).href,
            name: "M4g",
          },
          {
            path: new URL("../assets/images/kanal/M5.png", import.meta.url).href,
            name: "M5",
          },
          {
            path: new URL("../assets/images/kanal/NASA.png", import.meta.url).href,
            name: "NASA",
          },
          {
            path: new URL("../assets/images/kanal/NASAUHD.png", import.meta.url).href,
            name: "NASAUHD",
          },
          {
            path: new URL("../assets/images/kanal/TV8.png", import.meta.url).href,
            name: "TV8",
          },
        ],

        [
          {
            path: new URL("../assets/images/kanal/Cartoon-Network.png", import.meta.url)
              .href,
            name: "Cartoon-Network",
          },
          {
            path: new URL("../assets/images/kanal/JOJ-CINEMA.png", import.meta.url).href,
            name: "JOJ-CINEMA",
          },
          {
            path: new URL("../assets/images/kanal/AnimalPlanet.png", import.meta.url)
              .href,
            name: "AnimalPlanet",
          },
          {
            path: new URL("../assets/images/kanal/Travel-channel.png", import.meta.url)
              .href,
            name: "Travel-channel",
          },
          {
            path: new URL("../assets/images/kanal/EUROSPORT-1.png", import.meta.url).href,
            name: "EUROSPORT-1",
          },
          {
            path: new URL("../assets/images/kanal/EUROSPORT-2.png", import.meta.url).href,
            name: "EUROSPORT-2",
          },
          {
            path: new URL("../assets/images/kanal/SPORT1.png", import.meta.url).href,
            name: "SPORT1",
          },
          {
            path: new URL("../assets/images/kanal/SPORT2.png", import.meta.url).href,
            name: "SPORT2",
          },
          {
            path: new URL("../assets/images/kanal/REBEL.png", import.meta.url).href,
            name: "REBEL",
          },
          {
            path: new URL("../assets/images/kanal/Nickelodeon.png", import.meta.url).href,
            name: "Nickelodeon",
          },
          {
            path: new URL(
              "../assets/images/kanal/Nickelodeon-junior.png",
              import.meta.url
            ).href,
            name: "Nickelodeon-junior'",
          },
          {
            path: new URL("../assets/images/kanal/Nicktoons.png", import.meta.url).href,
            name: "Nicktoons",
          },
          {
            path: new URL("../assets/images/kanal/Discovery.png", import.meta.url).href,
            name: "Discovery",
          },
          {
            path: new URL(
              "../assets/images/kanal/DiscoveryScienceHD.png",
              import.meta.url
            ).href,
            name: "DiscoveryScienceHD",
          },
          {
            path: new URL(
              "../assets/images/kanal/DiscoveryTurbo-extra.png",
              import.meta.url
            ).href,
            name: "DiscoveryTurbo-extra",
          },
          {
            path: new URL(
              "../assets/images/kanal/DiscoveryInvestigation.png",
              import.meta.url
            ).href,
            name: "DiscoveryInvestigation'",
          },
          {
            path: new URL("../assets/images/kanal/TLC.png", import.meta.url).href,
            name: "TLC",
          },
          {
            path: new URL("../assets/images/kanal/AMC.png", import.meta.url).href,
            name: "AMC",
          },
        ],

        [
          {
            path: new URL("../assets/images/kanal/Cinemax1.png", import.meta.url).href,
            name: "Cinemax1",
          },
          {
            path: new URL("../assets/images/kanal/Cinemax2.png", import.meta.url).href,
            name: "Cinemax2",
          },
          {
            path: new URL("../assets/images/kanal/AXN.png", import.meta.url).href,
            name: "AXN",
          },
          {
            path: new URL("../assets/images/kanal/AXN-BLACK.png", import.meta.url).href,
            name: "AXN-BLACK",
          },
          {
            path: new URL("../assets/images/kanal/AXN-WHITE.png", import.meta.url).href,
            name: "AXN-WHITE",
          },
          {
            path: new URL("../assets/images/kanal/Travelxphd.png", import.meta.url).href,
            name: "Travelxphd",
          },
          {
            path: new URL(
              "../assets/images/kanal/NATIONAL-GEOGRAPHICHD.png",
              import.meta.url
            ).href,
            name: "NATIONAL-GEOGRAPHICHD",
          },
          {
            path: new URL(
              "../assets/images/kanal/NATIONAL-GEOGRAPHICWILD.png",
              import.meta.url
            ).href,
            name: "NATIONAL-GEOGRAPHICWILD",
          },
          {
            path: new URL("../assets/images/kanal/SPEKTRUM.png", import.meta.url).href,
            name: "SPEKTRUM",
          },
          {
            path: new URL("../assets/images/kanal/Viasat-Explore.png", import.meta.url)
              .href,
            name: "Viasat-Explore",
          },
          {
            path: new URL("../assets/images/kanal/Viasat-Nature.png", import.meta.url)
              .href,
            name: "Viasat-Nature",
          },
          {
            path: new URL("../assets/images/kanal/Viasat-History.png", import.meta.url)
              .href,
            name: "Viasat-History",
          },
          {
            path: new URL("../assets/images/kanal/FishingHunting.png", import.meta.url)
              .href,
            name: "FishingHunting",
          },
          {
            path: new URL("../assets/images/kanal/GOLFchannel.png", import.meta.url).href,
            name: "GOLFchannel",
          },
          {
            path: new URL("../assets/images/kanal/FILM-europe.png", import.meta.url).href,
            name: "FILM-europe",
          },
          {
            path: new URL("../assets/images/kanal/RELAX.png", import.meta.url).href,
            name: "RELAX",
          },
          {
            path: new URL("../assets/images/kanal/MTV.png", import.meta.url).href,
            name: "MTV",
          },
          {
            path: new URL("../assets/images/kanal/CSFilm.png", import.meta.url).href,
            name: "CSFilm",
          },
          {
            path: new URL("../assets/images/kanal/Disneychannel.png", import.meta.url)
              .href,
            name: "Disneychannel",
          },
          {
            path: new URL("../assets/images/kanal/Disneyjunior.png", import.meta.url)
              .href,
            name: "Disneyjunior",
          },
          {
            path: new URL("../assets/images/kanal/JimJam.png", import.meta.url).href,
            name: "JimJam",
          },
          {
            path: new URL("../assets/images/kanal/MINIMAX.png", import.meta.url).href,
            name: "MINIMAX",
          },
          {
            path: new URL("../assets/images/kanal/BabyTV.png", import.meta.url).href,
            name: "BabyTV",
          },
          {
            path: new URL("../assets/images/kanal/History-channel.png", import.meta.url)
              .href,
            name: "History-channel",
          },
          {
            path: new URL("../assets/images/kanal/CNN.png", import.meta.url).href,
            name: "CNN",
          },
          {
            path: new URL("../assets/images/kanal/Film+.png", import.meta.url).href,
            name: "Film+",
          },
          {
            path: new URL("../assets/images/kanal/CSHistory.png", import.meta.url).href,
            name: "CSHistory",
          },
          {
            path: new URL("../assets/images/kanal/mezzolive.png", import.meta.url).href,
            name: "mezzolive",
          },
          {
            path: new URL("../assets/images/kanal/mezzo.png", import.meta.url).href,
            name: "mezzo",
          },
          {
            path: new URL("../assets/images/kanal/LeoTVGold.png", import.meta.url).href,
            name: "LeoTVGold",
          },
          {
            path: new URL("../assets/images/kanal/HBO-2-FLAT.png", import.meta.url).href,
            name: "HBO-2",
          },
          {
            path: new URL("../assets/images/kanal/HBO-FLAT.png", import.meta.url).href,
            name: "HBO",
          },
          {
            path: new URL("../assets/images/kanal/HBOGOflat.png", import.meta.url).href,
            name: "HBOGO",
          },
        ],
      ],
      isVisible: [[], [], []],
      tooltipVisible: [],
    };
  },
  created() {
    // Initialize arrays based on the number of plans
    this.plans.forEach((_, index) => {
      this.showChannels[index] = false;
      this.accumulatedChannels[index] = [];
      this.isVisible[index] = []; // Initialize as an empty array for each plan
    });
  },
  methods: {
    toggleChannels(index) {
      this.showChannels[index] = !this.showChannels[index];
      if (this.showChannels[index]) {
        this.accumulatedChannels[index] = this.getAccumulatedChannels(index);

        this.isVisible[index] = new Array(this.accumulatedChannels[index].length).fill(
          false
        ); // Reset visibility array

        this.setupObserver(index); // Set up the observer when channels are shown
      } else {
        // Optionally reset visibility when hiding channels

        this.isVisible[index] = new Array(this.accumulatedChannels[index].length).fill(
          false
        );
      }
    },

    getAccumulatedChannels(index) {
      return this.imageData.slice(0, index + 1).flat();
    },

    getImageData(index) {
      return this.imageData[index] || []; // Use a default empty array if index is out of bounds
    },

    setupObserver(index) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgIndex = entry.target.dataset.index; // Get the index of the image
            const imgElement = entry.target.querySelector(".lazy-image");

            if (imgElement) {
              imgElement.src = imgElement.dataset.src; // Set the src from data-src
              this.isVisible[index][imgIndex] = true;
            }

            observer.unobserve(entry.target); // Stop observing this image
          }
        });
      });

      this.$nextTick(() => {
        const imageContainers = this.$refs["imageContainer" + index]; // Get the specific index

        if (imageContainers) {
          imageContainers.forEach((container, imgIndex) => {
            if (container) {
              container.dataset.index = imgIndex;

              observer.observe(container);
            }
          });
        }
      });
    },

    showTooltip(imgIndex, index) {
      this.tooltipVisible[index] = imgIndex;
    },

    hideTooltip(index) {
      this.tooltipVisible[index] = null;
    },

    openComponent() {
      this.isClicked = true;
    },
    closeComponent() {
      this.isClicked = false;
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/sectionStyle.css";
@import "../assets/styles/internet.css";

.image-grid {
  position: relative; /* Set position relative to allow absolute positioning of children */
  width: 100%; /* Full width of the parent */
  overflow: hidden; /* Prevent overflow */
}

.channel-list {
  display: flex; /* Use flexbox for the channel list */
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  overflow-x: hidden; /* Enable horizontal scrolling if needed */
  width: 100%; /* Full width of the parent */
  max-height: 89%; /* Set a max height for the scrolling area */
  position: absolute; /* Position it absolutely within the image-grid */
  top: 0; /* Align to the top */
  left: 0; /* Align to the left */
  z-index: 1; /* Ensure it appears above other content */
  background-color: #001f24; /* Optional: Set a background color */
  padding: 5px; /* Optional: Add some padding */
  box-sizing: border-box; /* Include padding in width calculations */
}

.image-container {
  position: relative;
  border-bottom: 3px solid #009dff;
  flex: 0 0 50px; /* Set a smaller fixed width for each image container */
  margin: 5px; /* Add some spacing between images */
  display: flex; /* Center the image inside */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 0 0 10px;
  background-image: linear-gradient(to top, #006368, transparent 60%);
}

.tooltip {
  z-index: 20;
  position: absolute;
  top: 60%; /* Position above the image */
  left: 10%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 10; /* Ensure it appears above other elements */
  visibility: visible; /* Make it visible */
  opacity: 1; /* Fully opaque */
  transition: opacity 0.2s; /* Smooth transition */
}

.lazy-image {
  padding: 2px;
  max-height: 30px; /* Ensure the image fits within the container */
  width: auto; /* Maintain aspect ratio */
}

.close-b {
  position: absolute; /* Position the button absolutely */
  z-index: 10; /* Ensure it appears above other content */
  bottom: 0; /* Adjust this value to create space from the bottom */
  left: 50%; /* Center the button horizontally */
  transform: translateX(-50%); /* Adjust for centering */
  padding: 0 10px;
  border-radius: 10px;
  border: none;
  margin-top: 100px;
  background: #00ffbd;
  color: #001f24;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.close-b:hover {
  background: #001f24;
}

.close-c {
  position: absolute;
  top: 6px;
  right: 30vw;
  font-weight: bold;
  background: #9dff00 !important;
  border-radius: 3px;
  color: #121212 !important;
  padding: 0 6px;
  transition: 0.3s;
}

.close-c:hover {
  background: #006e30 !important;
}

@media (max-width: 880px) {
  .close-c {
    right: 20vw;
  }
}
</style>
