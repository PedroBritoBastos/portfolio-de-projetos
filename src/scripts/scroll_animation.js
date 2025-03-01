(() => {
   'use strict'
   const about_section = document.getElementById("about");
   const tech_section = document.getElementById("tech");
   const proj_section = document.getElementById("proj");

   // monitora toda vez que o scroll é ativado
   window.addEventListener("scroll", (e) => {
      // detecta qual a pos do scroll
      if(window.scrollY > 150) {
         about_section.querySelector(".title").classList.add("display-visible");
         about_section.querySelector(".sobre-container").classList.add("display-visible");
      } else {
         about_section.querySelector(".title").classList.remove("display-visible");
         about_section.querySelector(".sobre-container").classList.remove("display-visible");
      }

      if(window.scrollY > 600) {
         tech_section.querySelector(".title-reverse").classList.add("display-visible");
         tech_section.querySelector(".secaotecnologiasContainer").classList.add("display-visible");
      } else {
         tech_section.querySelector(".title-reverse").classList.remove("display-visible");
         tech_section.querySelector(".secaotecnologiasContainer").classList.remove("display-visible");
      }

      if(window.scrollY > 1360) {
         proj_section.querySelector(".title").classList.add("display-visible");
         proj_section.querySelector(".carousel-and-info").classList.add("display-visible");
      } else {
         proj_section.querySelector(".title").classList.remove("display-visible");
         proj_section.querySelector(".carousel-and-info").classList.remove("display-visible");
      }
   });
})();