import Quote from "./Quote"

function App() {
  return (
    <Quote 
      quotes={[
        { quote: 'The worst enemy to creativity is self-doubt.', author: 'Sylvia Plath' },
        { quote: 'You will face many defeats in life, but never let yourself be defeated.', author: 'Maya Angelou' },
        { quote: 'Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves.', author: 'Marie Curie' },
        { quote: 'If you can dance and be free and not be embarrassed, you can rule the world.', author: 'Amy Poehler' },
        { quote: 'Bring your whole self to the experience. Because the more we do that, the more that people get to see that, the more comfortable everybody\'s gonna be with it.', author: 'Bozoma Saint John' },
        { quote: 'People should never give up—there is always hope…. If we all give up hope and do nothing, then indeed there is no hope. It will be helped by all of us taking action of some sort. Cumulatively, our small decisions, choices, and actions make a very big difference.', author: 'Jane Goodall' },
        { quote: 'It\'s a courageous act to just be with whatever is happening at the moment—all of it, the difficult as well as the wonderful.', author: 'Eileen Fisher' },
        { quote: 'Fight for the things that you care about, but do it in a way that will lead others to join you.', author: 'Ruth Bader Ginsburg' },
        { quote: 'Do what you feel in your heart to be right-for you\'ll be criticized anyway.', author: 'Eleanor Roosevelt' },
        { quote: 'The first resistance to social change is to say it\'s not necessary.', author: 'Gloria Steinem' }
      ]}
    />
  );
}

export default App;