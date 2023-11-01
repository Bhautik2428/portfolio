// let navbarBrand = document.getElementById("navbarBrand");
// let localstorageData = JSON.parse(localStorage.getItem("siteData"));
// let userName = document.getElementById("userName");
// let aboutName = document.querySelector(".text-info");
// let aboutSec = document.querySelector("#aboutSec");
// let facebookLink = document.querySelector("#facebookLink");
// let twitterLink = document.querySelector("#twitterLink");
// let instagramLink = document.querySelector("#instagramLink");
// let mainEducation = document.querySelector(".main-education");
// let languagesSection = document.querySelector("#languagesSection");
// let reviewSlider = document.querySelector("#review-slider");
// let addressUser = document.querySelector("#addressUser");
// let whatsappNumber = document.querySelector("#whatsappNumber");
// let webUrl = document.querySelector("#webUrl");

// function fillUpData() {
//   console.log(localstorageData);
//   navbarBrand.innerHTML = localstorageData.userName;
//   userName.innerHTML = localstorageData.userName;
//   aboutName.innerHTML = localstorageData.userName;
//   aboutSec.innerHTML = localstorageData.userDetail;
//   facebookLink.href = localstorageData.facebookLink;
//   twitterLink.href = localstorageData.twitterLink;
//   instagramLink.href = localstorageData.instagramLink;
//   addressUser.innerHTML = localstorageData.userAddress;
//   whatsappNumber.innerHTML = localstorageData.whatsappNumber;
//   webUrl.innerHTML = localstorageData.webUrl;

//   createEducationView();
//   createLanguageView();
//   createReviewSide();
// }

// function createEducationView() {
//   localstorageData.educationDetails.forEach((element) => {
//     let education = document.createElement("div");
//     education.classList.add("education");
//     let educationIcon = document.createElement("div");
//     educationIcon.classList.add("education-icon");
//     let year = document.createElement("span");
//     year.classList.add("year");
//     year.innerHTML = element.year;
//     educationIcon.appendChild(year);
//     let educationContent = document.createElement("div");
//     educationContent.classList.add("education-content");
//     let title = document.createElement("h3");
//     title.classList.add("title");
//     title.innerHTML = element.name;
//     let description = document.createElement("p");
//     description.classList.add("description");
//     description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nunc
//         faucibus a pellentesque sit amet porttitor eget dolor. Blandit libero
//         volutpat sed cras ornare arcu dui vivamus arcu.`;
//     educationContent.appendChild(title);
//     educationContent.appendChild(description);
//     education.appendChild(educationIcon);
//     education.appendChild(educationContent);
//     mainEducation.appendChild(education);
//   });
// }

// function createLanguageView() {
//   localstorageData.userLang.forEach((element) => {
//     let col = document.createElement("div");
//     col.classList.add("col-xs-12");
//     col.classList.add("col-sm-6");
//     col.classList.add("col-md-4");

//     let singleLenguage = document.createElement("div");
//     singleLenguage.classList.add("single-lenguage");
//     singleLenguage.classList.add("text-center");

//     let lenguageContent = document.createElement("div");
//     lenguageContent.classList.add("lenguage-content");

//     let title = document.createElement("h3");
//     title.innerHTML = element;
//     let description = document.createElement("p");
//     description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nunc
//         faucibus a pellentesque sit amet porttitor eget dolor. Blandit libero
//         volutpat sed cras ornare arcu dui vivamus arcu.`;
//     lenguageContent.appendChild(title);
//     lenguageContent.appendChild(description);
//     singleLenguage.appendChild(lenguageContent);
//     col.appendChild(singleLenguage);
//     languagesSection.appendChild(col);
//   });
// }

// function createReviewSide() {

//   localstorageData.experts.forEach((element) => {
//     let singleReview = document.createElement("div");
//     singleReview.classList.add("single-review");

//     let reviewContent = document.createElement("div");
//     reviewContent.classList.add("review-content");
    
//     let description = document.createElement("p");
//     description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nunc
//         faucibus a pellentesque sit amet porttitor eget dolor. Blandit libero
//         volutpat sed cras ornare arcu dui vivamus arcu.`;
//     reviewContent.appendChild(description);

//     let reviewTitle = document.createElement("div");
//     reviewTitle.classList.add("review-title");

//     let title = document.createElement("h3");
//     title.innerHTML = element.name;

//     let small = document.createElement("small");
//     small.innerHTML = element.desig;

//     reviewTitle.appendChild(title);
//     reviewTitle.appendChild(small);

//     singleReview.appendChild(reviewContent);
//     singleReview.appendChild(reviewTitle);

