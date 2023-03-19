import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Card from './components/Card';


function App() {

  // State para la letra
  const [ busquedaletra, guardarBusquedaletra ] = useState({});

  // State para las ligas
  const [ leagues, setLeagues ] = useState([]);

  // State para la lista en la alerta
  const [ alerta, guardarAlerta ] = useState(false);

  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarAPILetra = async () => {

      const { country, team } = busquedaletra;
      let resultadoLigas;
      let resultadoEquipos;

      if(team.trim().length === 0) {
        const url = `https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=${country}`; 
        resultadoLigas = await axios(url);

        console.log(resultadoLigas.data.countries);

        resultadoLigas.data.countries.forEach((pais) => {
          console.log(pais.strLeague);
        });

        const nombresLigas = resultadoLigas.data.countries ? resultadoLigas.data.countries.map((pais) => {
          return pais.strLeague;
        }) : [];

        setLeagues(nombresLigas);
        guardarAlerta(true);


      } else if (country.trim().length === 0) {
        const url = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${team}`; 
        resultadoEquipos = await axios(url);

        console.log(resultadoEquipos.data.teams.strTeam);

        resultadoEquipos.data.teams.forEach((serie) => {
          console.log(serie.strTeam);
        });
      }


    };

    consultarAPILetra();
  }, [busquedaletra])

  // Cerrar la alerta y que se reinicie el formulario
    

  return (
    <>
      <Formulario
        guardarBusquedaletra={guardarBusquedaletra}
      />
      
      {alerta
        ?
          <Card
            nombres={leagues}
            alerta={alerta}
            guardarAlerta={guardarAlerta}
          />
        :
          null
      }
    </>
  );
}

export default App;
