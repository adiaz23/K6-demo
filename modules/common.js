/** 
 * @param {boolean} checkRes the result of the response validation 
 * @param {JSON} response the response from the endpoint
 */
export function returnError(checkRes, response){
    if(!checkRes)
        console.log(`Failed with error code ${response.status}: ${response.status_text}`);
}