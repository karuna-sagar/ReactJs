

export const exerciseOptions = {
    method: 'GET',
    params: { limit: '500' },
    headers: {
        'X-RapidAPI-Key': '79758a5f1dmsh4e5aca16fbf268bp1db990jsn0d0cedf67fe8',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json();
    return data;
}
