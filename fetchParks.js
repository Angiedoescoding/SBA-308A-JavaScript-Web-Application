const apiKey = 'PufLRfqTHZMkQrBBrWpt3WMtshK13FSTP2n9yHpt';
const apiUrl = 'https://developer.nps.gov/api/v1/parks';            // parks list

export async function fetchParkData() {                        // fetching all parks general data 
    const parks = [];
    let page = 1;                   // pagination so all parks are shown in teh list
    let totalPages = 1;

    while (page <= totalPages) {
        const url = `${apiUrl}?api_key=${apiKey}&limit=500&page=${page}`;    // increased the limit to 500 and now a full list is shown

try {
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error('Failed to fetch park data. Try again.');
    }

    const data = await response.json();             // waiting for the data to return to us
    parks.push(...data.data);
    totalPages = data.totalPages;
    page++;
} catch (error) {
    console.error('Error fetching park data:', error.message);
    return null;
    }
    }
return parks;                       
}
