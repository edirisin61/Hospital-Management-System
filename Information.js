const showLinksButton1 = document.getElementById("showLinksButton-one");
const linksContainer1 = document.getElementById("linksContainer-one");
let hoverTimeOut1;

showLinksButton1.addEventListener("mouseover", function() {
    clearTimeout(hoverTimeOut1);
    linksContainer1.style.display = "block";
});

showLinksButton1.addEventListener("mouseout", function() {
    clearTimeout(hoverTimeOut1);
    hoverTimeOut1 = setTimeout(function() {
        linksContainer1.style.display = "none";
    }, 2000);
});

const showLinksButton2 = document.getElementById("showLinksButton-two");
const linksContainer2 = document.getElementById("linksContainer-two");
let hoverTimeOut2;

showLinksButton2.addEventListener("mouseover", function() {
    clearTimeout(hoverTimeOut2);
    linksContainer2.style.display = "block";
});

showLinksButton2.addEventListener("mouseout", function() {
    clearTimeout(hoverTimeOut2);
    hoverTimeOut2 = setTimeout(function() {
        linksContainer2.style.display = "none";
    }, 2000);
});

const showLinksButton3 = document.getElementById("showLinksButton-three");
const linksContainer3 = document.getElementById("linksContainer-three");
let hoverTimeOut3;

showLinksButton3.addEventListener("mouseover", function() {
    clearTimeout(hoverTimeOut3);
    linksContainer3.style.display = "block";
});

showLinksButton3.addEventListener("mouseout", function() {
    clearTimeout(hoverTimeOut3);
    hoverTimeOut3 = setTimeout(function() {
        linksContainer3.style.display = "none";
    }, 2000);
});

const createDoctor=()=>{
    const tempDoctor = {
        name: $('#name').val(),
        age : $('#age').val(),
        gender: $('#Gender').val(),
        contact: $('#contact').val(),
        specialization: $('#specialization').val()
     };

    const database = firebase.firestore();
    database
    .collection('doctors')
    .add(tempDoctor)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    });
}

function loadPage() {
    window.location.href = 'registration.html';
}