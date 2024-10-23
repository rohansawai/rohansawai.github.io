//About me hover over profile picture effects

var i = {};
i.am = 'a Software Engineer';

let profilePic = document.getElementById('profileGreen');
let profileBorder = document.getElementById('boxborder');

function hoverOnImage () {
    profilePic.src = "Resources/Images/PhotoMain.jpg";
    profileBorder.style.top = "-240px";
    profileBorder.style.left = "10px";
}


function hoverOffImage () {
    profilePic.src = "Resources/Images/Parth-green.png";
    profileBorder.style.top = "-220px";
    profileBorder.style.left = "30px";
}

//Experience Tab Sections

function openExperience(evt, experienceName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(experienceName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openEducation(evt, educationName) {
    // Declare all variables
    var i, tabcontentedu, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontentedu = document.getElementsByClassName("tabcontentEdu");
    for (i = 0; i < tabcontentedu.length; i++) {
      tabcontentedu[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(educationName).style.display = "block";
    evt.currentTarget.className += " active";
}