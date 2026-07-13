/**
 * Expand the User Guide sidebar section on the site home page.
 */
(function () {
  function homePathname() {
    const base = (window.DOCMD_BASE || '/').replace(/\/$/, '') || '';
    return base || '/';
  }

  function isHome() {
    const current = window.location.pathname.replace(/\/$/, '') || '/';
    const home = homePathname().replace(/\/$/, '') || '/';
    return current === home;
  }

  function expandGuideNav() {
    if (!isHome()) return;
    for (const li of document.querySelectorAll('.sidebar-nav .nav-group')) {
      const title = li.querySelector('.nav-item-title');
      if (title?.textContent.trim() === 'User Guide') {
        li.classList.add('expanded', 'active-parent');
        li.setAttribute('aria-expanded', 'true');
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', expandGuideNav);
  } else {
    expandGuideNav();
  }
})();
