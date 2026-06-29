import React from 'react';

interface Character {
  id: number;
  name: string;
  occupation: string;
  portrait_path: string;
  status?: string;
  age?: number;
  birthdate?: string;
  gender?: string;
}

const CharacterList = ({ characters, onSelect }: { characters: Character[]; onSelect: (c: Character) => void }) => {
  return (
    <div className="character-list">
      <div className="character-grid">
        {characters.map((character) => (
          <div key={character.id} className="character-card" onClick={() => onSelect(character)}>
            <img
              src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
              alt={character.name}
              className="character-avatar"
            />
            <h3>{character.name}</h3>
            <p className="occupation">{character.occupation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
