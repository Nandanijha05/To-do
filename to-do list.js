
// document.addEventListener('DOMContentLoaded', function (){
//     let main=document.querySelector(".main-content")

//     main.innerHTML="<h2>Today's Task</h2><label for=\"date\" ></label><input id=\"date\" type=\"date\"><label for=\"task\" >Add Task</label><input type=\"text\" id=\"task\"><button id=\"submit\">Submit</button>";
// })

document.addEventListener('DOMContentLoaded', function (){
    //DECLARATION PART
    let main=document.querySelector(".main-content")
    let brk=document.createElement('br');
    let brk2=document.createElement('br');
    let heading = document.createElement('h2')
    let date = document.createElement('input')
    let text = document.createElement('input')
    let submit = document.createElement('button')
    let label_d = document.createElement('label')
    let label_t = document.createElement('label')
    let list=document.createElement('ul')




    //Filter declaration
    let filt=document.createElement('div')
    filt.setAttribute('class', 'filter')


    //buttons
    let btnAll=document.createElement('button')
    btnAll.innerText="All"

    let btntdy=document.createElement('button')
    btntdy.innerText="today"

    let btnyest=document.createElement('button')
    btnyest.innerText="Yesterday"

    let btntom=document.createElement('button')
    btntom.innerText="Tommrow"

    let btnother=document.createElement('button')
    btnother.innerText="Other Day"

    //append
    filt.appendChild(btnAll)
    filt.appendChild(btntdy)
    filt.appendChild(btnyest)
    filt.appendChild(btntom)
    filt.appendChild(btnother)




    //Creating inputs 
    heading.innerText="Today's Task"
    submit.textContent="Submit";
    label_d.innerText="Date"
    label_t.innerText="Add Task"
    
    //Setting Attributes
    date.setAttribute('id','date')
    text.setAttribute('id','task')
    date.setAttribute('type','date')
    text.setAttribute('type','text')
    label_d.setAttribute('for', 'date')
    label_t.setAttribute('for', 'task')

    //Appending to main
    main.appendChild(heading)
    main.appendChild(label_d)
    main.appendChild(date)
    main.appendChild(brk)
    main.appendChild(label_t)
    main.appendChild(text)
    main.appendChild(brk2)
    main.appendChild(submit)
    main.appendChild(filt);

    main.appendChild(list)
    
            ///Adding Event listener on the submit
            submit.addEventListener('click', function (){
            let text1=text.value;
            
            

            ///working for date thing 
            let taskDate=date.value;
            let today =new Date();
            let todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

            if (taskDate === "") {
            let yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Month is 0-indexed
            let dd = today.getDate();

            // Pad month/day with 0
            if (mm < 10) mm = '0' + mm;
            if (dd < 10) dd = '0' + dd;

            taskDate = `${yyyy}-${mm}-${dd}`;
            }

            
            
            let span =document.createElement('span')
            span.setAttribute('class','task-date');

            let taskDateType=new Date(taskDate);
            const taskOnly = new Date(taskDateType.getFullYear(), taskDateType.getMonth(), taskDateType.getDate());
            // console.log(taskOnly);
            
            

            let diff=(taskOnly-todayOnly)/(1000*60*60*24);
            if(diff===0)
                span.innerText="today"
            else if(diff===1)
                span.innerText="Tomorrow"
            else if(diff===-1)
                span.innerText="Yesterday"
            else 
                span.innerText=taskOnly.getDate() + "/" + (taskOnly.getMonth()+1) + "/" + taskOnly.getFullYear();

            console.log(span.innerText);
            

            
            console.log(text1);
            // let checkbox;

            if(text1===null|| text1===""|| text1.length===0)
            {
                alert("It's required field")
                return;
            }
            else{
                let checkbox=document.createElement('input')
                checkbox.setAttribute('type', 'checkbox')
                let task=document.createElement('li')

                task.appendChild(checkbox)
                let taskText = document.createTextNode(text1 + " ");
                task.appendChild(taskText)
                task.appendChild(span)
                list.appendChild(task)
                checkbox.addEventListener('change',function(){
                        if(checkbox.checked){
                            task.style.textDecoration="line-through"
                        }
                        else
                            task.style.textDecoration="none"

                    })
            }
            
            text.value=""
            date.value=""
                    
        }) 
})

