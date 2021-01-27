function overlayThisImg(element){
    document.getElementById("overlay_img").src = element.src;
    document.getElementById("modal").style.display = "block";
}



function overlayThisVideo(element){
    
    document.getElementById("video").addEventListener("click", function(event){
    event.preventDefault();
}, false);
    console.log("onclick");
    document.getElementById("video").pause();
    document.getElementById("overlay_vid").src = element.firstChild.src;
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay_vid").style.display= "block";
}

function overlayOff(){
    document.getElementById("overlay_vid").pause();
    document.getElementById("modal").style.display = "none";
}

function returnTop(){
    document.documentElement.scrollTop = 0;
}

var top_button = document.getElementById("top_button");
if(top_button){
    function detectScroll() {
    if(document.body.scrollTop > document.body.scrollHeight/5 || document.documentElement.scrollTop > document.body.scrollHeight/5){
        top_button.style.display = "block";
    }
    else{
        top_button.style.display = "none";
    }
    }
    window.onscroll = function() {detectScroll()};
}

