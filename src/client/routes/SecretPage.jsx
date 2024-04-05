import { Link } from "react-router-dom";

export function SecretComponent() {
  return (
    <>
      <p>This will be our little secret!</p>
      <Link to="/">Go back</Link>
    </>
  );
}
