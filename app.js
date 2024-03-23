// Code for carousel, some changes to accomodate my page
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".sixthBanner i")
 
let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 6;
 
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id == "left"){
            carousel.scrollLeft -= firstImgWidth;
        } else {
            carousel.scrollLeft += firstImgWidth;
        }
    });
});
 
function dragStart(e) {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
 
function dragging(e) {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX; //this is the instantiation of posiitonDiff
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    console.log(positionDiff);
}
 
function dragStop() {
    isDragStart = false;
    carousel.classList.remove("dragging");
}
 
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
 
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
 
carousel.addEventListener("mouseup", dragStop);
// end of carousel video code (source link in html)


const hoverChangeBoth1 = document.querySelectorAll(".seventhHoverChange1");
const eyeBtn1 = document.querySelector(".seventhHoverBtnEye1");
const textBtn1 = document.querySelector(".seventhHoverBtnText1");
const hoverChangeBoth2 = document.querySelectorAll(".seventhHoverChange2")
const eyeBtn2 = document.querySelector(".seventhHoverBtnEye2");
const textBtn2 = document.querySelector(".seventhHoverBtnText2");
const hoverChangeBoth3 = document.querySelectorAll(".seventhHoverChange3");
const eyeBtn3 = document.querySelector(".seventhHoverBtnEye3")
const textBtn3 = document.querySelector(".seventhHoverBtnText3");

hoverChangeBoth1.forEach(btn => {
    btn.addEventListener("mouseover", function(){
        eyeBtn1.style.backgroundColor = "grey";
        textBtn1.style.backgroundColor = "grey";
    })
})

hoverChangeBoth1.forEach(btn => {
    btn.addEventListener("mouseout", function(){
        eyeBtn1.style.backgroundColor = "white";
        textBtn1.style.backgroundColor = "white";
    })
})

hoverChangeBoth2.forEach(btn => {
    btn.addEventListener("mouseover", function(){
        eyeBtn2.style.backgroundColor = "grey";
        textBtn2.style.backgroundColor = "grey";
    })
})

hoverChangeBoth2.forEach(btn => {
    btn.addEventListener("mouseout", function(){
        eyeBtn2.style.backgroundColor = "white";
        textBtn2.style.backgroundColor = "white";
    })
})

hoverChangeBoth3.forEach(btn => {
    btn.addEventListener("mouseover", function(){
        eyeBtn3.style.backgroundColor = "grey";
        textBtn3.style.backgroundColor = "grey";
    })
})

hoverChangeBoth3.forEach(btn => {
    btn.addEventListener("mouseout", function(){
        eyeBtn3.style.backgroundColor = "white";
        textBtn3.style.backgroundColor = "white";
    })
})


searchBar = document.getElementById('searchBar');
magnifier = document.getElementById('magnifyingImgContainer')
 
searchBar.addEventListener("mouseover", function(){
    searchBar.style.backgroundColor = "gray";
    magnifier.style.backgroundColor = "gray";
 
});
 
searchBar.addEventListener("mouseout", function(){
    searchBar.style.backgroundColor = "#f5f5f5";
    magnifier.style.backgroundColor = "#f5f5f5";
});
 
magnifier.addEventListener("mouseover", function(){
    magnifier.style.backgroundColor = "gray";
});
 
magnifier.addEventListener("mouseout", function(){
    magnifier.style.backgroundColor = "#f5f5f5";
});

const firstDropDown = document.getElementById("firstDropDown");
const firstDropDownBody = document.getElementById("dropDownMenu");
const helpContainer = document.getElementById("helpContainer");
 

firstDropDown.addEventListener("mouseover", function() {
    helpContainer.addEventListener("mouseover", function() {
        firstDropDownBody.style.display = "block";
 
        firstDropDownBody.addEventListener("mouseover", function(){
            firstDropDownBody.style.display = "block";
        });
    });
});
 
helpContainer.addEventListener("mouseout", function() {
        firstDropDownBody.style.display = "none";
});
 
firstDropDownBody.addEventListener("mouseover", function(){
    firstDropDownBody.style.display = "block";
});
 
firstDropDownBody.addEventListener("mouseout", function(){
    firstDropDownBody.style.display = "none";
});

const columnContainers = document.querySelectorAll('.columnContainers');
const innerContainer = document.getElementById('eighthInnerContainer');
const hiddenItems = document.querySelectorAll('.hiddenItems');
const eighthBanner = document.getElementById("eighthBanner");

innerContainer.addEventListener("mouseenter", function(){
    eighthBanner.style.animationName = "growBottomPageCollapsible"; //changes the style animation-name in the css class eighthBanner to make the container grow
    setTimeout(function(){//timeout set so that all the text does not appear before the container can accomodate it
        hiddenItems.forEach(column => { //same as before
            column.style.display = "block";
        })
    }, 1000)
    innerContainer.style.height = "65vh"; //set so when container starts moving to staying middle of animation it is big enough that mouse does not leave the container
    setTimeout(function(){ //done so that container is never bigger than its parent container
        innerContainer.style.height = "130vh";
    }, 500)
})

innerContainer.addEventListener("mouseleave", function(){
    eighthBanner.style.animationName = "shrinkBottomPageCollapsible";
    hiddenItems.forEach(column => {  //same as before
        column.style.display = "none";
    })
    innerContainer.style.height = "30vh"; //same as above but makes container shrink
})

function topDropDownMenusAnimations(tab, dropDownContainer, dropDownInnerContainer, headers, mainText, animationNameContainerOpen, animationNameContainerClose, animationNameInnerContainerOpen, animationNameInnerContainerClose){

    let dropDownNotAccessed = true; //variable to check whether user hovers over the main container, if true then user has not, if false then user has

    tab.addEventListener("mouseenter", function() { //event listener for initial tab that is hovered over
        dropDownContainer.style.animationName = animationNameContainerOpen; // Play the grow animation
        dropDownContainer.style.animationDuration = "0.3s";
        dropDownInnerContainer.style.animationName = animationNameInnerContainerOpen; // Play the grow animation for inner container
        dropDownInnerContainer.style.animationDuration = "0.1s";

        dropDownContainer.addEventListener("mouseenter", function(){ //checks whether drop down is hovered over if so then change the variable to show that the drop down has been accessed
            dropDownNotAccessed = false;
        })

        setTimeout(function(){ //done so that visually the text inside drop down does not appear before enough space for it
            headers.forEach(header => {
                header.style.display = "block";
            })
            mainText.forEach(text => {
                text.style.display = "block";
            })
        }, 400)
    });
    tab.addEventListener("mouseout", function(){
        setTimeout(function(){ //timeout set in order to allow for event listener above for dropDownContainer to be acitvated if necessary
        if (dropDownNotAccessed === true){ 
            headers.forEach(header => {
                header.style.display = "none"; // Hide the headers 
            });
            mainText.forEach(text => {
                text.style.display = "none"; // Hide the main texts 
            });
            dropDownContainer.style.animationName = animationNameContainerClose; // Play the shrink animation
            dropDownContainer.style.animationDuration = "0.1s";
            dropDownInnerContainer.style.animationName = animationNameInnerContainerClose; // Play the shrink animation for inner container
            dropDownInnerContainer.style.animationDuration = "0.1s";
        }
        }, 10)
    })

    dropDownContainer.addEventListener("mouseleave", function() { //checks to see if user leaves drop down container
        // Mouseleave event for the outer container
        headers.forEach(header => {
        header.style.display = "none"; // Hide the headers again
        });
        mainText.forEach(text => {
        text.style.display = "none"; // Hide the main texts again
        });
        dropDownContainer.style.animationName = animationNameContainerClose; // Play the shrink animation
        dropDownContainer.style.animationDuration = "0.1s";
        dropDownInnerContainer.style.animationName = animationNameInnerContainerClose; // Play the shrink animation for inner container
        dropDownInnerContainer.style.animationDuration = "0.1s";
        dropDownNotAccessed = true; //resets the variable so next time its used can repeat the process of checking again if drop down has been accessed again
    });
}
//gets necessary actual parameters for the function then inputs them in
const newFeaturedTab = document.getElementById("centerAnchorNew"); //all the class names and id's for the first tab New & featured
const newFeaturedDropDownContainer = document.getElementById("newFeaturedDropDownContainer");
const newFeaturedDropDownInnerContainer = document.getElementById("newFeaturedDropDownInnerContainer");
const newFeaturedHeaders = document.querySelectorAll(".NandFHeader");
const newFeaturedMainText = document.querySelectorAll(".NandFMainText");

topDropDownMenusAnimations(newFeaturedTab, newFeaturedDropDownContainer, newFeaturedDropDownInnerContainer, newFeaturedHeaders, newFeaturedMainText, "growTopPageCollapsible", "shrinkTopPageCollapsible", "growTopPageCollapsbileInnerContainer", "shrinkTopPageCollapsbileInnerContainer");

//same process as above block
const menDropDownTab = document.getElementById("centerAnchorMen");
const menDropDownContainer = document.getElementById('menDropDownContainer');
const menDropDownInnerContainer = document.getElementById('menDropDownInnerContainer');
const menHeaders = document.querySelectorAll('.menHeader');
const menMainText = document.querySelectorAll('.menMainText');

topDropDownMenusAnimations(menDropDownTab, menDropDownContainer, menDropDownInnerContainer, menHeaders, menMainText, "growTopPageCollapsibleMen", "shrinkTopPageCollapsibleMen", "growTopPageCollapsibleInnerContainerMen", "shrinkTopPageCollapsibleInnerContainerMen");


const womenDropDownTab = document.getElementById('centerAnchorWomen');
const womenDropDownContainer = document.getElementById('womenDropDownContainer');
const womenDropDownInnerContainer = document.getElementById('womenDropDownInnerContainer');
const womenHeaders = document.querySelectorAll('.womenHeader');
const womenMainText = document.querySelectorAll('.womenMainText')

topDropDownMenusAnimations(womenDropDownTab, womenDropDownContainer, womenDropDownInnerContainer, womenHeaders, womenMainText, "growTopPageCollapsibleWomen", "shrinkTopPageCollapsibleWomen", "growTopPageCollapsibleInnerContainerWomen", "shrinkTopPageCollapsibleInnerContainerWomen");


const kidsDropDownTab = document.getElementById('centerAnchorKids');
const kidsDropDownContainer = document.getElementById('kidsDropDownContainer');
const kidsDropDownInnerContainer = document.getElementById('kidsDropDownInnerContainer');
const kidsHeaders = document.querySelectorAll('.kidsHeader');
const kidsMainText = document.querySelectorAll('.kidsMainText')

topDropDownMenusAnimations(kidsDropDownTab, kidsDropDownContainer, kidsDropDownInnerContainer, kidsHeaders, kidsMainText, "growTopPageCollapsibleKids", "shrinkTopPageCollapsibleKids", "growTopPageCollapsibleInnerContainerKids", "shrinkTopPageCollapsibleInnerContainerKids");


const saleDropDownTab = document.getElementById('centerAnchorSale');
const saleDropDownContainer = document.getElementById('saleDropDownContainer');
const saleDropDownInnerContainer = document.getElementById('saleDropDownInnerContainer');
const saleHeaders = document.querySelectorAll('.saleHeader');
const saleMainText = document.querySelectorAll('.saleMainText');

topDropDownMenusAnimations(saleDropDownTab, saleDropDownContainer, saleDropDownInnerContainer, saleHeaders, saleMainText, "growTopPageCollapsibleSale", "shrinkTopPageCollapsibleSale", "growTopPageCollapsibleInnerContainerSale", "shrinkTopPageCollapsibleInnerContainerSale");

const guidesBtn = document.getElementById("guidesPopup");
const guidesPopupContainer = document.getElementById("guidesPopupContainer");
const guidesPopupInnerContainer = document.getElementById("guidesPopupInnerContainer");

guidesBtn.addEventListener("mouseover", function(){
    guidesPopupContainer.style.display = "block";
})

guidesPopupContainer.addEventListener("mouseleave", function(){
    guidesPopupContainer.style.display = "none";
})
