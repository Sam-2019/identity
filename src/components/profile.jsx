import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
 EllipsisVerticalIcon,
 PhoneIcon,
 EnvelopeIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes) {
 return classes.filter(Boolean).join(" ");
}

const people = {
 name: "Ashley Porter",
 handle: "@ashleyporter",
 dob: "June 23, 1988",
 dob2: "1988-06-23",
 title: "Paradigm Representative",
 role: "Admin",
 email: "janecooper@example.com",
 telephone: "+1-202-555-0170",
 location: "New York, NY, USA",
 website: "ashleyporter.com",
 imageUrl:
  "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80",
 bio: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu.",
};

function Profile() {
 return (
  <div className="pt-5 sm:pt-5 rounded-md">
   <div className="bg-white shadow-xl rounded-lg bg-white shadow">

     <div className="relative h-40 sm:h-56">
      <img
       className="absolute h-full w-full object-cover rounded-t-lg"
       src={people.imageUrl}
       alt=""
      />
     </div>
     <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
      <div className="sm:flex-1">
       <div>
        <div className="flex items-center">
         <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
          {people.name}
         </h3>
        </div>
        <p className="text-sm text-gray-500">{people.handle}</p>
       </div>
       <div className="-mt-px flex divide-x divide-gray-200"></div>
       <div className="mt-5 flex flex-wrap space-x-2 sm:space-x-3 sm:space-y-0">
        <a
         href={people.telephone}
         className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 border border-transparent text-sm font-semibold text-gray-900
            inline-flex w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
            "
        >
         <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
         Call
        </a>

        <a
         href={people.email}
         className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 border border-transparent text-sm font-semibold text-gray-900
            inline-flex w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
            "
        >
         <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
         Email
        </a>

        <div className="ml-3 inline-flex sm:ml-0">
         <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center rounded-md bg-white p-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
           <span className="sr-only">Open options menu</span>
           <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
          <Transition
           as={Fragment}
           enter="transition ease-out duration-100"
           enterFrom="transform opacity-0 scale-95"
           enterTo="transform opacity-100 scale-100"
           leave="transition ease-in duration-75"
           leaveFrom="transform opacity-100 scale-100"
           leaveTo="transform opacity-0 scale-95"
          >
           <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
             <Menu.Item>
              {({ active }) => (
               <a
                href="#"
                className={classNames(
                 active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                 "block px-4 py-2 text-sm"
                )}
               >
                View profile
               </a>
              )}
             </Menu.Item>
             <Menu.Item>
              {({ active }) => (
               <a
                href="#"
                className={classNames(
                 active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                 "block px-4 py-2 text-sm"
                )}
               >
                Copy profile link
               </a>
              )}
             </Menu.Item>
            </div>
           </Menu.Items>
          </Transition>
         </Menu>
        </div>
       </div>
      </div>
     </div>

    <div className="px-2 py-5 sm:px-2">
     <dl className="space-y-5 px-4 sm:space-y-5">
      <div>
       <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
        Bio
       </dt>
       <dd className="text-sm text-gray-900 sm:col-span-2">
        <p>{people.bio}</p>
       </dd>
      </div>
      <div>
       <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
        Location
       </dt>
       <dd className="text-sm text-gray-900 sm:col-span-2">
        {people.location}
       </dd>
      </div>
      <div>
       <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
        Website
       </dt>
       <dd className="text-sm text-gray-900 sm:col-span-2">
        {people.website}
       </dd>
      </div>
      <div>
       <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
        Birthday
       </dt>
       <dd className="text-sm text-gray-900 sm:col-span-2">
        <time dateTime={people.dob2}>{people.dob}</time>
       </dd>
      </div>
     </dl>
    </div>
   </div>
  </div>
 );
}

export default Profile;
