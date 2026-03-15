import Cards from "./component/features/features";
import Header from "./component/header/header";
import Landing from "./component/landing/landing";
import Services from "./component/services/services";

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Cards />
      <Services />
    </div>
  );
}
