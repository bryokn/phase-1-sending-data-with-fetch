// Add your code here
function submitData() {
    const name = 'sam'; // Replace this with the name you want to submit
    const email = 'sam@sam.com'; // Replace this with the email you want to submit
  
    // Data to be sent in the POST request
    const data = {
      name: name,
      email: email,
    };
  
    // Options for the fetch request
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    fetch("http://localhost:3000/users")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assuming the response contains the newly created user's data including the ID
        const newUserId = data.id;
  
        // Append the newUserId to the DOM (e.g., as a new element, or update an existing element)
        const userIdElement = document.createElement('div');
        userIdElement.textContent = `New User ID: ${newUserId}`;
        document.body.appendChild(userIdElement);
      })
      .catch(error => {
        // Append the error message to the DOM (e.g., as a new element, or update an existing element)
        const errorElement = document.createElement('div');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  
  // Call the submitData function to initiate the POST request
  submitData();
