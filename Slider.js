// Get Slider Items | Array.form [ES6 Feature]
var getSliderElements = Array.from(document.querySelectorAll('.slider-container img'))

// Get Number Of Slides
let imgLength = getSliderElements.length

// Slide Number Element
let slideNumber = document.getElementById('slide-number')

// Set Current Slide
let currentSlide = 1

// Handle Click on Previous and Next Buttons
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let indicators = document.getElementById('indicators')


// Events on clicking Previous and Next button
prev.onclick = prevClick
next.onclick = nextClick

// Previous Slide Function
function prevClick(){
    if (currentSlide < 1){
        // Do Nothing
        return false // or we can leave this line empty
    } else {
        currentSlide--
        checker()
    }
}

// Next Slide Function
function nextClick(){
    // Do Nothing
    if (currentSlide > imgLength){
        return false // or we can leave this line empty
    } else {
        currentSlide++
        checker()
    }
    
}

// Create The Main UL Element
let ulElement = document.createElement('ul')
indicators.appendChild(ulElement)

// Create List Items Based On Slides Count
for (let i = 1; i <= imgLength; i++) {
    // Create The LI
    var liElement = document.createElement('li')
    // Set Custom Attribute
    liElement.setAttribute("data-index", i)
    // Set Item Content
    liElement.appendChild(document.createTextNode(i))
    // Append Items to The Main Ul List
    ulElement.appendChild(liElement)
    
}

// Loop Through All Bullets Items
for (let i = 0; i < imgLength; i++) {

    ulElement.children[i].onclick = function(){
        currentSlide = i + 1
        checker()
    } 
}

// Create The Checker Function
function checker(){
    // Set The Slide Number
    slideNumber.textContent = `Slide# ${currentSlide} of ${imgLength}`

    // Remove All Active Classes
    for (let i = 0; i < imgLength; i++) {
        ulElement.children[i].classList.remove('active')
        getSliderElements[i].classList.remove('active')
    }
    
    // Set Active Class On Current Slide
    getSliderElements[currentSlide - 1].classList.add('active')
    // Set Active Class on Current Pagination Item
    ulElement.children[currentSlide - 1].classList.add('active')
    
    // Check if Current Slide is The First
    currentSlide === 1 ? prev.classList.add('disabled') : prev.classList.remove('disabled')

    // Check if Current Slide is The Last
    currentSlide === imgLength ? next.classList.add('disabled') : next.classList.remove('disabled')
}


// Trigger The Checker Function
checker()