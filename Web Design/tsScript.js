//creates the function "albumChange" that calls upon "iframeSrc"
function albumChange(iframeSrc) {
    //Searches the document(albums.html in this case) for the element with the ID "albumFrame"
    //It then finds this elements ".src" attribute and replaces it with some value of "iframeSrc" that is given in albums.html
    document.getElementById("albumFrame").src = iframeSrc;
}
