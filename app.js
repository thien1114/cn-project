const players = [
  {
    id: 'doran',
    name: 'Doran',
    realName: 'Choi Hyeon-joon',
    role: 'Top Lane',
    nationality: '🇰🇷 South Korean',
    age: 23,
    image: 'https://images.squarespace-cdn.com/content/v1/62d09f54a49d6f1c78455cce/0aef0418-a156-44be-809e-ea3bc14f6def/Doran.png?format=2500w',
    bio: `Choi Hyeon-joon, known as "Doran", is T1's stalwart top laner. Known for his calm and consistent playstyle, Doran brings stability and reliability to T1's top side.

Doran joined T1's main roster and quickly proved himself as one of the best top laners in the LCK. His champion pool is wide and versatile, allowing the team to draft flexibly around him. Whether playing carry champions or tanks, Doran delivers consistent performances game after game.

Despite playing alongside legendary teammates, Doran has steadily built a reputation as a world-class top laner — someone opponents cannot ignore and teammates can always rely on.`,
  },
  {
    id: 'oner',
    name: 'Oner',
    realName: 'Moon Hyeon-joon',
    role: 'Jungle',
    nationality: '🇰🇷 South Korean',
    age: 22,
    image: 'https://images.squarespace-cdn.com/content/v1/62d09f54a49d6f1c78455cce/4f17e9d7-e7aa-4b43-b2a6-9fb833a83821/Oner.png?format=2500w',
    bio: `Moon Hyeon-joon, known as "Oner", is T1's explosive and aggressive jungler. Since joining T1's main roster, Oner has become one of the most impactful junglers in the world.

Oner is known for his high-tempo playstyle — constantly pressuring the map, making early plays, and enabling his laners to get ahead. His synergy with Faker in the mid-jungle has produced some of the most dominant combinations in LCK history.

Still young and continuing to improve, Oner has already proven himself on the international stage. His relentless energy and willingness to make bold plays make him one of the most exciting players to watch.`,
  },
  {
    id: 'faker',
    name: 'Faker',
    realName: 'Lee Sang-hyeok',
    role: 'Mid Lane',
    nationality: '🇰🇷 South Korean',
    age: 29,
    image: 'https://images.squarespace-cdn.com/content/v1/62d09f54a49d6f1c78455cce/de78a12c-0ffc-41e4-801c-0de20505b509/Faker.png?format=2500w',
    bio: `Lee Sang-hyeok, known worldwide as "Faker", is widely regarded as the greatest League of Legends player of all time. Born on May 7, 1996, in Seoul, South Korea, Faker joined T1 (then SK Telecom T1) in 2013 at just 17 years old and immediately made his mark on the world stage.

His debut season was nothing short of legendary — he won the Season 3 World Championship in his very first year as a professional player. What followed was a career of unparalleled dominance: multiple World Championship titles, LCK championships, and countless MVP awards.

Faker is celebrated not just for his mechanical skill, but for his game sense, adaptability, and longevity. While other players have risen and fallen, Faker has remained at the top of professional play for over a decade — a feat virtually unheard of in esports.

Off the rift, Faker is known for his humble personality, his dedication to practice, and his unwavering loyalty to T1. He is more than a player — he is a global icon who has elevated esports to mainstream recognition worldwide.`,
  },
  {
    id: 'peyz',
    name: 'Peyz',
    realName: 'Kim Su-hwan',
    role: 'ADC',
    nationality: '🇰🇷 South Korean',
    age: 20,
    image: 'https://images.squarespace-cdn.com/content/v1/62d09f54a49d6f1c78455cce/c80912d5-e20e-4ab3-a7bc-74f3eea16931/peyz.jpg?format=2500w',
    bio: `Kim Su-hwan, known as "Peyz", is T1's bot lane carry and one of the most exciting young ADC talents in the LCK. Despite his young age, Peyz plays with the confidence and precision of a seasoned veteran.

Peyz joined T1 as a highly anticipated prospect and has lived up to the hype. His mechanical skill, game sense, and ability to perform under pressure have quickly made him one of the most feared ADCs in competitive play.

With multiple championships already under his belt at such a young age, the future looks incredibly bright for Peyz. Many believe he has the potential to be one of the all-time great ADC players in League of Legends history.`,
  },
  {
    id: 'keria',
    name: 'Keria',
    realName: 'Ryu Min-seok',
    role: 'Support',
    nationality: '🇰🇷 South Korean',
    age: 22,
    image: 'https://images.squarespace-cdn.com/content/v1/62d09f54a49d6f1c78455cce/cbc62645-f9f4-464c-9ee2-8620de9b3c32/Keria.png?format=2500w',
    bio: `Ryu Min-seok, known as "Keria", is widely considered one of the best supports in the world. His playmaking ability, mechanical precision, and game-changing performances have made him a cornerstone of T1's success.

Keria is renowned for his aggressive, carry-oriented support style. He doesn't just protect his ADC — he creates opportunities, makes bold roams, and sets up plays that change the course of games. His champion pool spans the full range of support archetypes, making him near-impossible to prepare for.

Since joining T1, Keria has won World Championships and established himself as the gold standard for the support position. Many analysts and fans consider him among the greatest supports to ever play the game.`,
  },
];

