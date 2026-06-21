document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const startScreen = document.getElementById('start-screen');
    const instructionScreen = document.getElementById('instruction-screen');
    const breathingScreen = document.getElementById('breathing-screen');
    
    const phaseText = document.getElementById('phase-text');
    const timerDisplay = document.getElementById('timer-display');
    const breathingBox = document.querySelector('.breathing-box');
    
    const audioInhale = document.getElementById('audio-inhale');
    const audioExhale = document.getElementById('audio-exhale');

    let currentPhase = 0;
    let timeLeft = 4;
    let timerInterval;

    const phases = [
        { text: "Inhale", action: "inhale", sound: audioInhale },
        { text: "Hold", action: "hold-top", sound: null },
        { text: "Exhale", action: "exhale", sound: audioExhale },
        { text: "Hold Empty", action: "hold-bottom", sound: null }
    ];

    startBtn.addEventListener('click', () => {
        // Hide start, show instructions
        startScreen.classList.remove('active');
        startScreen.classList.add('hidden');
        instructionScreen.classList.remove('hidden');
        instructionScreen.classList.add('active');

        // Wait 6 seconds on instructions, then start breathing
        setTimeout(() => {
            instructionScreen.classList.remove('active');
            instructionScreen.classList.add('hidden');
            breathingScreen.classList.remove('hidden');
            breathingScreen.classList.add('active');
            
            startBreathingCycle();
        }, 6000);
    });

    function startBreathingCycle() {
        executePhase(); // Start first phase immediately
    }

    function executePhase() {
        const phase = phases[currentPhase];
        
        // Update UI
        phaseText.innerText = phase.text;
        timeLeft = 4;
        timerDisplay.innerText = timeLeft;
        
        // Handle CSS Animation
        breathingBox.className = 'breathing-box ' + phase.action;

        // Play Sound if required
        if (phase.sound) {
            phase.sound.currentTime = 0; // Reset audio to start
            phase.sound.play().catch(e => console.log("Audio play blocked by browser until interacted."));
        }

        // 4-second countdown logic
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft > 0) {
                timerDisplay.innerText = timeLeft;
            } else {
                clearInterval(timerInterval);
                // Move to next phase
                currentPhase = (currentPhase + 1) % phases.length;
                executePhase();
            }
        }, 1000);
    }
});
