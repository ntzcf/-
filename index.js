
var form = document.querySelector(".form");
var radios = document.querySelectorAll("input[type='radio']");
var submit = document.querySelector("input[type='submit']");


var character = "";

for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function() {
        character = this.value;
    });
}


submit.addEventListener("click", function(event) {
    event.preventDefault();

    if (character == "") {
        alert("请先选择一个角色！");
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "vote.php");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("character=" + character);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                if (data.code == 0) {
                    alert(data.message);
                    window.location.reload();
                } else {
                    alert(data.error);
                }
            }
        }
    }
});