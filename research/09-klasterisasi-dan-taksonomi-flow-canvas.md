# Research & Architecture: Klasterisasi & Dynamic Drill-Down Flow Canvas Sejarah Islam

## 1. Latar Belakang & Masalah Flow Canvas Saat Ini
Saat ini, `ChainFlowCanvas.tsx` menampilkan **71+ node detail sekaligus** di canvas canvas datar (flat tree / layout).
Meskipun informatif, tampilan ini:
1. Menunjukkan kelelahan visual (*visual clutter*) ketika dilihat pada tingkat zoom out (overview level).
2. Memuat banyak garis hubungan (*edges*) yang saling tumpang tindih (*cross-edges*).
3. Sulit memberikan orientasi makro mengenai "di mana posisi suatu peristiwa dalam peta besar peradaban Islam".

---

## 2. Konsep Hirarki Klaster Besar (Cluster Nodes & Child Nodes)
Sesuai arahan riset dan kebutuhan UX/UI modern, kita merancang **Dua Tingkat Hirarki Node**:

### Level 1: Macro Cluster Nodes (Tampilan Overview / Zoom Out)
Tampilan awal canvas akan menyajikan **9 Cluster Nodes Besar** yang merepresentasikan era utama sejarah peradaban Islam. Setiap Cluster Node memiliki visual khas (badge jumlah event, rentang tahun, indikator warna era, dan ikon tematik):

1. **`cluster-pra-islam`**: Era Pra-Islam & Sirah Nabawiyah Makkah (2000 SM – 622 M)
2. **`cluster-kenabian-madinah`**: Era Sirah Nabawiyah Madinah & Pembentukan Negara (622 M – 632 M)
3. **`cluster-khulafaur-rasyidin`**: Era Khulafaur Rasyidin & Konsolidasi (632 M – 661 M)
4. **`cluster-umayyah`**: Era Daulah Umayyah Damaskus & Perluasan (661 M – 750 M)
5. **`cluster-abbasiyah-golden-age`**: Era Daulah Abbasiyah & Age of Enlightenment (750 M – 1258 M)
6. **`cluster-andalusia-mamluk`**: Era Andalusia & Kesultanan Mamluk Barat (711 M – 1517 M)
7. **`cluster-tiga-kerajaan`**: Era Tiga Kerajaan Besar (Utsmani, Safawi, Mughal) (1299 M – 1924 M)
8. **`cluster-nusantara`**: Era Peradaban Islam Nusantara & Wali Songo (Abad 7 – 1945 M)
9. **`cluster-modern-kontemporer`**: Era Pergerakan Modern & Dunia Islam Kontemporer (1800 M – Sekarang)

---

## 3. Mekanisme Interaksi Zoom-In & Drill-Down (Expansion / Drill-Down Logic)

### Interaksi Klik pada Cluster Node:
1. **Klik pada Cluster Node**:
   - Canvas secara otomatis melakukan animasi smooth `fitBounds` / `setCenter` (Zoom-In ke area cluster tersebut, misal zoom level 1.4 – 1.8).
   - State `expandedClusterId` diset ke ID cluster yang diklik (misal `"cluster-abbasiyah-golden-age"`).
   - Node-node detail (*child nodes*) yang berada di dalam cluster tersebut dimunculkan (*un-hide*), disusun dengan layout terstruktur di sekitar atau di bawah posisi cluster header.
   - Indikator Breadcrumb Navigasi / Header Canvas diperbarui: `Semua Klaster > Era Daulah Abbasiyah & Age of Enlightenment`.

2. **Tombol "Kembali ke Tampilan Klaster" / Zoom-Out Button**:
   - Menyediakan tombol mengambang (*Floating Breadcrumb / Reset Zoom button*) di canvas UI.
   - Saat diklik: `expandedClusterId` di-reset ke `null`, canvas kembali membesarkan tampilan ke seluruh 9 Cluster Nodes (*fitView*).

3. **Multi-Cluster Expansion vs Single-Cluster Focus**:
   - **Mode Focus (Rekomendasi Utama)**: Mengklik satu cluster akan mengabaikan/menyembunyikan detail cluster lain sehingga pengguna tetap fokus pada era yang dipilih.
   - **Mode All-Nodes (Toggle View)**: Pengguna memiliki switch toggle "Tampilkan Semua Detail Node" untuk pengujian/eksplorasi tanpa pembatasan cluster.

---

## 4. Struktur Data TS (TypeScript Schema Integration)

