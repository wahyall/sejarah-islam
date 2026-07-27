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
    timeLabel: "629 M (Abad 7 M)",
    timeValue: 629,
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
    timeValue: 632,
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
    id: "h-kekhalifahan-ali-baiat",
    label: "Bai'at Khalifah Ali bin Abi Thalib di Madinah",
    category: "khulafaur-rasyidin",
    timeLabel: "656 M (35 H)",
    timeValue: 656,
    description: "Pasca keshahidan Khalifah Utsman bin Affan, kaum Muslimin dari Muhajirin dan Anshar mendatangi **Ali bin Abi Thalib** di Masjid Nabawi untuk mengucapkan bai'at kepemimpinan sebagai Khalifah keempat Khulafaur Rasyidin.\n\nKhalifah Ali mengawali kepemimpinannya dengan menegakkan kembali keadilan distritutif Baitul Mal, mengganti para gubernur provinsi yang tidak efektif, dan memulihkan tanah milik negara demi integritas pemerintahan.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "An-Nisa", ayat: 58, arabicText: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا", paraphrase: "Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang berhak mekerimanya, dan (menyuruh kamu) apabila menetapkan hukum di antara manusia supaya kamu menetapkan dengan adil." }
    ],
    hadithRefs: [
      { perawi: "HR. Tirmidzi & Ahmad", matan: "Ana madinatul 'ilmi wa 'Aliyyun babuha", terjemahan: "Aku adalah kotanya ilmu pengetahuan dan Ali adalah pintu gerbangnya." }
    ],
    refleksi: {
      hikmah: "Keberanian mengambil tanggung jawab di saat krisis kedaulatan negara menunjukkan pengorbanan luhur demi persatuan umat.",
      pertanyaanReflektif: ["Mengapa Khalifah Ali mengutamakan stabilitas institusi dan keadilan Baitul Mal pada awal pembaiatannya?"],
      pesanAksi: "Menjaga transparansi, keadilan, dan amanah dalam setiap amanah kepemimpinan."
    },
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Ibnu Katsir, Al-Bidayah wan-Nihayah"]
  },
  {
    id: "h-pemindahan-ibukota-kufah",
    label: "Pemindahan Ibu Kota Khilafah ke Kufah",
    category: "khulafaur-rasyidin",
    timeLabel: "656 M (36 H)",
    timeValue: 656,
    description: "Demi efisiensi komunikasi dengan wilayah-wilayah timur yang luas serta untuk menjaga kesucian dan kedamaian Kota Madinah Al-Munawwarah dari pusaran konflik militer, Khalifah Ali bin Abi Thalib memindahkan ibu kota kekhalifahan ke **Kufah (Irak)**.\n\nKufah tumbuh menjadi pusat studi fikih, bahasa Arab, dan strategi pertahanan baru di wilayah tengah imperium Islam.",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "Al-Baqarah", ayat: 125, paraphrase: "Dan jadikanlah sebagian maqam Ibrahim tempat shalat dan Kami perintahkan kepada Ibrahim dan Ismail: Bersihkanlah rumah-Ku." }
    ],
    hadithRefs: [
      { perawi: "HR. Malik", matan: "Keutamaan dan kesucian Kota Madinah yang dilindungi dari fitnah pertumpahan darah", terjemahan: "Madinah adalah tanah suci tempat hijrah yang harus dihormati dan dijaga kedamaiannya." }
    ],
    refleksi: {
      hikmah: "Kebijaksanaan memindahkan pusat administrasi demi melindungi nilai-nilai suci dan efisiensi kepemimpinan.",
      pertanyaanReflektif: ["Bagaimana pertimbangan geopolitik Ali bin Abi Thalib dalam memilih Kufah sebagai ibu kota baru?"],
      pesanAksi: "Mengambil keputusan fleksibel dan taktis untuk mengamankan kemaslahatan yang lebih besar."
    },
    sources: ["As-Suyuti, Tarikh Al-Khulafa", "Ibnu Khaldun, Al-Muqaddimah"]
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
  },

  // =========================================================================
  // CABANG KHUSUS: SEJARAH BAITUL MAQDIS / AL-QUDS / AL-AQSA (12 NODE)
  // =========================================================================
  {
    id: "h-bm-fondasi-awal",
    label: "Fondasi Awal Masjid Al-Aqsa & Hijrah Ibrahim AS",
    category: "pra-islam",
    timeLabel: "± 2000 SM",
    timeValue: -2000,
    description: "Fondasi spiritual Baitul Maqdis (Masjid Al-Aqsa) diletakkan atas perintah Allah SWT hanya 40 tahun setelah peletakan fondasi pertama Masjidil Haram di Makkah (HR. Bukhari & Muslim).\n\nKetika Nabi Ibrahim AS berhijrah dari penindasan Babilonia menuju tanah Syam yang diberkahi (QS. Al-Anbiya: 71), beliau memperbarui bangunan suci di lembah Yerusalem dan menjadikannya kiblat peradaban tauhid bagi para Nabi keturunannya (Ismail, Ishaq, Ya'qub, Yusuf, Musa, dan Isa AS).",
    branch: "sejarah-baitul-maqdis",
    quranRefs: [
      {
        surah: "Al-Anbiya",
        ayat: 71,
        arabicText: "وَنَجَّيْنَاهُ وَلُوطًا إِلَى الْأَرْضِ الَّتِي بَارَكْنَا فِيهَا لِلْعَالَمِينَ",
        paraphrase: "Dan Kami selamatkan Ibrahim dan Luth ke sebuah negeri yang telah Kami berkahi untuk sekalian alam."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari & Muslim",
        arabicText: "قُلْتُ يَا رَسُولَ اللَّهِ أَيُّ مَسْجِدٍ وُضِعَ فِي الأَرْضِ أَوَّلُ؟ قَالَ: الْمَسْجِدُ الْحَرَامُ. قُلْتُ: ثُمَّ أَيُّ؟ قَالَ: الْمَسْجِدُ الأَقْصَى. قُلْتُ: كَمْ بَيْنَهُمَا؟ قَالَ: أَرْبَعُونَ سَنَةً",
        matan: "Qultu ya Rasulallahi ayyu masjidin wudhi'a fil ardhi awwal...",
        terjemahan: "Aku bertanya, 'Wahai Rasulullah, masjid apakah yang pertama kali dibangun di muka bumi?' Beliau menjawab: 'Masjidil Haram'. Aku bertanya lagi: 'Kemudian masjid apa?' Beliau menjawab: 'Masjidil Aqsha'. Aku bertanya: 'Berapa jarak waktu antara keduanya?' Beliau menjawab: 'Empat puluh tahun'."
      }
    ],
    refleksi: {
      hikmah: "Baitul Maqdis adalah tempat suci tertua kedua di muka bumi yang mengikat tali ketauhidan seluruh para Nabi sejak Nabi Adam, Ibrahim, hingga Muhammad ﷺ.",
      pertanyaanReflektif: [
        "Mengapa hubungan spiritual antara Makkah dan Yerusalem telah diikat sejak awal sejarah peradaban tauhid?",
        "Bagaimana pemahaman akan sejarah awal Al-Aqsa memperkuat akidah ketauhidan kita?"
      ],
      pesanAksi: "Mempelajari dan mengajarkan sejarah otentik Baitul Maqdis sebagai bagian tak terpisahkan dari akidah dan peradaban Islam."
    },
    sources: ["Ibnu Katsir, Al-Bidayah wan-Nihayah", "Dr. Raghib As-Sirjani, Baitul Maqdis"]
  },
  {
    id: "h-bm-sulaiman-renovasi",
    label: "Rekonstruksi Agung Sulaiman AS & Doa Ampunan",
    category: "pra-islam",
    timeLabel: "± 960 SM",
    timeValue: -960,
    description: "Nabi Sulaiman AS melanjutkan pembangunan dan pembaruan struktur agung Baitul Maqdis dengan arsitektur megah yang memanfaatkan potensi angin dan prajurit jin atas karunia Allah (QS. Saba': 12-13).\n\nSaat menyelesaikan pembaruan kompleks Baitul Maqdis, Nabi Sulaiman bermunajat memohon 3 doa kepada Allah: keputusan hukum yang sesuai dengan hukum Allah, kerajaan mulia yang tidak dimiliki seorang pun setelahnya, serta jaminan bahwa siapa pun yang datang ke Masjid Al-Aqsa khusus untuk shalat di dalamnya, ia keluar dari dosa-dosanya bersih seperti hari dilahirkan oleh ibunya (HR. An-Nasa'i & Ahmad).",
    branch: "sejarah-baitul-maqdis",
    quranRefs: [
      {
        surah: "Saba'",
        ayat: 13,
        arabicText: "يَعْمَلُونَ لَهُ مَا يَشَاءُ مِن مَّحَارِيبَ وَتَمَاثِيلَ وَجِفَانٍ كَالْجَوَابِ وَقُدُورٍ رَّاسِيَاتٍ",
        paraphrase: "Para jin itu membuat untuk Sulaiman apa yang dikehendakinya dari gedung-gedung yang tinggi dan patung-patung dan piring-piring yang (besarnya) seperti kolam..."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. An-Nasa'i & Ahmad",
        arabicText: "وَأَنْ لاَ يَأْتِيَ هَذَا الْمَسْجِدَ أَحَدٌ لاَ يُرِيدُ إِلاَّ الصَّلاَةَ فِيهِ إِلاَّ خَرَجَ مِنْ خَطِيئَتِهِ كَيَوْمِ وَلَدَتْهُ أُمُّهُ",
        matan: "Wa an la ya'tiya hadhal masjida ahadun la yuridu illa as-shalah...",
        terjemahan: "Dan agar tidak seorang pun yang datang ke Masjid Al-Aqsa ini tanpa tujuan lain kecuali untuk ruku'/shalat di dalamnya, melainkan ia keluar dari dosa-dosanya bersih seperti saat ia dilahirkan ibunya."
      }
    ],
    refleksi: {
      hikmah: "Niat ikhlas dalam mengasihi dan beribadah di Masjid Al-Aqsa mengandung keutamaan peleburan dosa yang dijanjikan Ilahi melalui doa keagungan Nabi Sulaiman AS.",
      pertanyaanReflektif: [
        "Bagaimana keutamaan shalat di Al-Aqsa mendorong kerinduan dan kepedulian umat Islam universal?"
      ],
      pesanAksi: "Mendoakan keselamatan dan kemerdekaan warga serta kompleks Masjid Al-Aqsa dalam setiap sujud."
    },
    sources: ["Ibnu Katsir, Qashash al-Anbiya'", "Tarikh at-Tabari"]
  },
  {
    id: "h-bm-babilonia-uzair",
    label: "Kehancuran Babilonia Nebukadnezar & Pemulihan Uzair AS",
    category: "pra-islam",
    timeLabel: "± 586 - 450 SM",
    timeValue: -586,
    description: "Setelah wafatnya Nabi Sulaiman AS, timbul kezaliman dan penyimpangan yang memicu hukuman Ilahi (QS. Al-Isra: 4-5). Raja Babilonia, Nebukadnezar II (Bukhtanashar), menginvasi Yerusalem pada 586 SM, meratakan bangunan kota, membakar naskah-naskah suci, dan menawan penduduk ke Babilonia.\n\nSatu abad kemudian, Allah menghidupkan kembali kota yang hancur dan mengutus Nabi Uzair AS (Ezra) yang ditidurkan selama 100 tahun sebagai mukjizat kebangkitan (QS. Al-Baqarah: 259). Uzair memimpin pemulihan kembali pembacaan Al-Kitab dan pemukiman Baitul Maqdis.",
    branch: "sejarah-baitul-maqdis",
    quranRefs: [
      {
        surah: "Al-Isra",
        ayat: 5,
        arabicText: "فَإِذَا جَاءَ وَعْدُ أُولَاهُمَا بَعَثْنَا عَلَيْكُمْ عِبَادًا لَّنَا أُولِي بَأْسٍ شَدِيدٍ فَجَاسُوا خِلَالَ الدِّيَارِ",
        paraphrase: "Maka apabila datang saat hukuman bagi kejahatan pertama dari kedua kejahatan itu, Kami datangkan kepadamu hamba-hamba Kami yang mempunyai kekuatan yang besar, lalu mereka merajalela di kampung-kampung..."
      },
      {
        surah: "Al-Baqarah",
        ayat: 259,
        arabicText: "أَوْ كَالَّذِي مَرَّ عَلَىٰ قَرْيَةٍ وَهِيَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا قَالَ أَنَّىٰ يُحْيِي هَٰذِهِ اللَّهُ بَعْدَ مَوْتِهَا ۖ فَأَمَاتَهُ اللَّهُ مِائَةَ عَامٍ ثُمَّ بَعَثَهُ",
        paraphrase: "Atau seperti orang yang melewati suatu negeri yang (bangunan-bangunannya) telah roboh menutupi atapnya. Dia berkata: 'Bagaimanakah Allah menghidupkan kembali negeri ini setelah hancur?' Maka Allah mematikan orang itu seratus tahun, kemudian menghidupkannya kembali."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Ibnu Abi Hatim & Ibnu Jarir",
        matan: "Kisah pemulihan kembali naskah Taurat dan Baitul Maqdis oleh Nabi Uzair AS",
        terjemahan: "Uzair diberi mukjizat mengingat dan membacakan kembali naskah Taurat yang lenyap setelah kehancuran Babilonia."
      }
    ],
    refleksi: {
      hikmah: "Kehancuran dan kebangkitan Baitul Maqdis mengajarkan hukum Sunnatullah: kemuliaan negeri suci tergantung pada ketaatan penghuninya kepada syariat Ilahi.",
      pertanyaanReflektif: [
        "Pelajaran apa yang dipetik dari mukjizat 100 tahun pemulihan Uzair AS atas puing-puing Yerusalem?"
      ],
      pesanAksi: "Menjadikan Kitabullah sebagai pedoman utama rekonstruksi moral bangsa."
    },
    sources: ["Ibnu Katsir, Qashash al-Anbiya'", "Tarikh at-Tabari"]
  },
  {
    id: "h-bm-isra-miraj",
    label: "Isra' Mi'raj & Al-Aqsa Kiblat Pertama Umat",
    category: "kenabian",
    timeLabel: "620 M",
    timeValue: 620,
    description: "Allah memuliakan Baitul Maqdis dengan menjadikannya titik tujuan perjalanan malam mukjizat (*Isra'*) Rasulullah ﷺ dari Masjidil Haram di Makkah menuju Masjidil Aqsha (QS. Al-Isra: 1).\n\nDi kompleks Al-Aqsa, Nabi Muhammad ﷺ mengimami shalat berjamaah bersama seluruh Nabi dan Rasul terdahulu, menegaskan pengoperan estafet kepemimpinan risalah tauhid universal. Al-Aqsa menjadi Kiblat Pertama umat Islam selama 16 hingga 17 bulan sebelum wahyu pemindahan kiblat ke Ka'bah Makkah diturunkan (QS. Al-Baqarah: 144).",
    branch: "sejarah-baitul-maqdis",
    quranRefs: [
      {
        surah: "Al-Isra",
        ayat: 1,
        arabicText: "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ",
        paraphrase: "Maha Suci Allah, yang telah memperjalankan hamba-Nya pada suatu malam dari Masjidil Haram ke Masjidil Aqsha yang telah Kami berkahi sekelilingnya..."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari & Muslim",
        arabicText: "صَلَّيْنَا مَعَ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَحْوَ بَيْتِ الْمَقْدِسِ سِتَّةَ عَشَرَ أَوْ سَبْعَةَ عَشَرَ شَهْرًا",
        matan: "Shallaina ma'an-Nabiyyi nahwa Baitil Maqdisi sittata 'asyara...",
        terjemahan: "Kami shalat bersama Nabi ﷺ menghadap ke arah Baitul Maqdis selama 16 atau 17 bulan."
      }
    ],
    refleksi: {
      hikmah: "Al-Aqsa adalah stasiun penyambung bumi dan langit dalam Isra' Mi'raj, menegaskan bahwa kesucian Yerusalem berada di jantung akidah setiap Muslim.",
      pertanyaanReflektif: [
        "Apa arti penting Al-Aqsa sebagai kiblat pertama dalam membentuk identitas spiritual umat Islam?"
      ],
      pesanAksi: "Menjaga ikatan batin dengan Al-Aqsa melalui ibadah, hafalan Al-Qur'an, dan kepedulian sosial."
    },
    sources: ["Safiur Rahman Mubarakpuri, Ar-Raheeq Al-Makhtum"]
  },
  {
    id: "h-bm-pembebasan-umar",
    label: "Penyerahan Yerusalem & Perjanjian Umariyyah",
    category: "khulafaur-rasyidin",
    timeLabel: "638 M (17 H)",
    timeValue: 638,
    description: "Pasca kemenangan Yarmuk, pasukan Muslimin memblokir Yerusalem. Uskup Agung Patriark Sophronius menyatakan hanya akan menyerahkan kunci Yerusalem secara langsung kepada Khalifah Umar bin Khattab.\n\nUmar berjalan kaki menempuh perjalanan jauh dari Madinah. Beliau menandatangani dokumen bersejarah **Perjanjian Umariyyah** (*Al-'Uhdah al-'Umariyyah*)—jaminan kebebasan beragama, keselamatan tempat ibadah Gereja, serta perlindungan hak sipil tanpa paksaan. Umar memimpin pembersihan sampah di kompleks Al-Aqsa yang sempat diterlantarkan Romawi dan mendirikan shalat di sana.",
    branch: "sejarah-baitul-maqdis",
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
        perawi: "HR. Bukhari",
        matan: "Nabi mendoakan pembebasan Baitul Maqdis sebagai salah satu tanda dekatnya keagungan Islam",
        terjemahan: "Hitunglah 6 hal menjelang Kiamat: kematianku, kemudian pembebasan Baitul Maqdis..."
      }
    ],
    refleksi: {
      hikmah: "Keadilan hukum Islam saat membebaskan Yerusalem terukir dalam sejarah: tanpa pembantaian, tanpa perusakan gereja, dan menjamin hak asasi manusia seluruh warga.",
      pertanyaanReflektif: [
        "Bagaimana toleransi yang dicontohkan Umar bin Khattab menjadi standar emas perlindungan minoritas dunia?"
      ],
      pesanAksi: "Menunjukkan akhlak kesatriaan, keadilan, dan keteladanan Islam saat memegang otoritas kekuasaan."
    },
    sources: ["At-Tabari, Tarikh ar-Rusul wal-Muluk", "Al-Baladhuri, Futuh al-Buldan"]
  },
  {
    id: "h-bm-kubah-batu-umayyah",
    label: "Pembangunan Kubbat as-Sakhrah & Masjid Al-Qibli",
    category: "umayyah",
    timeLabel: "691 M (72 H)",
    timeValue: 691,
    description: "Pada era keemasan Dinasti Umayyah, Khalifah **Abdul Malik bin Marwan** mengalokasikan pendapatan hasil panen Mesir selama 7 tahun untuk membangun mahakarya arsitektur **Kubbat as-Sakhrah** (Dome of the Rock) yang selesai pada 691 M (72 H).\n\nKubah emas ini dibangun di atas Batu Suci (*Ash-Sakhrah*) tempat pijakan Mi'raj Nabi. Putranya, Khalifah **Walid bin Abdul Malik**, memperluas bangunan utama **Masjid Al-Qibli** di sisi selatan kompleks Al-Aqsa, menjadikan Baitul Maqdis sebagai mercusuar kebudayaan dan estetika Islam dunia.",
    branch: "sejarah-baitul-maqdis",
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
        matan: "Keindahan seni dan arsitektur sebagai cermin keindahan Ilahi",
        terjemahan: "Sesungguhnya Allah itu Maha Indah dan mencintai keindahan."
      }
    ],
    refleksi: {
      hikmah: "Pembangunan Kubbat as-Sakhrah adalah bukti dedikasi peradaban Islam dalam memuliakan simbol-simbol kesucian wahyu melalui seni arsitektur berkelas dunia.",
      pertanyaanReflektif: [
        "Mengapa pemeliharaan simbol peradaban Al-Aqsa menjadi cermin keagungan kebudayaan Islam?"
      ],
      pesanAksi: "Menjaga dan memakmurkan masjid-masjid sekitar dengan keindahan kebersihan dan kegiatan ilmu."
    },
    sources: ["Creswell, Early Muslim Architecture", "Ira M. Lapidus, A History of Islamic Societies"]
  },
  {
    id: "h-bm-pendudukan-salib",
    label: "Tragedi Pembantaian Perang Salib I di Al-Aqsa",
    category: "abbasiyah",
    timeLabel: "1099 M (492 H)",
    timeValue: 1099,
    description: "Memanfaatkan perpecahan politik internal kerajaan-kerajaan Muslim, pasukan Salib Eropa merebut Yerusalem pada 15 Juli 1099 M (492 H) setelah pengepungan ketat.\n\nBerbeda jauh dari kedatangan Umar, pasukan Salib melancarkan pembantaian massal yang sangat kejam selama 3 hari terhadap 70.000 warga Muslim dan Yahudi di dalam kompleks Al-Aqsa. Kubbat as-Sakhrah diubah menjadi *Templum Domini* dan Masjid Al-Qibli dijadikan markas ksatria Templar selama 88 tahun pendudukan.",
    branch: "sejarah-baitul-maqdis",
    quranRefs: [
      {
        surah: "Al-Anfal",
        ayat: 46,
        arabicText: "وَلاَ تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ",
        paraphrase: "Dan janganlah kamu berbantah-bantahan, yang menyebabkan kamu menjadi gentar dan hilang kekuatanmu."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Peringatan bahaya perpecahan internal di hadapan serbuan musuh",
        terjemahan: "Bersatulah dan jangan bercerai-berai karena kehancuran diawali oleh perpecahan."
      }
    ],
    refleksi: {
      hikmah: "Jatuhnya Yerusalem pada 1099 M menjadi ikhtibar sejarah: keterpecahan politik internal umat akan mengundang penguasaan dan penderitaan dari pihak musuh.",
      pertanyaanReflektif: [
        "Pelajaran berharga apa yang bisa dipetik dari bahaya pertikaian sesama Muslim di masa krisis?"
      ],
      pesanAksi: "Mengutamakan persatuan ukhuwah Islamiyah di atas kepentingan faksi atau kelompok pribadi."
    },
    sources: ["Ibnu al-Athir, Al-Kamil fit-Tarikh", "Steven Runciman, A History of the Crusades"]
  },
  {
    id: "h-bm-mimbar-zengi",
    label: "Pembuatan Mimbar Nuruddin Zengi & Visi Pembebasan",
    category: "abbasiyah",
    timeLabel: "1168 M (564 H)",
    timeValue: 1168,
    description: "Di saat Yerusalem masih diduduki pasukan Salib, pahlawan persatuan Islam **Nuruddin Zengi** memerintahkan para perajin ulung Aleppo untuk membuat sebuah mimbar kayu mahakarya (*Mimbar Zengi*) tanpa paku pada 1168 M (564 H).\n\nMimbar ini dirancang khusus dengan keyakinan tauhid dan visi visioner bahwa Yerusalem pasti akan dibebaskan kembali dan mimbar tersebut akan ditempatkan di dalam Masjid Al-Aqsa. Visi Nuruddin menjadi inspirasi membara bagi muridnya, Salahuddin Al-Ayyubi.",
    branch: "sejarah-baitul-maqdis",
    quranRefs: [
      {
        surah: "Al-Insyirah",
        ayat: 5,
        arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
        paraphrase: "Karena sesungguhnya sesudah kesulitan itu ada kemudahan."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi",
        matan: "Cita-cita dan niat ikhlas seorang pejuang mendapat pahala sempurna",
        terjemahan: "Sesungguhnya setiap amalan tergantung pada niat dan cita-citanya."
      }
    ],
    refleksi: {
      hikmah: "Visi Mimbar Zengi mengajarkan pentingnya perencanaan strategis dan keyakinan masa depan di tengah kegelapan ujian penjajahan.",
      pertanyaanReflektif: [
        "Bagaimana sebuah karya fisik (mimbar) mampu menyalakan visi pembebasan suatu bangsa?"
      ],
      pesanAksi: "Membangun karya nyata dan fondasi keilmuan yang bermanfaat bagi generasi mendatang."
    },
    sources: ["Ibnu al-Athir, Al-Kamil fit-Tarikh", "Museum With No Frontiers (MWNF)"]
  },
  {
    id: "h-bm-pembebasan-salahuddin",
    label: "Pembebasan Damai Al-Aqsa oleh Salahuddin & Mimbar Zengi",
    category: "abbasiyah",
    timeLabel: "1187 M (27 Rajab 583 H)",
    timeValue: 1187,
    description: "Setelah kemenangan monumental di Pertempuran Hattin, Sultan **Salahuddin Al-Ayyubi** membebasakan Yerusalem pada 2 Oktober 1187 M (27 Rajab 583 H, bertepatan dengan malam Isra' Mi'raj).\n\nSalahuddin menunjukkan keagungan akhlak kesatriaan Islam: melarang perusakan, melarang penjarahan, membebaskan ribuan tawanan miskin tanpa tebusan, serta mengawal keselamatan pengungsi Kristen secara damai. Salahuddin memboyong Mimbar Zengi dari Aleppo dan memasangnya secara agung di dalam Masjid Al-Qibli Al-Aqsa.",
    branch: "sejarah-baitul-maqdis",
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
        arabicText: "لاَ تَزَالُ طَائِفَةٌ مِنْ أُمَّتِي عَلَى الْحَقِّ ظَاهِرِينَ... قَالُوا أَيْنَ هُمْ يَا رَسُولَ اللَّهِ؟ قَالَ بِبَيْتِ الْمَقْدِسِ وَأَكْنَافِ بَيْتِ الْمَقْدِسِ",
        matan: "La tazalu tha'ifatun min ummati 'alal haqqi zhahirin...",
        terjemahan: "Akan selalu ada sekelompok dari umatku yang memegang teguh kebenaran... Mereka bertanya: 'Di mana mereka wahai Rasulullah?' Beliau menjawab: 'Di Baitul Maqdis dan sekitar Baitul Maqdis'."
      }
    ],
    refleksi: {
      hikmah: "Pembebasan Yerusalem oleh Salahuddin membuktikan bahwa kemenangan sejati dicapai melalui integrasi persatuan umat, kesiapan militer, dan keagungan moral.",
      pertanyaanReflektif: [
        "Bagaimana keteladanan Salahuddin mengilhami generasi muda dalam memperjuangkan kebenaran?"
      ],
      pesanAksi: "Meneladani integritas moral, kerendahan hati, dan keteguhan perjuangan Salahuddin Al-Ayyubi."
    },
    sources: ["Baha ad-Din ibn Syaddad, Al-Nawadir as-Sultaniyya", "Ibnu Katsir, Al-Bidayah wan-Nihayah"]
  },
  {
    id: "h-bm-tembok-suleiman",
    label: "Renovasi Tembok Yerusalem oleh Suleiman I",
    category: "tiga-kerajaan",
    timeLabel: "1537 M (944 H)",
    timeValue: 1537,
    description: "Di bawah Kekaisaran Utsmani, Sultan **Suleiman Al-Qanuni** memerintahkan pembangunan dan rekonstruksi kembali tembok pelindung Kota Lama Yerusalem (*Old City Walls*) sepanjang 4 km dengan 7 pintu gerbang utama pada 1537 M.\n\nSuleiman juga memprakarsai pemasangan ubin keramik biru Iznik yang megah pada dinding luar Kubbat as-Sakhrah dan menjamin keamanan penuh peziarah tiga agama selama abad-abad kekuasaan Utsmani.",
    branch: "sejarah-baitul-maqdis",
    quranRefs: [
      {
        surah: "An-Nisa",
        ayat: 58,
        arabicText: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا",
        paraphrase: "Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang berhak menerimanya."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Pemimpin yang adil dan memelihara amanat kota suci mendapat perlindungan Allah",
        terjemahan: "Pemimpin adil yang memakmurkan tempat suci berada di mimbar-mimbar cahaya."
      }
    ],
    refleksi: {
      hikmah: "Tembok megah Yerusalem Utsmani menjadi monumen fisik perlindungan dan pemeliharaan warisan suci peradaban Islam di Palestina.",
      pertanyaanReflektif: [
        "Bagaimana warisan arsitektur Utsmani membentengi identitas keislaman kota Al-Quds?"
      ],
      pesanAksi: "Mempelajari sejarah arsitektur peradaban Islam sebagai bagian dari ketahanan budaya."
    },
    sources: ["Halil Inalcik, The Ottoman Empire", "Suraiya Faroqhi, The Ottoman Empire and the World Around It"]
  },
  {
    id: "h-bm-abdulhamid-herzl",
    label: "Penolakan Sultan Abdul Hamid II atas Pembelian Palestina",
    category: "modern",
    timeLabel: "1901 M (1319 H)",
    timeValue: 1901,
    description: "Pada 1901 M, pendiri gerakan Zionisme **Theodor Herzl** mendatangi Khalifah Utsmani **Sultan Abdul Hamid II** menawarkan pelunasan seluruh utang luar negeri Utsmaniyah dan dana besar sebagai imbalan hak pemukiman tanah Palestina.\n\nSultan Abdul Hamid II menyampaikan penolakan sejarah yang monumental: 'Aku tidak akan menjual sejengkal pun tanah Palestina! Palestina bukan milikku pribadi melainkan milik seluruh umat Islam yang telah menyiramnya dengan darah mereka. Biarlah kekaisaran Utsmani hancur, namun aku tidak akan membiarkan Palestina dirobek!'.",
    branch: "sejarah-baitul-maqdis",
    quranRefs: [
      {
        surah: "Al-Baqarah",
        ayat: 42,
        arabicText: "وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَأَنتُمْ تَعْلَمُونَ",
        paraphrase: "Dan janganlah kamu campur adukkan yang hak dengan yang bathil dan janganlah kamu sembunyikan yang hak itu, sedang kamu mengetahui."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Tugas pemimpin menjaga keutuhan tanah suci titipan amanat umat",
        terjemahan: "Pemimpin adalah perisai pelindung yang bertindak membela kehormatan umat."
      }
    ],
    refleksi: {
      hikmah: "Keteguhan Sultan Abdul Hamid II menegaskan bahwa tanah Baitul Maqdis adalah amanat keimanan yang tidak dapat diperjualbelikan dengan materi duniawi.",
      pertanyaanReflektif: [
        "Mengapa penolakan Sultan Abdul Hamid II menjadi tonggak sejarah ketahanan akidah di era modern?"
      ],
      pesanAksi: "Menjaga integritas diri dan tidak memperjualbelikan prinsip agama demi keuntungan materi sesaat."
    },
    sources: ["Dr. Raghib As-Sirjani, Baitul Maqdis", "Pew Research Center / Journal of Palestine Studies"]
  },
  {
    id: "h-sains-khawarizmi-aljabar",
    label: "Al-Khawarizmi: Penemuan Aljabar & Sistem Angka Nol",
    category: "abbasiyah",
    timeLabel: "820 M (204 H)",
    timeValue: 820,
    description: "Muhammad ibn Musa al-Khawarizmi, ilmuwan terbesar Baitul Hikmah Baghdad, menulis kitab monumental **Al-Kitab al-mukhtasar fi hisab al-jabr wa'l-muqabala** (Buku Ringkasan Perhitungan dengan Pemulihan dan Pengurangan). Karya ini melahirkan cabang ilmu **Aljabar** (Algebra) dan memperkenalkan sistem angka desimal Hindu-Arab serta angka **Nol** (Sifr) ke dunia sains global.\n\nKata *Algorithm* (algoritma) diserap langsung dari nama beliau (Al-Khawarizmi), yang menjadi fondasi utama sains komputer dan peradaban digital modern.",
    branch: "jalur-sains",
    quranRefs: [
      {
        surah: "Yunus",
        ayat: 5,
        arabicText: "هُوَ الَّذِي جَعَلَ الشَّمْسَ ضِيَاءً وَالْقَمَرَ نُورًا وَقَدَّرَهُ مَنَازِلَ لِتَعْلَمُوا عَدَدَ السِّنِينَ وَالْحِسَابَ",
        paraphrase: "Dia-lah yang menjadikan matahari bersinar dan bulan bercahaya, dan menetapkan tempat-tempat perjalanan bulan itu, supaya kamu mengetahui bilangan tahun dan perhitungan."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Ibnu Majah",
        arabicText: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
        matan: "Thalabul 'ilmi faridhatun 'ala kulli Muslim",
        terjemahan: "Menuntut ilmu itu wajib atas setiap Muslim."
      }
    ],
    refleksi: {
      hikmah: "Penemuan Aljabar dan sistem angka nol oleh ilmuwan Muslim membuktikan bahwa integrasi tauhid dan sains dapat memicu revolusi matematika dunia.",
      pertanyaanReflektif: [
        "Bagaimana pemikiran matematis Al-Khawarizmi menginspirasi kemajuan teknologi digital era modern?"
      ],
      pesanAksi: "Mengembangkan ketekunan intelektual dan ilmu pengetahuan sains sebagai bentuk ibadah."
    },
    sources: ["Roshdi Rashed, Development of Arabic Mathematics", "George Saliba, A History of Arabic Astronomy"]
  },
  {
    id: "h-sains-ibnu-sina-kedokteran",
    label: "Ibnu Sina (Avicenna) & Al-Qanun fi at-Tibb",
    category: "abbasiyah",
    timeLabel: "1025 M (416 H)",
    timeValue: 1025,
    description: "Abu Ali al-Husain ibn Abdallah ibn Sina (Avicenna), ilmuwan polymath terbesar peradaban Islam, menyelesaikan kitab pengobatan monumental **Al-Qanun fi at-Tibb** (*The Canon of Medicine*). Karya 5 jilid ini merangkum ilmu kedokteran anatomi, farmakologi, karantina penyakit menular, dan psikologi medis.\n\n*Al-Qanun* menjadi rujukan wajib di fakultas kedokteran universitas-universitas Eropa selama lebih dari 600 tahun hingga abad ke-17.",
    branch: "jalur-sains",
    quranRefs: [
      {
        surah: "Asy-Syu'ara",
        ayat: 80,
        arabicText: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
        paraphrase: "Dan apabila aku sakit, Dialah yang menyembuhkan aku."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Bukhari",
        arabicText: "مَا أَنْزَلَ اللَّهُ دَاءً إِلاَّ أَنْزَلَ لَهُ شِفَاءً",
        matan: "Ma anzalallahu da'an illa anzala lahu syifa'an",
        terjemahan: "Tidaklah Allah menurunkan suatu penyakit melainkan Dia juga menurunkan obatnya."
      }
    ],
    refleksi: {
      hikmah: "Ilmu kedokteran Islam menempatkan penyelamatan jiwa (*Hifz an-Nafs*) sebagai prioritas kemanusiaan tertinggi.",
      pertanyaanReflektif: [
        "Mengapa Avicenna mampu memadukan filsafat medis dengan kepedulian kemanusiaan yang tinggi?"
      ],
      pesanAksi: "Menjaga kesehatan tubuh dan berkontribusi dalam perbaikan kualitas hidup sesama."
    },
    sources: ["Seyyed Hossein Nasr, Science and Civilization in Islam", "Edward G. Browne, Arabian Medicine"]
  },
  {
    id: "h-sains-ibnu-haytham-optik",
    label: "Ibnu al-Haytham: Bapak Optik Modern & Metode Ilmiah",
    category: "abbasiyah",
    timeLabel: "1021 M (412 H)",
    timeValue: 1021,
    description: "Al-Hasan ibn al-Haytham (Alhazen) menulis karya revolusioner **Kitab al-Manazir** (*Book of Optics*). Ia membuktikan secara eksperimental bahwa penglihatan terjadi karena cahaya masuk ke mata, merancang prinsip **Camera Obscura**, dan diakui sebagai **Bapak Metode Ilmiah Modern** karena penekanannya pada bukti empiris berbasis eksperimen berulang.",
    branch: "jalur-sains",
    quranRefs: [
      {
        surah: "An-Nur",
        ayat: 35,
        arabicText: "اللَّهُ نُورُ السَّمَاوَاتِ وَالأَرْضِ",
        paraphrase: "Allah (Pemberi) cahaya (kepada) langit dan bumi."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Tirmidzi",
        matan: "Man salaka thariqan yaltamisu fihi 'ilman sahhalallahu lahu thariqan ilal jannah",
        terjemahan: "Barangsiapa menempuh jalan untuk menuntut ilmu, Allah mudahkan baginya jalan menuju surga."
      }
    ],
    refleksi: {
      hikmah: "Pencarian kebenaran sains berbasis eksperimen empiris adalah wujud tadabbur atas tanda-tanda kebesaran Allah di alam semesta.",
      pertanyaanReflektif: [
        "Bagaimana metode ilmiah objektif Ibnu al-Haytham meletakkan dasar bagi sains modern?"
      ],
      pesanAksi: "Bersikap objektif, kritis, dan berpegang pada fakta empiris."
    },
    sources: ["A. I. Sabra, The Optics of Ibn al-Haytham", "Jim Al-Khalili, Pathfinders"]
  },
  {
    id: "h-sosiologi-ibnu-khaldun",
    label: "Ibnu Khaldun & Muqaddimah: Bapak Sosiologi & Sejarah",
    category: "andalusia",
    timeLabel: "1377 M (779 H)",
    timeValue: 1377,
    description: "Abdurrahman Ibnu Khaldun menulis karya monumental **Muqaddimah** di Afrika Utara & Al-Andalus. Ia merumuskan ilmu baru: **Ilm al-Umran** (Sosiologi Peradaban) dan teori **'Asabiyyah** (Solidaritas Sosial). Ia menjelaskan hukum pasang surut peradaban dan sirkulasi elit politik.",
    branch: "jalur-pemikiran",
    quranRefs: [
      {
        surah: "Ali 'Imran",
        ayat: 140,
        arabicText: "وَتِلْكَ الأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ",
        paraphrase: "Dan masa (kejayaan dan kehancuran) itu Kami pergilirkan di antara manusia."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Al-Mu'minu lil mu'mini kal bunyani yasyuddu ba'dhuhu ba'dha",
        terjemahan: "Seorang mukmin dengan mukmin lainnya bagaikan satu bangunan yang saling menguatkan."
      }
    ],
    refleksi: {
      hikmah: "Peradaban hancur bukan hanya karena serangan luar, melainkan karena krisis keadilan sosial dan kelemahan moralitas internal.",
      pertanyaanReflektif: [
        "Bagaimana konsep 'Asabiyyah Ibnu Khaldun relevan untuk menjaga persatuan bangsa saat ini?"
      ],
      pesanAksi: "Memperkuat keadilan sosial dan integritas moral dalam masyarakat."
    },
    sources: ["Ibn Khaldun, The Muqaddimah (trans. Franz Rosenthal)", "Robert Irwin, Ibn Khaldun"]
  },
  {
    id: "h-andalusia-zahrawi-bedah",
    label: "Al-Zahrawi (Albucasis): Pelopor Ilmu Bedah Modern",
    category: "andalusia",
    timeLabel: "1000 M (390 H)",
    timeValue: 1000,
    description: "Abu al-Qasim al-Zahrawi (Albucasis) dari Kordoba menulis ensiklopedia medis 30 jilid **Kitab al-Tasrif**. Jilid ke-30 mendedikasikan teknik pembedahan modern, merancang 200+ instrumen bedah (termasuk pisau bedah, jarum, dan catgut usus hewan untuk jahitan).",
    branch: "jalur-sains",
    quranRefs: [
      {
        surah: "Al-Ma'idah",
        ayat: 32,
        arabicText: "وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا",
        paraphrase: "Dan barangsiapa yang memelihara kehidupan seorang manusia, maka seolah-olah dia telah memelihara kehidupan manusia semuanya."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Abu Dawud",
        matan: "Innellaha anzala ad-da'a wad-dawa'a wa ja'ala likulli da'in dawa'an",
        terjemahan: "Sesungguhnya Allah telah menurunkan penyakit dan obat, serta menjadikan obat bagi setiap penyakit."
      }
    ],
    refleksi: {
      hikmah: "Inovasi instrumen medis Al-Zahrawi lahir dari rasa empati dan dorongan untuk meringankan penderitaan fisik sesama.",
      pertanyaanReflektif: [
        "Bagaimana integrasi keahlian medis dan nilai kemanusiaan mampu melintasi batas abad?"
      ],
      pesanAksi: "Bekerja dengan keahlian presisi tinggi demi kemaslahatan manusia."
    },
    sources: ["MS Spink & GL Lewis, Albucasis on Surgery", "Sami Hamarneh, Health Development in Islam"]
  },
  {
    id: "h-nusantara-aceh-utsmani",
    label: "Diplomasi Kesultanan Aceh & Khilafah Utsmaniyah",
    category: "nusantara",
    timeLabel: "1567 M (975 H)",
    timeValue: 1567,
    description: "Sultan Aceh Darussalam **Alauddin Riayat Syah Al-Kahar** mengutus delegasi ke Istanbul memohon bantuan militer melawan perompak Portugis di Selat Malaka. Khilafah Utsmaniyah mengirim pakar artileri, prajurit, dan meriam monumental **Lada Sicerek**, memperkuat kedaulatan maritim Islam Nusantara.",
    branch: "jalur-politik",
    quranRefs: [
      {
        surah: "Al-Anfal",
        ayat: 60,
        arabicText: "وَأَعِدُّوا لَهُمْ مَا اسْتَطَعْتُمْ مِنْ قُوَّةٍ",
        paraphrase: "Dan siapkanlah untuk menghadapi mereka kekuatan apa saja yang kamu sanggupi."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Muslim",
        matan: "Al-Muslimu akhul muslim la yazhlimuhu wa la yuslimuh",
        terjemahan: "Seorang Muslim adalah saudara bagi Muslim lainnya, tidak boleh menzaliminya dan tidak boleh membiarkannya teraniaya."
      }
    ],
    refleksi: {
      hikmah: "Jejaring persaudaraan Aceh-Utsmani menunjukkan solidaritas global dan posisi penting Nusantara dalam geopolitik dunia Islam.",
      pertanyaanReflektif: [
        "Bagaimana peran maritim Nusantara membangun hubungan internasional abad ke-16?"
      ],
      pesanAksi: "Membangun jejaring persaudaraan dan kolaborasi positif antar-komunitas."
    },
    sources: ["Anthony Reid, Southeast Asia in the Age of Commerce", "Hikayat Aceh"]
  },
  {
    id: "h-nusantara-resolusi-jihad",
    label: "Resolusi Jihad NU 1945: Membela Kemerdekaan Indonesia",
    category: "nusantara",
    timeLabel: "22 Oktober 1945 M",
    timeValue: 1945,
    description: "Pada 22 Oktober 1945 di Surabaya, **K.H. Hasyim Asy'ari** bersama para ulama Nahdlatul Ulama mencetuskan **Resolusi Jihad**. Fatwa ini menetapkan bahwa membela Tanah Air dari agresi Sekutu/NICA adalah kewajiban agama (*Fardhu 'Ain*), memicu Pertempuran 10 November 1945 di Surabaya.",
    branch: "jalur-utama",
    quranRefs: [
      {
        surah: "Al-Hajj",
        ayat: 39,
        arabicText: "أُذِنَ لِلَّذِينَ يُقَاتَلُونَ بِأَنَّهُمْ ظُلِمُوا",
        paraphrase: "Telah diizinkan (berperang) bagi orang-orang yang diperangi, karena sesungguhnya mereka telah dizalimi."
      }
    ],
    hadithRefs: [
      {
        perawi: "Ungkapan Hikmah Ulama",
        matan: "Hubbul wathan minal iman",
        terjemahan: "Cinta tanah air adalah bagian dari keimanan."
      }
    ],
    refleksi: {
      hikmah: "Nasionalisme dan keimanan di Indonesia saling menguatkan dalam mempertahankan kemerdekaan dan kedaulatan bangsa.",
      pertanyaanReflektif: [
        "Bagaimana fatwa Resolusi Jihad menyatukan semangat keagamaan dan kebangsaan?"
      ],
      pesanAksi: "Menjaga keutuhan NKRI dan memberikan kontribusi terbaik bagi bangsa."
    },
    sources: ["KH. Saifuddin Zuhri, Berangkat dari Pesantren", "Martin van Bruinessen, NU: Tradisi & Relasi Kuasa"]
  },
  {
    id: "h-nusantara-muhammadiyah-nu",
    label: "Kebangkitan Ormas Islam: Muhammadiyah & NU",
    category: "modern",
    timeLabel: "1912 M & 1926 M",
    timeValue: 1912,
    description: "Dua organisasi Islam terbesar lahir di Indonesia sebagai pilar peradaban:\n- **Muhammadiyah** (1912) didirikan oleh **K.H. Ahmad Dahlan** di Yogyakarta, berfokus pada pemurnian akidah, modernisasi sekolah, dan rumah sakit (*PKU*).\n- **Nahdlatul Ulama** (1926) didirikan oleh **K.H. Hasyim Asy'ari** di Surabaya, menjaga tradisi bermazhab *Ahlussunnah wal Jama'ah* dan jaringan pesantren.",
    branch: "jalur-pemikiran",
    quranRefs: [
      {
        surah: "Ali 'Imran",
        ayat: 104,
        arabicText: "وَلْتَكُنْ مِنْكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ",
        paraphrase: "Dan hendaklah ada di antara kamu segolongan umat yang menyeru kepada kebajikan."
      }
    ],
    hadithRefs: [
      {
        perawi: "HR. Thabrani",
        matan: "Khairunnas anfa'uhum linnas",
        terjemahan: "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya."
      }
    ],
    refleksi: {
      hikmah: "Muhammadiyah dan NU menjadi dua pilar utama peradaban Islam Nusantara yang membawa kemajuan sosial dan kerukunan berbangsa.",
      pertanyaanReflektif: [
        "Bagaimana model keorganisasian Islam Nusantara memberikan teladan keharmonisan bagi dunia kontemporer?"
      ],
      pesanAksi: "Menghormati keragaman pemikiran sosial-keagamaan dan mengutamakan persatuan."
    },
    sources: ["Deliar Noer, Gerakan Modern Islam di Indonesia", "Mitsuo Nakamura, The Crescent Arises"]
  },
  {
    id: "h-kenabian-darul-arqam",
    label: "Darul Arqam: Pusat Kaderisasi Generasi Awal Islam",
    category: "kenabian",
    timeLabel: "611 M (12 SM)",
    timeValue: 611,
    description: "Rumah sahabat Arqam bin Abil Arqam di bukit Shafa menjadi markas rahasia pembinaan tauhid, tazkiyatun nafs, dan pengajaran wahyu Al-Qur'an generasi awal (*As-Sabiqunal Awwalun*). Dari rumah sederhana ini lahir tokoh-tokoh pembawa perubahan peradaban Islam.",
    branch: "jalur-pemikiran",
    quranRefs: [
      { surah: "At-Taubah", ayat: 100, arabicText: "وَالسَّابِقُونَ الأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالأَنصَارِ", paraphrase: "Orang-orang yang terdahulu lagi yang pertama-tama (masuk Islam) di antara orang-orang muhajirin dan anshar." }
    ],
    hadithRefs: [
      { perawi: "HR. Bukhari", matan: "Khairun nasi qarni thummal ladzina yalunahum", terjemahan: "Sebaik-baik manusia adalah generasiku, kemudian generasi setelahnya." }
    ],
    refleksi: {
      hikmah: "Kekuatan peradaban diawali dari pembinaan karakter dan keimanan generasi muda dalam komunitas kecil yang solid.",
      pertanyaanReflektif: ["Bagaimana model kaderisasi Darul Arqam membentuk jiwa para sahabat Nabi?"],
      pesanAksi: "Membangun ruang kajian dan pembinaan karakter berbasis nilai-nilai kebaikan."
    },
    sources: ["Mubarakpuri, Ar-Raheeq Al-Makhtum", "Ibnu Hisyam, As-Sirah An-Nabawiyyah"]
  },
  {
    id: "h-kenabian-thaif-dakwah",
    label: "Ketabahan Dakwah ke Tha'if & Doa Pengampunan Nabi",
    category: "kenabian",
    timeLabel: "619 M (3 SM)",
    timeValue: 619,
    description: "Pasca wafatnya Abu Thalib & Khadijah, Nabi Muhammad ﷺ berjalan kaki ke Tha'if meminta perlindungan suku Tsaqif. Namun beliau dilempari batu hingga berdarah. Saat Malaikat Gunung menawarkan untuk meratakan Tha'if, Nabi memilih mendoakan petunjuk bagi keturunan mereka.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "Al-Anbiya", ayat: 107, arabicText: "وَمَا أَرْسَلْنَاكَ إِلاَّ رَحْمَةً لِلْعَالَمِينَ", paraphrase: "Dan tiadalah Kami mengutus kamu, melainkan untuk (menjadi) rahmat bagi semesta alam." }
    ],
    hadithRefs: [
      { perawi: "HR. Bukhari & Muslim", matan: "Allahumma-hdi qaumi fa-innahum la ya'lamun", terjemahan: "Ya Allah berilah petunjuk kepada kaumku, karena sesungguhnya mereka tidak mengetahui." }
    ],
    refleksi: {
      hikmah: "Puncak keagungan akhlak kenabian adalah membalas kezaliman ekstrem dengan doa kasih sayang dan pengampunan.",
      pertanyaanReflektif: ["Bagaimana kelapangan dada Nabi di Tha'if menginspirasi kepemimpinan berwawasan panjang?"],
      pesanAksi: "Menjauhi dendam dan mengedepankan kasih sayang dalam berinteraksi."
    },
    sources: ["Safiur Rahman Mubarakpuri, Ar-Raheeq Al-Makhtum"]
  },
  {
    id: "h-madinah-muakhah-pasar",
    label: "Mu'akhah & Pendirian Pasar Bebas Riba Madinah",
    category: "kenabian",
    timeLabel: "622 M (1 H)",
    timeValue: 622,
    description: "Nabi Muhammad ﷺ persaudarakan Kaum Muhajirin dan Anshar (*Mu'akhah*) serta mendirikan **Pasar Madinah** yang bebas monopoli, bebas kecurangan, dan bebas riba untuk membebaskan kemandirian ekonomi Muslim dari hegemoni tengkulak.",
    branch: "jalur-sains",
    quranRefs: [
      { surah: "Al-Baqarah", ayat: 275, arabicText: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا", paraphrase: "Padahal Allah telah menghalalkan jual beli dan mengharamkan riba." }
    ],
    hadithRefs: [
      { perawi: "HR. Ibnu Majah", matan: "Hatha suqukum la yuntaqashu wa la yudhribu 'alaihi kharaj", terjemahan: "Inilah pasar kalian, tidak boleh dikurangi ukurannya dan tidak boleh ditarik pajak padanya." }
    ],
    refleksi: {
      hikmah: "Kemandirian ekonomi berbasis keadilan sosial dan kejujuran pasar adalah pilar utama kedaulatan peradaban.",
      pertanyaanReflektif: ["Bagaimana model pasar Madinah membangun etika bisnis syariah tanpa riba?"],
      pesanAksi: "Menerapkan kejujuran dan etika keadilan dalam setiap transaksi ekonomi."
    },
    sources: ["Ira M. Lapidus, A History of Islamic Societies", "Ibnu Sa'ad, At-Thabaqat Al-Kubra"]
  },
  {
    id: "h-rasyidin-perang-yamamah",
    label: "Perang Yamamah & Pengorbanan para Huffaz Al-Qur'an",
    category: "khulafaur-rasyidin",
    timeLabel: "632 M (11 H)",
    timeValue: 632,
    description: "Pertempuran paling sengit dalam Perang Ridda di mana pasukan Abu Bakar yang dipimpin Khalid bin Walid menumpas nabi palsu Musailamah Al-Kazzab. Gugurnya 70+ penghafal Al-Qur'an (*Huffaz*) memicu keputusan bersejarah pengumpulan mushaf Al-Qur'an.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "Al-Hijr", ayat: 9, arabicText: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ", paraphrase: "Sesungguhnya Kamilah yang menurunkan Al-Qur'an, dan sesungguhnya Kami benar-benar memeliharanya." }
    ],
    hadithRefs: [
      { perawi: "HR. Bukhari", matan: "Innas qatla isytadda yaumal Yamamahi bi qurra'il Qur'an...", terjemahan: "Sesungguhnya korban gugur sangat banyak pada hari Yamamah di kalangan para penghafal Al-Qur'an." }
    ],
    refleksi: {
      hikmah: "Pengorbanan para Huffaz di Yamamah mengabadikan firman Allah dalam lembaran Mushaf yang kita baca hari ini.",
      pertanyaanReflektif: ["Bagaimana kesadaran para sahabat merespon krisis Yamamah untuk menyelamatkan otentisitas Al-Qur'an?"],
      pesanAksi: "Mencintai, menghafal, dan mengamalkan ajaran Al-Qur'an."
    },
    sources: ["Ibnu Katsir, Al-Bidayah wan-Nihayah", "At-Thabari, Tarikh ar-Rusul wal Muluk"]
  },
  {
    id: "h-rasyidin-perang-qadisiyyah",
    label: "Perang Al-Qadisiyyah & Tumbangnya Sassanid Persia",
    category: "khulafaur-rasyidin",
    timeLabel: "636 M (15 H)",
    timeValue: 636,
    description: "Pasukan Muslim pimpinan **Sa'ad bin Abi Waqqas** mengalahkan tentara Kekaisaran Sassanid Persia di bawah Panglima Rustam pada Pertempuran Al-Qadisiyyah. Kemenangan ini mengakhiri rintangan ekspansi ke wilayah timur dan membuka jalan Islam di Persia.",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "Al-Ahzab", ayat: 22, paraphrase: "Dan ketika orang-orang mumin melihat golongan-golongan yang bersekutu itu, mereka berkata : Inilah yang dijanjikan Allah dan Rasul-Nya kepada kita." }
    ],
    hadithRefs: [
      { perawi: "HR. Muslim", matan: "Idza halaka Kisra fala Kisra ba'dahu", terjemahan: "Apabila Chosroes (Persia) hancur, maka tidak akan ada Chosroes setelahnya." }
    ],
    refleksi: {
      hikmah: "Kepemimpinan yang bertawakal dan pasukan yang berdisiplin tinggi mampu meruntuhkan imperium adidaya kuno.",
      pertanyaanReflektif: ["Bagaimana dialog diplomasi Rib'i bin Amir di hadapan Rustam menunjukkan keteguhan akidah?"],
      pesanAksi: "Memiliki keberanian moral dalam membela kebenaran di manapun berada."
    },
    sources: ["Tabari, History of the Prophets and Kings", "Hugh Kennedy, The Great Arab Conquests"]
  },
  {
    id: "h-rasyidin-dzatus-sawari",
    label: "Perang Dzatus Sawari & Angkatan Laut Muslim Pertama",
    category: "khulafaur-rasyidin",
    timeLabel: "655 M (35 H)",
    timeValue: 655,
    description: "Pertempuran Laut Dzatus Sawari (*Battle of the Masts*) di Laut Tengah di mana armada laut Muslim di bawah Muawiyah bin Abi Sufyan dan Abdullah bin Sa'ad mengalahkan 500 kapal perang Bizantium di bawah Kaisar Constans II, menegaskan supremasi maritim Islam.",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "Ar-Rum", ayat: 41, paraphrase: "Telah tampak kerusakan di darat dan di laut disebabkan karena perbuatan tangan manusia." }
    ],
    hadithRefs: [
      { perawi: "HR. Bukhari", matan: "Awwalu jaisyin min ummati yaghzunal bahra qad aujabu", terjemahan: "Pasukan pertama dari umatku yang berperang di lautan sungguh telah dipastikan surga bagi mereka." }
    ],
    refleksi: {
      hikmah: "Inovasi kebaharian dan penguasaan laut menjadi kunci perlindungan kedaulatan peradaban.",
      pertanyaanReflektif: ["Bagaimana pembentukan armada laut pertama Utsman mengubah peta strategi militer Mediterania?"],
      pesanAksi: "Terus berinovasi dan menguasai teknologi strategis modern."
    },
    sources: ["Aly Mohamed Fahmy, Muslim Sea-Power in the Eastern Mediterranean"]
  },
  {
    id: "h-umayyah-tariq-gibraltar",
    label: "Tariq bin Ziyad & Penaklukan Selat Gibraltar Andalusia",
    category: "umayyah",
    timeLabel: "711 M (92 H)",
    timeValue: 711,
    description: "Panglima **Tariq bin Ziyad** menyeberangi selat antara Afrika Utara dan Spanyol (*Jabal Tariq* / Gibraltar), mengalahkan Raja Visigoth Roderic pada Pertempuran Guadalete (711 M). Peristiwa ini membuka gerbang 800 tahun peradaban Islam Al-Andalus di Spanyol.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "Ali 'Imran", ayat: 139, arabicText: "وَلاَ تَهِنُوا وَلاَ تَحْزَنُوا وَأَنْتُمُ الأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ", paraphrase: "Janganlah kamu bersikap lemah, dan janganlah (pula) kamu bersedih hati, padahal kamulah orang-orang yang paling tinggi (derajatnya), jika kamu orang-orang yang beriman." }
    ],
    hadithRefs: [
      { perawi: "HR. Muslim", matan: "Innal aradha zuyi-yat li fa-ra'aitu masyaariqaha wa maghaatibaha", terjemahan: "Sesungguhnya bumi dilihatkan kepadaku, maka aku melihat timur dan baratnya." }
    ],
    refleksi: {
      hikmah: "Keberanian melangkah menyeberangi lautan membuka babak baru pusat peradaban ilmu pengetahuan di Eropa.",
      pertanyaanReflektif: ["Bagaimana pidato monumental Tariq bin Ziyad meyakinkan pasukannya untuk pantang menyerah?"],
      pesanAksi: "Fokus pada cita-cita besar dan tidak ragu mengambil tindakan terukur."
    },
    sources: ["W. Montgomery Watt, A History of Islamic Spain", "Ibnu Abdul Hakam, Futuh Mishr wal Maghrib"]
  },
  {
    id: "h-abbasiyah-pembangunan-baghdad",
    label: "Pembangunan Baghdad: Kota Perdamaian Madinat as-Salam",
    category: "abbasiyah",
    timeLabel: "762 M (145 H)",
    timeValue: 762,
    description: "Khalifah Abbasiyah **Abu Ja'far Al-Mansur** mendirikan kota melingkar megah **Baghdad** (*Madinat as-Salam*) di tepi Sungai Tigris. Baghdad tumbuh menjadi kota metropolitan terbesar di dunia dengan sistem perairan canggih, rumah sakit, perpustakaan, dan pusat sains global.",
    branch: "jalur-sains",
    quranRefs: [
      { surah: "Yunus", ayat: 25, arabicText: "وَاللَّهُ يَدْعُو إِلَى دَارِ السَّلامِ", paraphrase: "Dan Allah menyeru (manusia) ke Darussalam (surga/negeri kedamaian)." }
    ],
    hadithRefs: [
      { perawi: "HR. Abu Dawud", matan: "Innama al-imamu zhummu-n yutaqatalu min wara'ih", terjemahan: "Sesungguhnya penguasa itu adalah perisai pelindung rakyatnya." }
    ],
    refleksi: {
      hikmah: "Tata kota yang dirancang dengan keindahan arsitektur dan pusat keilmuan melahirkan zaman keemasan peradaban.",
      pertanyaanReflektif: ["Mengapa rancangan bundar Kota Baghdad Al-Mansur diakui sebagai keajaiban tata kota abad pertengahan?"],
      pesanAksi: "Merencanakan dan membangun fasilitas umum dengan nilai efisiensi dan estetika tinggi."
    },
    sources: ["Gaston Wiet, Baghdad: Metropolis of the Abbasid Caliphate", "Ira M. Lapidus"]
  },
  {
    id: "h-abbasiyah-al-kindi-filsafat",
    label: "Al-Kindi: Filsuf Arab Pertama & Integrasi Rasionalitas",
    category: "abbasiyah",
    timeLabel: "850 M (235 H)",
    timeValue: 850,
    description: "Abu Yusuf Ya'qub ibn Ishaq al-Kindi (*Alkindus*), filsuf Arab pertama di Baghdad, memelopori integrasi filsafat Aristoteles & Neoplatonisme dengan akidah tauhid. Ia menulis risalah optik, kriptografi, musik, dan pengobatan.",
    branch: "jalur-pemikiran",
    quranRefs: [
      { surah: "Al-Baqarah", ayat: 269, arabicText: "يُؤْتِي الْحِكْمَةَ مَنْ يَشَاءُ وَمَنْ يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا", paraphrase: "Allah menganugerahkan Al-Hikmah (kepahaman yang dalam tentang Al-Qur'an dan As-Sunnah) kepada siapa yang dikehendaki-Nya." }
    ],
    hadithRefs: [
      { perawi: "HR. Tirmidzi", matan: "Al-Hikmatu dhallatul mu'min fahuwa ahaqqu biha haithu wajadaha", terjemahan: "Hikmah kebenaran adalah barang hilang milik orang mukmin, di manapun ia menemukannya maka ia paling berhak mengambilnya." }
    ],
    refleksi: {
      hikmah: "Kebenaran dari manapun datangnya adalah milik keimanan yang harus diserap secara kritis dan rasional.",
      pertanyaanReflektif: ["Bagaimana Al-Kindi menunjukkan sikap terbuka terhadap warisan pemikiran peradaban Yunani kuno?"],
      pesanAksi: "Bersikap terbuka terhadap ilmu pengetahuan global seraya menyaringnya dengan keimanan."
    },
    sources: ["Peter Adamson, Al-Kindi", "Henry Corbin, History of Islamic Philosophy"]
  },
  {
    id: "h-abbasiyah-al-farabi-musik",
    label: "Al-Farabi (Alpharabius): Guru Kedua & Negara Utama",
    category: "abbasiyah",
    timeLabel: "950 M (339 H)",
    timeValue: 950,
    description: "Abu Nashr Al-Farabi dijuluki *Al-Mu'allim Ats-Tsani* (Guru Kedua setelah Aristoteles). Karya politiknya **Ara' Ahl al-Madinah al-Fadhilah** merumuskan teori negara ideal berkeadilan, serta kitab **Kitab al-Musiqa al-Kabir** merumuskan teori musik dan frekuensi suara.",
    branch: "jalur-pemikiran",
    quranRefs: [
      { surah: "Al-A'raf", ayat: 96, paraphrase: "Jikalau sekiranya penduduk negeri-negeri beriman dan bertakwa, pastilah Kami akan melimpahkan kepada mereka berkah dari langit dan bumi." }
    ],
    hadithRefs: [
      { perawi: "HR. Muslim", matan: "Innellaha kataba al-ihsana 'ala kulli syai'", terjemahan: "Sesungguhnya Allah mewajibkan kebaikan (keunggulan) atas segala sesuatu." }
    ],
    refleksi: {
      hikmah: "Negara utama adalah negara yang dipimpin oleh pemimpin berilmu, berakhlak mulia, dan berorientasi pada kebahagiaan warga.",
      pertanyaanReflektif: ["Bagaimana gagasan Al-Madinah Al-Fadhilah Al-Farabi mengilhami konsep tata kelola negara modern?"],
      pesanAksi: "Mewujudkan keharmonisan sosial dan integritas dalam kepemimpinan."
    },
    sources: ["F.W. Zimmermann, Al-Farabi's Commentary", "Majid Fakhry, A History of Islamic Philosophy"]
  },
  {
    id: "h-abbasiyah-madrasah-nizamiyah",
    label: "Nizam al-Mulk & Pendirian Madrasah Nizamiyah Baghdad",
    category: "abbasiyah",
    timeLabel: "1065 M (457 H)",
    timeValue: 1065,
    description: "Wazir Dinasti Seljuk **Nizam al-Mulk** mendirikan jaringan universitas publik pertama **Madrasah Nizamiyah** di Baghdad dan Nishapur. Lembaga ini menyediakan pendidikan gratis, beasiswa mahasiswa, perpustakaan riset, dan melahirkan ulama besar seperti Imam Al-Ghazali.",
    branch: "jalur-pemikiran",
    quranRefs: [
      { surah: "Al-Mujadilah", ayat: 11, arabicText: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ", paraphrase: "Niscaya Allah akan meninggikan orang-orang yang beriman di antara kamu dan orang-orang yang diberi ilmu pengetahuan beberapa derajat." }
    ],
    hadithRefs: [
      { perawi: "HR. Muslim", matan: "Idza mata ibn Adama inqatha'a 'amaluhu illa min thalathin... 'ilmin yuntafa'u bih", terjemahan: "Apabila manusia meninggal dunia, terputuslah amalnya kecuali tiga perkara... salah satunya ilmu yang bermanfaat." }
    ],
    refleksi: {
      hikmah: "Institusionalisasi pendidikan publik dan beasiswa mahasiswa adalah fondasi utama keberlanjutan peradaban.",
      pertanyaanReflektif: ["Bagaimana sistem asrama dan beasiswa Madrasah Nizamiyah menginspirasi universitas modern?"],
      pesanAksi: "Mendukung wakaf pendidikan dan pemerataan akses ilmu pengetahuan."
    },
    sources: ["George Makdisi, The Rise of Colleges: Institutions of Learning in Islam"]
  },
  {
    id: "h-andalusia-abdurrahman-dakhil",
    label: "Abdurrahman Ad-Dakhil & Pendirian Keamiran Kordoba",
    category: "andalusia",
    timeRange: "756 M (138 H)",
    timeValue: 756,
    description: "Abdurrahman I (*Ad-Dakhil* / Elang Quraisy), satu-satunya pangeran Umayyah yang selamat dari pembantaian Abbasiyah, menyeberang ke Spanyol dan mendirikan Keamiran Umayyah Kordoba (756 M). Ia membangun Masjid Agung Kordoba (*Mezquita*) dan meletakkan dasar zaman keemasan Islam Spanyol.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "Al-Qasas", ayat: 5, paraphrase: "Dan Kami hendak memberi karunia kepada orang-orang yang tertindas di bumi itu dan hendak menjadikan mereka pemimpin dan menjadikan mereka orang-orang yang mewarisi (bumi)." }
    ],
    hadithRefs: [
      { perawi: "HR. Tirmidzi", matan: "Al-Mu'minu al-qawiyyu khairun wa ahabbu ilallahi min al-mu'mini adh-dha'if", terjemahan: "Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah." }
    ],
    refleksi: {
      hikmah: "Resiliensi pribadi di tengah krisis ekstrem mampu mengubah kejatuhan menjadi kebangkitan imperium sains megah.",
      pertanyaanReflektif: ["Bagaimana ketangguhan jiwa Abdurrahman Ad-Dakhil membantunya mendirikan Kordoba dari nol?"],
      pesanAksi: "Pantang menyerah saat menghadapi kegagalan dan memulai kembali dengan visi baru."
    },
    sources: ["Hugh Kennedy, Muslim Spain and Portugal", "Ibnu Hayyan, Al-Muqtabis"]
  },
  {
    id: "h-andalusia-ibnu-tufail",
    label: "Ibnu Tufail & Novel Filosofis Hayy ibn Yaqdhan",
    category: "andalusia",
    timeLabel: "1185 M (581 H)",
    timeValue: 1185,
    description: "Filsuf Al-Andalus Abu Bakr Ibnu Tufail menulis **Hayy ibn Yaqdhan** (*Alive, Son of Awake*), novel alegoris sains-filsafat pertama di dunia. Novel ini menceritakan anak manusia yang tumbuh sendirian di pulau terpencil dan berhasil menemukan kebenaran Tauhid & sains murni hanya melalui observasi akal rasional.",
    branch: "jalur-pemikiran",
    quranRefs: [
      { surah: "Fussilat", ayat: 53, arabicText: "سَنُرِيهِمْ آيَاتِنَا فِي الآفَاقِ وَفِي أَنْفُسِهِمْ حَتَّى يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ", paraphrase: "Kami akan memperlihatkan kepada mereka tanda-tanda (kekuasaan) Kami di segenap ufuk dan pada diri mereka sendiri, sehingga jelaslah bagi mereka bahwa Al-Qur'an itu adalah benar." }
    ],
    hadithRefs: [
      { perawi: "HR. Bukhari", matan: "Kullu mauludin yuladu 'alal fithrah", terjemahan: "Setiap anak dilahirkan di atas fitrah (kesucian akal dan iman)." }
    ],
    refleksi: {
      hikmah: "Akal rasional yang jernih dan tadabbur alam secara alamiah akan membimbing manusia menuju kebenaran Sang Pencipta.",
      pertanyaanReflektif: ["Mengapa novel Hayy ibn Yaqdhan diterjemahkan ke bahasa Latin dan mempengaruhi filsuf Eropa seperti John Locke?"],
      pesanAksi: "Melatih daya pikir mandiri dan mengamati tanda-tanda kebesaran Ilahi di alam sekitar."
    },
    sources: ["Lenn E. Goodman, Ibn Tufayl's Hayy Ibn Yaqzan", "Sami S. Hawi, Islamic Naturalism"]
  },
  {
    id: "h-andalusia-alhambra-granada",
    label: "Istana Alhambra Granada: Puncak Seni Arsitektur Spanyol",
    category: "andalusia",
    timeLabel: "1238 M (635 H)",
    timeValue: 1238,
    description: "Sultan Nasrid **Muhammad I ibn al-Ahmar** mulai membangun kompleks istana benteng **Alhambra** (*Al-Hamra*) di puncak bukit Granada. Alhambra menjadi mahakarya arsitektur, kaligrafi ukir *'La Ghaliba Illallah'*, dan sistem taman irigasi air terjun terindah di Eropa.",
    branch: "jalur-sains",
    quranRefs: [
      { surah: "An-Naml", ayat: 40, paraphrase: "Ini termasuk kurnia Tuhanku untuk mencoba aku apakah aku bersyukur atau mengingkari (akan nikmat-Nya)." }
    ],
    hadithRefs: [
      { perawi: "HR. Muslim", matan: "Innellaha jamilun yuhibbul jamal", terjemahan: "Sesungguhnya Allah itu Maha Indah dan menyukai keindahan." }
    ],
    refleksi: {
      hikmah: "Keindahan seni arsitektur Alhambra diukiri pesan kerendahan hati: 'Tidak ada pemenang selain Allah'.",
      pertanyaanReflektif: ["Bagaimana peradaban Granada mengekspresikan nilai spiritualitas melalui seni ukir arsitektur?"],
      pesanAksi: "Menghadirkan nilai estetika dan kesucian dalam setiap karya cipta."
    },
    sources: ["Oleg Grabar, The Alhambra", "Robert Irwin, The Alhambra"]
  },
  {
    id: "h-mamluk-qutuz-baibars",
    label: "Sultan Qutuz & Panglima Baibars: Penyelamat di Ain Jalut",
    category: "andalusia",
    timeLabel: "1260 M (658 H)",
    timeValue: 1260,
    description: "Pasca jatuhnya Baghdad oleh Mongol 1258 M, Sultan Mamluk Mesir **Saifuddin Qutuz** dan Panglima **Ruknuddin Baibars** menyatukan tentara Muslim dan menyerukan seruan *'Wa Islamah!'*. Di Lembah Ain Jalut (Palestina), mereka melancarkan taktik pura-pura mundur dan memukul hancur pasukan Mongol.",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "Al-Baqarah", ayat: 249, arabicText: "كَمْ مِنْ فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ", paraphrase: "Berapa banyak terjadi golongan yang sedikit dapat mengalahkan golongan yang banyak dengan izin Allah." }
    ],
    hadithRefs: [
      { perawi: "HR. Ahmad", matan: "Man qatala tahta rayatin 'immiyyatin... fa qitlatuhu jahiliyyah", terjemahan: "Niat perjuangan haruslah murni menegakkan keadilan dan kebenaran Ilahi." }
    ],
    refleksi: {
      hikmah: "Keberanian pemimpin menyatukan barisan di saat krisis kritis mampu menyelamatkan peradaban dari kepunahan.",
      pertanyaanReflektif: ["Mengapa Kemenangan Ain Jalut diakui sebagai titik balik terpenting dalam sejarah militer dunia?"],
      pesanAksi: "Bersatu dalam kebaikan dan teguh berdiri membela kebenaran di masa sulit."
    },
    sources: ["Reuven Amitai-Preiss, Mongols and Mamluks", "Steven Runciman, A History of the Crusades"]
  },
  {
    id: "h-utsmani-kanun-sulaiman",
    label: "Sultan Sulaiman Al-Qanuni & Kodifikasi Kanun Utsmani",
    category: "tiga-kerajaan",
    timeLabel: "1520 M (926 H)",
    timeValue: 1520,
    description: "Sultan Utsmani **Sulaiman I** (*Suleiman the Magnificent / Al-Qanuni*) merumuskan kitab undang-undang **Kanun-i Osmani**. Undang-undang ini menyelaraskan Fiqh Syariah dengan hukum administrasi negara, menjamin hak minoritas Kristen/Yahudi, dan merestrukturisasi pajak imperium.",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "An-Nisa", ayat: 58, arabicText: "وَإِذَا حَكَمْتُمْ بَيْنَ النَّاسِ أَنْ تَحْكُمُوا بِالْعَدْلِ", paraphrase: "Dan (apabila) menetapkan hukum di antara manusia supaya kamu menetapkan dengan adil." }
    ],
    hadithRefs: [
      { perawi: "HR. Muslim", matan: "Inna al-muqsithina 'indallahi 'ala manabira min nur", terjemahan: "Sesungguhnya orang-orang yang berlaku adil dalam hukum berada di atas mimbar-mimbar cahaya di sisi Allah." }
    ],
    refleksi: {
      hikmah: "Kepastian hukum yang adil dan inklusif bagi seluruh warga adalah kunci stabilitas kekaisaran multi-etnis.",
      pertanyaanReflektif: ["Mengapa Sultan Sulaiman lebih dikenal di dunia Islam sebagai 'Al-Qanuni' (Pembuat Undang-undang) daripada penakluk militer?"],
      pesanAksi: "Menegakkan aturan hukum dengan penuh keadilan dan tanpa pandang bulu."
    },
    sources: ["Halil Inalcik, The Ottoman Empire: The Classical Age", "Colin Imber, The Ottoman Empire"]
  },
  {
    id: "h-utsmani-mimar-sinan",
    label: "Mimar Sinan & Arsitektur Megah Masjid Suleymaniye",
    category: "tiga-kerajaan",
    timeLabel: "1557 M (964 H)",
    timeValue: 1557,
    description: "Arsitek genius Kekaisaran Utsmani **Mimar Sinan** merancang mahakarya arsitektur **Masjid Suleymaniye** di Istanbul dan Masjid Selimiye di Edirne. Sinan menyempurnakan kubah raksasa, akustik suara, dan ketahanan gempa bumi yang bertahan selama lebih dari 400 tahun.",
    branch: "jalur-sains",
    quranRefs: [
      { surah: "At-Taubah", ayat: 18, arabicText: "إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الآخِرِ", paraphrase: "Hanya yang memakmurkan masjid-masjid Allah ialah orang-orang yang beriman kepada Allah dan Hari kemudian." }
    ],
    hadithRefs: [
      { perawi: "HR. Bukhari", matan: "Man bana masjidan lillahi bana allahu lahu baithan fil jannah", terjemahan: "Barangsiapa membangun masjid karena Allah, Allah bangunkan baginya rumah di surga." }
    ],
    refleksi: {
      hikmah: "Keahlian teknik arsitektur yang dipadukan dengan keikhlasan niat melahirkan karya fisik yang menginspirasi peradaban.",
      pertanyaanReflektif: ["Bagaimana teknik peredam gempa dan sirkulasi udara Mimar Sinan mendahului teknologi bangunan modern?"],
      pesanAksi: "Melakukan setiap pekerjaan teknik dan seni dengan standar profesionalisme tertinggi (*Ihsan*)."
    },
    sources: ["Dogan Kuban, Ottoman Architecture", "J.M. Rogers, Sinan"]
  },
  {
    id: "h-safawi-shah-abbas-isfahan",
    label: "Shah Abbas I & Kemegahan Isfahan Setengah Dunia",
    category: "tiga-kerajaan",
    timeLabel: "1598 M (1007 H)",
    timeValue: 1598,
    description: "Penguasa Dinasti Safawi Persia **Shah Abbas I** memindahkan ibu kota ke **Isfahan** dan membangun Alun-alun monumental **Naqsh-e Jahan**, Masjid Shah berukir keramik biru pirus, dan Istana Ali Qapu. Isfahan dijuluki '*Isfahan Nisf-e Jahan*' (Isfahan adalah Setengah Dunia).",
    branch: "jalur-sains",
    quranRefs: [
      { surah: "Al-A'raf", ayat: 32, paraphrase: "Katakanlah: Siapakah yang mengharamkan perhiasan dari Allah yang telah Dikeluarkan-Nya untuk hamba-hamba-Nya dan (siapa pulakah yang mengharamkan) rezeki yang baik?" }
    ],
    hadithRefs: [
      { perawi: "HR. Muslim", matan: "Innellaha yuhibbu idza 'amila ahadukum 'amalan an yutqinah", terjemahan: "Sesungguhnya Allah menyukai jika salah seorang dari kalian melakukan suatu pekerjaan, ia melakukannya secara tekun dan sempurna (Itqan)." }
    ],
    refleksi: {
      hikmah: "Pencapaian seni arsitektur dan kerajinan keramik Persia membuktikan kekayaan ekspresi budaya dalam peradaban Islam.",
      pertanyaanReflektif: ["Bagaimana rancangan Naqsh-e Jahan Isfahan memadukan pusat pemerintahan, ibadah, dan perdagangan pasar?"],
      pesanAksi: "Mengembangkan karya seni dan budaya bernilai tinggi yang memperhalus budi pekerja."
    },
    sources: ["Roger Savory, Iran Under the Safavids", "Stephen P. Blake, Half the World: Isfahan"]
  },
  {
    id: "h-mughal-shah-jahan-tajmahal",
    label: "Shah Jahan & Mahakarya Arsitektur Taj Mahal Agra",
    category: "tiga-kerajaan",
    timeLabel: "1632 M (1042 H)",
    timeValue: 1632,
    description: "Kaisar Dinasti Mughal India **Shah Jahan** membangun **Taj Mahal** di Agra dari marmer putih berukir seni kaligrafi Al-Qur'an sebagai monumen kenangan bagi permaisurinya Mumtaz Mahal. Taj Mahal diakui sebagai salah satu Keajaiban Dunia terindah.",
    branch: "jalur-sains",
    quranRefs: [
      { surah: "Fajr", ayat: 27, arabicText: "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ﴿٢٧﴾ ارْجِعِي إِلَى رَبِّكِ رَاضِيَةً مَرْضِيَّةً", paraphrase: "Wahai jiwa yang tenang, kembalilah kepada Tuhanmu dengan hati yang puas lagi diridhai-Nya." }
    ],
    hadithRefs: [
      { perawi: "HR. Tirmidzi", matan: "Al-Arwahu junudun mujannadah...", terjemahan: "Ruh-ruh manusia adalah pasukan yang terhimpun dalam ikatan kasih sayang." }
    ],
    refleksi: {
      hikmah: "Seni pahat kaligrafi dan arsitektur marmer Taj Mahal memanifestasikan keindahan cinta dan pengingat akan keabadian akhirat.",
      pertanyaanReflektif: ["Mengapa ayat-ayat Al-Qur'an tentang Surah Surga dipahat menghiasi dinding marmer Taj Mahal?"],
      pesanAksi: "Mewariskan karya dan kebaikan yang membawa manfaat berkesinambungan."
    },
    sources: ["Ebba Koch, The Complete Taj Mahal", "Catherine B. Asher, Architecture of Mughal India"]
  },
  {
    id: "h-nusantara-barus-teori",
    label: "Pelabuhan Barus Sumatra: Pintu Masuk Islam Abad 7 M",
    category: "nusantara",
    timeLabel: "650 M (30 H)",
    timeValue: 650,
    description: "Kota pelabuhan kuno **Barus** di pesisir barat Sumatra Utara menjadi titik awal persinggahan pedagang Arab dan Persia sejak abad ke-7 M (masa Khulafaur Rasyidin). Penemuan makam kuno *Papan Tinggi* beraksara Arab membuktikan Islam telah hadir di Nusantara sejak era awal kenabian.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "Al-Hujurat", ayat: 13, arabicText: "وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا", paraphrase: "Dan Kami jadikan kamu berbangsa-bangsa dan bersuku-suku supaya kamu saling kenal-mengenal." }
    ],
    hadithRefs: [
      { perawi: "HR. Bukhari", matan: "Ballighu 'anni walau ayah", terjemahan: "Sampaikanlah dariku walau hanya satu ayat." }
    ],
    refleksi: {
      hikmah: "Jalur perdagangan rempah-rempah maritim menjadi jembatan awal penyebaran Islam secara damai di Nusantara.",
      pertanyaanReflektif: ["Bagaimana bukti arkeologis situs Barus mendukung Teori Makkah kedatangan Islam di Indonesia?"],
      pesanAksi: "Menjalin persaudaraan dan perdagangan yang jujur lintas bangsa."
    },
    sources: ["Hamka, Sejarah Umat Islam", "Claude Guillot, Histoire de Barus"]
  },
  {
    id: "h-nusantara-samudera-pasai",
    label: "Sultan Malik al-Saleh & Kesultanan Samudera Pasai",
    category: "nusantara",
    timeLabel: "1267 M (665 H)",
    timeValue: 1267,
    description: "Meurah Silu memeluk Islam dan bergelar **Sultan Malik al-Saleh**, mendirikan Kesultanan Samudera Pasai di Aceh sebagai kesultanan Islam pertama di Nusantara. Pasai menjadi pusat studi Fiqh Mazhab Syafi'i dan pusat perdagangan lada internasional.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "An-Nahl", ayat: 90, paraphrase: "Sesungguhnya Allah menyuruh (kamu) berlaku adil dan berbuat kebajikan, memberi kepada kaum kerabat." }
    ],
    hadithRefs: [
      { perawi: "Catatan Ibnu Battuta", matan: "Sultan Pasai al-Malik azh-Zhahir adalah raja yang rendah hati dan mencintai ulama", terjemahan: "Kesultanan Pasai menjadi benteng kajian Fiqh Mazhab Syafi'i di Asia Tenggara." }
    ],
    refleksi: {
      hikmah: "Pembentukan institusi kesultanan Islam pertama meletakkan fondasi tradisi intelektual Fiqh Syafi'iyah di Nusantara.",
      pertanyaanReflektif: ["Bagaimana Ibnu Battuta menggambarkan kesalehan dan keterbukaan intelektual Kesultanan Pasai saat berkunjung tahun 1345 M?"],
      pesanAksi: "Mendukung pengembangan ilmu keislaman dan tata kelola berkeadilan."
    },
    sources: ["Ibnu Battuta, Rihlah Ibn Battuta", "A. Hasjmy, Sejarah Kebudayaan Islam di Indonesia"]
  },
  {
    id: "h-nusantara-kesultanan-demak",
    label: "Raden Patah & Kesultanan Islam Demak Bintoro",
    category: "nusantara",
    timeLabel: "1478 M (883 H)",
    timeValue: 1478,
    description: "Putra Brawijaya V, **Raden Patah**, dengan bimbingan Wali Songo mendirikan Kesultanan Demak Bintoro sebagai kesultanan Islam pertama di Jawa. Pembangunan **Masjid Agung Demak** dengan tiang *Tatal* Sunan Kalijaga menjadi simbol persatuan dakwah Islam.",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "Al-Baqarah", ayat: 193, paraphrase: "Dan perangilah mereka itu, sehingga tidak ada fitnah lagi dan ketaatan itu hanya semata-mata untuk Allah." }
    ],
    hadithRefs: [
      { perawi: "HR. Muslim", matan: "Man sanna fil islami sunnatan hasanatan falahu ajruha...", terjemahan: "Barangsiapa memelopori suatu tradisi kebaikan dalam Islam, baginya pahala tradisi tersebut dan pahala orang yang mengamalkannya." }
    ],
    refleksi: {
      hikmah: "Transisi kekuasaan secara damai berbasis akulturasi budaya mempercepat penerimaan Islam di masyarakat Jawa.",
      pertanyaanReflektif: ["Bagaimana struktur kepemimpinan Demak memadukan otoritas politik dan bimbingan spiritual Wali Songo?"],
      pesanAksi: "Merawat warisan tradisi luhur dan menggunakannya untuk kebaikan bersama."
    },
    sources: ["H.J. de Graaf & T.G.Th. Pigeaud, Kerajaan-Kerajaan Islam di Jawa", "Babad Tanah Jawi"]
  },
  {
    id: "h-nusantara-sultan-agung-mataram",
    label: "Sultan Agung Mataram: Kalender Jawa & Serangan Batavia",
    category: "nusantara",
    timeLabel: "1628 M (1038 H)",
    timeValue: 1628,
    description: "Sultan Mataram Islam **Sultan Agung Hanyokrokusumo** (1613–1645) menciptakan **Kalender Jawa** (integrasi Saka & Hijriah), menulis karya sastra filsafat *Serat Sastra Gendhing*, dan memimpin dua kali serangan militer besar ke Batavia melawan VOC (1628 & 1629).",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "Al-Jumu'ah", ayat: 10, paraphrase: "Apabila telah ditunaikan shalat, maka bertebaranlah kamu di muka bumi; dan carilah karunia Allah dan ingatlah Allah banyak-banyak supaya kamu beruntung." }
    ],
    hadithRefs: [
      { perawi: "Gelar Diplomasi Utsmani", matan: "Sultan Ratu Abdul Fattah Al-Matarami", terjemahan: "Pengakuannya sebagai Sultan Mataram Islam yang menjalin hubungan dengan Mekkah & Utsmani." }
    ],
    refleksi: {
      hikmah: "Kepemimpinan Sultan Agung memadukan keahlian strategi militer, kebijakan kebudayaan Jawa-Islam, dan keteguhan anti-kolonialisme.",
      pertanyaanReflektif: ["Mengapa penciptaan Kalender Jawa oleh Sultan Agung diakui sebagai bentuk genius akulturasi budaya?"],
      pesanAksi: "Menjaga kedaulatan bangsa dan melestarikan kekayaan budaya lokal yang bernilai religius."
    },
    sources: ["H.J. de Graaf, Puncak Kekuasaan Mataram", "M.C. Ricklefs, A History of Modern Indonesia"]
  },
  {
    id: "h-nusantara-sultan-babullah-ternate",
    label: "Sultan Babullah Ternate: Pengusiran Portugis & 72 Pulau",
    category: "nusantara",
    timeLabel: "1575 M (983 H)",
    timeValue: 1575,
    description: "Sultan Kesultanan Ternate **Sultan Babullah** memimpin perlawanan bersenjata mengusir penjajah Portugis dari Benteng Kastela (1575 M) setelah gugurnya Sultan Khairun. Ia memperluas pengaruh Kesultanan Ternate mencakup 72 pulau di Maluku, Sulawesi, hingga Filipina Selatan.",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "An-Nisa", ayat: 75, paraphrase: "Mengapa kamu tidak mau berperang di jalan Allah dan (membela) orang-orang yang lemah di antara laki-laki, wanita-wanita maupun anak-anak." }
    ],
    hadithRefs: [
      { perawi: "Catatan Sejarah Maluku", matan: "Penguasa 72 Pulau yang mengibarkan panji kebebasan dari penjajahan barat", terjemahan: "Perjuangan mengusir penderitaan monopoli perdagangan rempah Portugis." }
    ],
    refleksi: {
      hikmah: "Kekuatan maritim Indonesia timur membuktikan keberanian mengusir imperialisme asing demi kehormatan tanah air.",
      pertanyaanReflektif: ["Bagaimana Sultan Babullah membangun simpul persatuan 72 pulau di Indonesia timur?"],
      pesanAksi: "Menjaga persatuan wilayah Nusantara dan menolak segala bentuk penindasan."
    },
    sources: ["M. Adnan Amal, Sejarah Maluku Utara", "Willard A. Hanna, Turbulent Times in Ternate"]
  },
  {
    id: "h-renovasi-kabah-hajar",
    label: "Renovasi Ka'bah & Kebijaksanaan Peletakan Hajar Aswad",
    category: "pra-islam",
    timeLabel: "605 M (15 SM)",
    timeValue: 605,
    description: "Banjir besar merusak bangunan Ka'bah. Suku-suku Quraisy bergotong royong merenovasi Ka'bah, namun berselisih hampir bertumpah darah memperebutkan kehormatan memindahkan **Hajar Aswad**.\n\nNabi Muhammad ﷺ (saat berusia 35 tahun) ditunjuk sebagai hakim. Beliau menggelar kainnya, meletakkan Hajar Aswad di tengah, dan meminta setiap pemuka suku memegang tepi kain bersama-sama. Kebijaksanaan damai ini menghindarkan perang saudara di Makkah.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "Al-Baqarah", ayat: 127, paraphrase: "Dan (ingatlah), ketika Ibrahim meninggikan (membina) dasar-dasar Baitullah bersama Ismail." }
    ],
    hadithRefs: [
      { perawi: "HR. Ahmad & Ibnu Hasyim", matan: "Hadza al-amin, radhina bih, hadza Muhammad", terjemahan: "Inilah al-Amin (yang terpercaya), kami ridha dengannya, inilah Muhammad." }
    ],
    refleksi: {
      hikmah: "Kepemimpinan yang adil dan berwawasan luas mampu menyatukan kelompok-kelompok yang bertikai tanpa menimbulkan pemenang dan pecundang.",
      pertanyaanReflektif: ["Bagaimana solusi kain sorban Nabi Muhammad ﷺ menyelesaikan perselisihan suku Quraisy?"],
      pesanAksi: "Mengutamakan solusi inklusif yang mengayomi semua pihak saat menghadapi perbedaan."
    },
    sources: ["Safiur Rahman Mubarakpuri, Ar-Raheeq Al-Makhtum", "Ibnu Hasyim, As-Sirah An-Nabawiyyah"]
  },
  {
    id: "h-tragedi-rajih-maunah",
    label: "Tragedi Al-Raji' & Bi'r Ma'unah: Pembantaian 70 Huffaz",
    category: "kenabian",
    timeLabel: "625 M (4 H)",
    timeValue: 625,
    description: "Suku Adhal, Qarah, dan Amir ibn Sha'sha'ah berpura-pura meminta pengajar Al-Qur'an. Nabi mengutus puluhan sahabat penghafal Al-Qur'an (*Qurra'*). Di Al-Raji' dan Bi'r Ma'unah, para utusan dakwah ditipu dan dibantai secara zalim. Peristiwa ini memicu kesedihan mendalam dan Doa Qunut Nazilah selama sebulan.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "Ali 'Imran", ayat: 169, arabicText: "وَلاَ تَحْسَبَنَّ الَّذِينَ قُتِلُوا فِي سَبِيلِ اللَّهِ أَمْوَاتًا بَلْ أَحْيَاءٌ عِنْدَ رَبِّهِمْ يُرْزَقُونَ", paraphrase: "Janganlah kamu mengira bahwa orang-orang yang gugur di jalan Allah itu mati; bahkan mereka itu hidup di sisi Tuhannya dengan mendapat rezeki." }
    ],
    hadithRefs: [
      { perawi: "HR. Bukhari", matan: "Ma ra'aitu Rasullallahi ﷺ wajada 'ala syai'in kat-tawajjudi 'ala as-habi Bi'ri Ma'unah", terjemahan: "Aku tidak pernah melihat Rasulullah ﷺ berduka atas sesuatu seperti duka beliau atas pembantaian sahabat Bi'r Ma'unah." }
    ],
    refleksi: {
      hikmah: "Pengorbanan para Da'i awal mengalirkan ketabahan dan keteguhan iman yang abadi bagi sejarah peradaban Islam.",
      pertanyaanReflektif: ["Mengapa Rasulullah ﷺ melakukan Qunut Nazilah secara konsisten pasca tragedi Bi'r Ma'unah?"],
      pesanAksi: "Menghormati perjuangan para ulama dan guru yang mendedikasikan hidupnya untuk dakwah kebaikan."
    },
    sources: ["Ibnu Sa'ad, At-Thabaqat Al-Kubra", "Bukhari, Shahih Bukhari - Kitab Al-Maghazi"]
  },
  {
    id: "h-bani-qurayzhah",
    label: "Peristiwa Pengepungan & Eksekusi Makar Bani Qurayzhah",
    category: "kenabian",
    timeLabel: "627 M (5 H)",
    timeValue: 627,
    description: "Saat Perang Khandaq berlangsung, Suku Bani Qurayzhah mengkhianati Piagam Madinah dan bersekutu dengan 10.000 Pasukan Ahzab untuk menyerang kaum Muslimin dari belakang. Pasca penarikan Ahzab, Nabi mengepung benteng Bani Qurayzhah dan menyerahkan vonis hukuman kepada hakim kesepakatan mereka, **Sa'ad bin Mu'adz**.",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "Al-Ahzab", ayat: 26, arabicText: "وَأَنْزَلَ الَّذِينَ ظَاهَرُوهُمْ مِنْ أَهْلِ الْكِتَابِ مِنْ صَيَاصِيهِمْ", paraphrase: "Dan Dia menurunkan orang-orang Ahli Kitab (Bani Qurayzhah) yang membantu golongan-golongan yang bersekutu itu dari benteng-benteng mereka." }
    ],
    hadithRefs: [
      { perawi: "HR. Bukhari", matan: "La yushalliyanna ahadukum al-'ashra illa fi Bani Qurayzhah", terjemahan: "Janganlah ada seorang pun yang shalat Ashar kecuali di perkampungan Bani Qurayzhah." }
    ],
    refleksi: {
      hikmah: "Pengkhianatan atas pakta pertahanan bersama (*Madinah Charter*) di saat krisis kedaulatan negara membawa konsekuensi hukum yang tegas.",
      pertanyaanReflektif: ["Mengapa vonis Sa'ad bin Mu'adz diputuskan berdasarkan hukum Taurat yang diakui Bani Qurayzhah sendiri?"],
      pesanAksi: "Menjaga integritas komitmen kesepakatan dan tidak melakukan pengkhianatan."
    },
    sources: ["Mubarakpuri, Ar-Raheeq Al-Makhtum", "Tabari, History of the Prophets and Kings"]
  },
  {
    id: "h-umrah-qadha",
    label: "Umrah Qadha' & Dampak Dakwah Simpatik di Makkah",
    category: "kenabian",
    timeLabel: "629 M (7 H)",
    timeValue: 629,
    description: "Sesuai isi Perjanjian Hudaibiyyah, Rasulullah ﷺ dan 2.000 Muslimin melaksanakan **Umrah Qadha'** ke Makkah selama 3 hari. Ketertiban, kedisiplinan ibadah, dan keagungan akhlak Muslimin mengetuk hati para ksatria Quraisy seperti **Khalid bin Walid** dan **Amr bin Ash** untuk masuk Islam.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "Al-Fath", ayat: 27, arabicText: "لَقَدْ صَدَقَ اللَّهُ رَسُولَهُ الرُّؤْيَا بِالْحَقِّ لَتَدْخُلُنَّ الْمَسْجِدَ الْحَرَامَ إِنْ شَاءَ اللَّهُ آمِنِينَ", paraphrase: "Sesungguhnya Allah akan membuktikan kepada Rasul-Nya, tentang kebenaran mimpinya dengan sebenarnya (yaitu) bahwa sesungguhnya kamu pasti akan memasuki Masjidil Haram, insya Allah dalam keadaan aman." }
    ],
    hadithRefs: [
      { perawi: "HR. Muslim", matan: "Inna Makkata al-yauma la-yadharuhu fiha ash-shirk", terjemahan: "Kedamaian dan keindahan ibadah di Makkah melembutkan hati-hati manusia." }
    ],
    refleksi: {
      hikmah: "Keteladanan sikap religius dan kedisiplinan kolektif adalah sarana dakwah paling efektif dalam memikat simpati manusia.",
      pertanyaanReflektif: ["Bagaimana pelaksanaan Umrah Qadha' mengubah pandangan masyarakat Makkah terhadap umat Islam?"],
      pesanAksi: "Menampilkan akhlak mulia dan kedisiplinan sebagai cerminan nilai-nilai keimanan."
    },
    sources: ["Ibnu Hasyim, As-Sirah An-Nabawiyyah"]
  },
  {
    id: "h-perang-hunain",
    label: "Perang Hunain & Autas: Kemenangan Atas Suku Hawazin",
    category: "kenabian",
    timeLabel: "630 M (8 H)",
    timeValue: 630,
    description: "Pasca Fathu Makkah, 12.000 Pasukan Muslim dihadang hujan panah oleh gabungan suku Hawazin & Thaqif di Lembah Hunain. Sempat berantakan karena ujub akan jumlah pasukan yang besar, seruan Nabi ﷺ menyatukan kembali barisan hingga meraih kemenangan mutlak dan ghanimah melimpah.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "At-Taubah", ayat: 25, arabicText: "وَيَوْمَ حُنَيْنٍ إِذْ أَعْجَبَتْكُمْ كَثْرَتُكُمْ فَلَمْ تُغْنِ عَنْكُمْ شَيْئًا", paraphrase: "Dan (ingatlah) peperangan Hunain, yaitu diwaktu kamu merasa bangga karena banyaknya jumlah(mu), maka jumlah yang banyak itu tidak memberi manfaat kepadamu sedikit pun." }
    ],
    hadithRefs: [
      { perawi: "HR. Bukhari", matan: "Ana an-nabiyyu la kadzib, ana ibn 'Abdul Mutthalib!", terjemahan: "Aku adalah seorang Nabi yang tidak berdusta, aku adalah putra Abdul Muthalib!" }
    ],
    refleksi: {
      hikmah: "Kemenangan sejati tidak ditentukan oleh besarnya jumlah atau kelengkapan sarana, melainkan oleh keikhlasan tawakal kepada Allah.",
      pertanyaanReflektif: ["Mengapa Al-Qur'an menegur perasaan ujub atas jumlah pasukan pada peristiwa Hunain?"],
      pesanAksi: "Menjauhi kesombongan atas pencapaian materi dan selalu bersikap tawadhu."
    },
    sources: ["Safiur Rahman Mubarakpuri, Ar-Raheeq Al-Makhtum"]
  },
  {
    id: "h-pengepungan-thaif",
    label: "Pengepungan Kota Tha'if & Pengislaman Suku Thaqif",
    category: "kenabian",
    timeLabel: "630 M (8 H)",
    timeValue: 630,
    description: "Sisa-sisa pasukan Hawazin bertahan di dalam benteng kokoh Kota Tha'if. Nabi ﷺ menggunakan alat pengepung *Manjaniq* (Ketapel Meriam) dan *Dabbabah* (Kereta Pelindung). Meski benteng tidak ditembus saat itu, kebijaksanaan diplomasi Nabi akhirnya membuat seluruh suku Thaqif datang memeluk Islam secara sukarela.",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "An-Nasr", ayat: 1, arabicText: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ ﴿١﴾ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا", paraphrase: "Apabila telah datang pertolongan Allah dan kemenangan, Dan kamu lihat manusia masuk agama Allah dengan berbondong-bondong." }
    ],
    hadithRefs: [
      { perawi: "HR. Muslim", matan: "Irji'u fa-inna Allah sa-ya'ti bi-Thaqif", terjemahan: "Kembalilah kalian, sesungguhnya Allah akan mendatangkan suku Thaqif dalam keadaan tunduk memeluk Islam." }
    ],
    refleksi: {
      hikmah: "Kombinasi strategi militer terukur dan kesabaran diplomasi mengantarkan pada konversi damai tanpa pertumpahan darah berlarut.",
      pertanyaanReflektif: ["Bagaimana penghentian pengepungan Tha'if membuka jalan keinsafan sukarela suku Thaqif?"],
      pesanAksi: "Mengutamakan kesabaran dan solusi damai jangka panjang."
    },
    sources: ["Ibnu Katsir, Al-Bidayah wan-Nihayah"]
  },
  {
    id: "h-rasyidin-perang-nahavand",
    label: "Perang Nahavand: Fathul Futuh Kemenangan Atas Persia",
    category: "khulafaur-rasyidin",
    timeLabel: "642 M (21 H)",
    timeValue: 642,
    description: "Pertempuran penentu di pegunungan Nahavand di mana 30.000 pasukan Muslim pimpinan **Nu'man bin Muqarrin** mengalahkan 150.000 tentara Kekaisaran Sassanid Persia. Pertempuran ini dijuluki **Fathul Futuh** (*Victory of Victories*) karena meruntuhkan benteng pertahanan terakhir Persia.",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "Al-Fath", ayat: 1, arabicText: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُبِينًا", paraphrase: "Sesungguhnya Kami telah memberikan kepadamu kemenangan yang nyata." }
    ],
    hadithRefs: [
      { perawi: "HR. Tabari", matan: "Hadza Fathul Futuh la takunu ba'dahu lil Majusi jama'ah", terjemahan: "Inilah Kemenangan di atas segala Kemenangan, setelah ini imperium Majusi tidak akan pernah dapat bersatu kembali." }
    ],
    refleksi: {
      hikmah: "Taktik penyergapan dan ketahanan fisik di medan pegunungan mematahkan dominasi militer jumlah raksasa.",
      pertanyaanReflektif: ["Mengapa perang Nahavand dinamai para sejarawan sebagai Fathul Futuh (Kemenangan Atas Kemenangan)?"],
      pesanAksi: "Menjaga fokus dan stamina perjuangan hingga tujuan akhir tercapai."
    },
    sources: ["Tabari, History of the Prophets and Kings", "Hugh Kennedy"]
  },
  {
    id: "h-perang-nahrawan",
    label: "Perang Nahrawan: Penumpasan Kelompok Radikal Khawarij",
    category: "khulafaur-rasyidin",
    timeLabel: "658 M (38 H)",
    timeValue: 658,
    description: "Khalifah **Ali bin Abi Thalib** berhadapan dengan kelompok ekstremis Khawarij di Nahrawan. Kelompok ini mengafirkan mayoritas sahabat Nabi dan melegalkan pertumpahan darah Muslimin berbasis penafsiran teks yang kaku dan sempit (*Takfiri*).",
    branch: "jalur-pemikiran",
    quranRefs: [
      { surah: "Al-Hujurat", ayat: 9, paraphrase: "Dan jika ada dua golongan dari orang-orang mu'min berperang maka damaikanlah antara keduanya. Jika salah satu dari kedua golongan itu berbuat penganiayaan... maka perangilah golongan yang berbuat penganiayaan itu." }
    ],
    hadithRefs: [
      { perawi: "HR. Bukhari & Muslim", matan: "Yaqra'unal Qur'an la yujawizu taraqiyahum, yamruquna minad dini kama yamruquas sahmu minas ramiyyah", terjemahan: "Membaca Al-Qur'an namun tidak melewati kerongkongan mereka, meluncur keluar dari agama seperti anak panah menembus sasarannya." }
    ],
    refleksi: {
      hikmah: "Bahaya ideologi pemikiran radikal takfiri yang mengafirkan sesama harus dihadapi dengan ketegasan hukum dan penjelasan keilmuan yang lurus.",
      pertanyaanReflektif: ["Bagaimana bahaya pemikiran kaku Khawarij merusak ukhuwah dan kestabilan masyarakat?"],
      pesanAksi: "Menjauhi radikalisme, moderasi beragama (*Wasathiyah*), dan merawat ikatan persaudaraan."
    },
    sources: ["Ibnu Katsir, Al-Bidayah wan-Nihayah", "Muhamad Abu Zahrah, Tarikh Al-Madzahib Al-Islamiyyah"]
  },
  {
    id: "h-perang-harrah",
    label: "Peristiwa Al-Harrah & Pengepungan Makkah",
    category: "umayyah",
    timeLabel: "683 M (63 H)",
    timeValue: 683,
    description: "Krisis politik pasca Karbala di mana pasukan Umayyah di bawah Yazid I mengepung kota Madinah (Peristiwa Al-Harrah) dan Makkah di bawah kepemimpinan **Abdullah bin Az-Zubair**. Peristiwa ini menjadi salah satu periode fitnah terbesar era Umayyah awal.",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "Al-Baqarah", ayat: 191, paraphrase: "Dan fitnah (kekacauan/penindasan) itu lebih besar bahayanya dari pembunuhan." }
    ],
    hadithRefs: [
      { perawi: "HR. Bukhari", matan: "La tahillu Makkata li ahadin qabli wa la tahillu li ahadin ba'di", terjemahan: "Kota Makkah adalah tanah haram suci yang tidak dihalalkan pertumpahan darah di dalamnya bagi siapapun." }
    ],
    refleksi: {
      hikmah: "Pentingnya menjaga kesucian tempat ibadah dan mencegah konflik politik internal yang mengorbankan jiwa rakyat sipil.",
      pertanyaanReflektif: ["Bagaimana keteguhan Abdullah bin Az-Zubair mempertahankan kedaulatan tanah suci Makkah?"],
      pesanAksi: "Menjaga perdamaian dan keselamatan masyarakat dari gejolak konflik."
    },
    sources: ["Tabari, History of the Prophets and Kings", "G.R. Hawting, The First Dynasty of Islam"]
  },
  {
    id: "h-perang-tours-poitiers",
    label: "Pertempuran Tours / Poitiers: Abdul Rahman Al-Ghafiqi",
    category: "umayyah",
    timeLabel: "732 M (114 H)",
    timeValue: 732,
    description: "Gubernur Al-Andalus **Abdul Rahman Al-Ghafiqi** memimpin pasukan Muslim menembus Prancis bagian selatan. Di antara Tours dan Poitiers, mereka berhadapan dengan pasukan Franks di bawah **Charles Martel** pada Pertempuran Poitiers (732 M), menetapkan batas utara perluasan wilayah Islam di Eropa Barat.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "Al-Baqarah", ayat: 216, paraphrase: "Boleh jadi kamu membenci sesuatu, padahal ia amat baik bagimu, dan boleh jadi (pula) kamu menyukai sesuatu, padahal ia amat buruk bagimu; Allah mengetahui, sedang kamu tidak mengetahui." }
    ],
    hadithRefs: [
      { perawi: "HR. Muslim", matan: "Lituftahanna Al-Qustantiniyyah...", terjemahan: "Penyebaran dakwah membawa nilai-nilai peradaban ke seluruh pelosok benua." }
    ],
    refleksi: {
      hikmah: "Batas geografis teritorial mengajarkan pentingnya pemeliharaan internal dan penguatan kualitas peradaban di wilayah yang ada.",
      pertanyaanReflektif: ["Mengapa Pertempuran Tours / Poitiers diulas secara khusus oleh para sejarawan Eropa dan Islam?"],
      pesanAksi: "Membangun ketahanan keilmuan dan kebudayaan yang kuat dari dalam."
    },
    sources: ["W. Montgomery Watt, A History of Islamic Spain", "Edward Gibbon, Decline and Fall of the Roman Empire"]
  },
  {
    id: "h-utsmani-perang-mohats",
    label: "Pertempuran Mohács 1526 M & Pengepungan Wina Pertama",
    category: "tiga-kerajaan",
    timeLabel: "1526 M (932 H)",
    timeValue: 1526,
    description: "Sultan Utsmani **Sulaiman Al-Qanuni** mengalahkan pasukan Kerajaan Hungaria di bawah Raja Louis II pada Pertempuran Mohács (1526 M) hanya dalam waktu 2 jam berkat formasi meriam Janissary. Peristiwa ini membawa Eropa Tengah ke bawah pengaruh Utsmaniyah dan dilanjutkan Pengepungan Wina (1529 M).",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "Al-Anfal", ayat: 46, paraphrase: "Dan taatlah kepada Allah dan Rasul-Nya dan janganlah kamu berbantah-bantahan, yang menyebabkan kamu menjadi gentar dan hilang kekuatanmu." }
    ],
    hadithRefs: [
      { perawi: "HR. Ahmad", matan: "Lituftahanna ar-Rumiyyah...", terjemahan: "Nubuat perluasan peradaban dan interaksi diplomasi dengan benua Eropa." }
    ],
    refleksi: {
      hikmah: "Penguasaan kombinasi taktik persenjataan artileri modern dan disiplin taktis menjadi penentu keunggulan di lapangan.",
      pertanyaanReflektif: ["Bagaimana taktik meriam terikat Janissary di Mohács menginspirasi strategi militer Eropa abad 16?"],
      pesanAksi: "Menguasai sains dan teknologi mutakhir untuk memperkuat daya saing."
    },
    sources: ["Halil Inalcik, The Ottoman Empire", "John Freely, History of the Ottoman Empire"]
  },
  {
    id: "h-utsmani-perang-lepanto",
    label: "Pertempuran Laut Lepanto 1571 M",
    category: "tiga-kerajaan",
    timeLabel: "1571 M (979 H)",
    timeValue: 1571,
    description: "Pertempuran laut raksasa di Teluk Patras Yunani antara armada Utsmani di bawah Ali Pasha melawan Liga Suci Katolik (Spanyol, Venesia, Vatikan) di bawah Don Juan dari Austria. Walau Utsmani kehilangan banyak kapal, mereka berhasil membangun kembali armada baru dalam waktu kurang dari satu tahun.",
    branch: "jalur-politik",
    quranRefs: [
      { surah: "Ali 'Imran", ayat: 140, paraphrase: "Jika kamu mendapat luka, maka sesungguhnya kaum itu pun mendapat luka yang serupa. Dan masa (kejayaan dan kehancuran) itu Kami pergilirkan di antara manusia." }
    ],
    hadithRefs: [
      { perawi: "HR. Muslim", matan: "Ad-Dunya duwalun", terjemahan: "Dinamika kehidupan dunia berputar dan mempergiliran kejayaan." }
    ],
    refleksi: {
      hikmah: "Kemampuan merekonstruksi kekuatan dan industri galangan kapal dalam waktu singkat menunjukkan daya pulih (*resilience*) imperium Utsmani.",
      pertanyaanReflektif: ["Bagaimana respon Wazir Sokollu Mehmed Pasha membangun kembali armada Utsmani pasca Lepanto?"],
      pesanAksi: "Bangkit dengan cepat dari kekalahan dan memperbaiki kelemahan strategi."
    },
    sources: ["Niccolò Capponi, Victory of the West: The Great Christian-Muslim Dragon Fight at Lepanto"]
  },
  {
    id: "h-mughal-akbar-toleransi",
    label: "Sultan Akbar Agung & Kebijakan Toleransi Sulh-i Kul",
    category: "tiga-kerajaan",
    timeLabel: "1556 M (963 H)",
    timeValue: 1556,
    description: "Kaisar Mughal ketiga **Akbar Agung** (1556–1605) menerapkan prinsip **Sulh-i Kul** (Toleransi Universal), menghapuskan pajak Jizyah bagi non-Muslim, melibatkan cendekiawan Hindu/Sikh dalam istana, serta membangun *Ibadat Khana* (Rumah Dialog Agama) di Fatehpur Sikri.",
    branch: "jalur-pemikiran",
    quranRefs: [
      { surah: "Al-Mumtahanah", ayat: 8, paraphrase: "Allah tidak melarang kamu untuk berbuat baik dan berlaku adil terhadap orang-orang yang tiada memerangimu karena agama." }
    ],
    hadithRefs: [
      { perawi: "HR. Abu Dawud", matan: "Ala man zhalama mu'ahadan au intaqashahu... fa-ana hajiijuhu yaumal qiyamah", terjemahan: "Ingatlah, barangsiapa menzalimi warga non-Muslim yang dilindungi... maka aku akan menjadi penuntutnya di hari kiamat." }
    ],
    refleksi: {
      hikmah: "Toleransi dan perlindungan hak warga non-Muslim dalam imperium Islam mewujudkan kedamaian sosial di benua India.",
      pertanyaanReflektif: ["Bagaimana kebijakan Sulh-i Kul Sultan Akbar membantu mengonsolidasikan kekaisaran Mughal di India?"],
      pesanAksi: "Merawat sikap inklusif, toleran, dan adil kepada seluruh warga tanpa membeda-bedakan."
    },
    sources: ["J.F. Richards, The Mughal Empire", "Annemarie Schimmel, The Empire of the Great Mughals"]
  },
  {
    id: "h-nusantara-fatahillah-sunda-kelapa",
    label: "Fatahillah & Pembebasan Sunda Kelapa menjadi Jayakarta",
    category: "nusantara",
    timeLabel: "22 Juni 1527 M",
    timeValue: 1527,
    description: "Panglima armada Kesultanan Demak & Cirebon **Fatahillah** (Fadhlullah Khan) menggagalkan perjanjian persekutuan Pajajaran-Portugis dan membebaskan pelabuhan Sunda Kelapa pada 22 Juni 1527 M. Nama kota diganti menjadi **Jayakarta** ('Kemenangan yang Sempurna', diilhami QS. Al-Fath), yang menjadi cikal bakal Kota Jakarta.",
    branch: "jalur-utama",
    quranRefs: [
      { surah: "Al-Fath", ayat: 1, arabicText: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُبِينًا", paraphrase: "Sesungguhnya Kami telah memberikan kepadamu kemenangan yang nyata." }
    ],
    hadithRefs: [
      { perawi: "Sejarah Kota Jakarta", matan: "Jayakarta diabadikan dari ungkapan Fathan Mubina (Kemenangan Yang Nyata)", terjemahan: "Simbol kemerdekaan pelabuhan maritim Nusantara dari penjajahan Portugis." }
    ],
    refleksi: {
      hikmah: "Pembebasan Jayakarta menjadi tonggak sejarah perjuangan mempertahankan wilayah maritim Nusantara dari imperium kolonial.",
      pertanyaanReflektif: ["Bagaimana keterkaitan antara nama Kota Jayakarta dengan penafsiran Surah Al-Fath oleh Fatahillah?"],
      pesanAksi: "Menghargai sejarah perjuangan para pahlawan dan merawat identitas kebangsaan."
    },
    sources: ["Solichin Salam, Fatahillah Pendiri Jakarta", "Uka Tjandrasasmita, Arkeologi Islam Nusantara"]
  }
];
