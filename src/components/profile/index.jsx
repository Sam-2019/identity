import { NO_DATA } from "../../utils";
import Details from "./details";
import Empty from "./empty";
import PropTypes from "prop-types";

function Profile({ details }) {
  if (details.message === NO_DATA) {
    return <Empty />;
  }

  return <Details details={details} />;
}

export default Profile;

Profile.propTypes = {
  details: PropTypes.object,
  loading: PropTypes.bool,
};
