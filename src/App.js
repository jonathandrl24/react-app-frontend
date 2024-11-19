import React from "react";
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <Header />
      <AppRouter />
      <Footer />
    </AuthProvider>
  );
}

export default App;

