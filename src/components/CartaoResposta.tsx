import React from 'react';
import { X, CheckCircle, AlertCircle, FileCheck2, ArrowLeft } from 'lucide-react';
import { Question } from '../types/quiz';

interface CartaoRespostaProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  answers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>;
  onSelectAnswer: (questionId: string, option: 'A' | 'B' | 'C' | 'D' | 'E') => void;
  onJumpToQuestion: (index: number) => void;
  onFinishExam: () => void;
  isCompleted?: boolean;
}

export const CartaoResposta: React.FC<CartaoRespostaProps> = ({
  isOpen,
  onClose,
  questions,
  answers,
  onSelectAnswer,
  onJumpToQuestion,
  onFinishExam,
  isCompleted = false,
}) => {
  if (!isOpen) return null;

  const total = questions.length;
  const answeredCount = Object.keys(answers).length;
  const pendingCount = total - answeredCount;

  const options: Array<'A' | 'B' | 'C' | 'D' | 'E'> = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white text-slate-900 rounded-t-3xl sm:rounded-2xl shadow-2xl max-w-4xl w-full h-[96vh] sm:max-h-[90vh] flex flex-col border border-slate-300 animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200 safe-bottom">
        
        {/* Drag handle on mobile */}
        <div className="sm:hidden w-12 h-1 bg-slate-300 rounded-full mx-auto my-2 shrink-0"></div>

        {/* Header estilo folha de resposta Cesgranrio */}
        <div className="bg-slate-100 px-3.5 sm:px-5 py-2.5 sm:py-3 border-b border-slate-300 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border-2 border-slate-800 flex items-center justify-center font-serif font-black text-sm sm:text-base text-slate-900 shrink-0">
              BR
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                Cesgranrio • Cartão-Resposta Óptico
              </div>
              <h2 className="text-xs sm:text-base font-black tracking-tight text-slate-900 leading-tight">
                FOLHA OFICIAL DE RESPOSTAS
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resumo e Instruções Compactas */}
        <div className="bg-amber-50 px-3.5 sm:px-4 py-2 border-b border-amber-200/80 text-[11px] sm:text-xs text-amber-950 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-1.5 truncate">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span className="truncate">Preencha com toque contínuo.</span>
          </div>
          <div className="flex items-center gap-2.5 shrink-0 font-semibold font-mono text-[11px]">
            <span className="text-emerald-700">{answeredCount} Marcadas</span>
            <span className="text-slate-500">{pendingCount} Em branco</span>
          </div>
        </div>

        {/* Grid de Bolhas do Cartão-Resposta */}
        <div className="p-3 sm:p-6 overflow-y-auto flex-1 bg-slate-50/70 touch-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-2.5">
            {questions.map((q, idx) => {
              const selected = answers[q.id];
              const isAnswered = !!selected;

              return (
                <div
                  key={q.id}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition ${
                    isAnswered 
                      ? 'bg-white border-slate-300 shadow-2xs' 
                      : 'bg-white/80 border-slate-200'
                  }`}
                >
                  {/* Número da questão e botão para ir ao enunciado */}
                  <button
                    onClick={() => {
                      onJumpToQuestion(idx);
                      onClose();
                    }}
                    className="flex items-center gap-2 text-xs font-bold text-slate-700 active:text-blue-600 transition text-left cursor-pointer"
                    title="Ver enunciado da questão"
                  >
                    <span className="w-7 h-7 rounded-lg bg-slate-200 text-slate-900 flex items-center justify-center font-mono text-xs font-black shrink-0">
                      {q.number.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal truncate max-w-[85px] sm:max-w-[120px]">
                      {q.topic}
                    </span>
                  </button>

                  {/* Bolhas ópticas A, B, C, D, E (Touch amigável 34px) */}
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    {options.map((opt) => {
                      const isMarked = selected === opt;
                      return (
                        <button
                          key={opt}
                          disabled={isCompleted}
                          onClick={() => onSelectAnswer(q.id, opt)}
                          className={`w-8 h-8 sm:w-8 sm:h-8 rounded-full text-xs font-bold flex items-center justify-center transition active:scale-85 select-none cursor-pointer ${
                            isMarked
                              ? 'bg-slate-950 text-white border-2 border-slate-950 shadow-inner'
                              : 'bg-white text-slate-700 border border-slate-300 active:border-slate-800'
                          }`}
                          title={`Questão ${q.number} - (${opt})`}
                          aria-label={`Questão ${q.number} alternativa ${opt}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rodapé Fixo com Botão Entregar no Polegar */}
        <div className="bg-white px-3.5 sm:px-5 py-3 border-t border-slate-200 flex items-center justify-between gap-2 shadow-lg shrink-0">
          <button
            onClick={onClose}
            className="py-2.5 px-3.5 text-xs font-semibold text-slate-700 active:bg-slate-100 rounded-xl transition flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Caderno</span>
          </button>

          {!isCompleted && (
            <button
              onClick={() => {
                onClose();
                onFinishExam();
              }}
              className="py-2.5 px-4 sm:px-6 bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-1.5 active:scale-95"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Entregar Simulado</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
