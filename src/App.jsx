import { AuthProvider } from "react-auth-kit";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <AuthProvider
      authType="cookie"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <div className="bg-slate-50 min-h-screen">
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
