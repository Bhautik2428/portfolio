let userName = document.getElementById("userName");
let userDetail = document.getElementById("userDetails");
let userLang = document.getElementById("userLang");
let facebookLink = document.getElementById("facebookLink");
let instagramLink = document.getElementById("userName");
let twitterLink = document.getElementById("twitterLink");
let whatsappNumber = document.getElementById("whatsappNumber");
let userAddress = document.getElementById("userAddress");
let webUrl = document.getElementById("webUrl");
let eduName = document.getElementById("eduName");
let eduYear = document.getElementById("eduYear");
let expertsDesig = document.getElementById("expertsDesig");
let expertsName = document.getElementById("expertsName");
let projectName = document.getElementById("projectName");
let educationBox = document.getElementById("educationBox");
let projectsList = document.getElementById("projectsList");
let expertsList = document.getElementById("ExpertsList");
let bgImage = document.getElementById("bgImage");
let profileImage = document.getElementById("profileImage") // used
let projectImage = document.getElementById("projectImage")
let expertImage = document.getElementById("expertImage");

let arrEdu = [];
let arrProject = [];
let arrExperts = [];
let selectedOptions = [];

function createEducationCols() {
  if (!eduName.value == "" || !eduYear.value == "") {
    let data = {
      name: eduName.value,
      year: eduYear.value,
    };
    arrEdu.push(data);
    let tr = document.createElement("tr");
    let tdYear = document.createElement("td");
    let tdName = document.createElement("td");
    tdYear.innerHTML = data.year;
    tdName.innerHTML = data.name;
    tr.appendChild(tdYear);
    tr.appendChild(tdName);
    educationBox.appendChild(tr);
    // tr.innerHTML = document
  }
}

function createProjectCols() {
  if (!projectName.value == "") {
    let data = {
      name: projectName.value,
      // project image 
      image: URL.createObjectURL(projectImage.files[0])
    }
    arrProject.push(data);
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = data.name;
    tr.appendChild(td);
    projectsList.appendChild(tr);
  }
}

function createExpertsLists() {
  if (!expertsDesig.value == "" || !expertsName.value == "") {
    let data = {
      image: URL.createObjectURL(expertImage.files[0]),
      name: expertsName.value,
      desig: expertsDesig.value,
    };
    arrExperts.push(data);
    let tr = document.createElement("tr");
    let tdDesig = document.createElement("td");
    let tdName = document.createElement("td");
    tdDesig.innerHTML = data.desig;
    tdName.innerHTML = data.name;
    tr.appendChild(tdName);
    tr.appendChild(tdDesig);
    expertsList.appendChild(tr);
    // tr.innerHTML = document
  }
}

// function encodeImageFileAsURL() {

//   var filesSelected = document.getElementById("profileImage").files;
//   if (filesSelected.length > 0) {
//     var fileToLoad = filesSelected[0];
//     var fileReader = new FileReader();
//     fileReader.onload = function(fileLoadedEvent) {
//       var srcData = fileLoadedEvent.target.result; // <--- data: base64
//       var newImage = document.createElement('img');
//       newImage.src = srcData;
//       document.getElementById("imgprofile").innerHTML = newImage.outerHTML;
//       alert("Converted Base64 version is " + document.getElementById("imgprofile").innerHTML);
//       console.log("Converted Base64 version is " + document.getElementById("imgprofile").innerHTML);
//     }
//     fileReader.readAsDataURL(fileToLoad);
//   }
// }

function saveInformation() {
  for (var i = 0; i < userLang.options.length; i++) {
    if (userLang.options[i].selected) {
      selectedOptions.push(userLang.options[i].value);
    }
  }

  let data = {
    // backgroundImage : window.URL.createObjectURL(bgImage),
    // profileImage : window.URL.createObjectURL(profileImage), 
    userName: userName.value,
    profileImage: profileImage.value, // used , add   
    userDetail: userDetail.value,
    userLang: selectedOptions,
    facebookLink: facebookLink.value,
    instagramLink: instagramLink.value,
    twitterLink: twitterLink.value,
    whatsappNumber: whatsappNumber.value,
    userAddress: userAddress.value,
    webUrl: webUrl.value,
    educationDetails: arrEdu,
    experts: arrExperts,
    projects: arrProject,
  };

  localStorage.setItem("isset" , true);
  localStorage.setItem('imgBase64', this.img);
  localStorage.setItem("siteData" , JSON.stringify(data));
  console.log("Data of the form", data);
}