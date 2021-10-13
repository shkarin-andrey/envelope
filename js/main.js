const topClose = document.querySelector('.envelope__top'),
      paperClose = document.querySelector('.paper'),
      envelope = document.querySelector('.envelope');


envelope.addEventListener('click', () => {
    topClose.classList.toggle('paper__top_close');
    paperClose.classList.toggle('paper_close');
});

