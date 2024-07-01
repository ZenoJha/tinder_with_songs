import { useState } from "react";

function GenreFilter({ handleFilter }) {
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleChange = (event) => {
    setSelectedGenre(event.target.value);
    handleFilter(event.target.value);
  };

  return (
    <div className="relative">
      <select
        className="block appearance-none w-full bg-primary border border-gray-700 text-white py-3 px-4 pr-8   rounded leading-tight focus:outline-none focus:bg-primary focus:border-gray-500 hover:bg-cyan-500  "
        value={selectedGenre}
        onChange={handleChange}
      >
        <option value="">All Genres</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
        <option value="hip-hop">Hip Hop</option>
        <option value="jazz">Jazz</option>
        <option value="dance">Dance</option>
        <option value="deep house">Deep House</option>
        <option value="rap">Rap</option>
        <option value="Boy Band">Boy Band</option>
        <option value="Synthpop">Synthpop</option>
        <option value="Vocal House">Vocal House</option>
        <option value="Tech House">Tech House</option>
        <option value="Progressive Trance">Progressive Trance</option>
        <option value="Old School Hip Hop">Old School Hip Hop</option>
        <option value="Funk">Funk</option>
        <option value="R&b">R&b</option>
        <option value="Techno">Techno</option>
        <option value="Deep Funk House">Deep Funk House</option>
        <option value="Deep Chill">Deep Chill</option>
        <option value="Deep Disco House">Deep Disco House</option>
        <option value="Electronica">Electronica</option>
        <option value="Electropowerpop">Electropowerpop</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default GenreFilter;
