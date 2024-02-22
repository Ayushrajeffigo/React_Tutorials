function fetchData(url) {
    return new Promise((resolve, reject) => {
      // Simulate fetching data asynchronously
      setTimeout(() => {
        const data = { result: 'some data' };
        resolve(data); // Resolve the promise with the data
      }, 1000);
    });
  }
  
  module.exports = fetchData;
  