import PropTypes from "prop-types";
import { Details } from "./compositions";

const link = "#";

function Profile({ details }) {
  return (
    <Details>
      <Details.Image>{details?.image}</Details.Image>
      <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
        <div>
          <Details.Name>{details?.name}</Details.Name>
          <Details.OtherName>{details?.other_name}</Details.OtherName>
          <div className="mt-4 flex w-3/5 space-x-2 sm:space-x-3">
            <Details.Phone>{details?.e164Format}</Details.Phone>
            <Details.Email>{details?.email}</Details.Email>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-2 my-2 mx-4 md:mx-6">
      {details?.whatsapp && <Details.Whatsapp>{link}</Details.Whatsapp> }
      {details?.telegram && <Details.Telegram>{link}</Details.Telegram> }
      </div>
      {details?.country && <Details.Country>{details.country}</Details.Country>}
      {details?.carrier && <Details.Network>{details.carrier}</Details.Network>}
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
    whatsapp: PropTypes.bool,
    telegram: PropTypes.bool,
  }),
};
