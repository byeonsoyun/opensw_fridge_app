import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/foods/')
      .then(response => {
        setFoods(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Foods</h1>
      <ul>
        {foods.map(food => (
          <li key={food.id}>{food.name} - {food.expiration_date}</li>
        ))}
      </ul>
      <NewUI />
      <FigmaToCodeApp />
    </div>
  );
}

const NewUI = () => {
  return (
    <div style={{ backgroundColor: '#121f2f', color: '#faf7ff', height: '100vh', padding: '20px' }}>
      <div style={{ width: '100%', height: '100%', backgroundColor: '#faf7ff' }}>
        <h2>New UI Section</h2>
        {/* 추가 UI 요소는 여기에 추가 */}
      </div>
    </div>
  );
}

const FigmaToCodeApp = () => {
  return (
    <div style={{ backgroundColor: '#121f2f', color: '#faf7ff', height: '100vh', padding: '20px' }}>
      <div style={{ width: '100%', height: '100%', backgroundColor: '#faf7ff' }}>
        <h2>Figma to Code App</h2>
        {/* 추가 UI 요소는 여기에 추가 */}
      </div>
    </div>
  );
}

export default App;

