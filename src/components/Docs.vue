<template>
  <main v-if="isVisible" class="full-screen-overlay">
    <div class="docs full-screen-content" @click.stop>
      <h2>Ostatné dokumenty</h2>
      <button @click="closeFullScreen">Zatvoriť</button>
      <ul>
        <li v-for="(pdf, index) in docs" :key="index">
          <a :href="pdf.url" target="_blank">{{ pdf.name }}</a>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: "Docs",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      docs: [
        {
          name: "Verejný šifrovací kľúč",
          url: "/documents/juposro.pem",
        },
        {
          name: "Zmena podniku poskytujúceho službu prístupu k internetu ",
          url: "/documents/zmena-podniku-poskytujuceho-sluzbu-pristupu-k-internetu.pdf",
        }
      ],
    };
  },

  methods: {
    closeFullScreen() {
      this.$emit("close"); // Emit an event to notify the parent to close
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
};
</script>

<style scoped>
.full-screen-overlay {
  background: #001f24;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  z-index: 2000;
}

.full-screen-content {
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

h2 {
  color: #6cff85;
  margin: -32px 0 80px;
}

button {
  position: absolute;
  top: 80px;
  right: 16vw;
  cursor: pointer;
  padding: 10px 15px;
  transition: 0.2s;
  background-color: #003134;
  color: #0aabab;
  border-radius: 3px;
  border: 0;
}

button:hover {
  background-color: #001419;
}

li {
  margin-bottom: 20px !important;
  padding: 5px;
  list-style-type: none;
  margin-bottom: 8px;
  background-color: #001518;
  border-radius: 50px;
}

li a {
  text-decoration: none;
  color: #003d37;
  transition: color 0.2s;
}

li a:hover {
  color: #6cffd0;
}

.docs {
  width: 70%;
  margin: 100px auto;
}

@media (max-width: 760px) {
  button {
    top: 30px;
  }
}
</style>
