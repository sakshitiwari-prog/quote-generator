import axios from 'axios';
import {Constants} from './constants';
const postRequest = async (url: string, data?: any) => {
  console.log(url, data);

  try {
    const response = await axios.post(url, data);
    console.log('response data:', response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    console.error('Error fetching data:', error);
    return error;
  }
};
const getQuoteList = async (url: string, data?: any) => {
  console.log(url, data);

  try {
    const response = await axios.get(url, {
      headers: {
        userId: data.userId,
      },
    });
    console.log('response data:', response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    console.error('Error fetching data:', error);
    return error;
  }
};
const quoteSearchRequest = async (url: string, data?: any) => {
  let quoteUrl = `${url}${data.quote}`;
  const headers = {
    'X-Api-Key': Constants.apiKey.quoteSearchKey,
    contentType: 'application/json',
  };

  try {
    const response = await axios.get(quoteUrl, {
      params: data, // Include body data as URL parameters
      headers: headers, // Include custom headers
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error;
  }
};

export {postRequest, getQuoteList, quoteSearchRequest};
