const year1 = document.getElementById("year1");
const year2 = document.getElementById("year2");

const currentYear = new Date().getFullYear();

year1.innerText = currentYear;
year2.innerText = currentYear;

const nav = document.getElementById("nav");

const showNav = () => {
    nav.style.display = "flex";
}

const hideNav = () => {
    nav.style.display = "none";
}

const experienceCont = document.getElementById("experienceCont");

const experience = [
    {
        year : "2024 - Present",
        achievements : [
            {
                name: "Bachelors Degree in Business Information Systems",
                organization: "Egerton University"
            },
            {
                name: "Sem Polisher Designer and Web Application Developer",
                organization: "Sem Polisher"
            }
        ]
    },
    {
        year : "2023",
        achievements : [
            {
                name: "IT support and Network Administrator",
                organization: "Kenya Electricity Generating Company"
            },
            {
                name: "Essaywizz designer and Web Application Developer",
                organization: "Essaywizz Company"
            }
        ]
    },
    {
        year : "2022",
        achievements : [
            {
                name: "Certificate in Frontend Development",
                organization: "DevTown Company"
            },
            {
                name: "Certificate in Backend Development",
                organization: "DevTown Company"
            }
        ]
    }
];


experienceCont.innerHTML = experience.map((exp) => {
    return`
    <div class="exp-card">
        <div class="point-line">
            <div class="point"></div>
            <div class="line"></div>
        </div>
        <div class="years-work">
            <div class="year">
                <h3>${exp.year}</h3>
            </div>
            <div class="work-cont">
                <div class="work">
                    <h2>${exp.achievements[0].name}</h2>
                    <p>${exp.achievements[0].organization}</p>
                </div>
                <div class="work">
                    <h2>${exp.achievements[1].name}</h2>
                    <p>${exp.achievements[1].organization}</p>
                </div>
            </div>
        </div>
    </div>
    `
})
.join("")


const skillsCont = document.getElementById("skillsCont");

const specializations = [
    {
        name:"Web Application Development",
        description:"I develop high quality web apps that meet client's specifications using various stacks.",
        projects:"80 Projects"
    },
    {
        name:"Mobile Application Development",
        description:"I develop performant cross-platform mobile apps using the Flutter SDK.",
        projects:"20 Projects"
    },
    {
        name:"UI/UX Design",
        description:"I design appealing user interfaces that make the user experience good with applications.",
        projects:"30 Projects"
    },
    {
        name:"IT Support",
        description:"I can provide support to corporate IT systems and network administration",
        projects:"3 Months"
    }
];

skillsCont.innerHTML = specializations.map((skill) => {
    return `
    <div class="skills-card">
        <div class="skills-title">
            <div class="title-cont">
                <h2>${skill.name}</h2>
                <p>${skill.description}</p>
            </div>
            <div class="skills-icon">
                <i class="fa-solid fa-object-ungroup"></i>
            </div>
        </div>
        <div class="skills-projects">
            <h3>${skill.projects}</h3>
        </div>
    </div>
    `
})
.join("")


const languages = [
    {
        name: "Vuejs",
        icon: "fa-brands fa-vuejs",
        percentage: "93%" 
    },
    {
        name: "Laravel",
        icon: "fa-brands fa-laravel",
        percentage: "87%" 
    },
    {
        name: "Python",
        icon: "fa-brands fa-python",
        percentage: "90%"  
    },
    {
        name: "Reactjs",
        icon: "fa-brands fa-react",
        percentage: "80%"  
    },
    {
        name: "Nodejs",
        icon: "fa-brands fa-node-js",
        percentage: "88%"  
    },
];

const languagesCont = document.getElementById("languagesCont");

languagesCont.innerHTML = languages.map((lang) => {
    return `
    <div class="languages-card">
        <div class="icon-percentage">
            <i class="${lang.icon}"></i>
            <h3>${lang.percentage}</h3>
        </div>
        <div class="language-name">
            <p>${lang.name}</p>
        </div>
    </div>
    `
})
.join("");  

const testimonialsCont = document.getElementById("testimonialsCont");

const testimonials = [
    {
        "name" : "Dr. Jerotich Sirma",
        "description": "Naaman excels in programming, showcases deep understanding, and contributes positively to collaborative projects. Highly recommended!",
        "designation": "Professor, Department of Accounting, Finance and Management Science, Faculty of Commerce.",
        "organisation": " Egerton University",
        "image":"./public/images/jerotichsirma.jpeg"
    },
    {
        "name" : "Clement Lubanga",
        "description": "Kengen exhibited exceptional skills and dedication during his attachment at KenGen. His work significantly contributed to our success.",
        "designation": "Senior IT Officer, Head of IT Department, Hydro Plaza Eastern Region.",
        "organisation": " Kengen",
        "image":"./public/images/user.jpeg"
    },
    {
        "name" : "Engineer Michael Tobiko",
        "description": "Mike has been an invaluable support in my programming journey. His guidance and encouragement fueled my success.",
        "designation": "Professor, Electronics and Nano Technology Engineer.",
        "organisation": " Middle East Technical University",
        "image":"./public/images/user.jpeg"
    }
];

testimonialsCont.innerHTML = testimonials.map((test) => {
    return`
    <div class="testimonials-card">
        <div class="image-name">
            <div class="image">
                <img src="${test.image}" alt="">
            </div>
            <div class="name-position">
                <h2>${test.name}</h2>
                <h3>${test.designation}<span>${test.organisation}</span></h3>
            </div>
        </div>
        <div class="testimonial-description">
            <p>"${test.description}"</p>
        </div>
    </div>
    `
}).join("");

const projectsCont = document.getElementById("projectsCont");

const projects = [
    {
        "image":"./public/images/essay.png",
        "description": "Essaywizz online writing website"
    },
    {
        "image":"./public/images/polisher.png",
        "description": "SemPolisher Studying website"
    },
    {
        "image":"./public/images/darkicons.jpeg",
        "description": "Figma designed icons"
    },
    {
        "image":"./public/images/power.jpeg",
        "description": "Admin dashboard website"
    }
];

projectsCont.innerHTML = projects.map((project) => {
    return`
    <div class="projects-card">
        <img src="${project.image}" alt="" />
        <a href="#" target="_blank">${project.description}</a>
    </div>
    `
}).join("");

const apiKey = "jHyp5ToJBZIrHEJjl";
const serviceId = "service_js6va2r";
const templateId = "template_sls2nvj";

emailjs.init(apiKey);

document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target; // Using the form directly as it is an HTML form element

    emailjs.sendForm(serviceId, templateId, form)
        .then(function (response) {
            console.log("Email sent successfully:", response);
            alert("Email sent successfully!");
        }, function (error) {
            console.error("Error sending email:", error);
            alert("Error sending email. Please try again later.");
        });
});