function renderLayout(content, activePage) {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <header>
      <div class="header-inner">
        <div class="logo">
          <span class="logo-t1">T1</span>
          <span class="logo-text">Fan Site</span>
        </div>
        <nav>
          <a href="#" data-page="home" class="${activePage === 'home' ? 'active' : ''}">Home</a>
          <a href="#" data-page="players" class="${activePage === 'players' ? 'active' : ''}">Players</a>
          <a href="#" data-page="history" class="${activePage === 'history' ? 'active' : ''}">History</a>
          <a href="#" data-page="network" class="${activePage === 'network' ? 'active' : ''}">Network</a>
          </nav>
      </div>
    </header>
    <main class="blurred">${content}</main>
  `;

  const main = app.querySelector('main');
  main.addEventListener('mouseenter', () => main.classList.remove('blurred'));
  main.addEventListener('mouseleave', () => main.classList.add('blurred'));

  app.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      navigate(link.dataset.page);
    });
  });

  // Spotlight cards on home → go directly to that player's profile
  app.querySelectorAll('.spotlight-card[data-player]').forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const player = players.find(p => p.id === card.dataset.player);
      if (player) viewPlayerDetail(player);
    });
  });

  // Player cards → go to detail page
  app.querySelectorAll('.player-card[data-player], .roster-card[data-player], .roster-row[data-player]').forEach((card) => {
    card.addEventListener('click', () => {
      const player = players.find(p => p.id === card.dataset.player);
      if (player) viewPlayerDetail(player);
    });
  });

  // Back button on detail page
  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.addEventListener('click', () => viewPlayers());

  initScrollAnimations();
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + (el.dataset.suffix || '');
      if (current >= target) clearInterval(timer);
    }, 30);
  });
}

function viewHome() {
  renderLayout(`
    <section class="hero reveal">
      <div class="hero-badge">EST. 2012 · SEOUL, SOUTH KOREA</div>
      <h1 class="hero-title">
        <span class="hero-line">LIMITLESS</span>
        <span class="hero-line accent-line">NEVER ENDING</span>
        <span class="hero-line">STORY</span>
      </h1>
      <p class="hero-sub">The most decorated esports organization in League of Legends history.</p>
      <div class="hero-divider"></div>
    </section>

    <section class="stats-section reveal">
      <div class="stat-item">
        <div class="stat-number" data-target="6" data-suffix="x">0x</div>
        <div class="stat-label">World Championships</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <div class="stat-number" data-target="13" data-suffix="">0</div>
        <div class="stat-label">Years Dominating</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <div class="stat-number" data-target="1" data-suffix="">#1</div>
        <div class="stat-label">Global Ranking</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <div class="stat-number" data-target="10" data-suffix="M+">0M+</div>
        <div class="stat-label">Global Fans</div>
      </div>
    </section>

    <section class="about-section reveal">
      <div class="about-text">
        <div class="section-label">About T1</div>
        <h2 class="section-title">A Legacy Forged in Competition</h2>
        <p>T1 is not just a team — it's a dynasty. Founded in South Korea in 2012, T1 has redefined what excellence looks like in esports. With legendary players, world-class coaching staff, and a culture built on relentless improvement, T1 has become the gold standard of competitive League of Legends.</p>
        <p>At the heart of T1 is <strong>Faker</strong> — Lee Sang-hyeok — widely regarded as the greatest League of Legends player of all time. His career with T1 spans over a decade of dominance, innovation, and championship glory.</p>
      </div>
      <div class="about-image-wrap">
        <img src="images/roster.jpg" alt="T1 Roster" class="about-img"/>
        <div class="about-img-caption">T1 2026 Roster</div>
      </div>
    </section>

    <section class="spotlight-section reveal">
      <div class="section-label">Player Spotlight</div>
      <h2 class="section-title">Meet the Roster</h2>
      <div class="spotlight-grid">
        <div class="spotlight-card" data-player="doran">
          <div class="spotlight-role">Top Lane</div>
          <div class="spotlight-name">Doran</div>
          <div class="spotlight-desc">The rock of T1's top side, known for his consistent and versatile champion pool.</div>
          <div class="spotlight-hint">View Profile →</div>
        </div>
        <div class="spotlight-card" data-player="oner">
          <div class="spotlight-role">Jungle</div>
          <div class="spotlight-name">Oner</div>
          <div class="spotlight-desc">An aggressive and impactful jungler who sets the pace of every game.</div>
          <div class="spotlight-hint">View Profile →</div>
        </div>
        <div class="spotlight-card featured" data-player="faker">
          <div class="spotlight-role">Mid Lane</div>
          <div class="spotlight-name">Faker</div>
          <div class="spotlight-desc">The Unkillable Demon King. The greatest of all time. A legend beyond esports.</div>
          <div class="goat-badge">G.O.A.T</div>
          <div class="spotlight-hint">View Profile →</div>
        </div>
        <div class="spotlight-card" data-player="peyz">
          <div class="spotlight-role">ADC</div>
          <div class="spotlight-name">Peyz</div>
          <div class="spotlight-desc">A rising star with exceptional mechanics and a hunger for titles.</div>
          <div class="spotlight-hint">View Profile →</div>
        </div>
        <div class="spotlight-card" data-player="keria">
          <div class="spotlight-role">Support</div>
          <div class="spotlight-name">Keria</div>
          <div class="spotlight-desc">One of the best supports in the world, a playmaker and protector in one.</div>
          <div class="spotlight-hint">View Profile →</div>
        </div>
      </div>
    </section>

    <section class="social-section reveal">
      <div class="section-label">Follow T1</div>
      <h2 class="section-title">Stay Connected</h2>
      <div class="social-grid">
        <a href="https://twitter.com/T1LoL" target="_blank" class="social-card">
          <div class="social-icon">𝕏</div>
          <div class="social-name">Twitter / X</div>
          <div class="social-handle">@T1LoL</div>
        </a>
        <a href="https://www.youtube.com/@SKTT1" target="_blank" class="social-card">
          <div class="social-icon">▶</div>
          <div class="social-name">YouTube</div>
          <div class="social-handle">@SKTT1</div>
        </a>
        <a href="https://www.instagram.com/t1lol/" target="_blank" class="social-card">
          <div class="social-icon">◈</div>
          <div class="social-name">Instagram</div>
          <div class="social-handle">@t1lol</div>
        </a>
      </div>
    </section>
  `, 'home');
}

function viewPlayers() {
  renderLayout(`
    <section class="roster-section">
      <div class="roster-header reveal">
        <div class="section-label">2026 Season</div>
        <h2 class="section-title">Current Roster</h2>
      </div>
      <div class="roster-list">
        ${players.map((p, i) => `
          <div class="roster-row reveal" data-player="${p.id}" style="transition-delay: ${i * 0.1}s">
            <div class="roster-row-number">0${i + 1}</div>
            <div class="roster-row-img-wrap">
              <img class="roster-row-img" src="${p.image}" alt="${p.name}">
            </div>
            <div class="roster-row-info">
              <div class="roster-role-badge">${p.role}</div>
              <div class="roster-row-name">${p.name}</div>
              <div class="roster-row-realname">${p.realName}</div>
            </div>
            <div class="roster-row-cta">View Profile →</div>
          </div>
        `).join('')}
      </div>
    </section>
  `, 'players');
}

function viewPlayerDetail(player, push = true) {
  if (push) history.pushState({ page: 'player', playerId: player.id }, '', `#player-${player.id}`);
  renderLayout(`
    <section class="player-detail reveal">
      <button class="back-btn" id="backBtn">← Back to Players</button>
      <div class="detail-hero">
        <div class="detail-image-wrap">
          <img class="detail-image" src="${player.image}" alt="${player.name}">
        </div>
        <div class="detail-info">
          <div class="detail-role">${player.role}</div>
          <h1 class="detail-name">${player.name}</h1>
          <div class="detail-realname">${player.realName}</div>
          <div class="detail-meta">
            <div class="detail-meta-item">
              <span class="meta-label">Nationality</span>
              <span class="meta-value">${player.nationality}</span>
            </div>
            <div class="detail-meta-item">
              <span class="meta-label">Age</span>
              <span class="meta-value">${player.age} years old</span>
            </div>
            <div class="detail-meta-item">
              <span class="meta-label">Team</span>
              <span class="meta-value">T1</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-bio">
        <div class="section-label">Biography</div>
        ${player.bio.split('\n\n').map(para => `<p>${para}</p>`).join('')}
      </div>
    </section>
  `, 'players');
}

