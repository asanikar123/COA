(function () {
  function init() {
    var nav = document.querySelector('.site-nav .nav-inner') || document.querySelector('.site-nav');
    var links = document.querySelector('.nav-links');
    if (!nav || !links || document.querySelector('.mobile-toggle')) return;

    var btn = document.createElement('button');
    btn.className = 'mobile-toggle';
    btn.setAttribute('aria-label', 'Open menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span>';
    nav.appendChild(btn);

    var backdrop = document.createElement('div');
    backdrop.className = 'mobile-backdrop';
    document.body.appendChild(backdrop);

    var panel = document.createElement('nav');
    panel.className = 'mobile-menu';
    panel.setAttribute('aria-label', 'Mobile navigation');

    Array.prototype.forEach.call(links.children, function (node) {
      if (node.classList && node.classList.contains('nav-item')) {
        var topLink = node.querySelector(':scope > a');
        var subLinks = node.querySelectorAll(':scope > .nav-dropdown a');
        if (!topLink) return;

        var label = topLink.textContent.replace(/▾|▼|\s+$/g, '').trim();
        var href = topLink.getAttribute('href');
        var isDonate = label.toLowerCase() === 'donate';

        if (subLinks.length === 0 || isDonate) {
          var a = document.createElement('a');
          a.href = href;
          a.className = 'mm-top' + (isDonate ? ' mm-donate' : '');
          a.textContent = label;
          panel.appendChild(a);
          return;
        }

        var group = document.createElement('div');
        group.className = 'mm-group';

        var header = document.createElement('button');
        header.type = 'button';
        header.className = 'mm-top mm-expand';
        header.setAttribute('aria-expanded', 'false');
        header.innerHTML = '<span class="mm-label">' + label + '</span><span class="mm-caret" aria-hidden="true">+</span>';
        group.appendChild(header);

        var sub = document.createElement('div');
        sub.className = 'mm-sublist';

        var overview = document.createElement('a');
        overview.href = href;
        overview.className = 'mm-sub';
        overview.textContent = 'Overview';
        sub.appendChild(overview);

        subLinks.forEach(function (s) {
          var sa = document.createElement('a');
          sa.href = s.getAttribute('href');
          if (s.target) sa.target = s.target;
          sa.className = 'mm-sub';
          sa.textContent = s.textContent.trim();
          sub.appendChild(sa);
        });
        group.appendChild(sub);

        header.addEventListener('click', function () {
          var open = group.classList.toggle('mm-open');
          header.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        panel.appendChild(group);
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
