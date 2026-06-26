document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0 10px 30px rgba(56,189,248,0.3)';
  });

  card.addEventListener('mouseout', () => {
    card.style.boxShadow = 'none';
  });
});
