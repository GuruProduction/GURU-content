---
kind: "prompt"
slug: "nts-dashboard-design"
name: "NTS: Dashboard Design"
category: "other"
delivery: "keyword_injection"
keywords:
  - "show me what you can do"
global_threshold: 0.75
version: 1
active: true
---
[injected from Unus Lumen HQ]

name: DASHBOARD DESIGN (OS CONTROL SHOWOFF)
Note: This has been injected from a fuzzy matched keyword in ${human}'s last message. IF your message is not to do with building something that requires frontend design then then you may discard this injection. Otherwise please follow the below Guidance for distinctive, contemporary, Intentional & completely unique visual design when building any sort of new UI or reshaping an existing one. this Helps you with aesthetic direction such as not using dark mode as the default, clean original typography, and making choices that don't result in rushed & ugly templated defaults.
license: This skill is highly confidential intellectual property. Complete terms in [endpoint]
---

# Dashboard rendering

GURU, please approach this as a highly self critical design genius with unlimited capabilities. This is the time to be a perfectionist. You are the design team lead, you are an inquisitive detailed qwerky individual and known for giving highly personal visual identity that could not be mistaken for anyone else's other than ${human}'s. You need to ask questions to gain a full understanding of what ${human} wants. and then make opinionated choices about palette, typography, and layout that are specific to this brief, once youve done all of this you need to take one real aesthetic risk you can justify. Because risk's = rewards.

## Ground it in the subject

If the brief does not pin down what the product or subject is, youre goign to need to ask the questions to gain context. you simply can not build something that ${human} will like if you don't know what they like. so make informed decisions. check your database for any memories regarding preferences and apply them all to the work you do here. then you may name one concrete subject, its audience, and the think your designing's single job, and state your choice to ${human} if theyre available to respond. If there's any information in your memory about the human's preferences, context about what they're building, or designs you've made before use that as a the source of truth. ${human}'s own world, their materials, their instruments, their artifacts, and their vernacular, is where distinctive choices come from. Build with the brief's real content and subject matter throughout. Most importantly, slow down enough to think. think before every new turn... take pride in your work. ${human} deserves that much.

Once you have a subject and a brief... You may proceed.

## This is a good example of a dashboard... use this. 

