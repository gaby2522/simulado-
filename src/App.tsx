/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { SubjectId } from './types/quiz';
import { SUBJECTS } from './data/subjects';
import { getQuestionsBySubject } from './data/questions';
import { Header } from './components/Header';
import { SimuladoRunner } from './components/SimuladoRunner';
import { CartaoResposta } from './components/CartaoResposta';
import { ResultView } from './components/ResultView';
import { GoogleFormsModal } from './components/GoogleFormsModal';
import { PrintModal } from './components/PrintModal';
import { AlertTriangle, FileCheck2, X } from 'lucide-react';
import type { User } from 'firebase/auth';

export default function App() {
  const [currentSubjectId, setCurrentSubjectId] = useState<SubjectId>('portugues');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [studyMode, setStudyMode] = useState<'exam' | 'study'>('exam');
  
  // Modals
  const [isCartaoOpen, setIsCartaoOpen] = useState<boolean>(false);
  const [isGoogleFormsOpen, setIsGoogleFormsOpen] = useState<boolean>(false);
  const [isPrintOpen, setIsPrintOpen] = useState<boolean>(false);
  const [isConfirmFinishOpen, setIsConfirmFinishOpen] = useState<boolean>(false);

  // Auth User
  const [user, setUser] = useState<User | null>(null);

  // Subject Info & Questions
  const currentSubject = useMemo(() => {
    return SUBJECTS.find((s) => s.id === currentSubjectId) || SUBJECTS[0];
  }, [currentSubjectId]);

  const questions = useMemo(() => {
    return getQuestionsBySubject(currentSubjectId);
  }, [currentSubjectId]);

  // Timer state
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(
    currentSubject.timeMinutes * 60
  );
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Reset or switch subject
  const handleSelectSubject = useCallback((subId: SubjectId) => {
    if (subId === currentSubjectId) return;
    const nextSub = SUBJECTS.find((s) => s.id === subId) || SUBJECTS[0];
    setCurrentSubjectId(subId);
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});
    setIsCompleted(false);
    setTimeRemainingSeconds(nextSub.timeMinutes * 60);
    setIsTimerRunning(true);
  }, [currentSubjectId]);

  // Timer decrement effect
  useEffect(() => {
    if (!isTimerRunning || isCompleted) return;

    const timer = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning, isCompleted]);

  // Answer selection
  const handleSelectAnswer = useCallback((questionId: string, option: 'A' | 'B' | 'C' | 'D' | 'E') => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  }, []);

  const handleClearAnswer = useCallback((questionId: string) => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  }, []);

  const handleToggleFlag = useCallback((questionId: string) => {
    setFlagged((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  }, []);

  const handleFinishExam = useCallback(() => {
    setIsConfirmFinishOpen(true);
  }, []);

  const handleConfirmFinish = useCallback(() => {
    setIsConfirmFinishOpen(false);
    setIsCompleted(true);
    setIsTimerRunning(false);
  }, []);

  const handleRetakeExam = useCallback(() => {
    setAnswers({});
    setFlagged({});
    setIsCompleted(false);
    setCurrentIndex(0);
    setTimeRemainingSeconds(currentSubject.timeMinutes * 60);
    setIsTimerRunning(true);
  }, [currentSubject.timeMinutes]);

  const answeredCount = Object.keys(answers).length;
  const pendingCount = questions.length - answeredCount;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans">
      {/* Header bar */}
      <Header
        currentSubjectId={currentSubjectId}
        onSelectSubject={handleSelectSubject}
        timeRemainingSeconds={timeRemainingSeconds}
        isTimerRunning={isTimerRunning}
        onToggleTimer={() => setIsTimerRunning((prev) => !prev)}
        onOpenCartaoResposta={() => setIsCartaoOpen(true)}
        onOpenGoogleFormsModal={() => setIsGoogleFormsOpen(true)}
        onOpenPrintModal={() => setIsPrintOpen(true)}
        answeredCount={answeredCount}
        totalQuestions={questions.length}
        user={user}
        setUser={setUser}
        studyMode={studyMode}
        onToggleStudyMode={() => setStudyMode((prev) => (prev === 'exam' ? 'study' : 'exam'))}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {isCompleted ? (
          <ResultView
            questions={questions}
            answers={answers}
            onRetake={handleRetakeExam}
            onOpenGoogleForms={() => setIsGoogleFormsOpen(true)}
            onOpenPrint={() => setIsPrintOpen(true)}
            subjectTitle={currentSubject.title}
          />
        ) : (
          <SimuladoRunner
            questions={questions}
            currentIndex={currentIndex}
            onNavigate={(idx) => setCurrentIndex(idx)}
            answers={answers}
            onSelectAnswer={handleSelectAnswer}
            onClearAnswer={handleClearAnswer}
            flagged={flagged}
            onToggleFlag={handleToggleFlag}
            onOpenCartao={() => setIsCartaoOpen(true)}
            onFinishExam={handleFinishExam}
            studyMode={studyMode}
            isCompleted={isCompleted}
          />
        )}
      </main>

      {/* Optical Answer Sheet (Cartão-Resposta) Modal */}
      <CartaoResposta
        isOpen={isCartaoOpen}
        onClose={() => setIsCartaoOpen(false)}
        questions={questions}
        answers={answers}
        onSelectAnswer={handleSelectAnswer}
        onJumpToQuestion={(idx) => {
          setCurrentIndex(idx);
          setIsCartaoOpen(false);
        }}
        onFinishExam={handleFinishExam}
        isCompleted={isCompleted}
      />

      {/* Google Forms Integration Modal */}
      <GoogleFormsModal
        isOpen={isGoogleFormsOpen}
        onClose={() => setIsGoogleFormsOpen(false)}
        questions={questions}
        subjectTitle={currentSubject.title}
        user={user}
        setUser={setUser}
      />

      {/* Print Booklet Modal */}
      <PrintModal
        isOpen={isPrintOpen}
        onClose={() => setIsPrintOpen(false)}
        questions={questions}
        subjectTitle={currentSubject.title}
      />

      {/* Custom Mobile-Friendly Finish Confirmation Modal */}
      {isConfirmFinishOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in duration-150 safe-bottom">
          <div className="bg-white rounded-3xl sm:rounded-2xl max-w-md w-full p-5 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
              </div>
              <button
                onClick={() => setIsConfirmFinishOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                Finalizar Simulado Cesgranrio?
              </h3>
              <p className="text-xs text-slate-600">
                Ao finalizar, o cartão de respostas será processado e o gabarito oficial com resolução comentada será exibido.
              </p>
            </div>

            {/* Quick status summary */}
            <div className="grid grid-cols-2 gap-2 py-1">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                <span className="block text-base font-mono font-bold text-emerald-800">
                  {answeredCount}
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold">Respondidas</span>
              </div>

              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-center">
                <span className="block text-base font-mono font-bold text-rose-800">
                  {pendingCount}
                </span>
                <span className="text-[11px] text-rose-700 font-semibold">Em branco</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleConfirmFinish}
                className="w-full py-3 px-4 bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition active:scale-95"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Sim, Entregar e Ver Gabarito</span>
              </button>

              <button
                onClick={() => setIsConfirmFinishOpen(false)}
                className="w-full py-2.5 px-4 bg-slate-100 active:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition"
              >
                Voltar e Continuar Respondendo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-xs text-center border-t border-slate-800 print:hidden hidden md:block">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-medium text-slate-300">
            Simulados Cesgranrio • Concursos Públicos Transpetro / Petrobras (Nível Médio e Técnico Administrativo)
          </p>
          <p className="text-slate-500 text-[11px]">
            Questões extraídas fielmente dos cadernos de provas oficiais da Fundação Cesgranrio com textos de apoio, gabarito e resolução comentada.
          </p>
        </div>
      </footer>
    </div>
  );
}
