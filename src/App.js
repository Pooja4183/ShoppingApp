import AuthProvider from "./contexts/AuthContext";
import MainApp from "./MainApp";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainApp />
      </Router>
    </AuthProvider>
  );
}

export default App;
