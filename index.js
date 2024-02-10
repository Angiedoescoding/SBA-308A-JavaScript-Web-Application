// Event listener for button click
document.getElementById('showInfoBtn').addEventListener('click', showParkInfo);

const apiKey = 'PufLRfqTHZMkQrBBrWpt3WMtshK13FSTP2n9yHpt';
const apiUrl = 'https://developer.nps.gov/api/v1/parks';            // parks list

async function fetchParkData() {
const url = `${apiUrl}?api_key=${apiKey}`;

try {
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error('Failed to fetch park data');
    }
    const data = await response.json();
    return data;
} catch (error) {
    console.error('Error fetching park data:', error.message);
    return null;
}
}























// API Key: PufLRfqTHZMkQrBBrWpt3WMtshK13FSTP2n9yHpt
// Each API request contains:
    // Resource Endpoint
    // Query String Parameters
    // HTTP Request Header with an API Key
    // For example, consider the following URL: https://developer.nps.gov/api/v1/alerts?parkCode=acad,dena

// HTTP Header

    // curl -H 'X-Api-Key: INSERT-API-KEY-HERE' 'https://developer.nps.gov/api/v1/parks?parkCode=acad'
    // GET Query Parameter

    // curl 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=INSERT-API-KEY-HERE'


// How do I get images from the "parks" endpoint on the NPS API since they are not included by default in the API response?
// In order to include non default properties in the API response, you should use the "fields" query string parameter. Please see the API documentation page for detailed information on the query string parameters.

// For example, an API request to the URL below would return the default fields and the images property (fields=images) for all parks located in DC and MD (stateCode=DC,MD).

// https://developer.nps.gov/api/v0/parks?stateCode=DC,MD,VA&fields=images
