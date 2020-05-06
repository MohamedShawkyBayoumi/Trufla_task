import axios from 'axios';

const request = async (options, isHeader = false) => {
  let headers = {};
    let baseURL = 'http://localhost:5000';
    if (isHeader) {
      headers = {
        'Content-Type': 'application/json'
      };

    }

    const client = axios.create({
      baseURL,
      headers,
    });

    const onSuccess = function(response) {
      return response.data;
    };

    const onError = function(error) {

      return Promise.reject(error.response || error.message);
    };

    return client(options)
      .then(onSuccess)
      .catch(onError);
};

export default request;
