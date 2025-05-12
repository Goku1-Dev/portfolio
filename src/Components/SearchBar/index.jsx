import { useState } from 'react';
import { Search } from 'lucide-react';
import './index.scss';

export const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', query);
  };

  return (
    <div className="searchBar">
      <form className='searchBar_form' onSubmit={handleSearch}>
        <input
        className='searchBar_input'
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit" className='searchBar_button'>
          <Search />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;



