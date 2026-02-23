function renderLayout(content, activePage) {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <header>
      <h1>T1 Fan Site</h1>
      <p class="tagline">Legacy. Precision. Champions.</p>
      <nav>
        <a href="#" data-page="home" class="${activePage === 'home' ? 'active' : ''}">Home</a>
        <a href="#" data-page="players" class="${activePage === 'players' ? 'active' : ''}">Players</a>
        <a href="#" data-page="history" class="${activePage === 'history' ? 'active' : ''}">History</a>
      </nav>
    </header>
    <main>${content}</main>
  `;

  app.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      navigate(link.dataset.page);
    });
  });
}

function viewHome() {
  renderLayout(`
    <section class="card">
      <h2>Welcome to T1 Fan Site</h2>
      <img class="feature-image" src="images/home.jpeg" alt="T1 2026 roster">
      <p>T1 is one of the most iconic esports organizations in League of Legends history.</p>
      <p>Founded in South Korea, T1 has dominated international competition and produced legendary players like Faker.</p>
    </section>

    <section class="card">
      <h2>Why T1?</h2>
      <p>T1 represents excellence, discipline, and legacy in esports.</p>
    </section>
  `, 'home');
}

function viewPlayers() {
  renderLayout(`
    <section class="card">
      <h2>Current Roster</h2>
      <div class="player-grid">
        <div class="player-card">
          <img class="player-image" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80" alt="Faker player portrait placeholder">
          <h3>Faker</h3>
          <p>Mid Lane</p>
        </div>

        <div class="player-card">
          <img class="player-image" src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=400&q=80" alt="Doran player portrait placeholder">
          <h3>Doran</h3>
          <p>Top Lane</p>
        </div>

        <div class="player-card">
          <img class="player-image" src="https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=400&q=80" alt="Oner player portrait placeholder">
          <h3>Oner</h3>
          <p>Jungle</p>
        </div>

        <div class="player-card">
          <img class="player-image" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" alt="Peyz player portrait placeholder">
          <h3>Peyz</h3>
          <p>ADC</p>
        </div>

        <div class="player-card">
          <img class="player-image" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" alt="Keria player portrait placeholder">
          <h3>Keria</h3>
          <p>Support</p>
        </div>
      </div>
    </section>
  `, 'players');
}

function viewHistory() {
  renderLayout(`
    <section class="card">
      <h2>S-Tier Tournament Results</h2>
      <img class="feature-image" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80" alt="Championship celebration and trophy lights">
      <p>A full record of T1's results at the highest level of competition — S-Tier tournaments only.</p>
      <table style="width:100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
        <thead>
          <tr style="border-bottom: 2px solid var(--accent); text-align: left; color: var(--accent);">
            <th style="padding: 8px;">Year</th>
            <th style="padding: 8px;">Tournament</th>
            <th style="padding: 8px;">Place</th>
            <th style="padding: 8px;">Result</th>
            <th style="padding: 8px;">Prize</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2025</td><td style="padding:8px">2025 World Championship</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 2</td><td style="padding:8px">$1,000,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2025</td><td style="padding:8px">LCK 2025 Season</td><td style="padding:8px">4th</td><td style="padding:8px">2 : 3</td><td style="padding:8px">$26,601</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2025</td><td style="padding:8px">Esports World Cup 2025</td><td style="padding:8px">3rd</td><td style="padding:8px">2 : 0</td><td style="padding:8px">$230,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2025</td><td style="padding:8px">2025 Mid-Season Invitational</td><td style="padding:8px">2nd</td><td style="padding:8px">2 : 3</td><td style="padding:8px">$300,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2025</td><td style="padding:8px">LCK Cup 2025</td><td style="padding:8px">5th–6th</td><td style="padding:8px">2 : 3</td><td style="padding:8px">—</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2024</td><td style="padding:8px">2024 World Championship</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 2</td><td style="padding:8px">$445,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2024</td><td style="padding:8px">LCK 2024 Summer</td><td style="padding:8px">3rd</td><td style="padding:8px">1 : 3</td><td style="padding:8px">$37,348</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2024</td><td style="padding:8px">Esports World Cup 2024</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 1</td><td style="padding:8px">$400,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2024</td><td style="padding:8px">2024 Mid-Season Invitational</td><td style="padding:8px">3rd</td><td style="padding:8px">2 : 3</td><td style="padding:8px">$30,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2024</td><td style="padding:8px">LCK 2024 Spring</td><td style="padding:8px">2nd</td><td style="padding:8px">2 : 3</td><td style="padding:8px">$72,432</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2023</td><td style="padding:8px">2023 World Championship</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 0</td><td style="padding:8px">$445,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2023</td><td style="padding:8px">LCK 2023 Summer</td><td style="padding:8px">2nd</td><td style="padding:8px">0 : 3</td><td style="padding:8px">$74,617</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2023</td><td style="padding:8px">2023 Mid-Season Invitational</td><td style="padding:8px">3rd</td><td style="padding:8px">1 : 3</td><td style="padding:8px">$30,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2023</td><td style="padding:8px">LCK 2023 Spring</td><td style="padding:8px">2nd</td><td style="padding:8px">1 : 3</td><td style="padding:8px">$75,962</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2022</td><td style="padding:8px">2022 World Championship</td><td style="padding:8px">2nd</td><td style="padding:8px">2 : 3</td><td style="padding:8px">$333,750</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2022</td><td style="padding:8px">LCK 2022 Summer</td><td style="padding:8px">2nd</td><td style="padding:8px">0 : 3</td><td style="padding:8px">$74,506</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2022</td><td style="padding:8px">2022 Mid-Season Invitational</td><td style="padding:8px">2nd</td><td style="padding:8px">2 : 3</td><td style="padding:8px">$50,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2022</td><td style="padding:8px">LCK 2022 Spring</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 1</td><td style="padding:8px">$163,965</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2021</td><td style="padding:8px">2021 World Championship</td><td style="padding:8px">3rd–4th</td><td style="padding:8px">2 : 3</td><td style="padding:8px">$178,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2021</td><td style="padding:8px">LCK 2021 Summer</td><td style="padding:8px">2nd</td><td style="padding:8px">1 : 3</td><td style="padding:8px">$86,034</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2021</td><td style="padding:8px">LCK 2021 Spring</td><td style="padding:8px">4th</td><td style="padding:8px">0 : 3</td><td style="padding:8px">$22,302</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2020</td><td style="padding:8px">LCK 2020 Summer</td><td style="padding:8px">5th</td><td style="padding:8px">1 : 2</td><td style="padding:8px">$12,632</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2020</td><td style="padding:8px">2020 Mid-Season Cup</td><td style="padding:8px">7th–8th</td><td style="padding:8px">Grp S.</td><td style="padding:8px">$20,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2020</td><td style="padding:8px">LCK 2020 Spring</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 0</td><td style="padding:8px">$81,196</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2019</td><td style="padding:8px">2019 World Championship</td><td style="padding:8px">3rd–4th</td><td style="padding:8px">1 : 3</td><td style="padding:8px">$155,750</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2019</td><td style="padding:8px">LCK 2019 Summer</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 1</td><td style="padding:8px">$82,874</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2019</td><td style="padding:8px">2019 Mid-Season Invitational</td><td style="padding:8px">3rd–4th</td><td style="padding:8px">2 : 3</td><td style="padding:8px">$100,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2019</td><td style="padding:8px">LCK 2019 Spring</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 0</td><td style="padding:8px">$87,655</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2017</td><td style="padding:8px">2017 World Championship</td><td style="padding:8px">2nd</td><td style="padding:8px">0 : 3</td><td style="padding:8px">$667,841</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2017</td><td style="padding:8px">LCK 2017 Summer</td><td style="padding:8px">2nd</td><td style="padding:8px">1 : 3</td><td style="padding:8px">$53,255</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2017</td><td style="padding:8px">2017 Mid-Season Invitational</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 1</td><td style="padding:8px">$676,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2017</td><td style="padding:8px">LCK 2017 Spring</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 0</td><td style="padding:8px">$87,979</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2016</td><td style="padding:8px">2016 World Championship</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 2</td><td style="padding:8px">$2,028,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2016</td><td style="padding:8px">LCK 2016 Summer</td><td style="padding:8px">3rd</td><td style="padding:8px">2 : 3</td><td style="padding:8px">$26,862</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2016</td><td style="padding:8px">2016 Mid-Season Invitational</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 0</td><td style="padding:8px">$250,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2016</td><td style="padding:8px">LCK 2016 Spring</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 1</td><td style="padding:8px">$87,280</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2016</td><td style="padding:8px">IEM Season X - World Championship</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 0</td><td style="padding:8px">$50,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2015</td><td style="padding:8px">2015 World Championship</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 1</td><td style="padding:8px">$1,000,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2015</td><td style="padding:8px">LCK 2015 Summer</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 0</td><td style="padding:8px">$84,951</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2015</td><td style="padding:8px">2015 Mid-Season Invitational</td><td style="padding:8px">2nd</td><td style="padding:8px">2 : 3</td><td style="padding:8px">$50,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2015</td><td style="padding:8px">LCK 2015 Spring</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 0</td><td style="padding:8px">$92,868</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2013</td><td style="padding:8px">Season 3 World Championship</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 0</td><td style="padding:8px">$1,000,000</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2013</td><td style="padding:8px">Champions 2013 Summer</td><td style="padding:8px">🥇 1st</td><td style="padding:8px">3 : 2</td><td style="padding:8px">$72,076</td></tr>
          <tr style="border-bottom:1px solid #333"><td style="padding:8px;color:#888">2013</td><td style="padding:8px">Champions 2013 Spring</td><td style="padding:8px">3rd</td><td style="padding:8px">3 : 0</td><td style="padding:8px">$21,258</td></tr>
        </tbody>
      </table>
    </section>
  `, 'history');
}

function navigate(page) {
  if (page === 'home') viewHome();
  else if (page === 'players') viewPlayers();
  else if (page === 'history') viewHistory();
  else viewHome();
}

document.addEventListener('DOMContentLoaded', () => {
  navigate('home');
});