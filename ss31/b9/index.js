let todoList = [
    {
        id: 1,
        task: 'Hit the gym',
        completed: false,
    },
    {
        id: 2,
        task: 'Pay bills',
        completed: true,
    },
    {
        id: 3,
        task: 'Meet george',
        completed: false,
    },
    {
        id: 4,
        task: 'Buy eggs',
        completed: false,
    },
    {
        id: 5,
        task: 'Read a book',
        completed: false,
    },
    {
        id: 6,
        task: 'Organize office',
        completed: false,
    }
];
function print(){
    let table=document.getElementsByClassName("table")[0]
let data='';
for(let i=0;i<todoList.length;i++){
    if(todoList[i].completed===false){
        data+= `<li>${todoList[i].task}<span class="close" onclick="dele(${i})">X</span></li>`
    }else{
        data+= `<li class="checked">${todoList[i].task}<span class="close" onclick="dele(${i})">X</span></li>`
    }
        
}
table.innerHTML=data
}
print()

function output(){
    let inputvalue=document.getElementById("myInput").value;
let temp ={
    task: inputvalue,
    completed: false
}
todoList.push(temp)
print()
return false
}
function dele(index){
    let check= confirm("bạn có chắc là xóa không?")
    if(!check){
        return
    }
    todoList.splice(index,1);
    print()
}

