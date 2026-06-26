const tasks = document.querySelectorAll(".task input");

tasks.forEach(task => {
    task.addEventListener("change", function() {
        if(this.checked){
            this.parentElement.style.opacity = "0.5";
        } else {
            this.parentElement.style.opacity = "1";
        }
    });
});
