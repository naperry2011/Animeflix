const BASE_URL = 'https://api.jikan.moe/v4';

export const fetchTopAnime = async () => {
  try {
    const response = await fetch(`${BASE_URL}/top/anime?limit=10`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching top anime:', error);
    return [];
  }
};

export const fetchAnimeByGenre = async (genreId) => {
  try {
    const response = await fetch(`${BASE_URL}/anime?genres=${genreId}&limit=10`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching anime for genre ${genreId}:`, error);
    return [];
  }
};

export const fetchAnimeDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/anime/${id}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching anime details for id ${id}:`, error);
    return null;
  }
};

export const searchAnime = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}&limit=20`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error searching anime:', error);
    return [];
  }
};