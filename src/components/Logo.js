import { constants } from "../utils/constants";

const Logo = () => {
  return (
    <div className="logo">
      <img
        src={constants.LOGO_URL}
        alt="logo"
        className="logo"
      />
    </div>
  );
};

export default Logo;