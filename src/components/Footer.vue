<template>
  <footer>
    <Faqs :isVisible="isFullScreenFaqs" @close="closeFullScreen" />
    <Docs :isVisible="isFullScreenDocs" @close="closeFullScreen" />

    <div class="f-col">
      <svg
        id="logo"
        width="35"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 141.56 196.95"
      >
        <path
          class="cls-1"
          d="M55.12,197l-1.64,0h-.6c-16.47.41-39.17-10.82-48.69-32.42-5.77-13.1-10.62-40.1,21.75-73.79a14.43,14.43,0,0,0,4-7.75c.51-3.29.92-6.62,1.33-9.85,1.53-12.27,3.18-25.5,10.88-34.45-.84-.48-1.67-1-2.47-1.57C26.29,27.66,25.3,10.17,25.27,9.43L25,3.93l5.28-1.55c19.77-5.8,31.51.1,37.87,6.07a33.54,33.54,0,0,1,3.53,3.89C75.94,5.57,82,2.15,86.06,1.13l3.41,13.58.14,0c-.88.26-7.88,2.71-8.8,14.08,24.47,4.39,27.1,25.49,29.45,44.36.4,3.22.82,6.56,1.33,9.85a14.48,14.48,0,0,0,4,7.75c26.22,27.29,28,50.1,24.82,64.43-4.46,20.27-20.43,33.12-33.9,38.39l-5.1-13c10.1-4,22-13.47,25.33-28.35,3.46-15.78-3.88-33.66-21.24-51.73a28.36,28.36,0,0,1-7.73-15.3c-.55-3.49-1-6.94-1.39-10.27-2.49-19.93-4.43-30.15-18.6-32.43V111l10.55-10.54,9.9,9.9L70.26,138.31,42.32,110.37l9.9-9.9L63.76,112V42.53l-1.26.11c-13,2.67-14.94,12.87-17.35,32.2-.42,3.33-.85,6.78-1.39,10.27A28.36,28.36,0,0,1,36,100.41C16.24,121,9.47,141.77,17,158.85c6.81,15.45,23.43,24.35,35.59,24.07H53.8c12.11.26,20.58-3.06,25.14-9.89,2.25-3.37,3-11.06,3.34-17.74L70.22,167.36l-9.9-9.89,27.94-27.95,27.95,27.95-9.9,9.9L96.2,157.25c-.49,9.23-1.8,17.84-5.61,23.55C85.64,188.23,75.48,197,55.12,197ZM40.35,14.4c1.1,3.69,3.25,8.37,7.46,11.3,3.36,2.34,7.72,3.35,13,3,1.2-.21,2.44-.38,3.74-.51C60.93,19,54.73,12.07,40.35,14.4Z"
        />
      </svg>
      <h3>HRUŠKA</h3>
      <ul>
        <li><button @click="openFullScreenFaqs">Často kladené otázky</button></li>
        <li v-for="(pdf, index) in pdfList1" :key="index">
          <a :href="pdf.url" target="_blank">{{ pdf.name }}</a>
        </li>
      </ul>
    </div>

    <div class="f-col">
      <h3>Užitočné odkazy</h3>
      <ul>
        <li v-for="(pdf, index) in pdfList2" :key="index">
          <a :href="pdf.url" target="_blank">{{ pdf.name }}</a>
        </li>
        <li><button @click="openFullScreenDocs">Ostatné dokumenty</button></li>
      </ul>
    </div>

    <div class="f-col">
      <h3>Kontakt</h3>
      <div class="title"></div>
      <ul>
        <li>
          <img src="../assets/images/map.svg" /><a href="#"
            >Jupo spol. s r.o. M.R.Štefánika 2587/7, 960 01 Zvolen</a
          >
        </li>
        <li>
          <img src="../assets/images/tel.svg" /><a href="tel:+421905377999"
            >+421 905 377 999</a
          >
        </li>
        <li><span>od 8:00 do 16:00</span></li>
        <li>
          <img src="../assets/images/mail.svg" /><a href="mailto:internet@odhrusku.sk"
            >internet@odhrusku.sk</a
          >
        </li>
      </ul>
    </div>

    <p>JUPO © 2024</p>
  </footer>
