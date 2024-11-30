
// document.addEventListener('DOMContentLoaded', function() {
// const expenseForm = document.getElementById("expenseForm")
// const expenseList = document.getElementById("expenseList")

// expenseForm.addEventListener('submit',function(event){
//     event.preventDefault();

//     const description = document.getElementById("description").value
//     const category = document.getElementById("category").value
//     const amount = document.getElementById("amount").value

//     if (description && category && !isNaN(amount)) {

//         const newRow = document.createElement('tr')

//         newRow.innerHTML = `<td>${description}</td> 
//         <td>${category}</td>
//         <td>${amount}</td>`

//         expenseList.appendChild(newRow)
        
//         document.getElementById("description").value = ''
//         document.getElementById("category").value = ''
//         document.getElementById("amount").value = ''

//     } else {
//         alert("Please fill the required fields first")
//     }


// })
// // })
console.log("hello");

const expenseForm = document.querySelector('.expenseForm')
const expenseList = document.getElementById('expenseList')

if(expenseForm){
    expenseForm.addEventListener('submit',function(event){
        event.preventDefault();
    
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        const amount = document.getElementById('amount').value;
    
        if(document && category && !isNaN(amount)){
            const newRow = document.createElement('tr')
    
            newRow.innerHTML = `<td>${description}</td>
            <td>${category}</td>
            <td>${amount}</td>`;
            
            expenseList.appendChild(newRow)
    
            document.getElementById('description').value=''
        document.getElementById('category').value=''
        document.getElementById('amount').value=''
        }else{
            alert('Please fill out all fields with valid Data')
        }
    
        
    
    })
    
    
    
}







// document.addEventListener('DOMContentLoaded', function() {
//     const expenseForm = document.querySelector('.expenseForm');
//     const expenseList = document.getElementById('expenseList');

//     if (expenseForm) {
//         expenseForm.addEventListener('submit', function(event) {
//             event.preventDefault();

//             const description = document.getElementById('description').value;
//             const category = document.getElementById('category').value;
//             const amount = document.getElementById('amount').value;

//             if (description && category && !isNaN(amount) && amount.trim() !== '') {
//                 const newRow = document.createElement('tr');

//                 newRow.innerHTML = `<td>${description}</td>
//                                     <td>${category}</td>
//                                     <td>${amount}</td>`;
                
//                 expenseList.appendChild(newRow);

//                 document.getElementById('description').value = '';
//                 document.getElementById('category').value = '';
//                 document.getElementById('amount').value = '';
//             } else {
//                 alert('Please fill out all fields with valid data');
//             }
//         });
//     }
// });
