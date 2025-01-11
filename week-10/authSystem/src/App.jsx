import AuthSystem from './components/AuthSystem';
import './Auth.css';
import { AuthContextProvider } from './context/auth.context';

function App() {
  return <AuthContextProvider>
  <AuthSystem />
  </AuthContextProvider>
}

export default App;
