if (navigator.clipboard) {
  document.querySelectorAll('[data-clipboard]').forEach(($clipboardEl) => {
    const $button = document.createElement('button');
    $button.innerHTML = 'Copier le lien';
    $clipboardEl.parentNode.append($button);
    $button.addEventListener(
      'click',
      copyToClipboard.bind(this, $clipboardEl, $button)
    );
  });
} else {
  console.warn("Pas de support du presse-papier")
}

function copyToClipboard($clipboardEl, $button) {
  navigator.clipboard
  .writeText($clipboardEl.getAttribute('data-clipboard'))
  .then(() => {
    $button.innerHTML = 'Copié !';
    setTimeout(() => ($button.innerHTML = 'Copier le lien'), 2000);
  })
  .catch((err) => console.warn(err));
}