/* ================================================================
   QUIET — app logic
   Sezioni:
   1. SCENES (dati suoni/sfondi — sostituisci gli url con i tuoi file)
   2. BACKGROUND CROSSFADE
   3. AUDIO PLAYER (play/pausa, ripeti, durata, fade-out)
   4. DOCK + WIDGET open/close
   5. OROLOGIO
   6. CRONOMETRO
   7. SVEGLIA
   8. NOTE
   8b. ELENCO
   9. CALENDARIO
   ================================================================ */

/* ---------------- 1. SCENES ----------------
   audio: metti qui il path del TUO file quando me lo mandi,
   es: 'audio/pioggia.mp3'. Per ora è vuoto/placeholder.
   IMPORTANTE: da qui in poi ogni file deve essere una versione LEGGERA di
   ~10 minuti (non più il vecchio file da 3 ore): il player lo farà ripartire
   automaticamente più volte con una dissolvenza incrociata (vedi sezione 3),
   fino al tetto massimo di 180 minuti di sessione.
   bg: immagine di sfondo (live-wallpaper style, sostituibile con video) */
const SCENES = [
  
  {
    id: 'amazzonia', name: 'Foresta amazzonica', emoji: '🌴',
    audio: 'audio/audio1/amazzonia.mp3',
    bg: 'https://images.unsplash.com/photo-1560851691-ebb64b584d3d?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'biblioteca', name: 'Biblioteca', emoji: '📚',
    audio: 'audio/audio1/biblioteca.mp3',
    bg: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'bosco', name: 'Bosco', emoji: '🌲',
    audio: 'audio/audio1/bosco.mp3',
    bg: 'https://images.unsplash.com/photo-1426170042593-200f250dfdaf?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'caffetteria', name: 'Caffetteria', emoji: '☕',
    audio: 'audio/audio1/caffetteria.mp3',
    bg: 'https://plus.unsplash.com/premium_photo-1670984940156-c7f833fe8397?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'caminetto', name: 'Caminetto acceso', emoji: '🔥',
    audio: 'audio/audio2/caminetto.mp3',
    bg: 'https://images.unsplash.com/photo-1595770205769-84b55f75a053?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'cascata', name: 'Cascata', emoji: '💦',
    audio: 'audio/audio2/cascata.mp3',
    bg: 'https://plus.unsplash.com/premium_photo-1675448891094-0f3acc556fdb?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'fiume', name: 'Fiume', emoji: '🌊',
    audio: 'audio/audio2/fiume.mp3',
    bg: 'https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'fondale', name: 'Fondale marino', emoji: '🐠',
    audio: 'audio/audio2/fondale.mp3',
    bg: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1920&auto=format&fit=crop'
  },
 
  {
    id: 'mare', name: 'Mare calmo', emoji: '🌊',
    audio: 'audio/audio3/mare.mp3',
    bg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'mattina', name: 'Mattina', emoji: '🌅',
    audio: 'audio/audio3/mattina.mp3',
    bg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'mercato', name: 'Mercato', emoji: '🏺',
    audio: 'audio/audio3/mercato.mp3',
    bg: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'neve', name: 'Bufera di neve', emoji: '❄️',
    audio: 'audio/audio4/neve.mp3',
    bg: 'https://plus.unsplash.com/premium_photo-1675715923850-b5be1d5d71a7?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'pioggia', name: 'Pioggia', emoji: '🌧️',
    audio: 'audio/audio4/pioggia.mp3',
    bg: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'ruscello', name: 'Ruscello', emoji: '💧',
    audio: 'audio/audio4/ruscello.mp3',
    bg: 'https://images.unsplash.com/photo-1483137384241-61d39323ae7d?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'sera', name: 'Notte', emoji: '🌆',
    audio: 'audio/audio4/notte.mp3',
    bg: 'https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'temporale', name: 'Temporale', emoji: '⛈️',
    audio: 'audio/audio5/temporale.mp3',
    bg: 'https://images.unsplash.com/photo-1583459094467-e0db130c0dea?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'ufficio', name: 'Ufficio', emoji: '💼',
    audio: 'audio/audio5/ufficio.mp3',
    bg: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'vento', name: 'Vento', emoji: '🌬️',
    audio: 'audio/audio5/vento.mp3',
    bg: 'https://images.unsplash.com/photo-1505672678657-cc7037095e60?q=80&w=1920&auto=format&fit=crop'
  }
];

/* ---------------- 2. BACKGROUND CROSSFADE ---------------- */
const bgA = document.getElementById('bgA');
const bgB = document.getElementById('bgB');
let bgToggle = true; // true -> mostra A come attivo

function setBackground(url){
  const showing = bgToggle ? bgA : bgB;
  const hidden  = bgToggle ? bgB : bgA;
  hidden.style.backgroundImage = `url('${url}')`;
  // forza reflow poi fade
  requestAnimationFrame(()=>{
    hidden.style.opacity = '1';
    showing.style.opacity = '0';
    bgToggle = !bgToggle;
  });
}

/* ---------------- 3. AUDIO PLAYER (file leggero da 10 min + loop con crossfade) ----------------
   Ogni suono ora punta a un file leggero di ~10 minuti (al posto del vecchio
   file da 3 ore): per offrire comunque una sessione fino a 180 minuti, il
   file viene fatto ripartire più volte (fino a 18 cicli da 10 min).
   Per evitare il taglio netto tra un ciclo e il successivo si usano DUE
   elementi <audio> alternati (audioA/audioB): quando il ciclo in corso sta
   per finire, il secondo buffer riparte in sordina e sale di volume mentre
   il primo scende, creando una dissolvenza incrociata continua. */
const audioA = document.getElementById('audioPlayer');
const audioB = document.createElement('audio');
audioB.preload = 'auto';
audioB.style.display = 'none';
document.body.appendChild(audioB);

