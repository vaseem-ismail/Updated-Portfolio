// JavaScript for Interactive Features

document.addEventListener("DOMContentLoaded", function () {
    // Navigation Links
    const navLinks = document.querySelectorAll("#nav a");
    navLinks.forEach((link, index) => {
        link.innerText = ["Home", "About", "Skills", "Achievements", "Contact"][index];
        link.href = ["#home", "#intro", "#skill", "#achievements", "#constact"][index];
    });

    // Dynamic Skill Section
    const skills = ["HTML", "CSS", "JavaScript", "Python", "MongoDB"];
    const skillSection = document.querySelector("#skill");
    const skillImages = skillSection.querySelectorAll("img");
    const skillTitles = skillSection.querySelectorAll("h3");

    skills.forEach((skill, index) => {
        if (skillImages[index]) {
            skillImages[index].src = `images/${skill.toLowerCase()}.png`; // Assuming images exist
            skillImages[index].alt = skill;
        }
        if (skillTitles[index]) {
            skillTitles[index].innerText = skill;
        }
    });

    // Dynamic Achievements Section
    const achievements = [
        { name: "Project 1", link: "#", img: "images/project1.png" },
        { name: "Project 2", link: "#", img: "images/project2.png" },
        { name: "Project 3", link: "#", img: "images/project3.png" }
    ];
    const achievementLinks = document.querySelectorAll("#achievements a");
    const achievementImages = document.querySelectorAll("#achievements img");

    achievements.forEach((ach, index) => {
        if (achievementImages[index]) {
            achievementImages[index].src = ach.img;
            achievementImages[index].alt = ach.name;
        }
        if (achievementLinks[index]) {
            achievementLinks[index].href = ach.link;
            achievementLinks[index].innerText = ach.name;
        }
    });
});
