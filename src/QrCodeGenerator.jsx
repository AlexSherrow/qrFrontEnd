import React from 'react';
import QRCode from 'react-qr-code';

function QRCodeGenerator({ url }) {
  return (
    <div>
      <QRCode value={url} />
    </div>
  );
}

export default QRCodeGenerator;