import { ChainEdge } from "./chain-edges";

export const islamicHistoryEdges: ChainEdge[] = [
  // ==========================================
  // EPOCH 1: PRA-KENABIAN & SIRAH MAKKAH
  // ==========================================
  { id: "e-1", source: "h-ibrahim-kabah", target: "h-jahiliyah-sosial", causalLabel: "Pemberkahan Makkah memicu pertumbuhan jalur dagang Quraisy", branch: "jalur-utama" },
  { id: "e-2", source: "h-jahiliyah-sosial", target: "h-tahun-gajah", causalLabel: "Daya tarik Ka'bah memicu invasi Abrahah dari Yaman", branch: "jalur-utama" },
  { id: "e-3", source: "h-tahun-gajah", target: "h-halimah-saadiyah", causalLabel: "Kelahiran Nabi & tradisi penyusuan suku badui", branch: "jalur-utama" },
  { id: "e-4", source: "h-halimah-saadiyah", target: "h-hilf-fudul", causalLabel: "Kembali ke Makkah & keterlibatan pembelaan keadilan", branch: "jalur-utama" },
  { id: "e-5", source: "h-hilf-fudul", target: "h-pernikahan-khadijah", causalLabel: "Gelar Al-Amin menarik minat kemitraan Khadijah", branch: "jalur-utama" },
  { id: "e-6", source: "h-pernikahan-khadijah", target: "h-wahyu-pertama", causalLabel: "Dukungan Khadijah memfasilitasi Tahannuth di Gua Hira", branch: "jalur-utama" },
  { id: "e-7", source: "h-wahyu-pertama", target: "h-dakwah-sembunyi", causalLabel: "Perintah Iqra berlanjut ke Al-Muddaththir", branch: "jalur-utama" },
  { id: "e-8", source: "h-dakwah-sembunyi", target: "h-dakwah-terbuka", causalLabel: "Pembentukan kader Darul Arqam memicu dakwah terang-terangan", branch: "jalur-utama" },
  { id: "e-9", source: "h-dakwah-terbuka", target: "h-penyiksaan-mekkah", causalLabel: "Reaksi elit Quraisy merasa terancam sistem kelas perbudakan", branch: "jalur-utama" },
  { id: "e-10", source: "h-penyiksaan-mekkah", target: "h-hijrah-habasyah", causalLabel: "Penyiksaan berat memicu pencarian suaka politik pertama", branch: "jalur-politik" },
  { id: "e-11", source: "h-penyiksaan-mekkah", target: "h-boikot-syiib", causalLabel: "Masuk Islamnya Hamzah & Umar memicu radikalisasi boikot Quraisy", branch: "jalur-utama" },
  { id: "e-12", source: "h-boikot-syiib", target: "h-tahun-kesedihan", causalLabel: "Penderitaan boikot melemahkan fisik Khadijah & Abu Thalib", branch: "jalur-utama" },
  { id: "e-13", source: "h-tahun-kesedihan", target: "h-isra-miraj", causalLabel: "Ujian lara Tha'if dihibur dengan mukjizat ke langit", branch: "jalur-utama" },
  { id: "e-14", source: "h-isra-miraj", target: "h-baiat-aqabah", causalLabel: "Kewajiban shalat memperkuat dakwah ke jamaah haji Yatsrib", branch: "jalur-politik" },

  // ==========================================
  // EPOCH 2: SIRAH MADINAH & NEGARA
  // ==========================================
  { id: "e-15", source: "h-baiat-aqabah", target: "h-hijrah-tsur", causalLabel: "Pakta pertahanan Aqabah memicu keputusan eksekusi Quraisy & Hijrah", branch: "jalur-utama" },
  { id: "e-16", source: "h-hijrah-tsur", target: "h-quba-nabawi", causalLabel: "Tiba selamat di Madinah & pendirian tempat ibadah utama", branch: "jalur-utama" },
  { id: "e-17", source: "h-quba-nabawi", target: "h-muakhah-piagam", causalLabel: "Masjid Nabawi menjadi tempat perumusan Konstitusi Piagam Madinah", branch: "jalur-politik" },
  { id: "e-18", source: "h-muakhah-piagam", target: "h-perubahan-kiblat", causalLabel: "Kemandirian negara Madinah diikuti pemisahan arah ibadah", branch: "jalur-utama" },
  { id: "e-19", source: "h-perubahan-kiblat", target: "h-badr", causalLabel: "Strategi ekonomi menyita karavan Quraisy memicu Perang Badr", branch: "jalur-utama" },
  { id: "e-20", source: "h-badr", target: "h-bani-qainuqa", causalLabel: "Kejayaan Badr memicu provokasi pengkhianatan Yahudi Qainuqa", branch: "jalur-politik" },
  { id: "e-21", source: "h-badr", target: "h-uhud", causalLabel: "Dendam gugurnya elit Makkah di Badr memicu Perang Uhud", branch: "jalur-politik" },
  { id: "e-22", source: "h-uhud", target: "h-bani-nadhir", causalLabel: "Kelemahan Muslimin di Uhud dimanfaatkan Bani Nadhir untuk makar", branch: "jalur-politik" },
  { id: "e-23", source: "h-bani-nadhir", target: "h-khandaq", causalLabel: "Tokoh Nadhir yang diusir menghimpun Koalisi Pasukan Ahzab", branch: "jalur-politik" },
  { id: "e-24", source: "h-khandaq", target: "h-hudaibiyyah", causalLabel: "Kegagalan Koalisi Ahzab mematahkan supremasi militer Makkah", branch: "jalur-politik" },
  { id: "e-25", source: "h-hudaibiyyah", target: "h-khaibar", causalLabel: "Gencatan senjata dengan Makkah memberi ruang menumpas sarang Khaibar", branch: "jalur-politik" },
  { id: "e-26", source: "h-hudaibiyyah", target: "h-surat-raja", causalLabel: "Suasana damai dimanfaatkan untuk memperluas diplomasi ke 8 raja", branch: "jalur-politik" },
  { id: "e-27", source: "h-surat-raja", target: "h-mutah", causalLabel: "Terbunuhnya utusan diplomatik oleh sekutu Bizantium memicu Perang Mu'tah", branch: "jalur-politik" },
  { id: "e-28", source: "h-hudaibiyyah", target: "h-fathu-makkah", causalLabel: "Pelanggaran gencatan senjata oleh sekutu Quraisy memicu Fathu Makkah", branch: "jalur-utama" },
  { id: "e-29", source: "h-fathu-makkah", target: "h-tabuk-hajiwada", causalLabel: "Penyatuan Jazirah Arab bermuara pada Haji Wada' & purnanya dakwah", branch: "jalur-utama" },

  // ==========================================
  // EPOCH 3: KHULAFAUR RASYIDIN
  // ==========================================
  { id: "e-30", source: "h-tabuk-hajiwada", target: "h-saqifah-abubakar", causalLabel: "Wafatnya Nabi memicu musyawarah suksesi Saqifah Bani Sa'idah", branch: "jalur-politik" },
  { id: "e-31", source: "h-saqifah-abubakar", target: "h-perang-ridda", causalLabel: "Pembangkangan zakat & nabi palsu dihadapi tegas oleh Abu Bakar", branch: "jalur-utama" },
  { id: "e-32", source: "h-perang-ridda", target: "h-ekspansi-yarmuk", causalLabel: "Konsolidasi Arab pulih, pasukan dikirim membebaskan Syam dari Bizantium", branch: "jalur-utama" },
  { id: "e-33", source: "h-ekspansi-yarmuk", target: "h-qadisiyyah-jerusalem", causalLabel: "Kemenangan Yarmuk membuka jalan pembebasan Yerusalem & Persia", branch: "jalur-politik" },
  { id: "e-34", source: "h-qadisiyyah-jerusalem", target: "h-reformasi-umar", causalLabel: "Luasnya imperium memicu kebutuhan birokrasi & Kalender Hijriah", branch: "jalur-sains" },
  { id: "e-35", source: "h-reformasi-umar", target: "h-utsman-mushaf", causalLabel: "Penyebaran pasukan ke wilayah non-Arab memicu pencetakan Rasm Utsmani", branch: "jalur-utama" },
  { id: "e-36", source: "h-utsman-mushaf", target: "h-ali-siffin", causalLabel: "Syahidnya Utsman memicu Fitnah Kubra & Perang Siffin", branch: "jalur-politik" },
  { id: "e-37", source: "h-ali-siffin", target: "h-syahid-ali", causalLabel: "Arbitrase Tahkim memicu kemunculan sekte radikal Khawarij", branch: "jalur-politik" },

  // ==========================================
  // EPOCH 4: DINASTI UMAYYAH
  // ==========================================
  { id: "e-38", source: "h-syahid-ali", target: "h-amul-jamaah", causalLabel: "Hasan bin Ali menyerahkan kepemimpinan demi persatuan umat", branch: "jalur-politik" },
  { id: "e-39", source: "h-amul-jamaah", target: "h-karbala", causalLabel: "Penunjukan putra mahkota Yazid memicu penolakan Husain di Karbala", branch: "jalur-politik" },
  { id: "e-40", source: "h-amul-jamaah", target: "h-umayyah-ekspansi-barat", causalLabel: "Stabilitas Damaskus mendorong pasukan Thariq menyeberang ke Spanyol", branch: "jalur-utama" },
  { id: "e-41", source: "h-amul-jamaah", target: "h-umayyah-ekspansi-timur", causalLabel: "Konsolidasi politik mendorong pembukaan jalur Asia Tengah & Sindh", branch: "jalur-politik" },
  { id: "e-42", source: "h-umayyah-ekspansi-barat", target: "h-arabisasi-dinar", causalLabel: "Empat benua terkoneksi memicu standarisasi Bahasa & Dinar Islam", branch: "jalur-sains" },
  { id: "e-43", source: "h-arabisasi-dinar", target: "h-umar-bin-abdulaziz", causalLabel: "Kebutuhan keadilan hukum mendorong peresmian pembukuan Hadits", branch: "jalur-pemikiran" },

  // ==========================================
  // EPOCH 5: DINASTI ABBASIYAH & GOLDEN AGE
  // ==========================================
  { id: "e-44", source: "h-umayyah-ekspansi-timur", target: "h-revolusi-abbasiyah", causalLabel: "Sentimen diskriminasi Mawali memicu revolusi Abbasiyah", branch: "jalur-utama" },
  { id: "e-45", source: "h-revolusi-abbasiyah", target: "h-perang-talas", causalLabel: "Perbatasan Abbasiyah bertemu Dinasti Tang di Asia Tengah", branch: "jalur-sains" },
  { id: "e-46", source: "h-perang-talas", target: "h-baitul-hikmah-sains", causalLabel: "Teknologi kertas Tiongkok memicu lahirnya Baitul Hikmah Baghdad", branch: "jalur-sains" },
  { id: "e-47", source: "h-baitul-hikmah-sains", target: "h-4mazhab-fiqh", causalLabel: "Maraknya sains rasional memicu kristalisasi metodologi Ushul Fiqh", branch: "jalur-pemikiran" },
  { id: "e-48", source: "h-4mazhab-fiqh", target: "h-kutubus-sittah", causalLabel: "Kebutuhan verifikasi hukum memicu penyusunan Shahih Bukhari & Muslim", branch: "jalur-pemikiran" },
  { id: "e-49", source: "h-kutubus-sittah", target: "h-debat-teologi", causalLabel: "Pertemuan filsafat Yunani & Teks memicu pembelaan akidah Asy'ariyah", branch: "jalur-pemikiran" },
  { id: "e-50", source: "h-revolusi-abbasiyah", target: "h-andalusia-kordoba", causalLabel: "Pewaris Umayyah mendirikan kekhalifahan tandingan di Kordoba", branch: "jalur-sains" },
  { id: "e-51", source: "h-revolusi-abbasiyah", target: "h-fatimiyah-azhar", causalLabel: "Pelemahan Baghdad memicu berdirinya Dinasti Fatimiyah di Kairo", branch: "jalur-politik" },
  { id: "e-52", source: "h-debat-teologi", target: "h-al-ghazali-ibnu-rusyd", causalLabel: "Kritik atas rasionalisme ekstrim memicu lahirnya Ihya Ulumuddin", branch: "jalur-pemikiran" },
  { id: "e-53", source: "h-baitul-hikmah-sains", target: "h-runtuh-baghdad", causalLabel: "Kemewahan & kelemahan militer mengundang invasi Hulagu Khan", branch: "jalur-utama" },

  // ==========================================
  // EPOCH 6: PERANG SALIB & MAMLUK
  // ==========================================
  { id: "e-54", source: "h-fatimiyah-azhar", target: "h-manzikert-salib", causalLabel: "Kekalahan Bizantium di Manzikert memicu seruan Perang Salib I", branch: "jalur-politik" },
  { id: "e-55", source: "h-manzikert-salib", target: "h-salahuddin-hittin", causalLabel: "Pembantaian Yerusalem membakar semangat persatuan Salahuddin", branch: "jalur-utama" },
  { id: "e-56", source: "h-runtuh-baghdad", target: "h-mamluk-ainjalut", causalLabel: "Ancaman destruksi Mongol dihentikan Mamluk di Ain Jalut", branch: "jalur-politik" },
  { id: "e-57", source: "h-andalusia-kordoba", target: "h-kejatuhan-granada", causalLabel: "Perpecahan Muluk th-Thawa'if berujung kejatuhan Granada 1492", branch: "jalur-politik" },

  // ==========================================
  // EPOCH 7: TIGA KERAJAAN BESAR & NUSANTARA
  // ==========================================
  { id: "e-58", source: "h-runtuh-baghdad", target: "h-utsmani-konstantinopel", causalLabel: "Migrasi suku Turk pasca-Mongol membentuk Kekaisaran Utsmani", branch: "jalur-utama" },
  { id: "e-59", source: "h-utsmani-konstantinopel", target: "h-utsmani-puncak", causalLabel: "Jatuhnya Bizantium membuka era kejayaan Suleiman Al-Qanuni", branch: "jalur-politik" },
  { id: "e-60", source: "h-runtuh-baghdad", target: "h-safawi-persia", causalLabel: "Kekosongan politik Persia melahirkan Dinasti Safawi Syi'ah", branch: "jalur-politik" },
  { id: "e-61", source: "h-runtuh-baghdad", target: "h-mughal-india", causalLabel: "Keturunan Timur Lenk mendirikan Kekaisaran Mughal di India", branch: "jalur-sains" },
  { id: "e-62", source: "h-arabisasi-dinar", target: "h-nusantara-pasai-malaka", causalLabel: "Jalur perdagangan laut Samudra Hindia membawa Islam ke Pasai", branch: "jalur-utama" },
  { id: "e-63", source: "h-nusantara-pasai-malaka", target: "h-nusantara-walisongo", causalLabel: "Jaringan ulama jalur rempah melahirkan dakwah Walisongo di Jawa", branch: "jalur-pemikiran" },
  { id: "e-64", source: "h-nusantara-walisongo", target: "h-nusantara-mataram-gowa", causalLabel: "Demak berkembang menjadi Kesultanan Mataram Islam & Gowa-Tallo", branch: "jalur-politik" },

  // ==========================================
  // EPOCH 8: ERA KOLONIALISME & MODERN
  // ==========================================
  { id: "e-65", source: "h-utsmani-puncak", target: "h-napoleon-mesir", causalLabel: "Stagnasi militer Utsmani terekspos oleh invasi Napoleon ke Mesir", branch: "jalur-utama" },
  { id: "e-66", source: "h-napoleon-mesir", target: "h-pembaharuan-islam", causalLabel: "Shock modernitas memicu gerakan Tajdid Afghani & Abduh", branch: "jalur-pemikiran" },
  { id: "e-67", source: "h-napoleon-mesir", target: "h-sykes-picot-balfour", causalLabel: "Kelemahan Utsmani di PD I dimanfaatkan Inggris-Prancis membagi wilayah", branch: "jalur-politik" },
  { id: "e-68", source: "h-sykes-picot-balfour", target: "h-runtuh-khilafah", causalLabel: "Kekalahan PD I memicu pembubaran Khilafah oleh Atatürk", branch: "jalur-utama" },
  { id: "e-69", source: "h-runtuh-khilafah", target: "h-gerakan-modern", causalLabel: "Ketiadaan lembaga pemersatu memicu bangkitnya Ormas & Pergerakan", branch: "jalur-pemikiran" },
  { id: "e-70", source: "h-gerakan-modern", target: "h-era-kontemporer", causalLabel: "Kemerdekaan nation-state bermuara pada fenomena Ummah Digital abad 21", branch: "jalur-utama" },

  // ==========================================
  // CABANG KHUSUS: SEJARAH BAITUL MAQDIS (12 NODE)
  // ==========================================
  { id: "e-bm-1", source: "h-ibrahim-kabah", target: "h-bm-fondasi-awal", causalLabel: "Hijrah Nabi Ibrahim AS mendirikan fondasi suci Al-Aqsa 40 tahun pasca Ka'bah", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-2", source: "h-bm-fondasi-awal", target: "h-bm-sulaiman-renovasi", causalLabel: "Renovasi agung Al-Aqsa & doa pengampunan dosa oleh Nabi Sulaiman AS", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-3", source: "h-bm-sulaiman-renovasi", target: "h-bm-babilonia-uzair", causalLabel: "Penghancuran Babilonia Nebukadnezar & 100 tahun pemulihan Uzair AS", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-4", source: "h-bm-babilonia-uzair", target: "h-bm-isra-miraj", causalLabel: "Al-Aqsa menjadi titik Isra' Nabi & Kiblat Pertama umat Islam", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-5", source: "h-bm-isra-miraj", target: "h-bm-pembebasan-umar", causalLabel: "Penyerahan damai Yerusalem kepada Khalifah Umar & Perjanjian Umariyyah", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-6", source: "h-bm-pembebasan-umar", target: "h-bm-kubah-batu-umayyah", causalLabel: "Pembangunan mahakarya Kubbat as-Sakhrah oleh Abdul Malik bin Marwan", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-7", source: "h-bm-kubah-batu-umayyah", target: "h-bm-pendudukan-salib", causalLabel: "Keterpecahan internal memicu jatuhnya Yerusalem & pembantaian 1099 M", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-8", source: "h-bm-pendudukan-salib", target: "h-bm-mimbar-zengi", causalLabel: "Visi strategi pembebasan Al-Aqsa melalui pembinaan Mimbar Zengi", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-9", source: "h-bm-mimbar-zengi", target: "h-bm-pembebasan-salahuddin", causalLabel: "Penempatan Mimbar Zengi di Al-Qibli pasca pembebasan", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-10", source: "h-bm-pembebasan-salahuddin", target: "h-bm-tembok-suleiman", causalLabel: "Renovasi tembok pelindung Kota Lama Yerusalem oleh Suleiman I", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-11", source: "h-bm-tembok-suleiman", target: "h-bm-abdulhamid-herzl", causalLabel: "Penolakan tegas Sultan Abdul Hamid II atas pembelian tanah Palestina", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-12", source: "h-bm-abdulhamid-herzl", target: "h-bm-pendudukan-modern", causalLabel: "Pendudukan modern 1967 & Ribat pertahanan warga Al-Quds", branch: "sejarah-baitul-maqdis" },

  // ==========================================
  // KONEKSI LINTAS SEJARAH UTAMA <-> BAITUL MAQDIS
  // ==========================================
  { id: "e-bm-cross-1", source: "h-isra-miraj", target: "h-bm-isra-miraj", causalLabel: "Perjumpaan Isra' Mi'raj di Al-Aqsa", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-cross-2", source: "h-qadisiyyah-jerusalem", target: "h-bm-pembebasan-umar", causalLabel: "Yarmuk berujung Perjanjian Umariyyah 638 M", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-cross-3", source: "h-arabisasi-dinar", target: "h-bm-kubah-batu-umayyah", causalLabel: "Pembinaan Kubbat as-Sakhrah 691 M", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-cross-4", source: "h-manzikert-salib", target: "h-bm-pendudukan-salib", causalLabel: "Krisis Perang Salib I merebut Yerusalem", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-cross-5", source: "h-salahuddin-hittin", target: "h-bm-pembebasan-salahuddin", causalLabel: "Kemenangan Hattin berbuah pembebasan Al-Aqsa 1187 M", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-cross-6", source: "h-utsmani-puncak", target: "h-bm-tembok-suleiman", causalLabel: "Suleiman I membentengi Kota Lama Yerusalem", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-cross-7", source: "h-sykes-picot-balfour", target: "h-bm-abdulhamid-herzl", causalLabel: "Penolakan Sultan Abdul Hamid II terhadap Theodor Herzl", branch: "sejarah-baitul-maqdis" },
  { id: "e-bm-cross-8", source: "h-gerakan-modern", target: "h-bm-pendudukan-modern", causalLabel: "Krisis modern & ketabahan Murabitun", branch: "sejarah-baitul-maqdis" }
];
