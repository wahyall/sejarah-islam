export type ChainCategory =
  | "pra-islam"
  | "kenabian"
  | "khulafaur-rasyidin"
  | "umayyah"
  | "abbasiyah"
  | "andalusia"
  | "tiga-kerajaan"
  | "nusantara"
  | "kolonial"
  | "modern";

export type ChainBranch =
  | "jalur-utama"
  | "jalur-sains"
  | "jalur-politik"
  | "jalur-pemikiran"
  | "sejarah-baitul-maqdis";

export interface QuranReference {
  surah: string;
  ayat: number;
  arabicText?: string;
  paraphrase: string;
}

export interface HadithReference {
  perawi: string;
  arabicText?: string;
  matan: string;
  terjemahan: string;
}

export interface RefleksiData {
  hikmah: string;
  pertanyaanReflektif: string[];
  pesanAksi?: string;
}

export interface ChainNode {
  id: string;
  label: string;
  category: ChainCategory;
  timeLabel: string;
  timeValue: number; // Tahun Masehi. Misal 610, 622, 1258, 1453
  description: string;
  sources?: string[];
  branch: ChainBranch;
  quranRefs?: QuranReference[];
  hadithRefs?: HadithReference[];
  akhlakTeladan?: string;
  refleksi?: RefleksiData;
  philosopher?: string;
}

import { islamicHistoryNodes } from "./islamic-history-nodes";

// Export the compiled list of nodes to be used by the app.
export const nodes: ChainNode[] = islamicHistoryNodes;
