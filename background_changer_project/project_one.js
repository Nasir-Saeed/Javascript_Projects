let allBtn = document.querySelectorAll(".btn");
let body = document.querySelector(".bg-change")

allBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "black"
        } else if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;

        } else if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "orange") {
            body.style.backgroundColor = e.target.id;
        } else {
            alert("please press button");
        }
    })
})