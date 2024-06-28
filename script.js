const icon = document.querySelector("i");
const MenuBar = document.querySelector("ul");

icon.addEventListener("click", () => {
  MenuBar.classList.toggle("show");
});
let count = 200;
const ProjectDetails = document.querySelectorAll(".projectDetail");

ProjectDetails.forEach((projectDetail) => {
  // console.log(projectDetail);
  if (projectDetail.innerText.trim().length <= count) {
    projectDetail.nextElementSibling.style.display = "none";
  } else {
    let displayText = projectDetail.innerText.trim().slice(0, count);
    let hideText = projectDetail.innerText.trim().slice(count);
    projectDetail.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${hideText} </span>`;
  }
});

function toggleButton(button) {
  let post = button.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  console.log(button.textContent);
  button.textContent == "ReadMore" ? (button.textContent = "ReadLess") : (button.textContent = "ReadMore");
}

// ************************************   SCROLL BUTTON
const scrollBtn =document.getElementById('scrollTopBtn')
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function scrollTopBtn() {

  window.scrollTo({ top: 0, behavior: "smooth" });
}

//  **************************************  CAROUSEAL SLIDES
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
