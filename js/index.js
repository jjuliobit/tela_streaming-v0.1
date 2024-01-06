const nav = document.getElementById('nav');

window.addEventListener('scroll', ()=> {
  if(window.scrollY >= 100) {
    nav.classList.add('nav_black');
  } else {
    nav.classList.remove('nav_black');
  }
});


// Obtém todos os elementos com a classe "row_posters"
const posterRows = document.querySelectorAll('.row_posters');

// Variáveis para controle do arrastar
let isDragging = false;
let startX, startScrollLeft;

// Função para iniciar o arrastar
const dragStart = (e) => {
  isDragging = true;
  const row = e.currentTarget;
  row.classList.add('dragging');
  startX = e.pageX;
  startScrollLeft = row.scrollLeft;
};

// Função para arrastar
const dragging = (e) => {
  if (!isDragging) return;

  const row = e.currentTarget;
  row.scrollLeft = startScrollLeft - (e.pageX - startX);
};

// Função para parar o arrastar
const dragStop = () => {
  isDragging = false;
  document.querySelectorAll('.row_posters').forEach(row => {
    row.classList.remove('dragging');
  });
};

// Adiciona os ouvintes de eventos aos elementos
posterRows.forEach(row => {
  row.addEventListener('mousedown', dragStart);
  row.addEventListener('mousemove', dragging);
});

document.addEventListener('mouseup', dragStop);