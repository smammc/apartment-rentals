import { useNavigate } from "react-router-dom";

const imgURL =
  "https://www.dpmarketingcommunications.com/wp-content/uploads/2016/11/404-Page-Featured-Image.png";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-12 bg-gray-100">
      <div className="w-3/4 max-w-md">
        <img src={imgURL} alt="Not found Page" className="w-full h-auto" />
      </div>
      <button
        onClick={handleNavigate}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Return to Homepage
      </button>
    </div>
  );
}
