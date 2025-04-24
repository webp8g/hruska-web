<!-- src/components/Kontakt.vue -->
<template>
  <section id="kontakt" class="kontakt-section">
    <main>
      <h1>KONTAKT</h1>

      <div class="container">
        <div class="contact-info">
          <div class="image-container">
            <img class="over-image" src="../assets/images/tel.svg" />
            <div class="tel">
              <span>Hlavné telefónne číslo od 8:00 do 16:00</span>
              <br />
              <a href="tel:+421905377999">+421 905 377 999</a>
              <br /><br />
              <span>SMS brána s informáciami</span>
              <br />
              <a href="tel:+421 940604080">+421 940 604080</a>
              <br /><br />
              <span>kontaktný telefón pre spokojnosť a dlhy</span>
              <br />
              <a href="tel:+421 940 604082">+421 940 604082</a>
              <br /><br />
              <span>technik pre montáže</span>
              <br />
              <a href="tel:+421 940 604086">+421 940 604086</a>
            </div>
          </div>

          <div class="con-link">
            <p>
              <img src="../assets/images/map.svg" />
              <span> Jupo spol. s r.o. M.R.Štefánika 2587/7, 960 01 Zvolen </span>
            </p>

            <p>
              <img src="../assets/images/mail.svg" />
              <a href="mailto:internet@odhrusku.sk">internet@odhrusku.sk</a>
            </p>
          </div>
        </div>

        <div class="contact-form">
          <h2>Vyplňte formulár, my vás kontaktujeme.</h2>
          <form @submit.prevent="handleSubmit" id="cform">
            <label for="meno">MENO:</label>
            <input type="text" v-model="formData.name" id="name" name="name" required /><br /><br />

            <label for="prezvisko">PRIEZVISKO:</label>
            <input type="text" v-model="formData.priezvisko" id="priezvisko" name="priezvisko" required /><br /><br />

            <label for="email">EMAIL:</label>
            <input type="email" v-model="formData.email" id="email" name="email" required /><br /><br />

            <label for="telefon">TELEFÓN:</label>
            <input type="tel" v-model="formData.telefon" id="telefon" name="telefon" required /><br /><br />

            <label for="adresa">ADRESA:</label>
            <input type="text" v-model="formData.adresa" id="adresa" name="adresa" required /><br /><br />

            <label for="sluzba">MÁM ZÁUJEM:</label>
            <select v-model="formData.sluzba" id="sluzba" name="sluzba" required>
              <option value="s" selected disabled>Vyberte si službu</option>
              <option value="service1">Televízia</option>
              <option value="service2">Internet</option>
              <option value="service3">Televízia a Internet</option>
            </select><br /><br />

            <input type="submit" value="ODOSLAŤ" />
          </form>
          <div v-if="responseMessage">{{ responseMessage }}</div>

          <div v-if="showAlert" class="alertOverlay">
            <div class="custom-alert">{{ alertMessage }}</div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Kontakt",
  data() {
    return {
      formData: {
        name: "",
        priezvisko: "",
        email: "",
        telefon: "",
        adresa: "",
        sluzba: "",
      },

      responseMessage: "",
      showAlert: false,
      alertMessage: "Pri odosielaní formulára sa vyskytol problém, preto nás prosím kontaktujte telefonicky.",
    };
  },

  methods: {
    async submitForm() {
      try {
        const response = await axios.post("/kontakt", this.formData);

        this.responseMessage = "Formulár bol úspešne odoslaný!";

        this.formData = {
          name: "",
          priezvisko: "",
          email: "",
          telefon: "",
          adresa: "",
          sluzba: "",
        }; // Reset form
      } catch (error) {
        this.responseMessage = "Nastala chyba pri odosielaní formulára.";
      }
    },
    handleSubmit() {
      this.showAlert = true;

      setTimeout(() => {
        this.showAlert = false;
      }, 7000);
    }
  },
};
</script>

<style scoped>
@import "../assets/styles/sectionStyle.css";

.container {
  display: flex;
  justify-content: space-between;
  color: white;
  margin-bottom: 80px;
}

.container h2 {
  margin: 0 0 30px;
  color: #00eeff;
}

.contact-info {
  width: 48%;
  border-radius: 1rem;
  height: min-content;
  position: relative;
}

.contact-info a {
  text-decoration: none;
  color: #00ff33;
}

.contact-form {
  width: 48%;
  padding: 50px;
  color: #007d91;
  border-radius: 1rem;
  background: linear-gradient(50deg, rgb(0, 100, 88), rgb(0, 31, 36) 60%);
}

.contact-form label {
  display: block;
  margin-bottom: 5px;
}

.contact-form label:last-of-type {
  font-weight: bold;
  color: #00eeff;
}

.contact-form input,
.contact-form textarea,
.contact-form select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: none;
  border-radius: none;
  border-bottom: 3px solid #00ffef;
  background-color: transparent;
  color: #00ffc0;
  font-weight: bold;
}

.contact-form select {
  background-color: #148569;
  border: none;
}

select:first-child {
  color: black;
}

.contact-form input[type="submit"] {
  background-color: #1dd755;
  color: #333;
  cursor: pointer;
  border: none;
}

.contact-form option:first-child {
  color: black;
  font-weight: bold;
}


.alertOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.custom-alert {
  background-color: #0fcad1;
  color: rgb(0, 51, 63);
  font-weight: bold;
  padding: 20px 40px;
  margin-top: 10px;
  border-radius: 5px;
  text-align: center;
}

.con-link {
  margin-top: 100px;
  display: flex;
  /* Use flexbox */
  flex-direction: column;
  width: 100%;
  align-items: center;
  /* Center items vertically */
  text-align: center;
}

.con-link img {
  height: 50px;
  display: block;
}

.con-link p,
.con-link span,
.con-link a {
  padding-bottom: 0px;
  margin: 10px 0 0 10px;
  color: #00eeff;
  font-weight: normal;
}

.con-link p {
  margin: 0;
  /* Remove default margin */
  display: flex;
  /* Use flexbox for paragraphs */
  align-items: center;
  /* Center items vertically within each paragraph */
  justify-content: center;
}

.contact-info svg {
  margin-right: 10px;
}

.tel {
  position: absolute;
  top: 130px;
  left: 10vw;
  text-align: right;
}

.tel span {
  font-size: 0.88rem;
  color: #148569;
}

.image-container {
  position: relative;
  /* Position relative to allow absolute positioning of child elements */
}

.over-image {
  left: 20%;
  display: block;
  width: 350px;
}

@media (max-width: 1090px) {
  .over-image {
    left: 0;
  }

  .tel {
    left: 10%;
  }
}

@media (max-width: 880px) {
  .container {
    display: block;
  }

  .contact-info,
  .contact-form {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
  }

  .tel {
    left: 20vw;
  }

  .over-image {
    left: 13vw;
  }

  .con-link {
    margin-bottom: 100px;
  }

  .con-link p {
    margin-bottom: 20px;
  }
}

@media (max-width: 660px) {
  .over-image {
    left: 4vw;
  }

  .tel {
    left: 16vw;
  }
}

@media (max-width: 450px) {
  .over-image {
    top: 20px;
    left: -6vw;
  }

  .tel {
    left: 16vw;
  }
}
</style>
