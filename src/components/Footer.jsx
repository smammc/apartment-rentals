import GitIcon from "../assets/png-clipart-github-computer-icons-repository-github-angle-git.png";

export default function Footer() {
  return (
    <footer className="bg-blue-100 text-center p-4 flex justify-center items-center fixed bottom-0 w-full">
      <a
        className="text-blue-800 mr-2"
        href="https://github.com/smammc/apartment-rentals"
      >
        Apartment Rentals
      </a>

      <img src={GitIcon} alt="github icon" className="w-6 h-6" />
    </footer>
  );
}
