import React from 'react';

const streamData = [
  { id: 'nO30WUIrCfk', title: 'OTV: Rath Yatra 2024 - Jay Jagannath' },
  { id: 'Uun00067siQ', title: 'Kanak News: Rath Yatra 2025 Live' },
  { id: 'U2zYfiX_1ZU', title: 'Kalinga TV: Rath Yatra Live' },
];

const LiveStreamSection = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>📺 Live Rath Yatra Streams</h2>
      <div style={styles.grid}>
        {streamData.map((stream, index) => (
          <div key={index} style={styles.card}>
            <h4 style={styles.title}>{stream.title}</h4>
            <div style={styles.iframeWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${stream.id}?autoplay=1`}
                title={stream.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={styles.iframe}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#f1f8e9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    color: '#33691e',
    marginBottom: '10px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    flex: '1 1 300px',
    maxWidth: '450px',
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
  },
  title: {
    marginBottom: '12px',
    fontSize: '18px',
    color: '#1b5e20',
  },
  iframeWrapper: {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: 0,
    overflow: 'hidden',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};

export default LiveStreamSection;
