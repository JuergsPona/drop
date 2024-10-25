/**
 * Unsplash API Service
 */

import axios from 'axios';
import Config from 'react-native-config';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${Config.UNSPLASH_ACCESS_KEY}`,
  },
});

export const getLatestImages = async (page = 1, perPage = 10) => {
  try {
    const response = await unsplashApi.get('/photos', {
      params: {page, per_page: perPage, order_by: 'latest'},
    });

    return response.data;
  } catch (error) {
    // Handle the error at some point...
    console.error('Error fetching images: ', error);
    throw error;
  }
};