```typescript
// Interface Baru untuk Cluster Node Metadata
export interface ClusterGroup {
  id: string;
  label: string;
  category: ChainCategory;
  timeRange: string;
  startYear: number;
  endYear: number;
  description: string;
  color: string;
  iconName?: string;
  nodeIds: string[]; // List ID child nodes di dalam cluster ini
}
```

---

## 5. Pemetaan Node Detail ke dalam 9 Klaster Utama

| ID Klaster | Nama Klaster | Node Detail yang Terkandung (Jumlah Node) |
| :--- | :--- | :--- |
| `cluster-pra-islam` | Era Pra-Islam & Makkah | `h-ibrahim-kabah`, `h-jahiliyah-sosial`, `h-tahun-gajah`, `h-halimah-saadiyah`, `h-hilf-fudul`, `h-pernikahan-khadijah`, `h-wahyu-pertama`, `h-dakwah-sembunyi`, `h-dakwah-terbuka`, `h-penyiksaan-mekkah`, `h-hijrah-habasyah`, `h-boikot-syiib`, `h-tahun-kesedihan`, `h-isra-miraj`, `h-baiat-aqabah` (15 node) |
| `cluster-kenabian-madinah` | Sirah Nabawiyah Madinah | `h-hijrah-tsur`, `h-quba-nabawi`, `h-muakhah-piagam`, `h-perubahan-kiblat`, `h-badr`, `h-bani-qainuqa`, `h-uhud`, `h-bani-nadhir`, `h-khandaq`, `h-hudaibiyyah`, `h-khaibar`, `h-surat-raja`, `h-mutah`, `h-fathu-makkah`, `h-tabuk-hajiwada` (15 node) |
| `cluster-khulafaur-rasyidin` | Khulafaur Rasyidin | `h-saqifah-abubakar`, `h-perang-ridda`, `h-ekspansi-yarmuk`, `h-qadisiyyah-jerusalem`, `h-reformasi-umar`, `h-utsman-mushaf`, `h-ali-siffin`, `h-syahid-ali`, `h-amul-jamaah` (9 node) |
| `cluster-umayyah` | Daulah Umayyah | `h-karbala`, `h-umayyah-ekspansi-barat`, `h-umayyah-ekspansi-timur`, `h-arabisasi-dinar`, `h-umar-bin-abdulaziz` (5 node) |
| `cluster-abbasiyah-golden-age` | Daulah Abbasiyah & Sains | `h-revolusi-abbasiyah`, `h-perang-talas`, `h-baitul-hikmah-sains`, `h-4mazhab-fiqh`, `h-kutubus-sittah`, `h-debat-teologi`, `h-fatimiyah-azhar`, `h-al-ghazali-ibnu-rusyd`, `h-runtuh-baghdad` (9 node) |
| `cluster-andalusia-mamluk` | Andalusia & Mamluk | `h-andalusia-kordoba`, `h-manzikert-salib`, `h-salahuddin-hittin`, `h-mamluk-ainjalut`, `h-kejatuhan-granada` (5 node) |
| `cluster-tiga-kerajaan` | Era Tiga Kerajaan Besar | `h-utsmani-konstantinopel`, `h-utsmani-puncak`, `h-safawi-persia`, `h-mughal-india` (4 node) |
| `cluster-nusantara` | Peradaban Islam Nusantara | `h-nusantara-pasai-malaka`, `h-nusantara-walisongo`, `h-nusantara-mataram-gowa` (3 node) |
| `cluster-modern-kontemporer` | Modern & Kontemporer | `h-napoleon-mesir`, `h-pembaharuan-islam`, `h-sykes-picot-balfour`, `h-runtuh-khilafah`, `h-gerakan-modern`, `h-era-kontemporer` (6 node) |

---

## 6. Desain Visual Custom Cluster Node (UI Component)
Component `ClusterNode.tsx`:
- Header berlatar belakang gradien sesuai warna era (`pra-islam`: amber, `kenabian`: emerald, `khulafaur-rasyidin`: teal, `abbasiyah`: violet, `tiga-kerajaan`: rose, `nusantara`: green, `modern`: cyan).
- Menyajikan **Lencana Jumlah Peristiwa (Badge Event Count)**, e.g., `"15 Peristiwa"`.
- Indikator Tombol **"Klik untuk Zoom & Detail Cluster"**.
- Border glowing saat di-hover/dipilih.
- Animasi smooth saat melakukan toggle expand/collapse.
