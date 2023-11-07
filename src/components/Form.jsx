import React from 'react'

export default function Form() {
  const handleSubmit = () => {};

  return (
    <>
    <h1>Osteria Corte dei Frati - Zürich</h1>

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
        <input type='number' name="amount_of_places" placeholder='Wähle aus'/>
    </label>
    </form>
    </>
  )
}
