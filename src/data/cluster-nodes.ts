import { ChainCategory } from "./chain-nodes";

export interface ClusterGroup {
  id: string;
  label: string;
  category: ChainCategory;
  timeRange: string;
  startYear: number;
  endYear: number;
  description: string;
  color: string;
  gradient: string;
  nodeIds: string[];
}

export const CLUSTER_GROUPS: ClusterGroup[] = [
  {
    id: "cluster-pra-islam",
    label: "Era Pra-Islam & Sirah Nabawiyah Makkah",
    category: "pra-islam",
    timeRange: "2000 SM – 622 M",
    startYear: -2000,
    endYear: 622,
    description: "Dari fondasi Tauhid Ibrahim AS & Al-Aqsa, Jahiliyah Makkah, kelahiran Nabi Muhammad ﷺ, Hajar Aswad, Gua Hira, Darul Arqam, dakwah Tha'if, persekusi Makkah, hingga Isra' Mi'raj.",
    color: "#f59e0b",
    gradient: "from-amber-950/90 via-amber-900/70 to-amber-950/90",
    nodeIds: [
      "h-ibrahim-kabah",
      "h-bm-fondasi-awal",
      "h-bm-sulaiman-renovasi",
      "h-bm-babilonia-uzair",
      "h-jahiliyah-sosial",
      "h-tahun-gajah",
      "h-halimah-saadiyah",
      "h-hilf-fudul",
      "h-pernikahan-khadijah",
      "h-renovasi-kabah-hajar",
      "h-wahyu-pertama",
      "h-dakwah-sembunyi",
      "h-kenabian-darul-arqam",
      "h-dakwah-terbuka",
      "h-penyiksaan-mekkah",
      "h-hijrah-habasyah",
      "h-boikot-syiib",
      "h-tahun-kesedihan",
      "h-kenabian-thaif-dakwah",
      "h-isra-miraj",
      "h-bm-isra-miraj",
      "h-baiat-aqabah"
    ]
  },
  {
    id: "cluster-kenabian-madinah",
    label: "Sirah Nabawiyah Madinah & Negara Madinah",
    category: "kenabian",
    timeRange: "622 M – 632 M",
    startYear: 622,
    endYear: 632,
    description: "Perjalanan Hijrah, Piagam Madinah, Pasar Bebas Riba, Perang Badr, Uhud, Bi'r Ma'unah, Khandaq, Bani Qurayzhah, Perjanjian Hudaibiyyah, Khaibar, Mu'tah, Fathu Makkah, Hunain, hingga Haji Wada'.",
    color: "#10b981",
    gradient: "from-emerald-950/90 via-emerald-900/70 to-emerald-950/90",
    nodeIds: [
      "h-hijrah-tsur",
      "h-quba-nabawi",
      "h-muakhah-piagam",
      "h-madinah-muakhah-pasar",
      "h-perubahan-kiblat",
      "h-badr",
      "h-bani-qainuqa",
      "h-uhud",
      "h-tragedi-rajih-maunah",
      "h-bani-nadhir",
      "h-khandaq",
      "h-bani-qurayzhah",
      "h-hudaibiyyah",
      "h-khaibar",
      "h-surat-raja",
      "h-umrah-qadha",
      "h-mutah",
      "h-fathu-makkah",
      "h-perang-hunain",
      "h-pengepungan-thaif",
      "h-tabuk-hajiwada"
    ]
  },
  {
    id: "cluster-khulafaur-rasyidin",
    label: "Khulafaur Rasyidin & Pembebasan Wilayah",
    category: "khulafaur-rasyidin",
    timeRange: "632 M – 661 M",
    startYear: 632,
    endYear: 661,
    description: "Khilafah 4 Sahabat (Abu Bakar, Umar, Utsman, Ali), Perang Ridda & Yamamah, Yarmuk, Al-Qadisiyyah, Nahavand, Jaminan Umar Jerusalem, Dzatus Sawari, Mushaf Utsmani, Jamal, Siffin, & Nahrawan.",
    color: "#14b8a6",
    gradient: "from-teal-950/90 via-teal-900/70 to-teal-950/90",
    nodeIds: [
      "h-saqifah-abubakar",
      "h-perang-ridda",
      "h-rasyidin-perang-yamamah",
      "h-ekspansi-yarmuk",
      "h-qadisiyyah-jerusalem",
      "h-bm-pembebasan-umar",
      "h-rasyidin-perang-qadisiyyah",
      "h-rasyidin-perang-nahavand",
      "h-reformasi-umar",
      "h-rasyidin-dzatus-sawari",
      "h-utsman-mushaf",
      "h-kekhalifahan-ali-baiat",
      "h-pemindahan-ibukota-kufah",
      "h-perang-jamal",
      "h-ali-siffin",
      "h-perang-nahrawan",
      "h-syahid-ali",
      "h-amul-jamaah"
    ]
  },
  {
    id: "cluster-umayyah",
    label: "Daulah Umayyah (Damaskus & Ekspansi)",
    category: "umayyah",
    timeRange: "661 M – 750 M",
    startYear: 661,
    endYear: 750,
    description: "Monarki Damaskus, Tragedi Karbala, Peristiwa Al-Harrah, Tariq bin Ziyad di Gibraltar, Perang Tours/Poitiers, Kubbat as-Sakhrah Jerusalem, Dinar emas, & keadilan Umar bin Abdul Aziz.",
    color: "#06b6d4",
    gradient: "from-cyan-950/90 via-cyan-900/70 to-cyan-950/90",
    nodeIds: [
      "h-karbala",
      "h-perang-harrah",
      "h-umayyah-ekspansi-barat",
      "h-umayyah-tariq-gibraltar",
      "h-umayyah-ekspansi-timur",
      "h-perang-tours-poitiers",
      "h-arabisasi-dinar",
      "h-bm-kubah-batu-umayyah",
      "h-umar-bin-abdulaziz"
    ]
  },
  {
    id: "cluster-abbasiyah",
    label: "Daulah Abbasiyah & Golden Age Peradaban",
    category: "abbasiyah",
    timeRange: "750 M – 1258 M",
    startYear: 750,
    endYear: 1258,
    description: "Kota Baghdad, Perang Talas, Baitul Hikmah, Madrasah Nizamiyah, puncak sains & filsafat (Al-Khawarizmi, Ibnu Sina, Al-Kindi, Al-Farabi, Al-Haytham), 4 Mazhab, Kutubus Sittah, Fathimiyah Al-Azhar, Al-Ghazali, & kejatuhan Baghdad.",
    color: "#8b5cf6",
    gradient: "from-violet-950/90 via-violet-900/70 to-violet-950/90",
    nodeIds: [
      "h-revolusi-abbasiyah",
      "h-abbasiyah-pembangunan-baghdad",
      "h-perang-talas",
      "h-baitul-hikmah-sains",
      "h-sains-khawarizmi-aljabar",
      "h-abbasiyah-al-kindi-filsafat",
      "h-abbasiyah-al-farabi-musik",
      "h-sains-ibnu-sina-kedokteran",
      "h-sains-ibnu-haytham-optik",
      "h-abbasiyah-madrasah-nizamiyah",
      "h-4mazhab-fiqh",
      "h-kutubus-sittah",
      "h-debat-teologi",
      "h-fatimiyah-azhar",
      "h-al-ghazali-ibnu-rusyd",
      "h-runtuh-baghdad"
    ]
  },
  {
    id: "cluster-andalusia",
    label: "Al-Andalus, Fathimiyah & Kesultanan Mamluk",
    category: "andalusia",
    timeRange: "711 M – 1517 M",
    startYear: 711,
    endYear: 1517,
    description: "Abdurrahman Ad-Dakhil, Kordoba, Alhambra Granada, sains (Al-Zahrawi, Ibnu Hazm, Ibnu Rusyd, Ibnu Tufail, Ibnu Khaldun), Manzikert, Perang Salib Salahuddin Hittin, & Ain Jalut Mamluk (Qutuz & Baibars).",
    color: "#ec4899",
    gradient: "from-pink-950/90 via-pink-900/70 to-pink-950/90",
    nodeIds: [
      "h-andalusia-abdurrahman-dakhil",
      "h-andalusia-kordoba",
      "h-andalusia-zahrawi-bedah",
      "h-andalusia-ibnu-hazm",
      "h-andalusia-ibnu-tufail",
      "h-sosiologi-ibnu-khaldun",
      "h-andalusia-alhambra-granada",
      "h-manzikert-salib",
      "h-bm-pendudukan-salib",
      "h-bm-mimbar-zengi",
      "h-salahuddin-hittin",
      "h-bm-pembebasan-salahuddin",
      "h-mamluk-ainjalut",
      "h-mamluk-qutuz-baibars",
      "h-kejatuhan-granada"
    ]
  },
  {
    id: "cluster-tiga-kerajaan",
    label: "Era Tiga Kerajaan Besar Imperium Islam",
    category: "tiga-kerajaan",
    timeRange: "1299 M – 1924 M",
    startYear: 1299,
    endYear: 1924,
    description: "Utsmaniyah (Konstantinopel 1453 Al-Fatih, Kanun Sulaiman, Perang Mohács, Mimar Sinan, Lepanto, Tembok Suleiman), Safawi Persia (Isfahan Shah Abbas), & Mughal India (Panipat, Akbar Sulh-i Kul, Taj Mahal Shah Jahan, Aurangzeb).",
    color: "#e11d48",
    gradient: "from-rose-950/90 via-rose-800/70 to-rose-950/90",
    nodeIds: [
      "h-utsmani-konstantinopel",
      "h-utsmani-puncak",
      "h-utsmani-kanun-sulaiman",
      "h-utsmani-perang-mohats",
      "h-utsmani-mimar-sinan",
      "h-utsmani-perang-lepanto",
      "h-bm-tembok-suleiman",
      "h-safawi-persia",
      "h-safawi-shah-abbas-isfahan",
      "h-mughal-india",
      "h-mughal-akbar-toleransi",
      "h-mughal-shah-jahan-tajmahal",
      "h-mughal-aurangzeb-fatawa"
    ]
  },
  {
    id: "cluster-nusantara",
    label: "Peradaban Islam Nusantara & Wali Songo",
    category: "nusantara",
    timeRange: "Abad 7 M – 1945 M",
    startYear: 650,
    endYear: 1945,
    description: "Situs Barus, Samudera Pasai, Malaka Parameswara, Kesultanan Demak & Wali Songo, Pati Unus, Jayakarta Fatahillah, Aceh-Utsmani, Sultan Babullah Ternate, Sultan Agung Mataram (Kalender Jawa), Sultan Hasanuddin Gowa, Hamzah Fansuri, Perang Diponegoro, & Resolusi Jihad 1945.",
    color: "#22c55e",
    gradient: "from-green-950/90 via-green-900/70 to-green-950/90",
    nodeIds: [
      "h-nusantara-barus-teori",
      "h-nusantara-samudera-pasai",
      "h-nusantara-pasai-malaka",
      "h-nusantara-malaka-parameswara",
      "h-nusantara-kesultanan-demak",
      "h-nusantara-walisongo",
      "h-nusantara-pati-unus-malaka",
      "h-nusantara-fatahillah-sunda-kelapa",
      "h-nusantara-aceh-utsmani",
      "h-nusantara-sultan-babullah-ternate",
      "h-nusantara-mataram-gowa",
      "h-nusantara-sultan-agung-mataram",
      "h-nusantara-gowa-tallo-hasanuddin",
      "h-nusantara-hamzah-fansuri-tasawuf",
      "h-nusantara-perang-diponegoro",
      "h-nusantara-resolusi-jihad"
    ]
  },
  {
    id: "cluster-modern",
    label: "Era Kolonial, Pembaruan & Kontemporer",
    category: "modern",
    timeRange: "1800 M – Sekarang",
    startYear: 1800,
    endYear: 2026,
    description: "Napoleon Mesir, Tanzimat Utsmani, Pan-Islamisme (Al-Afghani, Abduh, Iqbal), Muhammadiyah & NU, Sykes-Picot, Sultan Abdul Hamid II & Theodor Herzl, runtuhnya Khilafah 1924, Ribat Al-Aqsa modern, pembentukan OKI, & Ummah Digital.",
    color: "#0284c7",
    gradient: "from-sky-950/90 via-sky-800/70 to-sky-950/90",
    nodeIds: [
      "h-napoleon-mesir",
      "h-modern-tanzimat-utsmani",
      "h-modern-jamaluddin-afghani",
      "h-modern-muhammad-abduh",
      "h-pembaharuan-islam",
      "h-nusantara-muhammadiyah-nu",
      "h-sykes-picot-balfour",
      "h-bm-abdulhamid-herzl",
      "h-runtuh-khilafah",
      "h-modern-muhammad-iqbal",
      "h-gerakan-modern",
      "h-bm-pendudukan-modern",
      "h-modern-pendirian-oic",
      "h-era-kontemporer"
    ]
  }
];

export function getClusterForNode(nodeId: string, category: ChainCategory): ClusterGroup {
  for (const cluster of CLUSTER_GROUPS) {
    if (cluster.nodeIds.includes(nodeId)) {
      return cluster;
    }
  }
  const found = CLUSTER_GROUPS.find((c) => c.category === category);
  return found || CLUSTER_GROUPS[0];
}
