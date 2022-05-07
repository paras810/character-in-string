let btn = document.getElementById('para')
let names = ['Paras '+'Mohan '+ 'Rohan '+ 'Sohan '+ 'Singh '+ "Rickey "]
let arrayToString = names.toString()
btn.innerHTML = arrayToString
// console.log(btn.innerHTML = arrayToString);


const removeParas =()=>{
    
   btn.innerHTML = arrayToString.substr(5, arrayToString.length)
}
const removeRickey =()=>{
// console.log( arrayToString.search('Rickey'))
    
   btn.innerHTML = arrayToString.substr(0,30)
//    console.log('clicked');
}

const addParasStart=()=>{
// console.log('clicked');
btn.innerText = arrayToString
}

const addRickeyEnd=()=>{
    // console.log('clicked');
    btn.innerText =  arrayToString 
}




names.push('paras in ending')
console.log(names);

names.unshift('paras in starting')
console.log(names);

names.shift()
console.log(names);

names.pop()
console.log(names);





















// names.forEach(e => {
//     btn.innerText = e.toString()
//     console.log(btn.innerText = e);
// });
