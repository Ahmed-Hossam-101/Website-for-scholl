import React, { useState } from 'react';
import SearchIcon from '../Assets/svg/SearchIcon';
import SearchResults from './SearchResults';

const SearchBar = () => {
  const [Text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {

      setIsFocused(false);
    }, 500);
  };

  return (
<>
<div className="SearchBar">
      <div className="SrchIcon">
        <SearchIcon width='20px' />
      </div>
      <input
        type="text"
        placeholder='..بحث'
        value={Text}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={e => setText(e.target.value)}
      />
    </div>
      {isFocused && <SearchResults  inputedText={Text}/>}</>
  );
};

export default SearchBar;
