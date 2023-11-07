import React, { useState } from 'react';

function App() {
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [datetime, setDatetime] = useState();
  const [amountOfPlaces, setAmountOfPlaces] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">

      <form onSubmit={handleSubmit}>
      <label>
          Nachname
          <input type="text" name="lastName" placeholder='Geben Sie Nachname ein'/>
      </label>
      <label>
          Email
          <input type="text" name="email" placeholder='Geben Sie E-Mail ein'/>
      </label>
      <label>
          Telefon
          <input type="text" name="telefon" placeholder='Geben Sie Telefonnummer ein'/>
          <button>Überprüfen</button>
      </label>
      <label>
          Datum & Uhrzeit
          <input type='datetime-local' name="datetime" placeholder='Wählen Sie Datum & Uhrzeit aus'/>
      </label>
      <label>
          Anzahl Plätze
          <input type='number' name="amountOfPlaces" placeholder='Wähle aus'/>
      </label>
      <button type='submit'>Reservieren</button>
      </form>
    </div>
  );
}

export default App;