const playBtn = document.getElementById('playBtn');
const playIconWrap = document.getElementById('playIconWrap');
const repeatBtn = document.getElementById('repeatBtn');
const sceneIcon = document.getElementById('sceneIcon');
const sceneTitle = document.getElementById('sceneTitle');
const soundPanelList = document.getElementById('soundPanelList');
const durationValue = document.getElementById('durationValue');
const sliderTrack = document.getElementById('sliderTrack');
const sliderFill = document.getElementById('sliderFill');
const sliderHandle = document.getElementById('sliderHandle');

const ICON_PLAY = '<path d="M8 5v14l11-7z"/>';
const ICON_PAUSE = '<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>';

let currentSceneIndex = 0;
let isPlaying = false;
let repeatOn = false; // il loop parte DISATTIVATO: si attiva solo se l'utente clicca il tasto Ripeti
const MAX_DURATION_MIN = 180;             // tetto fisso: 180 min per ogni suono
let sessionSeconds = MAX_DURATION_MIN * 60; // durata massima della sessione (non più selezionabile)
let elapsedSeconds = 0;
let mainVolume = 0.85;
let fadeTimer = null;
let tickTimer = null;
let fadeOutStarted = false;      // evita che il fade-out di fine sessione riparta più volte
let pendingPlayingHandler = null; // riferimento all'handler 'playing' in attesa, per poterlo rimuovere se si mette in pausa prima che parta
const FADE_OUT_SECONDS = 30;  // dissolvenza finale sugli ultimi 30s dell'INTERA sessione (180 min)
const FADE_IN_SECONDS = 8;    // dissolvenza in entrata ad ogni avvio della riproduzione

// --- Buffer doppio per il loop: "active" è quello udibile ora,
// "inactive" è quello pronto/pre-caricato per il prossimo ciclo ---
let activeAudio = audioA;
let inactiveAudio = audioB;

const LOOP_DURATION_FALLBACK = 600;  // 10 min: usato solo finché la durata reale del file non è nota
const LOOP_FADE_OUT_SECONDS = 20;    // ultimi 20s del ciclo in chiusura: sfumano in uscita
const LOOP_FADE_IN_SECONDS = 10;     // primi 10s del nuovo ciclo: sfumano in entrata, sovrapposti al fade-out
let loopCrossfadeStarted = false;    // evita di innescare più volte la stessa transizione
let loopCrossfadeTimer = null;

function buildSoundPanel(){
  soundPanelList.innerHTML = '';
  SCENES.forEach((s, i)=>{
    const item = document.createElement('button');
    item.className = 'sound-panel-item' + (i === currentSceneIndex ? ' active' : '');
    item.textContent = s.name;
    item.addEventListener('click', ()=>{
      loadScene(i, true);
      closeSoundPanel();
    });
    soundPanelList.appendChild(item);
  });
}

function loadScene(index, autoplayIfWasPlaying){
  const wasPlaying = isPlaying;
  clearFade();
  clearLoopCrossfade();
  currentSceneIndex = ((index % SCENES.length) + SCENES.length) % SCENES.length;
  const scene = SCENES[currentSceneIndex];

  sceneTitle.textContent = scene.name;
  setBackground(scene.bg);

  // Entrambi i buffer puntano allo stesso file breve (~10 min): il secondo
  // resta pronto, in pausa e a volume 0, finché non serve per la
  // dissolvenza incrociata verso il primo loop successivo.
  [audioA, audioB].forEach(a=>{
    a.pause();
    a.loop = false; // il loop nativo è disattivato: la ripetizione è gestita manualmente col crossfade
    a.src = scene.audio;
    a.currentTime = 0;
    a.volume = 0;
  });
  activeAudio = audioA;
  inactiveAudio = audioB;
  activeAudio.volume = mainVolume;

  elapsedSeconds = 0;
  fadeOutStarted = false;
  loopCrossfadeStarted = false;
  updateProgressBar();

  [...soundPanelList.children].forEach((c,i)=> c.classList.toggle('active', i===currentSceneIndex));

  if (wasPlaying || autoplayIfWasPlaying === 'force'){
    play();
  } else {
    isPlaying = false;
    playIconWrap.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor">${ICON_PLAY}</svg>`;
    stopTick();
  }
}

function play(){
  activeAudio.volume = 0; // parte silenzioso: il fade-in porta il volume al livello target
  clearFade();

  // Il fade-in si aggancia all'evento 'playing', che scatta quando la
  // riproduzione è DAVVERO iniziata (non al semplice click su Play). Così
  // la dissolvenza è sempre sincronizzata con il suono reale, anche in
  // presenza di un piccolo ritardo di buffering.
  if (pendingPlayingHandler){
    activeAudio.removeEventListener('playing', pendingPlayingHandler);
  }
  const startedOn = activeAudio;
  pendingPlayingHandler = () => {
    pendingPlayingHandler = null;
    startFadeIn(startedOn);
  };
  activeAudio.addEventListener('playing', pendingPlayingHandler, { once:true });

  activeAudio.play().catch(()=>{ /* richiede interazione utente su alcuni browser: già garantita dal click */ });
  isPlaying = true;
  playIconWrap.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor">${ICON_PAUSE}</svg>`;
  startTick();
}

function pause(){
  clearFade(); // interrompe un eventuale fade in corso, il volume resta dov'è
  clearLoopCrossfade();
  if (pendingPlayingHandler){
    activeAudio.removeEventListener('playing', pendingPlayingHandler);
    pendingPlayingHandler = null;
  }
  audioA.pause();
  audioB.pause();
  isPlaying = false;
  playIconWrap.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor">${ICON_PLAY}</svg>`;
  stopTick();
}

function togglePlay(){
  isPlaying ? pause() : play();
}

