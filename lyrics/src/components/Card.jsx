import React from 'react';
import '../Card.css';

const Card = ({ nombres, alerta, guardarAlerta }) => {

    const closeAlerta = () => {
        guardarAlerta(false);
    };

    return alerta ? (
        <div className="card">
            <div className="alert">
                <div className="alert-header">
                    <h3>Sport Leagues</h3>
                </div>
                <div className="alert-body">
                    <ul>
                        {nombres.map((nombre, index) => (
                            <li key={index}>{nombre}</li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={closeAlerta}
                    className="close-btn"
                >Close</button>
            </div>
        </div>
    ) : null;
};

export default Card;