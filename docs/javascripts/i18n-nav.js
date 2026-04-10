function localizePagination() {
  const map = {
    Previous: 'Предыдущая',
    Next: 'Следующая',
  };

  const selectors = [
    '.rst-footer-buttons a',
    '.rst-content .pager a',
    '.wy-breadcrumbs a',
  ];

  document.querySelectorAll(selectors.join(',')).forEach((el) => {
    const text = (el.textContent || '').trim();
    if (!text) return;

    const normalized = text.replace(/[«»]/g, '').trim();
    if (map[normalized]) {
      const hasLeftChevron = text.includes('«');
      const hasRightChevron = text.includes('»');

      let translated = map[normalized];
      if (hasLeftChevron) translated = `« ${translated}`;
      if (hasRightChevron) translated = `${translated} »`;

      el.textContent = translated;
    }
  });
}

document.addEventListener('DOMContentLoaded', localizePagination);
window.addEventListener('load', localizePagination);