/* --- Dissolvenza incrociata tra un ciclo di ~10 min e il successivo ---
   Quando al ciclo attivo mancano LOOP_FADE_OUT_SECONDS (20s), il buffer
   inattivo riparte da 0 e sale di volume in LOOP_FADE_IN_SECONDS (10s),
   mentre il buffer attivo scende a 0 in 20s: la sovrapposizione dinamica
   dei due intervalli garantisce continuità totale, senza alcun taglio netto. */
function startLoopCrossfade(){
  const outgoing = activeAudio;
  const incoming = inactiveAudio;

  incoming.currentTime = 0;
  incoming.volume = 0;
  incoming.play().catch(()=>{});

  const outgoingStartVol = outgoing.volume;
  const startTime = performance.now();
  clearInterval(loopCrossfadeTimer);
  loopCrossfadeTimer = setInterval(()=>{
    const elapsedMs = performance.now() - startTime;
    const outT = Math.min(1, elapsedMs / (LOOP_FADE_OUT_SECONDS * 1000));
    const inT = Math.min(1, elapsedMs / (LOOP_FADE_IN_SECONDS * 1000));
    outgoing.volume = outgoingStartVol * (1 - outT);
    incoming.volume = mainVolume * inT;
    if (outT >= 1){
      outgoing.pause();
      outgoing.currentTime = 0;
      clearInterval(loopCrossfadeTimer);
      loopCrossfadeTimer = null;
    }
  }, 100);

  // Da qui in poi il buffer "in entrata" è quello in primo piano: si
  // scambiano i ruoli così il prossimo ciclo verrà preparato sull'altro.
  activeAudio = incoming;
  inactiveAudio = outgoing;
  loopCrossfadeStarted = false; // pronto per innescare la prossima transizione sul nuovo activeAudio
}
function clearLoopCrossfade(){
  if (loopCrossfadeTimer){ clearInterval(loopCrossfadeTimer); loopCrossfadeTimer = null; }
  loopCrossfadeStarted = false;
}

function startTick(){
  stopTick();
  tickTimer = setInterval(()=>{
    elapsedSeconds += 1;
    updateProgressBar();

    const remaining = sessionSeconds - elapsedSeconds;

    // Avvio fade-out quando si entra negli ultimi FADE_OUT_SECONDS
    // dell'INTERA sessione (180 min). Il flag fadeOutStarted evita
    // ripartenze multiple e viene resettato se l'utente trascina la
    // manovella indietro, uscendo dalla finestra finale.
    if (remaining <= FADE_OUT_SECONDS && remaining > 0){
      if (!fadeOutStarted){
        fadeOutStarted = true;
        startFadeOut();
      }
    } else if (remaining > FADE_OUT_SECONDS && fadeOutStarted){
      fadeOutStarted = false;
      clearFade();
      activeAudio.volume = mainVolume; // si è usciti dalla zona finale: volume ripristinato
    }

    // Dissolvenza incrociata tra cicli da 10 min: si innesca solo se non
    // siamo già entrati nella finestra di fade-out finale della sessione
    // (quella ha priorità assoluta e porta il suono a 0 esattamente allo
    // scadere dei 180 min, senza avviare un nuovo ciclo inutile).
    if (!loopCrossfadeStarted && remaining > LOOP_FADE_OUT_SECONDS){
      const dur = (activeAudio.duration && isFinite(activeAudio.duration))
        ? activeAudio.duration
        : LOOP_DURATION_FALLBACK;
      const segRemaining = dur - activeAudio.currentTime;
      if (segRemaining <= LOOP_FADE_OUT_SECONDS){
        loopCrossfadeStarted = true;
        startLoopCrossfade();
      }
    }

    if (remaining <= 0){
      pause();
      audioA.currentTime = 0;
      audioB.currentTime = 0;
      elapsedSeconds = 0;
      fadeOutStarted = false;
      updateProgressBar();
      if (repeatOn){
        play(); // riparte da capo: nuovo fade-in di 8s
      }
    }
  }, 1000);
}
function stopTick(){ clearInterval(tickTimer); }

/* Dissolvenza generica basata sul tempo reale trascorso (non su un conteggio
   di step): elimina qualunque deriva del timer e garantisce che la rampa
   duri esattamente durationSec secondi indipendentemente dal carico del
   browser. Usata per il fade-in/out di sessione (agisce sul buffer passato
   in target, di norma quello attivo al momento della chiamata). */
function fadeVolume(fromVol, toVol, durationSec, target){
  clearFade();
  const el = target || activeAudio;
  const startTime = performance.now();
  const durationMs = durationSec * 1000;
  fadeTimer = setInterval(()=>{
    const t = Math.min(1, (performance.now() - startTime) / durationMs);
    el.volume = fromVol + (toVol - fromVol) * t;
    if (t >= 1) clearFade();
  }, 100);
}
function startFadeOut(){
  fadeVolume(activeAudio.volume, 0, FADE_OUT_SECONDS);
}
/* Dissolvenza in entrata: dal silenzio al volume principale in FADE_IN_SECONDS.
   Viene avviata da play() solo quando l'audio ha davvero iniziato a suonare. */
function startFadeIn(target){
  fadeVolume(0, mainVolume, FADE_IN_SECONDS, target);
}
function clearFade(){
  if (fadeTimer){ clearInterval(fadeTimer); fadeTimer = null; }
}

