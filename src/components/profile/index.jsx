import Details from "./details";
import Empty from "./empty";
import Skeleton from "./skeleton";

// eslint-disable-next-line react/prop-types
function Profile({ data, loading }) {
 if (loading) {
  return <Skeleton />;
 }

 if (!data) {
  return <Empty />;
 }

 return <Details data={data} />;
}

export default Profile;
