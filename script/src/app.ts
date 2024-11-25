let workExperienceBtn = document.querySelector("#work-experience-addBtn")
let academicBtn = document.querySelector("#academic-qualification-addBtn")
workExperienceBtn?.addEventListener("click", (e) => addMore(e, "work-experience"))
academicBtn?.addEventListener("click", (e) => addMore(e, "academic-qualificationField"))

function addMore(e: Event, name: string) {
    e.preventDefault()
    let textArea = document.createElement("textarea")
    textArea.id = name
    textArea.placeholder = `Enter Your ${name} ...`
    textArea.classList.add("mt-3")
    if (name === "work-experience") {
        textArea.classList.add("workExperienceFields")
    }
    else {
        textArea.classList.add("academicField")
    }
    let parent = document.querySelector(`.${name}`)
    if (name === "work-experience") parent?.insertBefore(textArea, workExperienceBtn)
    else parent?.insertBefore(textArea, academicBtn)
}

let generateResumeButton = document.querySelector("#generateIDBtn")

generateResumeButton?.addEventListener("click", (e: Event) => {
    e.preventDefault();
    document.querySelector("#nameT1")!.textContent = (document.querySelector("#nameField") as HTMLInputElement)?.value || '';
    document.querySelector("#emailT")!.textContent = (document.querySelector("#emailField") as HTMLInputElement)?.value || '';
    (document.querySelector("#emailT") as HTMLAnchorElement)!.href = `mailto:${(document.querySelector("#emailField") as HTMLInputElement)?.value || ''}`;
    document.querySelector(".phone")!.innerHTML = (document.querySelector("#contactField") as HTMLInputElement)?.value || '';
    (document.querySelector(".phone") as HTMLAnchorElement)!.href = `tel:${(document.querySelector("#contactField") as HTMLInputElement)?.value || ''}`;
    document.querySelector(".professionT")!.innerHTML = (document.querySelector("#professionField") as HTMLInputElement)?.value || '';
    document.querySelector("#addressT")!.textContent = (document.querySelector("#addressField") as HTMLTextAreaElement)?.value || '';
    (document.querySelector("#facebookT") as HTMLAnchorElement).href = (document.querySelector("#facebookLink") as HTMLInputElement)?.value || '';
    (document.querySelector("#instagramT") as HTMLAnchorElement).href = (document.querySelector("#InstagramField") as HTMLInputElement)?.value || '';
    (document.querySelector("#linkedinT") as HTMLAnchorElement).href = (document.querySelector("#linkedinField") as HTMLInputElement)?.value || '';
    // Profile Pic
    let file = (document.querySelector("#profilePic") as HTMLInputElement).files![0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        (document.querySelector("#profilePicT") as HTMLImageElement).src = reader.result as string
    }

    // console.log(reader.result);
    // Objective
    document.querySelector("#objectiveT")!.innerHTML = (document.querySelector("#objectiveField") as HTMLTextAreaElement)?.value || '';
    // Work Experience :

    let workExperienceText = document.getElementsByClassName("workExperienceFields");
    let str1 = "";
    for (let e of workExperienceText) {
        if ((e as HTMLTextAreaElement).value !== "" && (e as HTMLTextAreaElement).value !== undefined) {
            str1 += `<li>${(e as HTMLTextAreaElement).value}</li>`;
        }
    }
    document.querySelector(".experienceListT")!.innerHTML = str1;

    let academicQualifications = document.querySelectorAll(".academicField");
    let str2 = "";
    for (let academicData of academicQualifications) {
        if ((academicData as HTMLInputElement).value !== "" && (academicData as HTMLInputElement).value !== undefined) {
            str2 += `<li>${(academicData as HTMLInputElement).value}</li>`;
        }
    }
    document.querySelector(".academic-list")!.innerHTML = str2;
    (document.querySelector(".form-container") as HTMLTextAreaElement).style.display = "none";
    (document.querySelector("#resume-template") as HTMLTextAreaElement).style.display = "block";
})
