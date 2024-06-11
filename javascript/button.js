// ---- Category Buttons

const showContent = category => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.style.display = item.getAttribute('data-category') === category || category === 'all'  ? 'block' : 'none';
  });
};

// ----Event Search

document.addEventListener('keyup', e => {
  if (e.target.matches('#buscador')) {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll(".gallery-item").forEach(item => {
      const itemText = item.textContent.toLowerCase();
      if (itemText.includes(searchTerm)) {
        item.classList.remove('filter');
      } else {
        item.classList.add('filter');
      }
    });
  }
});

