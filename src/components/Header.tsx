import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Clock, 
  Printer, 
  Send, 
  LogIn, 
  LogOut, 
  User as UserIcon,
  BookOpen, 
  Layers,
  Menu,
  X,
  Play,
  Pause,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { SubjectId } from '../types/quiz';
import { SUBJECTS } from '../data/subjects';
import { initAuth, googleSignIn, logout } from '../services/auth';
import type { User } from 'firebase/auth';

interface HeaderProps {
  currentSubjectId: SubjectId;
  onSelectSubject: (id: SubjectId) => void;
  timeRemainingSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onOpenCartaoResposta: () => void;
  onOpenGoogleFormsModal: () => void;
  onOpenPrintModal: () => void;
  answeredCount: number;
  totalQuestions: number;
  user: User | null;
  setUser: (user: User | null) => void;
  studyMode: 'exam' | 'study';
  onToggleStudyMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSubjectId,
  onSelectSubject,
  timeRemainingSeconds,
  isTimerRunning,
  onToggleTimer,
  onOpenCartaoResposta,
  onOpenGoogleFormsModal,
  onOpenPrintModal,
  answeredCount,
  totalQuestions,
  user,
  setUser,
  studyMode,
  onToggleStudyMode,
}) => {
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser) => {
        setUser(currentUser);
      },
      () => {
        setUser(null);
      }
    );
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, [setUser]);

  const handleSignIn = async () => {
    setIsAuthLoading(true);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
      }
    } catch (err: any) {
      console.error('Erro no login:', err);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      setUser(null);
    } catch (err) {
      console.error('Erro ao sair:', err);
    }
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentSubject = SUBJECTS.find((s) => s.id === currentSubjectId) || SUBJECTS[0];
  const isLast30Minutes = timeRemainingSeconds <= 1800 && timeRemainingSeconds > 0;

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-md safe-top">
      {/* Top Bar for Desktop & Mobile */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-1.5 sm:gap-2">
        
        {/* Brand & Badge (Tapping opens Subject Selector on Mobile) */}
        <div 
          onClick={() => setIsSubjectModalOpen(true)}
          className="flex items-center gap-2 cursor-pointer group active:opacity-85 select-none"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-base text-white shadow-inner shrink-0">
            C
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-blue-300 transition">
                Simulado Cesgranrio
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
            </div>
            <span className="text-[10px] sm:text-[11px] text-blue-400 font-medium truncate max-w-[130px] sm:max-w-none">
              {currentSubject.title} ({totalQuestions}q)
            </span>
          </div>
        </div>

        {/* Center / Right: Timer & Quick Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Touch-Friendly Compact Timer Pill */}
          <button
            onClick={onToggleTimer}
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-xl border font-mono text-xs sm:text-sm font-semibold transition active:scale-95 ${
              isLast30Minutes 
                ? 'bg-rose-950 border-rose-500 text-rose-300 animate-pulse' 
                : 'bg-slate-800 border-slate-700 text-slate-200'
            }`}
            title="Toque para pausar ou continuar o cronômetro"
          >
            <Clock className={`w-3.5 h-3.5 ${isLast30Minutes ? 'text-rose-400' : 'text-blue-400'}`} />
            <span>{formatTime(timeRemainingSeconds)}</span>
            {isTimerRunning ? (
              <Pause className="w-3 h-3 text-slate-400 ml-0.5" />
            ) : (
              <Play className="w-3 h-3 text-emerald-400 ml-0.5" />
            )}
          </button>

          {/* Desktop Direct Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={onToggleStudyMode}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition ${
                studyMode === 'study' 
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' 
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{studyMode === 'study' ? 'Modo Estudo' : 'Modo Prova'}</span>
            </button>

            <button
              onClick={onOpenGoogleFormsModal}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-lg text-xs font-medium transition"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Google Forms</span>
            </button>

            <button
              onClick={onOpenPrintModal}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>Imprimir</span>
            </button>

            {user ? (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-700">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" className="w-6 h-6 rounded-full" />
                ) : (
                  <UserIcon className="w-4 h-4 text-slate-400" />
                )}
                <button
                  onClick={handleSignOut}
                  className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-rose-400"
                  title="Sair da conta Google"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                disabled={isAuthLoading}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition"
              >
                <LogIn className="w-3.5 h-3.5 text-blue-400" />
                <span>Entrar</span>
              </button>
            )}
          </div>

          {/* Cartão Resposta Header CTA */}
          <button
            onClick={onOpenCartaoResposta}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 bg-blue-600 active:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition shrink-0 active:scale-95"
            title="Abrir Cartão-Resposta Óptico"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cartão</span>
            <span className="bg-blue-800 px-1.5 py-0.5 rounded-md text-[10px] font-mono">
              {answeredCount}/{totalQuestions}
            </span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-1.5 text-slate-300 hover:text-white bg-slate-800 active:bg-slate-700 rounded-xl border border-slate-700 transition"
            aria-label="Abrir menu de opções"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-3.5 py-3 space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
            <span>Opções do Simulado Cesgranrio</span>
            <span className="bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded text-[10px] font-bold">
              Nível Médio Adm
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onToggleStudyMode();
                setIsMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition text-left ${
                studyMode === 'study' 
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300' 
                  : 'bg-slate-800 border-slate-700 text-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>{studyMode === 'study' ? 'Modo Estudo' : 'Modo Prova'}</span>
            </button>

            <button
              onClick={() => {
                onOpenGoogleFormsModal();
                setIsMobileMenuOpen(false);
              }}
              className="p-2.5 bg-emerald-600/90 active:bg-emerald-600 text-white rounded-xl border border-emerald-500 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Send className="w-4 h-4 shrink-0" />
              <span>Google Forms</span>
            </button>

            <button
              onClick={() => {
                onOpenPrintModal();
                setIsMobileMenuOpen(false);
              }}
              className="p-2.5 bg-slate-800 active:bg-slate-700 text-slate-200 rounded-xl border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Printer className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Imprimir Prova</span>
            </button>

            {user ? (
              <button
                onClick={() => {
                  handleSignOut();
                  setIsMobileMenuOpen(false);
                }}
                className="p-2.5 bg-slate-800 text-rose-300 rounded-xl border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <LogOut className="w-4 h-4 shrink-0" />
                <span className="truncate">Sair ({user.displayName?.split(' ')[0] || 'Google'})</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  handleSignIn();
                  setIsMobileMenuOpen(false);
                }}
                className="p-2.5 bg-blue-600 active:bg-blue-700 text-white rounded-xl border border-blue-500 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <LogIn className="w-4 h-4 shrink-0" />
                <span>Conta Google</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Horizontal Touch Scrollable Subject Chips (Perfeito para Celular) */}
      <div className="bg-slate-950/90 border-t border-slate-800/80 overflow-x-auto no-scrollbar py-2 px-2.5 sm:px-4 touch-scroll">
        <div className="flex items-center gap-1.5 whitespace-nowrap min-w-max">
          <button
            onClick={() => setIsSubjectModalOpen(true)}
            className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0 flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:text-white"
          >
            <FileText className="w-3 h-3 text-blue-400" />
            <span>Matérias:</span>
          </button>

          {SUBJECTS.map((sub) => {
            const isSelected = sub.id === currentSubjectId;
            return (
              <button
                key={sub.id}
                onClick={() => {
                  onSelectSubject(sub.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition shrink-0 flex items-center gap-1.5 active:scale-95 ${
                  isSelected
                    ? 'bg-blue-600 text-white font-bold shadow-xs'
                    : 'text-slate-300 hover:bg-slate-800 active:bg-slate-700 bg-slate-900/80 border border-slate-800'
                }`}
              >
                <span>{sub.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                  isSelected ? 'bg-blue-800 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {sub.totalQuestions}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 30-Minute Final Warning */}
      {isLast30Minutes && (
        <div className="bg-rose-950 text-rose-200 px-3 py-1.5 text-xs text-center font-medium border-t border-rose-800 flex items-center justify-center gap-1.5">
          <span>⚠️ <strong>Atenção:</strong> Menos de 30 min restantes! Preencha seu Cartão-Resposta.</span>
        </div>
      )}

      {/* MODAL / BOTTOM SHEET SELETOR DE MATÉRIAS PARA CELULAR */}
      {isSubjectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-slate-900 text-white rounded-t-3xl sm:rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col border border-slate-800 shadow-2xl safe-bottom">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-sm text-white">
                  Selecione a Matéria do Simulado
                </h3>
              </div>
              <button
                onClick={() => setIsSubjectModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List of Subjects */}
            <div className="p-3 overflow-y-auto space-y-2 touch-scroll">
              {SUBJECTS.map((sub) => {
                const isSelected = sub.id === currentSubjectId;
                return (
                  <button
                    key={sub.id}
                    onClick={() => {
                      onSelectSubject(sub.id);
                      setIsSubjectModalOpen(false);
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition flex items-start justify-between gap-3 active:scale-[0.98] ${
                      isSelected
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-slate-800/80 border-slate-700/80 text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white">{sub.title}</span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {sub.description}
                      </p>
                      <div className="text-[11px] text-slate-500 font-mono pt-1">
                        ⏱️ Tempo sugerido: {sub.timeMinutes} minutos
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="inline-block px-2 py-1 rounded-lg bg-slate-900 border border-slate-700 font-mono text-xs font-bold text-blue-300">
                        {sub.totalQuestions} questões
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setIsSubjectModalOpen(false)}
                className="py-2 px-4 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};
