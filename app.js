function viewHome() {
  renderLayout(`
    <section class="card">
      <h2>Welcome to T1 Fan Site</h2>
      <p>T1 is one of the most iconic esports organizations in League of Legends history.</p>
      <p>Founded in South Korea, T1 has dominated international competition and produced legendary players like Faker.</p>
    </section>

    <section class="card">
      <h2>Why T1?</h2>
      <p>T1 represents excellence, discipline, and legacy in esports.</p>
    </section>
  `);
}

function viewPlayers() {
  renderLayout(`
    <section class="card">
      <h2>Current Roster</h2>
      <div class="player-grid">

        <div class="player-card">
          <h3>Faker</h3>
          <p>Mid Lane</p>
        </div>

        <div class="player-card">
          <h3>Doran</h3>
          <p>Top Lane</p>
        </div>

        <div class="player-card">
          <h3>Oner</h3>
          <p>Jungle</p>
        </div>

        <div class="player-card">
          <h3>Peyz</h3>
          <p>ADC</p>
        </div>

        <div class="player-card">
          <h3>Keria</h3>
          <p>Support</p>
        </div>

      </div>
    </section>
  `);
}

function viewHistory() {
  renderLayout(`
    <section class="card">
      <h2>Major Achievements</h2>
      <ul>
        <li>Multiple League of Legends World Championships</li>
        <li>Multiple LCK Titles</li>
        <li>International tournament dominance</li>
      </ul>
    </section>
  `);
}

function navigate(page) {
  if (page === 'home') viewHome();
  else if (page === 'players') viewPlayers();
  else if (page === 'history') viewHistory();
}