let btn = document.querySelector("button");
let list = document.querySelector("#list");
let url = "http://universities.hipolabs.com/search?name=&country=";
btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    list.innerHTML = '';
    let colleges = await getColleges(country);
    show(colleges);
})

function show(colleges)
{
    for(co of colleges)
    {
        let li = document.createElement("li");
        li.innerText = co.name;
        list.appendChild(li);
    }
}
async function getColleges(country) {
    try{
        let res = await axios.get(url+country);
        return res.data;
    } catch(e)
    {
        console.log("Not Found");
        return [];
    }
}