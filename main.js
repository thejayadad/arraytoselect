
let btn = document.getElementById("btn")
let select = document.getElementById("select")

let items = ["jace", "jazz", "jada", "jazz"]

btn.addEventListener("click", () => {
    let options = items.map( item =>
        `
        <option value=${item}>
        ${item}
        </option>
        `)
        select.innerHTML = options

})