import "./App.css";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Healthcare from "./components/Healthcare/Healthcare";
import Download from "./components/Download/Download";
import Customer from "./components/Customer/Customer";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Services />
      <Healthcare />
      <Download />
      <Customer />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
