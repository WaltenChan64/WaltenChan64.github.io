// ── SITE CONFIG — change these and they update everywhere ──
const NAME      = "Walten Chan";
const TITLE     = "Gameplay & Tools Programmer";
const EMAIL     = "chan.walten64@gmail.com";
const GITHUB    = "The64thRealm";
const LINKEDIN  = "walten-chan";
const ITCH      = "the64threalm";

// Inject shared navbar
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const links = [
  { href: 'index.html',         label: 'Home',        match: 'index.html' },
  { href: 'airstrafe.html',     label: 'Saleblazers', match: 'airstrafe.html' },
  { href: 'smoke-break.html',   label: 'Smoke Break', match: 'smoke-break.html' },
  { href: 'games.html',         label: 'Games',       match: 'games.html' },
  { href: 'index.html#contact', label: 'Contact',     match: null },
  { href: 'assets/Resume.pdf',  label: 'Resume ↗',    match: null },
];

const navHTML = `
<nav>
  <a class="nav-logo" href="index.html"><span class="nav-dot"></span>${NAME}</a>
  <ul class="nav-links">
    ${links.map(l => `
      <li><a href="${l.href}" ${l.match === currentPage ? 'class="active"' : ''}>${l.label}</a></li>
    `).join('')}
  </ul>
</nav>
`;

document.write(navHTML);

// Inject name/contact into any element with data-site attributes
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = `Made with ♥ by ${NAME} · ${TITLE}`;
  document.querySelectorAll('[data-name]').forEach(el => el.textContent = NAME);
  document.querySelectorAll('[data-title]').forEach(el => el.textContent = TITLE);
  document.querySelectorAll('[data-email]').forEach(el => {
    el.textContent = EMAIL;
    if (el.tagName === 'A') el.href = `mailto:${EMAIL}`;
  });
  document.querySelectorAll('[data-github]').forEach(el => {
    el.textContent = `github.com/${GITHUB}`;
    if (el.tagName === 'A') el.href = `https://github.com/${GITHUB}`;
  });
  document.querySelectorAll('[data-linkedin]').forEach(el => {
    el.textContent = `linkedin.com/in/${LINKEDIN}`;
    if (el.tagName === 'A') el.href = `https://linkedin.com/in/${LINKEDIN}`;
  });
  document.querySelectorAll('[data-itch]').forEach(el => {
    el.textContent = `itch.io/profile/${ITCH}`;
    if (el.tagName === 'A') el.href = `https://itch.io/profile/${ITCH}`;
  });
  document.title = document.title.replace('^NAME$', NAME);
});
