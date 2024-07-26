import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { fetchAnimeDetails } from '../utils/api';

const AnimeDetails = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const details = await fetchAnimeDetails(id);
      setAnime(details);
    };

    fetchData();
  }, [id]);

  if (!anime) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="flex flex-col md:flex-row">
        <img src={anime.images.jpg.large_image_url} alt={anime.title} className="w-full md:w-1/3 rounded-lg" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">{anime.title}</h1>
          <p className="mb-4">{anime.synopsis}</p>
          <p>Episodes: {anime.episodes}</p>
          <p>Status: {anime.status}</p>
          <div className="mt-4">
            <Button>Watch Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;