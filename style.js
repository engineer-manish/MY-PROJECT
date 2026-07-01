const btn = document.getElementById("submit");
const container = document.getElementById("main");


btn.addEventListener("click", async function(){
    btn.disabled = true;
    container.innerHTML = "";
  
     
    const divmain = document.createElement("div");

    const para = document.createElement("p");
    para.textContent = "....loading";
    container.appendChild(para);

    try{
        const response = await fetch("https://randomuser.me/api/");
         const data = await response.json();
        const firstuser = data.results[0];
        const picture = firstuser.picture.large;
        const {name} = firstuser;
        const {email} = firstuser;
        const {country} = firstuser.location;

        const img = document.createElement("img");
        img.src = picture;
        divmain.appendChild(img);

        const p = document.createElement("p");
        p.innerText = `${name.title} ${name.first} ${name.last}`;
        divmain.appendChild(p);

        const emailP = document.createElement("p");
        emailP.innerText = email;
        divmain.appendChild(emailP);

        const countryP = document.createElement("p");
        countryP.innerText = country;
        divmain.appendChild(countryP);
    }
    catch(error){
        const paraa = document.createElement("p");
        paraa.textContent = "Error fetching data";
        divmain.appendChild(paraa);
    }
        finally{
            para.remove();
            btn.disabled= false;
            container.appendChild(divmain);
              


           
        }

    }

)
