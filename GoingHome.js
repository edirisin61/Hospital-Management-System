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

function showText1() {
    const check1 = document.getElementById("check-chanelling");
    const text1 =  document.getElementById("chanelling");
    if (check1.checked) {
        text1.style.display = "block";
    }
    else{
        text1.style.display = "none";
    }
}

function showText2() {
    const check2 = document.getElementById("check-laboratory services");
    const text2 =  document.getElementById("laboratory services");
    if (check2.checked) {
        text2.style.display = "block";
    }
    else{
        text2.style.display = "none";
    }
}


function showText3() {
    const check3 = document.getElementById("check-councelling");
    const text3 =  document.getElementById("councelling");
    if (check3.checked) {
        text3.style.display = "block";
    }
    else{
        text3.style.display = "none";
    }
}

function showText4() {
    const check4 = document.getElementById("check-clinic treatements");
    const text4 =  document.getElementById("clinic treatements");
    if (check4.checked) {
        text4.style.display = "block";
    }
    else{
        text4.style.display = "none";
    }
}

function showText5() {
    const check5 = document.getElementById("check-pharmacitical services");
    const text5 =  document.getElementById("pharmacitical services");
    if (check5.checked) {
        text5.style.display = "block";
    }
    else{
        text5.style.display = "none";
    }
}

function calculateTotal() {
    const check1 = document.getElementById("check-chanelling");
    const check2 = document.getElementById("check-laboratory services");
    const check3 = document.getElementById("check-councelling");
    const check4 = document.getElementById("check-clinic treatements");
    const check5 = document.getElementById("check-pharmacitical services");
    var total = 0;
    var text6 = document.getElementById("Total");


    if (check1.checked) {
        total += 5000;
    }
    else{
        total += 0;
    }

    if (check2.checked) {
        total += 12000;
    }
    else{
        total += 0;
    }

    if (check3.checked) {
        total += 15000;
    }
    else{
        total += 0;
    }

    if (check4.checked) {
        total += 17000;
    }
    else{
        total += 0;
    }

    if (check5.checked) {
        total += 8000;
    }
    else{
        total += 0;
    }
                
    text6.value = "Rs."+total+".00";

}

const createInvoice=()=>{
    const tempInvoice = {
        Patient_Name: $('#name').val(),
        Patient_Age : $('#age').val(),
        Patient_Contact: $('#ContactNumber').val(),
        total: $('#Total').val()
     };

    const database = firebase.firestore();
    database
    .collection('Invoices')
    .add(tempInvoice)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    });
} 

