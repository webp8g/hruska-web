import { createRouter, createWebHistory } from "vue-router";

import Domov from "../components/Domov.vue";
import Internet from "../components/Internet.vue";
import Tv from "../components/Tv.vue";
import Servis from "../components/Servis.vue";
import Kontakt from "../components/Kontakt.vue";

const routes = [
  {
    path: "/domov",
    name: "Domov",
    component: Domov,
    meta: {
      title: 'Váš internet od Hrušky',
      description: 'Internet od Hrušky - aj ty maj svoju hrušku doma',
      keywords: 'internet pripojenie poskytovateľ zvolen hruška služby spojenie komunikovať bezpečnosť ip televízia alpi',
      'og:title': 'Váš internet od Hrušky',
      'og:description': 'Internet od Hrušky - aj ty maj svoju hrušku doma',
      'og:type': 'website',
      'og:url': 'https://www.odhrusku.sk/domov',
      'og:image': 'https://www.odhrusku.sk/public/hruska.svg',
    },
  },
  {
    path: "/internet",
    name: "Internet",
    component: Internet,
    meta: {
      title: 'Váš internet od Hrušky',
      description: 'Internet od Hrušky - aj ty maj svoju hrušku doma',
      keywords: 'internet pripojenie poskytovateľ zvolen hruška služby spojenie komunikovať bezpečnosť ip televízia alpi',
      'og:title': 'Váš internet od Hrušky',
      'og:description': 'Najlepší poskytovateľ internetu vo Zvolene',
      'og:type': 'website',
      'og:url': 'https://www.odhrusku.sk/internet',
      'og:image': 'https://www.odhrusku.sk/public/hruska.svg',
    },
  },
  {
    path: "/tv",
    name: "Tv",
    component: Tv,
    meta: {
      title: 'Televízia od Hrušky',
      description: 'Naše balíky televíznych programov obsahujú bohatú škálu programov.',
      keywords: 'televízia tv hruška programová ponuka pripojenie poskytovateľ zvolen služby spojenie komunikovať bezpečnosť ip televízia alpi',
      'og:title': 'Televízia od Hrušky',
      'og:description': 'Naše balíky televíznych programov obsahujú bohatú škálu programov.',
      'og:type': 'website',
      'og:url': 'https://www.odhrusku.sk/tv',
      'og:image': 'https://www.odhrusku.sk/public/hruska.svg',
    },
  },
  {
    path: "/servis",
    name: "Servis",
    component: Servis,
    meta: {
      title: 'Servis od Hrušky',
      description: 'Ponúkame kompletné vybudovanie počítačových sietí a neobmedzené vysokorýchlostné pripojenie.',
      keywords: 'servis internet pripojenie poskytovateľ zvolen hruška služby spojenie komunikovať bezpečnosť ip televízia alpi',
      'og:title': 'Servis od Hrušky',
      'og:description': 'Ponúkame kompletné vybudovanie počítačových sietí a neobmedzené vysokorýchlostné pripojenie.',
      'og:type': 'website',
      'og:url': 'https://www.odhrusku.sk/servis',
      'og:image': 'https://www.odhrusku.sk/public/hruska.svg',
    },
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: Kontakt,
    meta: {
      title: 'Kontakt na Hrušku',
      description: 'Kontaktujte nás - Váš internetový poskytovateľ Hruška',
      keywords: 'kontakt zákaznícka podpora internet pripojenie poskytovateľ zvolen hruška služby spojenie komunikovať bezpečnosť ip televízia alpi',
      'og:title': 'Kontakt na Hrušku',
      'og:description': 'Kontaktujte nás - Váš internetový poskytovateľ Hruška',
      'og:type': 'website',
      'og:url': 'https://www.odhrusku.sk/kontakt',
      'og:image': 'https://www.odhrusku.sk/public/hruska.svg',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
