import Cards from "./component/features/features";
import Header from "./component/header/header";
import Landing from "./component/landing/landing";

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Cards />
    </div>
  );
}
