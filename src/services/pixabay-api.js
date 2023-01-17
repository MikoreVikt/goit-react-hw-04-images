import axios from 'axios';

const API_KEY = '31263491-2b7279f8f7be1b28a60fa7e7e';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.data.total === 0) {
    throw new Error(`No Picture with name ${query}`);
  }
  return response.data;
};
