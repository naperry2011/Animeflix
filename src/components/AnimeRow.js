import React from 'react';
import { Link } from 'react-router-dom';

const AnimeRow = ({ title, animes }) => {
  if (!animes || animes.length === 0) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {animes.map((anime) => (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="flex-shrink-0">
            <div className="w-40 h-60 relative group">
              <img 
                src={anime.images.jpg.image_url} 
                alt={anime.title} 
                className="w-full h-full object-cover rounded-md transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white text-center p-2">
                  <span className="block font-bold">{anime.title}</span>
                  <span className="text-sm">{anime.episodes || 'N/A'} eps</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimeRow;