const employees=[
    {
        id: 1,
        name:"cường",
        age: 19,
        address:"long an"
    },
    {
        id: 2,
        name:"cà tím",
        age: 20,
        address:"tiền giang"
    },
    {
        id: 3,
        name:"eggplant",
        age: 21,
        address:"đồng nai"
    },
]
const tabledata=document.getElementsByClassName("table_data")[0]
let data='';
for(let i=0;i<employees.length;i++){
    data+=`
            <tr>
            <th scope="row">${employees[i].id}</th>
            <td>${employees[i].name}</td>
            <td>${employees[i].age}</td>
            <td>${employees[i].address}</td>
          </tr>
    
    `
}
tabledata.innerHTML=data