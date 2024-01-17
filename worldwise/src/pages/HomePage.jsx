import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";
export default function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>HomePage</h1>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}
