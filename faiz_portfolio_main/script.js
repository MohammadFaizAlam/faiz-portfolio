'use strict';

// ============================ Navbar ============================ //

window.addEventListener('scroll', function () {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// ============================ Portfolio Gallery ============================ //

let filterContainer = document.querySelector(".gallery-filter");
let galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        // deactivates existing active filter item
        filterContainer.querySelector(".active").classList.remove("active");
        // activates new filter item
        event.target.classList.add("active");
        let filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});

// ============================ Review Carousel ============================ //
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1200: {
            items: 2
        }
    }
});

// ============================ Multiple service cards ============================ //


const servicesCardDataArray = [
    {
        serviceLogo: "fa-solid fa-laptop",
        heading: "Freelancing",
        about: "As Your Trusted Freelancer: Empowering Your Projects with Bespoke Solutions, Expertise, On- time Delivery, and Client - Centric Approach for Lasting Success"
    },

    {
        serviceLogo: "fa-solid fa-code",
        heading: "Front-end Developement",
        about: "Crafting Seamless Digital Experiences: Leveraging Front-end Development Expertise to Build Intuitive Interfaces and Elevate User Engagement"
    },

    {
        serviceLogo: "fa-solid fa-pen-nib",
        heading: "Graphic Design",
        about: "Unlocking Creativity: Elevating Brands with Stunning Graphic Designing, Captivating Visuals, and Impactful Communication Solutions Beyond Imagination"
    },

    {
        serviceLogo: "fa-solid fa-chart-line",
        heading: "Trading",
        about: "Empowering Your Financial Growth: Leveraging Expert Trading Strategies for Profitable Opportunities and Lasting Market Success"
    },

    {
        serviceLogo: "fa-solid fa-magnifying-glass-chart",
        heading: "Marketing",
        about: "Amplifying Your Brand's Reach: Tailored Marketing Solutions, Data-Driven Strategies, and Engaging Campaigns for Sustainable Business Growth"
    },

    {
        serviceLogo: "fa-solid fa-fill-drip",
        heading: "Web Design",
        about: "Crafting Digital Masterpieces: Innovative Web Design Solutions, User-Centric Interfaces, and Seamless Functionality for an Unforgettable Online Presence"
    },
];

const servicesContainer = document.querySelector('.service_card_container');

const servicesMethods = () => {
    servicesCardDataArray.map((servicesData) => {
        const servicesElement = document.createElement('div');
        servicesElement.classList.add('service-card'); // Update class name to 'service-card'
        servicesElement.innerHTML = `
            <div class="card-content">
                <i class="${servicesData.serviceLogo}"></i>
                <h5>${servicesData.heading}</h5>
                <p>${servicesData.about}</p>
            </div>
        `;

        servicesContainer.appendChild(servicesElement);
    });
};

servicesMethods();

// ============================ Portfolio multiple cards ============================ //

const portfolioItems = [
    {
        category: 'brand',
        imageUrl: 'images/portfolio-img-7.jpg',
        title: 'Sushi Website',
        link: 'https://faiz-sushiman.netlify.app/',
    },
    {
        category: 'design',
        imageUrl: 'images/portfolio-img-8.jpg',
        title: 'Restaurant Website',
        link: 'https://grilli.netlify.app',
    },
    {
        category: 'brand',
        imageUrl: 'images/portfolio-img-9.jpg',
        title: 'AgencyGrow Website',
        link: 'https://agencygrow.netlify.app',
    },
    {
        category: 'photos',
        imageUrl: 'images/portfolio-img-10.jpg',
        title: 'Metaverse Website',
        link: 'https://faiz-metaverse.netlify.app',
    },
    {
        category: 'design',
        imageUrl: 'images/portfolio-img-11.jpg',
        title: 'Banking Website',
        link: 'https://faizhoobank.netlify.app',
    },
    {
        category: 'photos',
        imageUrl: 'images/portfolio-img-12.jpg',
        title: 'Quran Player Website',
        link: 'https://holyquranplayer.netlify.app',
    },
];

const contentWrapper = document.querySelector('.content-wrapper');

portfolioItems.forEach((item) => {
    const galleryItem = `
        <div class="gallery-item ${item.category}">
            <div class="gallery-item-inner">
                <img src="${item.imageUrl}" alt="${item.category}" height="450">
                <div class="overlay">
                    <h5>${item.title}</h5>
                    <a href="${item.link}" style="text-decoration: none;" target="_blank">
                        <p>More Info</p>
                    </a>
                </div>
            </div>
        </div>
    `;
    contentWrapper.insertAdjacentHTML('beforeend', galleryItem);
});

// ============================ Skills multiple bars ============================ //

