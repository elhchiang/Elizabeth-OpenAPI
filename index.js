.then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log(data); // Do something with the data
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      
      if (!response.ok) {
        throw new Error('Request failed');
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  fetchData();
  