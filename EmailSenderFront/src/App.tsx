import TemplateEmail from './components/template-email';
import { renderToStaticMarkup } from 'react-dom/server';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import axios from 'axios';
import './App.css';

function App() {
  const data = {
    subject: 'Asunto',
    plainText: '...',
    htmlContent: renderToStaticMarkup(<TemplateEmail />),
    recipients: ['correo al que va dirigido el mensaje'],
  };

  const handleSendEmail = async () => {
    const response = await axios.post(
      'https://localhost:44300/api/Email',
      data
    );
    console.log(response);
  };

  return (
    <>
      <div>
        <a
          rel='noopener'
          href='https://vite.dev'
          target='_blank'
        >
          <img
            src={viteLogo}
            className='logo'
            alt='Vite logo'
          />
        </a>
        <a
          rel='noopener'
          href='https://react.dev'
          target='_blank'
        >
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={handleSendEmail}>Enviar correo electrónico</button>
      </div>
      <TemplateEmail />
    </>
  );
}

export default App;
