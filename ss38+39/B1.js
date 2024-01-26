const steps = document.querySelectorAll(".step");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentStep = 0;

    function updateProgressBar() {
      steps.forEach((step, index) => {
        if (index === currentStep) {
          step.classList.add("active");
        } else {
          step.classList.remove("active");
        }
      });

      if (currentStep === 0) {
        prevBtn.disabled = true;
      } else {
        prevBtn.disabled = false;
      }

      if (currentStep === steps.length - 1) {
        nextBtn.disabled = true;
      } else {
        nextBtn.disabled = false;
      }
    }

    function updateNextStep() {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateProgressBar();
      }

      if (currentStep === steps.length - 1) {
        nextBtn.disabled = true;
      }
    }

    function updatePrevStep() {
      if (currentStep > 0) {
        currentStep--;
        updateProgressBar();
      }

      if (currentStep === 0) {
        prevBtn.disabled = true;
      }
    }

    prevBtn.addEventListener("click", () => {
      updatePrevStep();
    });

    nextBtn.addEventListener("click", () => {
      updateNextStep();
    });

    updateProgressBar();