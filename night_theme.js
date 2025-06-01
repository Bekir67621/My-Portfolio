const nightBtn = document.getElementById("night_btn")

const theme = localStorage.getItem("theme")
if(theme){
    document.body.classList.add(theme)

}


nightBtn.addEventListener("click", function () {
    document.body.classList.toggle("night-theme")
    const theme = localStorage.getItem("theme")
    console.log(theme);

    if (theme === "night-theme") {
        localStorage.setItem("theme", "")
    }
    else{
        localStorage.setItem("theme", "night-theme")
    }

   
})