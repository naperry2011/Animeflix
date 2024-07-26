import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import { fetchTopAnime } from '../utils/api';

const Home = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [featuredAnime, setFeaturedAnime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const animeList = await fetchTopAnime();
      setTopAnime(animeList);
      setFeaturedAnime(animeList[0]);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Banner anime={featuredAnime} />
      <main className="container mx-auto px-4 pt-20">
        <h2 className="text-2xl font-bold mb-4">Top Anime</h2>
        {/* Add a list or grid of top anime here */}
      </main>
    </div>
  );
};

export default Home;