const skillsDataArray = [
    {
        skillName: "HTML",
        skillClass: "html",
    },
    {
        skillName: "CSS",
        skillClass: "css",
    },
    {
        skillName: "Javascript",
        skillClass: "js",
    },
    {
        skillName: "React",
        skillClass: "react",
    },
    {
        skillName: "Tailwind",
        skillClass: "tailwind",
    },
    {
        skillName: "Marketing",
        skillClass: "marketing",
    },
    {
        skillName: "Trading",
        skillClass: "trading",
    },
    {
        skillName: "Sales",
        skillClass: "sales",
    },
];

const skillsContainer = document.querySelector('.skills_container');

const skillsMethods = () => {
    skillsDataArray.map((skillData) => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('progress-item');
        skillElement.innerHTML = `
            <div class="text">
                <h5>${skillData.skillName}</h5>
            </div>
            <div class="progress-bar">
                <div class="progress-line ${skillData.skillClass}"></div>
            </div>
        `;

        skillsContainer.appendChild(skillElement);
    });
};

skillsMethods();

// ============================ Resume multiple sections ============================ //

const experienceDataArray = [
    {
        position: "Front-end Developer",
        duration: "2021 - Present",
        description: "Being a 15-year-old and as a Proficient Front-end Developer, With a Rich 2-Year Experience, I've Mastered Diverse Front-end Languages",
    },
    {
        position: "Trading",
        duration: "2022 - Present",
        description: "With 1.5 Years of Astute Trading Experience, I've Garnered Profits Amidst Risks and Setbacks, Navigating the Volatile Terrain",
    },
    {
        position: "Marketing",
        duration: "2022 - Present",
        description: "Innovative marketer with a flair for captivating campaigns, driving results, and data-driven strategies, dedicated to achieving business success",
    },
];

const educationDataArray = [
    {
        institution: "School",
        duration: "2011 - 2024",
        description: "As a diligent Class 10 student at Raigad Military School, I've attained commendable academic achievements, enriching my knowledge significantly",
    },
    {
        institution: "Boards",
        duration: "2023 - 2024",
        description: "As I approach the culmination of my high school journey, brimming with anticipation for the 2024 college entry, I'm preparing ardently for my upcoming board exams",
    },
    {
        institution: "Business Studies",
        duration: "2020 - Present",
        description: "At the tender age of 15, I've diligently absorbed numerous business strategies, marketing tactics, and psychological insights, aspiring for a radiant future",
    },
];

const experienceContainer = document.querySelector('.experience');
const educationContainer = document.querySelector('.education');

const generateResumeItems = (data, container) => {
    data.map((itemData) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('resume-item');
        itemElement.innerHTML = `
            <div class="item-arrow"></div>
            <h5>${itemData.position || itemData.institution}</h5>
            <span>${itemData.duration}</span>
            <p>${itemData.description}</p>
        `;

        container.appendChild(itemElement);
    });
};

generateResumeItems(experienceDataArray, experienceContainer);
generateResumeItems(educationDataArray, educationContainer);

// ============================ Carousel multiple sections ============================ //

// JavaScript
// const reviewItems = [
//     {
//         imgSrc: "images/Review-img-10.jpg",
//         details: "Faiz is a really good friend of mine, we are friends for almost about 5 years. He's a web developer. He creates beautiful websites and designs them too.",
//         name: "Nidhay Vishwakarma",
//         rating: "5.0",
//     },
//     {
//         imgSrc: "images/Review-img-11.jpg",
//         details: "Faiz is really good at coding, designing websites, designing apps, and he is good at playing games as well. I have been his friend for almost 8 years.",
//         name: "Ziyad Khan",
//         rating: "4.9",
//     },
//     {
//         imgSrc: "images/Review-img-8.jpg",
//         details: "I am also a developer, though I haven't worked with him, but I can tell from his work he is really good at coding. He is also really good at studies.",
//         name: "Abdul Aziz",
//         rating: "4.9",
//     },
//     {
//         imgSrc: "images/Review-img-9.jpg",
//         details: "I design and develop apps and games. I have worked with Faiz, and his problem-solving skills are at the next level.",
//         name: "Aman Rahikwal",
//         rating: "4.7",
//     },
// ];

// function renderReviewItems(items) {
//     const carouselContainer = document.getElementById("reviews-carousel");
//     carouselContainer.innerHTML = "";

//     items.forEach((item) => {
//         const reviewItem = `
//       <div class="item">
//         <div class="img-box">
//           <img src="${item.imgSrc}" alt="" height="150">
//         </div>
//         <div class="text-holder">
//           <p class="details">${item.details}</p>
//           <h6 class="name">${item.name}</h6>
//           <div class="rating">
//             <i class="fa-regular fa-star"></i>
//             <span>${item.rating}</span>
//           </div>
//         </div>
//       </div>
//     `;

//         carouselContainer.innerHTML += reviewItem;
//     });
// }

// // Call the function to render the review items
// renderReviewItems(reviewItems);