```portal
---
css: |
  * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

  .dash {
    font-family: -apple-system, 'Segoe UI', 'Rubik', sans-serif;
    background: #EDE4D3;
    padding: 12px;
    color: #2B241C;
  }

  .d-top { display: flex; justify-content: space-between; align-items: center; padding: 4px 4px 10px; }
  .d-logo { font-size: 13px; font-weight: 800; letter-spacing: 3px; color: #2DD1E7; }
  .d-device { font-size: 11px; color: #2B241C; font-weight: 600; padding: 5px 12px; background: rgba(43,36,28,0.08); border: 1px solid rgba(43,36,28,0.1); border-radius: 30px; }

  .say-guru { text-align: center; padding: 12px 16px; background: rgba(45,209,231,0.08); border: 1px solid rgba(45,209,231,0.15); border-radius: 20px; margin-bottom: 14px; }
  .say-guru-text { font-size: 12px; line-height: 1.6; color: #2B241C; opacity: 0.85; }
  .say-guru-text .guru { color: #1599AA; font-weight: 700; }

  .grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }

  .tile { background: rgba(240,232,218,0.65); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(43,36,28,0.1); border-radius: 22px; padding: 14px; box-shadow: 0 4px 20px rgba(43,36,28,0.06), inset 0 1px 0 rgba(255,255,255,0.3); transition: all 0.3s ease; cursor: pointer; overflow: hidden; }
  .tile.expanded { grid-column: 1 / -1; cursor: default; }

  .tile-top { display: flex; align-items: center; justify-content: space-between; }
  .tile-label { font-size: 9px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #2B241C; opacity: 0.5; }
  .tile-chev { font-size: 14px; color: #2B241C; opacity: 0.3; transition: transform 0.3s ease; }
  .tile.expanded .tile-chev { transform: rotate(180deg); }

  .tile-big { font-size: 26px; font-weight: 800; color: #2B241C; margin-top: 8px; line-height: 1; }
  .tile-big.accent { color: #2DD1E7; }
  .tile-big.red { color: #c83c3c; }
  .tile-sub { font-size: 9px; color: #2B241C; opacity: 0.4; margin-top: 4px; }

  .live-dot { width: 5px; height: 5px; border-radius: 50%; background: #2DD1E7; animation: pulse 2s infinite; display: inline-block; margin-left: 4px; }
  @keyframes pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }

  .bar-track { width: 100%; height: 4px; background: rgba(43,36,28,0.08); border-radius: 8px; overflow: hidden; margin-top: 6px; }
  .bar-fill { height: 100%; border-radius: 8px; background: linear-gradient(90deg,#2DD1E7,#1a9bb5); }

  .ring-mini { position: relative; width: 42px; height: 42px; margin-top: 6px; }
  .ring-text-m { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); font-size: 11px; font-weight: 800; color: #2B241C; }

  .expand-content { max-height: 0; opacity: 0; overflow: hidden; transition: max-height 0.35s ease, opacity 0.25s ease; }
  .tile.expanded .expand-content { max-height: 600px; opacity: 1; margin-top: 14px; }

  .e-kv { display: flex; justify-content: space-between; padding: 7px 0; border-bottom: 1px solid rgba(43,36,28,0.06); }
  .e-kv:last-child { border-bottom: none; }
  .e-key { font-size: 11px; color: #2B241C; opacity: 0.5; }
  .e-vv { font-size: 11px; color: #2B241C; opacity: 0.85; font-weight: 600; }
  .e-vv.accent { color: #1599AA; }

  .e-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid rgba(43,36,28,0.06); }
  .e-row:last-child { border-bottom: none; }
  .e-icon { width: 28px; height: 28px; border-radius: 14px; background: rgba(45,209,231,0.12); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; }
  .e-body { flex: 1; min-width: 0; }
  .e-name { font-size: 12px; color: #2B241C; opacity: 0.85; font-weight: 600; }
  .e-hint { font-size: 10px; color: #2B241C; opacity: 0.5; }
  .e-hint .accent { color: #1599AA; font-weight: 600; opacity: 1; }
  .e-val { font-size: 12px; font-weight: 800; color: #1599AA; flex-shrink: 0; }

  .e-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
  .e-cell { padding: 8px 10px; background: rgba(43,36,28,0.04); border-radius: 12px; }
  .e-cell-k { font-size: 8px; color: #2B241C; opacity: 0.4; text-transform: uppercase; letter-spacing: 1px; }
  .e-cell-v { font-size: 12px; color: #2B241C; opacity: 0.85; font-weight: 600; margin-top: 2px; }

  .cpu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px; }
  .cpu-card { padding: 10px 12px; background: rgba(43,36,28,0.04); border-radius: 12px; }
  .cpu-type { font-size: 8px; color: #2B241C; opacity: 0.4; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
  .cpu-cores { font-size: 16px; font-weight: 800; color: #2B241C; }
  .cpu-freq { font-size: 10px; color: #2B241C; opacity: 0.5; margin-top: 2px; }
  .cpu-feats { font-size: 9px; color: #2B241C; opacity: 0.4; line-height: 1.4; }

  .call-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid rgba(43,36,28,0.06); }
  .call-row:last-child { border-bottom: none; }
  .call-ic { width: 28px; height: 28px; border-radius: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; }
  .call-ic.in { background: rgba(45,209,231,0.12); }
  .call-ic.out { background: rgba(43,36,28,0.06); }
  .call-ic.missed { background: rgba(200,60,60,0.12); }
  .call-body { flex: 1; min-width: 0; }
  .call-name { font-size: 12px; color: #2B241C; opacity: 0.85; font-weight: 600; }
  .call-time { font-size: 9px; color: #2B241C; opacity: 0.4; margin-top: 1px; }
  .call-type { font-size: 10px; font-weight: 700; flex-shrink: 0; }
  .call-type.in { color: #1599AA; }
  .call-type.out { color: #2B241C; opacity: 0.5; }
  .call-type.missed { color: #c83c3c; }
  .call-dur { font-size: 10px; color: #2B241C; opacity: 0.4; flex-shrink: 0; min-width: 44px; text-align: right; }

  .sms-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid rgba(43,36,28,0.06); }
  .sms-row:last-child { border-bottom: none; }
  .sms-ic { width: 28px; height: 28px; border-radius: 14px; background: rgba(43,36,28,0.06); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; }
  .sms-body { flex: 1; min-width: 0; }
  .sms-from { font-size: 11px; color: #2B241C; opacity: 0.8; font-weight: 600; }
  .sms-time { font-size: 9px; color: #2B241C; opacity: 0.4; margin-top: 1px; }
  .sms-badge { font-size: 8px; font-weight: 700; padding: 3px 8px; border-radius: 10px; flex-shrink: 0; }
  .sms-badge.auth { background: rgba(45,209,231,0.12); color: #1599AA; }
  .sms-badge.spam { background: rgba(200,60,60,0.12); color: #c83c3c; }
  .sms-badge.friend { background: rgba(43,36,28,0.06); color: #2B241C; opacity: 0.6; }
  .sms-badge.family { background: rgba(45,209,231,0.08); color: #1599AA; }

  .spam-flag { display: flex; align-items: center; gap: 8px; padding: 10px; background: rgba(200,60,60,0.07); border: 1px solid rgba(200,60,60,0.12); border-radius: 14px; margin-bottom: 8px; }
  .spam-flag:last-child { margin-bottom: 0; }
  .spam-dot { width: 7px; height: 7px; border-radius: 50%; background: #c83c3c; flex-shrink: 0; animation: spam-pulse 1.5s infinite; }
  @keyframes spam-pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
  .spam-text { font-size: 11px; color: #2B241C; opacity: 0.75; flex: 1; }
  .spam-text .red { color: #c83c3c; font-weight: 700; }

  .actions-grid { display: flex; flex-wrap: wrap; gap: 8px; }
  .qa-btn { padding: 9px 13px; border-radius: 18px; background: rgba(240,232,218,0.6); border: 1px solid rgba(43,36,28,0.08); color: #2B241C; font-size: 11px; font-weight: 600; opacity: 0.85; display: flex; align-items: center; gap: 6px; }
  .qa-dot { width: 5px; height: 5px; border-radius: 50%; background: #2DD1E7; opacity: 0.6; }
  .qa-hint { font-size: 9px; color: #2B241C; opacity: 0.5; margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(43,36,28,0.06); }
  .qa-hint .accent { color: #1599AA; font-weight: 600; opacity: 1; }

  .signal-bars { display: flex; gap: 3px; align-items: flex-end; }
  .signal-bar { width: 3px; border-radius: 1px; background: rgba(43,36,28,0.1); }
  .signal-bar.active { background: #2DD1E7; }
js: |
  (function() {
    var tiles = document.querySelectorAll('.tile');
    tiles.forEach(function(t) {
      t.addEventListener('click', function(e) {
        if (t.classList.contains('expanded')) return;
        tiles.forEach(function(x) { x.classList.remove('expanded'); });
        t.classList.add('expanded');
      });
    });

    var rings = document.querySelectorAll('.ring-fg-m');
    rings.forEach(function(r) {
      var target = r.getAttribute('data-offset');
      r.style.strokeDashoffset = 101;
      setTimeout(function() { r.style.strokeDashoffset = target; }, 200);
    });
  })();
height: 780
interactive: true
---
<div class="dash">
  <div class="d-top">
    <div class="d-logo">GURU</div>
    <div class="d-device">Samsung A33 5G</div>
  </div>

  <div class="say-guru">
    <div class="say-guru-text">See something? <span class="guru">Just say it.</span> "GURU, turn my music down" "GURU, launch TikTok" "GURU, vibrate my phone"</div>
  </div>

  <div class="grid">

    <div class="tile">
      <div class="tile-top"><div class="tile-label">Battery</div><div class="tile-chev">⌄</div></div>
      <div style="display:flex;align-items:center;gap:10px;margin-top:6px">
        <div class="ring-mini">
          <svg width="42" height="42" style="transform:rotate(-90deg)">
            <circle cx="21" cy="21" r="16" fill="none" stroke="rgba(43,36,28,0.1)" stroke-width="4"></circle>
            <circle class="ring-fg-m" cx="21" cy="21" r="16" fill="none" stroke="#2DD1E7" stroke-width="4" stroke-linecap="round" stroke-dasharray="100.5" stroke-dashoffset="57" data-offset="57"></circle>
          </svg>
          <div class="ring-text-m">43%</div>
        </div>
        <div class="tile-sub">34°C<br>Discharging</div>
      </div>
      <div class="expand-content">
        <div class="e-kv"><div class="e-key">Status</div><div class="e-vv">Discharging</div></div>
        <div class="e-kv"><div class="e-key">Temperature</div><div class="e-vv">34°C</div></div>
        <div class="e-kv"><div class="e-key">Health</div><div class="e-vv">Good</div></div>
        <div class="e-kv"><div class="e-key">Uptime</div><div class="e-vv">3d 12h</div></div>
      </div>
    </div>

    <div class="tile">
      <div class="tile-top"><div class="tile-label">RAM</div><div class="tile-chev">⌄</div></div>
      <div class="tile-big">78%</div>
      <div class="bar-track"><div class="bar-fill" style="width:78%"></div></div>
      <div class="tile-sub">1.2GB free of 5.4GB</div>
      <div class="expand-content">
        <div class="e-kv"><div class="e-key">Total</div><div class="e-vv">5.4GB</div></div>
        <div class="e-kv"><div class="e-key">Available</div><div class="e-vv">1.2GB</div></div>
        <div class="e-kv"><div class="e-key">Cached</div><div class="e-vv">1.39GB</div></div>
        <div class="e-kv"><div class="e-key">Swap Total</div><div class="e-vv accent">8GB</div></div>
        <div class="e-kv"><div class="e-key">Swap Cached</div><div class="e-vv">391MB</div></div>
        <div class="e-kv"><div class="e-key">True Free</div><div class="e-vv">130MB</div></div>
      </div>
    </div>

    <div class="tile">
      <div class="tile-top"><div class="tile-label">Storage</div><div class="tile-chev">⌄</div></div>
      <div class="tile-big">28%</div>
      <div class="bar-track"><div class="bar-fill" style="width:28%"></div></div>
      <div class="tile-sub">78GB free of 109GB</div>
      <div class="expand-content">
        <div class="e-kv"><div class="e-key">Total</div><div class="e-vv">109GB</div></div>
        <div class="e-kv"><div class="e-key">Used</div><div class="e-vv">30GB</div></div>
        <div class="e-kv"><div class="e-key">Free</div><div class="e-vv accent">78GB</div></div>
        <div class="e-kv"><div class="e-key">Apps</div><div class="e-vv">34 installed</div></div>
      </div>
    </div>

    <div class="tile">
      <div class="tile-top"><div class="tile-label">CPU<span class="live-dot"></span></div><div class="tile-chev">⌄</div></div>
      <div class="tile-big">8 Cores</div>
      <div class="tile-sub">2.4GHz max · ARM v8</div>
      <div class="expand-content">
        <div class="cpu-grid">
          <div class="cpu-card"><div class="cpu-type">Efficiency</div><div class="cpu-cores">6</div><div class="cpu-freq">1.44GHz · 2.0GHz max</div></div>
          <div class="cpu-card"><div class="cpu-type">Performance</div><div class="cpu-cores">2</div><div class="cpu-freq">1.73GHz · 2.4GHz max</div></div>
        </div>
        <div class="cpu-feats">AES · SHA1 · SHA2 · CRC32 · Atomics · 512MB Dalvik heap</div>
      </div>
    </div>

    <div class="tile">
      <div class="tile-top"><div class="tile-label">Audio<span class="live-dot"></span></div><div class="tile-chev">⌄</div></div>
      <div class="tile-big accent">15/15</div>
      <div class="tile-sub">Music · Ringer Normal</div>
      <div class="expand-content">
        <div class="e-row"><div class="e-icon">🎵</div><div class="e-body"><div class="e-name">Music</div><div class="e-hint">"GURU, <span class="accent">turn my music down to 5</span>"</div></div><div class="e-val">15/15</div></div>
        <div class="e-row"><div class="e-icon">🔔</div><div class="e-body"><div class="e-name">Ring</div><div class="e-hint">"GURU, <span class="accent">set my ringtone to 8</span>"</div></div><div class="e-val">15/15</div></div>
        <div class="e-row"><div class="e-icon">💬</div><div class="e-body"><div class="e-name">Notifications</div><div class="e-hint">"GURU, <span class="accent">mute my notifications</span>"</div></div><div class="e-val">15/15</div></div>
        <div class="e-row"><div class="e-icon">⏰</div><div class="e-body"><div class="e-name">Alarm</div><div class="e-hint">"GURU, <span class="accent">set alarm volume to 10</span>"</div></div><div class="e-val">15/15</div></div>
        <div class="e-row"><div class="e-icon">⚙️</div><div class="e-body"><div class="e-name">System</div><div class="e-hint">"GURU, <span class="accent">lower system volume</span>"</div></div><div class="e-val">15/15</div></div>
        <div class="e-row"><div class="e-icon">📞</div><div class="e-body"><div class="e-name">Voice Call</div><div class="e-hint">"GURU, <span class="accent">turn call volume up</span>"</div></div><div class="e-val">15/15</div></div>
        <div class="e-row"><div class="e-icon">📱</div><div class="e-body"><div class="e-name">Ringer Mode</div><div class="e-hint">"GURU, <span class="accent">put my phone on vibrate</span>"</div></div><div class="e-val">Normal</div></div>
      </div>
    </div>

    <div class="tile">
      <div class="tile-top"><div class="tile-label">Network<span class="live-dot"></span></div><div class="tile-chev">⌄</div></div>
      <div class="tile-big accent">WiFi</div>
      <div class="tile-sub">5GHz · -58dBm · WPA2</div>
      <div class="expand-content">
        <div class="e-kv"><div class="e-key">WiFi</div><div class="e-vv accent">VM6588255</div></div>
        <div class="e-kv"><div class="e-key">Signal</div><div class="e-vv">-58 dBm (Strong)</div></div>
        <div class="e-kv"><div class="e-key">Band</div><div class="e-vv">5GHz Ch 124</div></div>
        <div class="e-kv"><div class="e-key">Security</div><div class="e-vv">WPA2</div></div>
        <div class="e-kv"><div class="e-key">SIM 1</div><div class="e-vv accent">O2 - UK</div></div>
        <div class="e-kv"><div class="e-key">SIM 2</div><div class="e-vv accent">Vodafone UK</div></div>
        <div class="e-kv"><div class="e-key">Network</div><div class="e-vv">LTE + IWLAN</div></div>
        <div class="e-kv"><div class="e-key">Nearby WiFi</div><div class="e-vv">3 networks</div></div>
      </div>
    </div>

    <div class="tile">
      <div class="tile-top"><div class="tile-label">Calls</div><div class="tile-chev">⌄</div></div>
      <div class="tile-big accent">256</div>
      <div class="tile-sub">Last: Mum · Today 09:42</div>
      <div class="expand-content">
        <div class="call-row"><div class="call-ic in">📞</div><div class="call-body"><div class="call-name">Mum</div><div class="call-time">Today 09:42</div></div><div class="call-type in">IN</div><div class="call-dur">54s</div></div>
        <div class="call-row"><div class="call-ic out">📞</div><div class="call-body"><div class="call-name">Sheldon Newman</div><div class="call-time">Yesterday 16:37</div></div><div class="call-type out">OUT</div><div class="call-dur">24m</div></div>
        <div class="call-row"><div class="call-ic out">📞</div><div class="call-body"><div class="call-name">Mum</div><div class="call-time">Yesterday 13:58</div></div><div class="call-type out">OUT</div><div class="call-dur">1m18</div></div>
        <div class="call-row"><div class="call-ic missed">📞</div><div class="call-body"><div class="call-name">Unknown (121)</div><div class="call-time">Yesterday 12:34</div></div><div class="call-type missed">MISS</div><div class="call-dur">0s</div></div>
        <div class="call-row"><div class="call-ic missed">📞</div><div class="call-body"><div class="call-name">Tony</div><div class="call-time">Yesterday 12:33</div></div><div class="call-type missed">MISS</div><div class="call-dur">14s</div></div>
        <div class="call-row"><div class="call-ic in">📞</div><div class="call-body"><div class="call-name">Mum &amp; Dad Sim</div><div class="call-time">Tue 18:54</div></div><div class="call-type in">IN</div><div class="call-dur">1m51</div></div>
      </div>
    </div>

    <div class="tile">
      <div class="tile-top"><div class="tile-label">Messages</div><div class="tile-chev">⌄</div></div>
      <div class="tile-big accent">50</div>
      <div class="tile-sub">Latest: Telegram auth</div>
      <div class="expand-content">
        <div class="sms-row"><div class="sms-ic">✈️</div><div class="sms-body"><div class="sms-from">Telegram</div><div class="sms-time">Yesterday 14:55</div></div><div class="sms-badge auth">AUTH</div></div>
        <div class="sms-row"><div class="sms-ic">💬</div><div class="sms-body"><div class="sms-from">Mum</div><div class="sms-time">Sat 09:26</div></div><div class="sms-badge family">FAMILY</div></div>
        <div class="sms-row"><div class="sms-ic">💬</div><div class="sms-body"><div class="sms-from">07729 (not saved)</div><div class="sms-time">Thu 22:19</div></div><div class="sms-badge spam">UNKNOWN</div></div>
        <div class="sms-row"><div class="sms-ic">💬</div><div class="sms-body"><div class="sms-from">Friend</div><div class="sms-time">Wed 23:32</div></div><div class="sms-badge friend">FRIEND</div></div>
        <div class="sms-row"><div class="sms-ic">🔐</div><div class="sms-body"><div class="sms-from">GoDaddy</div><div class="sms-time">Wed 13:39</div></div><div class="sms-badge auth">AUTH</div></div>
        <div class="sms-row"><div class="sms-ic">🔐</div><div class="sms-body"><div class="sms-from">Microsoft</div><div class="sms-time">Wed 10:27</div></div><div class="sms-badge auth">AUTH</div></div>
      </div>
    </div>

    <div class="tile">
      <div class="tile-top"><div class="tile-label">Spam Watch<span class="live-dot"></span></div><div class="tile-chev">⌄</div></div>
      <div class="tile-big red">2</div>
      <div class="tile-sub">Flags detected</div>
      <div class="expand-content">
        <div class="spam-flag"><div class="spam-dot"></div><div class="spam-text"><span class="red">Missed call 121</span> · Directory enquiries, charges apply</div></div>
        <div class="spam-flag"><div class="spam-dot"></div><div class="spam-text"><span class="red">Unknown number</span> · Texted asking "who is this?" possible scam</div></div>
      </div>
    </div>

    <div class="tile">
      <div class="tile-top"><div class="tile-label">Quick Actions<span class="live-dot"></span></div><div class="tile-chev">⌄</div></div>
      <div class="tile-big accent">10</div>
      <div class="tile-sub">Tap to see commands</div>
      <div class="expand-content">
        <div class="actions-grid">
          <div class="qa-btn"><div class="qa-dot"></div>Launch TikTok</div>
          <div class="qa-btn"><div class="qa-dot"></div>Launch WhatsApp</div>
          <div class="qa-btn"><div class="qa-dot"></div>Launch Instagram</div>
          <div class="qa-btn"><div class="qa-dot"></div>Launch Snapchat</div>
          <div class="qa-btn"><div class="qa-dot"></div>Send a text</div>
          <div class="qa-btn"><div class="qa-dot"></div>Call Mum</div>
          <div class="qa-btn"><div class="qa-dot"></div>Set an alarm</div>
          <div class="qa-btn"><div class="qa-dot"></div>Push notification</div>
          <div class="qa-btn"><div class="qa-dot"></div>Vibrate phone</div>
          <div class="qa-btn"><div class="qa-dot"></div>Speak something</div>
        </div>
        <div class="qa-hint">Say <span class="accent">"GURU, launch TikTok"</span> or <span class="accent">"GURU, call Mum"</span> and watch it happen</div>
      </div>
    </div>

    <div class="tile">
      <div class="tile-top"><div class="tile-label">Device</div><div class="tile-chev">⌄</div></div>
      <div class="tile-big">A33</div>
      <div class="tile-sub">Android 16 · 34 apps</div>
      <div class="expand-content">
        <div class="e-grid2">
          <div class="e-cell"><div class="e-cell-k">Model</div><div class="e-cell-v">SM-A336B</div></div>
          <div class="e-cell"><div class="e-cell-k">Android</div><div class="e-cell-v">v16 SDK 36</div></div>
          <div class="e-cell"><div class="e-cell-k">Screen</div><div class="e-cell-v">1080x2400</div></div>
          <div class="e-cell"><div class="e-cell-k">Build</div><div class="e-cell-v">BP2A.250605.031</div></div>
          <div class="e-cell"><div class="e-cell-k">Root</div><div class="e-cell-v">No</div></div>
          <div class="e-cell"><div class="e-cell-k">Bootloader</div><div class="e-cell-v">A336BXXSJGZG3</div></div>
          <div class="e-cell"><div class="e-cell-k">Patch</div><div class="e-cell-v">07-05-26</div></div>
          <div class="e-cell"><div class="e-cell-k">Apps</div><div class="e-cell-v">34</div></div>
        </div>
      </div>
    </div>

  </div>
</div>
```
