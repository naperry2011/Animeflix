import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

const Banner = ({ anime }) => (
  <div className="relative h-[56.25vw] max-h-[80vh] min-h-[400px]">
    <img src={anime?.images?.jpg?.large_image_url || "/api/placeholder/1920/1080"} alt={anime?.title || "Featured Anime"} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-8 text-white">
      <h1 className="text-5xl font-bold mb-4">{anime?.title || "Loading..."}</h1>
      <p className="text-lg mb-4 max-w-xl">{anime?.synopsis?.slice(0, 200) + "..." || "Loading description..."}</p>
      <div className="space-x-4">
        <Button>Play</Button>
        <Link to={`/anime/${anime?.mal_id}`}>
          <Button>More Info</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Banner;