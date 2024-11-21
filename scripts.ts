// Select the button and skills section elements
const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills-section") as HTMLElement;

// Function to toggle visibility
function toggleSkills() {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    } else {
        skillsSection.style.display = "none";
    }
}

// Event listener for button click
toggleSkillsButton.addEventListener("click", toggleSkills);