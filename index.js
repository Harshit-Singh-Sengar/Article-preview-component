const shareButton = document.querySelector('#share_image');
const shareBox = document.querySelector('.share');

shareButton.addEventListener('click', () => {
  shareBox.classList.toggle('hidden');
})


