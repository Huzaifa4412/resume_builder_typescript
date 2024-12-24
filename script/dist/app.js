let workExperienceBtn = document.querySelector("#work-experience-addBtn");
let academicBtn = document.querySelector("#academic-qualification-addBtn");
workExperienceBtn?.addEventListener("click", (e) => addMore(e, "work-experience"));
academicBtn?.addEventListener("click", (e) => addMore(e, "academic-qualificationField"));
function addMore(e, name) {
    e.preventDefault();
    let textArea = document.createElement("textarea");
    textArea.id = name;
    textArea.placeholder = `Enter Your ${name} ...`;
    textArea.classList.add("mt-3");
    if (name === "work-experience") {
        textArea.classList.add("workExperienceFields");
    }
    else {
        textArea.classList.add("academicField");
    }
    let parent = document.querySelector(`.${name}`);
    if (name === "work-experience")
        parent?.insertBefore(textArea, workExperienceBtn);
    else
        parent?.insertBefore(textArea, academicBtn);
}
let generateResumeButton = document.querySelector("#generateIDBtn");
generateResumeButton?.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#nameT1").textContent = document.querySelector("#nameField")?.value || '';
    document.querySelector("#emailT").textContent = document.querySelector("#emailField")?.value || '';
    document.querySelector("#nameT2").textContent = document.querySelector("#nameField")?.value || '';
    document.querySelector("#emailT").href = `mailto:${document.querySelector("#emailField")?.value || ''}`;
    document.querySelector(".phone").innerHTML = document.querySelector("#contactField")?.value || '';
    document.querySelector(".phone").href = `tel:${document.querySelector("#contactField")?.value || ''}`;
    document.querySelector(".professionT").innerHTML = document.querySelector("#professionField")?.value || '';
    document.querySelector("#addressT").textContent = document.querySelector("#addressField")?.value || '';
    document.querySelector("#facebookT").href = document.querySelector("#facebookLink")?.value || '';
    document.querySelector("#instagramT").href = document.querySelector("#InstagramField")?.value || '';
    document.querySelector("#linkedinT").href = document.querySelector("#linkedinField")?.value || '';
    // Profile Pic
    let file = document.querySelector("#profilePic").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        document.querySelector("#profilePicT").src = reader.result;
    };
    // console.log(reader.result);
    // Objective
    document.querySelector("#objectiveT").innerHTML = document.querySelector("#objectiveField")?.value || '';
    // Work Experience :
    let workExperienceText = document.getElementsByClassName("workExperienceFields");
    let str1 = "";
    for (let e of workExperienceText) {
        if (e.value !== "" && e.value !== undefined) {
            str1 += `<li>${e.value}</li>`;
        }
    }
    document.querySelector(".experienceListT").innerHTML = str1;
    let academicQualifications = document.querySelectorAll(".academicField");
    let str2 = "";
    for (let academicData of academicQualifications) {
        if (academicData.value !== "" && academicData.value !== undefined) {
            str2 += `<li>${academicData.value}</li>`;
        }
    }
    document.querySelector(".academic-list").innerHTML = str2;
    document.querySelector(".form-container").style.display = "none";
    document.querySelector("#resume-template").style.display = "block";
});
export {};
