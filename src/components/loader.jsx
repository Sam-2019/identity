import { Menu } from "@headlessui/react";
import {
 EllipsisVerticalIcon,
 PhoneIcon,
 EnvelopeIcon,
} from "@heroicons/react/20/solid";

function Loader() {
 return (
  <div className="pt-5 sm:pt-5 rounded-md animate-pulse">
   <div className="bg-white shadow-xl rounded-lg">
    <div className="relative h-40 sm:h-56 rounded-t-lg bg-gradient-to-r from-cyan-500 to-blue-500" />
    <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
     <div className="sm:flex-1">
      <div>
       <div className="flex text-sm text-gray-900 w-24 h-2 bg-slate-700 rounded "></div>
       <div className="mt-2 text-sm text-gray-900 w-24 h-2 bg-slate-700 rounded "></div>
      </div>
      <div className="-mt-px flex divide-x divide-gray-200"></div>
      <div className="mt-5 flex flex-wrap space-x-2 sm:space-x-3 sm:space-y-0">
       <a
        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 border border-transparent text-gray-900 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
            "
       >
        <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        Call
       </a>

       <a
        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 border border-transparent text-sm rounded-md bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
            "
       >
        <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        Email
       </a>

       <div className="ml-3 inline-flex sm:ml-0">
        <Menu as="div" className="relative inline-block text-left">
         <Menu.Button className="inline-mt-2 rounded-md bg-white p-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <span className="sr-only">Open options menu</span>
          <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
         </Menu.Button>
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
       <dd className="text-sm text-gray-900 h-2 bg-slate-700 rounded "></dd>
      </div>
      <div>
       <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
        Location
       </dt>
       <dd className="text-sm text-gray-900 w-24 h-2 bg-slate-700 rounded "></dd>
      </div>
      <div>
       <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
        Website
       </dt>
       <dd className="text-sm text-gray-900 w-24 h-2 bg-slate-700 rounded "></dd>
      </div>
      <div>
       <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
        Birthday
       </dt>
       <dd className="text-sm text-gray-900 w-24 h-2 bg-slate-700 rounded "></dd>
      </div>
     </dl>
    </div>
   </div>
  </div>
 );
}

export default Loader;
