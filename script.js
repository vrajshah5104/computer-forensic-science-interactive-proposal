document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------------------------
    // --- 🚨 CONFIGURATION - UPDATE THIS SECTION! 🚨 ---
    // -----------------------------------------------------------------
    const correctPassword = "password";
    // The list of images for the final slideshow (must be in the "images" folder)
    const slideshowImages = [ "1.jpg" ];
    // -----------------------------------------------------------------


    // --- ELEMENT SELECTORS ---
    const caseFile = document.getElementById('case-file');
    const loveLetter = document.getElementById('love-letter');
    const submitButton = document.getElementById('submit-button');
    const passwordInput = document.getElementById('password-input');
    const choiceMeButton = document.getElementById('choice-me');
    const choiceMomoButton = document.getElementById('choice-momo');
    const passwordHint = document.getElementById('password-hint');
    const letterModal = document.getElementById('letter-modal');
    const letterText = document.getElementById('letter-text');
    const closeModalButton = document.getElementById('close-modal-button');
    const letterButtons = document.querySelectorAll('.letter-button');
    const yesButton = document.getElementById('yes-button');
    const slideshowContainer = document.getElementById('slideshow-container');
    const slideshowImage = document.getElementById('slideshow-image');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentImageIndex = 0;
    
    const closeSlideshowButton = document.getElementById('close-slideshow-button');
    const backToCaseButton = document.getElementById('back-to-case-button');


    // --- LOGIC AND EVENT LISTENERS ---

    // --- Evidence Locker & Modal Logic ---
    letterButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const letterFileName = button.getAttribute('data-letter');
            try {
                const response = await fetch(`letters/${letterFileName}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const text = await response.text();
                letterText.textContent = text;
                letterModal.classList.remove('hidden');
            } catch (error) {
                letterText.textContent = `Error: Could not load letter.\nMake sure the file "${letterFileName}" exists inside the "letters" folder.`;
                letterModal.classList.remove('hidden');
            }
        });
    });

    closeModalButton.addEventListener('click', () => {
        letterModal.classList.add('hidden');
    });

    // --- Hint Challenge Logic ---
    choiceMeButton.addEventListener('click', () => {
        passwordHint.classList.remove('hidden');
        choiceMeButton.disabled = true;
        choiceMomoButton.disabled = true;
    });

    choiceMomoButton.addEventListener('click', () => {
        alert("ERROR: Invalid selection. System integrity compromised by deliciousness. Please re-evaluate your priorities and try again.");
    });

    // --- Case Solving Logic ---
    function solveCase() {
        const userGuess = passwordInput.value.trim().toLowerCase();
        if (userGuess === correctPassword) {
            caseFile.classList.add('hidden');
            loveLetter.classList.remove('hidden');
            // The playSong() function call has been removed from here
        } else {
            alert("ACCESS DENIED: Incorrect password. Re-examine the evidence, Investigator.");
            passwordInput.value = "";
        }
    }

    submitButton.addEventListener('click', solveCase);
    passwordInput.addEventListener('keyup', (event) => {
        if (event.key === "Enter") solveCase();
    });
    
    // --- Back Button Logic ---
    backToCaseButton.addEventListener('click', () => {
        loveLetter.classList.add('hidden');
        caseFile.classList.remove('hidden');
        // The stopSong() function call has been removed from here
    });


    // --- Final Celebration & Slideshow Logic ---
    yesButton.addEventListener('click', () => {
        yesButton.disabled = true;
        yesButton.innerText = "❤️";
        launchConfetti();
        setTimeout(startSlideshow, 2000);
    });

    function launchConfetti() {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };
        function randomInRange(min, max) { return Math.random() * (max - min) + min; }
        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    }

    function startSlideshow() {
        slideshowContainer.classList.remove('hidden');
        setTimeout(() => slideshowContainer.style.opacity = '1', 100);
        showImage(currentImageIndex);
    }

    function showImage(index) {
        slideshowImage.src = `images/${slideshowImages[index]}`;
    }

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
        showImage(currentImageIndex);
    });

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + slideshowImages.length) % slideshowImages.length;
        showImage(currentImageIndex);
    });
    
    closeSlideshowButton.addEventListener('click', () => {
        slideshowContainer.style.opacity = '0'; // Fade out first
        setTimeout(() => slideshowContainer.classList.add('hidden'), 1000);
    });
});
