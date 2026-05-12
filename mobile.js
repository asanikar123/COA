(function () {
  function init() {
    var nav = document.querySelector('.site-nav .nav-inner') || document.querySelector('.site-nav');
    var links = document.querySelector('.nav-links');
    if (!nav || !links || document.querySelector('.mobile-toggle')) return;

    // Build hamburger
    var btn = document.createElement('button');
    btn.className = 'mobile-toggle';
    btn.setAttribute('aria-label', 'Open menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span>';
    nav.appendChild(btn);

    // Build backdrop + panel
    var backdrop = document.createElement('div');
    backdrop.className = 'mobile-backdrop';
    document.body.appendChild(backdrop);

    var panel = document.createElement('nav');
    panel.className = 'mobile-menu';
    panel.setAttribute('aria-label', 'Mobile navigation');

    // Walk top-level nav children
    Array.prototype.forEach.call(links.children, function (node) {
      if (node.classList && node.classList.contains('nav-item')) {
        var topLink = node.querySelector(':scope > a');
        if (topLink) {
          var a = document.createElement('a');
          a.href = topLink.getAttribute('href');
          a.className = 'mm-top';
          a.textContent = topLink.textContent.replace(/▾|▼|\s+$/g, '').trim();
          if (a.textContent.toLowerCase() === 'donate') a.className += ' mm-donate';
          panel.appendChild(a);
        }
        node.querySelectorAll(':scope > .nav-dropdown a').forEach(function (sub) {
          var s = document.createElement('a');
          s.href = sub.getAttribute('href');
          if (sub.target) s.target = sub.target;
          s.className = 'mm-sub';
          s.textContent = sub.textContent.trim();
          panel.appendChild(s);
        });
      } else if (node.tagName === 'A') {
        var a2 = document.createElement('a');
        a2.href = node.getAttribute('href');
        a2.className = 'mm-top';
        a2.textContent = node.textContent.trim();
        panel.appendChild(a2);
      }
    });
    document.body.appendChild(panel);

    function setOpen(open) {
      document.body.classList.toggle('mobile-menu-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    btn.addEventListener('click', function () {
      setOpen(!document.body.classList.contains('mobile-menu-open'));
    });
    backdrop.addEventListener('click', function () { setOpen(false); });
    panel.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
