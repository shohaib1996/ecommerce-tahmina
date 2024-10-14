import Banner from "./components/banner/Banner";
import FeaturedProducts from "./components/featuredProducts/FeaturedProducts";
import Header from "./components/shared/header/Header";
import Navbar from "./components/shared/header/Navbar";

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
}

export default App;
