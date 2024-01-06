/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { email_validator } from "../../utils";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

export const Details = ({ children }) => {
  return (
    <div className="pt-5 sm:pt-5 rounded-md">
      <div className="bg-white rounded-lg shadow">{children}</div>
    </div>
  );
};

const Image = ({ children }) => {
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

const Name = ({ children }) => {
  return (
    <div className="flex items-center">
      <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
        {children}
      </h3>
    </div>
  );
};

const OtherName = ({ children }) => {
  return <p className="text-sm text-gray-500">{children}</p>;
};

const Phone = ({ children }) => {
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

const Email = ({ children }) => {
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

const Country = ({ children }) => {
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

Details.Image = Image;
Details.Name = Name;
Details.OtherName = OtherName;
Details.Phone = Phone;
Details.Email = Email;
Details.Country = Country;

Details.propTypes = {
  children: PropTypes.any,
};

Details.Image.propTypes = {
  children: PropTypes.any,
};

Details.Name.propTypes = {
  children: PropTypes.any,
};

Details.OtherName.propTypes = {
  children: PropTypes.any,
};

Details.Phone.propTypes = {
  children: PropTypes.any,
};

Details.Email.propTypes = {
  children: PropTypes.any,
};

Details.Country.propTypes = {
  children: PropTypes.any,
};