function fmt(sec){
  sec = Math.max(0, Math.round(sec));
  const h = Math.floor(sec/3600);
  const m = Math.floor((sec%3600)/60);
  const s = sec%60;
  if (h>0) return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

/* --- Barra di progresso della sessione (sola lettura) ---
   Non più selezionabile dall'utente: riflette semplicemente elapsedSeconds
   rispetto al tetto fisso di 180 min, avanzando da sola con la riproduzione.
   Mostra anche il tempo trascorso (sostituisce il vecchio contatore sotto
   il nome del suono, ora rimosso). */
function updateProgressBar(){
  const pct = Math.min(100, (elapsedSeconds / sessionSeconds) * 100);
  sliderFill.style.width = pct + '%';
  sliderHandle.style.left = pct + '%';
  sliderHandle.setAttribute('aria-valuenow', Math.round(elapsedSeconds));
  durationValue.textContent = fmt(elapsedSeconds);
}

/* --- Manovella tonda: trascinamento per andare avanti/indietro nella sessione ---
   Sposta solo elapsedSeconds (il timer virtuale di sessione/fade-out), non
   il punto di lettura del file audio: il suono continua a scorrere in loop
   nativo (audio.loop), la barra rappresenta il tempo di sessione trascorso. */
let seeking = false;

function seekFromClientX(clientX){
  const rect = sliderTrack.getBoundingClientRect();
  const pct = Math.min(100, Math.max(0, (clientX - rect.left) / rect.width * 100));
  elapsedSeconds = Math.round((pct / 100) * sessionSeconds);
  updateProgressBar();
}

sliderHandle.addEventListener('pointerdown', (e)=>{
  seeking = true;
  sliderTrack.classList.add('seeking');
  sliderHandle.setPointerCapture(e.pointerId);
  e.preventDefault();
});
sliderHandle.addEventListener('pointermove', (e)=>{
  if (!seeking) return;
  seekFromClientX(e.clientX);
});
function endSeek(){
  if (!seeking) return;
  seeking = false;
  sliderTrack.classList.remove('seeking');
}
sliderHandle.addEventListener('pointerup', endSeek);
sliderHandle.addEventListener('pointercancel', endSeek);

// Click diretto sulla barra (fuori dalla maniglia): salta subito a quel punto
sliderTrack.addEventListener('click', (e)=>{
  if (e.target === sliderHandle) return;
  seekFromClientX(e.clientX);
});

// Frecce da tastiera quando la maniglia ha il focus: ±30 secondi
sliderHandle.addEventListener('keydown', (e)=>{
  const step = 30;
  if (e.key === 'ArrowRight' || e.key === 'ArrowUp'){
    elapsedSeconds = Math.min(sessionSeconds, elapsedSeconds + step);
    updateProgressBar();
    e.preventDefault();
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowDown'){
    elapsedSeconds = Math.max(0, elapsedSeconds - step);
    updateProgressBar();
    e.preventDefault();
  }
});

playBtn.addEventListener('click', togglePlay);
repeatBtn.addEventListener('click', ()=>{
  repeatOn = !repeatOn;
  repeatBtn.classList.toggle('active', repeatOn);
});

/* --- Rotellina impostazioni: apre/chiude il pannello verticale dei suoni --- */
const settingsGearBtn = document.getElementById('settingsGearBtn');
const soundPanel = document.getElementById('soundPanel');
function openSoundPanel(){
  buildSoundPanel();
  soundPanel.classList.add('open');
  settingsGearBtn.classList.add('open');
}
function closeSoundPanel(){
  soundPanel.classList.remove('open');
  settingsGearBtn.classList.remove('open');
}
settingsGearBtn.addEventListener('click', ()=>{
  soundPanel.classList.contains('open') ? closeSoundPanel() : openSoundPanel();
});
document.addEventListener('click', (e)=>{
  if (soundPanel.classList.contains('open') &&
      !soundPanel.contains(e.target) &&
      !settingsGearBtn.contains(e.target)){
    closeSoundPanel();
  }
});

/* init player */
buildSoundPanel();
updateProgressBar();
loadScene(0, false);
// Nessuna attivazione automatica del Ripeti: badge "1" visibile solo dopo il click dell'utente
// primo sfondo mostrato subito senza crossfade
bgA.style.backgroundImage = `url('${SCENES[0].bg}')`;

/* --- Schermata iniziale: scelta del suono (non avviato automaticamente,
       sarà l'utente a premere play nel player) --- */
const introScreen = document.getElementById('introScreen');
const introSounds = document.getElementById('introSounds');
SCENES.forEach((s, i)=>{
  const btn = document.createElement('button');
  btn.className = 'intro-sound-btn';
  btn.textContent = s.name;
  btn.addEventListener('click', ()=>{
    loadScene(i, false);
    introScreen.classList.add('intro-hidden');
  });
  introSounds.appendChild(btn);
});

/* ---------------- 4. DOCK + WIDGETS ---------------- */
const widgets = {
  calendar: document.getElementById('widget-calendar'),
  clock: document.getElementById('widget-clock'),
  tools: document.getElementById('widget-tools'),
  noteslist: document.getElementById('widget-noteslist'),
};

/* Su smartphone i widget (tranne l'orologio, sempre fisso in alto su ogni
   schermata) sono distribuiti su 3 "schermate" orizzontali navigabili con
   uno swipe: 0 = sinistra (Calendario), 1 = centro (Strumenti tempo:
   Sveglia/Cronometro/Timer, schermata di partenza), 2 = destra (Note/
   Elenco). Ognuna contiene un solo widget (gli strumenti e note/elenco
   sono a loro volta unificati con navigazione interna a frecce), quindi
   non serve più alcun sistema di slot alto/basso. Se il widget di una
   schermata laterale viene chiuso, quella schermata viene distrutta e si
   torna automaticamente al centro. */
const MOBILE_PAGE = { calendar:0, tools:1, noteslist:2 };
const PAGE_GROUPS = { 0:['calendar'], 1:['tools'], 2:['noteslist'] };
let currentMobilePage = 1;

function isMobileView(){
  return window.matchMedia('(max-width: 760px)').matches;
}
function pageHasContent(page){
  return PAGE_GROUPS[page].some(k => widgets[k].classList.contains('open'));
}
function goToMobilePage(page){
  if (page < 0 || page > 2) return;
  if (page !== 1 && !pageHasContent(page)) return;
  currentMobilePage = page;
  updateMobilePagePositions();
  updatePageDots();
}
/* Applica lo scorrimento orizzontale ai widget paginati tramite la
   custom property --page-offset (letta dentro il transform CSS) */
function updateMobilePagePositions(){
  Object.keys(MOBILE_PAGE).forEach(key=>{
    const page = MOBILE_PAGE[key];
    const offset = (page - currentMobilePage) * 100;
    widgets[key].style.setProperty('--page-offset', offset);
  });
}
function updatePageDots(){
  if (!pageDotsEl) return;
  const showDots = pageHasContent(0) || pageHasContent(2);
  pageDotsEl.classList.toggle('show', showDots && isMobileView());
  [...pageDotsEl.children].forEach((dot, i)=>{
    dot.classList.toggle('active', i === currentMobilePage);
    dot.classList.toggle('disabled', i !== 1 && !pageHasContent(i));
  });
}

document.querySelectorAll('.dock-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const key = btn.dataset.widget;
    const isOpen = widgets[key].classList.contains('open');
    if (isOpen){
      closeWidget(key);
    } else {
      openWidget(key);
    }
  });
});
document.querySelectorAll('.widget-close').forEach(btn=>{
  btn.addEventListener('click', ()=> closeWidget(btn.dataset.close));
});

