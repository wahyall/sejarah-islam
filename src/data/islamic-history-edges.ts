import { ChainEdge } from "./chain-edges";

export const islamicHistoryEdges: ChainEdge[] = [
  // ==========================================
  // EPOCH 1: ERA PRA-ISLAM & MAKKAH
  // ==========================================
  { id: "e-1", source: "h-ibrahim-kabah", target: "h-bm-fondasi-awal", causalLabel: "Nabi Ibrahim AS merintis fondasi Tauhid di Ka'bah dan Baitul Maqdis", branch: "jalur-utama" },
  { id: "e-1-b", source: "h-bm-fondasi-awal", target: "h-bm-sulaiman-renovasi", causalLabel: "Nabi Sulaiman AS membangun kemegahan Masjid Al-Aqsa", branch: "jalur-sains" },
  { id: "e-1-c", source: "h-bm-sulaiman-renovasi", target: "h-bm-babilonia-uzair", causalLabel: "Serangan Babilonia merusak Al-Aqsa & pemulihan era Uzair AS", branch: "jalur-politik" },
  { id: "e-1-d", source: "h-bm-babilonia-uzair", target: "h-jahiliyah-sosial", causalLabel: "Dinamika Jazirah Arab menuju era kegelapan Jahiliyah", branch: "jalur-utama" },
  { id: "e-2", source: "h-jahiliyah-sosial", target: "h-tahun-gajah", causalLabel: "Kelahiran Nabi Muhammad ﷺ menjadi cahaya penyelamat era Jahiliyah", branch: "jalur-utama" },
  { id: "e-3", source: "h-tahun-gajah", target: "h-halimah-saadiyah", causalLabel: "Pengasuhan di pedalaman Banu Sa'ad menjaga kesucian bahasa & fisik Nabi", branch: "jalur-utama" },
  { id: "e-4", source: "h-halimah-saadiyah", target: "h-hilf-fudul", causalLabel: "Pengalaman kepemudaan menumbuhkan kepedulian atas keadilan sosial Hilf al-Fudul", branch: "jalur-pemikiran" },
  { id: "e-5", source: "h-hilf-fudul", target: "h-pernikahan-khadijah", causalLabel: "Reputasi Al-Amin (Terpercaya) memikat kemitraan & pernikahan Khadijah RA", branch: "jalur-utama" },
  { id: "e-5-b", source: "h-pernikahan-khadijah", target: "h-renovasi-kabah-hajar", causalLabel: "Kebijaksanaan kain sorban Nabi menyelesaikan perselisihan Hajar Aswad", branch: "jalur-utama" },
  { id: "e-5-c", source: "h-renovasi-kabah-hajar", target: "h-wahyu-pertama", causalLabel: "Pematangan spiritual berlanjut ke Tahannuth di Gua Hira & Wahyu Iqra", branch: "jalur-utama" },
  { id: "e-6", source: "h-wahyu-pertama", target: "h-dakwah-sembunyi", causalLabel: "Perintah Iqra memicu pergerakan dakwah rahasia membina kader awal", branch: "jalur-utama" },
  { id: "e-7", source: "h-dakwah-sembunyi", target: "h-kenabian-darul-arqam", causalLabel: "Kaderisasi pemuda As-Sabiqunal Awwalun di Rumah Arqam bin Abil Arqam", branch: "jalur-pemikiran" },
  { id: "e-7-b", source: "h-kenabian-darul-arqam", target: "h-dakwah-terbuka", causalLabel: "Kekuatan kader Darul Arqam melapangkan dakwah terbuka di Bukit Shafa", branch: "jalur-utama" },
  { id: "e-8", source: "h-dakwah-terbuka", target: "h-penyiksaan-mekkah", causalLabel: "Dakwah terang-terangan memicu persekusi & intimidasi fisik elit Quraisy", branch: "jalur-utama" },
  { id: "e-9", source: "h-penyiksaan-mekkah", target: "h-hijrah-habasyah", causalLabel: "Intimidasi Quraisy mendorong pencarian suaka pertama ke Habasyah", branch: "jalur-politik" },
  { id: "e-10", source: "h-penyiksaan-mekkah", target: "h-boikot-syiib", causalLabel: "Kegagalan diplomatik Quraisy di Habasyah memicu boikot total di Syi'ib", branch: "jalur-utama" },
  { id: "e-11", source: "h-boikot-syiib", target: "h-tahun-kesedihan", causalLabel: "Penderitaan boikot 3 tahun melemahkan fisik Khadijah & Abu Thalib hingga wafat", branch: "jalur-utama" },
  { id: "e-12", source: "h-tahun-kesedihan", target: "h-kenabian-thaif-dakwah", causalLabel: "Wafatnya penopang dakwah memicu pencarian dukungan baru ke Tha'if", branch: "jalur-utama" },
  { id: "e-12-b", source: "h-kenabian-thaif-dakwah", target: "h-isra-miraj", causalLabel: "Ketabahan ujian Tha'if disambut hiburan spiritual agung Isra' Mi'raj", branch: "jalur-utama" },
  { id: "e-13", source: "h-isra-miraj", target: "h-bm-isra-miraj", causalLabel: "Nabi Muhammad ﷺ mengimami para Nabi di Masjid Al-Aqsa Jerusalem", branch: "jalur-pemikiran" },
  { id: "e-14", source: "h-bm-isra-miraj", target: "h-baiat-aqabah", causalLabel: "Kabar mukjizat & shalat memperkuat keyakinan peziarah Yatsrib", branch: "jalur-utama" },
  { id: "e-15", source: "h-baiat-aqabah", target: "h-hijrah-tsur", causalLabel: "Pakta pertahanan Aqabah II memicu keputusan eksekusi Quraisy & Hijrah", branch: "jalur-utama" },

  // ==========================================
  // EPOCH 2: SIRAH MADINAH & NEGARA MADINAH
  // ==========================================
  { id: "e-16", source: "h-hijrah-tsur", target: "h-quba-nabawi", causalLabel: "Kedatangan aman di Madinah diawali pembangunan Masjid Quba & Nabawi", branch: "jalur-utama" },
  { id: "e-17", source: "h-quba-nabawi", target: "h-muakhah-piagam", causalLabel: "Masjid menjadi pusat peradaban & penetapan Piagam Madinah", branch: "jalur-politik" },
  { id: "e-18", source: "h-madinah-muakhah-pasar", target: "h-muakhah-piagam", causalLabel: "Kemandirian ekonomi diwujudkan melalui Pendirian Pasar Bebas Riba", branch: "jalur-sains" },
  { id: "e-19", source: "h-muakhah-piagam", target: "h-perubahan-kiblat", causalLabel: "Penetapan identitas syariat berlanjut ke perubahan Kiblat ke Ka'bah", branch: "jalur-pemikiran" },
  { id: "e-20", source: "h-perubahan-kiblat", target: "h-badr", causalLabel: "Pencegatan kafilah Abu Sufyan memicu konfrontasi Perang Badr Al-Kubra", branch: "jalur-utama" },
  { id: "e-21", source: "h-badr", target: "h-bani-qainuqa", causalLabel: "Kemenangan Badr menyibak pengkhianatan Suku Yahudi Bani Qainuqa'", branch: "jalur-politik" },
  { id: "e-22", source: "h-badr", target: "h-uhud", causalLabel: "Dendam kekalahan Badr mendorong Quraisy menyerang di Perang Uhud", branch: "jalur-utama" },
  { id: "e-22-b", source: "h-uhud", target: "h-tragedi-rajih-maunah", causalLabel: "Dinamika pasca Uhud dimanfaatkan kabilah musuh membantai 70 Huffaz", branch: "jalur-utama" },
  { id: "e-23", source: "h-tragedi-rajih-maunah", target: "h-bani-nadhir", causalLabel: "Ancaman pembunuhan Nabi di benteng memicu pengusiran Bani Nadhir", branch: "jalur-politik" },
  { id: "e-24", source: "h-bani-nadhir", target: "h-khandaq", causalLabel: "Provokasi tokoh Bani Nadhir menghimpun 10.000 Pasukan Gabungan Ahzab", branch: "jalur-utama" },
  { id: "e-25", source: "h-khandaq", target: "h-bani-qurayzhah", causalLabel: "Pengkhianatan Bani Qurayzhah saat Ahzab memicu hukuman Sa'ad bin Mu'adz", branch: "jalur-politik" },
  { id: "e-26", source: "h-bani-qurayzhah", target: "h-hudaibiyyah", causalLabel: "Kestabilan Madinah melapangkan pergerakan Umrah & Perjanjian Hudaibiyyah", branch: "jalur-utama" },
  { id: "e-27", source: "h-hudaibiyyah", target: "h-khaibar", causalLabel: "Gencatan senjata Hudaibiyyah melapangkan penaklukan benteng Khaibar", branch: "jalur-utama" },
  { id: "e-28", source: "h-khaibar", target: "h-umrah-qadha", causalLabel: "Pembersihan benteng Khaibar berlanjut ke pelaksanaan Umrah Qadha", branch: "jalur-politik" },
  { id: "e-29", source: "h-umrah-qadha", target: "h-surat-raja", causalLabel: "Keamanan regional memungkinkan diplomasi surat dakwah ke Raja-Raja Dunia", branch: "jalur-pemikiran" },
  { id: "e-30", source: "h-surat-raja", target: "h-mutah", causalLabel: "Pembunuhan utusan dakwah di Busra memicu Pertempuran Mu'tah", branch: "jalur-politik" },
  { id: "e-31", source: "h-mutah", target: "h-fathu-makkah", causalLabel: "Pelanggaran sekutu Quraisy atas Hudaibiyyah memicu Fathu Makkah", branch: "jalur-utama" },
  { id: "e-32", source: "h-fathu-makkah", target: "h-perang-hunain", causalLabel: "Penaklukan Makkah direspon ancaman gabungan Suku Hawazin di Hunain", branch: "jalur-utama" },
  { id: "e-33", source: "h-perang-hunain", target: "h-pengepungan-thaif", causalLabel: "Pengepungan sisa pasukan Hawazin & Thaqif di benteng kota Tha'if", branch: "jalur-politik" },
  { id: "e-34", source: "h-pengepungan-thaif", target: "h-tabuk-hajiwada", causalLabel: "Konsolidasi total Jazirah Arab menuju Tabuk & Haji Wada' Khutbah Perpisahan", branch: "jalur-utama" },

  // ==========================================
  // EPOCH 3: KHULAFAUR RASYIDIN
  // ==========================================
  { id: "e-35", source: "h-tabuk-hajiwada", target: "h-saqifah-abubakar", causalLabel: "Wafatnya Rasulullah ﷺ disusul musyawarah Saqifah mengangkat Abu Bakar", branch: "jalur-utama" },
  { id: "e-36", source: "h-saqifah-abubakar", target: "h-perang-ridda", causalLabel: "Pembangkangan zakat & nabi palsu memicu ketegasan Perang Ridda", branch: "jalur-utama" },
  { id: "e-37", source: "h-perang-ridda", target: "h-rasyidin-perang-yamamah", causalLabel: "Penumpasan Musailamah di Yamamah mengugurkan puluhan Huffaz Al-Qur'an", branch: "jalur-utama" },
  { id: "e-38", source: "h-rasyidin-perang-yamamah", target: "h-ekspansi-yarmuk", causalLabel: "Penyatuan Jazirah memicu ekspansi pertahanan ke Yarmuk melawan Bizantium", branch: "jalur-politik" },
  { id: "e-39", source: "h-ekspansi-yarmuk", target: "h-rasyidin-perang-qadisiyyah", causalLabel: "Kemenangan Yarmuk berlanjut ke pembebasan Irak & Perang Al-Qadisiyyah", branch: "jalur-politik" },
  { id: "e-40", source: "h-rasyidin-perang-qadisiyyah", target: "h-qadisiyyah-jerusalem", causalLabel: "Kemenangan Qadisiyyah memicu pembebasan Jerusalem oleh Umar", branch: "jalur-politik" },
  { id: "e-41", source: "h-qadisiyyah-jerusalem", target: "h-rasyidin-perang-nahavand", causalLabel: "Pembebasan Jerusalem berlanjut ke Fathul Futuh Nahavand menumbangkan Persia", branch: "jalur-politik" },
  { id: "e-42", source: "h-qadisiyyah-jerusalem", target: "h-bm-pembebasan-umar", causalLabel: "Khalifah Umar menerima kunci Jerusalem & menerbitkan Al-Uhda al-Umariyyah", branch: "jalur-pemikiran" },
  { id: "e-43", source: "h-bm-pembebasan-umar", target: "h-reformasi-umar", causalLabel: "Perluasan wilayah mendorong reformasi Baitul Mal, Diwan, & Kalender Hijriah", branch: "jalur-sains" },
  { id: "e-44", source: "h-reformasi-umar", target: "h-utsman-mushaf", causalLabel: "Kemajuan administrasi berlanjut ke penyusunan Mushaf Utsmani", branch: "jalur-pemikiran" },
  { id: "e-45", source: "h-utsman-mushaf", target: "h-rasyidin-dzatus-sawari", causalLabel: "Luasnya wilayah antar-benua mendorong ekspansi armada Dzatus Sawari", branch: "jalur-politik" },
  { id: "e-45-b", source: "h-utsman-mushaf", target: "h-kekhalifahan-ali-baiat", causalLabel: "Keshahidan Utsman disusul pembaiatan resmi Ali bin Abi Thalib sebagai Khalifah ke-4", branch: "jalur-utama" },
  { id: "e-45-c", source: "h-kekhalifahan-ali-baiat", target: "h-pemindahan-ibukota-kufah", causalLabel: "Khalifah Ali memindahkan pusat administrasi ke Kufah demi efisiensi & menjaga Madinah", branch: "jalur-politik" },
  { id: "e-46", source: "h-pemindahan-ibukota-kufah", target: "h-perang-jamal", causalLabel: "Krisis fitnah politik pasca wafatnya Utsman memicu konfrontasi Perang Jamal", branch: "jalur-politik" },
  { id: "e-47", source: "h-perang-jamal", target: "h-ali-siffin", causalLabel: "Perselisihan penegakan hukum berlanjut ke Pertempuran Siffin & Tahkim", branch: "jalur-politik" },
  { id: "e-48", source: "h-ali-siffin", target: "h-perang-nahrawan", causalLabel: "Penolakan hasil Tahkim melahirkan radikalisme Khawarij di Nahrawan", branch: "jalur-pemikiran" },
  { id: "e-49", source: "h-perang-nahrawan", target: "h-syahid-ali", causalLabel: "Dendam Khawarij bermuara pada konspirasi keshahidan Ali bin Abi Thalib", branch: "jalur-utama" },
  { id: "e-50", source: "h-syahid-ali", target: "h-amul-jamaah", causalLabel: "Hasan bin Ali melakukan rekonsiliasi persatuan umat di Amul Jama'ah", branch: "jalur-utama" },

  // ==========================================
  // EPOCH 4: DAULAH UMAYYAH
  // ==========================================
  { id: "e-51", source: "h-amul-jamaah", target: "h-karbala", causalLabel: "Perubahan sistem monarki memicu tragedi keshahidan Hussein di Karbala", branch: "jalur-politik" },
  { id: "e-52", source: "h-karbala", target: "h-perang-harrah", causalLabel: "Gejolak pasca Karbala memicu perlawanan Madinah di peristiwa Al-Harrah", branch: "jalur-politik" },
  { id: "e-53", source: "h-perang-harrah", target: "h-umayyah-ekspansi-barat", causalLabel: "Konsolidasi Marwanid memicu ekspansi Afrika Utara oleh Uqbah bin Nafi'", branch: "jalur-utama" },
  { id: "e-54", source: "h-umayyah-ekspansi-barat", target: "h-umayyah-tariq-gibraltar", causalLabel: "Tariq bin Ziyad menyeberangi Selat Gibraltar membebaskan Al-Andalus", branch: "jalur-utama" },
  { id: "e-55", source: "h-umayyah-tariq-gibraltar", target: "h-umayyah-ekspansi-timur", causalLabel: "Ekspansi barat diimbangi penaklukan Transoxiana & Sindh di timur", branch: "jalur-politik" },
  { id: "e-56", source: "h-bm-kubah-batu-umayyah", target: "h-perang-tours-poitiers", causalLabel: "Penaklukan Spanyol berlanjut ke pertempuran Poitiers di selatan Prancis", branch: "jalur-utama" },
  { id: "e-57", source: "h-arabisasi-dinar", target: "h-perang-tours-poitiers", causalLabel: "Batas teritorial mendorong penguatan administrasi Arabisasi & Dinar Emas", branch: "jalur-sains" },
  { id: "e-58", source: "h-bm-kubah-batu-umayyah", target: "h-arabisasi-dinar", causalLabel: "Khalifah Abd al-Malik membangun monumen monumental Kubbat as-Sakhrah", branch: "jalur-sains" },
  { id: "e-59", source: "h-bm-kubah-batu-umayyah", target: "h-umar-bin-abdulaziz", causalLabel: "Puncak keadilan sosial & kodifikasi Hadits era Umar bin Abdul Aziz", branch: "jalur-pemikiran" },

  // ==========================================
  // EPOCH 5: DAULAH ABBASIYAH & GOLDEN AGE
  // ==========================================
  { id: "e-60", source: "h-umar-bin-abdulaziz", target: "h-revolusi-abbasiyah", causalLabel: "Kemunduran Umayyah pasca Umar II dimanfaatkan Revolusi Abbasiyah 750 M", branch: "jalur-utama" },
  { id: "e-61", source: "h-revolusi-abbasiyah", target: "h-perang-talas", causalLabel: "Kemenangan Pertempuran Talas 751 M mentransfer teknologi pembuatan kertas", branch: "jalur-sains" },
  { id: "e-62", source: "h-perang-talas", target: "h-abbasiyah-pembangunan-baghdad", causalLabel: "Al-Mansur mendirikan ibu kota peradaban Baghdad Madinat as-Salam", branch: "jalur-sains" },
  { id: "e-63", source: "h-perang-talas", target: "h-baitul-hikmah-sains", causalLabel: "Melimpahnya kertas mendanai gerakan penerjemahan riset Baitul Hikmah", branch: "jalur-sains" },
  { id: "e-64", source: "h-sains-khawarizmi-aljabar", target: "h-baitul-hikmah-sains", causalLabel: "Akademi Baitul Hikmah melahirkan penemuan Aljabar Al-Khawarizmi", branch: "jalur-sains" },
  { id: "e-65", source: "h-baitul-hikmah-sains", target: "h-abbasiyah-al-kindi-filsafat", causalLabel: "Penerjemahan teks Yunani memicu sintesis filsafat rasional Al-Kindi", branch: "jalur-pemikiran" },
  { id: "e-66", source: "h-abbasiyah-al-kindi-filsafat", target: "h-abbasiyah-al-farabi-musik", causalLabel: "Logika filsafat dikembangkan Al-Farabi menuju teori Negara Utama", branch: "jalur-pemikiran" },
  { id: "e-67", source: "h-sains-ibnu-haytham-optik", target: "h-sains-ibnu-sina-kedokteran", causalLabel: "Filsafat & medis disempurnakan Ibnu Sina dalam Al-Qanun fi at-Tibb", branch: "jalur-sains" },
  { id: "e-68", source: "h-sains-ibnu-haytham-optik", target: "h-abbasiyah-madrasah-nizamiyah", causalLabel: "Sains empiris & fiqh terintegrasi di universitas publik Nizamiyah", branch: "jalur-sains" },
  { id: "e-69", source: "h-sains-ibnu-sina-kedokteran", target: "h-abbasiyah-madrasah-nizamiyah", causalLabel: "Sains empiris & fiqh terintegrasi di universitas publik Nizamiyah", branch: "jalur-sains" },
  { id: "e-70", source: "h-abbasiyah-pembangunan-baghdad", target: "h-4mazhab-fiqh", causalLabel: "Pusat Baghdad menjadi tempat kodifikasi mazhab Hanafi, Syafi'i, Hanbali", branch: "jalur-pemikiran" },
  { id: "e-71", source: "h-4mazhab-fiqh", target: "h-kutubus-sittah", causalLabel: "Penataan Fiqh mendorong kodifikasi Shahih Bukhari & Muslim", branch: "jalur-pemikiran" },
  { id: "e-72", source: "h-kutubus-sittah", target: "h-debat-teologi", causalLabel: "Standardisasi teks hadits memicu dialektika teologi Mu'tazilah vs Asy'ariyah", branch: "jalur-pemikiran" },
  { id: "e-73", source: "h-debat-teologi", target: "h-fatimiyah-azhar", causalLabel: "Rivalitas politik teologis memicu pendirian Khilafah Fathimiyah & Al-Azhar", branch: "jalur-pemikiran" },
  { id: "e-74", source: "h-abbasiyah-madrasah-nizamiyah", target: "h-al-ghazali-ibnu-rusyd", causalLabel: "Imam Al-Ghazali mengajar di Nizamiyah & menulis Ihya Ulumuddin", branch: "jalur-pemikiran" },
  { id: "e-75", source: "h-al-ghazali-ibnu-rusyd", target: "h-runtuh-baghdad", causalLabel: "Kelemahan politik internal Abbasiyah memuncak pada invasi Hulagu Khan 1258", branch: "jalur-utama" },

  // ==========================================
  // EPOCH 6: AL-ANDALUS & MAMLUK
  // ==========================================
  { id: "e-76", source: "h-umayyah-tariq-gibraltar", target: "h-andalusia-abdurrahman-dakhil", causalLabel: "Pelarian Abdurrahman Ad-Dakhil mendirikan Keamiran Umayyah Kordoba", branch: "jalur-utama" },
  { id: "e-77", source: "h-andalusia-abdurrahman-dakhil", target: "h-andalusia-kordoba", causalLabel: "Landasan Ad-Dakhil membawa Kordoba ke puncak Golden Age Eropa", branch: "jalur-utama" },
  { id: "e-78", source: "h-andalusia-kordoba", target: "h-andalusia-zahrawi-bedah", causalLabel: "Keberlimpahan sains Kordoba memicu penemuan 200+ alat bedah Al-Zahrawi", branch: "jalur-sains" },
  { id: "e-79", source: "h-andalusia-kordoba", target: "h-andalusia-ibnu-hazm", causalLabel: "Peradaban literatur Al-Andalus melahirkan metodologi Mazhab Zahiri", branch: "jalur-pemikiran" },
  { id: "e-80", source: "h-andalusia-zahrawi-bedah", target: "h-andalusia-ibnu-tufail", causalLabel: "Pencerahan medis & pemikiran melahirkan novel filosofis Hayy ibn Yaqdhan", branch: "jalur-pemikiran" },
  { id: "e-81", source: "h-andalusia-alhambra-granada", target: "h-sosiologi-ibnu-khaldun", causalLabel: "Pengamatan atas pasang surut Al-Andalus memicu teori Muqaddimah", branch: "jalur-pemikiran" },
  { id: "e-82", source: "h-andalusia-kordoba", target: "h-andalusia-alhambra-granada", causalLabel: "Puncak keindahan seni Moorish diabadikan di Istana Alhambra Granada", branch: "jalur-sains" },
  { id: "e-83", source: "h-manzikert-salib", target: "h-runtuh-baghdad", causalLabel: "Dinamika perbatasan Anatolia Seljuk memicu Pertempuran Manzikert 1071", branch: "jalur-politik" },
  { id: "e-84", source: "h-manzikert-salib", target: "h-bm-pendudukan-salib", causalLabel: "Kekalahan Bizantium memicu seruan Perang Salib I & jatuhnya Jerusalem", branch: "jalur-politik" },
  { id: "e-85", source: "h-bm-pendudukan-salib", target: "h-bm-mimbar-zengi", causalLabel: "Nuruddin Zengi merancang strategi persatuan & Mimbar Pembebasan", branch: "jalur-pemikiran" },
  { id: "e-86", source: "h-bm-mimbar-zengi", target: "h-salahuddin-hittin", causalLabel: "Salahuddin Al-Ayyubi menyatukan Mesir-Syam & memenangkan Hattin", branch: "jalur-utama" },
  { id: "e-87", source: "h-salahuddin-hittin", target: "h-bm-pembebasan-salahuddin", causalLabel: "Kemenangan Hattin melapangkan pembebasan damai Al-Aqsa Jerusalem 1187", branch: "jalur-utama" },
  { id: "e-88", source: "h-bm-pembebasan-salahuddin", target: "h-mamluk-ainjalut", causalLabel: "Kesultanan Mamluk menggantikan Ayyubiyah & menghadapi invasi Mongol", branch: "jalur-politik" },
  { id: "e-89", source: "h-mamluk-ainjalut", target: "h-mamluk-qutuz-baibars", causalLabel: "Kemenangan Sultan Qutuz & Baibars di Ain Jalut menyelamatkan peradaban", branch: "jalur-politik" },
  { id: "e-90", source: "h-andalusia-alhambra-granada", target: "h-mamluk-qutuz-baibars", causalLabel: "Diplomasi Mamluk menopang keberlangsungan benteng terakhir Granada", branch: "jalur-politik" },
  { id: "e-91", source: "h-andalusia-alhambra-granada", target: "h-kejatuhan-granada", causalLabel: "Perpecahan internal Taifa mengakhiri 800 tahun Al-Andalus pada 1492", branch: "jalur-utama" },

  // ==========================================
  // EPOCH 7: ERA TIGA KERAJAAN BESAR
  // ==========================================
  { id: "e-92", source: "h-mamluk-qutuz-baibars", target: "h-utsmani-konstantinopel", causalLabel: "Kebangkitan Beylik Utsmani bermuara pada penaklukan Konstantinopel 1453", branch: "jalur-utama" },
  { id: "e-93", source: "h-utsmani-konstantinopel", target: "h-utsmani-puncak", causalLabel: "Sultan Selim I menyatukan Hijaz & pengalihan Khilafah di Makkah", branch: "jalur-utama" },
  { id: "e-94", source: "h-utsmani-kanun-sulaiman", target: "h-utsmani-puncak", causalLabel: "Sultan Sulaiman Al-Qanuni merumuskan kodifikasi hukum Kanun-i Osmani", branch: "jalur-politik" },
  { id: "e-95", source: "h-utsmani-kanun-sulaiman", target: "h-utsmani-perang-mohats", causalLabel: "Reformasi militer membawa kemenangan kilat pada Pertempuran Mohács 1526", branch: "jalur-politik" },
  { id: "e-96", source: "h-utsmani-perang-mohats", target: "h-utsmani-mimar-sinan", causalLabel: "Kemakmuran era Sulaiman mendanai karya arsitektur megah Mimar Sinan", branch: "jalur-sains" },
  { id: "e-97", source: "h-bm-tembok-suleiman", target: "h-utsmani-perang-lepanto", causalLabel: "Keunggulan teknologi teruji pada pertempuran laut Lepanto 1571", branch: "jalur-politik" },
  { id: "e-98", source: "h-utsmani-kanun-sulaiman", target: "h-bm-tembok-suleiman", causalLabel: "Sultan Sulaiman membangun Benteng Pertahanan & Tembok Al-Quds Jerusalem", branch: "jalur-sains" },
  { id: "e-99", source: "h-safawi-persia", target: "h-utsmani-puncak", causalLabel: "Rivalitas geografis memicu berdirinya Dinasti Safawi Persia 1501", branch: "jalur-politik" },
  { id: "e-100", source: "h-safawi-persia", target: "h-safawi-shah-abbas-isfahan", causalLabel: "Shah Abbas I memindahkan ibu kota ke Isfahan Nisf-e Jahan", branch: "jalur-sains" },
  { id: "e-101", source: "h-mughal-india", target: "h-safawi-shah-abbas-isfahan", causalLabel: "Interaksi diplomatik & seni Persia memperkaya Kesultanan Mughal India", branch: "jalur-pemikiran" },
  { id: "e-102", source: "h-mughal-india", target: "h-mughal-akbar-toleransi", causalLabel: "Konsolidasi Babur dilanjutkan kebijakan toleransi Sulh-i Kul Akbar Agung", branch: "jalur-pemikiran" },
  { id: "e-103", source: "h-mughal-akbar-toleransi", target: "h-mughal-shah-jahan-tajmahal", causalLabel: "Kemakmuran Mughal melahirkan mahakarya marmer Taj Mahal Agra 1632", branch: "jalur-sains" },
  { id: "e-104", source: "h-mughal-shah-jahan-tajmahal", target: "h-mughal-aurangzeb-fatawa", causalLabel: "Sultan Aurangzeb menyusun ensiklopedia Fatawa-e-Alamgiri", branch: "jalur-pemikiran" },

  // ==========================================
  // EPOCH 8: PERADABAN ISLAM NUSANTARA
  // ==========================================
  { id: "e-105", source: "h-ibrahim-kabah", target: "h-nusantara-barus-teori", causalLabel: "Jalur perdagangan maritim membawa dakwah Islam ke Pelabuhan Barus abad 7 M", branch: "jalur-utama" },
  { id: "e-106", source: "h-nusantara-barus-teori", target: "h-nusantara-samudera-pasai", causalLabel: "Sultan Malik al-Saleh mendirikan Kesultanan Samudera Pasai 1267", branch: "jalur-utama" },
  { id: "e-107", source: "h-nusantara-samudera-pasai", target: "h-nusantara-pasai-malaka", causalLabel: "Pasai menginspirasi berkembangnya Kesultanan Malaka & Aksara Jawi", branch: "jalur-utama" },
  { id: "e-108", source: "h-nusantara-pasai-malaka", target: "h-nusantara-malaka-parameswara", causalLabel: "Peran Parameswara memantapkan Malaka sebagai simpul peradaban Melayu", branch: "jalur-pemikiran" },
  { id: "e-109", source: "h-nusantara-malaka-parameswara", target: "h-nusantara-kesultanan-demak", causalLabel: "Raden Patah & Wali Songo mendirikan Kesultanan Demak Bintoro Jawa", branch: "jalur-politik" },
  { id: "e-110", source: "h-nusantara-walisongo", target: "h-nusantara-kesultanan-demak", causalLabel: "Dakwah kultural 9 Wali Songo memadukan seni lokal & akidah Islam", branch: "jalur-pemikiran" },
  { id: "e-111", source: "h-nusantara-walisongo", target: "h-nusantara-pati-unus-malaka", causalLabel: "Wali Songo merestui ekspedisi Pati Unus menyerang Portugis di Malaka 1513", branch: "jalur-politik" },
  { id: "e-112", source: "h-nusantara-pati-unus-malaka", target: "h-nusantara-fatahillah-sunda-kelapa", causalLabel: "Fatahillah membebaskan Sunda Kelapa menjadi Jayakarta 22 Juni 1527", branch: "jalur-utama" },
  { id: "e-113", source: "h-nusantara-fatahillah-sunda-kelapa", target: "h-nusantara-aceh-utsmani", causalLabel: "Kedaulatan maritim mendorong persekutuan militer Aceh & Turki Utsmani", branch: "jalur-politik" },
  { id: "e-114", source: "h-nusantara-aceh-utsmani", target: "h-nusantara-sultan-babullah-ternate", causalLabel: "Sultan Babullah Ternate mengusir Portugis & menyatukan 72 pulau", branch: "jalur-politik" },
  { id: "e-115", source: "h-nusantara-sultan-babullah-ternate", target: "h-nusantara-mataram-gowa", causalLabel: "Semangat perlawanan timur menginspirasi Kesultanan Mataram & Gowa", branch: "jalur-utama" },
  { id: "e-116", source: "h-nusantara-mataram-gowa", target: "h-nusantara-sultan-agung-mataram", causalLabel: "Sultan Agung Mataram menciptakan Kalender Jawa & menyerang Batavia VOC", branch: "jalur-utama" },
  { id: "e-117", source: "h-nusantara-sultan-agung-mataram", target: "h-nusantara-gowa-tallo-hasanuddin", causalLabel: "Sultan Hasanuddin Ayam Jantan dari Timur menentang monopoli VOC", branch: "jalur-politik" },
  { id: "e-118", source: "h-nusantara-gowa-tallo-hasanuddin", target: "h-nusantara-hamzah-fansuri-tasawuf", causalLabel: "Tradisi sastra tasawuf Fansuri & Singkili memperkaya keilmuan Nusantara", branch: "jalur-pemikiran" },
  { id: "e-119", source: "h-nusantara-hamzah-fansuri-tasawuf", target: "h-nusantara-perang-diponegoro", causalLabel: "Jaringan keilmuan pesantren memicu kepemimpinan Pangeran Diponegoro 1825", branch: "jalur-utama" },
  { id: "e-120", source: "h-nusantara-perang-diponegoro", target: "h-nusantara-resolusi-jihad", causalLabel: "Tradisi perjuangan pesantren memuncak pada Fatwa Resolusi Jihad NU 1945", branch: "jalur-utama" },

  // ==========================================
  // EPOCH 9: ERA KOLONIALISME, PEMBARUAN & MODERN
  // ==========================================
  { id: "e-121", source: "h-utsmani-perang-lepanto", target: "h-napoleon-mesir", causalLabel: "Ekspedisi Napoleon ke Mesir 1798 menyadarkan urgensi modernisasi", branch: "jalur-utama" },
  { id: "e-122", source: "h-napoleon-mesir", target: "h-modern-tanzimat-utsmani", causalLabel: "Utsmaniyah meluncurkan era reformasi Tanzimat & modernisasi militer 1839", branch: "jalur-politik" },
  { id: "e-123", source: "h-modern-tanzimat-utsmani", target: "h-modern-jamaluddin-afghani", causalLabel: "Jamaluddin Al-Afghani menggelorakan gerakan Pan-Islamisme anti-kolonial", branch: "jalur-pemikiran" },
  { id: "e-124", source: "h-modern-jamaluddin-afghani", target: "h-modern-muhammad-abduh", causalLabel: "Muhammad Abduh memelopori reformasi pendidikan & rasionalisme Al-Azhar", branch: "jalur-pemikiran" },
  { id: "e-125", source: "h-modern-muhammad-abduh", target: "h-pembaharuan-islam", causalLabel: "Rashid Rida menerbitkan Majalah Al-Manar menyebarkan pemikiran Tajdid", branch: "jalur-pemikiran" },
  { id: "e-126", source: "h-pembaharuan-islam", target: "h-nusantara-muhammadiyah-nu", causalLabel: "Gema Tajdid & tradisi pesantren melahirkan Muhammadiyah 1912 & NU 1926", branch: "jalur-pemikiran" },
  { id: "e-127", source: "h-nusantara-muhammadiyah-nu", target: "h-sykes-picot-balfour", causalLabel: "Imperialisme Eropa memecah wilayah melalui Sykes-Picot 1916 & Balfour 1917", branch: "jalur-politik" },
  { id: "e-128", source: "h-bm-abdulhamid-herzl", target: "h-sykes-picot-balfour", causalLabel: "Keteguhan Sultan Abdul Hamid II mempertahankan tanah Palestina dari Herzl", branch: "jalur-politik" },
  { id: "e-129", source: "h-sykes-picot-balfour", target: "h-runtuh-khilafah", causalLabel: "Penghapusan Khilafah Utsmaniyah oleh Atatürk pada 3 Maret 1924", branch: "jalur-utama" },
  { id: "e-130", source: "h-runtuh-khilafah", target: "h-modern-muhammad-iqbal", causalLabel: "Muhammad Iqbal merumuskan Rekonstruksi Pemikiran Islam & gagasan Pakistan", branch: "jalur-pemikiran" },
  { id: "e-131", source: "h-modern-muhammad-iqbal", target: "h-gerakan-modern", causalLabel: "Kemerdekaan Negara-Negara Muslim Pasca PD II (1945–1960)", branch: "jalur-utama" },
  { id: "e-132", source: "h-gerakan-modern", target: "h-bm-pendudukan-modern", causalLabel: "Pendudukan Jerusalem & Ribat Al-Aqsa di era kontemporer", branch: "jalur-politik" },
  { id: "e-133", source: "h-bm-pendudukan-modern", target: "h-modern-pendirian-oic", causalLabel: "Kebakaran Masjid Al-Aqsa 1969 memicu pembentukan Organisasi Kerjasama Islam (OKI)", branch: "jalur-politik" },
  { id: "e-134", source: "h-modern-pendirian-oic", target: "h-era-kontemporer", causalLabel: "Kebangkitan Perbankan Syariah, Ummah Digital, & Maqasid Syariah Abad 21", branch: "jalur-utama" }
];
