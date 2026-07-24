import { ChainNode } from "./chain-nodes";

export const islamicHistoryNodes: ChainNode[] = [
  // =========================================================================
  // EPOCH 1: PRA-KENABIAN & SIRAH NABAWIYAH MAKKAH (15 NODE)
  // =========================================================================
  {
    id: "h-ibrahim-kabah",
    label: "Pembangunan Ka'bah & Doa Ibrahim AS",
    category: "pra-islam",
    timeLabel: "± 2000 SM",
    timeValue: -2000,
    description: "Fondasi spiritual peradaban Islam berakar pada peninggalan Nabi Ibrahim AS dan putranya Nabi Ismail AS. Di lembah Bakkah (Mekkah) yang saat itu gersang dan tak berpenghuni, Allah memerintahkan Ibrahim untuk membina Ka'bah sebagai Baitullah (Rumah Allah) pertama yang didedikasikan murni untuk ketauhidan.\n\nSetelah menyelesaikan pembangunan Ka'bah dan meletakkan Hajar Aswad, Nabi Ibrahim memanjatkan doa monumental yang diabadikan dalam Al-Qur'an (QS. Al-Baqarah: 129), memohon agar Allah mengutus dari keturunan Ismail seorang Rasul dari kalangan mereka sendiri yang akan membacakan ayat-ayat-Nya, mengajarkan Al-Kitab dan Al-Hikmah, serta menyucikan jiwa mereka. Doa yang dipanjatkan ribuan tahun sebelumnya ini kelak terwujud secara sempurna pada diri Nabi Muhammad ﷺ, yang bersabda: 'Aku adalah doa ayahku Ibrahim dan kabar gembira saudaraku Isa'.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Baqarah",
        ayat: 129,
        arabicText: "رَبَّنَا وَابْعَثْ فِيهِمْ رَسُولًا مِّنْهُمْ يَتْلُو عَلَيْهِمْ آيَاتِكَ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ وَيُزَكِّيهِمْ",
        paraphrase: "Ya Tuhan kami, utuslah di antara mereka seorang Rasul dari kalangan mereka, yang akan membacakan kepada mereka ayat-ayat-Mu, dan mengajarkan Kitab dan Hikmah serta menyucikan mereka."
      },
      {
        surah: "Ali 'Imran",
        ayat: 96,
        arabicText: "إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِّلْعَالَمِينَ",
        paraphrase: "Sesungguhnya rumah yang mula-mula dibangun untuk (tempat beribadah) manusia, ialah Baitullah yang di Bakkah (Mekkah) yang diberkahi dan menjadi petunjuk bagi seluruh alam."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Ahmad & Al-Hakim",
        arabicText: "أَنَا دَعْوَةُ أَبِي إِبْرَاهِيمَ وَبُشْرَى عِيسَى",
        matan: "Ana da'watu abi Ibrahima wa busyra 'Isa...",
        terjemahan: "Aku adalah hasil dari doa ayahku Ibrahim dan kabar gembira yang disampaikan oleh Isa AS."
      }
    ],
    sources: ["Ibnu Katsir, Al-Bidayah wan-Nihayah", "Safiur Rahman Mubarakpuri, Ar-Raheeq Al-Makhtum"]
  },
  {
    id: "h-jahiliyah-sosial",
    label: "Masyarakat Jazirah Arab & Perdagangan Makkah",
    category: "pra-islam",
    timeLabel: "Sebelum 570 M",
    timeValue: 500,
    description: "Di abad ke-6 Masehi, Jazirah Arab terkepit di antara dua super-power dunia: Kekaisaran Romawi Timur (Bizantium) di barat dan Kekaisaran Sassanid Persia di timur. Jazirah Arab sendiri tidak memiliki pemerintahan terpusat; masyarakatnya terorganisir dalam sistem kabilah (kesukuan) yang didasari ikatan darah (*'Asabiyyah*).\n\nMakkah tumbuh menjadi kota metropolitan perdagangan karavan yang sangat strategis karena posisi geografisnya di jalur rempah-rempah yang menghubungkan Yaman (selatan) dengan Syam (utara). Suku Quraisy, yang dipelopori oleh Qushay bin Kilab, menguasai kepemimpinan Makkah dan kunci pelayanan Ka'bah (seperti *Siqayah* / penyediaan air Zamzam dan *Rifadah* / penyediaan makanan untuk jamaah ziarah).\n\nNamun, dari sisi moral dan spiritual, Makkah berada dalam kegelapan *Jahiliyah*. Monotheisme murni ajaran Ibrahim (*Hanifiyah*) telah tergerus oleh masuknya penyembahan berhala yang dibawa oleh Amr bin Luhay al-Khuza'i. Lebih dari 360 patung mengelilingi Ka'bah. Hukum yang berlaku adalah hukum rimba: perbudakan tanpa batas, diskriminasi gender ekstrem (termasuk tradisi mengubur bayi perempuan hidup-hidup karena takut kemiskinan atau aib), dan perang saudara antar-kabilah yang tak kunjung padam.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "At-Takwir",
        ayat: 8,
        arabicText: "وَإِذَا الْمَوْءُودَةُ سُئِلَتْ ﴿٨﴾ بِأَيِّ ذَنبٍ قُتِلَتْ",
        paraphrase: "Dan apabila bayi-bayi perempuan yang dikubur hidup-hidup ditanya, karena dosa apakah dia dibunuh?"
      },
      {
        surah: "Quraisy",
        ayat: 1,
        arabicText: "لإِيلافِ قُرَيْشٍ ﴿١﴾ إِيلافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ",
        paraphrase: "Karena kebiasaan orang-orang Quraisy, (yaitu) kebiasaan mereka bepergian pada musim dingin dan musim panas."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Malik (Al-Muwatta)",
        arabicText: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ حُسْنَ الْأَخْلَاقِ",
        matan: "Innama bu'iththu li-utammima husnal akhlaq...",
        terjemahan: "Sesungguhnya aku diutus tidak lain hanyalah untuk menyempurnakan keagungan akhlak manusia."
      }
    ],
    sources: ["Ira M. Lapidus, A History of Islamic Societies", "Sir William Muir, The Life of Mahomet"]
  },
  {
    id: "h-tahun-gajah",
    label: "Kelahiran Nabi Muhammad ﷺ & Peristiwa Abrahah",
    category: "kenabian",
    timeLabel: "570 M (12 Rabiul Awal)",
    timeValue: 570,
    description: "Tahun 570 M dicatat dalam sejarah Arab sebagai *Tahun Gajah*. Abrahah al-Asyram, Gubernur Yaman di bawah kekuasaan Kerajaan Aksum Ethiopia, merasa iri melihat Ka'bah di Makkah selalu ramai dikunjungi peziarah. Ia membangun katedral megah bernama *Al-Qullais* di San'a untuk memindahkan pusat ziarah. Ketika usahanya gagal, Abrahah memimpin tentara raksasa berkekuatan puluhan ribu prajurit dan pasukan gajah tempur untuk meratakan Ka'bah.\n\nKakek Nabi, Abdul Muthalib, yang menjadi pemimpin Makkah saat itu, memerintahkan warga mengungsi ke bukit-bukit seraya bertawakkal bahwa Allah sendiri yang akan melindungi Rumah-Nya. Ketika pasukan Abrahah mendekati perbatasan Makkah, gajah utama (*Mahmud*) berlutut dan menolak maju. Allah kemudian mengirimkan kawanan burung Ababil yang membawa batu-batu dari tanah yang terbakar (*Sijjil*), menembus tubuh pasukan Abrahah hingga mereka hancur menyerupai daun-daun yang dimakan ulat.\n\nDi tahun yang penuh mukjizat pertanda Ilahi ini, lahirlah Nabi Muhammad ﷺ pada 12 Rabiul Awal dalam keadaan yatim, karena ayahnya (Abdullah) telah meninggal dunia di Yatsrib saat perjalanan dagang beberapa bulan sebelumnya.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Fiil",
        ayat: 1,
        arabicText: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
        paraphrase: "Tidakkah engkau (Muhammad) perhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?"
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        arabicText: "ذَاكَ يَوْمٌ وُلِدْتُ فِيهِ وَيَوْمٌ بُعِثْتُ أَوْ أُنْزِلَ عَلَيَّ فِيهِ",
        matan: "Dzhaka yaumun wulidtu fihi wa yaumun bu'iththu...",
        terjemahan: "Hari Senin itu adalah hari di mana aku dilahirkan, dan hari aku diutus atau diturunkan wahyu kepadaku."
      }
    ],
    sources: ["Safiur Rahman Mubarakpuri, Ar-Raheeq Al-Makhtum"]
  },
  {
    id: "h-halimah-saadiyah",
    label: "Penyusuan di Pedalaman & Syaqq ash-Sadr",
    category: "kenabian",
    timeLabel: "570 - 574 M",
    timeValue: 572,
    description: "Mengikuti tradisi bangsawan Arab Makkah, bayi Muhammad diserahkan kepada ibu susuan dari suku Badui pedalaman, Halimah as-Sa'diyah dari Bani Sa'd bin Bakr. Tujuan tradisi ini adalah agar anak tumbuh dalam udara gurun yang bersih, terhindar dari wabah penyakit kota, serta memiliki kelangsungan bahasa Arab murni yang fasih.\n\nSejak membawa bayi Muhammad ke kemahnya, kehidupan Halimah yang awalnya serba kekurangan mendadak dipenuhi keberkahan: unta dan domba mereka menghasilkan susu berlimpah di tengah padang rumput yang gersang. Pada usia sekitar 4 tahun, terjadi peristiwa supranatural besar: *Syaqq ash-Sadr* (Pembelahan Dada).\n\nMalaikat Jibril mendatangi Muhammad muda yang sedang bermain, membaringkannya, membelah dadanya, mengeluarkan hatinya, lalu membuang segumpal darah hitam seraya berkata: 'Ini adalah bagian setan yang ada padamu'. Jibril menyucikan hati beliau dengan air Zamzam dalam bejana emas sebelum mengembalikannya. Peristiwa ini menyucikan rohani Rasulullah sejak dini dari segala dorongan kejahatan.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Insyirah",
        ayat: 1,
        arabicText: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
        paraphrase: "Bukankah Kami telah melapangkan dadamu (wahai Muhammad)?"
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        arabicText: "فَاسْتَخْرَجَ الْقَلْبَ فَاسْتَخْرَجَ مِنْهُ عَلَقَةً فَقَالَ هَذَا حَظُّ الشَّيْطَانِ مِنْكَ",
        matan: "Jibril mengeluarkan hati beliau, lalu mengeluarkan segumpal darah darinya...",
        terjemahan: "Jibril mengeluarkan hati beliau, lalu mengeluarkan segumpal darah darinya seraya berkata: 'Ini adalah bagian setan yang ada padamu.'"
      }
    ],
    akhlakTeladan: "Inisiasi kebersihan batin dan penyucian jiwa sejak dini sebagai syarat utama memikul amanah kebenaran Ilahi."
  },
  {
    id: "h-hilf-fudul",
    label: "Masa Muda: Perang Fijar & Hilf al-Fudul",
    category: "kenabian",
    timeLabel: "585 - 590 M",
    timeValue: 588,
    description: "Setelah ibunda beliau (Aminah) wafat saat perjalanan kembali dari Yatsrib dan kakeknya (Abdul Muthalib) meninggal dua tahun kemudian, Muhammad diasuh oleh pamannya yang sangat menyayanginya, Abu Thalib. Untuk membantu meringankan beban ekonomi pamannya yang memiliki keluarga besar, Muhammad muda bekerja menggembalakan kambing milik penduduk Makkah. Profesi ini menempa sifat kepemimpinan, ketenangan, dan empati beliau.\n\nPada usia 15-20 tahun, beliau menyaksikan dampak buruk *Perang Fijar*—peperangan berdarah antar-suku Quraisy dan Qais Ailan yang melanggar kesucian bulan-bulan haram. Tergerak oleh kekacauan ini, Muhammad muda berpartisipasi aktif dalam pembentukan **Hilf al-Fudul** (Sumpah Kehormatan/Keadilan).\n\nPakta sosial ini diikrarkan di rumah Abdullah bin Jud'an oleh klan-klan utama Quraisy. Mereka bersumpah demi Allah untuk menyatukan barisan dan membela siapa pun—baik warga asli maupun pendatang asing—yang dizalimi atau dirampas haknya di Makkah. Kelak setelah diutus menjadi Nabi, beliau memuji pakta keadilan kemanusiaan ini dan bersabda bahwa beliau siap memenuhinya kembali jika diundang.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Ma'idah",
        ayat: 2,
        arabicText: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ",
        paraphrase: "Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa, dan jangan tolong-menolong dalam berbuat dosa dan permusuhan."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Ahmad & Al-Baihaqi",
        matan: "Disaksikan oleh Nabi tentang Sumpah Hilf al-Fudul di rumah Ibn Jud'an",
        terjemahan: "Aku telah menyaksikan di rumah Abdullah bin Jud'an suatu perjanjian yang lebih aku sukai daripada unta merah... Seandainya di masa Islam aku diajak kepadanya, niscaya aku akan memenuhinya."
      }
    ],
    akhlakTeladan: "Keadilan dan pembelaan terhadap hak asasi manusia adalah nilai universal yang diusung Islam, bahkan sebelum syariat formal diturunkan."
  },
  {
    id: "h-pernikahan-khadijah",
    label: "Pernikahan dengan Khadijah & Gelar Al-Amin",
    category: "kenabian",
    timeLabel: "595 - 605 M",
    timeValue: 595,
    description: "Revolusi reputasi moral Muhammad muda mencapai puncaknya di Makkah. Kejujuran, keutamaan akhlak, dan kecerdasannya membuat seorang wanita bangsawan konglomerat yang paling dihormati di Makkah, Khadijah binti Khuwailid, memintanya untuk memimpin karavan dagangnya ke Syam.\n\nDidampingi pembantu Khadijah bernama Maisarah, Muhammad membawa keuntungan berlipat ganda karena bertransaksi tanpa kecurangan sedikit pun. Maisarah menceritakan akhlak mulia dan ketetapan tutur kata Muhammad kepada Khadijah, yang kemudian meminang Muhammad. Pernikahan suci ini terjadi saat Nabi berusia 25 tahun dan Khadijah 40 tahun, melahirkan putra-putri seperti Qasim, Abdullah, Zainab, Ruqayyah, Umm Kultsum, dan Fatimah.\n\nPada usia 35 tahun (605 M), terjadi banjir besar yang merusak Ka'bah. Suku-suku Quraisy bergotong-royong merenovasi Ka'bah dan meletakkan kembali Hajar Aswad. Perselisihan sengit hampir memicu perang saudara karena setiap klan merasa paling berhak. Mereka sepakat menjadikan orang pertama yang masuk pintu masjid sebagai hakim. Orang itu adalah Muhammad. Dengan jenius, beliau membentangkan kainnya, meletakkan Hajar Aswad di tengah, dan meminta setiap kepala klan memegang ujung kain bersama-sama. Kebijaksanaan ini memadamkan potensi perang dan mengukuhkan gelar beliau sebagai **Al-Amin** (Yang Terpercaya).",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Ad-Dhuha",
        ayat: 8,
        arabicText: "وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ",
        paraphrase: "Dan Dia mendapati engkau sebagai seorang yang serba kekurangan, lalu Dia memberikan kecukupan."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari & Muslim",
        arabicText: "خَيْرُ نِسَائِهَا مَرْيَمُ ابْنَتُ عِمْرَانَ وَخَيْرُ نِسَائِهَا خَدِيجَةُ بِنْتُ خُوَيْلِدٍ",
        matan: "Khairu nisa'iha Maryambnu 'Imrana wa khairu nisa'iha Khadijah...",
        terjemahan: "Sebaik-baik wanita di zamannya adalah Maryam binti Imran, dan sebaik-baik wanita di zamannya adalah Khadijah binti Khuwailid."
      }
    ],
    sources: ["Ibnu Hisyam, As-Sirah an-Nabawiyyah"]
  },
  {
    id: "h-wahyu-pertama",
    label: "Turunnya Wahyu Pertama (Iqra' di Gua Hira)",
    category: "kenabian",
    timeLabel: "610 M (17 Ramadhan)",
    timeValue: 610,
    description: "Menjelang usia 40 tahun, rasa prihatin Muhammad terhadap kebobrokan moral dan Politeisme masyarakatnya semakin memuncak. Beliau rutin melakukan *Tahannuth* (menyendiri untuk ibadah dan refleksi) di Gua Hira, puncak bukit Jabal An-Nur.\n\nPada malam 17 Ramadhan 610 M, Malaikat Jibril mendatangi beliau dalam wujud aslinya yang memenuhi ufuk. Jibril merangkul dan memeluk Muhammad dengan sangat erat hingga beliau merasa kepayahan, lalu memerintahkan: 'Iqra!' (Bacalah!). Muhammad yang ummi (tidak bisa membaca teks) menjawab: 'Aku tidak bisa membaca'. Dekapan itu diulang tiga kali hingga Jibril membacakan wahyu pertama: Surat Al-'Alaq ayat 1-5.\n\nPulang dengan tubuh menggigil ketakutan dan jantung berdebar keras, Nabi menemui istrinya Khadijah seraya berkata: 'Zammiluni! Zammiluni!' (Selimutilah aku!). Khadijah menenangkan beliau dengan perkataan abadi: 'Demi Allah, Allah tidak akan pernah menghinakanmu. Engkau orang yang menyambung silaturahmi, memikul beban orang lemah, dan membela kebenaran'. Khadijah kemudian membawa Nabi bertemu sepupunya, Waraqah bin Naufal (pendeta Nasrani ahli kitab), yang membenarkan bahwa sosok yang datang adalah *Namus* (Malaikat Jibril) yang pernah datang kepada Musa AS.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-'Alaq",
        ayat: 1,
        arabicText: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
        paraphrase: "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari & Muslim",
        arabicText: "زَمِّلُونِي زَمِّلُونِي فَزَمَّلُوهُ حَتَّى ذَهَبَ عَنْهُ الرَّوْعُ",
        matan: "Zammiluni zammiluni...",
        terjemahan: "'Selimutilah aku! Selimutilah aku!' Maka mereka menyelimutinya hingga hilang rasa takutnya."
      }
    ],
    akhlakTeladan: "Pentingnya pasangan hidup yang memberikan ketenangan emosional dan keyakinan di saat-saat kritis guncangan jiwa."
  },
  {
    id: "h-dakwah-sembunyi",
    label: "Dakwah Sirriyah & Madrasah Darul Arqam",
    category: "kenabian",
    timeLabel: "610 - 613 M",
    timeValue: 611,
    description: "Pasca wahyu pertama, wahyu sempat terhenti sejenak (*Fathratul Wahyu*) untuk menumbuhkan kerinduan Nabi. Kemudian turunlah Surat Al-Muddaththir yang memerintahkan beliau bangkit dan memberi peringatan. Menyadari kontradiksi radikal ajaran Tauhid dengan sistem kekuasaan Quraisy, Nabi memulai dakwah secara *Sirriyah* (rahasia/sembunyi-sembunyi).\n\nFokus utama dakwah periode awal ini adalah menanamkan fondasi akidah tauhid dan penyucian jiwa (*Tazkiyatun Nafs*). Lahirlah kelompok pengikut pertama yang disebut **As-Sabiqun al-Awwalun**: Khadijah (wanita pertama), Ali bin Abi Thalib (anak-anak pertama), Zaid bin Haritsah (mantan budak pertama), dan Abu Bakar as-Siddiq (pria dewasa pertama).\n\nMelalui pengaruh Abu Bakar, tokoh-tokoh kunci seperti Utsman bin Affan, Az-Zubair bin Al-Awwam, Abdurrahman bin Auf, Sa'ad bin Abi Waqqas, dan Thalhah bin Ubaidillah memeluk Islam. Rumah sahabat Al-Arqam bin Abil Arqam di kaki Bukit Shafa dijadikan markas rahasia pertama (*Darul Arqam*) untuk mengaji Al-Qur'an dan menyusun strategi dakwah.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Muddaththir",
        ayat: 2,
        arabicText: "قُمْ فَأَنذِرْ",
        paraphrase: "Bangunlah, lalu berilah peringatan!"
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        arabicText: "مَا دَعَوْتُ أَحَدًا إِلَى الْإِسْلَامِ إِلَّا كَانَتْ لَهُ عَنْهُ كَبْوَةٌ غَيْرَ أَبِي بَكْرٍ",
        matan: "Ma da'awtu ahadan ilal Islami illa kanat lahu 'anhu kabwatun ghaira Abi Bakr...",
        terjemahan: "Tidaklah aku mengajak seorang pun memeluk Islam melainkan ia memiliki keraguan sejenak, kecuali Abu Bakar yang langsung menerimanya tanpa ragu sedikit pun."
      }
    ]
  },
  {
    id: "h-dakwah-terbuka",
    label: "Dakwah Jahriyah di Bukit Shafa & Serangan Quraisy",
    category: "kenabian",
    timeLabel: "613 M",
    timeValue: 613,
    description: "Setelah 3 tahun dakwah rahasia membentuk kader bertaqwa, turunlah perintah Allah (QS. Al-Hijr: 94 dan Asy-Syu'ara: 214) untuk menyampaikan dakwah secara *Jahriyah* (terang-terangan) kepada kerabat dan seluruh masyarakat Makkah.\n\nNabi Muhammad mendaki puncak Bukit Shafa dan memanggil seluruh klan suku Quraisy. Setelah mereka berkumpul, Nabi bertanya: 'Jika aku memberitahu kalian bahwa di balik lembah ini ada pasukan berkuda yang siap menyerang kalian, apakah kalian mempercayaiku?' Mereka menjawab serentak: 'Ya, kami belum pernah mendapati engkau berdusta sedikit pun!'. Nabi lalu berkata: 'Sesungguhnya aku adalah pemberi peringatan kepada kalian sebelum datangnya azab yang pedih'.\n\nMendengar hal ini, pamannya Abu Lahab berdiri murka dan berteriak: 'Celakalah engkau sepanjang hari! Apakah hanya untuk ini engkau mengumpulkan kami?!'. Seketika Allah menurunkan Surat Al-Masad yang mengecam kebinasaan Abu Lahab dan istrinya. Sejak hari itu, konfrontasi terbuka elit Makkah terhadap dakwah Islam dimulai.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Masad",
        ayat: 1,
        arabicText: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
        paraphrase: "Binasalah kedua tangan Abu Lahab dan benar-benar binasa dia!"
      },
      {
        surah: "Asy-Syu'ara",
        ayat: 214,
        arabicText: "وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ",
        paraphrase: "Dan berilah peringatan kepada kerabat-kerabatmu yang terdekat."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari & Muslim",
        matan: "Nabi memanggil klan Quraisy dari Bukit Shafa: Ya Bani Fihr, Ya Bani 'Adi...",
        terjemahan: "Nabi memanggil klan-klan Quraisy suku demi suku dari atas Bukit Shafa untuk memberi peringatan keselamatan akhirat."
      }
    ],
    akhlakTeladan: "Memanfaatkan integritas diri yang diakui publik sebagai batu pijakan utama sebelum menyampaikan seruan kebenaran."
  },
  {
    id: "h-penyiksaan-mekkah",
    label: "Penyiksaan Musyrikin & Syahidnya Sumayyah",
    category: "kenabian",
    timeLabel: "614 - 615 M",
    timeValue: 614,
    description: "Melihat jumlah Muslimin terus bertambah, para pemimpin Quraisy (Abu Jahal, Umayyah bin Khalaf, Abu Lahab) melancarkan gelombang persekusi brutal. Karena pengikut Nabi mayoritas berasal dari kaum terindas, budak, dan rakyat miskin tanpa perlindungan kabilah, mereka menjadi sasaran penyiksaan fisik ekstrem.\n\nBilal bin Rabah dijemur di padang pasir Makkah di bawah terik matahari membakar dan ditindih batu besar di dadanya, namun lisannya terus menggemakan: 'Ahad! Ahad!' (Allah Maha Esa!). Keluarga Yasir (Yasir, istrinya Sumayyah, dan anaknya Ammar) disiksa secara tidak manusiawi. Abu Jahal menancapkan tombak ke kemaluan Sumayyah binti Khayyat hingga tewas, menjadikannya **Syahidah Pertama dalam sejarah Islam**.\n\nSaat melewati keluarga Yasir yang sedang disiksa, Nabi Muhammad tidak membalas dengan kekerasan melainkan menguatkan jiwa mereka dengan janji eskatologis: 'Bersabarlah wahai keluarga Yasir, sesungguhnya tempat janji kalian adalah Surga!'.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Ankabut",
        ayat: 2,
        arabicText: "أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ",
        paraphrase: "Apakah manusia itu mengira bahwa mereka dibiarkan (saja) mengatakan: 'Kami telah beriman', sedang mereka tidak diuji lagi?"
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Al-Hakim & Al-Baihaqi",
        arabicText: "صَبْرًا يَا آلَ يَاسِرٍ فَإِنَّ مَوْعِدَكُمُ الْجَنَّةُ",
        matan: "Sabran ya ala Yasir...",
        terjemahan: "Bersabarlah wahai keluarga Yasir, sesungguhnya tempat kembali yang dijanjikan bagi kalian adalah Surga."
      }
    ],
    akhlakTeladan: "Keteguhan iman di atas penindasan fisik ekstrem serta fokus pada ganjaran abadi di akhirat."
  },
  {
    id: "h-hijrah-habasyah",
    label: "Hijrah ke Habasyah & Diplomasi Ja'far di Najasyi",
    category: "kenabian",
    timeLabel: "615 M",
    timeValue: 615,
    description: "Menghadapi penyiksaan yang kian tak tertahankan, Nabi Muhammad menginstruksikan para sahabat untuk melakukan suaka politik keluar Jazirah Arab: Hijrah ke Negeri Habasyah (Ethiopia). Beliau bersabda: 'Di sana ada seorang raja (Raja Najasyi/Negus) yang tidak ada seorang pun didzalimi di sisinya'. Ini adalah Hijrah Pertama dalam Islam (11 pria dan 4 wanita, termasuk Utsman bin Affan dan Ruqayyah binti Rasulullah).\n\nQuraisy yang merasa terancam mengirim utusan tingkat tinggi (Amr bin Ash) membawa hadiah-hadiah mewah kepada Najasyi untuk mengekstradisi pengungsi Muslim dengan tuduhan membawa ajaran sesat yang menghina Isa AS. Najasyi yang adil menolak menyerahkan mereka sebelum mendengar keterangan dari kedua pihak.\n\nJa'far bin Abi Thalib tampil menjadi juru bicara kaum Muslimin. Dengan kejelasan retorika yang memukau, Ja'far menjelaskan kegelapan masa Jahiliyah dan keindahan moral yang dibawa Islam, lalu membacakan awal Surat Maryam. Mendengar ayat-ayat Al-Qur'an tentang penghormatan Islam terhadap Bunda Maryam dan Nabi Isa AS, Raja Najasyi menangis hingga janggutnya basah dan menegaskan: 'Sesungguhnya ajaran ini dan ajaran yang dibawa Isa keluar dari sumber cahaya yang sama!'. Najasyi menolak suap Quraisy dan memberikan jaminan suaka mutlak.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Maryam",
        ayat: 16,
        arabicText: "وَاذْكُرْ فِي الْكِتَابِ مَرْيَمَ إِذِ انتَبَذَتْ مِنْ أَهْلِهَا مَكَانًا شَرْقِيًّا",
        paraphrase: "Dan ceritakanlah (kisah) Maryam di dalam Al-Kitab, yaitu ketika ia menjauhkan diri dari keluarganya ke suatu tempat di sebelah timur."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        arabicText: "إِنَّ بِأَرْضِ الْحَبَشَةِ مَلِكًا لاَ يُظْلَمُ عِنْدَهُ أَحَدٌ فَاخْرُجُوا إِلَيْهِ حَتَّى يَجْعَلَ اللَّهُ لَكُمْ فَرَجًا",
        matan: "Inna bi-ardhil Habasyati malikan la yuzhlamu 'indahu ahadun...",
        terjemahan: "Sesungguhnya di negeri Habasyah ada seorang raja yang tidak ada seorang pun didzalimi di sisinya, maka pergilah kalian kepadanya..."
      }
    ]
  },
  {
    id: "h-boikot-syiib",
    label: "Pemboikotan Ekonomi & Sosial Syi'ib Abu Thalib",
    category: "kenabian",
    timeLabel: "616 - 619 M",
    timeValue: 617,
    description: "Masuk Islamnya dua pahlawan perkasa Quraisy—Hamzah bin Abdul Muthalib dan Umar bin Khattab—membuat kedudukan Islam semakin kuat di Makkah. Sebagai balasan radikal, aliansi kabilah Quraisy menandatangani dokumen pemboikotan total terhadap Bani Hasyim dan Bani Abdul Muthalib (baik yang Muslim maupun non-Muslim yang melindungi Nabi).\n\nIsi piagam kezaliman yang digantung di dalam Ka'bah itu melarang seluruh warga Makkah untuk: melakukan jual beli, menikah, berinteraksi sosial, atau berbicara dengan keluarga Nabi hingga mereka menyerahkan Muhammad untuk dibunuh. Selama 3 tahun penuh, kaum Muslim terisolasi di sebuah lembah sempit (Syi'ib Abu Thalib).\n\nMereka mengalami krisis kemanusiaan yang mengerikan: kelaparan ekstrem hingga terpaksa memakan dedaunan kering dan kulit binatang. Tangisan anak-anak kecil yang kelaparan terdengar hingga ke luar lembah. Pemboikotan ini baru berakhir ketika tokoh-tokoh Quraisy yang masih memiliki nurani membatalkan dokumen tersebut, dan terbukti mukjizat bahwa dokumen di dalam Ka'bah telah hancur dimakan rayap, kecuali tulisan *Bismikallahumma*.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Anfal",
        ayat: 36,
        arabicText: "إِنَّ الَّذِينَ كَفَرُوا يُنفِقُونَ أَمْوَالَهُمْ لِيَصُدُّوا عَن سَبِيلِ اللَّهِ",
        paraphrase: "Sesungguhnya orang-orang yang kafir menafkahkan harta mereka untuk menghalangi (orang) dari jalan Allah."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        matan: "Nabi mendoakan tahun-tahun kemarau atas Quraisy seperti tahun-tahun Yusuf",
        terjemahan: "Nabi memohon pertolongan Allah menghadapi kezaliman pemboikotan Quraisy."
      }
    ],
    sources: ["Ibnu Hisyam, As-Sirah an-Nabawiyyah"]
  },
  {
    id: "h-tahun-kesedihan",
    label: "Amul Huzni & Ujian Pahit di Tha'if",
    category: "kenabian",
    timeLabel: "619 M",
    timeValue: 619,
    description: "Tahun 619 M dicatat sebagai *Amul Huzni* (Tahun Kesedihan). Dalam jarak waktu beberapa bulan, dua pilar pendukung utama Nabi wafat: pamannya Abu Thalib (pelindung politik dari persekusi klan) dan istrinya Khadijah ra. (penyokong jiwa, harta, dan emosional terbanyak).\n\nWafatnya Abu Thalib membuat intimidasi fisik musyrikin Makkah semakin tidak terkontrol. Nabi menempuh perjalanan kaki sejauh 80 km menuju kota Tha'if untuk mencari perlindungan dari Suku Tsaqif. Namun, para pemimpin Tha'if tidak hanya menolak ajaran beliau dengan hinaan, tetapi juga memobilisasi para budak dan anak-anak untuk berbaris melontari Nabi dengan batu sepanjang perjalanan keluar kota.\n\nKaki Rasulullah bersimbah darah hingga sandalnya terikat darah mengering. Dalam keadaan terluka parah dan berteduh di bawah kebun kurma, Malaikat Penjaga Gunung mendatangi beliau dan menawarkan untuk menimpakan dua gunung besar (*Al-Akhsyabain*) menimbun warga Tha'if. Namun Nabi yang penuh kasih rahmat menolak dan mendoakan: 'Bahkan aku berharap Allah mengeluarkan dari sulbi mereka keturunan yang menyembah Allah semata tanpa menyekutukan-Nya'.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Insyirah",
        ayat: 5,
        arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ﴿٥﴾ إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        paraphrase: "Karena sesungguhnya sesudah kesulitan itu ada kemudahan, sesungguhnya sesudah kesulitan itu ada kemudahan."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari & Muslim",
        arabicText: "بَلْ أَرْجُو أَنْ يُخْرِجَ اللَّهُ مِنْ أَصْلَابِهِمْ مَنْ يَعْبُدُ اللَّهَ وَحْدَهُ لاَ يُشْرِكُ بِهِ شَيْئًا",
        matan: "Bal arju an yukhrijallahu min aslabihim...",
        terjemahan: "Bahkan aku berharap Allah mengeluarkan dari sulbi mereka keturunan yang menyembah Allah semata dan tidak menyekutukan-Nya."
      }
    ],
    akhlakTeladan: "Kesabaran tanpa batas dan penolakan dendam pribadi demi kebaikan generasi masa depan."
  },
  {
    id: "h-isra-miraj",
    label: "Isra' Mi'raj & Kewajiban Shalat 5 Waktu",
    category: "kenabian",
    timeLabel: "620 M",
    timeValue: 620,
    description: "Setelah melalui ujian berat Amul Huzni dan penolakan Tha'if, Allah memuliakan Nabi Muhammad ﷺ dengan peristiwa supra-rasional maha dahsyat: **Isra' dan Mi'raj** sebagai penghiburan Ilahi (*Tasliyah*).\n\nDalam satu malam, Nabi diperjalankan (*Isra'*) dari Masjidil Haram di Makkah menuju Masjidil Aqsha di Yerusalem menunggangi Buraq, di mana beliau mengimami shalat seluruh Nabi terdahulu. Kemudian beliau diangkat (*Mi'raj*) menembus 7 lapis langit, menembus batas alam semesta hingga mencapai *Sidratul Muntaha* dan berdialog langsung dengan Allah SWT tanpa perantara malaikat.\n\nDi puncak malam tersebut, Allah mewajibkan ibadah Shalat 5 Waktu sebagai pilar utama agama Islam. Peristiwa mukjizat ini menjadi ujian pemisah keimanan hakiki: kaum musyrikin menertawakan cerita Nabi, sementara Abu Bakar tanpa ragu sedikit pun membenarkannya sehingga mendapat gelar **As-Siddiq** (Yang Membenarkan).",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Isra",
        ayat: 1,
        arabicText: "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى",
        paraphrase: "Maha Suci Allah, yang telah memperjalankan hamba-Nya pada suatu malam dari Masjidil Haram ke Masjidil Aqsha..."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari & Muslim",
        arabicText: "فَفَرَضَ اللَّهُ عَلَى أُمَّتِي خَمْسِينَ صَلاَةً... فَرَاجَعْتُهُ فَقَالَ هِيَ خَمْسٌ وَهِيَ خَمْسُونَ",
        matan: "Fafaradhallahu 'ala ummati khamsina shalahan...",
        terjemahan: "Maka Allah mewajibkan atas umatku 50 shalat... lalu aku memohon keringanan hingga Allah menetapkan 5 shalat (yang pahalanya setara 50 shalat)."
      }
    ]
  },
  {
    id: "h-baiat-aqabah",
    label: "Mus'ab Duta Islam & Bai'at Aqabah I & II",
    category: "kenabian",
    timeLabel: "621 - 622 M",
    timeValue: 621,
    description: "Titik balik strategis dakwah Islam terbuka ketika Nabi menemui rombongan jamaah haji dari suku Aus dan Khazraj asal Yatsrib (Madinah). Yatsrib saat itu dirundung perang saudara berdarah (*Perang Bu'ats*) dan haus akan kedamaian serta merindukan sosok pemimpin adil.\n\nPada musim haji 621 M, 12 warga Yatsrib mengikrarkan **Bai'at Aqabah Pertama**. Nabi mengutus Mus'ab bin Umair sebagai Duta Besar Islam pertama untuk mengajar Al-Qur'an di Yatsrib. Kelembutan dan kecerdasan Mus'ab berhasil mengislamkan para tokoh pimpinan Yatsrib seperti Sa'ad bin Mu'adz.\n\nPada 622 M, Mus'ab membawa 73 pria dan 2 wanita Yatsrib bertemu Nabi secara rahasia di bukit Aqabah pada tengah malam untuk mengikrarkan **Bai'at Aqabah Kedua** (*Bai'at Perang/Pertahanan*). Mereka bersumpah setia untuk melindungi dan membela Nabi Muhammad sebagaimana mereka membela anak-istri mereka sendiri. Ikrar politik ini menjadi fondasi sah bagi lahirnya Negara Islam Madinah.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Mumtahanah",
        ayat: 12,
        arabicText: "إِذَا جَاءَكَ الْمُؤْمِنَاتُ يُبَايِعْنَكَ عَلَىٰ أَن لَّا يُشْرِكْنَ بِاللَّهِ شَيْئًا",
        paraphrase: "Apabila datang kepadamu perempuan-perempuan yang beriman untuk mengadakan janji setia, bahwa mereka tidak akan mempersekutukan sesuatu pun dengan Allah..."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        arabicText: "بَايَعْنَا رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَلَى السَّمْعِ وَالطَّاعَةِ فِي الْعُسْرِ وَالْيُسْرِ",
        matan: "Baya'na Rasulallahi 'ala as-sam'i wat-tha'ah...",
        terjemahan: "Kami berbai'at kepada Rasulullah ﷺ untuk mendengar dan taat dalam keadaan susah maupun lapang..."
      }
    ],
    sources: ["Safiur Rahman Mubarakpuri, Ar-Raheeq Al-Makhtum"]
  },

  // =========================================================================
  // EPOCH 2: SIRAH MADINAH & PEMBENTUKAN NEGARA (15 NODE)
  // =========================================================================
  {
    id: "h-hijrah-tsur",
    label: "Hijrah Besar ke Madinah & Gua Tsur",
    category: "kenabian",
    timeLabel: "622 M",
    timeValue: 622,
    description: "Mengetahui pakta Aqabah, Parlemen Makkah (*Darun Nadwah*) memutuskan untuk mengeksekusi mati Nabi. Algojo pilihan dari setiap klan mengepung rumah Nabi. Dengan mukjizat Allah, Nabi keluar melintasi para algojo yang tertidur sambil menaburkan debu dan membaca QS. Yasin. Ali bin Abi Thalib tidur di ranjang Nabi menggantikan beliau.\n\nNabi bersama Abu Bakar menempuh taktik matang: mereka bergerak ke arah selatan (berlawanan dari arah Madinah) dan bersembunyi di Gua Tsur selama 3 hari. Pasukan pelacak Quraisy sampai di mulut gua, namun sarang laba-laba dan burung merpati menghalangi pandangan mereka. Di dalam gua yang menegangkan, Abu Bakar cemas, lalu Nabi berbisik menenangkan: *'La Tahzan, Innallaha Ma'ana'* (Jangan bersedih, sesungguhnya Allah bersama kita).\n\nSetelah keadaan aman, dibantu pemandu jalan non-Muslim yang jujur (Abdullah bin Uraiqith), mereka menyusuri jalur pantai dan selamat sampai di Madinah. Tahun Hijrah ini ditetapkan oleh Khalifah Umar kelak sebagai awal Kalender Hijriah.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "At-Taubah",
        ayat: 40,
        arabicText: "إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
        paraphrase: "Ketika dia berkata kepada sahabatnya: Janganlah engkau bersedih, sesungguhnya Allah bersama kita."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        arabicText: "يَا أَبَا بَكْرٍ مَا ظَنُّكَ بِاثْنَيْنِ اللَّهُ ثَالِثُهُمَا",
        matan: "Ya Aba Bakr ma zhannuka bi-thnaini Allahu thalithuhuma...",
        terjemahan: "Wahai Abu Bakar, apa dugaanmu terhadap dua orang manusia di mana Allah menjadi yang ketiga di antara keduanya?"
      }
    ],
    akhlakTeladan: "Kombinasi sempurna antara ikhtiar strategi manusia yang matang dengan tawakkal mutlak kepada Allah."
  },
  {
    id: "h-quba-nabawi",
    label: "Pembangunan Masjid Quba & Masjid Nabawi",
    category: "kenabian",
    timeLabel: "622 M",
    timeValue: 622,
    description: "Sebelum memasuki pusat kota Madinah, Nabi singgah di desa Quba dan meletakkan batu pertama pembangunan **Masjid Quba**—masjid pertama yang didirikan atas dasar ketakwaan dalam Islam.\n\nSaat memasuki Madinah, warga menyambut meriah dengan nasyid *Thala'al Badru 'Alayna*. Untuk menghindari rasa cemburu antar-klan yang berebut ingin menampung Nabi, beliau membiarkan untanya (*Al-Qashwa*) berjalan sendiri hingga berhenti di tanah milik dua anak yatim (Sahl dan Suhail). Nabi membeli tanah tersebut dan mendirikan **Masjid Nabawi**.\n\nMasjid Nabawi dirancang tidak hanya sebagai tempat ritual shalat, melainkan sebagai pusat pemerintahan, ruang musyawarah parlemen, tempat penampungan kaum miskin (*Ahlus Suffah*), universitas pendidikan, dan pusat koordinasi militer dan diplomasi.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "At-Taubah",
        ayat: 108,
        arabicText: "لَّمَسْجِدٌ أُسِّسَ عَلَى التَّقْوَىٰ مِنْ أَوَّلِ يَوْمٍ أَحَقُّ أَن تَقُومَ فِيهِ",
        paraphrase: "Sesungguhnya masjid yang didirikan atas dasar takwa sejak hari pertama adalah lebih patut engkau shalat di dalamnya."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi & Ibnu Majah",
        arabicText: "مَنْ تَطَهَّرَ فِي بَيْتِهِ ثُمَّ أَتَى مَسْجِدَ قُبَاءٍ فَصَلَّى فِيهِ صَلاَةً كَانَ لَهُ كَأَجْرِ عُمْرَةٍ",
        matan: "Man tathahhara fi baitihi thumma ata masjida Quba'in...",
        terjemahan: "Barangsiapa bersuci di rumahnya lalu mendatangi Masjid Quba dan shalat di dalamnya, ia mendapatkan pahala seperti pahala Umrah."
      }
    ]
  },
  {
    id: "h-muakhah-piagam",
    label: "Persaudaraan Mu'akhah & Deklarasi Piagam Madinah",
    category: "kenabian",
    timeLabel: "622 - 623 M",
    timeValue: 623,
    description: "Langkah terobosan politik pertama Rasulullah di Madinah adalah merealisasikan persaudaraan **Mu'akhah**—mempersaudarakan satu per satu kaum Muhajirin (pengungsi Makkah yang kehilangan harta) dengan kaum Anshar (penduduk asli Madinah). Kaum Anshar dengan keikhlasan luar biasa membagi separuh rumah, tanah, dan harta mereka untuk saudara baru mereka.\n\nLangkah terobosan kedua adalah merumuskan **Piagam Madinah** (*Madinah Charter*)—konstitusi tertulis pertama dalam sejarah dunia modern. Piagam ini mengatur tata kehidupan masyarakat heterogen Madinah yang terdiri dari kaum Muslimin (Aus, Khazraj, Muhajirin) dan kaum Yahudi (Bani Qainuqa, Bani Nadhir, Bani Quraizhah).\n\nPiagam Madinah menjamin kebebasan beragama, perlindungan hak asasi manusia, kesetaraan di depan hukum, serta kewajiban kolektif seluruh warga kota untuk membela Madinah dari serangan musuh luar.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Hasyr",
        ayat: 9,
        arabicText: "وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ",
        paraphrase: "Dan mereka (Anshar) mengutamakan (Muhajirin) atas diri mereka sendiri, sekalipun mereka dalam kesusahan."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        matan: "Nabi mempersaudarakan Abdurrahman bin Auf dengan Sa'ad bin Ar-Rabi'",
        terjemahan: "Keikhlasan Anshar menawarkan separuh harta bagi saudara Muhajirin yang ditanggapi dengan etos mandiri Abdurrahman: 'Tunjukkan padaku di mana pasar!'."
      }
    ],
    sources: ["Ibnu Hisyam, As-Sirah an-Nabawiyyah", "Dr. Muhammad Hamidullah, The First Written Constitution in the World"]
  },
  {
    id: "h-perubahan-kiblat",
    label: "Pemindahan Kiblat ke Ka'bah Makkah",
    category: "kenabian",
    timeLabel: "624 M (Sya'ban 2 H)",
    timeValue: 624,
    description: "Selama 16 hingga 17 bulan pertama di Madinah, kaum Muslimin melaksanakan shalat dengan menghadap ke Baitul Maqdis (Yerusalem). Hal ini dimanfaatkan oleh sebagian kelompok yang ragu untuk mengejek bahwa umat Islam tidak memiliki kiblat sendiri.\n\nNabi Muhammad ﷺ sering menengadahkan wajah beliau ke langit, memohon petunjuk dan merindukan Ka'bah Makkah (kiblat Nabi Ibrahim AS) menjadi kiblat umat Islam. Saat Nabi sedang memimpin shalat Zhuhur/Ashar di Masjid Bani Salamah (yang kemudian dinamakan *Masjid Qiblatain*), turunlah perintah Allah (QS. Al-Baqarah: 144) untuk memalingkan wajah ke arah Masjidil Haram Makkah.\n\nSeketika di tengah shalat, Nabi dan seluruh jamaah berputar 180 derajat menghadap Ka'bah. Peristiwa ini menjadi demarkasi ketegasan identitas independen syariat Islam.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Baqarah",
        ayat: 144,
        arabicText: "قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا ۚ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ",
        paraphrase: "Sungguh Kami melihat wajahmu menengadah ke langit, maka sungguh Kami akan memalingkan kamu ke kiblat yang kamu sukai. Palingkanlah wajahmu ke arah Masjidil Haram."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari & Muslim",
        matan: "Kisah shalat dua kiblat di Masjid Bani Salamah",
        terjemahan: "Seorang sahabat yang shalat bersama Nabi memberi tahu warga yang sedang ruku' di masjid lain bahwa kiblat telah berpindah, lalu mereka berputar menghadap Ka'bah."
      }
    ]
  },
  {
    id: "h-badr",
    label: "Pertempuran Al-Kubra Badr (313 vs 1000)",
    category: "kenabian",
    timeLabel: "624 M (17 Ramadhan 2 H)",
    timeValue: 624,
    description: "Konfrontasi militer penentu pertama terjadi di lembah Badr. Pasukan Muslimin (313 prajurit dengan perlengkapan minim) menghadang karavan dagang Quraisy pimpinan Abu Sufyan untuk menuntut ganti rugi aset yang disita di Makkah. Abu Sufyan lolos, namun Abu Jahal mengerahkan 1.000 pasukan tempur berzirah lengkap dari Makkah untuk memusnahkan Islam.\n\nMalam sebelum perang, Nabi beribadah dan berdoa merintih: 'Ya Allah, jika kelompok kecil ini binasa hari ini, Engkau tidak akan disembah lagi di muka bumi!'. Allah mengabulkan doa beliau dengan menurunkan bantuan 1.000 malaikat berturut-turut.\n\nPertempuran berakhir dengan kemenangan gemilang kaum Muslimin. 70 pembesar Quraisy (termasuk Abu Jahal) tewas dan 70 lainnya ditawan. Nabi memerintahkan untuk memperlakukan para tawanan perang secara sangat manusiawi (bahkan memberi mereka makanan yang lebih baik daripada prajurit Muslim sendiri, dan membebaskan tawanan yang sanggup mengajari 10 anak Madinah membaca dan menulis).",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Anfal",
        ayat: 9,
        arabicText: "إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ",
        paraphrase: "Ingatlah ketika kamu memohon pertolongan kepada Tuhanmu, lalu diperkenankan-Nya bagimu: Sesungguhnya Aku akan mendatangkan bala bantuan kepadamu dengan seribu malaikat."
      },
      {
        surah: "Al-Anfal",
        ayat: 17,
        arabicText: "فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ اللَّهَ قَتَلَهُمْ ۚ وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ اللَّهَ رَمَىٰ",
        paraphrase: "Maka (yang sebenarnya) bukan kamu yang membunuh mereka, melainkan Allah-lah yang membunuh mereka, dan bukan kamu yang melempar ketika kamu melempar, melainkan Allah-lah yang melempar."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        arabicText: "اللَّهُمَّ إِنْ تُهْلِكْ هَذِهِ الْعِصَابَةَ مِنْ أَهْلِ الإِسْلاَمِ لاَ تُعْبَدْ فِى الأَرْضِ",
        matan: "Allahumma in tuhlik hadhihil 'isabah...",
        terjemahan: "Ya Allah, jika Engkau membinasakan kelompok umat Islam ini, Engkau tidak akan disembah lagi di muka bumi."
      }
    ]
  },
  {
    id: "h-bani-qainuqa",
    label: "Pelanggaran Piagam & Pengusiran Bani Qainuqa",
    category: "kenabian",
    timeLabel: "624 M (Syawwal 2 H)",
    timeValue: 624,
    description: "Kemenangan Badr menimbulkan kegelisahan di kalangan kelompok yang tidak menyukai kejayaan Islam. Yahudi Bani Qainuqa, suku pedagang emas terkuat di Madinah, menjadi faksi pertama yang secara terang-terangan merusak klausul Piagam Madinah.\n\nPuncak provokasi terjadi di pasar Bani Qainuqa ketika seorang pedagang Yahudi melecehkan seorang wanita Muslimah dengan mengikat pakaiannya hingga tersingkap. Seorang pria Muslim membela wanita tersebut dan membunuh pedagang tersebut, lalu pria Muslim itu dikeroyok hingga tewas. Bani Qainuqa kemudian berlindung di benteng mereka seraya menantang Perang kepada Nabi.\n\nNabi mengepung benteng Bani Qainuqa selama 15 hari hingga mereka menyerah pasrah. Demi menjaga stabilitas keamanan internal Madinah dari pengkhianatan dari dalam saat musuh luar mengintai, Nabi mengusir seluruh anggota suku Bani Qainuqa keluar dari wilayah Madinah menuju Syam.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Anfal",
        ayat: 58,
        arabicText: "وَإِمَّا تَخَافَنَّ مِن قَوْمٍ خِيَانَةً فَانبِذْ إِلَيْهِمْ عَلَىٰ سَوَاءٍ ۚ إِنَّ اللَّهَ لَا يُحِبُّ الْخَائِنِينَ",
        paraphrase: "Dan jika kamu khawatir akan terjadinya pengkhianatan dari suatu golongan, maka kembalikanlah perjanjian itu kepada mereka dengan cara yang jujur."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Abu Dawud",
        matan: "Kisah pembatalan perjanjian akibat pengkhianatan terang-terangan",
        terjemahan: "Nabi tidak pernah membatalkan perjanjian sampai pihak lawan terlebih dahulu merusak klausul keamanan."
      }
    ]
  },
  {
    id: "h-uhud",
    label: "Pertempuran Uhud & Tragedi Bukit Pemanah",
    category: "kenabian",
    timeLabel: "625 M (Syawwal 3 H)",
    timeValue: 625,
    description: "Didorong dendam kekalahan Badr, 3.000 pasukan Makkah di bawah pimpinan Abu Sufyan dan Khalid bin Walid bergerak menuju Madinah. Nabi menempatkan 50 pasukan pemanah terbaik di puncak Bukit Ainain (Bukit Pemanah) untuk mengamankan posisi belakang pasukan Muslimin dengan instruksi mutlak: 'Jangan tinggalkan pos kalian apapun yang terjadi!'.\n\nAwalnya pasukan Muslimin mendominasi pertempuran dan mendesak musuh mundur. Namun, tergiur oleh harta rampasan perang (*Ghanimah*) yang ditinggalkan musuh, 40 pemanah mengabaikan komando Nabi dan turun dari bukit. Khalid bin Walid jeli melihat celah ini, mengomandoi kavaleri memutar dan memukul balik pasukan Muslimin dari belakang.\n\nKekacauan dahsyat terjadi: paman Nabi, Hamzah bin Abdul Muthalib (Singa Allah), gugur dipoles tombak Wahsyi. Nabi Muhammad sendiri diserang hingga gigi seri beliau patah dan pipi beliau terluka. Peristiwa pahit ini menjadi pelajaran mahal dari Allah (QS. Ali 'Imran: 152) tentang bahaya ketidakpatuhan terhadap komando kepemimpinan dan godaan materialisme.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Ali 'Imran",
        ayat: 152,
        arabicText: "حَتَّىٰ إِذَا فَشِلْتُمْ وَتَنَازَعْتُمْ فِي الْأَمْرِ وَعَصَيْتُم مِّن بَعْدِ مَا أَرَاكُم مَّا تُحِبُّونَ",
        paraphrase: "Sampai pada saat kamu lemah dan berselisih dalam urusan itu dan mendurhakai perintah rasul sesudah Allah memperlihatkan kepadamu apa yang kamu sukai."
      },
      {
        surah: "Ali 'Imran",
        ayat: 140,
        arabicText: "وَتِلْكَ الْأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ",
        paraphrase: "Dan masa (kejayaan dan kehancuran) itu Kami pergilirkan di antara manusia (agar mereka mendapat pelajaran)."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        arabicText: "أُحُدٌ جَبَلٌ يُحِبُّنَا وَنُحِبُّهُ",
        matan: "Uhudun jabalun yuhibbuna wa nuhibbuh...",
        terjemahan: "Uhud adalah gunung yang mencintai kita dan kita mencintainya."
      }
    ]
  },
  {
    id: "h-bani-nadhir",
    label: "Konspirasi Pembunuhan & Pengusiran Bani Nadhir",
    category: "kenabian",
    timeLabel: "625 M (Rabiul Awal 4 H)",
    timeValue: 625,
    description: "Pasca Perang Uhud, suku Yahudi Bani Nadhir memanfaatkan situasi dengan melakukan persekongkolan rahasia. Ketika Nabi Muhammad bersama beberapa sahabat mendatangi pemukiman Bani Nadhir untuk membicarakan pembayaran uang darah (*Diyat*), para pemimpin Bani Nadhir merencanakan pembunuhan Nabi.\n\nMereka menyuruh seorang pria memanjat atap rumah dan menjatuhkan batu gilingan raksasa ke kepala Nabi yang sedang duduk di bawah dinding. Melalui wahyu Malaikat Jibril, Nabi diberitahu rencana jahat ini dan langsung bangkit meninggalkan lokasi.\n\nKarena pengkhianatan berat terhadap keselamatan Kepala Negara dan perusakan kesepakatan damai, Nabi memberikan tenggat waktu 10 hari bagi Bani Nadhir untuk angkat kaki dari Madinah. Setelah dikepung di benteng mereka, Bani Nadhir akhirnya menyerah dan diusir keluar menuju Khaibar (QS. Al-Hasyr).",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Hasyr",
        ayat: 2,
        arabicText: "هُوَ الَّذِي أَخْرَجَ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ مِن دِيَارِهِمْ لِأَوَّلِ الْحَشْرِ",
        paraphrase: "Dialah yang mengeluarkan orang-orang kafir di antara ahli kitab dari kampung halaman mereka pada saat pengusiran yang pertama."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        matan: "Pengusiran Bani Nadhir dan pembagian harta Fai' tanpa perang",
        terjemahan: "Harta kekayaan Bani Nadhir dijadikan harta Fai' yang dikelola khusus untuk kemaslahatan umum dan fakir miskin."
      }
    ]
  },
  {
    id: "h-khandaq",
    label: "Perang Khandaq (Ahzab) & Taktik Parit Salman",
    category: "kenabian",
    timeLabel: "627 M (Syawwal 5 H)",
    timeValue: 627,
    description: "Tokoh-tokoh Bani Nadhir yang diusir memprovokasi terbentuknya aliansi militer raksasa (*Pasukan Ahzab*) berkekuatan 10.000 prajurit gabungan Quraisy, Ghathafan, dan suku-suku gurun untuk mengepung Madinah.\n\nDalam musyawarah pertahanan, Salman Al-Farisi (sahabat asal Persia) mengusulkan taktik perang yang belum pernah dikenal di Arab: menggali parit raksasa (*Khandaq*) di perbatasan utara Madinah yang terbuka. Nabi bersama 3.000 sahabat bergotong-royong menggali parit di tengah cuaca dingin ekstrem dan kelaparan hebat.\n\nPengepungan berlangsung selama sebulan penuh. Musuh frustrasi karena kavaleri mereka tidak bisa menyeberangi parit. Di puncak krisis, suku Yahudi Bani Quraizhah yang berada di dalam Madinah mengkhianati Piagam Madinah dan bersekutu dengan musuh. Umat Islam terancam dari luar dan dalam. Allah kemudian menolong dengan mengirimkan badai angin kencang yang memporak-porandakan perkemahan musuh, memaksa pasukan koalisi mundur tanpa hasil (QS. Al-Ahzab: 9).",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Ahzab",
        ayat: 9,
        arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ إِذْ جَاءَتْكُمْ جُنُودٌ فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا وَجُنُودًا لَّمْ تَرَوْهَا",
        paraphrase: "Hai orang-orang yang beriman, ingatlah akan nikmat Allah kepadamu ketika datang kepadamu tentara-tentara, lalu Kami kirimkan kepada mereka angin topan dan tentara yang tidak dapat kamu lihat."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        arabicText: "اللَّهُمَّ لاَ عَيْشَ إِلاَّ عَيْشُ الآخِرَهْ فَاغْفِرِ الأَنْصَارَ وَالْمُهَاجِرَهْ",
        matan: "Allahumma la 'aysha illa 'ayshul Akhirah...",
        terjemahan: "Ya Allah, tidak ada kehidupan hakiki melainkan kehidupan akhirat, maka ampunilah kaum Anshar dan Muhajirin (saat menggali parit)."
      }
    ]
  },
  {
    id: "h-hudaibiyyah",
    label: "Perjanjian Hudaibiyyah & Bai'at Ridhwan",
    category: "kenabian",
    timeLabel: "628 M (Dzulqa'dah 6 H)",
    timeValue: 628,
    description: "Nabi bermimpi melakukan Umrah di Ka'bah. Beliau memimpin 1.400 sahabat berpakaian ihram tanpa senjata perang menuju Makkah. Namun, Quraisy menghadang mereka di kawasan Hudaibiyyah. Nabi mengutus Utsman bin Affan untuk berunding, namun rumor berhembus Utsman dibunuh.\n\nMendengar berita itu, Nabi mengumpulkan seluruh sahabat di bawah pohon dan mengambil sumpah setia mati (**Bai'at Ridhwan**) untuk membela Utsman. Keteguhan ini menggentarkan Quraisy sehingga mereka mengirim Suhail bin Amr untuk menandatangani **Perjanjian Hudaibiyyah**.\n\nKlausul perjanjian tampak merugikan Muslimin: gencatan senjata 10 tahun, penundaan Umrah hingga tahun depan, dan kewajiban mengembalikan warga Makkah yang masuk Islam ke Madinah. Umar bin Khattab sempat mempertanyakan hal ini, namun Nabi menerima karena memiliki visi jangka panjang: gencatan senjata ini memberi ruang aman bagi Islam untuk menyebar masif ke seluruh Jazirah Arab.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Fath",
        ayat: 1,
        arabicText: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
        paraphrase: "Sesungguhnya Kami telah memberikan kepadamu kemenangan yang nyata (Perjanjian Hudaibiyyah)."
      },
      {
        surah: "Al-Fath",
        ayat: 18,
        arabicText: "لَّقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ",
        paraphrase: "Sesungguhnya Allah telah ridha terhadap orang-orang mukmin ketika mereka berjanji setia kepadamu di bawah pohon."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        matan: "Kisah Bai'at Ridhwan dan penulisan naskah Perjanjian Hudaibiyyah",
        terjemahan: "Keikhlasan para sahabat berikrar setia di bawah pohon dan kebijaksanaan Nabi menghapus lafadz 'Rasulullah' demi tercapainya perjanjian damai."
      }
    ]
  },
  {
    id: "h-khaibar",
    label: "Penaklukan Benteng Khaibar & Keberanian Ali",
    category: "kenabian",
    timeLabel: "628 M (Muharram 7 H)",
    timeValue: 628,
    description: "Setelah situasi aman dari ancaman Makkah pasca Perjanjian Hudaibiyyah, Nabi memimpin pasukan untuk menumpas sarang provokasi dan konspirasi di Khaibar—wilayah benteng pertahanan Yahudi yang sangat kuat di utara Madinah.\n\nBenteng-benteng Khaibar terkenal sulit ditembus. Setelah beberapa panglima gagal membobol benteng utama (Na'im dan Qamus), Nabi bersabda: 'Besok aku akan menyerahkan bendera ini kepada seseorang yang mencintai Allah dan Rasul-Nya serta dicintai Allah dan Rasul-Nya, Allah akan membuka kemenangan melalui tangannya'.\n\nBesok harinya, Nabi memanggil Ali bin Abi Thalib yang sedang sakit mata. Nabi mengobati matanya dan menyerahkan panji kepemimpinan. Ali tampil dengan keberanian luar biasa, memdobrak pertahanan Khaibar dan meraih kemenangan total. Khaibar menyerah dan disepakati pengelolaan lahan pertanian dengan bagi hasil.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Fath",
        ayat: 20,
        arabicText: "وَعَدَكُمُ اللَّهُ مَغَانِمَ كَثِيرَةً تَأْخُذُونَهَا فَعَجَّلَ لَكُمْ هَٰذِهِ",
        paraphrase: "Allah menjanjikan kepadamu harta rampasan yang banyak yang dapat kamu ambil, maka Diberikan-Nya harta rampasan ini kepadamu dengan cepat (Khaibar)."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari & Muslim",
        arabicText: "لَأُعْطِيَنَّ هذه الرَّايَةَ غَدًا رَجُلًا يَفْتَحُ اللَّهُ علَى يَدَيْهِ، يُحِبُّ اللَّهَ ورَسولَهُ ويُحِبُّهُ اللَّهُ ورَسولُهُ",
        matan: "La utiyanna hadhihir-rayata ghadan rajulan...",
        terjemahan: "Sungguh besok aku akan menyerahkan bendera ini kepada seorang laki-laki yang melalui tangannya Allah memberikan kemenangan, yang mencintai Allah dan Rasul-Nya..."
      }
    ]
  },
  {
    id: "h-surat-raja",
    label: "Diplomasi Internasional: Surat ke 8 Raja Dunia",
    category: "kenabian",
    timeLabel: "628 M (Abad 7 M)",
    timeValue: 628,
    description: "Memanfaatkan suasana damai Perjanjian Hudaibiyyah, Nabi Muhammad meluncurkan langkah diplomasi internasional secara masif. Beliau mencetak stempel cincin perak bertuliskan *Muhammad Rasul Allah* dan mengutus para diplomat sahabat membawa surat ajakan memeluk Islam kepada 8 penguasa kerajaan besar dunia:\n\n1. **Heraklius** (Kaisar Bizantium/Romawi Timur)\n2. **Khusrau Parviz** (Kisra Kekaisaran Sassanid Persia)\n3. **Muqawqis** (Gubernur Mesir/Coptik)\n4. **Raja Najasyi** (Penguasa Habasyah/Ethiopia)\n5. **Mundzir bin Sawa** (Penguasa Bahrain)\n6. **Haudzah bin Ali** (Penguasa Yamamah)\n7. **Harits bin Abi Syamir** (Raja Ghassanid Suriah)\n8. **Jaifar dan Abd** (Penguasa Oman)\n\nSurat-surat ini menandai transisi dakwah Islam dari jangkauan regional suku Arab menuju seruan peradaban global bagi seluruh umat manusia.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Ali 'Imran",
        ayat: 64,
        arabicText: "قُلْ يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَىٰ كَلِمَةٍ سَوَاءٍ بَيْنَنَا وَبَيْنَكُمْ أَلَّا نَعْبُدَ إِلَّا اللَّهَ",
        paraphrase: "Katakanlah: 'Hai Ahli Kitab, marilah (berpegang) kepada suatu kalimat (ketetapan) yang tidak ada perselisihan antara kami dan kamu, bahwa tidak kita sembah melainkan Allah...'"
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        matan: "Teks dialog Heraklius dengan Abu Sufyan membaca surat Nabi",
        terjemahan: "Heraklius mengakui kebenaran sifat kenabian Muhammad setelah menanyakan silsilah, kejujuran, dan ajaran keadilannya."
      }
    ],
    sources: ["Safiur Rahman Mubarakpuri, Ar-Raheeq Al-Makhtum"]
  },
  {
    id: "h-mutah",
    label: "Pertempuran Mu'tah & Kepemimpinan Khalid bin Walid",
    category: "kenabian",
    timeLabel: "629 M (Jumadil Ula 8 H)",
    timeValue: 629,
    description: "Latar belakang Pertempuran Mu'tah adalah terbunuhnya utusan diplomasi Nabi (Harits bin Umair Al-Azdi) oleh penguasa Ghassanid sekutu Bizantium. Pembunuhan seorang duta besar merupakan pelanggaran hukum internasional terberat saat itu.\n\nNabi mengirim 3.000 pasukan ke perbatasan Yordania dengan menunjuk urutan kepemimpinan ganda: Zaid bin Haritsah, jika gugur digantikan Ja'far bin Abi Thalib, dan jika gugur digantikan Abdullah bin Rawahah. Di Mu'tah, pasukan Muslim terkejut mendapati pasukan gabungan Bizantium dan Arab Kristen berkekuatan 100.000 hingga 200.000 prajurit.\n\nKetiga panglima yang ditunjuk Nabi gugur secara syahid setelah bertempur gagah berani (Ja'far gugur dengan 90 luka di dadanya). Pasukan mengambil inisiatif mengangkat Khalid bin Walid menjadi panglima. Dengan jenius taktis, Khalid merombak barisan depan-belakang dan kiri-kanan setiap hari untuk menciptakan ilusi kedatangan pasukan bantuan baru, lalu memimpin penarikan mundur pasukan secara aman tanpa kehancuran.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "At-Taubah",
        ayat: 111,
        arabicText: "إِنَّ اللَّهَ اشْتَرَىٰ مِنَ الْمُؤْمِنِينَ أَنفُسَهُمْ وَأَمْوَالَهُم بِأَنَّ لَهُمُ الْجَنَّةَ",
        paraphrase: "Sesungguhnya Allah telah membeli dari orang-orang mukmin diri dan harta mereka dengan memberikan surga untuk mereka."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        matan: "Nabi menceritakan gugurnya para panglima Mu'tah dari mimbar Madinah",
        terjemahan: "...hingga bendera diambil oleh salah satu pedang di antara pedang-pedang Allah (Khalid bin Walid) hingga Allah membuka kemenangan bagi mereka."
      }
    ]
  },
  {
    id: "h-fathu-makkah",
    label: "Fathu Makkah & Deklarasi Amnesti Umum",
    category: "kenabian",
    timeLabel: "630 M (Ramadhan 8 H)",
    timeValue: 630,
    description: "Suku Bani Bakr (sekutu Quraisy) menyerang Bani Khuza'ah (sekutu Muslim), melanggar Perjanjian Hudaibiyyah. Merespons pelanggaran ini, Nabi bergerak memimpin 10.000 prajurit menuju Makkah secara rahasia. Menyadari kekuatan yang tak tertandingi, pemimpin Makkah Abu Sufyan menyerah.\n\nNabi membagi pasukan memasuki Makkah dari 4 penjuru dengan instruksi tegas: 'Tidak boleh ada pertumpahan darah!'. Nabi memasuki Makkah dengan menundukkan kepalanya hingga janggut beliau menyentuh pelana unta karena ke-tawadhu'-an mendalam kepada Allah.\n\nBeliau mengelilingi Ka'bah dan menghancurkan 360 berhala dengan tongkatnya seraya membaca QS. Al-Isra: 81 ('Telah datang kebenaran dan musnahlah kebatilan'). Saat seluruh elit Quraisy (pembunuh Hamzah dan penyiksa sahabat) berkumpul pasrah menunggu eksekusi, Nabi memberikan **Deklarasi Amnesti Umum**: 'Pergilah kalian semua, hari ini kalian adalah orang-orang yang bebas!'. Kedermawanan jiwa ini meluruhkan keangkuhan Quraisy dan mereka memeluk Islam secara massal.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "An-Nasr",
        ayat: 1,
        arabicText: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
        paraphrase: "Apabila telah datang pertolongan Allah dan kemenangan, dan kamu lihat manusia masuk agama Allah dengan berbondong-bondong."
      },
      {
        surah: "Al-Isra",
        ayat: 81,
        arabicText: "وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ ۚ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا",
        paraphrase: "Dan katakanlah: 'Yang benar telah datang dan yang bathil telah lenyap'. Sesungguhnya yang bathil itu adalah sesuatu yang pasti lenyap."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Al-Baihaqi & Al-Hakim",
        arabicText: "اذْهَبُوا فَأَنْتُمُ الطُّلَقَاءُ",
        matan: "Idzhabu fa-antum at-tulaqa'...",
        terjemahan: "Pergilah kalian semua, pada hari ini kalian adalah orang-orang yang bebas (diampuni)."
      }
    ],
    akhlakTeladan: "Puncak keagungan jiwa manusia: Memegang kekuasaan mutlak namun memilih memaafkan musuh bebuyutan alih-alih membalas dendam."
  },
  {
    id: "h-tabuk-hajiwada",
    label: "Perang Tabuk, Haji Wada' & Wafatnya Rasulullah ﷺ",
    category: "kenabian",
    timeLabel: "630 - 632 M",
    timeValue: 632,
    description: "Pada 630 M, Nabi memimpin **Perang Tabuk** (*Pasukan Usrah*) menempuh 500 km di tengah musim panas membakar untuk menghadapi ancaman Bizantium. Perang ini menguji kejujuran iman dan membongkar kedok kaum munafik.\n\nPada 632 M (10 H), Nabi melaksanakan **Haji Wada'** (Haji Perpisahan) diikuti 100.000+ Muslimin. Di Arafah, beliau menyampaikan *Khutbah Wada'*—deklarasi Hak Asasi Manusia pertama yang menegaskan kesucian darah dan harta, kebebasan wanita, penghapusan riba dan rasisme. Di sana turun wahyu terakhir: QS. Al-Ma'idah: 3 ('Pada hari ini telah Kusempurnakan agamamu...').\n\nSekembalinya ke Madinah, Nabi jatuh sakit. Pada 12 Rabiul Awal 11 H (632 M), beliau wafat di pangkuan Aisyah ra. bergumam: *'Ar-Rafiq al-A'la'* (Bersanding dengan Kekasih Yang Maha Tinggi). Wafatnya Nabi menguncang Madinah, hingga Abu Bakar menyampaikan pidato keteguhan: 'Barangsiapa menyembah Muhammad, Muhammad telah wafat. Barangsiapa menyembah Allah, Allah Maha Hidup dan tidak akan pernah mati!'.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Ma'idah",
        ayat: 3,
        arabicText: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا",
        paraphrase: "Pada hari ini telah Kusempurnakan untuk kamu agamamu, dan telah Ku-cukupkan kepadamu nikmat-Ku, dan telah Ku-ridhai Islam itu jadi agama bagimu."
      },
      {
        surah: "Ali 'Imran",
        ayat: 144,
        arabicText: "وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ",
        paraphrase: "Muhammad itu tidak lain hanyalah seorang rasul, sungguh telah berlalu sebelumnya beberapa orang rasul."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Khutbah Wada' Nabi di Padang Arafah",
        terjemahan: "Aku tinggalkan untuk kalian dua perkara yang kalian tidak akan sesat selamanya jika berpegang teguh kepadanya: Kitabullah dan Sunnah Rasul-Nya."
      }
    ]
  },

  // =========================================================================
  // EPOCH 3: ERA KHULAFAUR RASYIDIN (8 NODE) - DEEP EXPANSION
  // =========================================================================
  {
    id: "h-saqifah-abubakar",
    label: "Musyawarah Saqifah & Kekhalifahan Abu Bakar",
    category: "khulafaur-rasyidin",
    timeLabel: "632 M (11 H)",
    timeValue: 632,
    description: "Pasca wafatnya Rasulullah ﷺ pada 12 Rabiul Awal 11 H, Kota Madinah dilanda guncangan hebat. Sebelum jasad suci Nabi dimakamkan, timbul krisis kepemimpinan nasional ketika tokoh-tokoh Anshar (suku Aus dan Khazraj) berkumpul di bawah balai *Saqifah Bani Sa'idah* untuk menunjuk Saad bin Ubadah sebagai pemimpin Yatsrib. Mengetahui risiko pecahnya persatuan umat, Abu Bakar as-Siddiq bersama Umar bin Khattab dan Abu Ubaidah bin al-Jarrah bergegas menuju lokasi.\n\nDalam musyawarah yang sangat intens namun dipenuhi rasa saling menghormati itu, Abu Bakar menyampaikan pidato politik monumental. Beliau menekankan perlunya sosok pimpinan dari suku Quraisy sebagai simpul pemersatu seluruh kabilah Arab, seraya memuji jasa tak terhingga kaum Anshar sebagai *Al-Ma'wa* (pelindung agama). Setelah debat konstruktif, Umar bin Khattab melangkah maju dan menjabat tangan Abu Bakar untuk mengikrarkan bai'at, diikuti oleh seluruh tokoh Anshar dan Muhajirin.\n\nKeesokan harinya di Masjid Nabawi, dibaiatlah Abu Bakar secara umum (*Bai'at 'Ammah*) sebagai *Khalifatu Rasulillah* (Pengganti Rasulullah dalam memimpin negara). Pidato pelantikannya menjadi piagam akuntabilitas konstitusional pertama: 'Wahai manusia, aku telah diangkat memimpin kalian padahal aku bukanlah yang terbaik di antara kalian. Jika aku berbuat baik, dukunglah aku; dan jika aku menyimpang, luruskanlah aku! Kejujuran adalah amanah dan kedustaan adalah pengkhianatan'.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Ali 'Imran",
        ayat: 159,
        arabicText: "وَشَاوِرْهُمْ فِي الْأَمْرِ ۖ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ",
        paraphrase: "Dan bermusyawarahlah dengan mereka dalam urusan itu. Kemudian apabila kamu telah membulatkan tekad, maka bertawakkallah kepada Allah."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        arabicText: "الأَئِمَّةُ مِنْ قُرَيْشٍ",
        matan: "Al-A'immatu min Quraisyin...",
        terjemahan: "Kepemimpinan (pemegang otoritas pemungut persatuan) berasal dari suku Quraisy."
      }
    ],
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Ibnu Katsir, Al-Bidayah wan-Nihayah", "As-Suyuti, Tarikh Al-Khulafa"]
  },
  {
    id: "h-perang-ridda",
    label: "Perang Ridda & Kodifikasi Al-Qur'an Pertama",
    category: "khulafaur-rasyidin",
    timeLabel: "632 - 633 M (11 - 12 H)",
    timeValue: 633,
    description: "Kekhalifahan Abu Bakar yang baru seumur jagung langsung dihantam badai krisis eksistensial terberat: gelombang *Ridda* (kemurtadan massal dan pembangkangan zakat). Banyak kabilah di Najd, Yamamah, dan Yaman menolak tunduk pada Madinah dan menolak membayar Zakat, sementara nabi-nabi palsu bermunculan seperti Musailamah al-Kadzdzab di Yamamah, Tulaihah bin Khuwailid dari Bani Asad, dan Sajah binti al-Harits.\n\nMenghadapi saran sahabat yang meminta kelonggaran, Abu Bakar menunjukkan keteguhan baja seraya berkata: 'Demi Allah! Aku akan berperang melawan siapa pun yang memisahkan antara Shalat dan Zakat!'. Abu Bakar membagi tentara Islam menjadi 11 detasemen militer strategis yang dipimpin oleh panglima-panglima ulung seperti Khalid bin Walid, Ikrimah bin Abi Jahal, dan Syurahbil bin Hasanah.\n\nPuncak pertempuran terjadi pada **Pertempuran Yamamah** (633 M) melawan Musailamah yang membarikade 40.000 pasukannya di dalam kebun berbenteng tinggi (*Hadiqatul Maut* / Kebun Kematian). Setelah pertempuran dahsyat yang menewaskan Musailamah dan 70 sahabat penghafal Al-Qur'an (*Huffaz*), keamanan Jazirah Arab berhasil dipulihkan secara mutlak.\n\nGugurnya puluhan penghafal Al-Qur'an membuat Umar bin Khattab mendesak Abu Bakar untuk mengkodifikasikan wahyu. Abu Bakar menunjuk Zaid bin Tsabit (sekretaris utama wahyu Nabi) untuk mengumpulkan lembaran-lembaran Al-Qur'an dari pelepah kurma, batu putih, dan hafalan para sahabat menjadi satu **Mushaf Tunggal** yang disimpan di rumah Abu Bakar.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Ma'idah",
        ayat: 54,
        arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا مَن يَرْتَدَّ مِنكُمْ عَن دِينِهِ فَسَوْفَ يَأْتِي اللَّهُ بِقَوْمٍ يُحِبُّهُمْ وَيُحِبُّونَهُ",
        paraphrase: "Hai orang-orang yang beriman, barangsiapa di antara kamu yang murtad dari agamanya, maka kelak Allah akan mendatangkan suatu kaum yang Allah mencintai mereka dan mereka pun mencintai-Nya."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        arabicText: "أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَيُقِيمُوا الصَّلاَةَ وَيُؤْتُوا الزَّكَاةَ",
        matan: "Umirtu an uqatilan-nasa hatta yasyhadu...",
        terjemahan: "Aku diperintahkan untuk memerangi manusia sampai mereka bersaksi tiada Tuhan selain Allah dan Muhammad Rasulullah, mendirikan shalat, serta menunaikan zakat."
      }
    ],
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Ibnu Katsir, Al-Bidayah wan-Nihayah"]
  },
  {
    id: "h-ekspansi-yarmuk",
    label: "Kekhalifahan Umar & Kemenangan Yarmuk",
    category: "khulafaur-rasyidin",
    timeLabel: "634 - 636 M (13 - 15 H)",
    timeValue: 636,
    description: "Sebelum wafat pada 13 H (634 M), Abu Bakar menunjuk Umar bin Khattab sebagai penerusnya setelah bermusyawarah dengan para senior sahabat. Di bawah kekhalifahan Umar (*Amirul Mukminin*), wilayah peradaban Islam mengalami lompatan pembebasan (*Futuhat*) paling spektakuler dalam sejarah dunia.\n\nKaisar Bizantium Heraklius memobilisasi sekutu Kristen dan pasukan gabungan berkekuatan 100.000 hingga 200.000 prajurit untuk menggulung pasukan Muslimin dari Syam. Kedua pasukan berhadapan di dekat lembah **Sungai Yarmuk** (Yordania/Suriah) pada Agustus 636 M. Pasukan Muslimin berkekuatan 40.000 prajurit dipimpin oleh Khalid bin Walid, bersama para mujahid ulung seperti Abu Ubaidah bin al-Jarrah dan Ikrimah bin Abi Jahal.\n\nDalam pertempuran 6 hari yang membakar itu, Khalid menerapkan taktik kavaleri dinamis yang memotong sayap pasukan Romawi dan menjebak mereka di jurang lembah Yarmuk. Kemenangan mutlak ini menghancurkan dominasi militer Bizantium di Timur Tengah secara permanen. Kaisar Heraklius melarikan diri ke Konstantinopel seraya berseru duka: 'Selamat tinggal Suriah, sebuah perpisahan yang takkan ada pertemuan lagi setelahnya!'.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Anfal",
        ayat: 65,
        arabicText: "يَا أَيُّهَا النَّبِيُّ حَرِّضِ الْمُؤْمِنِينَ عَلَى الْقِتَالِ ۚ إِن يَكُن مِّنكُمْ عِشْرُونَ صَابِرُونَ يَغْلِبُوا مِائَتَيْنِ",
        paraphrase: "Hai Nabi, kobarkanlah semangat para mukmin untuk berperang. Jika ada dua puluh orang yang sabar di antaramu, niscaya mereka akan dapat mengalahkan dua ratus orang musuh."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Ahmad",
        matan: "Sabda Nabi tentang pembebasan wilayah Syam dan kemuliaan pasukannya",
        terjemahan: "Syam adalah benteng pertahanan umat Islam di masa-masa gejolak akhir zaman."
      }
    ],
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Ibnu A'tsam, Kitab al-Futuh"]
  },
  {
    id: "h-qadisiyyah-jerusalem",
    label: "Pertempuran Qadisiyyah & Perjanjian Yerusalem",
    category: "khulafaur-rasyidin",
    timeLabel: "636 - 638 M (15 - 17 H)",
    timeValue: 638,
    description: "Di front timur, Kekaisaran Sassanid Persia mengerahkan panglima utamanya, Rustam Farrokhzad, membawa 120.000 pasukan tempur dan gajah perang untuk meremukkan pasukan Islam. Khalifah Umar menunjuk Sa'ad bin Abi Waqqas memimpin 30.000 prajurit di lembah **Al-Qadisiyyah** (Irak, 636 M).\n\nSelama 4 hari pertempuran berdarah (*Hari Armath, Aghwath, Imas, dan Al-Qadisiyyah*), para pemanah Muslim berhasil melumpuhkan gajah perang musuh. Panglima Rustam tewas dan ibukota Persia, Al-Mada'in (Ctesiphon), jatuh ke tangan Muslimin. Kerajaan Sassanid yang telah berusia ratusan tahun hancur berantakan.\n\nSementara itu di Palestina (638 M), kota suci Yerusalem dikepung pasukan Abu Ubaidah dan Amr bin Ash. Uskup Agung Yerusalem, Sophronius, menyatakan hanya mau menyerahkan kunci kota secara langsung kepada Khalifah Umar bin Khattab. Umar berjalan kaki dari Madinah membawa satu unta bergantian dengan pembantunya. Beliau menandatangani **Perjanjian Umariyyah** (*Al-'Uhdah al-'Umariyyah*)—piagam jaminan kebebasan beragama, keselamatan tempat ibadah Gereja Kebangkitan, serta larangan pengusiran warga Kristen Yerusalem.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Isra",
        ayat: 7,
        arabicText: "فَإِذَا جَاءَ وَعْدُ الْآخِرَةِ لِيَسُوءُوا وُجُوهَكُمْ وَلِيَدْخُلُوا الْمَسْجِدَ كَمَا دَخَلُوهُ أَوَّلَ مَرَّةٍ",
        paraphrase: "Dan apabila datang saat hukuman bagi kejahatan yang kedua, (Kami datangkan orang-orang lain) untuk menyuramkan muka-muka kamu dan mereka masuk ke dalam masjid (Baitul Maqdis)..."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari & Muslim",
        arabicText: "لاَ تُشَدُّ الرِّحَالُ إِلاَّ إِلَى ثَلاَثَةِ مَسَاجِدَ المَسْجِدِ الحَرَامِ ، وَمَسْجِدِ الرَّسُولِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ ، وَمَسْجِدِ الأَقْصَى",
        matan: "La tusyaddur-rihalu illa ila thalatsati masajid...",
        terjemahan: "Janganlah bersusah payah melakukan perjalanan ibadah kecuali ke tiga masjid: Masjidil Haram, Masjid Rasulullah (Nabawi), dan Masjidil Aqsha."
      }
    ],
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Al-Baladhuri, Futuh al-Buldan"]
  },
  {
    id: "h-reformasi-umar",
    label: "Institusi Negara Umar: Diwan, Kalender & Qadhi",
    category: "khulafaur-rasyidin",
    timeLabel: "638 - 644 M (17 - 23 H)",
    timeValue: 640,
    description: "Dengan membentangnya wilayah kekhalifahan dari Mesir hingga perbatasan Persia, Khalifah Umar bin Khattab melakukan reformasi kelembagaan tata negara modern yang belum pernah ada sebelumnya dalam sejarah Arab. Beliau merumuskan administrasi keuangan publik (*Baitul Mal*) dan mendirikan kementerian pembukuan (**Diwan**) untuk mencatat jaminan sosial pensiun tentara, veteran, rakyat miskin, serta janda dan anak-anak.\n\nUmar melepaskan wewenang kehakiman dari kekuasaan eksekutif dengan menunjuk peradilan (**Qadhi**) independen di setiap provinsi (seperti Abu al-Darda di Damaskus dan Qadhi Syuraih di Kufah). Beliau mendirikan kepolisian malam (*Al-Ahdats*), menetapkan standar pencetakan mata uang, serta meresmikan penggunaan **Kalender Hijriah** (dimulai dari peristiwa Hijrah Nabi) atas usulan Ali bin Abi Thalib.\n\nDalam mengontrol para gubernurnya (seperti Muawiyah di Syam dan Amr bin Ash di Mesir), Umar mempraktikkan pengawasan aset (*Audit Kekayaan*) yang ketat. Setiap musim haji, Umar membuka forum publik bagi rakyat dari seluruh provinsi untuk melaporkan kezaliman pejabat mereka secara langsung.",
    branch: "jalur-sains",
    quranRefs: [
      {
        surah: "Al-A'raf",
        ayat: 96,
        arabicText: "وَلَوْ أَنَّ أَهْلَ الْقُرَىٰ آمَنُوا وَاتَّقَوْا لَفَتَحْنَا عَلَيْهِم بَرَكَاتٍ مِّنَ السَّمَاءِ وَالْأَرْضِ",
        paraphrase: "Jikalau sekiranya penduduk negeri-negeri beriman dan bertakwa, pastilah Kami akan melimpahkan kepada me-reka berkah dari langit dan bumi."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi",
        arabicText: "إِنَّ اللَّهَ جَعَلَ الْحَقَّ عَلَى لِسَانِ عُمَرَ وَقَلْبِهِ",
        matan: "Innallaha ja'alal haqqa 'ala lisani 'Umara wa qalbihi...",
        terjemahan: "Sesungguhnya Allah telah menempatkan kebenaran pada lisan Umar dan hatinya."
      }
    ],
    sources: ["Ibnu Khaldun, Al-Muqaddimah", "As-Suyuti, Tarikh Al-Khulafa"]
  },
  {
    id: "h-utsman-mushaf",
    label: "Kekhalifahan Utsman & Standarisasi Mushaf Utsmani",
    category: "khulafaur-rasyidin",
    timeLabel: "644 - 656 M (23 - 35 H)",
    timeValue: 650,
    description: "Setelah Umar syahid ditikam oleh Abu Lu'lu'ah (seorang budak majusi) pada 23 H, majelis syura 6 sahabat memilih Utsman bin Affan sebagai Khalifah ketiga. Enam tahun pertama masa Utsman diwarnai ekspansi maritim besar: beliau menunjuk Muawiyah membangun armada laut Islam pertama dan memenangkan pertempuran laut **Dzatus Shawari** (655 M) melawan armada Bizantium di Laut Tengah.\n\nSeiring semakin luasnya wilayah kekhalifahan yang mencakup berbagai suku non-Arab di Armenia dan Azerbaijan, panglima Hudzaifah bin al-Yaman melaporkan adanya perselisihan sengit antar-prajurit mengenai perbedaan dialek (*Ahruf*) bacaan Al-Qur'an yang berpotensi memicu perpecahan kitab suci.\n\nMerespons ancaman ini, Khalifah Utsman mengambil langkah bersejarah: meminjam Mushaf induk simpanan Hafsah binti Umar dan membentuk panitia standarisasi 4 sahabat (Zaid bin Tsabit, Abdullah bin az-Zubair, Sa'id bin al-'Ash, dan Abdurrahman bin al-Harits). Mereka mendiktekan dan menyalin Mushaf ke dalam satu dialek standar Quraisy: **Rasm Utsmani**.\n\nSalinan Mushaf induk ini dikirimkan ke pusat-pusat kota (Makkah, Kufah, Basrah, Damaskus, Madinah) disertai instruksi membakar salinan pribadi yang tidak standar demi menjaga kemurnian dan persatuan Al-Qur'an hingga akhir zaman.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Hijr",
        ayat: 9,
        arabicText: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
        paraphrase: "Sesungguhnya Kami-lah yang menurunkan Al-Qur'an, dan sesungguhnya Kami benar-benar memeliharanya."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        matan: "Kisah Hudzaifah ibn al-Yaman melapor ke Utsman tentang perbedaan bacaan Al-Qur'an di armada Syam dan Irak",
        terjemahan: "Utsman menyatukan pembukuan Mushaf standar dan membakar salinan variasi dialek demi menjaga kesucian kitab suci dari perpecahan."
      }
    ],
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Ibnu Abi Dawud, Kitab al-Masahif"]
  },
  {
    id: "h-ali-siffin",
    label: "Kekhalifahan Ali, Perang Siffin & Tahkim",
    category: "khulafaur-rasyidin",
    timeLabel: "656 - 657 M (35 - 37 H)",
    timeValue: 657,
    description: "Kekhalifahan Utsman berujung tragis tatkala kelompok demonstran pemberontak dari Mesir dan Kufah mengepung rumah beliau dan menyahidkan Khalifah Utsman yang sedang membaca Al-Qur'an (35 H). Di tengah kebingungan dan kekosongan pemerintahan, Ali bin Abi Thalib dibaiat sebagai Khalifah keempat di Madinah.\n\nAli menghadapi krisis stabilitas internal yang rumit. Tuntutan penegakan hukum terhadap para pembunuh Utsman memicu perbedaan pendapat politik dengan Aisyah ra., Thalhah, dan az-Zubair (terjadi Perang Jamal yang diakhiri dengan penghormatan tinggi Ali kepada Aisyah). Selanjutnya, Gubernur Syam, Muawiyah bin Abi Sufyan, menolak membaiat Ali sebelum pembunuh Utsman diadili.\n\nKedua pasukan berhadapan dalam pertempuran saudara dahsyat di **Siffin** (tepi Sungai Eufrat, 657 M). Ketika pasukan Ali hampir memenangkan pertempuran, pihak Muawiyah atas usul Amr bin Ash mengangkat lembaran-lembaran Mushaf Al-Qur'an di ujung tombak seraya berseru menuntut Arbitrase (**Tahkim**).\n\nAli menerima kesepakatan damai demi menghentikan pertumpahan darah sesama Muslim. Utusan ditetapkan: Abu Musa al-Asy'ari (wakil Ali) dan Amr bin Ash (wakil Muawiyah). Namun, keputusan arbitrase ini mengecewakan sebagian prajurit Ali yang kemudian keluar dari barisan (*Maroqo*) dan membentuk sekte radikal **Khawarij** dengan slogan *La Hukma Illa Lillah* (Tidak ada hukum selain milik Allah).",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Hujurat",
        ayat: 9,
        arabicText: "وَإِن طَائِفَتَانِ مِنَ الْمُؤْمِنِينَ اقْتَتَلُوا فَأَصْلِحُوا بَيْنَهُمَا",
        paraphrase: "Dan kalau ada dua golongan dari mereka yang beriman berperang hendaklah kamu damaikan antara keduanya."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        arabicText: "وَيْحَ عَمَّارٍ تَقْتُلُهُ الْفِئَةُ الْبَاغِيَةُ",
        matan: "Waiha 'Ammar taqtuluhul fi'atul baghiyah...",
        terjemahan: "Kasihan Ammar, ia akan dibunuh oleh kelompok pemberontak (pembangkang otoritas yang sah)."
      }
    ],
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Ibnu Katsir, Al-Bidayah wan-Nihayah", "Al-Mas'udi, Muruj adz-Dzahab"]
  },
  {
    id: "h-syahid-ali",
    label: "Pertempuran Nahrawan & Syahidnya Ali bin Abi Thalib",
    category: "khulafaur-rasyidin",
    timeLabel: "658 - 661 M (38 - 40 H)",
    timeValue: 661,
    description: "Kelompok ekstremis Khawarij mengafirkan Ali bin Abi Thalib, Muawiyah, serta seluruh sahabat yang menerima proses Tahkim Siffin. Mereka memisahkan diri ke Harura dan Nahrawan, melancarkan aksi terorisme dan pembunuhan terhadap warga sipil yang tidak sependapat dengan doktrin mereka (termasuk pembunuhan kejam terhadap sahabat Abdullah bin Khabbab bin al-Aratt).\n\nKhalifah Ali berupaya melakukan dialog dan perdebatan ilmiyah melalui Ibnu Abbas, yang berhasil menyadarkan sebagian pengikut Khawarij untuk bertobat. Namun faksi radikal sisanya tetap melancarkan perang, sehingga Ali terpaksa memerangi mereka pada **Pertempuran Nahrawan** (658 M) dan menumpas kekuatan militer mereka.\n\nDendam atas kekalahan Nahrawan mendorong tiga konspirator Khawarij merencanakan pembunuhan serentak terhadap Ali di Kufah, Muawiyah di Damaskus, dan Amr bin Ash di Fustat. Hanya eksekusi terhadap Ali yang berhasil. Pada subuh 19 Ramadhan 40 H (661 M), saat Khalifah Ali berjalan menuju Masjid Kufah untuk memimpin shalat subuh, Ibnu Muljam menebaskan pedang beracun ke kepala Ali.\n\nAli bin Abi Thalib wafat dua hari kemudian sebagai Syahid. Sebelum wafat, beliau melarang perlakuan kejam terhadap pembunuhnya dan menginstruksikan agar Ibnu Muljam tidak disiksa melainkan dihukum secara adil *Qishash* tanpa melampaui batas. Wafatnya Ali menandai berakhirnya masa Khulafaur Rasyidin yang berlandaskan pola Kenabian (*Khilafah 'Ala Minhasjin Nubuwwah*).",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Ahzab",
        ayat: 23,
        arabicText: "مِّنَ الْمُؤْمِنِينَ رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ ۖ فَمِنْهُم مَّن قَضَىٰ نَحْبَهُ وَمِنْهُم مَّن يَنتَظِرُ",
        paraphrase: "Di antara orang-orang mukmin itu ada orang-orang yang menepati apa yang telah mereka janjikan kepada Allah; maka di antara mereka ada yang gugur."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi & Ahmad",
        arabicText: "مَنْ كُنْتُ مَوْلاَهُ فَعَلِيٌّ مَوْلاَهُ",
        matan: "Man kuntu maulahu fa-'Aliyyun maulahu...",
        terjemahan: "Barangsiapa yang menjadikanku sebagai pelindungnya, maka Ali juga adalah pelindungnya."
      }
    ],
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Ibnu Katsir, Al-Bidayah wan-Nihayah"]
  },

  // =========================================================================
  // EPOCH 4: DINASTI UMAYYAH (6 NODE) - DEEP EXPANSION
  // =========================================================================
  {
    id: "h-amul-jamaah",
    label: "Amul Jama'ah & Berdirinya Dinasti Umayyah",
    category: "umayyah",
    timeLabel: "661 M (41 H)",
    timeValue: 661,
    description: "Pasca syahidnya Ali, warga Kufah membaiat putra tertuanya, Hasan bin Ali, sebagai Khalifah. Namun, Muawiyah bin Abi Sufyan bergerak membawa pasukan besar dari Syam menuju Irak. Menyadari bahaya kehancuran total dan pertumpahan darah massal umat Islam, Hasan bin Ali menunjukkan jiwa kenegarawanan agung.\n\nPada Rabiul Awal 41 H (661 M) di Mada'in, Hasan melakukan keputusan bersejarah: mengundurkan diri dan menyerahkan kepemimpinan secara damai kepada Muawiyah demi persatuan umat. Tahun persatuan ini dicatat dalam sejarah sebagai **Amul Jama'ah** (Tahun Persatuan).\n\nMuawiyah mendirikan **Dinasti Umayyah** dan memindahkan pusat pemerintahan imperium dari Madinah/Kufah ke Damaskus (Suriah). Muawiyah merombak arsitektur politik Islam dari sistem pemilu musyawarah Khulafaur Rasyidin menjadi sistem *Monarki Dinasti* (herediter), dengan menunjuk putranya Yazid sebagai Putra Mahkota di akhir kekuasaannya.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Hujurat",
        ayat: 10,
        arabicText: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ",
        paraphrase: "Orang-orang beriman itu sesungguhnya bergandengan saudara. Sebab itu damaikanlah antara kedua saudaramu."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        arabicText: "إِنَّ ابْنِي هَذَا سَيِّدٌ وَلَعَلَّ اللَّهَ أَنْ يُصْلِحَ بِهِ بَيْنَ فِئَتَيْنِ عَظِيمَتَيْنِ مِنَ الْمُسْلِمِينَ",
        matan: "Inna-bni hadha sayyidun wa la'allallaha an yushliha bihi...",
        terjemahan: "Sesungguhnya cucuku ini (Hasan) adalah seorang pemimpin, dan semoga melalui dirinya Allah memusyawarahkan rekonsiliasi antara dua kelompok besar Muslimin."
      }
    ],
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Ibnu Katsir, Al-Bidayah wan-Nihayah"]
  },
  {
    id: "h-karbala",
    label: "Tragedi Karbala & Syahidnya Husain bin Ali",
    category: "umayyah",
    timeLabel: "680 M (10 Muharram 61 H)",
    timeValue: 680,
    description: "Penunjukan Yazid bin Muawiyah sebagai pewaris tahta diprotes oleh para senior sahabat di Madinah, terutama Husain bin Ali (cucu Rasulullah) dan Abdullah bin az-Zubair. Mereka menilai sistem penunjukan dinasti melanggar prinsip musyawarah syura Islam.\n\nMenerima ribuan surat undangan kepatuhan dari warga Kufah yang berjanji mendukungnya, Husain memutuskan berangkat menuju Irak bersama 72 anggota keluarga intinya. Namun, Gubernur Irak bentukan Yazid, Ubaidullah bin Ziyad, memblokir rombongan Husain di padang pasir **Karbala** (dekat Sungai Eufrat) dengan pasukan berkekuatan 4.000 prajurit pimpinan Umar bin Sa'ad.\n\nPada **10 Muharram 61 H** (Hari Asyura), setelah menolak menyerah pasrah pada kezaliman penguasa absolut, Husain dan seluruh pengikutnya bertempur gagah berani hingga gugur syahid. Kepala suci Husain dipenggal dan diarak ke Damaskus. Tragedi Karbala menjadi peristiwa paling memilukan dalam sejarah Islam, meninggalkan luka mendalam yang mempertegas demarkasi politik dan spiritual antara kelompok Sunni dan gerakan Syi'ah.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Ahzab",
        ayat: 33,
        arabicText: "إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا",
        paraphrase: "Sesungguhnya Allah bermaksud hendak menghilangkan dosa dari kamu, hai ahlul bait dan menyucikan kamu sebersih-bersihnya."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi",
        arabicText: "الْحَسَنُ وَالْحُسَيْنُ سَيِّدَا شَبَابِ أَهْلِ الْجَنَّةِ",
        matan: "Al-Hasan wal-Husain sayyida syababi ahlil jannah...",
        terjemahan: "Hasan dan Husain adalah dua pemimpin pemuda ahli surga."
      }
    ],
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Abu Mikhnaf, Maqtal al-Husayn"]
  },
  {
    id: "h-umayyah-ekspansi-barat",
    label: "Penaklukan Andalusia oleh Thariq bin Ziyad",
    category: "andalusia",
    timeLabel: "711 M (92 H)",
    timeValue: 711,
    description: "Di bawah masa keemasan kekhalifahan Walid bin Abdul Malik (705-715 M), Gubernur Afrika Utara Musa bin Nushair mengutus panglima Berbernya yang pemberani, **Thariq bin Ziyad**, untuk menyeberangi selat sempit yang memisahkan Afrika dan Eropa (yang kelak dinamakan *Jabal Thariq* / Gibraltar).\n\nPada Ramadhan 92 H (711 M), Thariq mendarat di Semenanjung Iberia (Spanyol) memimpin 7.000 hingga 12.000 pasukan. Menghadapi Raja Visigoth Roderick yang membawa 33.000 tentara berzirah, Thariq memerintahkan membakar armada kapal penyebarangannya seraya menyampaikan pidato pembakar semangat: 'Musuh di depan kalian dan lautan di belakang kalian! Tidak ada pilihan selain kejujuran bertempur dan kesabaran!'.\n\nDalam **Pertempuran Guadalete** (Wadi Lakka), pasukan Thariq menghancurkan tentara Visigoth dan Raja Roderick tewas tenggelam. Disusul kedatangan Musa bin Nushair, pasukan Islam membebaskan kota-kota utama Spanyol seperti Kordoba, Toledo, dan Sevilla, mendirikan wilayah peradaban baru yang makmur: **Al-Andalus**.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Baqarah",
        ayat: 249,
        arabicText: "كَم مِّن فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ",
        paraphrase: "Berapa banyak terjadi golongan yang sedikit dapat mengalahkan golongan yang banyak dengan izin Allah."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        matan: "Nabi mengabarkan penaklukan pulau di tengah laut oleh pasukan perang Muslim pertama",
        terjemahan: "Pasukan pertama dari umatku yang berperang mengarungi lautan telah dipastikan kebaikan bagi mereka."
      }
    ],
    sources: ["Ibnu Abdul Hakam, Futuh Misr wal-Maghrib", "Ibnu al-Athir, Al-Kamil fit-Tarikh"]
  },
  {
    id: "h-umayyah-ekspansi-timur",
    label: "Ekspansi Asia Tengah (Samarkand) & Sindh",
    category: "umayyah",
    timeLabel: "711 - 715 M (92 - 96 H)",
    timeValue: 712,
    description: "Bersamaan dengan penaklukan Spanyol di barat, Dinasti Umayyah melancarkan ekspansi akbar di front timur di bawah komando dua pemuda jenius militer yang ditunjuk oleh Gubernur Irak Hajjaj bin Yusuf: Qutaibah bin Muslim al-Bahili dan Muhammad bin Qasim.\n\n**Qutaibah bin Muslim** memimpin pasukan menembus wilayah Transoxiana (*Ma Wara'an-Nahr* / Asia Tengah). Beliau menaklukkan kota-kota benteng jalur sutra seperti Bukhara, Samarkand, dan Khwarizm, bahkan mencapai Kashgar di perbatasan Kekaisaran Dinasti Tang Tiongkok. Penaklukan ini menjadi pintu masuk Islamnya bangsa-bangsa Turkik dan Asia Tengah.\n\nSementara itu, **Muhammad bin Qasim** (yang baru berusia 17 tahun) memimpin pasukan mengepung wilayah Sindh (sekarang Pakistan dan India Barat). Beliau mengalahkan Raja Dahir di Pertempuran Aror (712 M) dan membebaskan kota Multan. Ini adalah tonggak pertama masuknya peradaban Islam ke anak benua India (*Subcontinent*).",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "An-Nur",
        ayat: 55,
        arabicText: "وَعَدَ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَعَمِلُوا الصَّالِحَاتِ لَيَسْتَخْلِفَنَّهُمْ فِي الْأَرْضِ",
        paraphrase: "Dan Allah telah berjanji kepada orang-orang yang beriman di antara kamu dan mengerjakan amal-amal yang saleh bahwa Dia sungguh-sungguh akan menjadikan mereka berkuasa di muka bumi."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        arabicText: "زُوِيَتْ لِيَ الأَرْضُ فَرَأَيْتُ مَشَارِقَهَا وَمَغَارِبَهَا وَإِنَّ أُمَّتِي سَيَبْلُغُ مُلْكُهَا مَا زُوِيَ لِي مِنْهَا",
        matan: "Zuwhite liyal ardhu fara'aitu masyariqaha wa magharibaha...",
        terjemahan: "Bumi diperlihatkan kepadaku dari ujung timur hingga ujung barat, dan sungguh kekuasaan umatku akan mencapai apa yang diperlihatkan kepadaku."
      }
    ],
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Chach Nama (Sejarah Penaklukan Sindh)"]
  },
  {
    id: "h-arabisasi-dinar",
    label: "Arabisasi Birokrasi & Pencetakan Dinar Islam",
    category: "umayyah",
    timeLabel: "695 M (76 H)",
    timeValue: 695,
    description: "Khalifah Abdul Malik bin Marwan (685-705 M) adalah arsitek konsolidasi internal Dinasti Umayyah. Setelah mengakhiri perang saudara Fitnah Kedua, beliau meluncurkan reformasi kedaulatan kebudayaan dan ekonomi paling berdampak dalam sejarah administrasi publik.\n\nPertama, beliau meresmikan **Arabisasi Birokrasi** (*Ta'rib ad-Dawawin*): mengganti penggunaan bahasa Yunani di Syam dan bahasa Pahlavi/Persia di Irak dengan Bahasa Arab sebagai bahasa resmi tunggal administrasi negara. Langkah ini mendorong penguasaan bahasa Arab masif oleh bangsa-bangsa taklukan.\n\nKedua, beliau melakukan **Reformasi Moneter Kedaulatan**: menghentikan penggunaan koin Bizantium dan Sassanid, serta mencetak mata uang kedaulatan Islam murni pertama—**Dinar Emas** dan **Dirham Perak** berukirkan kaligrafi Arab ayat Tauhid (QS. Al-Ikhlas) tanpa gambar wajah penguasa. Langkah ini memerdekakan ekonomi Islam dari ketergantungan mata uang asing.",
    branch: "jalur-sains",
    quranRefs: [
      {
        surah: "At-Taubah",
        ayat: 34,
        arabicText: "وَالَّذِينَ يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ وَلَا يُنفِقُونَهَا فِي سَبِيلِ اللَّهِ فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ",
        paraphrase: "Dan orang-orang yang menyimpan emas dan perak dan tidak menafkahkannya pada jalan Allah, maka beritahukanlah kepada mereka, (bahwa mereka akan mendapat) siksa yang pedih."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Penetapan standar timbangan Dinar (4.25 gram emas) dan Dirham zakat",
        terjemahan: "Standar penimbangan mata uang dan zakat ditetapkan mengikuti norma timbangan Makkah dan Madinah."
      }
    ],
    sources: ["Al-Baladhuri, Futuh al-Buldan", "Ibnu Khaldun, Al-Muqaddimah"]
  },
  {
    id: "h-umar-bin-abdulaziz",
    label: "Kekhalifahan Umar II & Pembukuan Hadits Pertama",
    category: "umayyah",
    timeLabel: "717 - 720 M (99 - 101 H)",
    timeValue: 718,
    description: "Masa kekhalifahan Umar bin Abdul Aziz (Umar II) yang singkat (hanya 2 tahun 5 bulan) sering dikenang sebagai masa keemasan *Khulafaur Rasyidin Kelima*. Beliau menghentikan tradisi kemewahan istana Umayyah, mengembalikan seluruh harta kekayaan pribadinya ke *Baitul Mal*, serta menghapus kewajiban pembayaran Jizyah bagi kaum *Mawali* (mualaf non-Arab).\n\nKeadilan sosial Umar II membuat perekonomian begitu sejahtera hingga petugas zakat kesulitan menemukan fakir miskin yang berhak menerima bantuan di seluruh wilayah Afrika Utara dan Syam. Beliau juga menghentikan tradisi celaan atas Ali bin Abi Thalib di mimbar-mimbar Jumat dan menggantinya dengan bacaan ayat keadilan (QS. An-Nahl: 90).\n\nDi bidang intelektual, Umar II mengantisipasi bahaya pemalsuan hadits dan hilangnya para perawi tua. Beliau mengeluarkan dekrit kerajaan pertama yang menginstruksikan Gubernur Madinah (Abu Bakar bin Muhammad bin Amr bin Hazm) dan ulama besar **Ibnu Syihab Az-Zuhri** untuk mengumpulkan, menyeleksi, dan membukukan hadits-hadits Rasulullah ﷺ secara resmi.",
    branch: "jalur-pemikiran",
    quranRefs: [
      {
        surah: "An-Nahl",
        ayat: 90,
        arabicText: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ",
        paraphrase: "Sesungguhnya Allah menyuruh (kamu) berlaku adil dan berbuat kebajikan, memberi kepada kaum kerabat."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Abu Dawud",
        arabicText: "إِنَّ اللَّهَ يَبْعَثُ لِهَذِهِ الأُمَّةِ عَلَى رَأْسِ كُلِّ مِائَةِ سَنَةٍ مَنْ يُجَدِّدُ لَهَا دِينَهَا",
        matan: "Innallaha yab'athu li-hadhihil ummati 'ala ra'si kulli mi'ati sanatin...",
        terjemahan: "Sesungguhnya Allah mengutus bagi umat ini pada setiap penghujung seratus tahun orang yang akan memperbaharui (pemahaman) agamanya."
      }
    ],
    sources: ["Ibnu Abdil Hakam, Sirat Umar ibn Abdil Aziz", "As-Suyuti, Tarikh Al-Khulafa"]
  },

  // =========================================================================
  // EPOCH 5: DINASTI ABBASIYAH & GOLDEN AGE (10 NODE) - DEEP EXPANSION
  // =========================================================================
  {
    id: "h-revolusi-abbasiyah",
    label: "Revolusi Abbasiyah & Pembangunan Baghdad",
    category: "abbasiyah",
    timeLabel: "750 M (132 H)",
    timeValue: 750,
    description: "Ketidakpuasan mendalam kaum *Mawali* (non-Arab), keturunan Ali, dan ulama atas nepotisme Dinasti Umayyah dimanfaatkan oleh jaringan rahasia keturunan Abbas bin Abdul Muthalib (paman Nabi). Dipimpin oleh jenderal berkharisma **Abu Muslim Al-Khurasani**, revolusi meletus di Khurasan dengan mengibarkan bendera hitam bertuliskan slogan *Ar-Rida min Ali Muhammad*.\n\nPasukan revolusi mengalahkan Khalifah Umayyah terakhir (Marwan II) pada **Pertempuran Sungai Zab** (750 M) di Irak. Berdirilah Kekhalifahan Abbasiyah dengan Abu al-Abbas as-Saffah sebagai Khalifah pertama.\n\nKhalifah kedua, **Abu Ja'far Al-Mansur** (754-775 M), memindahkan ibukota ke Irak dan membangun kota baru yang belum pernah ada tandingannya: **Baghdad Kota Bundar** (*Madinat as-Salam*) pada 762 M di tepi Sungai Tigris. Baghdad tumbuh pesat menjadi pusat gravitasi perdagangan, politik, dan kebudayaan terbesar di dunia dengan populasi menembus 1 juta jiwa.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Qashash",
        ayat: 5,
        arabicText: "وَنُرِيدُ أَن نَّمُنَّ عَلَى الَّذِينَ اسْتُضْعِفُوا فِي الْأَرْضِ وَنَجْعَلَهُمْ أَئِمَّةً وَنَجْعَلَهُمُ الْوَارِثِينَ",
        paraphrase: "Dan Kami hendak memberi karunia kepada orang-orang yang tertindas di bumi itu dan hendak menjadikan mereka pemimpin dan menjadikan mereka orang-orang yang mewarisi (bumi)."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Sabda Nabi tentang kepemimpinan berganti dan pentingnya keadilan universal",
        terjemahan: "Kedudukan kekuasaan akan terus berganti hingga keadilan ditegakkan di seluruh penjuru."
      }
    ],
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Al-Khatib al-Baghdadi, Tarikh Baghdad"]
  },
  {
    id: "h-perang-talas",
    label: "Pertempuran Talas & Teknologi Kertas Tiongkok",
    category: "abbasiyah",
    timeLabel: "751 M (133 H)",
    timeValue: 751,
    description: "Pada Juli 751 M, terjadi perselisihan wilayah pengaruh di Asia Tengah antara ekspedisi militer Kekaisaran Dinasti Tang Tiongkok (pimpinan Gao Xianzhi) melawan pasukan Kekhalifahan Abbasiyah (pimpinan Ziyad bin Salih) di tepi **Sungai Talas** (sekarang wilayah perbatasan Kazakhstan dan Kirgistan).\n\nPertempuran 5 hari itu berakhir dengan kemenangan telak pasukan Muslim setelah suku Karluk berbalik membela Abbasiyah. Kemenangan Talas menghentikan ekspansi Dinasti Tang ke barat dan mengukuhkan Islamisasi Asia Tengah.\n\nDampak peradaban terbesar dari perang ini adalah ditawannya perajin kertas Tiongkok. Dari para tawanan perang di Samarkand ini, umat Islam mempelajari rahasia pembuatan kertas dari serat selulosa/kain bekas. Pabrik kertas pertama didirikan di Baghdad pada 794 M, menggantikan bahan mahal papirus dan perkamen kulit. Penemuan manufaktur kertas murah ini memicu **Revolusi Literasi Massal** yang membidani kelahiran Zaman Keemasan Islam (*Islamic Golden Age*).",
    branch: "jalur-sains",
    quranRefs: [
      {
        surah: "Al-'Alaq",
        ayat: 4,
        arabicText: "الَّذِي عَلَّمَ بِالْقَلَمِ ﴿٤﴾ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ",
        paraphrase: "Yang mengajar (manusia) dengan perantaran kalam/pena, Dia mengajar kepada manusia apa yang tidak diketahuinya."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi",
        arabicText: "الْكَلِمَةُ الْحِكْمَةُ ضَالَّةُ الْمُؤْمِنِ فَحَيْثُ وَجَدَهَا فَهُوَ أَحَقُّ بِهَا",
        matan: "Al-kalimatul hikmatu dhallatul mu'min...",
        terjemahan: "Hikmah dan ilmu pengetahuan adalah barang hilang kepunyaan orang mukmin. Di mana pun ia menemukannya, ia paling berhak mengambilnya."
      }
    ],
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Jonathan Bloom, Paper Before Print"]
  },
  {
    id: "h-baitul-hikmah-sains",
    label: "Baitul Hikmah & Zaman Keemasan Sains",
    category: "abbasiyah",
    timeLabel: "Abad ke-8 - 10 M (170 - 300 H)",
    timeValue: 830,
    description: "Puncak keemasan intelektual Islam terjadi di bawah naungan Khalifah Harun Ar-Rasyid (786-809 M) dan putranya Al-Ma'mun (813-833 M), yang mendirikan akedemi riset terbesar dunia: **Baitul Hikmah** (*House of Wisdom*) di Baghdad.\n\nBaitul Hikmah memelopori *Gerakan Penerjemahan Masif* karya-karya filsafat, sains, astronomi, matematika, dan kedokteran dari bahasa Yunani, Sanskerta, Persia, dan Suryani ke dalam Bahasa Arab. Para penerjemah (seperti Hunain bin Ishaq) dibayar dengan emas seberat buku yang diselesaikannya.\n\nDari rahim lembaga ini lahir penemuan sains dunia: **Al-Khawarizmi** meletakkan matematika Aljabar (*Kitab al-Jabr wa'l-Muqabala*) dan Algoritma; **Ibnu Sina** (*Avicenna*) merumuskan standar medis dunia (*Al-Qanun fi at-Tibb*); **Al-Razi** membedakan penyakit cacar dan campak; serta **Ibn al-Haytham** (*Alhazen*) menciptakan Metode Ilmiah Eksperimental dan teori Optik modern.",
    branch: "jalur-sains",
    quranRefs: [
      {
        surah: "Az-Zumar",
        ayat: 9,
        arabicText: "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ",
        paraphrase: "Katakanlah: 'Adakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui?'."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi",
        arabicText: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
        matan: "Man salaka thariqan yaltamisu fihi 'ilman...",
        terjemahan: "Barangsiapa menempuh jalan untuk menuntut ilmu, Allah akan mudahkan baginya jalan menuju surga."
      }
    ],
    sources: ["George Saliba, Islamic Science and the Making of the European Renaissance", "Jim Al-Khalili, The House of Wisdom"]
  },
  {
    id: "h-4mazhab-fiqh",
    label: "Kristalisasi Fiqh 4 Mazhab & Ar-Risalah",
    category: "abbasiyah",
    timeLabel: "Abad ke-8 - 9 M",
    timeValue: 820,
    description: "Pertumbuhan masyarakat imperium memicu maraknya ijtihad hukum Islam. Terjadi kodifikasi sistematik hukum (*Fiqh*) Sunni ke dalam empat madrasah mazhab utama:\n\n1. **Mazhab Hanafi** (Imam Abu Hanifah, Kufah): Menekankan sintesis *Ra'yu* (rasionalitas analitis), *Qiyas*, dan *Istihsan*.\n2. **Mazhab Maliki** (Imam Malik bin Anas, Madinah): Menekankan teks Hadits dan *'Amal Ahl al-Madinah* (Tradisi Praktik Penduduk Madinah) sebagaimana dirumuskan dalam kitab *Al-Muwatta'*.\n3. **Mazhab Syafi'i** (Imam Muhammad bin Idris Asy-Syafi'i): Menjadi arsitek sintesis agung antara aliran Ra'yu dan Hadits. Dalam karya monumental **Ar-Risalah**, beliau merumuskan metodologi **Ushul Fiqh** empat pilar: Al-Qur'an, Sunnah, Ijma', dan Qiyas.\n4. **Mazhab Hanbali** (Imam Ahmad bin Hanbal, Baghdad): Menekankan ketaatan tekstual ketat pada naskah Al-Qur'an dan Hadits (*Atsar*).",
    branch: "jalur-pemikiran",
    quranRefs: [
      {
        surah: "An-Nisa",
        ayat: 59,
        arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ",
        paraphrase: "Hai orang-orang yang beriman, taatilah Allah dan taatilah Rasul (Nya), dan ulil amri di antara kamu."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Abu Dawud & Tirmidzi",
        arabicText: "إِنَّ الْعُلَمَاءَ وَرَثَةُ الأَنْبِيَاءِ",
        matan: "Innal 'ulama'a warathatul anbiya'...",
        terjemahan: "Sesungguhnya para ulama adalah pewaris para Nabi."
      }
    ],
    sources: ["Imam Asy-Syafi'i, Ar-Risalah", "Wael B. Hallaq, A History of Islamic Legal Theories"]
  },
  {
    id: "h-kutubus-sittah",
    label: "Kodifikasi Kitab Hadits Shahih (Kutubus Sittah)",
    category: "abbasiyah",
    timeLabel: "Abad ke-9 M (200 - 300 H)",
    timeValue: 860,
    description: "Abad ke-3 Hijriah menjadi puncak *Zaman Penyaringan Hadits*. Para ulama melanglang buana menempuh puluhan ribu kilometer melintasi Jazirah Arab, Irak, Syam, Mesir, hingga Khurasan untuk mengumpulkan, menguji sanad, dan memverifikasi integritas perawi (*Jarh wa Ta'dil*).\n\n**Imam Al-Bukhari** (810-870 M) menyaring 600.000 riwayat selama 16 tahun menjadi kitab induk teragung: **Shahih al-Bukhari** (*Al-Jami' as-Sahih*), dengan syarat kesahihan paling ketat (keharusan pertemu wujud *Liqa'* antar-perawi). Muridnya, **Imam Muslim** (821-875 M), menyusun **Shahih Muslim** dengan keunggulan sistematika bab.\n\nEmpat ulama besar lainnya melengkapi rujukan utama Sunni yang dinamakan **Kutubus Sittah** (Enam Kitab Utama): Sunan Abu Dawud, Sunan at-Tirmidzi, Sunan an-Nasa'i, dan Sunan Ibnu Majah. Usaha raksasa ini mengamankan otentisitas ajaran Rasulullah dari ancaman pemalsuan hadits.",
    branch: "jalur-pemikiran",
    quranRefs: [
      {
        surah: "Al-Hujurat",
        ayat: 6,
        arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا",
        paraphrase: "Hai orang-orang yang beriman, jika datang kepadamu orang fasik membawa suatu berita, maka periksalah dengan teliti (tabayyun)."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi & Abu Dawud",
        arabicText: "نَضَّرَ اللَّهُ امْرَأً سَمِعَ مَقَالَتِي فَوَعَاهَا فَحَفِظَهَا فَأَدَّاهَا كَمَا سَمِعَهَا",
        matan: "Nadhdharallahu-mra'an sami'a maqalati...",
        terjemahan: "Semoga Allah mencerahkan wajah seseorang yang mendengar perkataanku, lalu memahami, menghafal, dan menyampaikannya persis sebagaimana yang ia dengar."
      }
    ],
    sources: ["Muhammad Mustafa Azami, Studies in Hadith Methodology and Literature"]
  },
  {
    id: "h-debat-teologi",
    label: "Perdebatan Mihnah & Akidah Asy'ariyah",
    category: "abbasiyah",
    timeLabel: "Abad ke-9 M (218 - 300 H)",
    timeValue: 900,
    description: "Pergeseran ideologi terjadi saat Khalifah Al-Ma'mun menjadikan doktrin teologi rasionalis **Mu'tazilah** sebagai mazhab resmi negara. Pada 833 M, pemerintah memberlakukan inkuisisi ideologi (**Mihnah**): memaksakan ajaran bahwa Al-Qur'an adalah makhluk (diciptakan) dan memenjarakan para ulama yang menolak.\n\n**Imam Ahmad bin Hanbal** tampil sebagai pahlawan pembela sunnah. Meskipun dipenjara dan dicambuk di depan umum selama kekuasaan tiga khalifah (Al-Ma'mun, Al-Mu'tasim, Al-Watsiq), beliau teguh bertahan menegaskan bahwa Al-Qur'an adalah *Kalamullah* (Firman Allah yang Azali). Mihnah akhirnya dihentikan oleh Khalifah Al-Mutawakkil pada 848 M.\n\nSebagai respon terhadap perdebatan teologis yang kian runcing, **Imam Abu al-Hasan al-Asy'ari** (260-324 H) dan **Imam Abu Mansur al-Maturidi** merumuskan mazhab teologi pertengahan (**Asy'ariyah & Maturidiyah**). Mereka menggunakan logika kalam rasional untuk mempertahankan teks wahyu, menjadi pilar utama akidah **Ahlus Sunnah wal Jama'ah** hingga kini.",
    branch: "jalur-pemikiran",
    quranRefs: [
      {
        surah: "Ali 'Imran",
        ayat: 7,
        arabicText: "هُوَ الَّذِي أَنزَلَ عَلَيْكَ الْكِتَابَ مِنْهُ آيَاتٌ مُّحْكَمَاتٌ هُنَّ أُمُّ الْكِتَابِ وَأُخَرُ مُتَشَابِهَاتٌ",
        paraphrase: "Dialah yang menurunkan Al-Kitab kepadamu. Di antara (isi)nya ada ayat-ayat yang muhkamat, itulah pokok-pokok isi Al-Qur'an dan yang lain (ayat-ayat) mutasyabihat."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        matan: "Larangan perdebatan kusir yang memecah belah persatuan agama",
        terjemahan: "Tinggalkan perdebatan yang merusak kebersihan hati dan keutuhan persatuan."
      }
    ],
    sources: ["Ibnu Katsir, Al-Bidayah wan-Nihayah", "W. Montgomery Watt, The Formative Period of Islamic Thought"]
  },
  {
    id: "h-andalusia-kordoba",
    label: "Kemegahan Khilafah Kordoba di Andalusia",
    category: "andalusia",
    timeLabel: "929 - 1031 M (316 - 422 H)",
    timeValue: 929,
    description: "Satu-satunya pangeran Umayyah yang lolos dari pembantaian Abbasiyah, **Abdurrahman Ad-Dakhil** (*Al-Saqr Quraisy* / Elang Quraisy), lari ke Spanyol dan mendirikan Emirat Kordoba pada 756 M.\n\nPuncak kejayaan terjadi di bawah **Abdurrahman III** (912-961 M) yang mengumumkan berdiri **Khilafah Kordoba** pada 929 M. Kordoba tumbuh menjadi pusat peradaban paling megah di Eropa yang dijuluki *Permata Dunia* (*The Jewel of the World*). Kota ini memiliki jalan beraspal dengan penerangan lampu malam, 900 pemandian umum, dan Masjid Agung Kordoba (*Mezquita*).\n\nPerpustakaan Kordoba di bawah Khalifah Al-Hakam II menyimpan lebih dari 400.000 volume buku. Di sinilah terwujud keharmonisan koeksistensi lintas agama (*La Convivencia*), tempat para ilmuwan Muslim, Kristen, dan Yahudi (seperti Maimonides dan Ibnu Rusyd) bekerja bersama meneliti ilmu pengetahuan.",
    branch: "jalur-sains",
    quranRefs: [
      {
        surah: "Ar-Rahman",
        ayat: 60,
        arabicText: "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ",
        paraphrase: "Tidak ada balasan kebaikan selain kebaikan (pula)."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Pentingnya menebar kedamaian dan keindahan karya peradaban",
        terjemahan: "Sesungguhnya Allah itu Maha Indah dan menyukai keindahan."
      }
    ],
    sources: ["W. Montgomery Watt, A History of Islamic Spain", "Maria Rosa Menocal, The Ornament of the World"]
  },
  {
    id: "h-fatimiyah-azhar",
    label: "Dinasti Fatimiyah & Pendirian Al-Azhar",
    category: "abbasiyah",
    timeLabel: "969 M (358 H)",
    timeValue: 969,
    description: "Di Afrika Utara, gerakan Syi'ah Ismailiyah mendirikan Dinasti Fatimiyah (diambil dari nama Fatimah az-Zahra). Pada 969 M, panglima Fatimiyah, **Jauhar as-Siqilli** (asal Sisilia), menaklukkan Mesir dari Dinasti Ikhsyidiyah.\n\nJauhar mendirikan kota benteng baru bernama **Al-Qahirah** (Kairo / Kota Kemenangan) dan meletakkan batu pertama pembangunan **Masjid Al-Azhar** pada 970 M. Pada 975 M, Al-Azhar diresmikan sebagai lembaga perguruan tinggi universitas.\n\nKetika Dinasti Ayyubiyah (Salahuddin Al-Ayyubi) mengembalikan Mesir ke pangkuan Sunni pada 1171 M, Al-Azhar ditransformasikan menjadi benteng keagamaan Sunni terbesar di dunia. Hingga kini, Universitas Al-Azhar terus berdiri sebagai otoritas ilmu syariat dan rujukan keislaman tertua yang tak pernah padam.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "At-Taubah",
        ayat: 122,
        arabicText: "فَلَوْلَا نَفَرَ مِن كُلِّ فِرْقَةٍ مِّنْهُمْ طَائِفَةٌ لِّيَتَفَقَّهُوا فِي الدِّينِ",
        paraphrase: "Mengapa tidak pergi dari tiap-tiap golongan di antara mereka beberapa orang untuk memperdalam pengetahuan mereka tentang agama?"
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi",
        matan: "Keutamaan majlis ilmu dan lembaga pendidikan bagi kemuliaan umat",
        terjemahan: "Jika kalian melewati taman-taman surga di dunia, maka singgahlah (yaitu majelis-majelis ilmu)."
      }
    ],
    sources: ["Ayman Fuad Sayyid, The Fatimids in Egypt", "Heinz Halm, The Empire of the Mahdi"]
  },
  {
    id: "h-al-ghazali-ibnu-rusyd",
    label: "Dialektika Filsafat: Al-Ghazali vs Ibnu Rusyd",
    category: "abbasiyah",
    timeLabel: "Abad 11 - 12 M (490 - 580 H)",
    timeValue: 1095,
    description: "Puncak perdebatan metodologi pemikiran Islam diwakili oleh dua raksasa intelektual: **Hujjatul Islam Abu Hamid Al-Ghazali** (1058-1111 M) di timur dan **Ibnu Rusyd** (*Averroes*, 1126-1198 M) di barat.\n\nAl-Ghazali, yang pernah menjabat rektor Madrasah Nizamiyah Baghdad, mengalami krisis spiritual yang mendorongnya meneliti jalan filsafat, kalam, dan sufisme. Beliau menulis mahakarya **Ihya 'Ulumuddin** (Menghidupkan Kembali Ilmu-Ilmu Agama) dan mengekritik bahaya absolutisme logika Aristotelian yang melanggar akidah dalam kitab **Tahafut al-Falasifah** (Kerancuan Para Filsuf).\n\nSatu abad kemudian di Kordoba, filsuf dan hakim agung **Ibnu Rusyd** menulis jawaban rasional dalam **Tahafut at-Tahafut** (Kerancuan dari Kerancuan). Ibnu Rusyd menegaskan bahwa antara Wahyu dan Akal Sehat (*Hikmah*) tidak ada kontradiksi sama sekali karena keduanya berasal dari sumber kebenaran Ilahi yang sama. Dialektika pemikiran ini kelak diterjemahkan ke bahasa Latin dan membidani lahirnya abad pencerahan Eropa (*Renaissance*).",
    branch: "jalur-pemikiran",
    quranRefs: [
      {
        surah: "Al-Mujadilah",
        ayat: 11,
        arabicText: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
        paraphrase: "Niscaya Allah akan meninggikan orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu pengetahuan beberapa derajat."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi",
        matan: "Dialektika pencarian kebenaran dan integrasi syariat dan akal",
        terjemahan: "Hikmah dan kebenaran adalah tujuan pencarian setiap cendekiawan beriman."
      }
    ],
    sources: ["Al-Ghazali, Tahafut al-Falasifah", "Ibnu Rusyd, Tahafut at-Tahafut", "Majid Fakhry, A History of Islamic Philosophy"]
  },
  {
    id: "h-runtuh-baghdad",
    label: "Invasi Mongol (Hulagu Khan) & Kiamat Baghdad",
    category: "abbasiyah",
    timeLabel: "1258 M (656 H)",
    timeValue: 1258,
    description: "Pada awal abad ke-13, bangsa Mongol melancarkan gelombang invasi paling destruktif dalam sejarah dunia. Panglima **Hulagu Khan** (cucu Genghis Khan) memimpin 150.000 tentara Mongol mengepung kota Baghdad pada awal 1258 M.\n\nSetelah Khalifah Abbasiyah terakhir di Baghdad, Al-Musta'sim Billah, menyerahkan diri, pasukan Mongol melakukan pembantaian massal yang mengerikan selama 40 hari. Diperkirakan 800.000 hingga 2 juta jiwa warga Baghdad tewas dibantai.\n\nPerpustakaan Baitul Hikmah dan ratusan ribu naskah ilmu pengetahuan dibuang ke Sungai Tigris hingga air sungai dilaporkan berwarna hitam oleh tinta buku dan merah oleh darah para ulama. Peristiwa tragis ini menghancurkan infrastruktur irigasi Mesopotamia dan menutup lembaran Zaman Keemasan Islam Era Klasik secara permanen.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Ali 'Imran",
        ayat: 140,
        arabicText: "وَتِلْكَ الْأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ",
        paraphrase: "Dan masa (kejayaan dan kehancuran) itu Kami pergilirkan di antara manusia."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Abu Dawud",
        arabicText: "يُوشِكُ الأُمَمُ أَنْ تَتَدَاعَى عَلَيْكُمْ كَمَا تَتَدَاعَى الأَكَلَةُ إِلَى قَصْعَتِهَا... قَالُوا وَمِنْ قِلَّةٍ نَحْنُ يَوْمَئِذٍ؟ قَالَ بَلْ أَنْتُمْ كَثِيرٌ وَلَكِنَّكُمْ غُثَاءٌ كَغُثَاءِ السَّيْلِ",
        matan: "Yushikul umamu an tatada'a 'alaikum...",
        terjemahan: "Hampir tiba suatu masa di mana bangsa-bangsa berebut mengerumuni kalian bagai orang lapar mengerumuni hidangan makanan... karena penyakit Al-Wahn (cinta dunia dan takut mati)."
      }
    ],
    sources: ["Ibnu Katsir, Al-Bidayah wan-Nihayah", "At-Thabari / Rashid al-Din, Jami' at-Tawarikh"]
  },

  // =========================================================================
  // EPOCH 6: PERANG SALIB & ERA MAMLUK (4 NODE) - DEEP EXPANSION
  // =========================================================================
  {
    id: "h-manzikert-salib",
    label: "Pertempuran Manzikert & Perang Salib Pertama",
    category: "abbasiyah",
    timeLabel: "1071 - 1099 M (463 - 492 H)",
    timeValue: 1099,
    description: "Pada **Pertempuran Manzikert** (1071 M), Sultan Seljuk **Alp Arslan** memenangkan pertempuran fenomenal atas Kekaisaran Bizantium dan menawan Kaisar Romanos IV Diogenes. Kemenangan ini membuka gerbang migrasi suku-suku Turkik menembus semenanjung Anatolia (Turki).\n\nKekalahan Bizantium mendorong Kaisar Alexios I Komnenos meminta bantuan militer ke Eropa Barat. Pada Konsili Clermont (1095 M), **Paus Urbanus II** mengumandangkan pidato provokatif memicu **Perang Salib Pertama** (*Crusades*) untuk merebut Yerusalem.\n\nMemanfaatkan kondisi perpecahan internal kerajaan-kerajaan Muslim (Seljuk, Fatimiyah, Abbasiyah), pasukan Salib berhasil menembus Syam dan merebut Yerusalem pada 15 Juli 1099 M. Pasukan Salib melancarkan pembantaian kejam selama 3 hari terhadap 70.000 warga Muslim dan Yahudi di dalam kompleks Masjidil Aqsha.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Anfal",
        ayat: 46,
        arabicText: "وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ",
        paraphrase: "Dan taatlah kepada Allah dan Rasul-Nya dan janganlah kamu berbantah-bantahan, yang menyebabkan kamu menjadi gentar dan hilang kekuatanmu."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Peringatan akan bahaya keterpecahan politik internal di depan musuh",
        terjemahan: "Bersatulah dan jangan bercerai-berai karena kehancuran berawal dari perpecahan."
      }
    ],
    sources: ["Ibnu al-Athir, Al-Kamil fit-Tarikh", "Steven Runciman, A History of the Crusades"]
  },
  {
    id: "h-salahuddin-hittin",
    label: "Pertempuran Hattin & Pembebasan Yerusalem",
    category: "abbasiyah",
    timeLabel: "1187 M (583 H)",
    timeValue: 1187,
    description: "Setelah perjuangan persatuan yang dirintis oleh Imaduddin Zengi dan Nuruddin Zengi, pahlawan legendaris **Salahuddin Al-Ayyubi** (*Saladin*) mengakhiri kekuasaan Dinasti Fatimiyah di Mesir (1171 M) dan menyatukan Mesir dan Suriah di bawah bendera Dinasti Ayyubiyah.\n\nPada 4 Juli 1187 M, Salahuddin memimpin 30.000 pasukan menghancurkan tentara gabungan Kerajaan Salib Yerusalem di bukit tandus **Hattin** (dekat Danau Tiberias). Dengan memotong akses air minum pasukan Salib dan membakar semak-semak kering, Salahuddin berhasil menawan Raja Guy de Lusignan dan melumpuhkan kekuatan utama prajurit Templar.\n\nPada 2 Oktober 1187 M (27 Rajab, bertepatan malam Isra' Mi'raj), Salahuddin membebaskan kota Yerusalem setelah 88 tahun pendudukan Salib. Berbeda dengan pembantaian 1099 M, Salahuddin menunjukkan akhlak kesatriaan Islam: melarang penjarahan, membebaskan tawanan miskin tanpa tebusan, serta menjamin keselamatan warga Kristen yang ingin meninggalkan kota secara damai.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Isra",
        ayat: 105,
        arabicText: "وَبِالْحَقِّ أَنزَلْنَاهُ وَبِالْحَقِّ نَزَلَ",
        paraphrase: "Dan Kami turunkan (Al-Qur'an) itu dengan sebenar-benarnya dan Al-Qur'an itu telah turun dengan membawa kebenaran."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Ahmad",
        matan: "Keutamaan prajurit pembebas Baitul Maqdis yang penuh kesatriaan",
        terjemahan: "Akan selalu ada sekelompok dari umatku yang menegakkan kebenaran di sekitar Baitul Maqdis."
      }
    ],
    sources: ["Baha ad-Din ibn Syaddad, Al-Nawadir as-Sultaniyya", "Ibnu al-Athir, Al-Kamil fit-Tarikh"]
  },
  {
    id: "h-mamluk-ainjalut",
    label: "Pertempuran Ain Jalut & Penumpasan Mongol",
    category: "abbasiyah",
    timeLabel: "1260 M (658 H)",
    timeValue: 1260,
    description: "Pasca runtuhnya Baghdad (1258 M) dan jatuhnya Damaskus, gelombang penghancuran ekspansi Mongol bergerak menuju Mesir—benteng pertahanan terakhir Islam. Hulagu Khan mengirim utusan ke Kairo menuntut penyerahan diri tanpa syarat.\n\nPemimpin Dinasti Mamluk Mesir, **Sultan Saifuddin Qutuz** bersama panglimanya **Ruknuddin Baibars**, mengambil tindakan tegas: mengeksekusi utusan Mongol dan memobilisasi seluruh kekuatan prajurit Mamluk menuju Lembah **Ain Jalut** (Palestina) pada 3 September 1260 M.\n\nKetika barisan Mamluk terdesak oleh kavaleri Mongol pimpinan Kitbuqa, Sultan Qutuz melempar helm perangnya ke udara dan berteriak memecah angkasa: *Wa Islamah! Wa Islamah!* (Wahai Islamku!). Teriakan ini membakar semangat juang prajurit Mamluk untuk melakukan serangan balik mematikan. Kitbuqa tewas dan pasukan Mongol dihancurkan secara mutlak. Kemenangan Ain Jalut menyelamatkan peradaban Islam dan Eropa dari penghancuran total Mongol.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Baqarah",
        ayat: 249,
        arabicText: "كَم مِّن فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ ۗ وَاللَّهُ مَعَ الصَّابِرِينَ",
        paraphrase: "Berapa banyak terjadi golongan yang sedikit dapat mengalahkan golongan yang banyak dengan izin Allah. Dan Allah beserta orang-orang yang sabar."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Pertolongan Allah turun bersama kesabaran dan keteguhan di medan ujian",
        terjemahan: "Pertolongan Allah turun bersama kesabaran dan keteguhan di medan ujian."
      }
    ],
    sources: ["Al-Maqrizi, As-Suluk li-Ma'rifat Duwal al-Muluk", "Ibnu Katsir, Al-Bidayah wan-Nihayah"]
  },
  {
    id: "h-kejatuhan-granada",
    label: "Kejatuhan Granada & Berakhirnya Andalusia",
    category: "andalusia",
    timeLabel: "1492 M (897 H)",
    timeValue: 1492,
    description: "Setelah kemunduran Khilafah Kordoba, wilayah Andalusia terpecah menjadi kerajaan-kerajaan kecil (*Muluk th-Thawa'if*). Penikahan politik Raja Ferdinand II dari Aragon dan Ratu Isabella I dari Kastilia menyatukan kekuatan Kristen Spanyol (*Reconquista*).\n\nSatu per satu kota Islam jatuh hingga tersisa Kesultanan Granada di bawah Dinasti Nasri. Setelah pengepungan ketat selama delapan bulan di benteng **Alhambra**, Sultan Muhammad XII (**Boabdil**) menyerahkan kunci kota Granada pada 2 Januari 1492 M, mengakhiri 781 tahun keberadaan kekuasaan peradaban Islam di Semenanjung Iberia.\n\nMeskipun Perjanjian Granada menjamin kebebasan beragama, penguasa Spanyol melanggar janji tersebut melalui Inkuisisi Spanyol: memaksa pengusiran massal ratusan ribu warga Muslim dan Yahudi, membakar perpustakaan naskah Arab, serta melarang penggunaan Bahasa Arab.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Anfal",
        ayat: 46,
        arabicText: "وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ",
        paraphrase: "Dan janganlah kamu berbantah-bantahan, yang menyebabkan kamu menjadi gentar dan hilang kekuatanmu."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi",
        matan: "Ibnu Umar menceritakan akibat kemewahan berlebihan memicu kejatuhan negeri",
        terjemahan: "Jika manusia telah larut dalam gaya hidup luks dan meninggalkan perjuangan, kehancuran melanda."
      }
    ],
    sources: ["L.P. Harvey, Islamic Spain 1250 to 1500", "Ibnu Khaldun, Kitab al-'Ibar"]
  },

  // =========================================================================
  // EPOCH 7: TIGA KERAJAAN BESAR & NUSANTARA (7 NODE) - DEEP EXPANSION
  // =========================================================================
  {
    id: "h-utsmani-konstantinopel",
    label: "Penaklukan Konstantinopel oleh Mehmed II",
    category: "tiga-kerajaan",
    timeLabel: "1453 M (857 H)",
    timeValue: 1453,
    description: "Konstantinopel, ibukota Kekaisaran Bizantium, terkenal sebagai benteng paling tak tertembus di dunia dengan tembok pertahanan berlapis tiga (*Tembok Theodosian*) dan rantai raksasa yang menutup teluk *Golden Horn*.\n\nSultan Utsmani yang baru berusia 21 tahun, **Mehmed II** (**Al-Fatih** / Sang Penakluk), memimpin 80.000 pasukan dengan perencanaan taktis melampaui zamannya. Beliau memesan meriam raksasa (*Dardanelles Gun* / Meriam Basilic) yang dirancang pakar teknik Urban untuk menggempur benteng.\n\nKetika rantai teluk tak bisa ditembus, Al-Fatih melancarkan strategi spektakuler: memindahkan 70 kapal perang melintasi daratan bukit Galata menggunakan gelondongan kayu berpelumas dalam satu malam! Pada subuh **29 Mei 1453 M** (20 Jumadil Ula 857 H), serangan umum berhasil membobol benteng. Al-Fatih menggenapi hadits kenabian, menguburkan Bizantium, merubah gereja Hagia Sophia menjadi Masjid *Ayasofya*, dan menjadikan kota tersebut sebagai ibukota **Kostantiniyye** (Istanbul).",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Fath",
        ayat: 1,
        arabicText: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
        paraphrase: "Sesungguhnya Kami telah memberikan kepadamu kemenangan yang nyata."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Ahmad",
        arabicText: "لَتُفْتَحَنَّ الْقُسْطَنْطِينِيَّةُ فَلَنِعْمَ الْأَمِيرُ أَمِيرُهَا وَلَنِعْمَ الْجَيْشُ ذَلِكَ الْجَيْشُ",
        matan: "Latuftahanna al-Qustantiniyyah...",
        terjemahan: "Konstantinopel pasti akan ditaklukkan. Sebaik-baik pemimpin adalah pemimpinnya, dan sebaik-baik pasukan adalah pasukannya."
      }
    ],
    sources: ["Halil Inalcik, The Ottoman Empire: The Classical Age", "Kritovoulos, History of Mehmed the Conqueror"]
  },
  {
    id: "h-utsmani-puncak",
    label: "Puncak Kejayaan Utsmani (Suleiman Al-Qanuni)",
    category: "tiga-kerajaan",
    timeLabel: "1520 - 1566 M (926 - 974 H)",
    timeValue: 1530,
    description: "Di bawah pemerintahan **Sultan Suleiman I** (dikenal di Barat sebagai *Suleiman the Magnificent* dan di Timur sebagai *Al-Qanuni* / Sang Pembuat Hukum), Kekaisaran Utsmani mencapai puncak wilayah geopolitik dan kebudayaannya.\n\nWilayah kekuasaan Utsmani membentang di tiga benua: dari benteng Budapest dan Wina di Eropa Tengah, seluruh Timur Tengah dan Jazirah Arab, hingga pesisir Afrika Utara. Di bawah arsitek kerajaan **Mimar Sinan**, dibangun mahakarya arsitektur dunia seperti Masjid Suleymaniye di Istanbul dan pemugaran kubah Masjidil Aqsha.\n\nSuleiman merumuskan kodifikasi hukum perdata dan pidana kekaisaran (*Kanun-name*) yang menyelaraskan syariat agama dengan kebutuhan tata kelola negara heterogen modern, menjadikan Utsmani sebagai superpower utama yang disegani imperium Eropa.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "An-Nisa",
        ayat: 58,
        arabicText: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ",
        paraphrase: "Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang berhak menerimanya, dan (menyuruh kamu) apabila menetapkan hukum di antara manusia supaya kamu menetapkan dengan adil."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Tujuh golongan yang mendapat naungan Arsy Allah, di antaranya Pemimpin yang Adil",
        terjemahan: "Pemimpin yang adil ditempatkan di atas mimbar-mimbar cahaya di sisi Allah."
      }
    ],
    sources: ["Halil Inalcik, The Ottoman Empire", "Suraiya Faroqhi, The Ottoman Empire and the World Around It"]
  },
  {
    id: "h-safawi-persia",
    label: "Pendirian Kerajaan Safawi & Syi'ah di Persia",
    category: "tiga-kerajaan",
    timeLabel: "1501 M (907 H)",
    timeValue: 1501,
    description: "Di Persia (Iran), **Shah Ismail I** dari tarekat Safaviyyah mendirikan **Kerajaan Safawi** setelah menaklukkan Tabriz pada 1501 M. Beliau mengambil langkah radikal dengan menetapkan **Syi'ah Dua Belas** (*Ithna 'Ashariyyah*) sebagai agama resmi tunggal negara Persia.\n\nPenetapan doktrin ini mengubah peta mazhab Persia yang sebelumnya mayoritas Sunni (seperti kelahiran ulama Al-Ghazali dan Al-Bukhari) menjadi pusat keagamaan Syi'ah utama. Konflik perebutan perbatasan dan ideologi teologis meletus antara Safawi dan Utsmani (terutama pada Pertempuran Chaldiran 1514 M).\n\nDi bawah **Shah Abbas yang Agung** (1587-1629 M), ibukota dipindahkan ke Isfahan yang dibangun menjadi kota seni dan arsitektur megah (*Isfahan Nisf-e Jahan* / Isfahan Separuh Dunia). Safawi berdiri sebagai salah satu dari Tiga Kerajaan Besar Senjata Api (*Gunpowder Empires*).",
    branch: "jalur-politik",
    hadithRefs: [
      {
        perawi: "HR. Bukhari & Muslim",
        matan: "Hadits tentang pencarian ilmu orang-orang Persia (Salman Al-Farisi)",
        terjemahan: "Seandainya ilmu agama itu berada di bintang Tsurayya, niscaya orang-orang dari Persia akan mencapainya."
      }
    ],
    sources: ["Roger Savory, Iran Under the Safavids", "Ira M. Lapidus, A History of Islamic Societies"]
  },
  {
    id: "h-mughal-india",
    label: "Pendirian Kerajaan Mughal & Taj Mahal",
    category: "tiga-kerajaan",
    timeLabel: "1526 M (932 H)",
    timeValue: 1526,
    description: "Keturunan Timur Lenk dan Genghis Khan, **Zahiruddin Muhammad Babur**, menginvasi anak benua India dan menghancurkan pasukan Kesultanan Delhi pada **Pertempuran Panipat Pertama** (1526 M) dengan menggunakan kombinasi artileri kavaleri moderen, mendirikan **Kerajaan Mughal**.\n\nCucunya, **Akbar yang Agung** (1556-1605 M), memperluas kekaisaran ke seluruh India Utara dan Tengah serta mempraktikkan toleransi budaya yang luas dengan menghapus pajak *Jizyah* bagi warga Hindu. Puncak keemasan arsitektur terjadi di bawah **Shah Jahan** (1628-1658 M) yang membangun mahakarya marmer putih **Taj Mahal** di Agra sebagai monumen cinta bagi istrinya Mumtaz Mahal.\n\nDi bawah **Aurangzeb Alamgir** (1658-1707 M), wilayah Mughal mencapai luas terbesarnya mencakup hampir seluruh benua India, dan beliau memerintahkan penyusunan ensiklopedia hukum fikih Hanafi terbesar: **Fatawa 'Alamgiri**.",
    branch: "jalur-sains",
    quranRefs: [
      {
        surah: "Al-Anbiya",
        ayat: 107,
        arabicText: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",
        paraphrase: "Dan tiadalah Kami mengutus kamu, melainkan untuk (menjadi) rahmat bagi semesta alam."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        matan: "Pentingnya menjaga kerukunan dan jaminan hak kewargaan sipil",
        terjemahan: "Barangsiapa mendzalimi warga non-Muslim yang dilindungi undang-undang, ia berhadapan denganku di hari kiamat."
      }
    ],
    sources: ["J.F. Richards, The Mughal Empire", "S.A.A. Rizvi, The Wonder That Was India"]
  },
  {
    id: "h-nusantara-pasai-malaka",
    label: "Penyebaran Islam di Samudera Pasai & Malaka",
    category: "nusantara",
    timeLabel: "Abad 13 - 15 M",
    timeValue: 1267,
    description: "Masuknya Islam ke Nusantara berlangsung secara damai melalui jaringan simpul perdagangan maritim Jalur Rempah yang menghubungkan Timur Tengah, India, dan Asia Tenggara. Kerajaan Islam pertama yang tercatat di Nusantara adalah **Kesultanan Samudera Pasai** di pesisir utara Sumatra pada abad ke-13, dipimpin oleh **Sultan Malik as-Saleh** (wafat 1297 M).\n\nSamudera Pasai tumbuh menjadi pusat internasional studi agama Islam (Mazhab Syafi'i) dan pelabuhan niaga lada utama yang dikunjungi penjelajah dunia seperti Marco Polo (1292 M) dan Ibnu Battutah (1345 M).\n\nPada abad ke-15, peranan Pasai dilanjutkan oleh **Kesultanan Malaka** yang didirikan oleh Parameswara (Sultan Iskandar Syah). Malaka menjadi emporium perdagangan internasional Selat Malaka. Bahasa Melayu diadopsi menjadi *Lingua Franca* diplomasi dan dakwah Islam yang menyebar masif ke pesisir Jawa, Kalimantan, Sulawesi, hingga Maluku.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Saba'",
        ayat: 15,
        arabicText: "بَلْدَةٌ طَيِّبَةٌ وَرَبٌّ غَفُورٌ",
        paraphrase: "(Negerimu) adalah negeri yang baik (gemah ripah loh jinawi) dan (Tuhanmu) adalah Tuhan Yang Maha Pengampun."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi",
        arabicText: "التَّاجِرُ الصَّدُوقُ الأَمِينُ مَعَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ",
        matan: "At-tajirus shaduqul amin...",
        terjemahan: "Pedagang yang jujur dan terpercaya kelak akan dikumpulkan bersama para Nabi, orang-orang jujur, dan para Syuhada."
      }
    ],
    sources: ["Azyumardi Azra, Jaringan Ulama Timur Tengah dan Kepulauan Nusantara", "M.C. Ricklefs, A History of Modern Indonesia since c.1200"]
  },
  {
    id: "h-nusantara-walisongo",
    label: "Dakwah Walisongo & Kesultanan Demak",
    category: "nusantara",
    timeLabel: "Abad 15 - 16 M",
    timeValue: 1475,
    description: "Islamisasi Pulau Jawa dipelopori oleh **Walisongo** (Sembilan Wali), majelis ulama mubaligh yang menggunakan pendekatan kultural akulturatif yang bijaksana (*Hikmah*). Tokoh-tokoh seperti **Sunan Ampel**, **Sunan Giri**, dan **Sunan Kalijaga** mendakwahkan Islam tanpa merusak tatanan lokal.\n\nSunan Kalijaga memanfaat seni wayang kulit, tembang Jawa (*Lir-Ilir*), dan gamelan sebagai sarana memasukkan nilai-nilai tauhid dan akhlak Islam. Pendekatan simpatik ini membuat masyarakat Jawa yang sebelumnya menganut Hindu-Buddha memeluk Islam secara damai dan sukarela.\n\nWalisongo merestui berdirinya **Kesultanan Demak** (1475 M) sebagai kerajaan Islam pertama di Jawa dengan **Raden Patah** sebagai Sultan pertama. Demak membangun Masjid Agung Demak sebagai pusat syiar dan mengirim pasukan di bawah **Fatahillah** (Sunan Gunung Jati) untuk mengusir armada Portugis dari Sunda Kelapa pada 22 Juni 1527 M (kelak menjadi hari lahir kota Jakarta).",
    branch: "jalur-pemikiran",
    quranRefs: [
      {
        surah: "An-Nahl",
        ayat: 125,
        arabicText: "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ",
        paraphrase: "Serulah (manusia) kepada jalan Tuhan-mu dengan hikmah dan pelajaran yang baik dan bantahlah mereka dengan cara yang baik."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        arabicText: "يَسِّرُوا وَلاَ تُعَسِّرُوا وَبَشِّرُوا وَلاَ تُنَفِّرُوا",
        matan: "Yassiru wa la tu'assiru...",
        terjemahan: "Permudahlah dan jangan mempersulit, berilah kabar gembira dan jangan membuat orang lari menjauh."
      }
    ],
    sources: ["Sartono Kartodirdjo, Pengantar Sejarah Indonesia Baru", "Agus Sunyoto, Atlas Wali Songo"]
  },
  {
    id: "h-nusantara-mataram-gowa",
    label: "Mataram Islam, Gowa-Tallo & Perlawanan Kolonial",
    category: "nusantara",
    timeLabel: "Abad 16 - 17 M",
    timeValue: 1613,
    description: "Di Jawa Bagian Dalam, **Kesultanan Mataram Islam** mencapai puncak kejayaan di bawah **Sultan Agung Hanyokrokusumo** (1613-1645 M). Sultan Agung adalah raja visioner yang menyatukan Jawa, merumuskan **Kalender Jawa-Hijriah** (penggabungan tahun Saka dan Hijriah), serta memimpin penyerangan dua kali (1628 & 1629) menggempur markas VOC di Batavia.\n\nSementara itu di Sulawesi Selatan, **Kesultanan Gowa-Tallo** menjadi emporium maritim utama setelah Sultan Alauddin memeluk Islam pada 1605 M. Di bawah **Sultan Hasanuddin** (*Ayam Jantan dari Timur*), Gowa-Tallo mengobarkan Perang Makassar melawan monopoli perdagangan VOC.\n\nKesultanan-kesultanan Nusantara (termasuk Ternate-Tidore di Maluku dan Aceh Darussalam di bawah Sultan Iskandar Muda) memegang peranan krusial sebagai pilar benteng pertahanan akidah dan kedaulatan tanah air dari perambahan kolonialisme Barat.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Baqarah",
        ayat: 190,
        arabicText: "وَقَاتِلُوا فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ وَلَا تَعْتَدُوا",
        paraphrase: "Dan perangilah di jalan Allah orang-orang yang memerangi kamu, (tetapi) janganlah kamu melampaui batas."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Abu Dawud & Tirmidzi",
        arabicText: "مَنْ قُتِلَ دُونَ مَالِهِ فَهُوَ شَهِيدٌ وَمَنْ قُتِلَ دُونَ أَهْلِهِ فَهُوَ شَهِيدٌ",
        matan: "Man qutila duna malihi fahuwa syahid...",
        terjemahan: "Barangsiapa yang terbunuh karena membela hartanya atau membela negerinya/keluarganya maka ia adalah Syahid."
      }
    ],
    sources: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Bernard H.M. Vlekke, Nusantara: A History of Indonesia"]
  },

  // =========================================================================
  // EPOCH 8: ERA KOLONIALISME, PEMBAHARUAN & MODERN (6 NODE) - DEEP EXPANSION
  // =========================================================================
  {
    id: "h-napoleon-mesir",
    label: "Invasi Napoleon ke Mesir & Shock Modernitas",
    category: "kolonial",
    timeLabel: "1798 M (1213 H)",
    timeValue: 1798,
    description: "Pada Juli 1798 M, Jenderal **Napoleon Bonaparte** memimpin armada militer Prancis menaklukkan Kairo Mesir. Invasi militer Eropa ke jantung dunia Islam ini memicu guncangan kesadaran mendalam (**Shock of Modernity**).\n\nUmat Islam yang selama abad-abad sebelumnya merasa sebagai imperium terunggul, mendadak menyadari ketertinggalan jauh di bidang teknologi militer, industri, dan sains dari Barat. Napoleon tidak hanya membawa 40.000 prajurit tetapi juga 167 ilmuwan, peralatan laboratorium, dan mesin cetak moderen.\n\nPasca pengusiran Prancis, pendiri Mesir Modern, **Muhammad Ali Pasha** (1805-1848 M), meluncurkan pembaharuan masif: memodernisasi tentara, mendirikan sekolah teknik, serta mengutus mahasiswa-mahasiswa Al-Azhar (seperti Rifa'ah at-Tahtawi) belajar sains dan tata negara ke Paris.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Ar-Rum",
        ayat: 41,
        arabicText: "ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ",
        paraphrase: "Telah nampak kerusakan di darat dan di laut disebabkan karena perbuatan tangan manusia."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Nabi mengingatkan bahaya kelalaian menuntut ilmu sains dan pertahanan",
        terjemahan: "Mukmin yang kuat dan berilmu lebih dicintai Allah daripada mukmin yang lemah."
      }
    ],
    sources: ["Albert Hourani, Arabic Thought in the Liberal Age 1798-1939", "Philip K. Hitti, History of the Arabs"]
  },
  {
    id: "h-pembaharuan-islam",
    label: "Gerakan Pembaharuan & Tajdid Islam",
    category: "kolonial",
    timeLabel: "Abad 19 M (1250 - 1320 H)",
    timeValue: 1850,
    description: "Merespons penetrasi kolonialisme Barat, lahir gerakan **Tajdid** (Pembaharuan Pemikiran Islam) yang melintas dari Timur Tengah hingga Asia. **Jamaluddin al-Afghani** (1838-1897 M) menggelorakan gerakan **Pan-Islamisme** (*Al-Jami'ah al-Islamiyyah*), menyerukan persatuan politik seluruh bangsa Muslim untuk melawan imperialism Barat.\n\nMuridnya di Mesir, **Syaikh Muhammad Abduh** (1849-1905 M) bersama **Rasyid Ridha** (penerbit majalah *Al-Manar*), memelopori gerakan Modernisme Salafiyah: menyerukan pembukaan pintu Ijtihad, pembebasan dari *Taqlid* buta, serta integrasi antara sains moderen dengan kemurnian tauhid Al-Qur'an.\n\nGerakan tajdid ini menjalar cepat ke Nusantara, menginspirasi para ulama muda Sumatra Thawalib di Minangkabau dan organisasi-organisasi pergerakan Islam di Jawa.",
    branch: "jalur-pemikiran",
    quranRefs: [
      {
        surah: "Ar-Ra'd",
        ayat: 11,
        arabicText: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ",
        paraphrase: "Sesungguhnya Allah tidak mengubah keadaan sesuatu kaum sehingga mereka mengubah keadaan yang ada pada diri mereka sendiri."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Abu Dawud",
        arabicText: "إِنَّ اللَّهَ يَبْعَثُ لِهَذِهِ الأُمَّةِ عَلَى رَأْسِ كُلِّ مِائَةِ سَنَةٍ مَنْ يُجَدِّدُ لَهَا دِينَهَا",
        matan: "Innallaha yab'athu li-hadhihil ummati...",
        terjemahan: "Sesungguhnya Allah mengutus bagi umat ini pada setiap awal seratus tahun sosok pembaharu (*Tajdid*) bagi pemahaman agamanya."
      }
    ],
    sources: ["Albert Hourani, Arabic Thought in the Liberal Age", "Charles C. Adams, Islam and Modernism in Egypt"]
  },
  {
    id: "h-sykes-picot-balfour",
    label: "Perjanjian Sykes-Picot & Deklarasi Balfour",
    category: "kolonial",
    timeLabel: "1916 - 1917 M (1334 - 1335 H)",
    timeValue: 1916,
    description: "Di tengah kancah Perang Dunia I, Kekaisaran Utsmani yang bergabung dengan Blok Sentral mengalami tekanan parah. Inggris dan Prancis menandatangani perjanjian rahasia **Sykes-Picot Agreement** (Mei 1916 M), membagi-bagi wilayah provinsi Utsmani di Timur Tengah menjadi zona kolonial (Prancis menguasai Suriah & Lebanon; Inggris menguasai Irak & Transyordania).\n\nPada 2 November 1917 M, Menteri Luar Negeri Inggris Arthur Balfour mengeluarkan **Deklarasi Balfour**, memberikan dukungan resmi rezim Inggris bagi pembentukan 'tanah air nasional bagi bangsa Yahudi' di Palestina.\n\nPerjanjian kolonial rahasia ini memecah belah keutuhan geografis Arab dan menanamkan benih konflik geopolitik paling membara yang mencengkeram Palestina dan Timur Tengah hingga hari ini.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Baqarah",
        ayat: 205,
        arabicText: "وَإِذَا تَوَلَّىٰ سَعَىٰ فِي الْأَرْضِ لِيُفْسِدَ فِيهَا وَيُهْلِكَ الْحَرْثَ وَالنَّسْلَ",
        paraphrase: "Dan apabila ia berpaling (dari kamu), ia berjalan di bumi untuk mengadakan kerusakan padanya, dan merusak tanam-tanaman dan keturunan."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Larangan memecah belah keutuhan persatuan wilayah umat",
        terjemahan: "Barangsiapa datang memecah belah keutuhan perkara kalian saat kalian bersatu, bersikaplah tegas."
      }
    ],
    sources: ["David Fromkin, A Peace to End All Peace", "Eugene Rogan, The Fall of the Ottomans"]
  },
  {
    id: "h-runtuh-khilafah",
    label: "Pembubaran Khilafah Utsmaniyah oleh Atatürk",
    category: "modern",
    timeLabel: "1924 M (1342 H)",
    timeValue: 1924,
    description: "Kekalahan tragis Utsmani di Perang Dunia I menghentikan eksistensi imperium. Tokoh militer perang **Mustafa Kemal Atatürk** memimpin Perang Kemerdekaan Turki melawan pendudukan Sekutu dan menghapuskan institusi Kesultanan Utsmani pada 1922 M.\n\nPada **3 Maret 1924 M** (27 Rajab 1342 H), Majelis Nasional Agung Turki mengesahkan undang-undang resmi **Pembubaran Khilafah Utsmaniyah** dan mengasingkan Khalifah terakhir, Abdul Mejid II. Republik Turki diresmikan sebagai negara Sekuler.\n\nPeristiwa ini menggoncang seluruh dunia Islam yang kehilangan institusi pemersatu simbolis universal setelah 1.300 tahun. Pembubaran khilafah mempercepat pembentukan negara-bangsa modern (*Nation-State*) di seluruh negeri Muslim.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Ali 'Imran",
        ayat: 103,
        arabicText: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا",
        paraphrase: "Dan berpeganglah kamu semuanya kepada tali (agama) Allah, dan janganlah kamu bercerai berai."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        arabicText: "مَنْ مَاتَ وَلَيْسَ فِي عُنُقِهِ بَيْعَةٌ مَاتَ مِيتَةً جَاهِلِيَّةً",
        matan: "Man mata wa laisa fi 'unuqihi bai'atun...",
        terjemahan: "Barangsiapa yang mati dalam keadaan tidak memiliki ikatan persatuan jamaah di lehernya, maka ia mati seperti mati Jahiliyah."
      }
    ],
    sources: ["Arnold J. Toynbee, The Islamic World Since the Peace Conference", "Bernard Lewis, The Emergence of Modern Turkey"]
  },
  {
    id: "h-gerakan-modern",
    label: "Kebangkitan Ormas & Pergerakan Kemerdekaan",
    category: "modern",
    timeLabel: "Awal Abad 20 M",
    timeValue: 1912,
    description: "Ketiadaan institusi khilafah terpusat mendorong konsolidasi institusi keagamaan swadaya melalui Organisasi Kemasyarakatan (Ormas) dan gerakan pergerakan nasional di berbagai negeri Muslim.\n\nDi Indonesia, **KH. Ahmad Dahlan** mendirikan **Muhammadiyah** (1912 M) yang berfokus pada tajdid pendidikan modern dan pemeliharaan sosial (panti asuhan & rumah sakit). **KH. Hasyim Asy'ari** mendirikan **Nahdlatul Ulama (NU)** (1926 M) untuk mempertahankan keutuhan mazhab tradisi Nusantara serta mengumandangkan *Resolusi Jihad* (1945).\n\nDi Mesir, **Hassan al-Banna** mendirikan **Ikhwanul Muslimin** (1928 M). Ormas-ormas Islam ini menjadi motor penggerak pergerakan nasionalisme Islam yang merebut kemerdekaan negara-negara Muslim dari cengkeraman kolonialisme Barat.",
    branch: "jalur-pemikiran",
    quranRefs: [
      {
        surah: "Ali 'Imran",
        ayat: 104,
        arabicText: "وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ",
        paraphrase: "Dan hendaklah ada di antara kamu segolongan umat yang menyeru kepada kebajikan, menyuruh kepada yang ma'ruf dan mencegah dari yang munkar."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        arabicText: "مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ",
        matan: "Man ra'a minkum munkaran fal-yughayyirhu bi-yadih...",
        terjemahan: "Barangsiapa di antara kalian melihat kemungkaran, hendaklah ia mengubahnya dengan tangannya (kekuasaan/organisasi)..."
      }
    ],
    sources: ["Deliar Noer, Gerakan Modern Islam di Indonesia 1900-1942", "Richard P. Mitchell, The Society of the Muslim Brothers"]
  },
  {
    id: "h-era-kontemporer",
    label: "Dunia Islam Kontemporer & Ummah Digital",
    category: "modern",
    timeLabel: "Abad 21 M",
    timeValue: 2024,
    description: "Peradaban Islam di abad ke-21 tumbuh menjadi komunitas global berkekuatan lebih dari **1,9 miliar pemeluk** (hampir 25% populasi dunia). Dunia Islam berada dalam lanskap transisi geopolitik dan ekonomi yang dinamis.\n\nTerjadi perkembangan pesat di bidang **Keuangan Syariah** (*Islamic Banking & Sukuk*), industri halal global, serta munculnya **Ummah Digital**: pemanfaatan teknologi kecerdasan buatan (AI), media digital, dan aplikasi seluler untuk syiar dakwah, pembelajaran Al-Qur'an, dan koordinasi kemanusiaan global.\n\nMeskipun menghadapi tantangan Islamofobia, krisis pengungsi, dan konflik geopolitik di berbagai wilayah, peradaban Islam terus berdiri kokoh memancarkan rahmat bagi semesta alam (*Rahmatan lil 'Alamin*).",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Hujurat",
        ayat: 13,
        arabicText: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا",
        paraphrase: "Hai manusia, sesungguhnya Kami menciptakan kamu dari seorang laki-laki dan seorang perempuan dan menjadikan kamu berbangsa-bangsa dan bersuku-suku supaya kamu saling kenal-mengenal."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari & Muslim",
        arabicText: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا",
        matan: "Al-mu'minu lil-mu'mini kal-bunyani yasyuddu ba'dhuhu ba'dhan...",
        terjemahan: "Orang mukmin satu dengan mukmin lainnya bagaikan satu bangunan kokoh yang saling menguatkan satu sama lain."
      }
    ],
    sources: ["Pew Research Center, The Future of World Religions", "John L. Esposito, The Oxford History of Islam"]
  }
];
