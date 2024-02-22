const fetchData = require('./fetchData');

async function processData() {
  try {
    const result1 = await fetchData('url1');
    console.log('Result 1:', result1);
    
    const result2 = await fetchData('url2');
    console.log('Result 2:', result2);
    
    // Other asynchronous operations...
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = processData;
