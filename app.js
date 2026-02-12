// ---- Simple SPA router (Home + Networking) ----

const APP = document.getElementById("app");

const state = {
  name: "Thien Nguyen",
  course: "Computer Networking",
  term: "Spring 2026",
  project: "Project 1: Build & Deploy a Public Website"
};

function el(tag, attrs = {}, ...kids) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const kid of kids.flat()) {
    if (kid === null || kid === undefined) continue;
    node.appendChild(typeof kid === "string" ? document.createTextNode(kid) : kid);
  }
  return node;
}

function setActiveNav(path) {
  document.querySelectorAll("a.navbtn").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${path}`);
  });
}

function renderLayout(contentNode, path) {
  APP.innerHTML = "";

  const header = el("header", { class: "hero" },
    el("div", { class: "wrap" },
      el("h1", {}, state.project),
      el("p", {}, `${state.name} | ${state.course} | ${state.term}`),
      el("nav", { class: "top" },
        el("a", { class: "navbtn", href: "#/" }, "Home"),
        el("a", { class: "navbtn", href: "#/networking" }, "Networking Concepts"),
        el("button", { class: "navbtn", onClick: toggleDark }, "Toggle Dark Mode")
      )
    )
  );

  const main = el("main", {}, contentNode);

  APP.appendChild(header);
  APP.appendChild(main);

  setActiveNav(path);
}

function toggleDark() {
  document.body.classList.toggle("dark");
}

function protocolInfo() {
  const proto = window.location.protocol.replace(":", "").toUpperCase();
  // If port is empty, the browser is using the default port for the protocol
  const port = window.location.port || (window.location.protocol === "https:" ? "443 (default)" : "80 (default)");
  return { proto, port, host: window.location.host, path: window.location.pathname };
}

function viewHome() {
  const info = protocolInfo();

  const content = el("div", { class: "grid" },

    el("section", { class: "card half" },
      el("h2", {}, "What this site demonstrates"),
      el("p", {}, "A publicly hosted website plus proof of DNS resolution, IP addressing, and HTTPS-based communication."),
      el("p", { class: "small" }, "This matches the project objective and grading checklist.")
    ),

    el("section", { class: "card half" },
      el("h2", {}, "Live protocol check (JS)"),
      el("p", {}, "Click to show what the browser is using right now."),
      el("button", { class: "btn", onClick: () => showLiveInfo(info) }, "Check Protocol"),
      el("div", { id: "live", class: "small", style: "margin-top:10px;" })
    ),

    el("section", { class: "card third" },
      el("h2", {}, "Quick links"),
      el("p", {}, "Use these in your PDF report."),
      el("div", { class: "kv" },
        el("div", {}, "Website URL"), el("div", {}, "Paste your GitHub Pages URL here"),
        el("div", {}, "GitHub Repo"), el("div", {}, "Paste your repo link here")
      )
    ),

    el("section", { class: "card third" },
      el("h2", {}, "Commands to screenshot"),
      el("div", { class: "codebox", html:
`nslookup yourusername.github.io
nslookup -type=AAAA yourusername.github.io
# or:
dig yourusername.github.io
dig AAAA yourusername.github.io`
      }),
      el("p", { class: "small" }, "Include screenshots + 2–3 sentence explanation for each.")
    ),

    el("section", { class: "card third" },
      el("h2", {}, "Instructor sentence"),
      el("p", {}, "Use this in your conclusion:"),
      el("div", { class: "codebox", html:
`Our website is hosted publicly, DNS resolves the domain to an IP address, and communication occurs over HTTPS using TCP/IP.` })
    )
  );

  renderLayout(content, "/");
}

function showLiveInfo(info) {
  const live = document.getElementById("live");
  const now = new Date().toLocaleString();
  live.innerHTML =
    `<b>Protocol:</b> ${info.proto}<br>` +
    `<b>Port:</b> ${info.port}<br>` +
    `<b>Host:</b> ${info.host}<br>` +
    `<b>Path:</b> ${info.path}<br>` +
    `<b>Checked at:</b> ${now}`;
}

function viewNetworking() {
  const content = el("div", { class: "grid" },

    el("section", { class: "card half" },
      el("h2", {}, "DNS (Domain Name System)"),
      el("p", {}, "DNS converts a human-readable domain (like username.github.io) into an IP address that computers use to route traffic."),
      el("p", { class: "small" }, "Report tip: paste your nslookup/dig screenshot and explain the returned A (IPv4) and AAAA (IPv6) records.")
    ),

    el("section", { class: "card half" },
      el("h2", {}, "IP Addressing (IPv4 / IPv6)"),
      el("p", {}, "IPv4 addresses are 32-bit (e.g., 185.199.x.x). IPv6 addresses are 128-bit and support a much larger address space."),
      el("p", { class: "small" }, "Report tip: show both A and AAAA lookups (if available). If no AAAA appears, say IPv6 isn’t published for that hostname.")
    ),

    el("section", { class: "card half" },
      el("h2", {}, "Protocols: HTTP vs HTTPS"),
      el("p", {}, "HTTP sends data in plaintext. HTTPS encrypts traffic using TLS, protecting confidentiality and integrity."),
      el("p", { class: "small" }, "Report tip: show DevTools → Network: status code (200), request/response headers, and that the URL uses https://.")
    ),

    el("section", { class: "card half" },
      el("h2", {}, "Security Feature (easy)"),
      el("p", {}, "GitHub Pages supports HTTPS. You can prove it with the browser lock icon and DevTools → Security tab showing a valid certificate."),
      el("p", { class: "small" }, "This meets the “implement at least one security feature” requirement.")
    ),

    el("section", { class: "card" },
      el("h2", {}, "What to include in your PDF (quick checklist)"),
      el("div", { class: "kv" },
        el("div", {}, "Website link"), el("div", {}, "Public GitHub Pages URL"),
        el("div", {}, "Repo link"), el("div", {}, "Public GitHub repository"),
        el("div", {}, "Setup steps"), el("div", {}, "How you enabled Pages"),
        el("div", {}, "DNS evidence"), el("div", {}, "nslookup/dig screenshots + explanation"),
        el("div", {}, "IP evidence"), el("div", {}, "IPv4/IPv6 results explained"),
        el("div", {}, "HTTP/HTTPS proof"), el("div", {}, "DevTools headers/status, https://"),
        el("div", {}, "Security proof"), el("div", {}, "Lock icon / certificate evidence"),
        el("div", {}, "Challenges"), el("div", {}, "1–2 issues + how you fixed them")
      )
    )
  );

  renderLayout(content, "/networking");
}

function route() {
  const hash = window.location.hash || "#/";
  const path = hash.replace("#", "");

  if (path === "/" || path === "") viewHome();
  else if (path === "/networking") viewNetworking();
  else {
    renderLayout(
      el("div", { class: "grid" },
        el("section", { class: "card" },
          el("h2", {}, "Page not found"),
          el("p", {}, "Use the navigation to go back.")
        )
      ),
      path
    );
  }
}

window.addEventListener("hashchange", route);
route();
