import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          This project was coded by{" "}
          <a
            href="https://github.com/WickedZ2309"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andrea G.
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/WickedZ2309/shecodes-react-addon-week2"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://shecodes-react-addon-week2-ag.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </small>
      </footer>
    </div>
  );
}
