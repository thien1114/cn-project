function viewHome() {
  renderLayout(`
    <section class="card">
      <h2>Welcome to T1 Fan Site</h2>
      <p>T1 is one of the most iconic esports organizations in League of Legends history.</p>
    </section>
  `);
}

function viewPlayers() {
  renderLayout(`
    <section class="card">
      <h2>Current Roster</h2>
      <ul>
        <li>Faker – Mid Lane</li>
        <li>Doran – Top Lane</li>
        <li>Oner – Jungle</li>
        <li>Peyz – ADC</li>
        <li>Keria – Support</li>
      </ul>
    </section>
  `);
}

function viewHistory() {
  renderLayout(`
    <section class="card">
      <h2>Major Achievements</h2>
      <p>Multiple World Championships and LCK titles.</p>
    </section>
  `);
}
