import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between p-10">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
