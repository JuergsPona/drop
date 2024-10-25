/**
 * useUnsplashImages
 * Used to manage the state for fetching images, including loading and error states
 */

import {useEffect, useState} from 'react';
import {getLatestImages} from '../services/unsplashApi';

export const useUnsplashImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const data = await getLatestImages();
      setImages(data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {images, loading, error, refetch: fetchImages};
};
