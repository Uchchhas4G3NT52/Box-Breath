document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn'); // New Stop Button
    
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
    let instructionTimeout; // Added to track the timeout

    const phases = [
        { text: "Inhale", action: "inhale", sound: audioInhale },
        { text: "Hold", action: "hold-top", sound: null },
        { text: "Exhale", action: "exhale", sound: audioExhale },
        { text: "Hold Empty", action: "hold-bottom", sound: null }
    ];

    // START BUTTON LOGIC
    startBtn.addEventListener('click', () => {
        startScreen.classList.remove('active');
        startScreen.classList.add('hidden');
        instructionScreen.classList.remove('hidden');
        instructionScreen.classList.add('active');

        instructionTimeout = setTimeout(() => {
            instructionScreen.classList.remove('active');
            instructionScreen.classList.add('hidden');
            breathingScreen.classList.remove('hidden');
            breathingScreen.classList.add('active');
            
            startBreathingCycle();
        }, 6000);
    });

    // STOP BUTTON LOGIC
    stopBtn.addEventListener('click', () => {
        // 1. Stop the countdown timer
        clearInterval(timerInterval);
        
        // 2. Stop and reset any playing audio
        audioInhale.pause();
        audioInhale.currentTime = 0;
        audioExhale.pause();
        audioExhale.currentTime = 0;
        
        // 3. Reset the phase and CSS animation classes
        currentPhase = 0;
        breathingBox.className = 'breathing-box'; 
        phaseText.innerText = "Prepare...";
        timerDisplay.innerText = "4";
        
        // 4. Hide Breathing Screen, Show Start Screen
        breathingScreen.classList.remove('active');
        breathingScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        startScreen.classList.add('active');
    });

    function startBreathingCycle() {
        executePhase(); 
    }

    function executePhase() {
        const phase = phases[currentPhase];
        
        phaseText.innerText = phase.text;
        timeLeft = 4;
        timerDisplay.innerText = timeLeft;
        
        breathingBox.className = 'breathing-box ' + phase.action;

        if (phase.sound) {
            phase.sound.currentTime = 0; 
            phase.sound.play().catch(e => console.log("Audio play blocked by browser until interacted."));
        }

        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft > 0) {
                timerDisplay.innerText = timeLeft;
            } else {
                clearInterval(timerInterval);
                currentPhase = (currentPhase + 1) % phases.length;
                executePhase();
            }
        }, 1000);
    }
});