/* Bottone cestino: chiude tutti i widget aperti (dock e player/suoni non
   fanno parte dell'oggetto "widgets", quindi restano sempre intatti) */
const clearWidgetsBtn = document.getElementById('clearWidgetsBtn');
if (clearWidgetsBtn){
  clearWidgetsBtn.addEventListener('click', ()=>{
    Object.keys(widgets).forEach(key=>{
      if (widgets[key].classList.contains('open')) closeWidget(key);
    });
  });
}

function openWidget(key){
  widgets[key].classList.add('open');
  widgets[key].classList.add('mobile-slot-top');
  document.querySelector(`.dock-btn[data-widget="${key}"]`).classList.add('active');
  const page = MOBILE_PAGE[key];
  if (page !== undefined){
    goToMobilePage(page);
  }
}
function closeWidget(key){
  widgets[key].classList.remove('open');
  document.querySelector(`.dock-btn[data-widget="${key}"]`).classList.remove('active');
  const page = MOBILE_PAGE[key];
  if (page !== undefined){
    // Regola di distruzione: se la schermata laterale resta vuota, torna al centro
    if (page !== 1 && currentMobilePage === page && !pageHasContent(page)){
      goToMobilePage(1);
    } else {
      updatePageDots();
    }
  }
}

/* --- Sub-navigazione interna a frecce cicliche (Strumenti, Note/Elenco) --- */
function createSubnav({ widgetKey, prevId, nextId, dotsId, labelId, views, labels, onChange }){
  const widgetEl = widgets[widgetKey];
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  const dotsEl = document.getElementById(dotsId);
  const labelEl = document.getElementById(labelId);
  let index = 0;

  function render(){
    views.forEach((v, i)=>{
      const el = widgetEl.querySelector(`.subnav-view[data-view="${v}"]`);
      if (el) el.classList.toggle('active', i === index);
    });
    if (dotsEl){
      [...dotsEl.children].forEach((d, i)=> d.classList.toggle('active', i === index));
    }
    if (labelEl) labelEl.textContent = labels[index];
    if (onChange) onChange(views[index]);
  }
  function go(dir){
    index = (index + dir + views.length) % views.length; // ciclico
    render();
  }
  prevBtn.addEventListener('click', ()=> go(-1));
  nextBtn.addEventListener('click', ()=> go(1));
  render();

  return { showView: (view)=>{ index = views.indexOf(view); if (index<0) index=0; render(); } };
}

const toolsSubnav = createSubnav({
  widgetKey:'tools', prevId:'toolsPrev', nextId:'toolsNext', dotsId:'toolsDots', labelId:'toolsLabel',
  views:['alarm','stopwatch','timer'], labels:['Sveglia','Cronometro','Timer']
});
const noteslistSubnav = createSubnav({
  widgetKey:'noteslist', prevId:'noteslistPrev', nextId:'noteslistNext', dotsId:'noteslistDots', labelId:'noteslistLabel',
  views:['notes','list'], labels:['Note','Elenco']
});

/* Indicatori di pagina (puntini) e swipe orizzontale per navigare */
const pageDotsEl = document.getElementById('pageDots');
let touchPageStartX = null, touchPageStartY = null, touchPageSwiping = false;
document.addEventListener('touchstart', (e)=>{
  if (!isMobileView()) return;
  touchPageStartX = e.touches[0].clientX;
  touchPageStartY = e.touches[0].clientY;
  touchPageSwiping = false;
}, { passive:true });
document.addEventListener('touchmove', (e)=>{
  if (!isMobileView() || touchPageStartX === null) return;
  const dx = e.touches[0].clientX - touchPageStartX;
  const dy = e.touches[0].clientY - touchPageStartY;
  if (Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy) * 1.4) touchPageSwiping = true;
}, { passive:true });
document.addEventListener('touchend', (e)=>{
  if (!isMobileView() || touchPageStartX === null) return;
  if (touchPageSwiping){
    const dx = e.changedTouches[0].clientX - touchPageStartX;
    if (dx < -60) goToMobilePage(currentMobilePage + 1);
    else if (dx > 60) goToMobilePage(currentMobilePage - 1);
  }
  touchPageStartX = null; touchPageStartY = null; touchPageSwiping = false;
});
if (pageDotsEl){
  [...pageDotsEl.children].forEach((dot, i)=>{
    dot.addEventListener('click', ()=> goToMobilePage(i));
  });
}
updateMobilePagePositions();

/* --- Drag & drop: ogni widget parte dalla sua posizione di default
       ma può essere trascinato ovunque nella pagina. La maniglia è
       l'intestazione (.widget-head); per l'orologio, che non ne ha,
       è l'intero widget (esclusi i click sul pulsante di chiusura). --- */
