import { useState } from 'react';
import QRCode from 'qrcode.react';
import './QRCodeGenerator.css'

const QRCodeGenerator = () => {
  const [enlace, setEnlace] = useState('');

  const handleInputChange = (event) => {
    setEnlace(event.target.value);
  };

  return (
    <div className='qrgenerator'>
      <h2>Generador de código QR</h2>
      <input type="text" value={enlace} onChange={handleInputChange} placeholder="Ingrese el enlace" />
      <div>
      {enlace && <QRCode value={enlace} />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
