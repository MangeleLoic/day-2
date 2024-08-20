import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <div className="text-center m-2"> 
        <Welcome/>
      </div>
     
      <header>
        <MyNavbar />
      </header>
      <main className="main">
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
