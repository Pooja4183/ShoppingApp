import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProfileHeader() {
  return (
    <Link
      to="/profile"
      className="flex flex-col items-center text-xs font-medium text-black"
    >
      <FaUser size={18} className="hover:text-pink-600 bg-transparent" />
      Profile
    </Link>
    
  );
}

export default ProfileHeader;
