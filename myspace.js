const planets = document.querySelectorAll('.planet');
let currentBox = null;

planets.forEach((planet, index) => {
  planet.addEventListener('click', () => {
    if (currentBox) currentBox.remove();

    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '50%';
    container.style.top = '90%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.width = '250px';
    container.style.height = '90px';
    container.style.background = 'rgba(0, 0, 50, 0.9)'; // dark transparent space color
    container.style.border = '2px solid #00f'; // glowing border
    container.style.borderRadius = '15px';
    container.style.boxShadow = '0 0 15px #0ff, 0 0 30px #00f';
    container.style.padding = '15px';
    container.style.zIndex = 1000;
    container.style.fontFamily = '"Exo 2", sans-serif'; // futuristic font
    container.style.backdropFilter = 'blur(5px)';

    const textarea = document.createElement('textarea');
    textarea.placeholder = `Your Thoughts ${index + 1}...`;
    textarea.style.width = '100%';
    textarea.style.height = '100%';
    textarea.style.border = 'none';
    textarea.style.borderRadius = '10px';
    textarea.style.padding = '10px';
    textarea.style.resize = 'none';
    textarea.style.fontSize = '15px';
    textarea.style.background = 'rgba(255, 255, 255, 0.1)'; // subtle transparent white
    textarea.style.color = '#fff';
    textarea.style.outline = 'none';
    textarea.style.caretColor = '#0ff';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '5px';
    closeBtn.style.right = '5px';
    closeBtn.style.padding = '3px 7px';
    closeBtn.style.border = 'none';
    closeBtn.style.borderRadius = '50%';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.background = '#ff1a1a';
    closeBtn.style.color = '#fff';
    closeBtn.style.boxShadow = '0 0 10px #ff1a1a';
    closeBtn.addEventListener('click', () => {
      container.remove();
      currentBox = null;
    });

    container.appendChild(closeBtn);
    container.appendChild(textarea);
    document.body.appendChild(container);
    currentBox = container;
    textarea.focus();
  });
});

// Get the logout button
const logoutBtn = document.getElementById('logout');

// Add click event
logoutBtn.addEventListener('click', () => {
  // Redirect to the main page or login page
  window.location.href = 'index.html'; // replace 'index.html' with your target page
});