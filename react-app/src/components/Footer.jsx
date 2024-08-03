import GitIcon from "../assets/png-clipart-github-computer-icons-repository-github-angle-git.png";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Apartment Rentals</p>
      <img src={GitIcon} alt="github icon" className="footer-icon" />
    </footer>
  );
}
