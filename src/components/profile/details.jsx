import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

function Details({ details }) {
 return (
  <div className="pt-5 sm:pt-5 rounded-md">
   <div className="bg-white shadow-xl rounded-lg bg-white shadow">
    <div className="relative h-40 sm:h-56">
     <img
      className="absolute h-full w-full object-cover rounded-t-lg"
      src={details.image}
      alt="image"
     />
    </div>
    <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
     <div className="sm:flex-1">
      <div>
       <div className="flex items-center">
        <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
         {details.name}
        </h3>
       </div>
       <p className="text-sm text-gray-500">{details.other_name}</p>
      </div>
      <div className="-mt-px flex divide-x divide-gray-200"></div>
      <div className="mt-5 flex flex-wrap space-x-2 sm:space-x-3 sm:space-y-0">
       <a
        href={details.rfc3966}
        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 border border-transparent text-sm font-semibold text-gray-900
            inline-flex w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
            "
       >
        <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        Call
       </a>

       <a
        href={`mailto: ${details.email}`}
        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 border border-transparent text-sm font-semibold text-gray-900
            inline-flex w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
            "
       >
        <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        Email
       </a>
      </div>
     </div>
    </div>

    <div className="px-2 py-5 sm:px-2">
     <dl className="space-y-5 px-4 sm:space-y-5">
      {/* <div>
       <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
        Bio
       </dt>
       <dd className="text-sm text-gray-900 sm:col-span-2">
        <p>{people.bio}</p>
       </dd>
      </div> */}
      <div>
       <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
        Location
       </dt>
       <dd className="text-sm text-gray-900 sm:col-span-2">
        {details.country}
       </dd>
      </div>
      {/* <div>
       <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
        Website
       </dt>
       <dd className="text-sm text-gray-900 sm:col-span-2">{people.website}</dd>
      </div> */}
      {/* <div>
       <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
        Birthday
       </dt>
       <dd className="text-sm text-gray-900 sm:col-span-2">
        <time dateTime={people.dob2}>{people.dob}</time>
       </dd>
      </div> */}
     </dl>
    </div>
   </div>
  </div>
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