function viewHistory() {
  const historyData = [
    { year: 2025, events: [
      { name: '2025 World Championship', place: '1st', result: '3:2', isWorld: true },
      { name: '2025 Mid-Season Invitational', place: '2nd', result: '2:3', isWorld: false },
      { name: 'Esports World Cup 2025', place: '3rd', result: '2:0', isWorld: false },
      { name: 'LCK 2025 Season', place: '4th', result: '2:3', isWorld: false },
    ]},
    { year: 2024, events: [
      { name: '2024 World Championship', place: '1st', result: '3:2', isWorld: true },
      { name: 'Esports World Cup 2024', place: '1st', result: '3:1', isWorld: false },
      { name: 'LCK 2024 Spring', place: '2nd', result: '2:3', isWorld: false },
      { name: '2024 Mid-Season Invitational', place: '3rd', result: '2:3', isWorld: false },
      { name: 'LCK 2024 Summer', place: '3rd', result: '1:3', isWorld: false },
    ]},
    { year: 2023, events: [
      { name: '2023 World Championship', place: '1st', result: '3:0', isWorld: true },
      { name: 'LCK 2023 Summer', place: '2nd', result: '0:3', isWorld: false },
      { name: 'LCK 2023 Spring', place: '2nd', result: '1:3', isWorld: false },
      { name: '2023 Mid-Season Invitational', place: '3rd', result: '1:3', isWorld: false },
    ]},
    { year: 2022, events: [
      { name: 'LCK 2022 Spring', place: '1st', result: '3:1', isWorld: false },
      { name: '2022 World Championship', place: '2nd', result: '2:3', isWorld: true },
      { name: '2022 Mid-Season Invitational', place: '2nd', result: '2:3', isWorld: false },
      { name: 'LCK 2022 Summer', place: '2nd', result: '0:3', isWorld: false },
    ]},
    { year: 2021, events: [
      { name: '2021 World Championship', place: '3rd', result: '2:3', isWorld: true },
      { name: 'LCK 2021 Summer', place: '2nd', result: '1:3', isWorld: false },
      { name: 'LCK 2021 Spring', place: '4th', result: '0:3', isWorld: false },
    ]},
    { year: 2019, events: [
      { name: 'LCK 2019 Summer', place: '1st', result: '3:1', isWorld: false },
      { name: 'LCK 2019 Spring', place: '1st', result: '3:0', isWorld: false },
      { name: '2019 World Championship', place: '3rd', result: '1:3', isWorld: true },
      { name: '2019 Mid-Season Invitational', place: '3rd', result: '2:3', isWorld: false },
    ]},
    { year: 2017, events: [
      { name: '2017 Mid-Season Invitational', place: '1st', result: '3:1', isWorld: false },
      { name: 'LCK 2017 Spring', place: '1st', result: '3:0', isWorld: false },
      { name: '2017 World Championship', place: '2nd', result: '0:3', isWorld: true },
      { name: 'LCK 2017 Summer', place: '2nd', result: '1:3', isWorld: false },
    ]},
    { year: 2016, events: [
      { name: '2016 World Championship', place: '1st', result: '3:2', isWorld: true },
      { name: '2016 Mid-Season Invitational', place: '1st', result: '3:0', isWorld: false },
      { name: 'LCK 2016 Spring', place: '1st', result: '3:1', isWorld: false },
      { name: 'IEM Season X World Championship', place: '1st', result: '3:0', isWorld: false },
      { name: 'LCK 2016 Summer', place: '3rd', result: '2:3', isWorld: false },
    ]},
    { year: 2015, events: [
      { name: '2015 World Championship', place: '1st', result: '3:1', isWorld: true },
      { name: 'LCK 2015 Summer', place: '1st', result: '3:0', isWorld: false },
      { name: 'LCK 2015 Spring', place: '1st', result: '3:0', isWorld: false },
      { name: '2015 Mid-Season Invitational', place: '2nd', result: '2:3', isWorld: false },
    ]},
    { year: 2013, events: [
      { name: 'Season 3 World Championship', place: '1st', result: '3:0', isWorld: true },
      { name: 'Champions 2013 Summer', place: '1st', result: '3:2', isWorld: false },
      { name: 'Champions 2013 Spring', place: '3rd', result: '3:0', isWorld: false },
    ]},
  ];

  const placeIcon = (p) => p === '1st' ? '🥇' : p === '2nd' ? '🥈' : p === '3rd' ? '🥉' : '';
  const placeClass = (p) => p === '1st' ? 'place-gold' : p === '2nd' ? 'place-silver' : 'place-other';

  renderLayout(`
    <section class="timeline-section">
      <div class="timeline-header reveal">
        <div class="section-label">Est. 2012 · Seoul</div>
        <h2 class="section-title">Championship History</h2>
        <p class="timeline-sub">A legacy written in trophies — S-Tier tournaments only.</p>
      </div>

      <div class="timeline">
        ${historyData.map((block, yi) => `
          <div class="tl-block reveal" style="transition-delay:${yi * 0.07}s">
            <div class="tl-year-col">
              <div class="tl-year">${block.year}</div>
              <div class="tl-spine"></div>
            </div>
            <div class="tl-events">
              ${block.events.map(e => `
                <div class="tl-event ${e.isWorld ? 'tl-world' : ''} ${e.place === '1st' ? 'tl-win' : ''}">
                  ${e.isWorld ? '<span class="tl-worlds-tag">🏆 World Championship</span>' : ''}
                  <div class="tl-event-name">${e.name}</div>
                  <div class="tl-event-footer">
                    <span class="tl-place ${placeClass(e.place)}">${placeIcon(e.place)} ${e.place}</span>
                    <span class="tl-result">${e.result}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `, 'history');
}

function viewNetwork() {
  renderLayout(`
    <section class="network-section">
      <div class="reveal">
        <div class="section-label">Deployment</div>
        <h2 class="section-title">Networking Concepts</h2>
        <p class="section-intro">
          This page explains how core networking technologies work in the context of this T1 Fan Site,
          hosted on GitHub Pages. These are not textbook definitions — each concept is tied directly to how this site is deployed and accessed.
        </p>
      </div>

      <!-- DNS -->
      <div class="net-block reveal">
        <div class="section-label">01 — DNS</div>
        <h3>Domain Name System</h3>
        <p>
          When you visit <strong>thien1114.github.io/cn-project</strong>, your browser has no idea where that site actually lives on the internet.
          It only understands IP addresses — not human-readable names. DNS (Domain Name System) bridges that gap, acting as the internet's phone book
          by translating the domain into a real IP address.
        </p>
        <p>Here's exactly what happens when someone loads this site:</p>
        <ol>
          <li>You type <code>thien1114.github.io/cn-project</code> into your browser.</li>
          <li>Your browser checks its local cache — if it's been visited recently, it skips the lookup.</li>
          <li>If not cached, it queries a DNS resolver (in this case <code>192.168.1.1</code>) the local home router, which forwards the request to the ISP's upstream resolver..</li>
          <li>The resolver finds GitHub's A records and returns one of GitHub Pages' IP addresses.</li>
          <li>Your browser connects to that IP and the site loads.</li>
        </ol>
        <h4>DNS Lookup — Live Example</h4>
        <img src="images/nslookup.png" alt="DNS dig output for thien1114.github.io" style="width:100%; border-radius:4px; border: 0px solid var(--border); margin: 16px 0;">
        <p>
          The answer is <b>"non-authoritative"</b> because it came from the local router's cache(<code>192.68.1.1</code>),which forwarded the query to the ISP's upstream resolver — not directly from GitHub's nameserver. Four IP addresses are returned — GitHub Pages uses anycast routing via the Fastly CDN, so the browser connects to whichever server is geographically closest, improving speed and redundancy. DNS queries travel over UDP on port 53.
          
        </p>
      </div>

      <!-- IP Addressing -->
      <div class="net-block reveal">
        <div class="section-label">02 — IP Addressing</div>
        <h3>IPv4 &amp; IPv6 Addresses</h3>
        <p>
          GitHub Pages serves this site through a global CDN (Content Delivery Network). The domain resolves to one of several IP addresses
          depending on your location and network. GitHub supports both <strong>IPv4</strong> and <strong>IPv6</strong>.
        </p>
        <img src="images/addresses.png" alt="GitHub Page IP Addresses" style="width:100%; border-radius:4px; border: 0px solid var(--border); margin: 16px 0;">
        <p>
          <strong>IPv4</strong> uses 32-bit addresses (e.g. <code>185.199.109.153</code>) and has been the backbone of the internet since the 1980s.
        </p>
        <p>
          <strong>IPv6</strong> uses 128-bit addresses (e.g. <code>2606:50c0:8000::153</code>) and was introduced to handle the global exhaustion of IPv4 addresses.
        </p>
        <p>
          GitHub Pages supports both, so this site is reachable from virtually any device or network, regardless of which protocol it uses.
        </p>
      </div>

      <!-- Protocols -->
      <div class="net-block reveal">
        <div class="section-label">03 — Protocols</div>
        <h3>HTTP, HTTPS &amp; TLS</h3>
        <p>
          This site is served exclusively over <strong>HTTPS</strong> — HyperText Transfer Protocol Secure.
          GitHub Pages enforces HTTPS by default and automatically redirects any plain HTTP request to HTTPS.
          All data transmitted between your browser and GitHub's servers is encrypted using <strong>TLS (Transport Layer Security)</strong>.
        </p>
        <p>
          The SSL/TLS certificate is issued automatically via <strong>Let's Encrypt</strong>, a free and trusted certificate authority.
          This certificate cryptographically proves you're talking to GitHub's servers and not an imposter — protecting against man-in-the-middle attacks.
        </p>

        <h4>Real Headers — thien1114.github.io</h4>
<p>The screenshot below is captured directly from Chrome DevTools on this site. From here, we can notice some important protocols:</p>
<ul style="color:var(--text-muted); font-size:15px; font-weight:300; line-height:2; padding-left:22px; margin-bottom:16px;">
  <li><strong style="color:var(--text)">Request URL</strong> — <code>https://thien1114.github.io/cn-project/</code> confirms HTTPS is being used</li>
  <li><strong style="color:var(--text)">Status Code 200 OK</strong> — the page was delivered successfully on a fresh request</li>
  <li><strong style="color:var(--text)">Status Code 304 Not Modified</strong> — the browser already had a cached copy, so GitHub skipped re-sending the file</li>
  <li><strong style="color:var(--text)">Remote Address 185.199.109.153:443</strong> — port 443 confirms HTTPS; this IP matches GitHub Pages' CDN</li>
  <li><strong style="color:var(--text)">Cache-Control: max-age=600</strong> — page is cached for 10 minutes</li>
  <li><strong style="color:var(--text)">Via: 1.1 varnish</strong> — GitHub uses Fastly's CDN (Varnish cache) to serve the site globally</li>
  <li><strong style="color:var(--text)">:scheme: https</strong> — confirms the request was made over HTTPS/HTTP2</li>
  <li><strong style="color:var(--text)">strict-transport-security: max-age=31557600</strong> — forces the browser to use HTTPS for this domain for 1 year (HSTS)</li>
</ul>
<img src="images/devtools-headers.png" alt="Chrome DevTools headers for thien1114.github.io" style="width:100%; border-radius:4px; border:1px solid var(--border); margin:16px 0;">
      </div>

    </section>
  `, 'network');
}
function navigate(page, push = true) {
  if (push) history.pushState({ page }, '', `#${page}`);
  if (page === 'home') viewHome();
  else if (page === 'players') viewPlayers();
  else if (page === 'history') viewHistory();
  else if (page === 'network') viewNetwork();
  else viewHome();
}

window.addEventListener('popstate', (event) => {
  const state = event.state;
  if (!state) return navigate('home', false);
  if (state.page === 'player') {
    const player = players.find(p => p.id === state.playerId);
    if (player) viewPlayerDetail(player, false);
  } else {
    navigate(state.page, false);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const hash = location.hash.replace('#', '');
  if (hash.startsWith('player-')) {
    const playerId = hash.replace('player-', '');
    const player = players.find(p => p.id === playerId);
    if (player) return viewPlayerDetail(player);
  }
  const page = hash || 'home';
  navigate(page);
});