<template>
  <div id="app">
    <div id="con">
      <!-- NavBar-->
      <NavBar @toggle-overlay="toggleOverlay" />
      <div id="overlay" class="overlay" :class="{ active: isActive }">
        <div v-if="isActive" class="image-container">
          <img
            v-show="currentImage === 1"
            src="./assets/scroll/00.png"
            alt="Off Image"
            class="overlay-image"
          />
          <img
            v-show="currentImage === 2"
            src="./assets/scroll/01.png"
            alt="On Image"
            class="overlay-image"
          />
          <div class="tree-wrapper" :class="{ animate: currentImage === 2 }">
            <img
              v-if="currentImage === 2"
              src="./assets/scroll/tree.png"
              alt="Tree Image"
              class="tree-image"
            />
          </div>
        </div>
      </div>
      <!-- Main content -->
      <div class="section-end"></div>
      <Domov />
      <div class="section-end">
        <div class="chapter-divider">
          <img src="./assets/images/symbol.svg" alt="Symbol" class="symbol" />
        </div>
      </div>
      <Internet />
      <div class="section-end">
        <div class="chapter-divider">
          <img src="./assets/images/symbol.svg" alt="Symbol" class="symbol" />
        </div>
      </div>
      <Tv />
      <div class="section-end">
        <div class="chapter-divider">
          <img src="./assets/images/symbol.svg" alt="Symbol" class="symbol" />
        </div>
      </div>
      <Servis />
      <div class="section-end">
        <div class="chapter-divider">
          <img src="./assets/images/symbol.svg" alt="Symbol" class="symbol" />
        </div>
      </div>
      <Kontakt />

      <!-- Footer Component -->
      <Footer />
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, onMounted, onBeforeUnmount, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useHead } from "@vueuse/head";

import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

import Domov from "./components/Domov.vue";
import Internet from "./components/Internet.vue";
import Tv from "./components/Tv.vue";
import Kontakt from "./components/Kontakt.vue";
import Servis from "./components/Servis.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    Domov,
    Internet,
    Tv,
    Servis,
    Kontakt,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const isActive = ref(false);
    const currentImage = ref(1);
    const scrollTimeout = ref(null);
    const animationDuration = 1500;

    const metaTags = reactive({
      title: "Váš internet od Hrušky",
      description: "Internet od Hrušky - aj ty maj svoju hrušku doma",
      keywords:
        "internet pripojenie poskytovateľ zvolen hruška služby spojenie komunikovať bezpečnosť ip televízia alpi",
      ogTitle: "Váš internet od Hrušky",
      ogDescription: "Internet od Hrušky - aj ty maj svoju hrušku doma",
      ogType: "website",
      ogUrl: "https://www.odhrusku.sk/domov",
      ogImage: "https://www.odhrusku.sk/public/hruska.svg",
    });

    watchEffect(() => {
      const currentRoute = route.matched[route.matched.length - 1];

      if (currentRoute && currentRoute.meta) {
        if (currentRoute.meta.title) {
          metaTags.title = currentRoute.meta.title;
        }

        if (currentRoute.meta.description) {
          metaTags.description = currentRoute.meta.description;
        }

        if (currentRoute.meta.keywords) {
          metaTags.keywords = currentRoute.meta.keywords;
        }

        if (currentRoute.meta["og:title"]) {
          metaTags.ogTitle = currentRoute.meta["og:title"];
        }

        if (currentRoute.meta["og:description"]) {
          metaTags.ogDescription = currentRoute.meta["og:description"];
        }

        if (currentRoute.meta["og:type"]) {
          metaTags.ogType = currentRoute.meta["og:type"];
        }

        if (currentRoute.meta["og:url"]) {
          metaTags.ogUrl = currentRoute.meta["og:url"];
        }

        if (currentRoute.meta["og:image"]) {
          metaTags.ogImage = currentRoute.meta["og:image"];
        }
      }
    });

    useHead({
      title: metaTags.title,

      meta: [
        { name: "description", content: metaTags.description },
        { name: "keywords", content: metaTags.keywords },
        { property: "og:title", content: metaTags.ogTitle },
        { property: "og:description", content: metaTags.ogDescription },
        { property: "og:type", content: metaTags.ogType },
        { property: "og:url", content: metaTags.ogUrl },
        { property: "og:image", content: metaTags.ogImage },
      ],
    });

    const preloadImages = () => {
      const images = [
        "./assets/scroll/00.png",

        "./assets/scroll/01.png",

        "./assets/scroll/tree.png",
      ];

      images.forEach((src) => {
        const img = new Image();

        img.src = src;
      });
    };

    const toggleOverlay = () => {
      isActive.value = !isActive.value;

      if (isActive.value) {
        currentImage.value = 1;

        handleScroll();

        setTimeout(() => {
          currentImage.value = 2;
        }, 700);
      } else {
        currentImage.value = 1;
      }
    };

    const handleScroll = () => {
      const overlay = document.getElementById("overlay");

      if (overlay) {
        overlay.style.background = `linear-gradient(to top, rgb(0, 31, 36), rgb(0, 18, 20) 100%)`;
      }

      if (scrollTimeout.value) {
        clearTimeout(scrollTimeout.value);
      }

      scrollTimeout.value = setTimeout(() => {
        if (overlay) {
          setTimeout(() => {
            overlay.style.opacity = "1";

            isActive.value = false;
          }, 500);
        }
      }, animationDuration);
    };

    const updateRouter = () => {
      const sections = ["domov", "internet", "tv", "servis", "kontakt"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop, clientHeight } = element;

          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + clientHeight) {
            router.push(`/${section}`);
          }
        }
      });
    };

    onMounted(() => {
      updateRouter();
      preloadImages();
      window.addEventListener("scroll", updateRouter);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", updateRouter);
    });

    return {
      isActive,
      currentImage,
      toggleOverlay,
      handleScroll,
    };
  },
};
</script>

