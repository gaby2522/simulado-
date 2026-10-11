import React, { useState, useRef } from 'react';
import { 
  Bookmark, 
  CheckCircle2, 
  XCircle, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  Type,
  Maximize2
} from 'lucide-react';
import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  selectedOption?: 'A' | 'B' | 'C' | 'D' | 'E';
  onSelectOption: (option: 'A' | 'B' | 'C' | 'D' | 'E') => void;
  isFlagged?: boolean;
  onToggleFlag?: () => void;
  studyMode: 'exam' | 'study';
  isCompleted?: boolean;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  isFlagged = false,
  onToggleFlag,
  studyMode,
  isCompleted = false,
  onSwipeLeft,
  onSwipeRight,
}) => {
  const [isTextExpanded, setIsTextExpanded] = useState<boolean>(true);
  const [fontScale, setFontScale] = useState<'normal' | 'large'>('normal');

  // Touch swipe handling for mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Only trigger if horizontal swipe is prominent and greater than vertical scroll
    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0 && onSwipeLeft) {
        onSwipeLeft(); // Swiped left -> next question
      } else if (deltaX > 0 && onSwipeRight) {
        onSwipeRight(); // Swiped right -> prev question
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const showFeedback = (studyMode === 'study' && !!selectedOption) || isCompleted;

  return (
    <div 
      className="bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden transition-all"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header da Questão - Adaptado para Celular */}
      <div className="bg-slate-50/95 px-3 sm:px-5 py-2.5 sm:py-3 border-b border-slate-200 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs shrink-0 font-mono">
            {question.number}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 truncate">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide shrink-0">
                {question.subjectName}
              </span>
              <span className="text-slate-300 shrink-0">•</span>
              <span className="text-xs text-blue-700 font-medium truncate">
                {question.topic}
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 font-mono truncate">
              {question.examSource}
            </div>
          </div>
        </div>

        {/* Controles de Topo: Tamanho da Fonte & Marcador */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Botão de Ajustar Tamanho do Texto (Excelente para Celular) */}
          <button
            onClick={() => setFontScale((prev) => (prev === 'normal' ? 'large' : 'normal'))}
            className={`p-1.5 rounded-lg border text-xs font-semibold flex items-center gap-0.5 transition active:scale-90 ${
              fontScale === 'large'
                ? 'bg-blue-50 border-blue-300 text-blue-700'
                : 'bg-white border-slate-200 text-slate-500'
            }`}
            title="Alternar tamanho da fonte no celular"
            aria-label="Alternar tamanho da fonte"
          >
            <Type className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold">{fontScale === 'large' ? 'A+' : 'A'}</span>
          </button>

          {/* Botão de Marcar para Revisar */}
          {onToggleFlag && !isCompleted && (
            <button
              onClick={onToggleFlag}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-medium border transition active:scale-95 ${
                isFlagged
                  ? 'bg-amber-100 border-amber-300 text-amber-800 font-bold'
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800'
              }`}
              title="Marcar questão para revisar depois"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
              <span className="hidden sm:inline">{isFlagged ? 'Marcada' : 'Revisar'}</span>
            </button>
          )}
        </div>
      </div>

      <div className="p-3.5 sm:p-7 space-y-4 sm:space-y-5">
        
        {/* Texto de Apoio (Com Acordeão para economizar espaço na tela do celular) */}
        {question.contextText && (
          <div className="bg-amber-50/60 border border-amber-200/90 rounded-xl overflow-hidden text-slate-800 text-xs sm:text-sm">
            <button
              onClick={() => setIsTextExpanded((prev) => !prev)}
              className="w-full px-3.5 py-2.5 bg-amber-100/70 active:bg-amber-100 flex items-center justify-between text-left transition font-semibold text-slate-900 border-b border-amber-200/70"
            >
              <div className="flex items-center gap-2 truncate">
                <FileText className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="truncate text-xs sm:text-sm">
                  {question.contextTextTitle || 'Texto de Apoio da Questão'}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-amber-800 shrink-0 ml-2 font-medium">
                <span>{isTextExpanded ? 'Ocultar texto' : 'Ler texto'}</span>
                {isTextExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </div>
            </button>

            {isTextExpanded && (
              <div className={`p-3 sm:p-4 whitespace-pre-line font-serif text-slate-700 leading-relaxed max-h-60 sm:max-h-80 overflow-y-auto scrollbar-thin animate-in fade-in duration-150 ${
                fontScale === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
              }`}>
                {question.contextText}
              </div>
            )}
          </div>
        )}

        {/* Tabela ou Dados com Scroll Horizontal no Mobile */}
        {question.tableOrData && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 overflow-x-auto scrollbar-thin">
            <pre className="text-xs font-mono text-slate-800 whitespace-pre">
              {question.tableOrData}
            </pre>
          </div>
        )}

        {/* Enunciado da Questão */}
        <div className={`text-slate-900 font-medium leading-relaxed ${
          fontScale === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
        }`}>
          {question.questionText}
        </div>

        {/* Alternativas A, B, C, D, E (Toque Amigável para Mobile/Celular) */}
        <div className="space-y-2 sm:space-y-2.5 pt-1">
          {question.options.map((option) => {
            const isSelected = selectedOption === option.letter;
            const isCorrect = question.correctOption === option.letter;

            let optionStyle = 'border-slate-200 active:bg-slate-100/90 bg-white text-slate-800';
            let circleStyle = 'border-slate-400 text-slate-700 bg-white';

            if (isSelected) {
              optionStyle = 'border-blue-600 bg-blue-50/70 text-slate-950 ring-2 ring-blue-600 font-medium shadow-xs';
              circleStyle = 'border-blue-600 bg-blue-600 text-white';
            }

            if (showFeedback) {
              if (isCorrect) {
                optionStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 ring-2 ring-emerald-500 font-medium';
                circleStyle = 'border-emerald-600 bg-emerald-600 text-white';
              } else if (isSelected && !isCorrect) {
                optionStyle = 'border-rose-400 bg-rose-50/80 text-rose-950 ring-2 ring-rose-400';
                circleStyle = 'border-rose-600 bg-rose-600 text-white';
              }
            }

            return (
              <button
                key={option.letter}
                disabled={isCompleted}
                onClick={() => onSelectOption(option.letter)}
                className={`w-full text-left p-3 sm:p-4 rounded-xl border transition flex items-start gap-3 cursor-pointer min-h-[52px] active:scale-[0.98] select-none ${optionStyle}`}
              >
                {/* Círculo óptico com a letra - Tamanho confortável para toque no celular */}
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 mt-0.5 transition shadow-2xs ${circleStyle}`}
                >
                  {option.letter}
                </div>

                {/* Texto da alternativa */}
                <div className={`flex-1 leading-snug pt-1 text-slate-900 ${
                  fontScale === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                }`}>
                  {option.text}
                </div>

                {/* Indicador de acerto/erro */}
                {showFeedback && (
                  <div className="shrink-0 mt-1">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-rose-500" />
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Gabarito Comentado e Justificativa da Banca Cesgranrio */}
        {showFeedback && (
          <div className="mt-4 p-3.5 sm:p-4 rounded-xl border border-blue-200 bg-blue-50/70 text-slate-800 space-y-2 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 font-bold text-blue-900 text-xs uppercase tracking-wide">
              <HelpCircle className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Gabarito Oficial Cesgranrio • Alternativa Correta: ({question.correctOption})</span>
            </div>
            <p className={`text-slate-800 leading-relaxed ${
              fontScale === 'large' ? 'text-sm' : 'text-xs sm:text-sm'
            }`}>
              {question.explanation}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
