import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./components/context/AuthContext";
import Header from "./components/Header";

function App() {
  return (
    // context 데이터에 접근
    <AuthContextProvider>
      <Header />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