<style>
#app {
  overflow-x: hidden;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  pointer-events: none;
  transition: height 0.3s ease, background 0.3s ease;
  z-index: 0;
  transform-origin: top;
}

.overlay.active {
  z-index: 999;
  height: 100%;
  pointer-events: auto;
}

.overlay-image {
  position: absolute;
  top: 70%;
  left: 50%;
  width: 25%;
  height: 25%;
  object-fit: contain;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.tree-wrapper {
  position: absolute;
  bottom: 37%;
  left: 50%;
  width: 25%;
  height: 0; /* Start with height 0 */
  overflow: hidden; /* Prevent overflow during animation */
  transform: translate(-50%, 0); /* Center the wrapper */
  transition: height 2s ease; /* Transition for height */
}

.tree-wrapper.animate {
  height: 100%; /* Animate to full height */
}

.tree-image {
  width: 100%; /* Ensure the image takes full width of the wrapper */
  height: auto; /* Maintain aspect ratio */
  position: absolute; /* Position the image absolutely within the wrapper */
  bottom: 0;
}

.overlay-image:nth-of-type(1) {
  opacity: 1;
}

.overlay-image:nth-of-type(2) {
  opacity: 0;
}

.overlay.active .overlay-image:nth-of-type(1) {
  opacity: 1;
}

.overlay.active .overlay-image:nth-of-type(2) {
  opacity: 1;
}

.section-end:first-child {
  height: 150px;
}

.section-end {
  margin: 10px 0 100px;
}

.chapter-divider {
  position: relative;
  text-align: center;
  width: 100%;
}

.chapter-divider::before,
.chapter-divider::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 45%;
  border-top: 1px solid #1dd755; /* line style */
  height: 0;
}

.chapter-divider::before {
  left: 0;
}

.chapter-divider::after {
  right: 0;
}

.chapter-divider .symbol {
  position: relative;
  z-index: 1;
  padding: 0 10px;
  width: 40px;
}

@media (max-width: 880px) {
  .tree-wrapper {
    width: 50%;
  }
  .overlay-image {
    width: 50%;
    height: 50%;
  }

  .chapter-divider {
    width: 81vw;
  }
}
</style>
