import React from 'react';
import { Link } from 'react-router-dom';

const AnimeRow = ({ title, animes }) => (
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {animes.map((anime) => (
        <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="flex-shrink-0 group relative">
          <img src={anime.images.jpg.image_url} alt={anime.title} className="w-48 h-28 object-cover rounded transition-transform group-hover:scale-105" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
            <p className="text-white text-center">
              <span className="block font-bold">{anime.title}</span>
              <span className="text-sm">{anime.episodes || 'N/A'} episodes</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default AnimeRow;