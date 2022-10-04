import React, { useEffect, useState } from 'react';

export default function App() {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/categories', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setCategorias(result);
        setTimeout(()=>{
          setLoading(false);
        },2000)
        console.log(result);
      })
      .catch((error) => console.log('Error:', error));
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {categorias.length > 0 &&
            categorias.map((elemento) => <p>{elemento.name}</p>)}
        </div>
      )}
    </div>
  );
}
