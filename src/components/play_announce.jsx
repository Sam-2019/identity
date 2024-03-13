import play from "../assets/images/play.png";

function PlayAnnounce() {
  return (
    <div className="fixed bottom-0 left-0 right-0 pb-5 flex justify-center">
      <div className="flex justify-center items-center p-3 font-semibold text-white text-center bg-gray-900 ring-1 ring-inset ring-gray-900 rounded-full gap-x-1.5">
        <img className="h-6 object-cover" src={play} alt="image" />
        <p className="text-sm" >Coming soon</p>
      </div>
    </div>
  );
}

export default PlayAnnounce;