let dragZTop = 16;
function makeDraggable(widgetEl, handleEl){
  let dragging = false;
  let startX = 0, startY = 0, startLeft = 0, startTop = 0;

  function onPointerDown(e){
    if (e.target.closest('button, input, textarea, a')) return;
    if (e.button !== undefined && e.button !== 0) return;
    dragging = true;
    const rect = widgetEl.getBoundingClientRect();
    startX = e.clientX; startY = e.clientY;
    startLeft = rect.left; startTop = rect.top;
    widgetEl.classList.add('widget-dragging');
    widgetEl.style.zIndex = String(++dragZTop);
    try { handleEl.setPointerCapture(e.pointerId); } catch(err){}
    e.preventDefault();
  }
  function onPointerMove(e){
    if (!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const w = widgetEl.offsetWidth, h = widgetEl.offsetHeight;
    let newLeft = startLeft + dx;
    let newTop = startTop + dy;
    newLeft = Math.max(-w*0.5, Math.min(window.innerWidth - w*0.5, newLeft));
    newTop = Math.max(4, Math.min(window.innerHeight - 40, newTop));
    widgetEl.style.left = newLeft + 'px';
    widgetEl.style.top = newTop + 'px';
    widgetEl.style.right = 'auto';
    widgetEl.style.bottom = 'auto';
    widgetEl.style.transform = 'none';
    widgetEl.style.transformOrigin = 'center';
    if (!widgetEl.classList.contains('widget-dragged')){
      widgetEl.classList.add('widget-dragged');
      widgetEl.classList.remove('pos-top-right-primary', 'pos-top-right-secondary');
    }
  }
  function onPointerUp(){
    dragging = false;
    widgetEl.classList.remove('widget-dragging');
  }
  handleEl.addEventListener('pointerdown', onPointerDown);
  handleEl.addEventListener('pointermove', onPointerMove);
  handleEl.addEventListener('pointerup', onPointerUp);
  handleEl.addEventListener('pointercancel', onPointerUp);
}

Object.entries(widgets).forEach(([key, el])=>{
  const head = el.querySelector('.widget-head');
  makeDraggable(el, head || el); // l'orologio non ha .widget-head: usa l'intero widget
});

/* ---------------- 5. OROLOGIO ---------------- */
const clockTime = document.getElementById('clockTime');
const clockDate = document.getElementById('clockDate');
const dayNames = ['domenica','lunedì','martedì','mercoledì','giovedì','venerdì','sabato'];
const monthNames = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];

function tickClock(){
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  clockTime.textContent = `${h}:${m}`;
  clockDate.textContent = `${dayNames[now.getDay()]} ${now.getDate()} ${monthNames[now.getMonth()]}`;
}
tickClock();
setInterval(tickClock, 1000);

/* ---------------- 6. CRONOMETRO (fino a 3 istanze contemporanee) ---------------- */
const swList = document.getElementById('swList');
const MAX_STOPWATCHES = 1;

// Ogni cronometro è un oggetto indipendente: {id, running, start, elapsed, interval}
let stopwatches = [ createStopwatch() ];

function createStopwatch(){
  return { id: 'sw_' + Date.now() + Math.random().toString(36).slice(2,6), running:false, start:0, elapsed:0, interval:null };
}

