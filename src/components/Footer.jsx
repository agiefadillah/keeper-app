import React from 'react';

function Footer() {
  const tahunSekarang = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p>Copyright ⓒ {tahunSekarang}</p>
      </footer>
    </div>
  );
}

export default Footer;
