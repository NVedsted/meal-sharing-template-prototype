import { Link } from "react-router-dom";
import Hello from "../components/Hello";

export default function HomeComponent() {
  return (
    <>
      <h1>Meal Sharing!</h1>
      <Hello />
      <Link to="/secret">Want to see something cool?</Link>
    </>
  );
}
