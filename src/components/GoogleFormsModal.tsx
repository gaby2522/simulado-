import React, { useState } from 'react';
import { 
  X, 
  Send, 
  ExternalLink, 
  CheckCircle, 
  Loader2, 
  LogIn, 
  Copy, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { Question } from '../types/quiz';
import { createGoogleFormFromQuiz, CreatedGoogleFormResult } from '../services/googleForms';
import { googleSignIn, getAccessToken } from '../services/auth';
import type { User } from 'firebase/auth';

interface GoogleFormsModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  subjectTitle: string;
  user: User | null;
  setUser: (user: User | null) => void;
}

export const GoogleFormsModal: React.FC<GoogleFormsModalProps> = ({
  isOpen,
  onClose,
  questions,
  subjectTitle,
  user,
  setUser,
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [progressMsg, setProgressMsg] = useState('');
  const [result, setResult] = useState<CreatedGoogleFormResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCreateForm = async () => {
    setError(null);
    setIsCreating(true);
    setProgressMsg('Iniciando conexão com Google Forms...');

    try {
      let token = await getAccessToken();

      if (!token) {
        setProgressMsg('Autenticando com sua conta Google...');
        const authRes = await googleSignIn();
        if (authRes) {
          setUser(authRes.user);
          token = authRes.accessToken;
        }
      }

      if (!token) {
        throw new Error('Não foi possível obter o token de acesso Google Workspace.');
      }

      const formTitle = `Simulado Cesgranrio - ${subjectTitle} (${questions.length} Questões)`;
      const formDesc = `Simulado preparatório oficial no formato da Fundação Cesgranrio para concursos de Nível Médio e Técnico Administrativo. Contém ${questions.length} questões com alternativas de (A) a (E).`;

      const res = await createGoogleFormFromQuiz(
        token,
        formTitle,
        formDesc,
        questions,
        (msg) => setProgressMsg(msg)
      );

      setResult(res);
    } catch (err: any) {
      console.error('Erro ao gerar Google Form:', err);
      setError(err?.message || 'Ocorreu um erro ao criar o formulário no Google Forms.');
    } finally {
      setIsCreating(false);
    }
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold">
                Exportar para o Google Forms
              </h3>
              <p className="text-xs text-slate-400">
                Gere um questionário oficial na sua conta Google Workspace
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {!result ? (
            <>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 space-y-2">
                <div className="font-semibold text-slate-900 text-sm">
                  Simulado Selecionado: {subjectTitle}
                </div>
                <p>
                  Serão exportadas <strong>{questions.length} questões</strong> fiéis às provas da Cesgranrio, formatadas com múltipla escolha (A a E) e textos de apoio originais.
                </p>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                  O formulário será criado diretamente no seu Google Drive com sua permissão.
                </div>
              </div>

              {error && (
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-xs text-rose-800 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Erro na exportação:</strong> {error}
                  </div>
                </div>
              )}

              {isCreating ? (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
                  <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
                  <p className="text-sm font-semibold text-slate-800">
                    {progressMsg || 'Processando questões no Google Forms...'}
                  </p>
                  <p className="text-xs text-slate-500">
                    Isso pode levar alguns segundos. Por favor aguarde.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {user ? (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        Conectado como <strong>{user.displayName || user.email}</strong>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
                      Ao clicar no botão abaixo, será solicitada sua permissão para criar o formulário em sua conta do Google.
                    </div>
                  )}

                  <button
                    onClick={handleCreateForm}
                    className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Gerar Questionário no Google Forms Agora
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Success State */
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-950 flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">
                    Formulário Criado com Sucesso!
                  </h4>
                  <p className="text-xs text-emerald-800 mt-1">
                    Todas as {questions.length} questões foram inseridas no seu Google Forms.
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Link para responder / compartilhar com candidatos:
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={result.responderUri}
                      className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-mono text-slate-700"
                    />
                    <button
                      onClick={() => handleCopy(result.responderUri)}
                      className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium border border-slate-300 transition flex items-center gap-1 shrink-0"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copiado!' : 'Copiar'}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={result.responderUri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm text-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Responder no Google Forms
                  </a>

                  <a
                    href={result.editUri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition border border-slate-300 text-center"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-500" />
                    Editar / Ver Respostas no Forms
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
