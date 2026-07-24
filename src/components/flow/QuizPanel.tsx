"use client";

import { useState, useMemo } from "react";
import { useFlowStore } from "@/store/flow-store";
import { islamicQuizQuestions, QuizQuestion } from "@/data/islamic-history-quiz";
import { cn } from "@/lib/utils";
import {
  HelpCircle,
  X,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Compass,
  ArrowRight,
  BookOpen,
  Sparkles,
  Shuffle,
} from "lucide-react";

export function QuizPanel() {
  const panelMode = useFlowStore((s) => s.panelMode);
  const setPanelMode = useFlowStore((s) => s.setPanelMode);
  const setSelectedNode = useFlowStore((s) => s.setSelectedNode);
  const setFocusNode = useFlowStore((s) => s.setFocusNode);

  const isOpen = panelMode === "quiz";

  // State
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Questions Filtered
  const questions = useMemo(() => {
    if (selectedCategory === "all") return islamicQuizQuestions;
    return islamicQuizQuestions.filter((q) => q.category === selectedCategory);
  }, [selectedCategory]);

  const currentQuestion = questions[currentQuestionIndex] || questions[0];

  const handleSelectOption = (optionIdx: number) => {
    if (selectedAnswers[currentQuestionIndex] !== undefined) return; // already answered

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIdx,
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowExplanation(selectedAnswers[currentQuestionIndex + 1] !== undefined);
    } else {
      setIsFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsFinished(false);
  };

  const shuffleQuiz = () => {
    handleResetQuiz();
  };

  // Calculate score
  const scoreStats = useMemo(() => {
    let correct = 0;
    let answered = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] !== undefined) {
        answered++;
        if (selectedAnswers[idx] === q.correctAnswer) {
          correct++;
        }
      }
    });
    const total = questions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, answered, total, percentage };
  }, [selectedAnswers, questions]);

  if (!isOpen) return null;

  const currentAnswer = selectedAnswers[currentQuestionIndex];
  const isAnswered = currentAnswer !== undefined;

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[480px] z-50 bg-background border-l shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="p-4 border-b bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-emerald-600 text-white shadow-md">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold flex items-center gap-1.5">
              Kuis &amp; Uji Pemahaman Sejarah
            </h3>
            <p className="text-xs text-muted-foreground">
              Uji Pengetahuan Peradaban & Sirah
            </p>
          </div>
        </div>

        <button
          onClick={() => setPanelMode("none")}
          className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Category Filter & Controls */}
      {!isFinished && (
        <div className="p-3 border-b bg-muted/20 space-y-2">
          <div className="flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  handleResetQuiz();
                }}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[10px] font-bold whitespace-nowrap transition-colors",
                  selectedCategory === "all"
                    ? "bg-emerald-600 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                Semua Soal ({islamicQuizQuestions.length})
              </button>
              <button
                onClick={() => {
                  setSelectedCategory("sirah-makkah");
                  handleResetQuiz();
                }}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors",
                  selectedCategory === "sirah-makkah"
                    ? "bg-emerald-600 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                Sirah Makkah
              </button>
              <button
                onClick={() => {
                  setSelectedCategory("sirah-madinah");
                  handleResetQuiz();
                }}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors",
                  selectedCategory === "sirah-madinah"
                    ? "bg-emerald-600 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                Sirah Madinah
              </button>
              <button
                onClick={() => {
                  setSelectedCategory("khulafaur-rasyidin");
                  handleResetQuiz();
                }}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors",
                  selectedCategory === "khulafaur-rasyidin"
                    ? "bg-emerald-600 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                Khulafaur Rasyidin
              </button>
              <button
                onClick={() => {
                  setSelectedCategory("umayyah-abbasiyah");
                  handleResetQuiz();
                }}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors",
                  selectedCategory === "umayyah-abbasiyah"
                    ? "bg-emerald-600 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                Umayyah &amp; Abbasiyah
              </button>
              <button
                onClick={() => {
                  setSelectedCategory("nusantara");
                  handleResetQuiz();
                }}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors",
                  selectedCategory === "nusantara"
                    ? "bg-emerald-600 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                Islam Nusantara
              </button>
            </div>

            <button
              onClick={shuffleQuiz}
              title="Reset Soal"
              className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground flex-shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1 pt-1">
            <div className="flex items-center justify-between text-[11px] font-semibold">
              <span className="text-muted-foreground">
                Soal <strong className="text-foreground">{currentQuestionIndex + 1}</strong> dari {questions.length}
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                Skor: {scoreStats.correct} Benar ({scoreStats.percentage}%)
              </span>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!isFinished && currentQuestion ? (
          <div className="space-y-5 animate-in fade-in-50 duration-200">
            {/* Question Card Header (Identical to reference screenshot layout) */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-muted flex items-center justify-center font-bold text-xs text-muted-foreground border">
                {currentQuestionIndex + 1}
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                  {currentQuestion.categoryLabel}
                </span>
                <h4 className="text-sm font-semibold leading-relaxed text-foreground">
                  {currentQuestion.question}
                </h4>
              </div>
            </div>

            {/* Options List (A, B, C, D Pills) */}
            <div className="space-y-2.5 pt-1">
              {currentQuestion.options.map((opt, optIdx) => {
                const prefix = ["A", "B", "C", "D"][optIdx];
                const isSelected = currentAnswer === optIdx;
                const isCorrect = optIdx === currentQuestion.correctAnswer;

                let stateStyle = "border-border bg-background hover:bg-muted/60 text-foreground";
                if (isAnswered) {
                  if (isCorrect) {
                    stateStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100 font-semibold";
                  } else if (isSelected && !isCorrect) {
                    stateStyle = "border-rose-500 bg-rose-500/10 text-rose-950 dark:text-rose-100 font-semibold";
                  } else {
                    stateStyle = "border-border/40 bg-background/50 text-muted-foreground opacity-60";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(optIdx)}
                    className={cn(
                      "w-full text-left p-3 rounded-xl border text-xs sm:text-sm leading-relaxed transition-all flex items-start gap-3 group relative",
                      stateStyle
                    )}
                  >
                    <span
                      className={cn(
                        "flex-shrink-0 font-bold px-2 py-0.5 rounded-md text-xs",
                        isAnswered && isCorrect
                          ? "bg-emerald-500 text-white"
                          : isAnswered && isSelected && !isCorrect
                          ? "bg-rose-500 text-white"
                          : "bg-muted text-muted-foreground group-hover:bg-muted/80"
                      )}
                    >
                      {prefix}.
                    </span>
                    <span className="flex-1 leading-snug">{opt}</span>
                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 self-center" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 self-center" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Discussion Card */}
            {isAnswered && (
              <div className="rounded-xl border bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/20 p-4 space-y-2.5 animate-in fade-in-50 duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    Pembahasan &amp; Penjelasan Ilmiah
                  </div>
                  {currentQuestion.nodeId && (
                    <button
                      onClick={() => {
                        setSelectedNode(currentQuestion.nodeId!);
                        setFocusNode(currentQuestion.nodeId!);
                        setPanelMode("none");
                      }}
                      className="text-[10px] text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Compass className="w-3 h-3" /> Buka Node
                    </button>
                  )}
                </div>

                <p className="text-xs text-foreground/90 leading-relaxed italic border-l-2 border-emerald-500 pl-3 py-0.5">
                  {currentQuestion.explanation}
                </p>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
                  >
                    {currentQuestionIndex < questions.length - 1 ? (
                      <>
                        Soal Berikutnya <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        Lihat Hasil Akhir Kuis <Trophy className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : isFinished ? (
          /* Summary Screen */
          <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-inner">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold">Kuis Selesai!</h3>
              <p className="text-xs text-muted-foreground">
                Hasil evaluasi pemahaman sejarah &amp; falsafah Islam Anda
              </p>
            </div>

            {/* Result Circle Badge */}
            <div className="rounded-2xl border bg-card p-6 max-w-xs mx-auto space-y-3 shadow-md">
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {scoreStats.percentage}%
              </div>
              <p className="text-xs text-muted-foreground font-medium">
                Berhasil menjawab <strong className="text-foreground">{scoreStats.correct}</strong> dari {scoreStats.total} soal dengan benar
              </p>

              <div className="pt-2 border-t text-xs font-bold text-amber-700 dark:text-amber-300">
                Gelar Pemahaman:{" "}
                {scoreStats.percentage >= 80
                  ? " Al-Mu'allim (Master Sejarah & Falsafah)"
                  : scoreStats.percentage >= 60
                  ? "📖 Penjelajah Peradaban"
                  : "🌱 Penuntut Ilmu Sejarah"}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
              <button
                onClick={handleResetQuiz}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Ulangi Kuis
              </button>
              <button
                onClick={() => setPanelMode("none")}
                className="w-full sm:w-auto px-4 py-2 rounded-lg border bg-background font-semibold text-xs hover:bg-muted transition-colors"
              >
                Kembali ke Kanvas
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
