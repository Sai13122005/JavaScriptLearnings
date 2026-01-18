let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
//using fetch;
// async function getPic() {
//     try{
//         let res = await fetch(url);
//         let pic = await res.json();
//         return pic;
//     }
//     catch(err)
//     {
//         return "/";
//     }
// }


btn.addEventListener("click", async()=>{
    let dog =await getPic();
    let img = document.querySelector("#res");
    img.setAttribute('src', dog.message);
});


//using axios:
async function getPic() {
    try{
        let dog = await axios.get(url);
        return dog.data;
    }
    catch(err)
    {
        return '/';
    }
    
}

