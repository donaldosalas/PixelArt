
window.onload = function() {

// 1. create a div 
// 2. interate to create all the elements of the checkboard, numbering each 1-63
// 3. access all divs and change the height, width, and float property
// 4. access all divs and change color: odds are black, evens are red


creatingDIV();


};

var color;

function getColor () {
    // console.log(thatColor);
    return color = this.style.backgroundColor;
}

function mouseOverOff() {
    for(i = 1; i < 253; i++) {
        var pixel = document.getElementById(i);
        pixel.removeEventListener("mouseover", changeColor);
        pixel.removeEventListener("click", mouseOverOff);
        pixel.addEventListener("click", mouseOverOn);
     }
}

function mouseOverOn() {
     
     for(i = 1; i < 253; i++) {
        var pixel = document.getElementById(i);
        pixel.addEventListener("mouseover", changeColor);
        pixel.addEventListener("click", mouseOverOff);
     }
}

function changeColor() {
    return this.style.backgroundColor = color;
}

var colorSpectrum = ["purple", "blue", "turquoise",
                        "green", "yellow", "orange", "red", "black"];

function creatingDIV() {
    var parent = document.createElement("div");

        // div.style.position = "relative";
        parent.style.width = "100%";
        parent.style.paddingBottom = "100%";
        var body = document.getElementsByTagName("body");


        document.body.appendChild(parent);
    
        for(i = 1; i < 253; i++) {
            
            var pix = document.createElement("div");
            // give div size properties
            pix.style.width = "3%";
            pix.style.float = "left";
            pix.style.paddingBottom = "3%";
            pix.style.backgroundColor = "white";
            pix.style.border = "1px solid black";
            pix.style.margin = "1px";
            pix.id = i;

            pix.addEventListener("click", mouseOverOn);
            parent.appendChild(pix);
        }
        
        for(m = 0; m < 8; m++) {
            var pix2 = document.createElement("div");
            
            pix2.style.width = "3%";
            pix2.style.float = "left";
            pix2.style.paddingBottom = "3%";
            pix2.style.margin = "1px";
                    
            var theColor = colorSpectrum[m];
            pix2.id = theColor;
            pix2.style.backgroundColor = colorSpectrum[m];
            pix2.addEventListener("click", getColor);
            parent.appendChild(pix2);
            }
        
        var input = document.createElement("input");
        input.type = "color";
        input.addEventListener("click", mouseOverOn);
        parent.appendChild(input);

        }       