function swFormat(ms){
  const totalCs = Math.floor(ms/10); // centesimi
  const cs = totalCs % 100;
  const totalSec = Math.floor(totalCs/100);
  const s = totalSec % 60;
  const m = Math.floor(totalSec/60);
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(cs).padStart(2,'0')}`;
}

function renderStopwatches(){
  swList.innerHTML = '';
  stopwatches.forEach((sw, idx)=>{
    const el = document.createElement('div');
    el.className = 'sw-instance';

    const row = document.createElement('div');
    row.className = 'sw-row';

    const time = document.createElement('div');
    time.className = 'sw-time';
    time.textContent = swFormat(sw.elapsed + (sw.running ? performance.now() - sw.start : 0));
    row.appendChild(time);

    // "x" per rimuovere questa istanza (visibile solo se ce n'è più di una)
    if (stopwatches.length > 1){
      const del = document.createElement('button');
      del.className = 'sw-icon-btn';
      del.textContent = '✕';
      del.setAttribute('aria-label', 'Rimuovi cronometro');
      del.addEventListener('click', ()=> removeStopwatch(sw.id));
      row.appendChild(del);
    }

    // "+" per aggiungerne un'altra, accanto al contatore dell'ultima istanza
    if (idx === stopwatches.length - 1 && stopwatches.length < MAX_STOPWATCHES){
      const add = document.createElement('button');
      add.className = 'sw-icon-btn sw-add-icon';
      add.textContent = '+';
      add.setAttribute('aria-label', 'Aggiungi cronometro');
      add.addEventListener('click', addStopwatch);
      row.appendChild(add);
    }

    const btnRow = document.createElement('div');
    btnRow.className = 'sw-buttons';

    const startStop = document.createElement('button');
    startStop.className = 'sw-btn primary';
    startStop.textContent = sw.running ? 'Pausa' : (sw.elapsed > 0 ? 'Riprendi' : 'Avvia');
    startStop.addEventListener('click', ()=> toggleStopwatch(sw.id));

    const reset = document.createElement('button');
    reset.className = 'sw-btn';
    reset.textContent = 'Azzera';
    reset.addEventListener('click', ()=> resetStopwatch(sw.id));

    btnRow.appendChild(startStop);
    btnRow.appendChild(reset);
    el.appendChild(row);
    el.appendChild(btnRow);
    swList.appendChild(el);
  });
}

function toggleStopwatch(id){
  const sw = stopwatches.find(s=>s.id===id);
  if (!sw) return;
  if (!sw.running){
    sw.running = true;
    sw.start = performance.now();
    sw.interval = setInterval(()=>{
      const timeEl = [...swList.children][stopwatches.indexOf(sw)]?.querySelector('.sw-time');
      if (timeEl) timeEl.textContent = swFormat(sw.elapsed + (performance.now() - sw.start));
    }, 30);
  } else {
    sw.running = false;
    sw.elapsed += performance.now() - sw.start;
    clearInterval(sw.interval);
  }
  renderStopwatches();
}
function resetStopwatch(id){
  const sw = stopwatches.find(s=>s.id===id);
  if (!sw) return;
  sw.running = false;
  clearInterval(sw.interval);
  sw.elapsed = 0;
  renderStopwatches();
}
function addStopwatch(){
  if (stopwatches.length >= MAX_STOPWATCHES) return;
  stopwatches.push(createStopwatch());
  renderStopwatches();
}
function removeStopwatch(id){
  const sw = stopwatches.find(s=>s.id===id);
  if (sw) clearInterval(sw.interval);
  stopwatches = stopwatches.filter(s=>s.id!==id);
  if (stopwatches.length === 0) stopwatches.push(createStopwatch()); // ne resta sempre almeno 1
  renderStopwatches();
}
renderStopwatches();

/* ---------------- 7. SVEGLIA (stile cronometro: Avvia / Cancella) ---------------- */
const alarmTimeInput = document.getElementById('alarmTimeInput');
const alarmStartBtn = document.getElementById('alarmStartBtn');
const alarmClearBtn = document.getElementById('alarmClearBtn');
const alarmStatus = document.getElementById('alarmStatus');
let activeAlarm = null; // {time:'HH:MM'} oppure null
let firedToday = new Set();

function renderAlarmStatus(){
  if (activeAlarm){
    alarmStatus.textContent = `Sveglia impostata per le ${activeAlarm.time}`;
  } else {
    alarmStatus.textContent = 'Nessuna sveglia impostata';
  }
}
alarmStartBtn.addEventListener('click', ()=>{
  if (!alarmTimeInput.value) return;
  activeAlarm = { time: alarmTimeInput.value };
  renderAlarmStatus();
});
alarmClearBtn.addEventListener('click', ()=>{
  activeAlarm = null;
  renderAlarmStatus();
});
renderAlarmStatus();

setInterval(()=>{
  if (!activeAlarm) return;
  const now = new Date();
  const hm = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  if (now.getSeconds() !== 0) return;
  const fireKey = activeAlarm.time + '_' + hm;
  if (activeAlarm.time === hm && !firedToday.has(fireKey)){
    firedToday.add(fireKey);
    triggerAlarm(activeAlarm);
  }
}, 1000);

function triggerAlarm(a){
  openWidget('tools');
  toolsSubnav.showView('alarm');
  const original = document.title;
  let blinkCount = 0;
  const blink = setInterval(()=>{
    document.title = document.title === original ? `⏰ ${a.time}` : original;
    blinkCount++;
    if (blinkCount > 10){ clearInterval(blink); document.title = original; }
  }, 700);
}


/* ---------------- 7b. TIMER (countdown) ---------------- */
const timerDisplay = document.getElementById('timerDisplay');
const timerStatus = document.getElementById('timerStatus');
const timerStartBtn = document.getElementById('timerStartBtn');
const timerResetBtn = document.getElementById('timerResetBtn');
const timerMinusBtn = document.getElementById('timerMinus');
const timerPlusBtn = document.getElementById('timerPlus');

let timerDuration = 5 * 60; // durata impostata (secondi), default 5 min
let timerRemaining = timerDuration;
let timerRunning = false;
let timerInterval = null;

function timerFormat(sec){
  sec = Math.max(0, Math.round(sec));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
function renderTimer(){
  timerDisplay.textContent = timerFormat(timerRemaining);
  timerStartBtn.textContent = timerRunning ? 'Pausa' : (timerRemaining < timerDuration ? 'Riprendi' : 'Avvia');
}
function adjustTimer(deltaMin){
  if (timerRunning) return; // non modificabile mentre è in corso
  timerDuration = Math.max(60, Math.min(180*60, timerDuration + deltaMin*60));
  timerRemaining = timerDuration;
  timerStatus.textContent = 'Pronto';
  renderTimer();
}
timerMinusBtn.addEventListener('click', ()=> adjustTimer(-1));
timerPlusBtn.addEventListener('click', ()=> adjustTimer(1));

timerStartBtn.addEventListener('click', ()=>{
  if (timerRunning){
    timerRunning = false;
    clearInterval(timerInterval);
    timerStatus.textContent = 'In pausa';
    renderTimer();
    return;
  }
  if (timerRemaining <= 0) timerRemaining = timerDuration;
  timerRunning = true;
  timerStatus.textContent = 'In corso…';
  renderTimer();
  timerInterval = setInterval(()=>{
    timerRemaining -= 1;
    if (timerRemaining <= 0){
      timerRemaining = 0;
      timerRunning = false;
      clearInterval(timerInterval);
      timerStatus.textContent = 'Tempo scaduto!';
      renderTimer();
      openWidget('tools');
      toolsSubnav.showView('timer');
      const original = document.title;
      let blinkCount = 0;
      const blink = setInterval(()=>{
        document.title = document.title === original ? '⏳ Tempo scaduto' : original;
        blinkCount++;
        if (blinkCount > 10){ clearInterval(blink); document.title = original; }
      }, 700);
      return;
    }
    renderTimer();
  }, 1000);
});
timerResetBtn.addEventListener('click', ()=>{
  timerRunning = false;
  clearInterval(timerInterval);
  timerRemaining = timerDuration;
  timerStatus.textContent = 'Pronto';
  renderTimer();
});
renderTimer();

/* ---------------- 8. NOTE ---------------- */
const noteInput = document.getElementById('noteInput');
const noteSaveBtn = document.getElementById('noteSaveBtn');
const notesList = document.getElementById('notesList');
let notes = []; // {id, text, time}

function renderNotes(){
  notesList.innerHTML = '';
  if (notes.length === 0){
    notesList.innerHTML = '<div class="notes-empty">Ancora nessuna nota</div>';
    return;
  }
  notes.slice().reverse().forEach(n=>{
    const el = document.createElement('div');
    el.className = 'note-item';

    const del = document.createElement('button');
    del.className = 'note-del';
    del.dataset.id = n.id;
    del.textContent = '✕';

    const text = document.createElement('div');
    text.textContent = n.text;

    const time = document.createElement('span');
    time.className = 'note-time';
    time.textContent = n.time;

    el.appendChild(del);
    el.appendChild(text);
    el.appendChild(time);
    notesList.appendChild(el);
  });
  notesList.querySelectorAll('.note-del').forEach(b=>{
    b.addEventListener('click', ()=>{
      notes = notes.filter(n=>n.id !== b.dataset.id);
      renderNotes();
    });
  });
}
function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
function saveNote(){
  const text = noteInput.value.trim();
  if (!text) return;
  const now = new Date();
  const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')} · ${now.getDate()}/${now.getMonth()+1}`;
  notes.push({ id:'note_'+Date.now(), text, time });
  noteInput.value = '';
  renderNotes();
}
noteSaveBtn.addEventListener('click', saveNote);
noteInput.addEventListener('keydown', (e)=>{
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)){ saveNote(); }
});
renderNotes();

