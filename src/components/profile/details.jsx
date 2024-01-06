import PropTypes from "prop-types";
import { Profile } from "./index";

function Details({ details }) {
  return (
    <Profile>
      <Profile.Image>{details.image}</Profile.Image>
      <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
        <div className="sm:flex-1">
          <div>
            <Profile.Name>{details.name}</Profile.Name>
            <Profile.OtherName>{details.other_name}</Profile.OtherName>
          </div>
          <div className="-mt-px flex divide-x divide-gray-200"></div>
          <div className="mt-5 flex flex-wrap space-x-2 sm:space-x-3 sm:space-y-0">
            <Profile.Phone>{details.phone}</Profile.Phone>
            <Profile.Email>{details.email}</Profile.Email>
          </div>
        </div>
      </div>
      <Profile.Country>{details.country}</Profile.Country>
    </Profile>
  );
}

export default Details;

Details.propTypes = {
  details: PropTypes.object,
  optionalObjectWithShape: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    other_name: PropTypes.string,
    rfc3966: PropTypes.string,
    email: PropTypes.string,
    country: PropTypes.string,
  }),
};
