const currentDate = document.querySelector(".current-date")
let daysTag = document.querySelector(".days")
let prevNext = document.querySelectorAll(".icons span")
console.log(daysTag)
// console.log(currentDate)

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// console.log(date, currYear, currMonth)

const months = [
    "Janeiro", "Fevereiro", "Março",    "Abril",   "Maio",     "Junho",
    "Julho",   "Agosto",    "Setembro", "Outubro", "Novembro", "Dezembro"    
]

const renderCalendar = () => {
    let lasDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let liTag = "";
    // console.log(lasDateOfMonth)

    for(let i = 1; i<= lasDateOfMonth; i++){
        // console.log(i)
        liTag += `<li>${i}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag
}

renderCalendar();

prevNext.forEach(icon => {
    icon.addEventListener("click", () => {
        // console.log(icon)
        // verifica se button é igual a prev caso sim decrementa caso contrario incrementa
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        renderCalendar();
    })
})