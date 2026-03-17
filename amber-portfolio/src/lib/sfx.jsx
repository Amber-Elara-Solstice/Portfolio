// Tiny UI "bleep" with WebAudio + a global enable switch.
let enabled = true;

export function setSfxEnabled(v) {
  enabled = !!v;
}

export function playBleep(freq = 880, dur = 0.05) {
  if (!enabled) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  const ctx = new Ctx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "square";
  osc.frequency.value = freq;
  gain.gain.value = 0.03;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  setTimeout(() => {
    osc.stop();
    ctx.close();
  }, dur * 1000);
}
