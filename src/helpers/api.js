import axios from 'axios';

const backEnd = 'http://localhost:3000/vocab/';

export const ViewAllWords = async () => {
  try {
    const response = await axios.get(backEnd);
    return response.data; // Return the data on success
  } catch (err) {
    console.error(err);
    return null; // Return a default value in case of an error
  }
};

export const ViewWordById = async (id) => {
  try {
    const response = await axios.get(backEnd + id);
    return response.data; // Return the data on success
  } catch (err) {
    console.error(err);
    return null; // Return a default value in case of an error
  }
};
