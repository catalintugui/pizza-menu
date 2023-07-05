import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Fast React Pizza & Co.</h1>;
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <Pizza />
    </main>
  );
}

function Pizza() {
  return <h2>pizza</h2>;
}

function Footer() {
  return <h2>footer</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
