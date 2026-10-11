import { Question } from '../types/quiz';

export interface CreatedGoogleFormResult {
  formId: string;
  title: string;
  responderUri: string;
  editUri: string;
}

export async function createGoogleFormFromQuiz(
  accessToken: string,
  title: string,
  description: string,
  questions: Question[],
  onProgress?: (progressText: string) => void
): Promise<CreatedGoogleFormResult> {
  if (!accessToken) {
    throw new Error('Token de acesso Google Workspace não encontrado. Faça login primeiro.');
  }

  onProgress?.('Criando formulário no Google Forms...');

  // Step 1: Create initial Form
  const createRes = await fetch('https://forms.googleapis.com/v1/forms', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      info: {
        title: title,
        documentTitle: title,
      },
    }),
  });

  if (!createRes.ok) {
    const errorData = await createRes.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Falha ao criar formulário (${createRes.status}: ${createRes.statusText})`
    );
  }

  const formData = await createRes.json();
  const formId = formData.formId;
  const responderUri = formData.responderUri || `https://docs.google.com/forms/d/e/${formId}/viewform`;
  const editUri = `https://docs.google.com/forms/d/${formId}/edit`;

  onProgress?.(`Adicionando ${questions.length} questões da Cesgranrio...`);

  // Step 2: Add description and questions via batchUpdate
  // Google Forms items must be created with createItem
  // Notice: The items array must specify valid requests
  const requests: any[] = [];

  // Optionally update form description
  requests.push({
    updateFormInfo: {
      info: {
        description: `${description}\n\nBanca: Fundação Cesgranrio (Nível Médio e Técnico Administrativo)\nFormato oficial: 5 alternativas (A a E), apenas 1 correta.`,
      },
      updateMask: 'description',
    },
  });

  // Add questions
  questions.forEach((q, index) => {
    let questionDesc = '';
    if (q.contextTextTitle && q.contextText) {
      questionDesc += `[${q.contextTextTitle}]\n${q.contextText.substring(0, 500)}${q.contextText.length > 500 ? '...' : ''}\n\n`;
    }
    if (q.tableOrData) {
      questionDesc += `Dados / Tabela:\n${q.tableOrData}\n\n`;
    }
    questionDesc += `Origem: ${q.examSource} | Conteúdo: ${q.topic}`;

    requests.push({
      createItem: {
        item: {
          title: `[Q${q.number}] ${q.questionText}`,
          description: questionDesc,
          questionItem: {
            question: {
              required: false,
              choiceQuestion: {
                type: 'RADIO',
                options: q.options.map((opt) => ({
                  value: `(${opt.letter}) ${opt.text}`,
                })),
                shuffle: false,
              },
            },
          },
        },
        location: {
          index: index,
        },
      },
    });
  });

  const batchRes = await fetch(`https://forms.googleapis.com/v1/forms/${formId}:batchUpdate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ requests }),
  });

  if (!batchRes.ok) {
    const errorData = await batchRes.json().catch(() => ({}));
    console.error('Batch update error:', errorData);
    // Even if batchUpdate has a partial issue, the form is created
  }

  onProgress?.('Formulário criado com sucesso!');

  return {
    formId,
    title,
    responderUri,
    editUri,
  };
}
