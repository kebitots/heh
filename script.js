const clickSound = new Audio('wiwiwi-kitten.mp3');

const messages = [
    "HI LOVE HEHEHEHE",
    "I know u were like curious kanina",
    "Well this is for you!!",
    "I just wanted to say na heh you're cute!!!",
    "And, I’m really glad you’re mine ~",
    "I love you so much babyyy!! <33"
  ];
  let messageIndex = 0;

  function revealSurprise() {
    document.getElementById("intro-screen").style.display = "none";
    document.querySelector(".surprise-container").style.display = "block";
  }
  
  function pickSurprise(element) {
    if (messageIndex < messages.length) {
      const message = messages[messageIndex];
      document.getElementById("message").innerText = message;
      messageIndex++;
  
      element.style.opacity = 0.5;
      element.style.pointerEvents = "none";

      clickSound.currentTime = 0; // rewind to start
      clickSound.play();
  
      element.style.opacity = 0.5;
      element.style.pointerEvents = "none";
  
      // Show the back button if it's hidden
      document.getElementById("back-btn").style.display = "inline-block";
    }
  }

  function resetSurprises() {
    const surprises = document.querySelectorAll(".surprise1");
    surprises.forEach(surprise => {
      surprise.style.opacity = 1;
      surprise.style.pointerEvents = "auto";
    });
  
    document.getElementById("message").innerText = "";
    messageIndex = 0;
  }
  
  
  function goBackToIntro() {
    document.querySelector(".surprise-container").style.display = "none";
    document.getElementById("intro-screen").style.display = "flex";
  
    // Optional reset if you want:
    resetSurprises();

    document.getElementById("back-btn").style.display = "none";
  }
  
  