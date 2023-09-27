let submit = document.getElementById("submit");

submit.addEventListener('click', (event)=>{
     //console.log(e)
    event.preventDefault();  


    let allInputs = document.querySelectorAll('Input[type = "number"]');
    console.log(allInputs);

    let marks = 0;
    allInputs.forEach((input)=>{
        // console.log(typeof (parseInt(input.value)));
        
        marks =marks + parseInt(input.value); 

    })
    
    calculateResult(marks);
    
})

function calculateResult(marks){
    let totalMarks = 500;
    let Grade ;
    let status;
    let stdStatus ;
    let percentage = (marks/totalMarks) *100;
    if(percentage > 80){
        Grade = "A+";
        status = 1;
    }
    else if(percentage > 60){
        Grade = "B";
        status = 1;
    }
    else if(percentage > 60){
        Grade = "B";
        status =1;
    }
    else {
         Grade = "C";
         status = 0;
    }

    if(status == 1){
        stdStatus = "Pass";
    }
    else{
        stdStatus = "Fail";
    }

    showResultS(totalMarks,marks,stdStatus,Grade);
    

}

let showResultS = (totalMarks,marks,stdStatus,Grade)=>{
    
    let showtotalGetMarks = document.getElementById('totalGetMarks')
    let showtotalMarks = document.getElementById('totalMarks')
    let showgrade = document.getElementById("grade");
    let showstatus = document.getElementById('status');

    showtotalGetMarks.innerHTML = marks;
    showtotalMarks.innerHTML = totalMarks;
    showgrade.innerHTML = Grade;
    showstatus.innerHTML = stdStatus;

    let popup = document.querySelector(".popup");
    popup.classList.toggle("active");
}