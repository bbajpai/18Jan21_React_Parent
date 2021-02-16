const URL_ROOT = 'http://localhost:3004'

export function getCars(keyword){
    console.log(`Made a request with :: ${keyword} `);
    console.log(`Requested URL :: ${URL_ROOT}/carsIndex?q=${keyword}`);


    const request =  fetch(`${URL_ROOT}/carsIndex?q=${keyword}`, 
                    {method:'GET'})
                    .then(response => response.json());

    console.log('Request data ::: ', request);

    //>>fetch >> jsonserver >>> search >>> return data >> send that to reducer
    return{
        type:'SEARCH_CARS',
        payload:request
    }
}