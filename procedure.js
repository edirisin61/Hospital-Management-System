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

function medicine() {
        const sNumber = document.forms["myForm"]["sNumber"].value;
        const name = document.forms["myForm"]["name"].value;
        const quantity = document.forms["myForm"]["Quantity"].value;
        const price = document.forms["myForm"]["price"].value;
        const eDate = document.forms["myForm"]["eDate"].value;
        
    
        if(sNumber == ""){
            alert("Enter the Serial Number.");
            return false;
        }
    
        if(name == ""){
            alert("Enter the Name.");
            return false;
        }
    
        if(quantity == ""){
            alert("Enter the Quantity.");
            return false;
        }
    
        if(price == ""){
            alert("Enter the Price.");
            return false;
        }
    
        if(eDate == ""){
            alert("Enter the Expiry date.");
            return false;
        }
    
        const tempMedicine = {
            serial_number: $('#sNumber').val(),
            name: $('#name').val(),
            quantity : $('#Quantity').val(),
            price: $('#price').val(),
            Expiry_date: $('#eDate').val(),
            details: $('#details').val()
         };
    
        const database = firebase.firestore();
        database
        .collection('medicine')
        .add(tempMedicine)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
}