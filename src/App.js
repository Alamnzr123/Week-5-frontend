// import React, { useState, useEffect } from 'react';
// import Card from './Component/Card';
// import Welcome from './Component/className';

// function App() {
//   const [nama, setNama] = useState("Tono");
//   const [angka, setAngka] = useState(1);

//   const ubahNama = (params) => {
//     if (nama == "Tono"){
//       setNama(params)
//     } else{
//       setNama("Bambang")
//     }
//   }

//   //mounted
//   useEffect(() => {
//     console.log("mounted, get data dari API")
//   }, [])

//   // update tanpa depedensi
//   useEffect(() => {
//     console.log("update, tanpa depedensi akan dipanggil setiap ada perubahan")
//   })

//   // update menggunakan depedensi
//   useEffect(() => {
//     console.log("update menggunakan depedensi")
//     setNama("Hello")
//   }, [angka])

//   return (
//     <div>
//       {/* <Card harga={12000} background="blue" /> */}

//       <h1>Nama {nama} - {angka}</h1>
//       <button onClick={() => ubahNama("Tono")}>Ubah Nama</button>
//       <button onClick={() => setAngka(angka + 1)}>Set Angka</button>

//     </div>


//   );
// }

// export default App;

// CODE REACT-ROUTER-DOM

import React, { useState, useEffect } from 'react';
import Card from './Component/Card';
import Router from './router/index';

function App() {

  return (
    <div>
      <Router />
    </div>


  );
}

export default App;