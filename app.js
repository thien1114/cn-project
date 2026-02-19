
function renderLayout(content) {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <header>
      <h1>T1 Fan Site</h1>
      <p class="tagline">Legacy. Precision. Champions.</p>
      <nav>
        <a href="#" data-page="home">Home</a>
        <a href="#" data-page="players">Players</a>
        <a href="#" data-page="history">History</a>
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
+      <img class="feature-image" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80" alt="Esports stage lights and arena atmosphere">
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
-
         <div class="player-card">
+          <img class="player-image" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80" alt="Faker player portrait placeholder">
           <h3>Faker</h3>
           <p>Mid Lane</p>
         </div>
 
         <div class="player-card">
+          <img class="player-image" src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=400&q=80" alt="Doran player portrait placeholder">
           <h3>Doran</h3>
           <p>Top Lane</p>
         </div>
 
         <div class="player-card">
+          <img class="player-image" src="https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=400&q=80" alt="Oner player portrait placeholder">
           <h3>Oner</h3>
           <p>Jungle</p>
         </div>
 
         <div class="player-card">
+          <img class="player-image" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" alt="Peyz player portrait placeholder">
           <h3>Peyz</h3>
           <p>ADC</p>
         </div>
 
         <div class="player-card">
+          <img class="player-image" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" alt="Keria player portrait placeholder">
           <h3>Keria</h3>
           <p>Support</p>
         </div>
-
       </div>
     </section>
   `);
 }
 
 function viewHistory() {
   renderLayout(`
     <section class="card">
       <h2>Major Achievements</h2>
      <img class="feature-image" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80" alt="Championship celebration and trophy lights">
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

document.addEventListener('DOMContentLoaded', () => {
  navigate('home');
});
