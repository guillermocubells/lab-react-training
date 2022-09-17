function Greetings(props) {
  const { lang, children } = props;
  switch (lang) {
    case 'de':
      return <p>Hallo {children}</p>;
    case 'en':
      return <p>Hello {children}</p>;
    case 'es':
      return <p>Hola {children}</p>;
    case 'fr':
      return <p>Bonjour {children}</p>;
  }
}

export default Greetings;
