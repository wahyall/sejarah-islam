export interface QuizQuestion {
  id: string;
  category: "sirah-makkah" | "sirah-madinah" | "khulafaur-rasyidin" | "umayyah-abbasiyah" | "andalusia-tiga-kerajaan" | "nusantara" | "modern";
  categoryLabel: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0, 1, 2, or 3
  explanation: string;
  nodeId: string;
}

export const islamicQuizQuestions: QuizQuestion[] = [
  // =========================================================================
  // CATEGORY 1: SIRAH MAKKAH
  // =========================================================================
  {
    id: "q-ibrahim-kabah",
    category: "sirah-makkah",
    categoryLabel: "Sirah Makkah",
    question: "Doa apakah yang dipanjatkan Nabi Ibrahim AS saat selesai membangun Ka'bah bersama Nabi Ismail AS yang diabadikan dalam Al-Qur'an (QS. Al-Baqarah: 129)?",
    options: [
      "Memohon agar Makkah dijadikan kota pelabuhan terkaya",
      "Memohon agar Allah mengutus seorang Rasul dari keturunan mereka yang membacakan ayat-Nya dan mengajarkan Al-Kitab",
      "Memohon agar keturunan mereka menjadi penguasa seluruh kerajaan di bumi",
      "Memohon agar Ka'bah dilapisi dengan perak dan emas"
    ],
    correctAnswer: 1,
    explanation: "Doa monumental Nabi Ibrahim AS (QS. Al-Baqarah: 129) memohon diutusnya seorang Rasul dari kalangan keturunan Ismail. Doa ini terwujud sempurna pada diri Nabi Muhammad ﷺ.",
    nodeId: "h-ibrahim-kabah"
  },
  {
    id: "q-hilf-fudul",
    category: "sirah-makkah",
    categoryLabel: "Sirah Makkah",
    question: "Apa tujuan utama dibentuknya kesepakatan Hilf al-Fudul di Makkah yang diikuti Nabi Muhammad ﷺ di masa mudanya?",
    options: [
      "Mengatur strategi perang karavan suku Quraisy",
      "Menyatukan barisan untuk membela dan mengembalikan hak siapa pun yang dizalimi di Makkah",
      "Membagi kekayaan perdagangan karavan Yaman dan Syam",
      "Membangun kembali tembok dinding Ka'bah yang rusak"
    ],
    correctAnswer: 1,
    explanation: "Hilf al-Fudul diikrarkan di rumah Abdullah bin Jud'an sebagai pakta kemanusiaan untuk membela siapa pun yang dizalimi di Makkah tanpa memandang kabilah.",
    nodeId: "h-hilf-fudul"
  },
  {
    id: "q-wahyu-pertama",
    category: "sirah-makkah",
    categoryLabel: "Sirah Makkah",
    question: "Surat dan ayat manakah dalam Al-Qur'an yang diturunkan sebagai wahyu pertama kepada Nabi Muhammad ﷺ di Gua Hira?",
    options: [
      "Surat Al-Fatiha ayat 1-7",
      "Surat Al-'Alaq ayat 1-5",
      "Surat Al-Muddaththir ayat 1-5",
      "Surat Al-Baqarah ayat 1-5"
    ],
    correctAnswer: 1,
    explanation: "Wahyu pertama diturunkan oleh Malaikat Jibril di Gua Hira pada malam 17 Ramadhan 610 M, yaitu Surat Al-'Alaq ayat 1-5 yang diawali komando 'Iqra!' (Bacalah!).",
    nodeId: "h-wahyu-pertama"
  },
  {
    id: "q-hijrah-habasyah",
    category: "sirah-makkah",
    categoryLabel: "Sirah Makkah",
    question: "Siapakah sahabat yang menjadi juru bicara kaum Muslimin saat menyampaikan diplomasi di hadapan Raja Najasyi di Habasyah?",
    options: [
      "Abu Bakar as-Siddiq",
      "Ja'far bin Abi Thalib",
      "Utsman bin Affan",
      "Mus'ab bin Umair"
    ],
    correctAnswer: 1,
    explanation: "Ja'far bin Abi Thalib menyampaikan penjelasan diplomasi Islam yang memukau dan membacakan wahyu Surat Maryam di hadapan Raja Najasyi Habasyah.",
    nodeId: "h-hijrah-habasyah"
  },
  {
    id: "q-isra-miraj",
    category: "sirah-makkah",
    categoryLabel: "Sirah Makkah",
    question: "Ibadah utama apakah yang diwajibkan langsung oleh Allah SWT kepada Nabi Muhammad ﷺ saat peristiwa Mi'raj ke Sidratul Muntaha?",
    options: [
      "Kewajiban Zakat Maal",
      "Kewajiban Shalat 5 Waktu",
      "Kewajiban Puasa Ramadhan",
      "Kewajiban Ibadah Haji"
    ],
    correctAnswer: 1,
    explanation: "Saat Mi'raj menembus langit ketujuh hingga Sidratul Muntaha, Allah mewajibkan ibadah Shalat 5 Waktu sebagai pilar utama agama Islam.",
    nodeId: "h-isra-miraj"
  },

  // =========================================================================
  // CATEGORY 2: SIRAH MADINAH
  // =========================================================================
  {
    id: "q-piagam-madinah",
    category: "sirah-madinah",
    categoryLabel: "Sirah Madinah",
    question: "Apa keunggulan bersejarah Piagam Madinah (*Madinah Charter*) yang dirumuskan Rasulullah ﷺ pada tahun 622 M?",
    options: [
      "Merupakan aturan pembagian harta perang Badr",
      "Merupakan konstitusi tertulis pertama dalam sejarah dunia yang menjamin kebebasan beragama, keadilan hukum, dan perlindungan warga",
      "Merupakan perjanjian damai perdagangan dengan Kekaisaran Bizantium",
      "Merupakan dokumen batas wilayah suku Quraisy"
    ],
    correctAnswer: 1,
    explanation: "Piagam Madinah diakui para sejarawan hukum internasional sebagai Konstitusi Tertulis Pertama di Dunia yang menyatukan masyarakat majemuk Madinah.",
    nodeId: "h-muakhah-piagam"
  },
  {
    id: "q-perang-badr",
    category: "sirah-madinah",
    categoryLabel: "Sirah Madinah",
    question: "Berapakah perbandingan jumlah pasukan Muslimin melawan pasukan musyrikin Quraisy pada Pertempuran Al-Kubra Badr (17 Ramadhan 2 H)?",
    options: [
      "500 pasukan Muslimin vs 500 musyrikin",
      "313 pasukan Muslimin vs 1.000 pasukan musyrikin",
      "1.000 pasukan Muslimin vs 3.000 musyrikin",
      "3.000 pasukan Muslimin vs 10.000 musyrikin"
    ],
    correctAnswer: 1,
    explanation: "Pada Perang Badr (17 Ramadhan 2 H), 313 prajurit Muslimin dengan perlengkapan minim berhasil mengalahkan 1.000 pasukan berzirah musyrikin Quraisy.",
    nodeId: "h-badr"
  },
  {
    id: "q-khandaq-salman",
    category: "sirah-madinah",
    categoryLabel: "Sirah Madinah",
    question: "Taktik pertahanan apakah yang diusulkan sahabat Salman Al-Farisi saat menghadapi pengepungan 10.000 Pasukan Ahzab di Madinah?",
    options: [
      "Mendirikan benteng kayu berlapis tiga",
      "Menggali parit raksasa (*Khandaq*) di wilayah utara perbatasan Madinah",
      "Menyerang musuh dengan pasukan berkuda malam hari",
      "Mengungsi ke pegunungan Uhud"
    ],
    correctAnswer: 1,
    explanation: "Salman Al-Farisi mengusulkan taktik perang Persia menggali parit (*Khandaq*) di utara Madinah yang terbukti melumpuhkan serangan kavaleri musuh.",
    nodeId: "h-khandaq"
  },
  {
    id: "q-hudaibiyyah-visi",
    category: "sirah-madinah",
    categoryLabel: "Sirah Madinah",
    question: "Mengapa Perjanjian Hudaibiyyah (628 M) disebut Al-Qur'an sebagai 'Fathan Mubina' (Kemenangan yang Nyata)?",
    options: [
      "Karena Quraisy menyerahkan kunci kota Makkah secara langsung",
      "Karena gencatan senjata 10 tahun memberi suasana damai bagi dakwah Islam untuk menyebar masif ke seluruh Jazirah Arab",
      "Karena pasukan Muslim mendapat harta rampasan melimpah",
      "Karena Quraisy bersedia membayar denda perang"
    ],
    correctAnswer: 1,
    explanation: "Gencatan senjata Hudaibiyyah memberi ruang aman bagi Islam menyebar pesat, sehingga jumlah pemeluk Islam melonjak berlipat ganda dalam waktu singkat.",
    nodeId: "h-hudaibiyyah"
  },
  {
    id: "q-fathu-makkah-amnesti",
    category: "sirah-madinah",
    categoryLabel: "Sirah Madinah",
    question: "Deklarasi apakah yang disampaikan Rasulullah ﷺ kepada warga Makkah saat Fathu Makkah (8 H)?",
    options: [
      "Menjatuhkan hukuman mati bagi seluruh pembesar Quraisy",
      "Deklarasi Amnesti Umum (*Idzhabu fa-antum at-tulaqa'*) memaafkan seluruh musuh tanpa balas dendam",
      "Menyita seluruh rumah dan aset warga Makkah",
      "Meminta tebusan emas seberat Ka'bah"
    ],
    correctAnswer: 1,
    explanation: "Nabi menunjukkan keagungan jiwa memaafkan musuh bebuyutannya dengan bersabda: 'Pergilah kalian semua, hari ini kalian adalah orang-orang yang bebas!'.",
    nodeId: "h-fathu-makkah"
  },

  // =========================================================================
  // CATEGORY 3: KHULAFAUR RASYIDIN
  // =========================================================================
  {
    id: "q-saqifah-abubakar",
    category: "khulafaur-rasyidin",
    categoryLabel: "Khulafaur Rasyidin",
    question: "Siapakah sosok yang dibaiat sebagai Khalifah pertama memimpin umat Islam pasca wafatnya Rasulullah ﷺ melalui musyawarah di Saqifah Bani Sa'idah?",
    options: [
      "Umar bin Khattab",
      "Abu Bakar as-Siddiq",
      "Ali bin Abi Thalib",
      "Utsman bin Affan"
    ],
    correctAnswer: 1,
    explanation: "Abu Bakar as-Siddiq dibaiat di Saqifah Bani Sa'idah (11 H) setelah musyawarah persatuan antara kaum Anshar dan Muhajirin.",
    nodeId: "h-saqifah-abubakar"
  },
  {
    id: "q-yarmuk-khalid",
    category: "khulafaur-rasyidin",
    categoryLabel: "Khulafaur Rasyidin",
    question: "Siapakah panglima tentara Islam yang memimpin 40.000 prajurit memenangkan Pertempuran Yarmuk (636 M) menghancurkan dominasi militer Bizantium di Syam?",
    options: [
      "Sa'ad bin Abi Waqqas",
      "Khalid bin Walid",
      "Amr bin Ash",
      "Abu Ubaidah bin al-Jarrah"
    ],
    correctAnswer: 1,
    explanation: "Khalid bin Walid mengomandoi taktik kavaleri dinamis di Pertempuran Yarmuk (636 M), menghancurkan pasukan Bizantium dan membebaskan wilayah Syam.",
    nodeId: "h-ekspansi-yarmuk"
  },
  {
    id: "q-qadisiyyah-saad",
    category: "khulafaur-rasyidin",
    categoryLabel: "Khulafaur Rasyidin",
    question: "Pertempuran akbar manakah di Irak (636 M) pimpinan Sa'ad bin Abi Waqqas yang melumpuhkan gajah perang dan meruntuhkan Kekaisaran Sassanid Persia?",
    options: [
      "Pertempuran Nahrawan",
      "Pertempuran Al-Qadisiyyah",
      "Pertempuran Yarmuk",
      "Pertempuran Ain Jalut"
    ],
    correctAnswer: 1,
    explanation: "Pertempuran Al-Qadisiyyah (636 M) menumbangkan tentara Persia pimpinan Rustam dan membuka gerbang penaklukan ibukota Ctesiphon (Al-Mada'in).",
    nodeId: "h-qadisiyyah-jerusalem"
  },
  {
    id: "q-utsman-mushaf",
    category: "khulafaur-rasyidin",
    categoryLabel: "Khulafaur Rasyidin",
    question: "Mengapa Khalifah Utsman bin Affan membentuk panitia 4 sahabat untuk menyusun salinan standar Mushaf Rasm Utsmani?",
    options: [
      "Karena dokumen lama di rumah Hafsah telah hancur",
      "Merespons ancaman perselisihan perpecahan akibat perbedaan dialek bacaan Al-Qur'an di kalangan prajurit wilayah baru",
      "Untuk menambahkan terjemahan bahasa Latin",
      "Atas perintah Kaisar Romawi"
    ],
    correctAnswer: 1,
    explanation: "Hudzaifah ibn al-Yaman melapor ke Utsman tentang bahaya perbedaan dialek bacaan. Utsman membentuk panitia Zaid bin Tsabit untuk menyatukan Rasm Utsmani.",
    nodeId: "h-utsman-mushaf"
  },

  // =========================================================================
  // CATEGORY 4: DINASTI UMAYYAH & ABBASIYAH
  // =========================================================================
  {
    id: "q-thariq-andalusia",
    category: "umayyah-abbasiyah",
    categoryLabel: "Umayyah & Abbasiyah",
    question: "Siapakah panglima Muslim yang menyeberangi selat Gibraltar (Jabal Thariq) dan membebaskan Semenanjung Iberia (Spanyol/Andalusia) pada 711 M?",
    options: [
      "Qutaibah bin Muslim",
      "Thariq bin Ziyad",
      "Muhammad bin Qasim",
      "Musa bin Nushair"
    ],
    correctAnswer: 1,
    explanation: "Thariq bin Ziyad memimpin pasukan menyeberangi selat Gibraltar (92 H / 711 M) dan mengalahkan Raja Visigoth Roderick di Pertempuran Guadalete.",
    nodeId: "h-umayyah-ekspansi-barat"
  },
  {
    id: "q-perang-talas-kertas",
    category: "umayyah-abbasiyah",
    categoryLabel: "Umayyah & Abbasiyah",
    question: "Dampak peradaban terbesar apakah yang dihasilkan dari Pertempuran Talas (751 M) antara Kekhalifahan Abbasiyah dan Dinasti Tang Tiongkok?",
    options: [
      "Penutupan pelabuhan sutra",
      "Penyerapan teknologi manufaktur pembuatan kertas murah dari tawanan Tiongkok yang memicu Revolusi Literasi Zaman Keemasan Islam",
      "Penguasaan teknologi mesiu perang",
      "Pembagian batas wilayah laut"
    ],
    correctAnswer: 1,
    explanation: "Dari tawanan perang di Samarkand pasca Pertempuran Talas (751 M), umat Islam menyerap rahasia pembuatan kertas, mendirikan pabrik kertas di Baghdad (794 M) dan memicu keemasan sains.",
    nodeId: "h-perang-talas"
  },
  {
    id: "q-baitul-hikmah-baghdad",
    category: "umayyah-abbasiyah",
    categoryLabel: "Umayyah & Abbasiyah",
    question: "Nama lembaga riset dan perpustakaan akbar di Baghdad yang didirikan Harun Ar-Rasyid dan dikembangkan Al-Ma'mun sebagai pusat keemasan sains dunia adalah...",
    options: [
      "Al-Azhar",
      "Baitul Hikmah (House of Wisdom)",
      "Darul Arqam",
      "Madrasah Nizamiyah"
    ],
    correctAnswer: 1,
    explanation: "Baitul Hikmah di Baghdad menjadi pusat penerjemahan dan riset sains dunia tempat lahirnya ilmuwan Al-Khawarizmi, Ibnu Sina, Al-Razi, dan Ibn al-Haytham.",
    nodeId: "h-baitul-hikmah-sains"
  },
  {
    id: "q-ushul-fiqh-syafii",
    category: "umayyah-abbasiyah",
    categoryLabel: "Umayyah & Abbasiyah",
    question: "Kitab karya Imam Muhammad bin Idris Asy-Syafi'i yang menjadi arsitektur mahakarya pertama pembukuan metodologi Ushul Fiqh adalah...",
    options: [
      "Al-Muwatta'",
      "Ar-Risalah",
      "Ihya 'Ulumuddin",
      "Al-Qanun fi at-Tibb"
    ],
    correctAnswer: 1,
    explanation: "Imam Asy-Syafi'i merumuskan Ushul Fiqh dalam kitab 'Ar-Risalah', menyatukan 4 pilar hukum: Al-Qur'an, Sunnah, Ijma', dan Qiyas.",
    nodeId: "h-4mazhab-fiqh"
  },
  {
    id: "q-runtuh-baghdad-1258",
    category: "umayyah-abbasiyah",
    categoryLabel: "Umayyah & Abbasiyah",
    question: "Panglima Mongol siapakah yang memimpin penghancuran kota Baghdad dan pembakaran perpustakaan Baitul Hikmah pada tahun 1258 M (656 H)?",
    options: [
      "Genghis Khan",
      "Hulagu Khan",
      "Kubilai Khan",
      "Timur Lenk"
    ],
    correctAnswer: 1,
    explanation: "Hulagu Khan (cucu Genghis Khan) memimpin 150.000 pasukan Mongol mengepung Baghdad (1258 M), membantai warga dan membuang ratusan ribu naskah buku ke Sungai Tigris.",
    nodeId: "h-runtuh-baghdad"
  },

  // =========================================================================
  // CATEGORY 5: ANDALUSIA & TIGA KERAJAAN BESAR
  // =========================================================================
  {
    id: "q-konstantinopel-alfatih",
    category: "andalusia-tiga-kerajaan",
    categoryLabel: "Tiga Kerajaan Besar",
    question: "Taktik militer luar biasa apakah yang dilancarkan Sultan Mehmed II (Al-Fatih) saat membobol pertahanan Konstantinopel pada 29 Mei 1453 M?",
    options: [
      "Menggali parit raksasa melingkari kota",
      "Memindahkan 70 kapal perang melintasi daratan bukit Galata menggunakan gelondongan kayu berpelumas dalam satu malam",
      "Menggunakan kavaleri gajah tempur",
      "Menolak bertempur dan menunggu perang usai"
    ],
    correctAnswer: 1,
    explanation: "Al-Fatih memindahkan 70 kapal perang melintasi daratan bukit Galata dalam satu malam untuk mengitari rantai raksasa teluk Golden Horn.",
    nodeId: "h-utsmani-konstantinopel"
  },
  {
    id: "q-ain-jalut-mamluk",
    category: "andalusia-tiga-kerajaan",
    categoryLabel: "Tiga Kerajaan Besar",
    question: "Sultan Dinasti Mamluk Mesir siapakah yang memimpin pasukan mengalahkan tentara Mongol di Pertempuran Ain Jalut (1260 M)?",
    options: [
      "Salahuddin Al-Ayyubi",
      "Sultan Saifuddin Qutuz & Ruknuddin Baibars",
      "Suleiman Al-Qanuni",
      "Muhammad Al-Fatih"
    ],
    correctAnswer: 1,
    explanation: "Sultan Saifuddin Qutuz bersama panglimanya Baibars memenangkan Pertempuran Ain Jalut (1260 M) di Palestina, mematahkan invasi Mongol ke dunia Islam.",
    nodeId: "h-mamluk-ainjalut"
  },
  {
    id: "q-granada-1492",
    category: "andalusia-tiga-kerajaan",
    categoryLabel: "Tiga Kerajaan Besar",
    question: "Benteng kerajaan Islam terakhir di Spanyol manakah yang jatuh ke tangan penguasa Kristen Spanyol pada 1492 M, mengakhiri 781 tahun peradaban Islam di Andalusia?",
    options: [
      "Khilafah Kordoba",
      "Kesultanan Granada (Benteng Alhambra)",
      "Emirat Sevilla",
      "Kerajaan Toledo"
    ],
    correctAnswer: 1,
    explanation: "Sultan Muhammad XII (Boabdil) menyerahkan benteng Alhambra di Granada pada 2 Januari 1492 M, mengakhiri kekuasaan peradaban Islam di Spanyol.",
    nodeId: "h-kejatuhan-granada"
  },

  // =========================================================================
  // CATEGORY 6: ISLAM NUSANTARA
  // =========================================================================
  {
    id: "q-pasai-pertama",
    category: "nusantara",
    categoryLabel: "Islam Nusantara",
    question: "Kerajaan Islam pertama yang berdiri di wilayah Nusantara pada abad ke-13 yang dikunjungi penjelajah Ibnu Battutah adalah...",
    options: [
      "Kesultanan Demak",
      "Kesultanan Samudera Pasai",
      "Kesultanan Malaka",
      "Kesultanan Mataram"
    ],
    correctAnswer: 1,
    explanation: "Samudera Pasai di utara Sumatra dipimpin Sultan Malik as-Saleh diakui sebagai kerajaan Islam awal Nusantara dan pusat studi ilmu agama Syafi'iyah.",
    nodeId: "h-nusantara-pasai-malaka"
  },
  {
    id: "q-walisongo-metode",
    category: "nusantara",
    categoryLabel: "Islam Nusantara",
    question: "Bagaimanakah pendekatan dakwah utama yang diterapkan oleh majelis Walisongo dalam mendakwahkan Islam di Tanah Jawa?",
    options: [
      "Menggunakan tindakan militer dan pengusiran",
      "Pendekatan akulturasi budaya lokal (wayang kulit, tembang Jawa, gamelan) secara simpatik, hikmah, dan damai",
      "Mengharuskan warga menggunakan nama suku Arab",
      "Mengisolasi diri di daerah pesisir saja"
    ],
    correctAnswer: 1,
    explanation: "Walisongo (seperti Sunan Kalijaga, Sunan Ampel, Sunan Giri) menyebarkan Islam secara harmonis melalui seni budaya wayang, tembang lir-ilir, dan pesantren.",
    nodeId: "h-nusantara-walisongo"
  },
  {
    id: "q-sultan-agung-kalender",
    category: "nusantara",
    categoryLabel: "Islam Nusantara",
    question: "Karya peradaban apakah yang dirumuskan oleh Sultan Agung Hanyokrokusumo dari Kesultanan Mataram Islam pada tahun 1633 M?",
    options: [
      "Pembuatan mata uang Gulden Jawa",
      "Penyatuan Kalender Jawa-Hijriah (menggabungkan perhitungan lunar Hijriah dengan penanggalan Jawa)",
      "Penerjemahan Al-Qur'an ke bahasa Belanda",
      "Pembangunan pelabuhan Sunda Kelapa"
    ],
    correctAnswer: 1,
    explanation: "Sultan Agung memelopori penyatuan Kalender Jawa-Hijriah pada 1633 M yang memadukan tahun Saka dan perputaran bulan Hijriah.",
    nodeId: "h-nusantara-mataram-gowa"
  },

  // =========================================================================
  // CATEGORY 7: ERA MODERN
  // =========================================================================
  {
    id: "q-sykes-picot-1916",
    category: "modern",
    categoryLabel: "Era Modern",
    question: "Apakah nama perjanjian kolonial rahasia (1916 M) antara Inggris dan Prancis yang membagi-bagi wilayah provinsi Utsmani di Timur Tengah?",
    options: [
      "Perjanjian Versailles",
      "Perjanjian Sykes-Picot",
      "Perjanjian Hudaibiyyah",
      "Perjanjian Granada"
    ],
    correctAnswer: 1,
    explanation: "Sykes-Picot Agreement (1916 M) membagi Suriah & Lebanon ke Prancis serta Irak & Yordania ke Inggris, memicu fragmentasi wilayah Arab.",
    nodeId: "h-sykes-picot-balfour"
  },
  {
    id: "q-runtuh-khilafah-1924",
    category: "modern",
    categoryLabel: "Era Modern",
    question: "Pada tanggal dan tahun berapakah Khilafah Utsmaniyah secara resmi dibubarkan oleh Majelis Nasional Agung Turki pimpinan Mustafa Kemal Atatürk?",
    options: [
      "17 Agustus 1945",
      "3 Maret 1924 M (27 Rajab 1342 H)",
      "10 November 1918",
      "1 Januari 1900"
    ],
    correctAnswer: 1,
    explanation: "Pada 3 Maret 1924 M, Khilafah Utsmaniyah resmi dibubarkan, mengakhiri institusi kekhalifahan universal dan beralih ke era negara-bangsa modern (*Nation-State*).",
    nodeId: "h-runtuh-khilafah"
  },
  {
    id: "q-ormas-indonesia",
    category: "modern",
    categoryLabel: "Era Modern",
    question: "Dua organisasi kemasyarakatan Islam terbesar di Indonesia yang masing-masing didirikan oleh KH. Ahmad Dahlan (1912) dan KH. Hasyim Asy'ari (1926) adalah...",
    options: [
      "Sarekat Islam dan Al-Azhar",
      "Muhammadiyah dan Nahdlatul Ulama (NU)",
      "Persis dan Mataram",
      "Al-Irsyad dan Thawalib"
    ],
    correctAnswer: 1,
    explanation: "Muhammadiyah didirikan KH. Ahmad Dahlan (1912) berfokus tajdid pendidikan/sosial, dan NU didirikan KH. Hasyim Asy'ari (1926) mempertahankan tradisi keagamaan dan mengumandangkan Resolusi Jihad 1945.",
    nodeId: "h-gerakan-modern"
  }
];
