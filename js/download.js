document.querySelector('.live-preview-btn').onclick = function() {
  window.open('https://example.com/live-preview', '_blank');
};

document.querySelector('.download-btn').onclick = function() {
  // Replace 'file-url' with the actual download link
  window.location.href = 'https://example.com/download-file';
};