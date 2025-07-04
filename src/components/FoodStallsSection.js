import React, { useState } from 'react';

const FoodStallsSection = () => {
  const [openDetail, setOpenDetail] = useState(null); // to track which food is open

  const foodItems = [
    {
      id: 1,
      name: 'Dahibara Aloodum',
      image: `${process.env.PUBLIC_URL}/images/food1.jpg`,
      description: 'A famous Cuttack street food: soaked vadas served with spicy potato curry and ghuguni.',
    },
    {
      id: 2,
      name: 'Rasagola',
      image: `${process.env.PUBLIC_URL}/images/food2.jpg`,
      description: 'Soft, syrupy balls made from fresh chhena (cottage cheese), originating from Puri.',
    },
    {
      id: 3,
      name: 'Khaja',
      image: `${process.env.PUBLIC_URL}/images/food3.jpg`,
      description: 'A crunchy sweet dish offered as Mahaprasad in Jagannath Temple. Made of layered flour and sugar.',
    },
    {
      id: 4,
      name: 'Chhena Poda',
      image: `${process.env.PUBLIC_URL}/images/food4.jpg`,
      description: 'Baked cheese dessert made from fresh chhena, sugar, and nuts — Odisha’s favorite!',
    },
  ];

  const toggleDetails = (id) => {
    setOpenDetail(openDetail === id ? null : id);
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>🍛 Delicious Food Stalls</h2>

      <p style={styles.text}>
        Explore a wide variety of traditional Odia dishes like Dahibara Aloodum, Rasagola, Khaja, Chhena Poda, and more!
      </p>

      <div style={styles.imageGrid}>
        {foodItems.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <h4 style={styles.foodName}>{item.name}</h4>

            <button
              onClick={() => toggleDetails(item.id)}
              style={styles.button}
            >
              {openDetail === item.id ? 'Hide Details' : 'View Details'}
            </button>

            {openDetail === item.id && (
              <p style={styles.description}>{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    backgroundColor: '#fff3e0',
    textAlign: 'center',
  },
  heading: {
    fontSize: '30px',
    color: '#d84315',
    marginBottom: '15px',
  },
  text: {
    fontSize: '18px',
    maxWidth: '700px',
    margin: '0 auto 30px',
    color: '#4e342e',
  },
  imageGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    width: '230px',
    border: '3px solid #ffccbc',
    borderRadius: '12px',
    padding: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  foodName: {
    fontSize: '18px',
    margin: '10px 0 5px',
    color: '#bf360c',
  },
  button: {
    backgroundColor: '#ff7043',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '6px 12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  description: {
    fontSize: '14px',
    color: '#5d4037',
    marginTop: '8px',
    padding: '5px',
  },
};

export default FoodStallsSection;
