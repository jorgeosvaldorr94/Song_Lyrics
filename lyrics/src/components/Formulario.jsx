import React, { useState } from 'react'

const Formulario = ({guardarBusquedaletra}) => {

    // State para guardar los campos de busqueda 
    const [ busqueda, guardarBusqueda ] = useState({
        country: '',
        team: ''
    });

    // State para los errores
    const [ error, guardarError ] = useState(false);

    // Extraer el state, para pasarlos a los values
    const { country, team } = busqueda;

    // Funcion para leer el input
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    };

    // Consultar las APIs
    const buscarInformacion = e => {
        e.preventDefault();

        /*
        if(country.trim() === '' || team.trim() === '' ) {
            guardarError(true);
            return;
        }
        */

        guardarError(false);
        // Todo bien, pasar al componente principal

        guardarBusquedaletra(busqueda);
    };

    return ( 
        <div className='bg-info'>
            <div className='container'>
                    {error
                        ?
                            <p 
                                className='alert alert-danger text-center p-2'
                            >PLease all fields are required</p>
                        :
                            null
                    }
                <div className='row'>
                    <form
                    onSubmit={buscarInformacion}
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                    >
                        <fieldset className='no-margin'>
                            <legend className='text-center'>Serach All Sport</legend>

                            <div className='row'>
                                <div className='col-md-6'>

                                    <div className='form-group'>
                                        <label>Country</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='country'
                                            placeholder='Country Name'
                                            onChange={actualizarState}
                                            value={country}
                                        />
                                    </div>

                                </div>

                                <div className='col-md-6'>

                                    <div className='form-group'>
                                        <label>Team</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='team'
                                            placeholder='Team Name'
                                            onChange={actualizarState}
                                            value={team}
                                        />
                                    </div>

                                </div>
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >Search</button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;