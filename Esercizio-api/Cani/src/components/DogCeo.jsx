import React, { useState, useEffect } from 'react';
import './DogCeo.css';

const DogBreedsApp = () => {
  const [breedImage, setBreedImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHusky = async () => {
    setLoading(true);
    setError(null); // reset error ad ogni fetch
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
      const data = await response.json();
      const breeds = data.message;

      if (breeds.husky) {
        const imgResponse = await fetch('https://dog.ceo/api/breed/husky/images/random');
        if (!imgResponse.ok) throw new Error('Immagine non trovata');
        const imgData = await imgResponse.json();
        setBreedImage(imgData.message);
      } else {
        throw new Error('Husky non trovato nella lista');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHusky();
  }, []);

  return (
    <div className="app-container">
      <h2>🐾 Husky (dalla Lista API)</h2>
      <button className="refresh-button" onClick={fetchHusky} disabled={loading}>
        {loading ? 'Caricamento...' : '🎲 Nuova Immagine'}
      </button>

      {error && <div className="error-message">❌ Errore: {error}</div>}

      {breedImage && !error && (
        <div className="image-card">
          <h3>Husky</h3>
          <img
            src={breedImage}
            alt="Husky"
            className="breed-image"
          />
        </div>
      )}
    </div>
  );
};

export default DogBreedsApp;
