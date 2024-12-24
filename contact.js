function validation(){
    let name =document.getElementById("name").value;
    let password =document.getElementById("password").value;
    let email =document.getElementById("email").value;
    let message =document.getElementById("message").value;
    let  city =document.getElementById("city").value;
    let text =document.getElementById("show_massage")
    if(name ===""||password === ""||email === ""||message === ""||city === ""){
        alert(" you must enter all data ")
        return false;
    }
    if(message.length < 20 ||message.length > 400){
        alert("you must enter length between 20 and 300 lerter")
        return false;
    }
    if( password.length < 2 || password.length > 10){
          alert("you must enter length between 2 and 10 lerter")
          return false;

    }
    if(email.indexOf("@") ===-1||email.indexOf(".") ===-1){
        alert("invalid email");
        return false;
    }
        return true;
    
}

// Sample data for searching
const items = [
    "CCTV",
    "Camera",
    "Wyze",
    "HMD2 ",
    "PIR motion",
    "Blink XT2",
    "TP-Link",
    "Nest Cam"
  ];
  
 
  function displayResults(query) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; 
  
    if (query.trim() === '') {
      resultsContainer.innerHTML = '<li class="list-group-item">Please enter a search term.</li>';
      return;
    }
    const results = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  
    if (results.length === 0) {
      resultsContainer.innerHTML = '<li class="list-group-item">No results found.</li>';
    } else {
      results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = result;
        resultsContainer.appendChild(listItem);
      });
    }
  }
  
  document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchBox').value;
    displayResults(query);
  });
  document.getElementById('searchBox').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const query = event.target.value;
      displayResults(query);
    }
  });