document.querySelector(".addButton") .onclick = function () {
    

        if (document.querySelector('.input').value.length == 0){
            alert("Please enter someting")
        }
        else{
            document.querySelector('.container').innerHTML +=`
             <div class='task'>
                    <span id ="taskname">
                        ${document.querySelector('.input').value}

                    </span>
                    <button class ="delete">
                     <i class ="far fa-trash-alt"></i> 

                    </button>
            </div>`;

            var current_tasks = document.querySelector('.delete');
            for(var i=0; i<current_tasks.length; i++){
                current_tasks[i].onclick = function () {
                    this.parentNode.removeChild();
                    
                }
            }
        }
    
}