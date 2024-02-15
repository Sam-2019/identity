/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { email_validator } from "../../utils";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

export const Details = ({ children }) => {
  return (
    <div className="mt-5">
      <div className="bg-white rounded-lg shadow pb-5">{children}</div>
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

const Whatsapp = ({ children }) => {
  return (
    <a
      href={children}
      className="w-full md:w-12 items-center justify-center border border-transparent text-white inline-flex rounded-md bg-green-500 text-sm font-semibold shadow-sm hover:bg-green-400
  "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="WhatsApp"
        role="img"
        viewBox="0 0 512 512"
        width="48px"
      >
        <path
          fill="#25d366"
          stroke="#ffffff"
          strokeWidth="26"
          d="M123 393l14-65a138 138 0 1150 47z"
        />
        <path
          fill="#ffffff"
          d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
        />
      </svg>
      <span className="md:hidden">WhatsApp</span>
    </a>
  );
};

const Telegram = ({ children }) => {
  return (
    <a
      href={children}
      className="w-full md:w-12 items-center justify-center text-white inline-flex rounded-md bg-sky-500 text-sm font-semibold shadow-sm hover:bg-sky-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Telegram"
        role="img"
        viewBox="0 0 512 512"
        width="48px"
      >
        <path fill="#c8daea" d="M199 404c-11 0-10-4-13-14l-32-105 245-144" />
        <path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34" />
        <path
          fill="#f6fbfe"
          d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
        />
      </svg>
      <span className="md:hidden">Telegram</span>
    </a>
  );
};

const Country = ({ children }) => {
  return (
    <div className="px-2 sm:px-2">
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
Details.Whatsapp = Whatsapp;
Details.Telegram = Telegram;

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

Details.Whatsapp.propTypes = {
  children: PropTypes.any,
};

Details.Telegram.propTypes = {
  children: PropTypes.any,
};
