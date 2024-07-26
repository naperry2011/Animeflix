import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { searchAnime } from '../utils/api';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      const searchResults = await searchAnime(query);
      setResults(searchResults);
    }
  };

  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold mb-4">Search Anime</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for an anime..."
            className="flex-grow"
          />
          <Button type="submit" className="ml-2">Search</Button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((anime) => (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="block">
            <div className="bg-purple-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{anime.title}</h3>
                <p className="text-sm text-gray-300">{anime.type}, {anime.episodes} episodes</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;