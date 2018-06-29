let onclick = () => {
    console.log("click ...");
    var pattern = document.getElementById("patternTextBox").value;
    var path = document.getElementById("pathTextBox").value;

    axios.post("http://localhost:5000/api/search/searchFile", { path: path, pattern: pattern })
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}

var button = document.getElementById("searchButton");
button.addEventListener("click", onclick);