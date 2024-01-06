import PropTypes from "prop-types";
import { Details } from "./compositions";

function Profile({ detail }) {
  return (
    <Details>
      <Details.Image>{detail.image}</Details.Image>
      <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
        <div className="sm:flex-1">
          <div>
            <Details.Name>{detail.name}</Details.Name>
            <Details.OtherName>{detail.other_name}</Details.OtherName>
          </div>
          <div className="-mt-px flex divide-x divide-gray-200"></div>
          <div className="mt-5 flex flex-wrap space-x-2 sm:space-x-3 sm:space-y-0">
            <Details.Phone>{detail.phone}</Details.Phone>
            <Details.Email>{detail.email}</Details.Email>
          </div>
        </div>
      </div>
      <Details.Country>{detail.country}</Details.Country>
    </Details>
  );
}

export default Profile;

Profile.propTypes = {
  detail: PropTypes.object,
  optionalObjectWithShape: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    other_name: PropTypes.string,
    rfc3966: PropTypes.string,
    email: PropTypes.string,
    country: PropTypes.string,
  }),
};
