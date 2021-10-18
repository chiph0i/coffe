const slider = document.querySelector(".slider");
      const nextBtn = document.querySelector(".next-btn");
      const prevBtn = document.querySelector(".prev-btn");
      const slide = document.querySelectorAll(".slide");
      const slideIcons = document.querySelectorAll(".slide-icon");
      const numberOfSlide = slide.length;
      var slideNumber = 0;
      // image slider next button
      nextBtn.addEventListener("click", () => {
        slide.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });
        slideNumber++;
        if (slideNumber > numberOfSlide - 1) {
          slideNumber = 0;
        }
        slide[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
      });
      //image slider prev button
      prevBtn.addEventListener("click", () => {
        slide.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });
        slideNumber--;
        if (slideNumber < 0) {
          slideNumber = numberOfSlide - 1;
        }
        slide[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
      });
      // image slider autoplay
      let playSlider;
      let repeater = () => {
        playSlider = setInterval(function () {
          slide.forEach((slide) => {
            slide.classList.remove("active");
          });
          slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
          });
          slideNumber++;
          if (slideNumber > numberOfSlide - 1) {
            slideNumber = 0;
          }
          slide[slideNumber].classList.add("active");
          slideIcons[slideNumber].classList.add("active");
        }, 4000);
      };
      repeater();
      // stop the image slider autoplay on mouseover
      slider.addEventListener("mouseover", () => {
        clearInterval(playSlider);
      });
      // start the image slider autoplay on mouseover
      slider.addEventListener("mouseover", () => {
        repeater();
      });