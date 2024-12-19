// Toggle Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Change Nav BG when Scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("bg-dark-blue", "shadow-md");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("bg-dark-blue", "shadow-md");
    navbar.classList.add("bg-transparent");
  }
});

// My Awesome Service
const imageBoxes = [
  {
    title: "Website Design",
    image: "assets/service-web-design.png",
    projects: "80+ Project",
    link: "#link1",
  },
  {
    title: "Mobile App Design",
    image: "assets/service-mobile-app-design.png",
    projects: "76+ Project",
    link: "#link2",
  },
  {
    title: "Design System",
    image: "assets/service-design-system.png",
    projects: "32+ Project",
    link: "#link3",
  },
];

const servicesContainer = document.getElementById("services-container");
imageBoxes.forEach((box) => {
  servicesContainer.innerHTML += `
    // 

    `;
});

//Porfolio
const portfolioCards = [
  {
    title: "VPN Mobile App",
    category: "Mobile App",
    image: "assets/portfolio-vpn.png",
  },
  {
    title: "Streaming Mobile App",
    category: "Mobile App",
    image: "assets/portfolio-parking.png",
  },
  {
    title: "Creative Digital Agency",
    category: "Landing Page",
    image: "assets/portfolio-creative.png",
  },
  {
    title: "Podcast Mobile App",
    category: "Mobile App",
    image: "assets/portfolio-podcast.png",
  },
  {
    title: "Multimedia Design Platform",
    category: "Web Design",
    image: "assets/portfolio-creative.png",
  },
  {
    title: "Parking Mobile",
    category: "Mobile App",
    image: "assets/portfolio-parking.png",
  },
];

const portfolioContainer = document.getElementById("portfolio-container");
portfolioCards.forEach((card) => {
  portfolioContainer.innerHTML += `
  //  

    `;
});
