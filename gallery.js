/*Name this external file gallery.js*/

function upDate(previewPic){
    /* 1) Change the background image of the div with id="image"
       to the source of the preview image */

    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";

    /* 2) Change the text of the div with id="image"
       to the alt text of the preview image */

    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){
    /* 1) Change the background image back to the original (empty) */

    document.getElementById("image").style.backgroundImage = "url('')";

    /* 2) Change the text back to the original text */

    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
