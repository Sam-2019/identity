import Details from "./details";
import Skeleton from "./skeleton";

// eslint-disable-next-line react/prop-types
function Profile({ data }) {
 if (!data) {
  return <Skeleton />;
 }

 return <Details data={data} />;
}

export default Profile;
