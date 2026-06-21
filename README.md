# The Detective's Focus | Interactive Box Breathing

A vintage, Sherlock Holmes-themed interactive web application designed to guide users through the **4-4-4-4 box breathing** relaxation technique. 

Designed with a 19th-century detective aesthetic featuring rich brownish leather textures, aged paper, and brass accents, this tool provides both visual and auditory cues to help reset the nervous system and decrease stress.

## 🕰️ Features
* **Interactive 4-4-4-4 Timer:** Precisely synchronized 4-second phases for Inhaling, Holding, Exhaling, and Holding Empty.
* **Immersive Visuals:** A central "breathing box" that smoothly expands and contracts in sync with your breath.
* **Thematic UI:** Custom CSS featuring glassmorphism, radial gradients, and vintage typography (`Playfair Display` & `Courier Prime`).
* **Audio Synchronization:** Triggers distinct audio cues for the inhale and exhale phases.

## 🛠️ Technologies Used
* **HTML5:** Semantic structure and layout.
* **CSS3:** Custom animations, transitions, and vintage styling.
* **Vanilla JavaScript:** Phase logic, strict timer loops, and DOM manipulation.

## 📂 Project Structure
```text
├── index.html   # Main layout and UI structure
├── style.css    # Vintage styling and breathing animations
├── script.js    # Breathing loop logic and audio triggers
├── inhale.mp3   # (User-provided) Audio cue for the inhale phase
└── exhale.mp3   # (User-provided) Audio cue for the exhale phase
```

## 🚀 Setup & Installation

This project is a purely static website and requires no backend or build tools.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. **Add Audio Files:** Because audio files are subjective, they are not included by default. You must add two short audio clips to the root directory of the project and name them exactly:
   * `inhale.mp3`
   * `exhale.mp3`
3. **Run Locally:**
   Simply open the `index.html` file in any modern web browser. 

## 🌐 Hosting on GitHub Pages
This project is fully ready to be hosted on GitHub Pages. 
1. Navigate to your repository **Settings > Pages**.
2. Under "Build and deployment," set the Source to **Deploy from a branch** and select your `main` branch.
3. Click **Save** and wait 1-3 minutes for deployment.

## 🫁 How Box Breathing Works
Box breathing works by distracting the mind as you count to four, calming the nervous system, and decreasing stress in the body.
1. **Inhale (4 seconds):** Draw breath in slowly and deeply.
2. **Hold (4 seconds):** Keep your lungs full without straining.
3. **Exhale (4 seconds):** Release the air steadily.
4. **Hold Empty (4 seconds):** Keep your lungs empty before the next breath.
