//creates the function "albumChange" that calls upon "iframeSrc"
function albumChange(iframeSrc) {
    //Searches the document(albums.html in this case) for the element with the ID "albumFrame"
    //It then finds this elements ".src" attribute and replaces it with some value of "iframeSrc" that is given in albums.html
    document.getElementById("albumFrame").src = iframeSrc;
}


function validateForm() {
    const albumChoices = document.getElementsByName('favAlbum');
    let voteSelected = false;

    // Loop through the album buttons to see if one is selected
    for (let i = 0; i < albumChoices.length; i++) {
        if (albumChoices[i].checked) {
            voteSelected = true;
            break;
        }
    }

    // If no album is selected (!voteSelected) when submit is pressed, then an alert will pop up
    if (!voteSelected) {
        alert("Please select an album");
        return false;
    }

    return true; // Submit form if validation passes
}