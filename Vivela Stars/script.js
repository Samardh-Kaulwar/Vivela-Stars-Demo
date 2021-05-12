var items = [
  {
    itemCount: 4,
  },
  {
    id : 1,
    img: "13.jpg",
    content1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content2: "This is dummy text 1.",
    content3: "www.facebook.com/project01"
  },
  {
    id : 2,
    img: "28.jpg",
    content1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content2: "This is dummy text 2.",
    content3: "www.facebook.com/project02"
  },
  {
    id : 3,
    img: "11.jpg",
    content1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content2: "This is dummy text 3.",
    content3: "www.facebook.com/project03"
  },
  {
    id : 4,
    img: "18.jpg",
    content1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content2: "This is dummy text 4.",
    content3: "www.facebook.com/project04"
  },
];

var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modal-img");
var modalContent1 = document.getElementById("modal-content1");
var modalContent2 = document.getElementById("modal-content2");
var modalContent3 = document.getElementById("modal-content3");

var currentActiveProject = 0;

function updateModal(proj){
  items.forEach(item => {
    if(item.id == (proj)){
      modalImage.src = item.img;
      modalContent1.innerHTML = item.content1;
      modalContent2.innerHTML = item.content2;
      modalContent3.innerHTML = item.content3;
    }
  })
}

function openModal(ele){
  modal.style.display = "block";
  currentActiveProject = Number(ele.parentNode.parentNode.id[8]);
  updateModal(currentActiveProject);
}

function nextBtn(){
  currentActiveProject += 1;
  if(currentActiveProject == items[0].itemCount+1) currentActiveProject = 1;
  updateModal(currentActiveProject);
}
function prevBtn(){
  currentActiveProject -= 1;
  if(currentActiveProject == 0) currentActiveProject = items[0].itemCount;
  updateModal(currentActiveProject);
}






// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
