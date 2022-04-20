
window.addEventListener('DOMContentLoaded', ()=>{
    now = new Date();
    document.querySelector('.now').innerHTML = now;
    
})
    

//console.log((4 + 6 + 9) / 77)

//document.write("hello world! Now ", 3+4)
//document.write(new Date())
/*
    //taking input from users
    var answer = parseInt(prompt("Enter anumber"))

    //creating a div to print the answer
    const input = document.createElement('div');
    input.classList.add('user_input')
    input.textContent = answer;

    //adding the child to h2 tag
    document.querySelector('#input').appendChild(input)


    for(i=0; i<answer; i++){
        if(i%3 == 0 && i%5 == 0 ){
        console.log("fizz buzz");
        const div = document.createElement('div');
        div.classList.add('day-now');
        div.textContent = i;
        
        //div.textContent = 'fizz-buzz'
        document.querySelector('.date').appendChild(div)
    }
    
    else if(i%5 == 0){
        console.log("buzz");
    }
    else if(i % 3 == 0){
        console.log("fizz");
    }
    
    else{
        console.log(i);
    }
    }*/


