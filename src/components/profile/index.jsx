import PropTypes from "prop-types";
import { Details } from "./compositions";

function Profile({ details }) {
  return (
    <Details>
      <Details.Image>{details.image}</Details.Image>
      <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
        <div className="sm:flex-1">
          <div>
            <Details.Name>{details.name}</Details.Name>
            <Details.OtherName>{details.other_name}</Details.OtherName>
          </div>
          <div className="-mt-px flex divide-x divide-gray-200"></div>
          <div className="mt-5 flex flex-wrap space-x-2 sm:space-x-3 sm:space-y-0">
            <Details.Phone>{details.phone}</Details.Phone>
            <Details.Email>{details.email}</Details.Email>
          </div>
        </div>
      </div>
      <Details.Country>{details.country}</Details.Country>
    </Details>
  );
}

export default Profile;

Profile.propTypes = {
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
