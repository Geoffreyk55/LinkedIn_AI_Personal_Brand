
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Professional link opened:', link.href);
  });
});
