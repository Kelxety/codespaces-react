

function App() {
  return (
    <div className="bg-gray-900 min-h-screen max-w-7xl items-center flex flex-col justify-center">
      <header className="flex items-start justify-center p-2">
        <img src="Octocat.png" className="h-10 w-10" alt="logo" />
        <p className="text-white">
          GitHub Codespaces <span className="text-red-500">♥️</span> React
        </p>
      </header>
      <p className="w-full mx-auto flex bg-white items-center justify-center">
          Edit {" "} {" - "} {" "} <code>src/App.js</code> and save to reload.
        </p>
        <p className="flex items-center justify-center text-white">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
    </div>
  );
}

export default App;
