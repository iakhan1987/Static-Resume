// Select the button and skills section elements
var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills-section");
// Function to toggle visibility
function toggleSkills() {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
}
// Event listener for button click
toggleSkillsButton.addEventListener("click", toggleSkills);
