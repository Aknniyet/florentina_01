//    //About sec
//    // Get elements 
//    const popupForm = document.getElementById("popupForm"); 
//    const openPopup = document.getElementById("openPopup"); 
//    const closePopup = document.getElementsByClassName("close")[0]; 

//    // Show popup when "Subscribe" button is clicked 
//    openPopup.addEventListener("click", function() { 
//        popupForm.style.display = "flex"; // Use flex to center it 
//    }); 

//    // Close popup when "x" is clicked 
//    closePopup.addEventListener("click", function() { 
//        popupForm.style.display = "none"; 
//    }); 

//    // Close popup if the user clicks outside the form 
//    window.addEventListener("click", function(event) { 
//        if (event.target === popupForm) { 
//            popupForm.style.display = "none"; 
//        } 
//    }); 


//    let li = document.querySelectorAll(".faq-text li");
//    for(var i = 0; i < li.length; i++){
//      li[i].addEventListener("click", (e)=>{
//        let clickedLi;
//        if(e.target.classList.contains("question-arrow")){
//          clickedLi = e.target.parentElement;
//        } else{
//          clickedLi = e.target.parentElement.parentElement;
//        }
//        clickedLi.classList.toggle("showAnswer");
//      });
//    }