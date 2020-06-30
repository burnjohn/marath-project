
(function () {
    const btn = document.querySelector('.burger-btn');
    console.log(btn)
    btn.style.display = 'inline-block';
    btn.insertAdjacentHTML('afterbegin', `
    <div class="burger-btn__line 
                burger-btn__top">
    </div>
    <div class="burger-btn__line 
                burger-btn__center">
    </div>
    <div class="burger-btn__line 
                burger-btn__bottom">
    </div>`);

    const btn3lines = document.querySelectorAll(".burger-btn");
    Array.from(btn3lines, elem => elem.addEventListener("click", toggleClasses));
    
    function toggleClasses(event) {
      console.log(event.target);
      if (event.target.classList.contains(".burger-btn")) {
        toggleClass(event.target);
      } else {
        toggleClass(event.target.parentNode);
      }
    }
    
    function toggleClass(elem) {
      elem
        .querySelector(".burger-btn__top")
        .classList.toggle("burger-btn__top--click");
      elem
        .querySelector(".burger-btn__center")
        .classList.toggle("burger-btn__center--click");
      elem
        .querySelector(".burger-btn__bottom")
        .classList.toggle("burger-btn__bottom--click");
    }
  }
)()