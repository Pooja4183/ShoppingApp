import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/actions/authActions";

function ProfileHeader() {
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.auth.user);

  console.log('user info in profile:', user)

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="relative group">
      {/* Profile Icon */}
      <div className="flex flex-col items-center text-xs font-medium text-black group-hover:text-pink-600">
        <FaUser size={18} />
        <span>Profile</span>
      </div>

      {/* Dropdown Menu */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-lg w-56 p-4 z-50">
        <ul className="text-sm font-normal text-gray-600 space-y-2">
          {/* ✅ Show Login only when user is NOT logged in */}
          {!isAuthenticated && (
            <li className="flex justify-center gap-3">
              <button
                className="text-sm font-medium text-pink-600 hover:underline"
                onClick={handleLoginRedirect}
              >
                LOGIN
              </button>
              <span className="text-gray-400">|</span>
              <button
                className="text-sm font-medium text-blue-600 hover:underline"
                onClick={() => navigate("/signup")}
              >
                SIGN UP
              </button>
            </li>
          )}

          {/* ✅ Common Items (Visible to all) */}
          {isAuthenticated &&(<>
           <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer font-medium text-black sm:text-sm md:text-base">
            {user.name}
          </li>
          <hr></hr>
          </>)}
          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
            Orders
          </li>
          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
            Wishlist
          </li>
          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
            Gift Cards
          </li>
          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
            Contact Us
          </li>
          <li className="hover:bg-gray-100 px-2 py-1 rounded flex justify-between items-center cursor-pointer">
            App Insider
            <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">
              New
            </span>
          </li>
          <hr />
          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
            Edit Profile
          </li>

          {/* ✅ Show Logout only when user IS logged in */}
          {isAuthenticated && (
            <li
              className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProfileHeader;
