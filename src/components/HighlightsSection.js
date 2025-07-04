const HighlightsSection = () => {
  const highlights = [
    'Thousands of devotees participating',
    'Traditional music & dance',
    'Colorful decorated chariots',
    'Delicious local food stalls',
    'Live streaming for global viewers',
  ];

  return (
    <section style={{ padding: '20px', backgroundColor: '#ffe6e6' }}>
      <h2>Festival Highlights</h2>
      <ul>
        {highlights.map((item, i) => (
          <li key={i} style={{ margin: '8px 0' }}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default HighlightsSection;
