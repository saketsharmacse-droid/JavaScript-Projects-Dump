let taskbar = document.getElementsByClassName("taskbar")[0] 
//[0]because getElementsByClassName poora html ka collection return krta hai, and mujhe uska firse element chahiye.
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", () => {
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px";
    }
    else{
        startmenu.style.bottom = "50px";
    }
})