/* ---------------- 8b. ELENCO (liste semplici) ---------------- */
const listInput = document.getElementById('listInput');
const listSaveBtn = document.getElementById('listSaveBtn');
const listItemsEl = document.getElementById('listItems');
let listItems = []; // {id, text, done}

function renderListItems(){
  listItemsEl.innerHTML = '';
  if (listItems.length === 0){
    listItemsEl.innerHTML = '<div class="list-empty">Elenco vuoto</div>';
    return;
  }
  listItems.forEach(item=>{
    const row = document.createElement('div');
    row.className = 'list-item' + (item.done ? ' done' : '');

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = item.done;
    check.addEventListener('change', ()=>{
      item.done = check.checked;
      renderListItems();
    });

    const text = document.createElement('span');
    text.textContent = item.text;

    const del = document.createElement('button');
    del.className = 'list-del';
    del.textContent = '✕';
    del.addEventListener('click', ()=>{
      listItems = listItems.filter(i=>i.id !== item.id);
      renderListItems();
    });

    row.appendChild(check);
    row.appendChild(text);
    row.appendChild(del);
    listItemsEl.appendChild(row);
  });
}
function saveListItem(){
  const text = listInput.value.trim();
  if (!text) return;
  listItems.push({ id:'li_'+Date.now(), text, done:false });
  listInput.value = '';
  renderListItems();
}
listSaveBtn.addEventListener('click', saveListItem);
listInput.addEventListener('keydown', (e)=>{
  if (e.key === 'Enter'){ saveListItem(); }
});
renderListItems();

/* ---------------- 9. CALENDARIO ---------------- */
const calMonth = document.getElementById('calMonth');
const calGrid = document.getElementById('calGrid');
const calPrev = document.getElementById('calPrev');
const calNext = document.getElementById('calNext');
let calViewDate = new Date();
let calendarEvents = {}; // { 'YYYY-MM-DD': 'testo evento' }

function dateKey(year, month, day){
  return `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
}

function handleDayClick(year, month, day){
  const key = dateKey(year, month, day);
  const existing = calendarEvents[key];
  if (existing){
    const remove = confirm(`Evento del ${day}/${month+1}: "${existing}"\n\nVuoi eliminarlo?`);
    if (remove){
      delete calendarEvents[key];
      renderCalendar();
    }
  } else {
    const text = prompt(`Aggiungi un evento per il ${day}/${month+1}/${year}:`);
    if (text && text.trim()){
      calendarEvents[key] = text.trim();
      renderCalendar();
    }
  }
}

function renderCalendar(){
  const year = calViewDate.getFullYear();
  const month = calViewDate.getMonth();
  calMonth.textContent = `${monthNames[month]} ${year}`;

  calGrid.innerHTML = '';
  const dows = ['L','M','M','G','V','S','D'];
  dows.forEach(d=>{
    const el = document.createElement('div');
    el.className = 'cal-dow';
    el.textContent = d;
    calGrid.appendChild(el);
  });

  const firstOfMonth = new Date(year, month, 1);
  // Lunedì = 0 ... Domenica = 6
  let startOffset = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const today = new Date();

  // giorni mese precedente
  for (let i = startOffset; i > 0; i--){
    const el = document.createElement('div');
    el.className = 'cal-day other';
    el.textContent = daysInPrevMonth - i + 1;
    calGrid.appendChild(el);
  }
  // giorni mese corrente
  for (let d = 1; d <= daysInMonth; d++){
    const el = document.createElement('div');
    const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    const hasEvent = !!calendarEvents[dateKey(year, month, d)];
    el.className = 'cal-day' + (isToday ? ' today' : '') + (hasEvent ? ' has-event' : '');
    el.textContent = d;
    el.title = hasEvent ? calendarEvents[dateKey(year, month, d)] : 'Aggiungi evento';
    el.addEventListener('click', ()=> handleDayClick(year, month, d));
    calGrid.appendChild(el);
  }
  // giorni mese successivo per completare la griglia
  const totalCells = startOffset + daysInMonth;
  const remaining = (7 - (totalCells % 7)) % 7;
  for (let d = 1; d <= remaining; d++){
    const el = document.createElement('div');
    el.className = 'cal-day other';
    el.textContent = d;
    calGrid.appendChild(el);
  }
}
calPrev.addEventListener('click', ()=>{
  calViewDate.setMonth(calViewDate.getMonth()-1);
  renderCalendar();
});
calNext.addEventListener('click', ()=>{
  calViewDate.setMonth(calViewDate.getMonth()+1);
  renderCalendar();
});
renderCalendar();
