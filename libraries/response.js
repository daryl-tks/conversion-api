export function success(body, status = 200) {
    return response(status, body);
  }
  
  export function failure(body, status = 500) {
    return response(status, body);
  }
  
  export function not_found(body, status = 404) {
    return response(status, body);
  }
  
  function response(statusCode, body) {
    return {
      statusCode: statusCode,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(body)
    };
  }
  