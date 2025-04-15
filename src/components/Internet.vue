<!-- src/components/Internet.vue -->
<template>
  <section id="internet" class="internet-section">
    <main class="sub-section">
      <h1>INTERNET</h1>
      <div class="row">
        <div class="col">
          <p class="p1">Vysoká stabilita a kvalita za bezkonkurenčné ceny</p>
          <p class="desc">
            Internet od nás je rýchly, flexibilný a lacný, no predovšetkým, nie je dátovo
            ani časovo obmedzený. Neobmedzené datá a mesačná výpovedná lehota nemajú
            konkurenciu. Wifi pripojenie je vhodné všade tam, kde nie je možné pripojenie
            cez optické káble.
          </p>
        </div>

        <div class="col b">
          <h2>HRUŠKA Internet na doma - ZÁKLAD</h2>
          <p class="p">12,50€ / mesiac</p>
          <div class="ch">
            <span class="check"></span>
            <p class="p-check">na wifi rýchlosť 20/4 Mbit/s</p>
            <span class="check"></span>
            <p class="p-check">v panelákoch rýchlosť 50/10 Mbit/s</p>
          </div>
        </div>
        <div class="col b">
          <h2>HRUŠKA Internet na doma - PLUS</h2>
          <p class="p">15,50€ / mesiac</p>
          <div class="ch">
            <span class="check"></span>
            <p class="p-check">na wifi rýchlosť 30/8 Mbit/s</p>
            <span class="check"></span>
            <p class="p-check">v panelákoch 80/20 Mbit/s</p>
          </div>
        </div>
      </div>
    </main>

    <img class="space" src="../assets/images/space.png" />
    <img class="telescope" src="../assets/images/radio_telescope.png" />

    <div class="pI">
      <button @click="openComponent">Partnerský Internet a Televízia</button>
      <button @click="closeComponent" v-show="isClicked === true" class="close-c">
        x
      </button>
    </div>

    <partnerskyInternetATv :showComponent="isClicked" />
  </section>
</template>

<script>
import partnerskyInternetATv from "./partnerskyInternetATv.vue";

export default {
  name: "Internet",
  components: {
    partnerskyInternetATv,
  },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
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

.space {
  border-radius: 10px;
  width: 100%;
}

.telescope {
  margin: -25vw 15vw -100px;
  width: 50vw;
}

@media (max-width: 880px) {
  .col:first-child {
    text-align: center;
    width: 100%;
  }

  .close-c {
    right: 20vw;
  }
}
</style>
