import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Send, 
  Award, 
  BarChart3, 
  BookOpen, 
  Printer, 
  ChevronDown,
  ChevronUp,
  FileCheck2
} from 'lucide-react';
import { Question } from '../types/quiz';

interface ResultViewProps {
  questions: Question[];
  answers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>;
  onRetake: () => void;
  onOpenGoogleForms: () => void;
  onOpenPrint: () => void;
  subjectTitle: string;
}

export const ResultView: React.FC<ResultViewProps> = ({
  questions,
  answers,
  onRetake,
  onOpenGoogleForms,
  onOpenPrint,
  subjectTitle,
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'wrong'>('all');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const total = questions.length;
  let correctCount = 0;
  let wrongCount = 0;
  let blankCount = 0;

  const topicStats: Record<string, { total: number; correct: number }> = {};

  questions.forEach((q) => {
    const userAns = answers[q.id];
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, correct: 0 };
    }
    topicStats[q.topic].total += 1;

    if (!userAns) {
      blankCount += 1;
    } else if (userAns === q.correctOption) {
      correctCount += 1;
      topicStats[q.topic].correct += 1;
    } else {
      wrongCount += 1;
    }
  });

  const percentage = Math.round((correctCount / total) * 100);

  const filteredQuestions = questions.filter((q) => {
    const userAns = answers[q.id];
    const isCorrect = userAns === q.correctOption;
    if (filter === 'correct') return isCorrect;
    if (filter === 'wrong') return !isCorrect;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-8 space-y-4 sm:space-y-8 pb-20 sm:pb-8">
      
      {/* Top Banner with Score and Cesgranrio Performance Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-8 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1.5 text-center md:text-left w-full md:w-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Resultado Oficial • Cesgranrio
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {subjectTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Confira seu aproveitamento conforme os critérios da Fundação Cesgranrio para concursos de Nível Médio e Técnico Administrativo.
            </p>
          </div>

          {/* Large Circle / Metric Badge */}
          <div className="text-center p-4 sm:p-5 rounded-2xl bg-slate-900 text-white shadow-inner min-w-[130px] sm:min-w-[160px] w-full sm:w-auto">
            <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-amber-400">
              {percentage}%
            </div>
            <div className="text-[11px] sm:text-xs text-slate-300 font-semibold uppercase mt-0.5">
              Aproveitamento
            </div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">
              {correctCount} de {total} questões
            </div>
          </div>
        </div>

        {/* Breakdown Stats Badges */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3.5 sm:pt-6 mt-3.5 sm:mt-6 border-t border-slate-100 text-center">
          <div className="p-2 sm:p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="text-lg sm:text-2xl font-bold text-emerald-700 font-mono">
              {correctCount}
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-emerald-800">Acertos</div>
          </div>
          <div className="p-2 sm:p-3 rounded-xl bg-rose-50 border border-rose-200">
            <div className="text-lg sm:text-2xl font-bold text-rose-700 font-mono">
              {wrongCount}
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-rose-800">Erros</div>
          </div>
          <div className="p-2 sm:p-3 rounded-xl bg-slate-100 border border-slate-200">
            <div className="text-lg sm:text-2xl font-bold text-slate-700 font-mono">
              {blankCount}
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-slate-800">Em Branco</div>
          </div>
        </div>

        {/* Action Buttons (Mobile-first grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100">
          <button
            onClick={onRetake}
            className="w-full flex items-center justify-center gap-2 py-3 px-3 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold transition active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Refazer Simulado</span>
          </button>
          
          <button
            onClick={onOpenPrint}
            className="w-full flex items-center justify-center gap-2 py-3 px-3 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold transition active:scale-95"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span>Imprimir Caderno</span>
          </button>

          <button
            onClick={onOpenGoogleForms}
            className="w-full flex items-center justify-center gap-2 py-3 px-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Exportar Forms</span>
          </button>
        </div>
      </div>

      {/* Performance by Subject Topic / Assuntos do Edital */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-3.5">
        <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-blue-600" />
          Desempenho por Conteúdo do Edital
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
          {Object.entries(topicStats).map(([topic, stat]) => {
            const topicPct = Math.round((stat.correct / stat.total) * 100);
            return (
              <div key={topic} className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 truncate pr-2">{topic}</span>
                  <span className="font-mono font-bold text-slate-900 shrink-0">{stat.correct}/{stat.total} ({topicPct}%)</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      topicPct >= 70 ? 'bg-emerald-500' : topicPct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${topicPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Question Review and Answer Key */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              Gabarito Oficial Comentado
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500">
              Toque em cada questão para ver a resolução e a fundamentação da Cesgranrio.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold w-full sm:w-auto">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg transition text-center ${filter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'}`}
            >
              Todas ({total})
            </button>
            <button
              onClick={() => setFilter('correct')}
              className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg transition text-center ${filter === 'correct' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600'}`}
            >
              Acertos ({correctCount})
            </button>
            <button
              onClick={() => setFilter('wrong')}
              className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg transition text-center ${filter === 'wrong' ? 'bg-white text-rose-700 shadow-xs' : 'text-slate-600'}`}
            >
              Erros ({wrongCount + blankCount})
            </button>
          </div>
        </div>

        {/* Questions list */}
        <div className="space-y-2.5">
          {filteredQuestions.map((q) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.correctOption;
            const isExpanded = expandedQuestion === q.id;

            return (
              <div
                key={q.id}
                className={`border rounded-2xl transition overflow-hidden ${
                  isCorrect ? 'border-emerald-200 bg-white' : 'border-rose-200 bg-white'
                }`}
              >
                {/* Accordion header */}
                <div
                  onClick={() => setExpandedQuestion(isExpanded ? null : q.id)}
                  className="p-3 sm:p-4 flex items-center justify-between gap-2.5 cursor-pointer hover:bg-slate-50 active:bg-slate-100 transition"
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 font-mono ${
                        isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                      }`}
                    >
                      {q.number}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-800 truncate">
                        {q.questionText}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                        {q.topic}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <div className="text-xs text-right font-mono">
                      <span className="text-slate-500 mr-1.5 hidden sm:inline">
                        Sua: <strong>{userAns ? `(${userAns})` : 'Branco'}</strong>
                      </span>
                      <span className="text-emerald-700 font-bold text-[11px] sm:text-xs">
                        ({q.correctOption})
                      </span>
                    </div>
                    {isCorrect ? (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                    ) : (
                      <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />
                    )}
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>
                </div>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="p-3.5 sm:p-4 pt-0 border-t border-slate-100 bg-slate-50/50 space-y-3 text-xs sm:text-sm animate-in fade-in duration-150">
                    {q.contextText && (
                      <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-slate-700 whitespace-pre-line font-serif text-xs max-h-48 overflow-y-auto">
                        {q.contextText}
                      </div>
                    )}
                    <div className="font-medium text-slate-900 pt-1">
                      {q.questionText}
                    </div>
                    <div className="space-y-1.5 pt-1">
                      {q.options.map((opt) => (
                        <div
                          key={opt.letter}
                          className={`p-2 rounded-xl border text-xs flex items-start gap-2 ${
                            opt.letter === q.correctOption
                              ? 'bg-emerald-100/70 border-emerald-300 text-emerald-950 font-semibold'
                              : opt.letter === userAns
                              ? 'bg-rose-100/70 border-rose-300 text-rose-950 line-through'
                              : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          <span className="font-bold shrink-0 font-mono">({opt.letter})</span>
                          <span>{opt.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-slate-800 text-xs leading-relaxed">
                      <strong className="text-blue-900 block mb-1">Fundamentação Oficial da Cesgranrio:</strong>
                      {q.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
