

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  const header = panel.querySelector('.panel-header');
  const content = panel.querySelector('.panel-content');

  // Add a click event listener to each header
  header.addEventListener('click', () => {
    // Toggle the 'active' class on the panel
    panel.classList.toggle('active');

    // Toggle the visibility of the content
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });

});