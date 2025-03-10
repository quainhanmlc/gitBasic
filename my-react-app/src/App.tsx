// App.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div>
      <h1>Follow us on:</h1>
      <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#3b5998', margin: '10px' }} />
      <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333', margin: '10px' }} />
      <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#1da1f2', margin: '10px' }} />
    </div>
  );
}

export default App;
