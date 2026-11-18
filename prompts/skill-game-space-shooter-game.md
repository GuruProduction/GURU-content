---
kind: "prompt"
slug: "skill-game-space-shooter-game"
name: "SKILL (game): Space Shooter Game"
category: "other"
delivery: "keyword_injection"
keywords:
  - "space shooter game"
global_threshold: 0.75
version: 2
active: true
---
Here's one of my favourite games to build. 

```portal
---
css: |
  #gw {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    font-family: sans-serif;
    user-select: none;
    -webkit-user-select: none;
  }
  #hud {
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 0 4px;
  }
  .h {
    font-size: 13px;
    font-weight: bold;
    color: #e9d5ff;
    letter-spacing: 1px;
  }
  .h span {
    color: #c084fc;
    text-shadow: 0 0 10px rgba(168, 85, 247, 0.8);
  }
  #combo {
    color: #fbbf24 !important;
    text-shadow: 0 0 10px rgba(251, 191, 36, 0.8) !important;
  }
  #cv {
    background: #0a0118;
    border-radius: 16px;
    touch-action: none;
    box-shadow: 0 0 40px rgba(168, 85, 247, 0.2);
    display: block;
  }
  .wrap {
    position: relative;
    width: 100%;
    max-width: 400px;
  }
  #ov {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(10, 1, 24, 0.92);
    border-radius: 16px;
    z-index: 10;
  }
  #ov.hide {
    display: none;
  }
  #title {
    font-size: 30px;
    font-weight: bold;
    color: #c084fc;
    letter-spacing: 5px;
    margin-bottom: 2px;
    text-shadow: 0 0 30px rgba(168, 85, 247, 0.7);
  }
  #sub {
    font-size: 12px;
    color: #f0abfc;
    letter-spacing: 3px;
    margin-bottom: 16px;
  }
  #cred {
    font-size: 14px;
    font-weight: bold;
    color: #fbbf24;
    margin-bottom: 12px;
  }
  #ups {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
    width: 80%;
    max-width: 280px;
  }
  .up {
    padding: 8px 16px;
    background: rgba(168, 85, 247, 0.15);
    border: 1px solid rgba(168, 85, 247, 0.5);
    border-radius: 8px;
    color: #e9d5ff;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    font-family: sans-serif;
  }
  .up:active {
    transform: scale(0.97);
  }
  .up.max {
    opacity: 0.4;
    cursor: default;
  }
  .up.poor {
    opacity: 0.5;
  }
  #start {
    padding: 12px 44px;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    color: #fff;
    border: none;
    border-radius: 30px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 3px;
    box-shadow: 0 0 25px rgba(168, 85, 247, 0.4);
    font-family: sans-serif;
  }
  #start:active {
    transform: scale(0.95);
  }
  #go {
    font-size: 28px;
    font-weight: bold;
    color: #f0abfc;
    margin-bottom: 8px;
    text-shadow: 0 0 30px rgba(236, 72, 153, 0.6);
  }
  #fs {
    font-size: 18px;
    color: #e9d5ff;
    margin-bottom: 4px;
  }
  #ce {
    font-size: 14px;
    color: #fbbf24;
    margin-bottom: 4px;
  }
  #bs {
    font-size: 13px;
    color: #c4b5fd;
    margin-bottom: 20px;
  }
  #again {
    padding: 10px 36px;
    background: linear-gradient(135deg, #ec4899, #f43f5e);
    color: #fff;
    border: none;
    border-radius: 30px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 2px;
    box-shadow: 0 0 20px rgba(236, 72, 153, 0.4);
    font-family: sans-serif;
  }
  #again:active {
    transform: scale(0.95);
  }
  #wb {
    position: absolute;
    top: 45%;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: #c084fc;
    letter-spacing: 8px;
    text-shadow: 0 0 40px rgba(168, 85, 247, 0.8);
    pointer-events: none;
    z-index: 5;
    opacity: 0;
    transition: opacity 0.4s;
  }
  #wb.show {
    opacity: 1;
  }
  #bbw {
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    z-index: 5;
  }
  #bbw.hide {
    display: none;
  }
  #bb {
    height: 100%;
    background: linear-gradient(90deg, #a855f7, #ec4899);
    border-radius: 3px;
    transition: width 0.1s linear;
  }
  #bn {
    position: absolute;
    top: 18px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 10px;
    color: #f0abfc;
    letter-spacing: 3px;
    z-index: 5;
    pointer-events: none;
  }
  .hint {
    font-size: 10px;
    color: #c4b5fd;
    letter-spacing: 1px;
    margin-top: 10px;
    opacity: 0.8;
  }
  #menu, #over {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
js: |
  (function() {
    // ===== CANVAS SETUP =====
    var canvas = document.getElementById('cv');
    var ctx = canvas.getContext('2d');
    var W = 400;
    var H = 600;
    canvas.width = W;
    canvas.height = H;

    // ===== COLOURS =====
    var COL = {
      bg: '#0a0118',
      purple: '#a855f7',
      pink: '#ec4899',
      magenta: '#d946ef',
      white: '#ffffff',
      red: '#f43f5e',
      gold: '#fbbf24'
    };

    // ===== META PROGRESSION =====
    var credits = parseInt(localStorage.getItem('ns-c') || '0');
    var up = {
      life: parseInt(localStorage.getItem('ns-l') || '0'),
      fireRate: parseInt(localStorage.getItem('ns-f') || '0'),
      spread: parseInt(localStorage.getItem('ns-s') || '0'),
      shield: parseInt(localStorage.getItem('ns-h') || '0')
    };
    var UP_COST = { life: 500, fireRate: 400, spread: 600, shield: 800 };
    var UP_MAX = { life: 1, fireRate: 3, spread: 1, shield: 1 };
    var UP_LABEL = {
      life: '+1 LIFE',
      fireRate: 'FIRE RATE',
      spread: 'SPREAD START',
      shield: 'SHIELD START'
    };
    var best = parseInt(localStorage.getItem('ns-b') || '0');
    document.getElementById('hud-b').textContent = best;

    // ===== AUDIO =====
    var audioCtx = null;
    function initAudio() {
      if (!audioCtx) {
        try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
      }
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    }
    function beep(freq, dur, type, vol) {
      if (!audioCtx) return;
      try {
        var o = audioCtx.createOscillator();
        var g = audioCtx.createGain();
        o.type = type || 'square';
        o.frequency.value = freq;
        g.gain.value = vol || 0.08;
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start();
        g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
        o.stop(audioCtx.currentTime + dur);
      } catch(e) {}
    }
    function explosionSound() { beep(120, 0.3, 'sawtooth', 0.12); beep(60, 0.4, 'square', 0.1); }
    function shootSound() { beep(880, 0.05, 'square', 0.03); }
    function powerSound() { beep(440, 0.12, 'sine', 0.1); beep(660, 0.12, 'sine', 0.1); beep(880, 0.18, 'sine', 0.1); }
    function hitSound() { beep(200, 0.1, 'triangle', 0.08); }
    function bossIntroSound() { beep(80, 0.5, 'sawtooth', 0.2); beep(60, 0.8, 'sawtooth', 0.15); beep(45, 1.2, 'sawtooth', 0.1); }

    // ===== HAPTICS =====
    function vibrate(pattern) {
      if (navigator.vibrate) {
        try { navigator.vibrate(pattern); } catch(e) {}
      }
    }

    // ===== MUSIC =====
    var musicTimer = null;
    var musicStep = 0;
    var nextNoteTime = 0;
    var bpm = 100;
    var musicOn = false;

    function startMusic() {
      if (!audioCtx || musicOn) return;
      musicOn = true;
      musicStep = 0;
      nextNoteTime = audioCtx.currentTime + 0.1;
      musicTimer = setInterval(scheduleMusic, 25);
    }
    function stopMusic() {
      musicOn = false;
      if (musicTimer) { clearInterval(musicTimer); musicTimer = null; }
    }
    function scheduleMusic() {
      if (!audioCtx || !musicOn) return;
      var spb = 60 / bpm;
      while (nextNoteTime < audioCtx.currentTime + 0.12) {
        playMusicStep(musicStep, nextNoteTime, spb);
        nextNoteTime += spb / 2;
        musicStep++;
      }
    }
    function playMusicStep(step, t, spb) {
      try {
        // Kick
        if (step % 4 === 0) {
          var o = audioCtx.createOscillator();
          var g = audioCtx.createGain();
          o.type = 'sine';
          o.frequency.setValueAtTime(150, t);
          o.frequency.exponentialRampToValueAtTime(40, t + 0.1);
          g.gain.setValueAtTime(0.25, t);
          g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
          o.connect(g); g.connect(audioCtx.destination);
          o.start(t); o.stop(t + 0.15);
        }
        // Hat
        if (step % 2 === 1) {
          var bufSize = Math.floor(audioCtx.sampleRate * 0.04);
          var buf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
          var d = buf.getChannelData(0);
          for (var i = 0; i < bufSize; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / bufSize);
          var src = audioCtx.createBufferSource();
          src.buffer = buf;
          var g2 = audioCtx.createGain();
          g2.gain.value = 0.06;
          src.connect(g2); g2.connect(audioCtx.destination);
          src.start(t);
        }
        // Bass
        var bassNotes = [55, 55, 65.4, 55, 49, 49, 65.4, 49];
        var bo = audioCtx.createOscillator();
        var bg = audioCtx.createGain();
        bo.type = 'sawtooth';
        bo.frequency.value = bassNotes[step % 8];
        bg.gain.setValueAtTime(0.1, t);
        bg.gain.exponentialRampToValueAtTime(0.001, t + spb * 0.9);
        bo.connect(bg); bg.connect(audioCtx.destination);
        bo.start(t); bo.stop(t + spb * 0.95);
        // Lead
        if (step % 2 === 0) {
          var arp = [220, 261.6, 329.6, 392, 329.6, 261.6];
          var lo = audioCtx.createOscillator();
          var lg = audioCtx.createGain();
          lo.type = 'square';
          lo.frequency.value = arp[(step / 2) % 6] * 2;
          lg.gain.setValueAtTime(0.03, t);
          lg.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
          lo.connect(lg); lg.connect(audioCtx.destination);
          lo.start(t); lo.stop(t + 0.2);
        }
      } catch(e) {}
    }

    // ===== GAME STATE =====
    var state = 'menu';
    var score = 0;
    var combo = 0;
    var comboTimer = 0;
    var lives = 3;
    var invuln = 0;
    var shake = 0;
    var time = 0;
    var difficulty = 1;

    // Wave system
    var wave = 1;
    var waveTimer = 0;
    var waveBannerTimer = 0;
    var waveActive = false;
    var spawnTimer = 0;
    var WAVE_DURATION = 22;

    // Boss
    var boss = null;
    var bossActive = false;
    var nextBossAt = 10000;

    // Player
    var player = {
      x: W / 2,
      y: H - 80,
      w: 34,
      h: 34,
      fireRate: 0.18,
      fireTimer: 0,
      power: 1
    };

    // Arrays
    var bullets = [];
    var enemyBullets = [];
    var enemies = [];
    var particles = [];
    var powerups = [];
    var stars = [];

    // Starfield
    for (var i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        speed: 0.5 + Math.random() * 2.5,
        size: Math.random() * 2 + 0.5,
        bright: Math.random(),
        hue: Math.random() < 0.7 ? '#a855f7' : '#ec4899'
      });
    }

    // ===== INPUT =====
    var dragging = false;
    var lastX = 0;
    var lastY = 0;

    function getPos(e) {
      var r = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - r.left) * (W / r.width),
        y: (e.clientY - r.top) * (H / r.height)
      };
    }

    canvas.addEventListener('touchstart', function(e) {
      e.preventDefault();
      initAudio();
      if (state === 'menu' || state === 'over') { startGame(); return; }
      var p = getPos(e.touches[0]);
      lastX = p.x;
      lastY = p.y;
      dragging = true;
    }, {passive: false});

    canvas.addEventListener('touchmove', function(e) {
      e.preventDefault();
      if (!dragging || state !== 'play') return;
      var p = getPos(e.touches[0]);
      player.x += p.x - lastX;
      player.y += p.y - lastY;
      lastX = p.x;
      lastY = p.y;
      clampPlayer();
    }, {passive: false});

    canvas.addEventListener('touchend', function(e) {
      e.preventDefault();
      dragging = false;
    }, {passive: false});

    canvas.addEventListener('mousedown', function(e) {
      initAudio();
      if (state === 'menu' || state === 'over') { startGame(); return; }
      var p = getPos(e);
      lastX = p.x;
      lastY = p.y;
      dragging = true;
    });

    canvas.addEventListener('mousemove', function(e) {
      if (!dragging || state !== 'play') return;
      var p = getPos(e);
      player.x += p.x - lastX;
      player.y += p.y - lastY;
      lastX = p.x;
      lastY = p.y;
      clampPlayer();
    });

    window.addEventListener('mouseup', function() { dragging = false; });

    function clampPlayer() {
      player.x = Math.max(20, Math.min(W - 20, player.x));
      player.y = Math.max(H * 0.4, Math.min(H - 30, player.y));
    }

    // ===== UPGRADES UI =====
    function renderUpgrades() {
      var list = document.getElementById('ups');
      list.innerHTML = '';
      var keys = ['life', 'fireRate', 'spread', 'shield'];
      for (var i = 0; i < keys.length; i++) {
        (function(key) {
          var owned = up[key];
          var max = UP_MAX[key];
          var cost = UP_COST[key];
          var btn = document.createElement('button');
          btn.className = 'up';
          var label = UP_LABEL[key];
          if (max > 1) label += ' ' + (owned + 1) + '/' + max;
          btn.textContent = label + ' ' + cost + ' CR';
          if (owned >= max) {
            btn.classList.add('max');
            btn.textContent = label + '. MAX';
          } else if (credits < cost) {
            btn.classList.add('poor');
          }
          btn.addEventListener('click', function() {
            if (up[key] >= UP_MAX[key] || credits < UP_COST[key]) return;
            credits -= UP_COST[key];
            up[key]++;
            localStorage.setItem('ns-c', credits);
            localStorage.setItem('ns-' + key, up[key]);
            document.getElementById('cred').textContent = 'CREDITS: ' + credits;
            renderUpgrades();
            powerSound();
            vibrate(20);
          });
          list.appendChild(btn);
        })(keys[i]);
      }
    }

    // ===== GAME FLOW =====
    function startGame() {
      initAudio();
      state = 'play';
      score = 0;
      combo = 0;
      comboTimer = 0;
      lives = 3 + up.life;
      invuln = up.shield > 0 ? 3 : 2;
      shake = 0;
      time = 0;
      difficulty = 1;
      wave = 1;
      waveTimer = 0;
      waveBannerTimer = 1.5;
      waveActive = false;
      spawnTimer = 0;
      nextBossAt = 10000;
      boss = null;
      bossActive = false;
      bullets = [];
      enemyBullets = [];
      enemies = [];
      powerups = [];
      player.x = W / 2;
      player.y = H - 80;
      player.power = up.spread > 0 ? 2 : 1;
      player.fireRate = 0.18 - 0.03 * up.fireRate;
      player.fireTimer = 0;
      document.getElementById('ov').classList.add('hide');
      document.getElementById('bbw').classList.add('hide');
      showWaveBanner(1);
      startMusic();
      updateHUD();
    }

    function gameOver() {
      state = 'over';
      stopMusic();
      var earned = Math.floor(score / 50);
      credits += earned;
      localStorage.setItem('ns-c', credits);
      if (score > best) {
        best = score;
        localStorage.setItem('ns-b', best);
        document.getElementById('hud-b').textContent = best;
      }
      document.getElementById('go').textContent = 'GAME OVER';
      document.getElementById('fs').textContent = 'SCORE: ' + score;
      document.getElementById('ce').textContent = '+ ' + earned + ' CREDITS';
      document.getElementById('bs').textContent = 'BEST: ' + best;
      document.getElementById('menu').style.display = 'none';
      document.getElementById('over').style.display = 'flex';
      document.getElementById('ov').classList.remove('hide');
      explosionSound();
      vibrate([50, 30, 50, 30, 100]);
      burst(player.x, player.y, COL.pink, 40, 6);
      burst(player.x, player.y, COL.magenta, 30, 5);
      if (bossActive) {
        document.getElementById('bbw').classList.add('hide');
        bossActive = false;
        boss = null;
      }
    }

    function showWaveBanner(n) {
      document.getElementById('wb').textContent = 'WAVE ' + n;
      document.getElementById('wb').classList.add('show');
      beep(523, 0.1, 'sine', 0.08);
      beep(659, 0.1, 'sine', 0.08);
      beep(784, 0.15, 'sine', 0.08);
      setTimeout(function() {
        document.getElementById('wb').classList.remove('show');
      }, 1500);
    }

    function updateHUD() {
      document.getElementById('hud-s').textContent = score;
      document.getElementById('hud-w').textContent = wave;
      document.getElementById('combo').textContent = combo > 1 ? 'x' + combo : '';
      document.getElementById('hud-b').textContent = best;
    }

    // ===== SPAWNING =====
    function makeEnemy(type, x, y) {
      return {
        type: type,
        x: x,
        y: y,
        w: type === 'tank' ? 40 : 28,
        h: type === 'tank' ? 40 : 28,
        hp: type === 'tank' ? 5 : type === 'shooter' ? 2 : 1,
        speed: type === 'tank' ? 0.8 : type === 'shooter' ? 1.4 : 2 + Math.random() * 1.5,
        shootTimer: 0,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 1 + Math.random() * 2
      };
    }

    function spawnWaveEnemy() {
      var r = Math.random();
      var type = 'drone';
      if (wave >= 3 && r < 0.2) type = 'shooter';
      if (wave >= 5 && r < 0.08) type = 'tank';
      if (wave >= 8 && r < 0.3) type = 'shooter';
      if (wave >= 10 && r < 0.15) type = 'tank';

      var formationRoll = Math.random();
      if (formationRoll < 0.15 && wave >= 2) {
        // V formation
        var cx = W / 2 + (Math.random() - 0.5) * 100;
        for (var i = -2; i <= 2; i++) {
          enemies.push(makeEnemy('drone', cx + i * 32, -30 - Math.abs(i) * 22));
        }
      } else if (formationRoll < 0.3 && wave >= 4) {
        // Line formation
        var sx = 30 + Math.random() * 100;
        for (var j = 0; j < 4; j++) {
          enemies.push(makeEnemy('drone', sx + j * 85, -30 - j * 18));
        }
      } else {
        enemies.push(makeEnemy(type, 30 + Math.random() * (W - 60), -30));
      }
    }

    function getSpawnRate() {
      return Math.max(0.35, 1.5 - wave * 0.07);
    }

    // ===== BOSS =====
    function spawnBoss() {
      boss = {
        x: W / 2,
        y: 80,
        w: 80,
        h: 80,
        hp: 120 + wave * 15,
        maxHp: 120 + wave * 15,
        pattern: 0,
        patternTimer: 2,
        fireTimer: 0.5,
        phase: 1,
        moveTimer: 0,
        moveTargetX: W / 2,
        angleOffset: 0,
        spiralAngle: 0
      };
      bossActive = true;
      document.getElementById('bbw').classList.remove('hide');
      document.getElementById('bn').textContent = 'VOID WARDEN';
      document.getElementById('bb').style.width = '100%';
      bossIntroSound();
      vibrate([100, 50, 100]);
      burst(boss.x, boss.y, COL.purple, 30, 4);
      burst(boss.x, boss.y, COL.pink, 20, 3);
    }

    function updateBoss() {
      if (!boss) return;

      // Movement
      boss.moveTimer -= 1 / 60;
      if (boss.moveTimer <= 0) {
        boss.moveTargetX = 60 + Math.random() * (W - 120);
        boss.moveTimer = 1.5 + Math.random() * 2;
      }
      boss.x += (boss.moveTargetX - boss.x) * 0.03;

      // Phase 2 at half HP
      if (boss.phase === 1 && boss.hp < boss.maxHp / 2) {
        boss.phase = 2;
        boss.patternTimer = 0.5;
        boss.fireTimer = 0.3;
        bossIntroSound();
        burst(boss.x, boss.y, COL.magenta, 25, 4);
        document.getElementById('bn').textContent = 'VOID WARDEN. ENRAGED';
      }

      // Pattern switching
      boss.patternTimer -= 1 / 60;
      if (boss.patternTimer <= 0) {
        boss.pattern = (boss.pattern + 1) % (boss.phase === 2 ? 4 : 3);
        boss.patternTimer = 2.5;
        boss.fireTimer = 0.3;
      }

      // Firing
      boss.fireTimer -= 1 / 60;
      if (boss.fireTimer <= 0) {
        bossFire();
        boss.fireTimer = boss.phase === 2 ? 0.3 : 0.5;
      }

      // Boss bar
      document.getElementById('bb').style.width = Math.max(0, (boss.hp / boss.maxHp) * 100) + '%';
    }

    function bossFire() {
      if (!boss) return;
      switch (boss.pattern) {
        case 0:
          // Radial burst
          var count = boss.phase === 2 ? 18 : 12;
          var speed = boss.phase === 2 ? 3 : 2.5;
          for (var i = 0; i < count; i++) {
            var a = (Math.PI * 2 / count) * i + boss.angleOffset;
            enemyBullets.push({
              x: boss.x,
              y: boss.y + 30,
              vx: Math.cos(a) * speed,
              vy: Math.sin(a) * speed,
              w: 6,
              h: 6
            });
          }
          boss.angleOffset += 0.15;
          beep(250, 0.05, 'sawtooth', 0.04);
          break;
        case 1:
          // Aimed volley
          var dx = player.x - boss.x;
          var dy = player.y - boss.y;
          var dist = Math.sqrt(dx * dx + dy * dy) || 1;
          var base = Math.atan2(dy, dx);
          var spread = boss.phase === 2 ? 0.2 : 0.15;
          for (var j = -1; j <= 1; j++) {
            var a2 = base + j * spread;
            enemyBullets.push({
              x: boss.x,
              y: boss.y + 30,
              vx: Math.cos(a2) * 3.5,
              vy: Math.sin(a2) * 3.5,
              w: 6,
              h: 6
            });
          }
          beep(300, 0.05, 'sawtooth', 0.04);
          break;
        case 2:
          // Spiral
          var sp3 = boss.phase === 2 ? 3.2 : 2.8;
          enemyBullets.push({
            x: boss.x,
            y: boss.y + 30,
            vx: Math.cos(boss.spiralAngle) * sp3,
            vy: Math.sin(boss.spiralAngle) * sp3,
            w: 6,
            h: 6
          });
          boss.spiralAngle += boss.phase === 2 ? 0.35 : 0.25;
          beep(400, 0.03, 'square', 0.03);
          break;
        case 3:
          // Summon minions (phase 2 only)
          for (var k = 0; k < 3; k++) {
            enemies.push(makeEnemy('drone', boss.x + (Math.random() - 0.5) * 120, boss.y + 40));
          }
          boss.pattern = 0;
          boss.patternTimer = 1.5;
          beep(200, 0.15, 'sawtooth', 0.06);
          break;
      }
    }

    // ===== POWERUPS =====
    function spawnPowerup(x, y) {
      var types = ['spread', 'rapid', 'shield'];
      var type = types[Math.floor(Math.random() * 3)];
      powerups.push({ x: x, y: y, type: type, vy: 1.5, w: 20, h: 20, t: 0 });
    }

    // ===== PARTICLES =====
    function burst(x, y, color, count, speed) {
      for (var i = 0; i < count; i++) {
        var a = Math.random() * Math.PI * 2;
        var s = (Math.random() * 0.5 + 0.3) * (speed || 4);
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(a) * s,
          vy: Math.sin(a) * s,
          life: 1,
          decay: 0.02 + Math.random() * 0.03,
          size: 2 + Math.random() * 3,
          color: color
        });
      }
    }

    // ===== FIRE =====
    function fire() {
      shootSound();
      if (player.power >= 3) {
        bullets.push({ x: player.x - 10, y: player.y - 20, vx: 0, vy: -9, w: 4, h: 12 });
        bullets.push({ x: player.x + 10, y: player.y - 20, vx: 0, vy: -9, w: 4, h: 12 });
        bullets.push({ x: player.x, y: player.y - 20, vx: -2.5, vy: -8, w: 4, h: 12 });
        bullets.push({ x: player.x, y: player.y - 20, vx: 2.5, vy: -8, w: 4, h: 12 });
      } else if (player.power >= 2) {
        bullets.push({ x: player.x - 8, y: player.y - 20, vx: 0, vy: -9, w: 4, h: 12 });
        bullets.push({ x: player.x + 8, y: player.y - 20, vx: 0, vy: -9, w: 4, h: 12 });
      } else {
        bullets.push({ x: player.x, y: player.y - 20, vx: 0, vy: -9, w: 4, h: 12 });
      }
    }

    // ===== PLAYER DAMAGE =====
    function hurtPlayer() {
      if (invuln > 0 || state !== 'play') return;
      lives--;
      invuln = 1.5;
      shake = 12;
      hitSound();
      vibrate([30, 20, 50]);
      burst(player.x, player.y, COL.pink, 15, 3);
      if (lives <= 0) {
        gameOver();
        return;
      }
      updateHUD();
    }

    // ===== UPDATE =====
    function update() {
      time += 1 / 60;
      difficulty = 1 + time / 30;
      bpm = 100 + Math.min(40, Math.floor(time / 30) * 5);
      if (invuln > 0) invuln -= 1 / 60;
      if (shake > 0) shake *= 0.9;
      if (comboTimer > 0) {
        comboTimer -= 1 / 60;
        if (comboTimer <= 0) { combo = 0; updateHUD(); }
      }

      // Stars
      for (var i = 0; i < stars.length; i++) {
        stars[i].y += stars[i].speed * (0.5 + difficulty * 0.3);
        if (stars[i].y > H) {
          stars[i].y = -2;
          stars[i].x = Math.random() * W;
        }
      }

      // Boss trigger
      if (!bossActive && score >= nextBossAt) {
        spawnBoss();
        nextBossAt += 10000;
      }

      // Wave logic
      if (bossActive) {
        updateBoss();
      } else if (waveBannerTimer > 0) {
        waveBannerTimer -= 1 / 60;
        if (waveBannerTimer <= 0) {
          waveActive = true;
          waveTimer = WAVE_DURATION;
        }
      } else if (waveActive) {
        waveTimer -= 1 / 60;
        spawnTimer -= 1 / 60;
        if (spawnTimer <= 0) {
          spawnWaveEnemy();
          spawnTimer = getSpawnRate();
        }
        if (waveTimer <= 0) {
          waveActive = false;
          wave++;
          waveBannerTimer = 1.5;
          showWaveBanner(wave);
          updateHUD();
        }
      }

      // Player fire
      if (state === 'play') {
        player.fireTimer -= 1 / 60;
        if (player.fireTimer <= 0) {
          fire();
          player.fireTimer = player.fireRate;
        }
      }

      // Player bullets
      for (var j = bullets.length - 1; j >= 0; j--) {
        bullets[j].x += bullets[j].vx;
        bullets[j].y += bullets[j].vy;
        if (bullets[j].y < -20 || bullets[j].x < -20 || bullets[j].x > W + 20) {
          bullets.splice(j, 1);
        }
      }

      // Enemy bullets, hit player
      for (var k = enemyBullets.length - 1; k >= 0; k--) {
        var eb = enemyBullets[k];
        eb.x += eb.vx;
        eb.y += eb.vy;
        if (eb.y > H + 20) { enemyBullets.splice(k, 1); continue; }
        var dx = eb.x - player.x;
        var dy = eb.y - player.y;
        if (Math.abs(dx) < player.w / 2 + 4 && Math.abs(dy) < player.h / 2 + 4) {
          enemyBullets.splice(k, 1);
          hurtPlayer();
          if (state !== 'play') return;
        }
      }

      // Enemies
      for (var m = enemies.length - 1; m >= 0; m--) {
        var e = enemies[m];
        e.wobble += e.wobbleSpeed * 0.05;
        e.y += e.speed;
        e.x += Math.sin(e.wobble) * 0.8;

        // Shooter fires
        if (e.type === 'shooter' && e.y > 0 && e.y < H * 0.6) {
          e.shootTimer -= 1 / 60;
          if (e.shootTimer <= 0) {
            var dx2 = player.x - e.x;
            var dy2 = player.y - e.y;
            var dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2) || 1;
            var sp4 = 3 + difficulty * 0.5;
            enemyBullets.push({
              x: e.x,
              y: e.y + 15,
              vx: dx2 / dist2 * sp4,
              vy: dy2 / dist2 * sp4,
              w: 6,
              h: 6
            });
            e.shootTimer = 2.2 - difficulty * 0.2;
            beep(300, 0.08, 'sawtooth', 0.03);
          }
        }

        // Off screen
        if (e.y > H + 40) { enemies.splice(m, 1); continue; }

        // ENEMY SHIP HITS PLAYER
        var edx = e.x - player.x;
        var edy = e.y - player.y;
        if (Math.abs(edx) < (e.w / 2 + player.w / 2) && Math.abs(edy) < (e.h / 2 + player.h / 2)) {
          burst(e.x, e.y, COL.pink, 20, 4);
          burst(e.x, e.y, COL.white, 10, 3);
          explosionSound();
          enemies.splice(m, 1);
          hurtPlayer();
          if (state !== 'play') return;
          continue;
        }

        // Bullet hits enemy
        for (var n = bullets.length - 1; n >= 0; n--) {
          var b = bullets[n];
          if (Math.abs(b.x - e.x) < e.w / 2 + 4 && Math.abs(b.y - e.y) < e.h / 2 + 6) {
            bullets.splice(n, 1);
            e.hp--;
            burst(b.x, b.y, COL.purple, 6, 2.5);
            if (e.hp <= 0) {
              var colors = e.type === 'tank' ? [COL.red, COL.pink] : e.type === 'shooter' ? [COL.magenta, COL.purple] : [COL.pink, COL.white];
              burst(e.x, e.y, colors[0], e.type === 'tank' ? 30 : 18, e.type === 'tank' ? 5 : 4);
              burst(e.x, e.y, colors[1], 10, 3);
              explosionSound();
              vibrate(15);
              var pts = e.type === 'tank' ? 50 : e.type === 'shooter' ? 30 : 10;
              combo++;
              comboTimer = 2.5;
              score += pts * combo;
              updateHUD();
              if (Math.random() < 0.12) spawnPowerup(e.x, e.y);
              enemies.splice(m, 1);
              shake = Math.max(shake, e.type === 'tank' ? 10 : 4);
            }
            break;
          }
        }
      }

      // Boss hit by bullets
      if (bossActive && boss) {
        for (var o = bullets.length - 1; o >= 0; o--) {
          var b2 = bullets[o];
          if (Math.abs(b2.x - boss.x) < boss.w / 2 + 4 && Math.abs(b2.y - boss.y) < boss.h / 2 + 6) {
            bullets.splice(o, 1);
            boss.hp--;
            beep(150, 0.08, 'sawtooth', 0.06);
            vibrate(10);
            burst(b2.x, b2.y, COL.purple, 4, 2);
            if (boss.hp <= 0) {
              combo++;
              comboTimer = 2.5;
              score += 1000 * combo;
              updateHUD();
              burst(boss.x, boss.y, COL.purple, 50, 7);
              burst(boss.x, boss.y, COL.pink, 40, 6);
              burst(boss.x, boss.y, COL.magenta, 30, 5);
              burst(boss.x, boss.y, COL.white, 20, 4);
              explosionSound();
              vibrate([50, 30, 50, 30, 100]);
              shake = 20;
              spawnPowerup(boss.x - 30, boss.y);
              spawnPowerup(boss.x, boss.y);
              spawnPowerup(boss.x + 30, boss.y);
              document.getElementById('bbw').classList.add('hide');
              bossActive = false;
              boss = null;
              waveBannerTimer = 1.5;
              waveActive = false;
            }
            break;
          }
        }
      }

      // Powerups
      for (var q = powerups.length - 1; q >= 0; q--) {
        var p = powerups[q];
        p.y += p.vy;
        p.t += 1 / 60;
        if (p.y > H + 20) { powerups.splice(q, 1); continue; }
        if (Math.abs(p.x - player.x) < 30 && Math.abs(p.y - player.y) < 30) {
          if (p.type === 'spread') player.power = Math.max(player.power, 2);
          if (p.type === 'rapid') player.power = Math.max(player.power, 3);
          if (p.type === 'shield') invuln = Math.max(invuln, 3);
          powerSound();
          vibrate([10, 10, 10]);
          burst(p.x, p.y, COL.gold, 15, 3);
          powerups.splice(q, 1);
        }
      }

      // Particles
      for (var r = particles.length - 1; r >= 0; r--) {
        particles[r].x += particles[r].vx;
        particles[r].y += particles[r].vy;
        particles[r].vx *= 0.98;
        particles[r].vy *= 0.98;
        particles[r].life -= particles[r].decay;
        if (particles[r].life <= 0) particles.splice(r, 1);
      }
    }

    // ===== DRAW =====
    function draw() {
      ctx.save();
      if (shake > 0.5) {
        ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
      }

      // Background
      ctx.fillStyle = COL.bg;
      ctx.fillRect(-10, -10, W + 20, H + 20);

      // Stars
      for (var i = 0; i < stars.length; i++) {
        ctx.globalAlpha = 0.3 + stars[i].bright * 0.7;
        ctx.fillStyle = stars[i].hue;
        ctx.fillRect(stars[i].x, stars[i].y, stars[i].size, stars[i].size);
      }
      ctx.globalAlpha = 1;

      // Powerups
      for (var j = 0; j < powerups.length; j++) {
        var p = powerups[j];
        var pulse = 0.7 + Math.sin(p.t * 6) * 0.3;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.t * 2);
        ctx.globalAlpha = pulse;
        ctx.fillStyle = p.type === 'spread' ? COL.purple : p.type === 'rapid' ? COL.gold : '#34d399';
        ctx.beginPath();
        ctx.moveTo(0, -12);
        ctx.lineTo(10, 8);
        ctx.lineTo(0, 4);
        ctx.lineTo(-10, 8);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
      ctx.globalAlpha = 1;

      // Player bullets
      for (var k = 0; k < bullets.length; k++) {
        ctx.fillStyle = COL.purple;
        ctx.shadowColor = COL.purple;
        ctx.shadowBlur = 10;
        ctx.fillRect(bullets[k].x - 2, bullets[k].y - 6, 4, 12);
        ctx.shadowBlur = 0;
      }

      // Enemy bullets
      for (var l = 0; l < enemyBullets.length; l++) {
        ctx.fillStyle = COL.pink;
        ctx.shadowColor = COL.pink;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(enemyBullets[l].x, enemyBullets[l].y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Enemies
      for (var m = 0; m < enemies.length; m++) {
        var e = enemies[m];
        ctx.save();
        ctx.translate(e.x, e.y);
        if (e.type === 'tank') {
          ctx.fillStyle = COL.red;
          ctx.shadowColor = COL.red;
          ctx.shadowBlur = 12;
          ctx.fillRect(-20, -20, 40, 40);
          ctx.fillStyle = COL.pink;
          ctx.fillRect(-14, -14, 28, 28);
          ctx.fillStyle = COL.red;
          ctx.fillRect(-6, -6, 12, 12);
          ctx.fillStyle = 'rgba(255,255,255,0.2)';
          ctx.fillRect(-20, -28, 40, 4);
          ctx.fillStyle = COL.red;
          ctx.fillRect(-20, -28, 40 * (e.hp / 5), 4);
        } else if (e.type === 'shooter') {
          ctx.fillStyle = COL.magenta;
          ctx.shadowColor = COL.magenta;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.moveTo(0, -16);
          ctx.lineTo(14, 12);
          ctx.lineTo(0, 6);
          ctx.lineTo(-14, 12);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = COL.purple;
          ctx.beginPath();
          ctx.arc(0, 0, 5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = COL.pink;
          ctx.shadowColor = COL.pink;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.moveTo(0, -14);
          ctx.lineTo(12, 10);
          ctx.lineTo(0, 4);
          ctx.lineTo(-12, 10);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }
      ctx.shadowBlur = 0;

      // Boss
      if (bossActive && boss) {
        ctx.save();
        ctx.translate(boss.x, boss.y);
        var pulse2 = 1 + Math.sin(time * 3) * 0.05;
        ctx.scale(pulse2, pulse2);
        ctx.fillStyle = boss.phase === 2 ? COL.red : COL.purple;
        ctx.shadowColor = boss.phase === 2 ? COL.red : COL.purple;
        ctx.shadowBlur = 30;
        ctx.beginPath();
        for (var n = 0; n < 6; n++) {
          var a = (Math.PI / 3) * n + time * 0.5;
          var px = Math.cos(a) * 40;
          var py = Math.sin(a) * 40;
          if (n === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = boss.phase === 2 ? COL.pink : COL.magenta;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        for (var o = 0; o < 6; o++) {
          var a2 = (Math.PI / 3) * o - time * 0.5;
          var px2 = Math.cos(a2) * 22;
          var py2 = Math.sin(a2) * 22;
          if (o === 0) ctx.moveTo(px2, py2);
          else ctx.lineTo(px2, py2);
        }
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = COL.white;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = boss.phase === 2 ? COL.red : COL.purple;
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.shadowBlur = 0;

      // Player
      if (state === 'play' || state === 'over') {
        if (invuln <= 0 || Math.floor(time * 10) % 2 === 0) {
          ctx.save();
          ctx.translate(player.x, player.y);
          var flame = 8 + Math.random() * 6;
          ctx.fillStyle = COL.pink;
          ctx.beginPath();
          ctx.moveTo(-6, 14);
          ctx.lineTo(0, 14 + flame);
          ctx.lineTo(6, 14);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = COL.purple;
          ctx.shadowColor = COL.purple;
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.moveTo(0, -20);
          ctx.lineTo(16, 14);
          ctx.lineTo(0, 8);
          ctx.lineTo(-16, 14);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = COL.white;
          ctx.beginPath();
          ctx.arc(0, -4, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      ctx.shadowBlur = 0;

      // Particles
      for (var q = 0; q < particles.length; q++) {
        ctx.globalAlpha = Math.max(0, particles[q].life);
        ctx.fillStyle = particles[q].color;
        ctx.fillRect(particles[q].x - particles[q].size / 2, particles[q].y - particles[q].size / 2, particles[q].size, particles[q].size);
      }
      ctx.globalAlpha = 1;

      // Lives
      if (state === 'play') {
        for (var r = 0; r < lives; r++) {
          ctx.fillStyle = COL.purple;
          ctx.shadowColor = COL.purple;
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.moveTo(20 + r * 24, H - 20);
          ctx.lineTo(28 + r * 24, H - 8);
          ctx.lineTo(12 + r * 24, H - 8);
          ctx.closePath();
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      ctx.restore();
    }

    // ===== LOOP =====
    function loop() {
      if (state === 'play') update();
      draw();
      requestAnimationFrame(loop);
    }

    // ===== INIT =====
    document.getElementById('start').addEventListener('click', function() {
      initAudio();
      startGame();
    });
    document.getElementById('again').addEventListener('click', function() {
      initAudio();
      startGame();
    });

    document.getElementById('menu').style.display = 'flex';
    document.getElementById('over').style.display = 'none';
    document.getElementById('cred').textContent = 'CREDITS: ' + credits;
    renderUpgrades();

    loop();
  })();
height: 640
interactive: true
---
<div id="gw">
  <div id="hud">
    <div class="h">SCORE <span id="hud-s">0</span></div>
    <div class="h">WAVE <span id="hud-w">1</span></div>
    <div class="h" id="combo"></div>
    <div class="h">BEST <span id="hud-b">0</span></div>
  </div>
  <div class="wrap">
    <canvas id="cv"></canvas>
    <div id="wb">WAVE 1</div>
    <div id="bbw" class="hide"><div id="bb"></div></div>
    <div id="bn"></div>
    <div id="ov">
      <div id="menu">
        <div id="title">NEBULA STRIKE</div>
        <div id="sub">NEON PROTOCOL</div>
        <div id="cred">CREDITS: 0</div>
        <div id="ups"></div>
        <button id="start">LAUNCH</button>
        <div class="hint">DRAG TO MOVE • AUTO-FIRE</div>
      </div>
      <div id="over" style="display:none;">
        <div id="go">GAME OVER</div>
        <div id="fs">SCORE: 0</div>
        <div id="ce">+ 0 CREDITS</div>
        <div id="bs">BEST: 0</div>
        <button id="again">PLAY AGAIN</button>
      </div>
    </div>
  </div>
</div>
```


What's in it:

Enemy bullets hurt you. Enemy ships hurt you on contact and explode on impact. You get 1.5 seconds of invulnerability after each hit, shown by your ship flashing. Three lives, extra life upgrade available.

Waves with formations, three enemy types, the Void Warden boss every 10k with three attack patterns that cycle, enrage phase at half HP, health bar at the top.

Credits and upgrades on the menu, combo multiplier, power-ups, haptics, synthwave music that speeds up, screen shake, particles, starfield. All neon purple and pink.

