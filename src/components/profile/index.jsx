import PropTypes from "prop-types";
import { email_validator } from "../../utils";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

export const Profile = ({ children }) => {
  return (
    <div className="pt-5 sm:pt-5 rounded-md">
      <div className="bg-white rounded-lg shadow">{children}</div>
    </div>
  );
};

Profile.Image = function Image({ children }) {
  return (
    <div className="relative h-40 sm:h-56">
      <img
        className="absolute h-full w-full object-cover rounded-t-lg"
        src={children}
        alt="image"
      />
    </div>
  );
};

Profile.Name = function Name({ children }) {
  return (
    <div className="flex items-center">
      <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
        {children}
      </h3>
    </div>
  );
};

Profile.OtherName = function OtherName({ children }) {
  return <p className="text-sm text-gray-500">{children}</p>;
};

Profile.Phone = function Phone({ children }) {
  return (
    <a
      href={children}
      className="relative w-0 flex-1 items-center justify-center gap-x-3 border border-transparent
      inline-flex rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
      "
    >
      <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      Call
    </a>
  );
};

Profile.Email = function Email({ children }) {
  return (
    <>
      {email_validator(children) ? (
        <a
          href={`mailto: ${children}`}
          className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 border border-transparent text-sm font-semibold text-gray-900 rounded-md bg-white px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
        "
        >
          <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          Email
        </a>
      ) : null}
    </>
  );
};

Profile.Country = function Country({ children }) {
  return (
    <div className="px-2 py-5 sm:px-2">
      <dl className="space-y-5 px-4 sm:space-y-5">
        <div>
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
            Location
          </dt>
          <dd className="text-sm text-gray-900 sm:col-span-2">{children}</dd>
        </div>
      </dl>
    </div>
  );
};

Profile.propTypes = {
  children: PropTypes.any,
};

Profile.Image.propTypes = {
  children: PropTypes.any,
};

Profile.Name.propTypes = {
  children: PropTypes.any,
};

Profile.OtherName.propTypes = {
  children: PropTypes.any,
};

Profile.Phone.propTypes = {
  children: PropTypes.any,
};

Profile.Email.propTypes = {
  children: PropTypes.any,
};

Profile.Country.propTypes = {
  children: PropTypes.any,
};
