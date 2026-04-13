
const  renderInput=document.getElementById("renderInput")


//Render Project

function renderProjects(projects){
    renderInput.innerHTML=projects.map((proj,i)=>`
     <tr>
        <td>${i+1}</td>
        <td><p><b>${proj.ProjectName}</p></b>
        <p class="details">${proj.Details}</p>
        </td>
        <td>${proj.priority}</td>
        <td>${proj.Department}</td>
        <td>${proj.status}</td>
        <td>${proj.startDate}</td>
        <td>${proj.EndDate}</td>

     </tr>

    `).join("")
}

//Fetch Api

let allProjects=[]
async function fetchAPI() {
    
    await fetch(`https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects`)
    .then(res=>res.json())
    .then(data=>{
    console.log(data)
    allProjects = data   
    renderProjects(data)
})
}


       


//Search Dynamically

function searchProject() {
    let searchInputValue = document.getElementById('searchInput').value.toLowerCase()
    const projSearch = allProjects.filter(p =>
        p.ProjectName.toLowerCase().includes(searchInputValue)||
        p.priority.toLowerCase().includes(searchInputValue)||
        p.Department.toLowerCase().includes(searchInputValue)||
        p.status.toLowerCase().includes(searchInputValue)
    )

    renderProjects(projSearch)
}

document.getElementById("searchInput").addEventListener("keyup", searchProject)


function filterBy(type, value) {
    const filtered = allProjects.filter(p =>
        p[type].toLowerCase() === value.toLowerCase()
    )

    renderProjects(filtered)
}

function resetFilter() {
    renderProjects(allProjects)
}


        document.addEventListener('DOMContentLoaded',()=>{
            fetchAPI()
        })











































        // searchInput.addEventListener("keyup", () => {
//     const value = searchInput.value.toLowerCase()

//     const rows = document.querySelectorAll("#renderInput tr")

//     const value1=searchBtn.value.toLowerCase()

//     const rows1=docudocument.querySelectorAll("#renderInput tr")

//     rows.forEach(row => {
//         const projectName = row.children[1].innerText.toLowerCase()

//         if (projectName.includes(value)) {
//             row.style.display = ""
//         } else {
//             row.style.display = "none"
//         }
//     })
// })