import "./header.css";

import "react-toastify/dist/ReactToastify.css";

export const Header = () => {
  return (
    <header>
      <h2>
        Wagging Tails and Wet Noses:{" "}
        <span style={{ color: "black" }}>A Dog Lover's Paradise</span>
      </h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>Pet Care Tips</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};