</template>

<script>
import Faqs from "./Faqs.vue";
import Docs from "./Docs.vue";

export default {
  name: "Footer",
  components: {
    Faqs,
    Docs
  },
  data() {
    return {
      isFullScreenFaqs: false,
      isFullScreenDocs: false,
      pdfList1: [
        {
          name: "Všeobecné podmienky",
          url: "/documents/vseobecne-podmienky.pdf",
        },
        {
          name: "Špecifikácia rozhraní",
          url: "/documents/specifikacia-rozhrania.pdf",
        },
        {
          name: "Informácie pre koncových užívateľov",
          url: "/documents/informacie-pre-koncovych-uzivatelov.pdf",
        },
        {
          name: "Informácie pre podnikateľov",
          url: "/documents/informacie-pre-podnikatelov.pdf",
        },
      ],

      pdfList2: [
        {
          name: "Zmluva pre koncových užívateľov",
          url: "/documents/zmluva-pre-koncovych-uzivatelov.pdf",
        },
        {
          name: "Zmluva pre podnikateľov",
          url: "/documents/zmluva-pre-podnikatelov.pdf",
        },
        { name: "Cenník Internet", url: "/documents/cenik-internet.pdf" },
        { name: "Cenník Televízia", url: "/documents/cenik-televizia.pdf" },
      ],
      currentPdfUrl: "",
      isPdfVisible: false,
    };
  },
  methods: {
    openFullScreenFaqs() {
      this.isFullScreenFaqs = true;
      document.body.classList.add("no-scroll");
    },
    openFullScreenDocs() {
      this.isFullScreenDocs = true;
      document.body.classList.add("no-scroll");
    },
    closeFullScreen() {
      this.isFullScreenFaqs = false; 
      this.isFullScreenDocs = false; 
      document.body.classList.remove("no-scroll");
    },

    openPdf(url) {
      this.currentPdfUrl = url; // Set the current PDF URL
      this.isPdfVisible = true; // Show the PDF
    },

    closePdf() {
      this.isPdfVisible = false; // Hide the PDF
      this.currentPdfUrl = ""; // Clear the current PDF URL
    },
  },
};
</script>

<style scoped>
.no-scroll {
  overflow: hidden; /* Prevent scrolling on the body */
}

footer {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #072b2c;
  padding: 5% 10% 3%;
  border-radius: 30px 30px 0 0;
}

footer .f-col {
  flex: 0 0 auto;
  max-width: 30%;
}

footer .f-col:first-child h3 {
  font-size: 2rem;
  margin-left: 50px;
}

footer .contact {
  fill: #c1c1c1;
  margin-right: 10px;
}

footer li {
  list-style-type: none;
  margin-bottom: 8px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

footer .f-col:last-of-type li:nth-child(2) {
  margin-bottom: -10px;
}

footer a,
footer button {
  text-decoration: none;
  color: white;
  opacity: 0.7;
}

footer button {
  cursor: pointer;
  border: 0;
  font-size: 0.9rem;
  background: transparent;
}

footer .f-col:nth-child(-n + 2) li:before {
  content: ">>";
  margin-right: 10px;
}

footer .f-col:nth-last-child(-n + 3) h3 {
  margin-top: 18px;
}

footer a:hover,
footer button:hover {
  opacity: 1;
}

footer svg {
  float: left;
  fill: #fff;
}

footer img {
  float: left;
  width: 30px;
  margin: 10px 40px 0 0;
}

footer h3 {
  margin-bottom: 20px;
}

footer p {
  flex-basis: 100%;
  padding-top: 20px;
  text-align: center;
}

footer span {
  position: relative;
  top: -12px;
  left: 70px;
  color: #148569;
  font-size: 0.8rem;
}

@media (max-width: 880px) {
  footer {
    display: block;
  }

  footer .f-col {
    min-width: 100%;
  }

  footer .f-col:nth-last-child(-n + 3) h3 {
    margin-top: 80px;
  }

  footer .f-col h3 {
    margin-top: 80px;
  }
}
</style>
