import Details from "./details";
import Empty from "./empty";
import Skeleton from "./skeleton";
import PropTypes from "prop-types";

function Profile({ details, loading }) {
  if (loading) {
    return <Skeleton />;
  }

  if (!details) {
    return <Empty />;
  }

  return <Details details={details} />;
}

export default Profile;

Profile.propTypes = {
  details: PropTypes.object,
  loading: PropTypes.bool,
};
