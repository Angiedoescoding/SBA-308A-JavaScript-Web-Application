import { fetchParkData } from "./fetchParks.js"; 

window.addEventListener('DOMContentLoaded', async () => {
    const selectedPark = document.getElementById('selectedPark');
    const parkData = await fetchParkData();

    if (!parkData) {
        console.error('No park data available');
        return;
    }

parkData.forEach(park => {
    const option = document.createElement('option');
    option.value = park.parkCode;
    option.textContent = park.fullName;
    selectedPark.appendChild(option); 
    });
});


// Event listener for button click
document.getElementById('showInfoBtn').addEventListener('click', () => {
    const parkCode = document.getElementById('selectedPark').value;
    displayParksInDropdown(parkCode);
});




//*** Reflection on the issues: */

// 1. Not all parks are loaded in the drop-down list - possible this is because the API returns paginated results (?), and by default, it only returns the first page of results? fetchParkData
// 2. The image API works, but the image itseld isn't loading.
// 3. After applying the modules, the console shows: "Uncaught ReferenceError: displayParksInDropdown is not defined at HTMLButtonElement.<anonymous>"


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
