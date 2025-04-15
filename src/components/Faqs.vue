<template>
  <main v-if="isVisible" class="full-screen-overlay">
    <div class="faq full-screen-content" @click.stop>
      <h2>Často kladené otázky</h2>
      <button @click="closeFullScreen">Zatvoriť</button>
      <div class="fblock" v-for="(faq, index) in faqs" :key="index">
        <h4 class="question" @click="toggleAnswer(index)">
          {{ faq.question }}
        </h4>
        <div class="answer" v-show="faq.isOpen">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Faqs",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      faqs: [
        {
          question: "Čo je to rýchlosť, upload rýchlosť",
          answer:
            "Väčšinou sa udáva vo formáte 512/128 kbps. V tomto prípade download rýchlosť, 512kbps, je tá, ktorou sťahujete smerom k sebe (prezeranie stránok, sťahovanie software, prijímanie e-mailov do mailovej schránky), 128kbps je smerom od Vás (posielanie správ, odosielanie ..). Existuje symetria (napr. 512/512) v rýchlostiach, alebo asymetria (napr. 512/128).",
          isOpen: false,
        },

        {
          question: "Čo je to rýchlosť pripojenia a ako sa meria",
          answer:
            "Jednotkou informácie používanou v počítačovom svete je 1 bit. Z praktických dôvodov sa združujú do väčších celkov – do slabík, alebo bajtov (po anglicky byte). Jeden bajt (byte) = 8 bitov. Rýchlosť pripojenia na internet na meria v bitoch za sekundu alebo v násobkoch. Napríklad 512 kbit/s (kilobitov za sekundu). Pri sťahovaní dát vo Windowse sa v okne zobrazuje väčšinou informácia v bajtoch za sekundu alebo v násobkoch. Rýchlosť v bajtoch teda vypočítame ako 512 kbit/s / 8 = 64 kB/s. Táto rýchlosť je maximálna, ktorá sa dá pri prenose teoreticky dosiahnuť. V reálnom prenose sa nikdy nedosiahne, lebo spolu s užitočnými informáciami vaše programy prenášajú aj riadiace informácie, ktoré rýchlosť mierne znižujú. Ďalším faktorom rýchlosti je aj agregácia. ",
          isOpen: false,
        },

        {
          question: "Prečo uplatňujete agregáciu",
          answer:
            "Agregáciu uplatňujú poskytovatelia aby mohli ponúkať programy za cenu nižšiu ako je cena neagregovaných programov. Ceny by boli vysoké a pre bežných zákazníkov nedosiahnuteľné. Vybudovanie a prevádzkovanie služieb založených na sieťových prvkoch je finančne náročné a preto agregácia pomáha znižovať náklady pre bežného užívateľa. ",
          isOpen: false,
        },

        {
          question: "Čo znamená časovo a dátovo neobmedzené",
          answer:
            "Dátovo obmedzené znamená, že počas určeného obdobia môžete preniesť stanovený objem dát, napr. 200MB, za vopred dohodnutú paušálnu cenu. Ak uvedený objem dát prekročíte, buď platíte za dáta prenesené (stiahnuté) nad rámec stanoveného limitu, alebo sa vám znižuje rýchlosť a neplatíte nič navyše (FUP). Preto je vhodné si rozmyslieť, alebo odhadnúť, asi koľko dát plánujete prenášať (sťahovať) za určené obdobie a podľa toho si zvoliť najvýhodnejší program. ",
          isOpen: false,
        },

        {
          question: "Čo je to router alebo smerovač",
          answer:
            "Je to zariadenie, ktoré je schopné samostatne nadviazať spojenie do internetu podľa požiadavky zákazníkovho počítača. Nie je potrebný žiaden softvér. Toto zariadenie je schopné rozdeľiť jednen Internetový program (konto) na niekoľko dalších PC (notebook-ov) a to aj bezdrôtovo. ",
          isOpen: false,
        },

        {
          question: "Čo je PPP a PPPoE klient",
          answer:
            "PPPoE je protokol, pomocou ktorého sa pripájate do internetu. Je podobný PPP protokolu avšak je rýchlejší a je určený pre DSL. PPPoE klient zabezpečuje nadviazanie spojenia a zaslanie informácií na overenie. ",
          isOpen: false,
        },

        {
          question: "Čo je to P2P",
          answer:
            "Peer-to-peer (P2P) sieť je typ dátovej prevádzky na internete realizovanej v rámci skupiny účastníkov prostredníctvom na to určených aplikácií ako sú napríklad: Blubster, eDonkey, IMesh, KazaaLite, LimeWire, Morpheus a iné, za účelom priameho prístupu účastníka na pevný disk iného účastníka zo skupiny a automatického a dlhodobého sťahovania veľkého objemu dát. ",
          isOpen: false,
        },

        {
          question: "Čo je to Agregácia",
          answer:
            "Agregáciou sa pri internetových a dátových službách nazýva zdieľanie určitého prenosového pásma určitým počtom užívateľov. Popisuje skutočnosť, že určitá kapacita je k dispozícii viacerým užívateľom. V praxi to znamená že v určitom okamihu je pripojený iba určitý počet zákazníkov, preto poskytovateľ nemusí mať k dispozícii súčet kapacít všetkých zákazníkov. Práve vďaka agregácii môže široká verejnosť využívať nepretržitý vysokorýchlostný internet za prijateľný paušálny poplatok. Agregácia sa dá vyjadriť aj číselne – agregačným pomerom. Ten sa počíta ako podiel kapacity, pridelenej všetkým užívateľom a súčtu kapacít všetkých užívateľov. Agregačné pomery zodpovedajú istým subjektívnym úrovniam kvality. ",
          isOpen: false,
        },

        {
          question: "Čo je to FPU - Fair Use Policy",
          answer:
            "FUP je spôsob delenia rýchlosti využívajúci celé prenosové pásma ISP. Z dôvodu ochrany pred poklesom rýchlosti uživateľského programu ktorý je spôsobený vplyvom agregácie, hlavne v prípade keď užívatelia vykazujú nadmerné sťahovania dát, sa môže mierne znížiť rýchlosť prípojenia. Dáta vo väčšom množstve (napr. filmy, albumy, mp3 atd.) odporúčame sťahovať od 24:00h do 6:00h kedy sa FUP neuplatňuje. ",
          isOpen: false,
        },

        {
          question: "Môžem si nejakým spôsobom zmeniť svoj login",
          answer: "Prihlasovacie meno (login) nie je možné meniť užívateľom. ",
          isOpen: false,
        },

        {
          question: "Aké platformy sú podporované",
          answer:
            "Internet je prakticky platformovo nezávislý a preto možete surfovať na počítači s ľubovolným operačným systémom. Medzi najrozšírenejší patrí Microsoft Windows, ale v sieti je možstvo počítačov aj s inými OS ako napr. Windows 98SE, Windows ME, Windows 2000, Mac OS 10.x, Mac OS 9.x a Mac OS 8.6, Linux a iné. ",
          isOpen: false,
        },

        {
          question: "Čo je to MTU",
          answer:
            "MTU je maximálna veľkosť packetu, ktorú je možné preniesť. Štandardne je to 1500 bytov. V prípade DSL je možné, že túto hodnotu bude potrebné upraviť na nižšiu vzhľadom na topológiou sieťového riešenia spojenia, a teda 1452. ",
          isOpen: false,
        },

        {
          question: "Ako sa počíta objem prenesených (stiahnutých) dát",
          answer:
            "Do objemu prenesených dát sa započítava kompletne celá komunikácia ktorá prebieha na počítači a to sú samozrejme aj neuložené stránky, internetové rádio , pošta, online hry, jednoducho všetko. Ojem Pri posielaní e-mailov sa dajú prenesené dáta počítať jednoducho – pozriete si objem (veľkosť) dátového súboru (súborov). Pokiaľ komunikujete bez príloh, obrázkov a pod., 1stránkový email len s textom má veľkosť cca 4KB, môžete však dostať (poslať) aj väčší e-mail, napr. s obrázkom/videoklipom o veľkosti 3,5MB. Ak napríklad celý mesiac len prezeráte/čítate stránky, napr.sme.sk, zoznam.sk a pod., nemali by ste presiahnuť kapacitu 500 MB. Ak sťahujete viac, väčšinou sa v tom už vyznáte a viete koľko má čo objemu. Štandardne Windows nepočíta dátovú komunikáciu, ale existuje možstvo programov, ktoré vám to umožnia. Prenesené dáta si môžete kontrolovať na našom portáli po autorizácii.",
          isOpen: false,
        },
      ],
    };
  },

  methods: {
    closeFullScreen() {
      this.$emit("close"); // Emit an event to notify the parent to close
      window.scrollTo(0, document.body.scrollHeight)
    },

    toggleAnswer(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
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

.faq {
  width: 70%;
  margin: 100px auto;
}
.answer {
  margin-top: 20px;
  font-size: 0.8rem;
  color: #297a85;
}

.question {
  font-weight: normal;
  cursor: pointer;
}
.fblock {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #1eacff;
  color: #1eacff;
  padding: 10px;
  transition: 0.4s;
  margin: 40px 0 0;
}
.fblock:hover {
  color: #1dd755;
  border-bottom: 1px solid #1dd755;
}

@media (max-width:760px){
  button {
    top: 30px;
  }
}
</style>