//     reviewSlider.appendChild(singleReview);
//   });
// }

// fillUpData();


let navbarBrand = document.getElementById("navbarBrand");
let localstorageData = JSON.parse(localStorage.getItem("siteData"));
let userName = document.getElementById("userName");
let aboutName = document.querySelector(".text-info");
let aboutSec = document.querySelector("#aboutSec");
let facebookLink = document.querySelector("#facebookLink");
let twitterLink = document.querySelector("#twitterLink");
let instagramLink = document.querySelector("#instagramLink");
let mainEducation = document.querySelector(".main-education");
let languagesSection = document.querySelector("#languagesSection");
let reviewSlider = document.querySelector("#review-slider");
let addressUser = document.querySelector("#addressUser");
let whatsappNumber = document.querySelector("#whatsappNumber");
let webUrl = document.querySelector("#webUrl");
let imgpf = document.getElementById("imgprofile")

function fillUpData() {
  console.log(localstorageData);
  navbarBrand.innerHTML = localstorageData.userName;
  userName.innerHTML = localstorageData.userName;
  aboutName.innerHTML = localstorageData.userName;
  aboutSec.innerHTML = localstorageData.userDetail;
  facebookLink.href = localstorageData.facebookLink;
  twitterLink.href = localstorageData.twitterLink;
  instagramLink.href = localstorageData.instagramLink;
  addressUser.innerHTML = localstorageData.userAddress;
  whatsappNumber.innerHTML = localstorageData.whatsappNumber;
  webUrl.innerHTML = localstorageData.webUrl;
  imgprofile.innerHTML = localStorage.imgprofile; // add
  imgprofile.innerHTML = localStorage.img //addddd
  createEducationView(); 
  createLanguageView();
  createReviewSide();
}

function createEducationView() {
  localstorageData.educationDetails.forEach((element) => {
    let education = document.createElement("div");
    education.classList.add("education");
    let educationIcon = document.createElement("div");
    educationIcon.classList.add("education-icon");
    let year = document.createElement("span");
    year.classList.add("year");
    year.innerHTML = element.year;
    educationIcon.appendChild(year);
    let educationContent = document.createElement("div");
    educationContent.classList.add("education-content");
    let title = document.createElement("h3");
    title.classList.add("title");
    title.innerHTML = element.name;
    let description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nunc
        faucibus a pellentesque sit amet porttitor eget dolor. Blandit libero
        volutpat sed cras ornare arcu dui vivamus arcu.`;
    educationContent.appendChild(title);
    educationContent.appendChild(description);
    education.appendChild(educationIcon);
    education.appendChild(educationContent);
    mainEducation.appendChild(education);
  });
}

function createLanguageView() {
  localstorageData.userLang.forEach((element) => {
    let col = document.createElement("div");
    col.classList.add("col-xs-12");
    col.classList.add("col-sm-6");
    col.classList.add("col-md-4");

    let singleLenguage = document.createElement("div");
    singleLenguage.classList.add("single-lenguage");
    singleLenguage.classList.add("text-center");

    let lenguageContent = document.createElement("div");
    lenguageContent.classList.add("lenguage-content");

    let title = document.createElement("h3");
    title.innerHTML = element;
    let description = document.createElement("p");
    description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nunc
        faucibus a pellentesque sit amet porttitor eget dolor. Blandit libero
        volutpat sed cras ornare arcu dui vivamus arcu.`;
    lenguageContent.appendChild(title);
    lenguageContent.appendChild(description);
    singleLenguage.appendChild(lenguageContent);
    col.appendChild(singleLenguage);
    languagesSection.appendChild(col);
  });
}

function createReviewSide() {

  localstorageData.experts.forEach((element) => {
    let singleReview = document.createElement("div");
    singleReview.classList.add("single-review");

    let reviewContent = document.createElement("div");
    reviewContent.classList.add("review-content");
    
    let description = document.createElement("p");
    description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nunc
        faucibus a pellentesque sit amet porttitor eget dolor. Blandit libero
        volutpat sed cras ornare arcu dui vivamus arcu.`;
    reviewContent.appendChild(description);

    let reviewTitle = document.createElement("div");
    reviewTitle.classList.add("review-title");

    let title = document.createElement("h3");
    title.innerHTML = element.name;

    let small = document.createElement("small");
    small.innerHTML = element.desig;

    reviewTitle.appendChild(title);
    reviewTitle.appendChild(small);

    singleReview.appendChild(reviewContent);
    singleReview.appendChild(reviewTitle);

    reviewSlider.appendChild(singleReview);
  });
}



fillUpData();
