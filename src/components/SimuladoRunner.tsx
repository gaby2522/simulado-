import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  FileCheck2, 
  Layers, 
  Award,
  Grid,
  X,
  CheckCircle,
  Bookmark,
  Eye
} from 'lucide-react';
import { Question } from '../types/quiz';
import { QuestionCard } from './QuestionCard';

interface SimuladoRunnerProps {
  questions: Question[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  answers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>;
  onSelectAnswer: (questionId: string, option: 'A' | 'B' | 'C' | 'D' | 'E') => void;
  onClearAnswer: (questionId: string) => void;
  flagged: Record<string, boolean>;
  onToggleFlag: (questionId: string) => void;
  onOpenCartao: () => void;
  onFinishExam: () => void;
  studyMode: 'exam' | 'study';
  isCompleted?: boolean;
}

export const SimuladoRunner: React.FC<SimuladoRunnerProps> = ({
  questions,
  currentIndex,
  onNavigate,
  answers,
  onSelectAnswer,
  onClearAnswer,
  flagged,
  onToggleFlag,
  onOpenCartao,
  onFinishExam,
  studyMode,
  isCompleted = false,
}) => {
  const [isMobileGridOpen, setIsMobileGridOpen] = useState(false);
  const [mobileFilter, setMobileFilter] = useState<'all' | 'unanswered' | 'flagged'>('all');

  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return null;

  const total = questions.length;
  const answeredCount = Object.keys(answers).length;
  const pendingCount = total - answeredCount;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  // Question filter for mobile drawer
  const drawerQuestions = questions.map((q, idx) => ({ q, idx })).filter(({ q }) => {
    if (mobileFilter === 'unanswered') return !answers[q.id];
    if (mobileFilter === 'flagged') return !!flagged[q.id];
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-6 pb-28 md:pb-6">
      
      {/* Mobile Top Status Indicator */}
      <div className="md:hidden flex items-center justify-between bg-white px-3.5 py-2.5 rounded-2xl border border-slate-200 shadow-xs mb-3">
        <button
          onClick={() => setIsMobileGridOpen(true)}
          className="flex items-center gap-2 text-xs font-bold text-slate-800 active:text-blue-600 cursor-pointer"
        >
          <Grid className="w-4 h-4 text-blue-600" />
          <span>Questão {currentIndex + 1} de {total}</span>
          <span className="text-[10px] text-blue-600 font-semibold underline underline-offset-2">
            (mapa)
          </span>
        </button>

        <div className="flex items-center gap-2">
          {flagged[currentQuestion.id] && (
            <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              <Bookmark className="w-3 h-3 fill-amber-600 text-amber-600" />
              Revisar
            </span>
          )}
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-mono">
            {answeredCount}/{total} marcadas
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Left Column: Question Presentation (spans 3 cols on desktop) */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Main Question Card with Swipe Gesture Support */}
          <QuestionCard
            question={currentQuestion}
            selectedOption={answers[currentQuestion.id]}
            onSelectOption={(opt) => onSelectAnswer(currentQuestion.id, opt)}
            isFlagged={flagged[currentQuestion.id]}
            onToggleFlag={() => onToggleFlag(currentQuestion.id)}
            studyMode={studyMode}
            isCompleted={isCompleted}
            onSwipeLeft={() => {
              if (!isLast) onNavigate(currentIndex + 1);
            }}
            onSwipeRight={() => {
              if (!isFirst) onNavigate(currentIndex - 1);
            }}
          />

          {/* Dica de navegação por gesto no mobile */}
          <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 px-1">
            <span>👈 Deslize para avançar / voltar 👉</span>
            {answers[currentQuestion.id] && !isCompleted && (
              <button
                onClick={() => onClearAnswer(currentQuestion.id)}
                className="text-slate-500 hover:text-rose-600 active:text-rose-700 flex items-center gap-1 text-[11px]"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Limpar escolha</span>
              </button>
            )}
          </div>

          {/* Desktop Navigation & Actions Toolbar */}
          <div className="hidden md:flex bg-white p-4 rounded-xl border border-slate-200 shadow-xs items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                disabled={isFirst}
                onClick={() => onNavigate(currentIndex - 1)}
                className="flex items-center gap-1.5 px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </button>

              <button
                disabled={isLast}
                onClick={() => onNavigate(currentIndex + 1)}
                className="flex items-center gap-1.5 px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
              >
                Próxima
                <ChevronRight className="w-4 h-4" />
              </button>

              {answers[currentQuestion.id] && !isCompleted && (
                <button
                  onClick={() => onClearAnswer(currentQuestion.id)}
                  className="px-2.5 py-2 text-xs text-slate-500 hover:text-rose-600 transition flex items-center gap-1 cursor-pointer"
                  title="Limpar alternativa marcada nesta questão"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Limpar</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenCartao}
                className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 transition cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-slate-600" />
                <span>Ver Cartão-Resposta</span>
              </button>

              {!isCompleted && (
                <button
                  onClick={onFinishExam}
                  className="flex items-center gap-2 px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold shadow-sm transition cursor-pointer"
                >
                  <FileCheck2 className="w-4 h-4" />
                  Finalizar Simulado
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Desktop Sidebar Mapa de Questões */}
        <div className="hidden lg:block space-y-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs space-y-4 sticky top-28">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600" />
                Mapa de Questões
              </h3>
              <span className="text-xs font-semibold text-slate-600 font-mono">
                {answeredCount}/{total}
              </span>
            </div>

            {/* Progress bar */}
            <div className="space-y-1.5">
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${(answeredCount / total) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Progresso: {Math.round((answeredCount / total) * 100)}%</span>
                <span>Restam: {total - answeredCount}</span>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-5 gap-1.5 max-h-[340px] overflow-y-auto pr-1 scrollbar-thin">
              {questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = !!answers[q.id];
                const isFlag = !!flagged[q.id];

                let btnStyle = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';

                if (isAnswered) {
                  btnStyle = 'bg-slate-900 text-white font-bold border-slate-900 shadow-xs';
                }

                if (isFlag) {
                  btnStyle = 'bg-amber-100 text-amber-900 border-amber-400 font-bold';
                }

                if (isCurrent) {
                  btnStyle += ' ring-2 ring-blue-600 ring-offset-1';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => onNavigate(idx)}
                    className={`h-9 rounded-lg border text-xs font-mono flex items-center justify-center transition relative cursor-pointer ${btnStyle}`}
                    title={`Questão ${q.number} - ${q.topic}`}
                  >
                    {q.number}
                    {isFlag && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 ring-1 ring-white"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-slate-900 shrink-0"></span>
                <span>Preenchida no Cartão</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300 shrink-0"></span>
                <span>Pendente</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-amber-200 border border-amber-400 shrink-0"></span>
                <span>Marcada para Revisão</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* MOBILE STICKY BOTTOM ACTION BAR (Ergonomia Máxima na Zona do Polegar) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 sm:p-2.5 z-30 shadow-2xl safe-bottom">
        <div className="max-w-md mx-auto flex items-center justify-between gap-1.5">
          
          {/* Botão Anterior */}
          <button
            disabled={isFirst}
            onClick={() => onNavigate(currentIndex - 1)}
            className="flex-1 py-3 px-2 bg-slate-100 active:bg-slate-200 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 disabled:opacity-35 disabled:cursor-not-allowed flex items-center justify-center gap-1 transition active:scale-95"
            aria-label="Questão anterior"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-[11px] font-bold">Anterior</span>
          </button>

          {/* Botão Central: Seletor Rápido de Questão */}
          <button
            onClick={() => setIsMobileGridOpen(true)}
            className="py-2.5 px-3 bg-slate-900 active:bg-slate-800 text-white rounded-xl text-xs font-mono font-bold flex flex-col items-center justify-center shrink-0 shadow-sm transition active:scale-95 min-w-[68px]"
            title="Abrir mapa de questões"
          >
            <span className="text-xs font-black">Q{currentQuestion.number}</span>
            <span className="text-[9px] text-slate-400 font-normal">de {total}</span>
          </button>

          {/* Botão Marcar para Revisar no Rodapé */}
          <button
            onClick={() => onToggleFlag(currentQuestion.id)}
            className={`p-3 rounded-xl border shrink-0 transition active:scale-95 flex items-center justify-center ${
              flagged[currentQuestion.id]
                ? 'bg-amber-100 border-amber-400 text-amber-800'
                : 'bg-slate-100 border-slate-300 text-slate-600'
            }`}
            title="Marcar questão para revisar"
            aria-label="Marcar para revisar"
          >
            <Bookmark className={`w-4 h-4 ${flagged[currentQuestion.id] ? 'fill-amber-600 text-amber-600' : ''}`} />
          </button>

          {/* Botão Próxima ou Finalizar */}
          {isLast ? (
            <button
              onClick={onFinishExam}
              className="flex-1 py-3 px-2 bg-emerald-600 active:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-md transition active:scale-95"
            >
              <FileCheck2 className="w-4 h-4" />
              <span className="text-[11px]">Finalizar</span>
            </button>
          ) : (
            <button
              onClick={() => onNavigate(currentIndex + 1)}
              className="flex-1 py-3 px-2 bg-blue-600 active:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-md transition active:scale-95"
              aria-label="Próxima questão"
            >
              <span className="text-[11px] font-bold">Próxima</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

        </div>
      </div>

      {/* MOBILE BOTTOM SHEET DRAWER - MAPA DE TODAS AS QUESTÕES */}
      {isMobileGridOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-t-3xl p-4 max-h-[85vh] flex flex-col shadow-2xl border-t border-slate-300 safe-bottom">
            
            {/* Drawer Drag Bar Indicator */}
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3"></div>

            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Grid className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-sm text-slate-900">
                  Mapa de Questões ({total})
                </h3>
              </div>
              <button
                onClick={() => setIsMobileGridOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 active:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Pills no Drawer */}
            <div className="flex items-center gap-1.5 py-2.5 border-b border-slate-100 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setMobileFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  mobileFilter === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                Todas ({total})
              </button>
              <button
                onClick={() => setMobileFilter('unanswered')}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  mobileFilter === 'unanswered'
                    ? 'bg-rose-600 text-white'
                    : 'bg-rose-50 text-rose-700 border border-rose-200'
                }`}
              >
                Em branco ({pendingCount})
              </button>
              <button
                onClick={() => setMobileFilter('flagged')}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  mobileFilter === 'flagged'
                    ? 'bg-amber-600 text-white'
                    : 'bg-amber-50 text-amber-800 border border-amber-200'
                }`}
              >
                Revisar ({flaggedCount})
              </button>
            </div>

            {/* Mobile Grid com 6 Colunas Touch */}
            <div className="py-3 overflow-y-auto max-h-[48vh] pr-1 touch-scroll">
              <div className="grid grid-cols-6 gap-2">
                {drawerQuestions.map(({ q, idx }) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = !!answers[q.id];
                  const isFlag = !!flagged[q.id];

                  let btnStyle = 'bg-slate-100 text-slate-800 border-slate-200';

                  if (isAnswered) {
                    btnStyle = 'bg-slate-900 text-white font-bold border-slate-900 shadow-xs';
                  }

                  if (isFlag) {
                    btnStyle = 'bg-amber-100 text-amber-900 border-amber-400 font-bold';
                  }

                  if (isCurrent) {
                    btnStyle += ' ring-2 ring-blue-600 ring-offset-1';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        onNavigate(idx);
                        setIsMobileGridOpen(false);
                      }}
                      className={`h-11 rounded-xl border text-xs font-mono font-semibold flex items-center justify-center transition active:scale-95 relative ${btnStyle}`}
                    >
                      {q.number}
                      {isFlag && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-1 ring-white"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-3 border-t border-slate-200 flex items-center gap-2">
              <button
                onClick={() => {
                  setIsMobileGridOpen(false);
                  onOpenCartao();
                }}
                className="flex-1 py-3 bg-slate-100 active:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl border border-slate-300 flex items-center justify-center gap-1.5 transition"
              >
                <Layers className="w-4 h-4 text-slate-600" />
                Cartão-Resposta
              </button>

              {!isCompleted && (
                <button
                  onClick={() => {
                    setIsMobileGridOpen(false);
                    onFinishExam();
                  }}
                  className="flex-1 py-3 bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition"
                >
                  <FileCheck2 className="w-4 h-4" />
                  Finalizar Simulado
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
