import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Menu from "./components/Menu";
import ReservationForm from "./components/ReservationForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <Menu />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
