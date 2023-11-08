import React, { useState } from 'react';

function App() {
 const [lastName, setLastname] = useState("");
 const [email, setEmail] = useState("");
 const [telefon, setTelefon] = useState("");
 const [datetime, setDatetime] = useState();
 const [amountOfPlaces, setAmountOfPlaces] = useState();
 const [error, setError] = useState(false);
 const [placeError, setPlaceError] = useState(false);
 const [extraRequirements, setExtraRequirements] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault();
    const { lastName, email, telefon, datetime, amountOfPlaces } = e.target;
    setLastname(lastName.value);
    setEmail(email.value);
    setTelefon(telefon.value);
    setDatetime(datetime.value);
    setAmountOfPlaces(amountOfPlaces.value);
 };

 const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes('@')) {
      setError(true);
    } else {
      setError(false);
    }
 };

 const handleAmountOfPlacesChange = (e) => {
    const value = e.target.value;
    setAmountOfPlaces(value);

    if (value < 0 || value > 100) {
      setPlaceError(true);
    } else {
      setPlaceError(false);
    }
 };

 return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
           Nachname
          <input
          type="text" 
          name="lastName" 
          placeholder='Geben Sie Nachname ein' 
          value={lastName} 
          onChange={(e) => setLastname(e.target.value)}/> 
          </label>
        <label> 
          Email 
          <input 
          type="text" 
          name="email" 
          placeholder='Geben Sie E-Mail ein' 
          value={email} 
          onChange={handleEmailChange}/>
          </label>
        {error && <p className='error-email'>Bitte geben Sie eine gültige E-Mail ein</p>}
    
        <label> 
          Telefon 
          <input type="text" 
          name="telefon" 
          placeholder='Geben Sie Telefonnummer ein' 
          value={telefon} 
          onChange={(e) => setTelefon(e.target.value)}/>
           </label>
        <label> 
          Datum & Uhrzeit 
          <input type='datetime-local' 
          name="datetime" 
          placeholder='Wählen Sie Datum & Uhrzeit aus' 
          value={datetime} 
          onChange={(e) => setDatetime(e.target.value)}/>
           </label>
        <label> 
          Anzahl Plätze 
          <input type='number' 
          name="amountOfPlaces" 
          placeholder='Wähle aus' 
          value={amountOfPlaces} 
          onChange={handleAmountOfPlacesChange}/>
           </label>
           {placeError && <p className='error-place'>Wähle eine möglich Anzahl an Plätzen</p>}
           <label>
          Zusätzliche Anforderungen
          <input
          type="text"
          name="zusaetzliche_anforderungen"
          value={extraRequirements}
          onChange={(e) => setExtraRequirements(e.target.value)}/>
        </label>
        <button> <span className='box'> Reservieren </span> </button>
      </form>
    </div>
 );
}

export default App;