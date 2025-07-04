// HeaderBanner.js
const HeaderBanner = () => (
  <header
    style={{
      backgroundImage: 'url(/images/rath-yatra-poster.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      fontWeight: 'bold',
      textShadow: '2px 2px 6px black',
    }}
  >
    Puri Rath Yatra 2025
  </header>
);

export default HeaderBanner;
