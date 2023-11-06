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
let imgpf = document.getElementById("imgprofile");
let projectList = document.getElementById("projectList");

async function fillUpData() {
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
  imgprofile.innerHTML = localStorage.imgprofile;
  imgprofile.innerHTML = localStorage.img;
  await getDataFromIndexdDb();
  createEducationView();
  createLanguageView();
  // createReviewSide();
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
    description.innerHTML = element.details;
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
    title.innerHTML = element.skillName;
    let description = document.createElement("p");
    description.innerHTML = element.skillDetail;
    lenguageContent.appendChild(title);
    lenguageContent.appendChild(description);
    singleLenguage.appendChild(lenguageContent);
    col.appendChild(singleLenguage);
    languagesSection.appendChild(col);
  });
}

function createReviewSide(dataSingle) {
  // localstorageData.experts.forEach((element) => {
  let singleReview = document.createElement("div");
  singleReview.classList.add("single-review");

  let reviewContent = document.createElement("div");
  reviewContent.classList.add("review-content");

  let description = document.createElement("p");
  description.innerHTML = dataSingle.details;
  reviewContent.appendChild(description);

  let reviewTitle = document.createElement("div");
  reviewTitle.classList.add("review-title");

  let title = document.createElement("h3");
  title.innerHTML = dataSingle.name;

  let small = document.createElement("small");
  small.innerHTML = dataSingle.desig;

  reviewTitle.appendChild(title);
  reviewTitle.appendChild(small);

  let reviewPic = document.createElement("div");
  reviewPic.classList.add("pic");

  let img = document.createElement("img");
  img.src = URL.createObjectURL(dataSingle.image);

  reviewPic.appendChild(img);

  singleReview.appendChild(reviewContent);
  singleReview.appendChild(reviewPic);
  singleReview.appendChild(reviewTitle);

  reviewSlider.appendChild(singleReview);
  // });
}

function createProjects(dataSingle) {
  // localstorageData.experts.forEach((element) => {
  let col = document.createElement("div");
  col.classList.add("col-sm-4");

  let projectitems = document.createElement("div");
  projectitems.classList.add("project-items");

  let anchor = document.createElement("a");
  anchor.classList.add("view");
  anchor.classList.add("img");
  anchor.href = dataSingle.projectUrl;

  let imgAnchor = document.createElement("img");
  imgAnchor.src = URL.createObjectURL(dataSingle.image);

  anchor.appendChild(imgAnchor);

  let projectText = document.createElement("div");
  projectText.classList.add("project-text");

  let title = document.createElement("h2");
  title.innerHTML = dataSingle.name;

  projectText.appendChild(title);

  projectitems.appendChild(anchor);
  projectitems.appendChild(projectText);


  col.appendChild(projectitems);

  projectList.appendChild(col);
  // });
}

async function getDataFromIndexdDb() {
  console.log("Indexddb function calls");
  try {
    const indexedDB = window.indexedDB;
    const request = indexedDB.open("base64Data", 1);
    request.onerror = function (event) {
      console.error("An error occurred with IndexedDB");
      console.error("Error", event);
    };
    request.onsuccess = function () {
      const db = request.result;

      const tasection = db.transaction("FormData", "readwrite");
      const store = tasection.objectStore("FormData");
      const query = store.get(localstorageData.id);

      // console.log("store : ", store);
      query.onsuccess = function () {
        console.log(query.result);
        document.querySelector(".banner-area").style.backgroundImage =
          "url(" + URL.createObjectURL(query.result.backgroundImg) + ")";

        imgpf.src = URL.createObjectURL(query.result.profileImg);

        query.result.experts.forEach((ele) => {
          createReviewSide(ele);
        });

        query.result.projects.forEach((ele) => {
          createProjects(ele);
        })
      };

      tasection.oncomplete = function () {
        db.close();
      };
      // if (store) {
      //   // document.querySelector(".banner-area").style.backgroundImage =
      //   //   "url(" + URL.createObjectURL(store.result.backgroundImg) + ")";

      //   // console.log(store.result)
      // }
    };
  } catch (err) {
    console.error(err);
  }
}

// console.log(getDataFromIndexdDb())

fillUpData();
