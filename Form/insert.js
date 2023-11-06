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
let profileImage = document.getElementById("profileImage"); // used
let projectImage = document.getElementById("projectImage");
let expertImage = document.getElementById("expertImage");
let projectGitUrl = document.getElementById("projectGitUrl");
let addSkillBtn = document.getElementById("addSkillToList");
let addSkillToList = document.getElementById("skillInput");
let skillDetail = document.getElementById("skillDetail");
let skillBox = document.getElementById("skillBox");


let arrEdu = [];
let arrProject = [];
let arrExperts = [];
let selectedOptions = [];

bgImage.addEventListener("change", function (e) {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const dataURL = e.target.result;

      // Store the data URL in localStorage
      localStorage.setItem("backgroundImage", dataURL);
    };
    reader.readAsDataURL(file);
  }
});

profileImage.addEventListener("change", function (e) {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const dataURL = e.target.result;

      // Store the data URL in localStorage
      localStorage.setItem("profileImage", dataURL);
    };
    reader.readAsDataURL(file);
  }
});

function createEducationCols() {
  if (!eduName.value == "" || !eduYear.value == "") {
    let data = {
      name: eduName.value,
      year: eduYear.value,
      details: eduDetails.value,
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
      image: projectImage.files[0],
      projectUrl: projectGitUrl.value,
    };
    console.log("Project Link : ", data);
    arrProject.push(data);
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = data.name;
    tr.appendChild(td);
    projectsList.appendChild(tr);
  }
}
console.log()

function createExpertsLists() {
  if (!expertsDesig.value == "" || !expertsName.value == "") {
    let data = {
      image: expertImage.files[0],
      name: expertsName.value,
      desig: expertsDesig.value,
      details: expertDetails.value
    };
    console.log("experts: ", data);
    arrExperts.push(data);
    let tr = document.createElement("tr");
    let tdDesig = document.createElement("td");
    let tdName = document.createElement("td");
    tdDesig.innerHTML = data.desig;
    tdName.innerHTML = data.name;
    tr.appendChild(tdName);
    tr.appendChild(tdDesig);
    expertsList.appendChild(tr);
  }
}

function saveInformation() {
  // for (var i = 0; i < userLang; i++) {
  //   if (userLang.options[i].selected) {
  //     selectedOptions.push(userLang.options[i].value);
  //   }
  // }

  let uniqueId = Math.floor(Math.random() * 10000)

  let data = {
    id: uniqueId,
    userName: userName.value,
    userDetail: userDetail.value,
    userLang: selectedOptions,
    facebookLink: facebookLink.value,
    instagramLink: instagramLink.value,
    twitterLink: twitterLink.value,
    whatsappNumber: whatsappNumber.value,
    userAddress: userAddress.value,
    webUrl: webUrl.value,
    educationDetails: arrEdu,
  };


  // let base64Data =;

  const indexedDB = window.indexedDB;
  // 2
  const request = indexedDB.open("base64Data", 1);
  request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error("Error", event);
  };
  
  request.onupgradeneeded = function () {
    //1
    const db = request.result;
    //2
    const store = db.createObjectStore("FormData", { keyPath: "id" });
    //3
    // store.createIndex("getData", ["experts"], { unique: false }); 
  };

  request.onsuccess = function () {
    console.log("Database opened successfully");

    const db = request.result;

    // 1
    const transaction = db.transaction("FormData", "readwrite");

    //2
    const store = transaction.objectStore("FormData");
    // const getData = store.index("getData");

    store.put({
      id: uniqueId,
      experts: arrExperts,
      projects: arrProject,
      backgroundImg : bgImage.files[0],
      profileImg : profileImage.files[0]
    });

    //4
    const getDataQuery = store.get(uniqueId);
    // 5
    getDataQuery.onsuccess = function () {
      console.log("getDataQuery", getDataQuery.result);
    };

    // 6
    transaction.oncomplete = function () {
      db.close();
    };

  };
  
  localStorage.setItem("isset", true);
  localStorage.setItem("siteData", JSON.stringify(data));
  console.log("Data of the form", data);
  window.location.reload()
}

addSkillBtn.addEventListener("click" , () => {

    let data = {
      skillName: addSkillToList.value,
      skillDetail: skillDetail.value
    };
    console.log("experts: ", data);
    selectedOptions.push(data);
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdDetail = document.createElement("td");
    tdName.innerHTML = data.skillName;
    tdDetail.innerHTML = data.skillDetail;
    tr.appendChild(tdName);
    skillBox.appendChild(tr);
 });