
                // FIRST PRACTICE 

// const btn = document.querySelector('.btn');
// const container=document.querySelector('.text-container');
// const request = new XMLHttpRequest();

// btn.addEventListener("click", getRequest);
// let pageCounter=1;
// function getRequest(){
//     request.open("GET","https://learnwebcode.github.io/json-example/animals-"+ pageCounter +".json");

//     request.onload=function(){
//         const data = JSON.parse(request.responseText);
        
//         addHTML(data);
//         pageCounter++;
//         if(pageCounter > 3){
//             btn.classList.add('btn-hide');
//         };
        
//     };    
//     request.send();
// }

// function addHTML(data) {
//     let string = '';
    
//     for (let i = 0; i < data.length; i++) {
//         string += '<p>' + data[i].name + " is a " + data[i].species +' that likes to eat ';
//         for (let ii = 0; ii <=data[i].foods.likes.length ; ii++) {
//             if(ii == 0){
//                 string+=data[i].foods.likes[ii] + '</p>';
//             }
//             else{
//                 string+=' and ' + data[i].foods.likes[ii] + '</p>';
//             }                
//         }
//     }
//     container.insertAdjacentHTML("beforeend",string);
// }



                // SECOND PRACTICE


const btn = document.querySelector('.btn');
const request = new XMLHttpRequest;
const container = document.querySelector('.text-container');


let counter = 1;
btn.addEventListener("click",function () {
    
    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + counter + '.json');   

    request.onload = function(){
        const data = JSON.parse(request.responseText);
        // console.log(counter);
        addHTML(data);
    };

    request.send();

    counter++;
    if(counter > 3){
        btn.classList.add('btn-hide');
    };
} );


function addHTML(data){
    let string = "";
    for (let i = 0; i < data.length; i++) {
        string += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        
        for (let ii = 0; ii < data[i].foods.likes.length ; ii++) {
            if(ii == 0){
                string+=data[i].foods.likes[ii] + '</p>';
            }
            else{
                string+=' and ' + data[i].foods.likes[ii] + '</p>';
            }  
        }
        
    }

    container.insertAdjacentHTML("beforeend", string);
};