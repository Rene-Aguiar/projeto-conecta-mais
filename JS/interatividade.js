// BASE DE DADOS AMPLIADA COM MAIS OPÇÕES DE PERFIS
const profilesData = [
    { id: 1, name: 'Camila Santos', age: 28, gender: 'Feminino', city: 'São Paulo, SP', disability: 'Deficiência Motora', disabilityType: 'motora', distance: '4 km de você', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800', bio: 'Arquiteta de acessibilidade, apaixonada por cafés inclusivos, literatura e passeios adaptados.', tags: ['Texto / WhatsApp', 'Mensagens de Áudio'], intent: 'Amizade e Grupos' },
    { id: 2, name: 'Lucas Mendes', age: 32, gender: 'Masculino', city: 'Santo André, SP', disability: 'Deficiência Visual', disabilityType: 'visual', distance: '12 km de você', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800', bio: 'Músico e podcaster. Uso leitor de tela para comunicação. Adoro conversas sobre arte.', tags: ['Leitor de Tela', 'Mensagens de Áudio'], intent: 'Amizade e Games' },
    { id: 3, name: 'Mariana Lima', age: 25, gender: 'Feminino', city: 'Campinas, SP', disability: 'Deficiência Auditiva / Surda', disabilityType: 'auditiva', distance: '8 km de você', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800', bio: 'Designer gráfica, fluente em Libras e entusiasta da cultura surda.', tags: ['Fluente em Libras', 'Chamadas em Vídeo'], intent: 'Amizade e Gamer' },
    { id: 4, name: 'Rafael Oliveira', age: 29, gender: 'Masculino', city: 'São Paulo, SP', disability: 'Neurodivergente / Autismo', disabilityType: 'neuro', distance: '15 km de você', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800', bio: 'Programador e gamer. Busco encontros tranquilos em locais com baixa sobrecarga sensorial.', tags: ['Mensagens Escritas', 'Locais Calmos'], intent: 'Amizade e Grupos' },
    { id: 5, name: 'Beatriz Souza', age: 27, gender: 'Feminino', city: 'Guarulhos, SP', disability: 'Deficiência Física', disabilityType: 'motora', distance: '9 km de você', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800', bio: 'Psicóloga e palestrante. Adoro cinema, maratonar séries e cachorros.', tags: ['Texto / WhatsApp', 'Encontros Presenciais'], intent: 'Amizade e Grupos' },
    { id: 6, name: 'Carlos Eduardo', age: 34, gender: 'Masculino', city: 'São Bernardo do Campo, SP', disability: 'Baixa Visão', disabilityType: 'visual', distance: '14 km de você', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800', bio: 'Historiador e ciclista adaptado. Em busca de boas conversas e novas amizades.', tags: ['Leitor de Tela', 'Áudio'], intent: 'Amizade e Grupos' },
    { id: 7, name: 'Juliana Costa', age: 31, gender: 'Feminino', city: 'Osasco, SP', disability: 'Deficiência Auditiva', disabilityType: 'auditiva', distance: '6 km de você', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800', bio: 'Fotógrafa e artista plástica. Amo viagens, natureza e exposições culturais.', tags: ['Libras', 'Videochamada'], intent: 'Amizade e Grupos' },
    { id: 8, name: 'Gabriel Martins', age: 26, gender: 'Masculino', city: 'São Paulo, SP', disability: 'Neurodivergente', disabilityType: 'neuro', distance: '11 km de você', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800', bio: 'Ilustrador digital e entusiasta de tecnologia. Procuro um espaço com respeito ao meu ritmo.', tags: ['Chat Textual', 'Jogos Online'], intent: 'Grupos em Libras' }
];

let currentProfileIndex = 0;
let activeGenderFilter = 'todos';

// ALTERNÂNCIA DE PÁGINAS DO MENU
function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => page.classList.add('hidden'));
    const selectedPage = document.getElementById(`page-${pageId}`);
    if (selectedPage) selectedPage.classList.remove('hidden');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-purple-700', 'bg-purple-50', 'font-bold');
        btn.classList.add('text-slate-600', 'font-medium');
    });
    const activeBtn = document.getElementById(`nav-${pageId}`);
    if (activeBtn) activeBtn.classList.add('text-purple-700', 'bg-purple-50', 'font-bold');

    document.getElementById('mobile-menu').classList.add('hidden');
    document.getElementById('main-content').focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// SWIPE INTERATIVO
function handleSwipe(action) {
    currentProfileIndex++;
    updateSwipeCard();
}

function filterGenderFeed(gender) {
    activeGenderFilter = gender;
    document.querySelectorAll('.gender-filter-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'text-purple-700', 'shadow-sm');
        btn.classList.add('text-slate-600');
    });
    const activeBtn = document.getElementById(`gender-btn-${gender.toLowerCase()}`);
    if (activeBtn) activeBtn.classList.add('bg-white', 'text-purple-700', 'shadow-sm');

    currentProfileIndex = 0;
    updateSwipeCard();
}

function updateSwipeCard() {
    let filtered = profilesData;
    if (activeGenderFilter !== 'todos') {
        filtered = profilesData.filter(p => p.gender === activeGenderFilter);
    }
    if (filtered.length === 0) return;

    const total = filtered.length;
    
    // Perfil Atual (Centro)
    const current = filtered[currentProfileIndex % total];
    document.getElementById('card-img').src = current.image;
    document.getElementById('card-disability-badge').innerText = current.disability;
    document.getElementById('card-distance').innerText = current.distance;
    document.getElementById('card-name-age').innerText = `${current.name}, ${current.age}`;
    document.getElementById('card-city').innerText = current.city;
    document.getElementById('card-bio').innerText = current.bio;

    const tagsContainer = document.getElementById('card-tags');
    if (tagsContainer) {
        tagsContainer.innerHTML = current.tags.map(tag => `
            <span class="bg-purple-50 text-purple-700 border border-purple-200 text-[11px] font-medium px-2 py-0.5 rounded-lg">${tag}</span>
        `).join('');
    }

    // Perfil Anterior (Esquerda)
    const prevIndex = (currentProfileIndex - 1 + total) % total;
    const prevProfile = filtered[prevIndex];
    document.getElementById('prev-img').src = prevProfile.image;

    // Próximo Perfil (Direita)
    const nextIndex = (currentProfileIndex + 1) % total;
    const nextProfile = filtered[nextIndex];
    document.getElementById('next-img').src = nextProfile.image;
}

function applyExplorarFilters() {
    const genderVal = document.getElementById('filter-gender').value;
    const disVal = document.getElementById('filter-disability').value;
    let list = profilesData;

    if (genderVal !== 'todos') {
        list = list.filter(p => p.gender === genderVal);
    }
    if (disVal !== 'todas') {
        list = list.filter(p => p.disabilityType === disVal);
    }

    const grid = document.getElementById('explorar-grid');
    if (grid) {
        if (list.length === 0) {
            grid.innerHTML = '<p class="col-span-full text-center text-slate-500 py-8">Nenhum perfil encontrado com os filtros selecionados.</p>';
        } else {
            grid.innerHTML = list.map(p => createCardHTML(p)).join('');
        }
    }
}

// CHAT INTERATIVO E SIMULAÇÃO DE ÁUDIO
function selectChat(id) {
    const p = profilesData.find(item => item.id === id);
    if (p) {
        document.getElementById('active-chat-name').innerText = p.name;
        document.getElementById('active-chat-img').src = p.image;
    }
}

function sendMessage(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;

    const container = document.getElementById('messages-container');
    const newMsg = `
        <div class="flex flex-col items-end">
            <div class="bg-purple-700 text-white p-3.5 rounded-2xl rounded-tr-none max-w-xs text-xs space-y-1 shadow-sm">
                <p>${text}</p>
                <span class="text-[9px] text-purple-200 block text-right">Agora</span>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', newMsg);
    input.value = '';
    container.scrollTop = container.scrollHeight;
}

function playAudioSimulation() {
    const progress = document.getElementById('audio-progress');
    progress.style.width = '100%';
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance("Gravando áudio para te desejar uma ótima tarde!");
        utterance.lang = 'pt-BR';
        window.speechSynthesis.speak(utterance);
    }
    setTimeout(() => { progress.style.width = '0%'; }, 3000);
}

function recordAudioSimulation() {
    alert('Recurso de gravação de áudio com transcrição para o Conecta+ ativado!');
}

// ================= ACESSIBILIDADE FUNCIONAL DA BARRA SUPERIOR =================
function changeFontSize(size) {
    document.documentElement.classList.remove('font-sm', 'font-md', 'font-lg', 'font-xl');
    document.documentElement.classList.add(`font-${size}`);
}

function setTheme(theme) {
    document.body.classList.remove('high-contrast-dark', 'high-contrast-yellow');
    
    if (theme === 'dark-high') {
        document.body.classList.add('high-contrast-dark');
    } else if (theme === 'yellow-high') {
        document.body.classList.add('high-contrast-yellow');
    }
}

function toggleTextToSpeech() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const textToRead = "Conecta Mais. Plataforma de encontros, amizades e inclusão social para Pessoas com Deficiência. Navegue pelos perfis, explore locais inclusivos e conecte-se sem barreiras.";
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'pt-BR';
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Seu navegador não suporta síntese de voz.");
    }
}

function readProfileAudio() {
    let filtered = activeGenderFilter === 'todos' ? profilesData : profilesData.filter(p => p.gender === activeGenderFilter);
    const p = filtered[currentProfileIndex % filtered.length];
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(`${p.name}, ${p.age} anos, ${p.city}. Deficiência: ${p.disability}. Sobre: ${p.bio}`);
        utterance.lang = 'pt-BR';
        window.speechSynthesis.speak(utterance);
    }
}

function renderFeeds() {
    const femGrid = document.getElementById('grid-females');
    const mascGrid = document.getElementById('grid-males');
    const expGrid = document.getElementById('explorar-grid');

    const females = profilesData.filter(p => p.gender === 'Feminino');
    const males = profilesData.filter(p => p.gender === 'Masculino');

    if (femGrid) femGrid.innerHTML = females.map(p => createCardHTML(p)).join('');
    if (mascGrid) mascGrid.innerHTML = males.map(p => createCardHTML(p)).join('');
    if (expGrid) expGrid.innerHTML = profilesData.map(p => createCardHTML(p)).join('');
    updateSwipeCard();
}

function createCardHTML(p) {
    return `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 space-y-2 shadow-sm">
            <img src="${p.image}" class="w-full h-40 object-cover rounded-xl" alt="Foto de ${p.name}">
            <span class="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-full">${p.disability}</span>
            <h4 class="font-bold text-slate-900">${p.name}, ${p.age}</h4>
            <p class="text-xs text-slate-500">${p.city}</p>
            <button onclick="showPage('chats')" class="w-full bg-purple-50 text-purple-700 font-bold text-xs py-2 rounded-lg mt-2 hover:bg-purple-100 transition cursor-pointer">Conversar</button>
        </div>
    `;
}

// Função para preencher a grade de amizades
function renderGrid(containerId, list) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = list.map(p => `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 space-y-2 shadow-sm">
            <img src="${p.image}" class="w-full h-40 object-cover rounded-xl" alt="Foto de ${p.name}">
            <div class="flex justify-between items-center">
                <span class="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-full">${p.disability}</span>
                <span class="text-[10px] text-purple-700 font-semibold"><i class="fa-solid fa-heart mr-1 text-pink-500"></i>${p.intent || 'Amizade'}</span>
            </div>
            <h4 class="font-bold text-slate-900">${p.name}, ${p.age}</h4>
            <p class="text-xs text-slate-600 line-clamp-2">${p.bio}</p>
            <button onclick="showPage('chats')" class="w-full bg-purple-50 text-purple-700 font-bold text-xs py-2 rounded-lg mt-2 hover:bg-purple-100 transition cursor-pointer">Enviar Mensagem</button>
        </div>
    `).join('');
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function showShortcutsModal() {
    alert("Atalhos de Acessibilidade do Conecta+:\n\nAlt + 1: Ir para o Conteúdo Principal\nBotões A- / A / A+: Ajustam o tamanho do texto da tela\nBotões Padrão / Escuro / Amarelo: Alternam modos de contraste visual\nBotão Ler Página: Aciona o leitor de tela por voz em sintaxe natural");
}

document.addEventListener('DOMContentLoaded', () => {
    renderFeeds();
    renderGrid('amigos-grid', profilesData);
});

// ==========================================================================
// PERSISTÊNCIA COM LOCALSTORAGE E VALIDAÇÃO DE FORMULÁRIO (REQUISITOS AV A1)
// ==========================================================================

const originalChangeFontSize = changeFontSize;
changeFontSize = function(size) {
    originalChangeFontSize(size);
    localStorage.setItem('conecta_font_size', size);
};

const originalSetTheme = setTheme;
setTheme = function(theme) {
    originalSetTheme(theme);
    localStorage.setItem('conecta_theme', theme);
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Recuperar preferências de acessibilidade salvas no localStorage
    const savedFont = localStorage.getItem('conecta_font_size');
    if (savedFont) {
        originalChangeFontSize(savedFont);
    }

    const savedTheme = localStorage.getItem('conecta_theme');
    if (savedTheme) {
        originalSetTheme(savedTheme);
    }

    // 2. Validação customizada e rascunho em localStorage no formulário de contato
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        const inputNome = document.getElementById('nome');
        const inputEmail = document.getElementById('email');
        const selectAssunto = document.getElementById('assunto');
        const inputMensagem = document.getElementById('mensagem');

        const erroNome = document.getElementById('erro-nome');
        const erroEmail = document.getElementById('erro-email');
        const erroAssunto = document.getElementById('erro-assunto');
        const erroMensagem = document.getElementById('erro-mensagem');

        // Carregar rascunhos salvos
        if (inputNome && localStorage.getItem('rascunho_nome')) inputNome.value = localStorage.getItem('rascunho_nome');
        if (inputEmail && localStorage.getItem('rascunho_email')) inputEmail.value = localStorage.getItem('rascunho_email');
        if (selectAssunto && localStorage.getItem('rascunho_assunto')) selectAssunto.value = localStorage.getItem('rascunho_assunto');
        if (inputMensagem && localStorage.getItem('rascunho_mensagem')) inputMensagem.value = localStorage.getItem('rascunho_mensagem');

        // Salvar rascunho enquanto digita (evento input/change)
        if (inputNome) inputNome.addEventListener('input', () => localStorage.setItem('rascunho_nome', inputNome.value));
        if (inputEmail) inputEmail.addEventListener('input', () => localStorage.setItem('rascunho_email', inputEmail.value));
        if (selectAssunto) selectAssunto.addEventListener('change', () => localStorage.setItem('rascunho_assunto', selectAssunto.value));
        if (inputMensagem) inputMensagem.addEventListener('input', () => localStorage.setItem('rascunho_mensagem', inputMensagem.value));

        // Validação no envio (submit)
        formContato.addEventListener('submit', function(event) {
            event.preventDefault();
            let valido = true;

            // Limpar mensagens e bordas anteriores
            [erroNome, erroEmail, erroAssunto, erroMensagem].forEach(el => { if (el) el.innerText = ''; });
            [inputNome, inputEmail, selectAssunto, inputMensagem].forEach(el => { if (el) el.style.borderColor = ''; });

            if (!inputNome || inputNome.value.trim() === '') {
                if (erroNome) erroNome.innerText = 'O nome completo é obrigatório.';
                if (inputNome) inputNome.style.borderColor = 'red';
                valido = false;
            }

            if (!inputEmail || !inputEmail.value.includes('@') || !inputEmail.value.includes('.')) {
                if (erroEmail) erroEmail.innerText = 'Insira um e-mail válido (ex: nome@dominio.com).';
                if (inputEmail) inputEmail.style.borderColor = 'red';
                valido = false;
            }

            if (!selectAssunto || selectAssunto.value.trim() === '') {
                if (erroAssunto) erroAssunto.innerText = 'Selecione um assunto para o atendimento.';
                if (selectAssunto) selectAssunto.style.borderColor = 'red';
                valido = false;
            }

            if (!inputMensagem || inputMensagem.value.trim().length < 10) {
                if (erroMensagem) erroMensagem.innerText = 'A mensagem deve ter pelo menos 10 caracteres.';
                if (inputMensagem) inputMensagem.style.borderColor = 'red';
                valido = false;
            }

            if (valido) {
                alert('Mensagem enviada com sucesso ao suporte Conecta+!');
                formContato.reset();
                localStorage.removeItem('rascunho_nome');
                localStorage.removeItem('rascunho_email');
                localStorage.removeItem('rascunho_assunto');
                localStorage.removeItem('rascunho_mensagem');
            }
        });
    }
});