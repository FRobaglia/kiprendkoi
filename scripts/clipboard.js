if (navigator.clipboard) {
  document.querySelectorAll('[data-clipboard]').forEach(($clipboardEl) => {
    const $button = document.createElement('button');
    $button.innerHTML = 'Copier le lien';
    $clipboardEl.parentNode.append($button);
  });
} else {
  console.warn("Pas de support du presse-papier")
}