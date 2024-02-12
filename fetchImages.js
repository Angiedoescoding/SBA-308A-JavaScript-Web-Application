const apiKey = 'PufLRfqTHZMkQrBBrWpt3WMtshK13FSTP2n9yHpt';
const apiUrl = 'https://developer.nps.gov/api/v1/parks'; 

export async function fetchParkImage(parkCode) {                      // fetching parks picture
    const parkImageUrl = `https://developer.nps.gov/api/v1/parks?q=image&parkCode=${parkCode}&api_key=${apiKey}`;
    
    try {
        const response = await fetch(parkImageUrl);
        if (!response.ok) {
        throw new Error('Failed to fetch park image.');
        }
        const data = await response.json();
        return data.data[0].url;
    } catch (error) {
        console.error('Error fetching park image:', error.message);
        return null;
    }
}
