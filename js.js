window.onload = function() {
    var image = document.querySelector("img[src='elpinguino.jpg']");
    var text = document.createElement("p");
    text.innerHTML = "Click to see the video";
    text.style.color = "blue";
    image.parentElement.insertBefore(text, image);
    image.onclick = function() {
        var video = document.createElement("iframe");
        video.width = "760";
        video.height = "415";
        video.src = "https://www.youtube.com/embed/RNEt4JPlrFE";
        image.parentElement.replaceChild(video, image);
        text.remove();
    };
};

function newImage() {
    var image = document.getElementById("myImage");
    if (image.src.match("persona2.png")) {
        image.src = "persona3.png";
    } else {
        image.src = "persona2.png";
    }
}