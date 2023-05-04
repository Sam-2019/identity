import { InboxIcon } from "@heroicons/react/24/solid";

function Empty() {
 return (
  <div className="col-span-full">
   <div className="mt-2 flex justify-center rounded-lg bg-white border border border-gray-900/25 px-6 py-10">
    <div className="text-center">
     <InboxIcon
      className="mx-auto h-12 w-12 text-gray-300"
      aria-hidden="true"
     />
     <div className="mt-2 text-sm leading-6 text-gray-600">
      <p className="relative cursor-default rounded-md bg-white font-semibold text-gray-500">
       No data
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Empty;
