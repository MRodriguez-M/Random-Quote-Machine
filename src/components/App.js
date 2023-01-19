import Quote from "./Quote"

function App() {
  return (
    <Quote 
      quotes={[
        { quote: 'The worst enemy to creativity is self-doubt.', author: 'Sylvia Plath' },
        { quote: 'You will face many defeats in life, but never let yourself be defeated.', author: 'Maya Angelou' },
        { quote: 'Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves.', author: 'Marie Curie' }
      ]}
    />
  );
}

export default App;