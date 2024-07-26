import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import AnimeRow from '../components/AnimeRow';
import { fetchTopAnime, fetchAnimeByGenre } from '../utils/api';

const Home = () => {
  const [featuredAnime, setFeaturedAnime] = useState(null);
  const [topAnime, setTopAnime] = useState([]);
  const [actionAnime, setActionAnime] = useState([]);
  const [romanceAnime, setRomanceAnime] = useState([]);
  const [comedyAnime, setComedyAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const top = await fetchTopAnime();
        setTopAnime(top);
        setFeaturedAnime(top[0]);

        const action = await fetchAnimeByGenre(1);
        setActionAnime(action);

        const romance = await fetchAnimeByGenre(22);
        setRomanceAnime(romance);

        const comedy = await fetchAnimeByGenre(4);
        setComedyAnime(comedy);
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {featuredAnime && <Banner anime={featuredAnime} />}
      <main className="container mx-auto px-4 py-8">
        <AnimeRow title="Top Anime" animes={topAnime} />
        <AnimeRow title="Action Anime" animes={actionAnime} />
        <AnimeRow title="Romance Anime" animes={romanceAnime} />
        <AnimeRow title="Comedy Anime" animes={comedyAnime} />
      </main>
    </div>
  );
};

export default Home;