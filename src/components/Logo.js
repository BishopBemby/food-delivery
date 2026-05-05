import { constants } from "../utils/constants";

const Logo = () => {
  return (
    <div className="h-16 w-16 ml-6 border-2 border-solid border-gray-300 rounded-full">
      <img
        src={constants.LOGO_URL}
        alt="logo"
        className="h-full w-full object-cover rounded-full bg-transparent"
      />
    </div>
  );
};

export default Logo;