
let btn = document.getElementById("btn")
let select = document.getElementById("select")

let kids = ["jace", "jazz", "jada", "jazz"]

btn.addEventListener("click", () => {
    let options = kids.map( kid =>
        `
        <option value=${kid}>
        ${kid}
        </option>
        `)
        select.innerHTML = options

})