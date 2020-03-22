if(navigator.share) {
  document.querySelectorAll('[data-share-url]').forEach(($shareEl) => {
    const $button = document.createElement('button');
    $button.innerHTML = 'Partager';
    $shareEl.parentNode.append($button);
    $button.addEventListener(
      'click',
      share.bind(shareEl.getAttribute('data-share-title'), shareEl.getAttribute('data-share-text'), shareEl.getAttribute('data-share-url'))
    );
  });
} else {
  console.warn('Pas de support de navigator.share')
}

function share(title, text, url) {
  navigator
  .share({
    title: title,
    text: text,
    url: url,
  })
}