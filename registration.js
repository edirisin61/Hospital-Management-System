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

const loadDoctor=()=>{
    const firestore = firebase.firestore();
    firestore
    .collection('doctors')
    .get()
    .then((result)=>{
        result.forEach((records)=>{
            const data = records.data();
            const row = `
            <tr>
                <td>${records.id}</td>
                <td>${data.name}</td>
                <td>${data.age}</td>
                <td>${data.gender}</td>
                <td>${data.contact}</td>
                <td>${data.specialization}</td>
            </tr>
            `;
            $('#list').append(row);
        });
    });
  };
