import About from "./component/about/about";
import Cards from "./component/features/features";
import Header from "./component/header/header";
import Landing from "./component/landing/landing";
import Portfolio from "./component/portfolio/portfolio";
import Contact from './component/contact/contact'
import Footer from "./component/footer/footer"

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Cards />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
