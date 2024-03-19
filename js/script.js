// Navbar responsive
const togglebtn = document.getElementsByClassName("toggle_menu")[0];
const togglebtnIcon = document.getElementsByClassName("toggle_menu i")[0];
const dropdownMenu = document.getElementsByClassName("toggle_nav")[0];

togglebtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");
  togglebtnIcon.classList.isOpen ? "uil uil-multiply" : "uil uil-bars";
};

let currentIndex = 0;
const buttons = document.querySelectorAll(".slider-moving-bars button");
const span = document.querySelector(".slider-moving-bars span");
const totalButtons = buttons.length;

function slideMove(index) {
  currentIndex = index;

  buttons.forEach((button, i) => {
    if (i === currentIndex) {
      button.style.backgroundColor = "#FFD600";
    } else {
      button.style.backgroundColor = "white";
    }
  });

  span.textContent = `0${currentIndex + 1}/03`;
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalButtons;
  slideMove(currentIndex);
  setTimeout(autoSlide, 1000); // Move after 1 second
}

// Start the automatic sliding
autoSlide();
