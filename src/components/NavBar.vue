<template>
  <header>
    <div class="logo-container">
      <router-link to="/domov" class="nav-link"
        ><svg
          id="logo"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 141.56 196.95"
        >
          <path
            class="cls-1"
            d="M55.12,197l-1.64,0h-.6c-16.47.41-39.17-10.82-48.69-32.42-5.77-13.1-10.62-40.1,21.75-73.79a14.43,14.43,0,0,0,4-7.75c.51-3.29.92-6.62,1.33-9.85,1.53-12.27,3.18-25.5,10.88-34.45-.84-.48-1.67-1-2.47-1.57C26.29,27.66,25.3,10.17,25.27,9.43L25,3.93l5.28-1.55c19.77-5.8,31.51.1,37.87,6.07a33.54,33.54,0,0,1,3.53,3.89C75.94,5.57,82,2.15,86.06,1.13l3.41,13.58.14,0c-.88.26-7.88,2.71-8.8,14.08,24.47,4.39,27.1,25.49,29.45,44.36.4,3.22.82,6.56,1.33,9.85a14.48,14.48,0,0,0,4,7.75c26.22,27.29,28,50.1,24.82,64.43-4.46,20.27-20.43,33.12-33.9,38.39l-5.1-13c10.1-4,22-13.47,25.33-28.35,3.46-15.78-3.88-33.66-21.24-51.73a28.36,28.36,0,0,1-7.73-15.3c-.55-3.49-1-6.94-1.39-10.27-2.49-19.93-4.43-30.15-18.6-32.43V111l10.55-10.54,9.9,9.9L70.26,138.31,42.32,110.37l9.9-9.9L63.76,112V42.53l-1.26.11c-13,2.67-14.94,12.87-17.35,32.2-.42,3.33-.85,6.78-1.39,10.27A28.36,28.36,0,0,1,36,100.41C16.24,121,9.47,141.77,17,158.85c6.81,15.45,23.43,24.35,35.59,24.07H53.8c12.11.26,20.58-3.06,25.14-9.89,2.25-3.37,3-11.06,3.34-17.74L70.22,167.36l-9.9-9.89,27.94-27.95,27.95,27.95-9.9,9.9L96.2,157.25c-.49,9.23-1.8,17.84-5.61,23.55C85.64,188.23,75.48,197,55.12,197ZM40.35,14.4c1.1,3.69,3.25,8.37,7.46,11.3,3.36,2.34,7.72,3.35,13,3,1.2-.21,2.44-.38,3.74-.51C60.93,19,54.73,12.07,40.35,14.4Z"
          /></svg
      ></router-link>
    </div>

    <div class="navigation-container">
      <button @click="toggleNavigation" class="nav-toggle">Navigácia</button>

      <nav v-if="isNavigationVisible" class="navbar">
        <ul class="nav-menu">
          <li class="nav-item">
            <router-link
              to="/domov"
              @click.prevent="scrollToSection('domov')"
              class="nav-link"
              >Domov</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              to="/internet"
              @click.prevent="scrollToSection('internet')"
              class="nav-link"
              >Internet</router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/tv" @click.prevent="scrollToSection('tv')" class="nav-link"
              >Televízia</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              to="/servis"
              @click.prevent="scrollToSection('servis')"
              class="nav-link"
              >Servis</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              to="/kontakt"
              @click.prevent="scrollToSection('kontakt')"
              class="nav-link"
              >Kontakt</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import "../style.css";

export default {
  name: "NavBar",

  data() {
    return {
      isNavigationVisible: false,
    };
  },

  methods: {
    toggleNavigation() {
      this.isNavigationVisible = !this.isNavigationVisible;
    },

    scrollToSection(sectionId) {
      this.isNavigationVisible = false;
      this.$emit("toggle-overlay");

      const section = document.getElementById(sectionId);

      if (section) {
        smoothScroll(section, 2000);
      }
    },
  },
};

function smoothScroll(target, duration) {
  let offset = -20;
  if (target.id === "domov") {
    offset = -window.scrollY;
  }
  console.log(offset);
  const targetPosition = target.getBoundingClientRect().top + offset + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
</script>

<style scoped>
svg {
  float: left;
  fill: #1dd755;
}

.logo-container {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 3%;
  width: 80px;
  height: 100px;
  margin: 0 auto;
  background-color: #001417; /* Background color for the logo */
  padding: 15px;
}

.navigation-container {
  position: fixed; /* Fix the navigation at the bottom */
  width: 200px;
  bottom: 0; /* Align it to the bottom */
  left: 50%; /* Align it to the left */
  transform: translate(-50%, 0); /* Background color for the navigation */
  border-radius: 20px 20px 0 0;
  border-top: 2px #00ffae solid;
  box-shadow: 0px -1px 35px 8px #001a18;
  background-color: #031216;
  padding: 10px 0; /* Padding for the navigation */
  z-index: 1000; /* Ensure it stays above other content */
}

nav {
  padding: 20px 0;
  margin: 0;
}

.nav-toggle {
  display: block;
  margin: 0 auto;
  padding: 10px 20px 5px;
  font-size: 1.2rem;
  background-color: transparent;
  color: #4e9583;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
}

.nav-toggle:hover {
  color: #00ffae;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-item {
  list-style-type: none;
  margin: 10px 0;
}

.nav-link {
  text-decoration: none;
  font-size: 1.1rem;
  color: #25788d;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #1eacff;
}

@media (max-width: 880px) {
  .logo-container {
    position: absolute;
  }
}
</style>
