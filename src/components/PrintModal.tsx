import React from 'react';
import { X, Printer } from 'lucide-react';
import { Question } from '../types/quiz';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  subjectTitle: string;
}

export const PrintModal: React.FC<PrintModalProps> = ({
  isOpen,
  onClose,
  questions,
  subjectTitle,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] flex flex-col border border-slate-300">
        
        {/* Top Control Bar (hidden in print) */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between print:hidden rounded-t-xl">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-blue-400" />
            <h3 className="font-bold text-sm">Visualização para Impressão - Padrão Cesgranrio</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              Imprimir Agora
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Booklet Body */}
        <div className="p-8 overflow-y-auto flex-1 font-serif text-slate-900 leading-normal print:p-0 print:overflow-visible">
          
          {/* Header oficial da folha de prova */}
          <div className="border-b-2 border-slate-900 pb-4 mb-6 flex justify-between items-start">
            <div>
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-slate-700">
                PROCESSO SELETIVO PÚBLICO • FUNDAÇÃO CESGRANRIO
              </div>
              <h1 className="text-xl font-sans font-black tracking-tight text-slate-900 uppercase mt-1">
                CADERNO DE QUESTÕES — {subjectTitle}
              </h1>
              <div className="text-xs font-sans text-slate-600 mt-1">
                Nível Médio e Técnico Administrativo • Total: {questions.length} Questões Objetivas
              </div>
            </div>
            <div className="border-2 border-slate-900 p-2 text-center rounded min-w-[100px] font-sans">
              <span className="text-[10px] block font-bold text-slate-600 uppercase">Gabarito</span>
              <span className="text-sm font-black">5 OPÇÕES</span>
              <span className="text-[9px] block text-slate-500">(A) a (E)</span>
            </div>
          </div>

          {/* Instruções breves */}
          <div className="bg-slate-50 border border-slate-300 p-3 mb-6 text-xs font-sans rounded leading-relaxed">
            <strong>Instruções ao Candidato:</strong> Cada questão apresenta 5 alternativas (A a E), das quais apenas uma é correta. 
            Preencha os círculos do Cartão-Resposta com caneta esferográfica preta.
          </div>

          {/* List of questions */}
          <div className="space-y-6">
            {questions.map((q) => (
              <div key={q.id} className="border-b border-slate-200 pb-5 break-inside-avoid">
                {q.contextText && (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded mb-3 text-xs leading-relaxed font-sans italic">
                    {q.contextTextTitle && <strong>{q.contextTextTitle}: </strong>}
                    {q.contextText}
                  </div>
                )}
                {q.tableOrData && (
                  <pre className="p-2 bg-slate-100 rounded text-[11px] font-mono mb-2 whitespace-pre-wrap">
                    {q.tableOrData}
                  </pre>
                )}
                <div className="font-sans font-bold text-sm mb-2 text-slate-900">
                  {q.number}. {q.questionText}
                </div>
                <div className="space-y-1 font-sans text-xs pl-2">
                  {q.options.map((opt) => (
                    <div key={opt.letter} className="flex items-start gap-2">
                      <span className="font-bold">({opt.letter})</span>
                      <span>{opt.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cartão-Resposta destacável na folha de impressão */}
          <div className="mt-12 pt-6 border-t-2 border-dashed border-slate-400 break-before-page">
            <div className="text-center mb-4">
              <span className="text-[10px] font-sans uppercase tracking-widest text-slate-500">
                (Destaque ou preencha esta folha)
              </span>
              <h2 className="text-lg font-sans font-black text-slate-900 uppercase">
                CARTÃO-RESPOSTA OFICIAL • {subjectTitle}
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 border border-slate-400 p-4 rounded font-sans text-xs">
              {questions.map((q) => (
                <div key={q.id} className="flex items-center justify-between p-1 border-b border-slate-200">
                  <span className="font-bold w-6 text-slate-800">{q.number}.</span>
                  <div className="flex gap-1.5">
                    {['A', 'B', 'C', 'D', 'E'].map((letter) => (
                      <span
                        key={letter}
                        className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center font-bold text-[10px] text-slate-600"
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
