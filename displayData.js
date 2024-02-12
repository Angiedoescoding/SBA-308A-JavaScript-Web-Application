import { fetchParkData } from './fetchParks.js';
import { fetchParkImage } from './fetchImages,js';

export async function displayParksInDropdown(parkCode) {
    const parkData = await fetchParkData();
    const selectedPark = parkData.find(park => park.parkCode === parkCode);
    
    if (selectedPark) {
        const parkImage = await fetchParkImage(parkCode);

        const parkInfoDiv = document.getElementById('parkInfo');
        parkInfoDiv.innerHTML = `
        <h3>${selectedPark.fullName}</h3>
        <p>${selectedPark.description}</p>
        <p><strong>Location:</strong> ${selectedPark.states}</p>
        <p><strong>Address:</strong> ${selectedPark.addresses[0].city}</p>
        <p><strong>URL:</strong> <a href="${selectedPark.url}" target="_blank">${selectedPark.url}</a></p>
        ${parkImage ? `<img src="${parkImage}" alt="${selectedPark.fullName} Image">` : ''}
        `;
        } else {
            console.error('Selected park data not found.')
        }
}
