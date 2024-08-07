export default function AboutPage() {
  return (
    <div className="flex flex-col items-center mt-24 px-4">
      <h2 className="text-3xl font-bold mb-8">About Us</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center max-w-xs">
          <img
            src="https://ca.slack-edge.com/T01BAR6KJP4-U078ZD3DV0R-47d60a6bafa1-72"
            alt="Dmytro Profile Pic"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Dmytro Labenskyy</h2>
          <p className="text-gray-600 text-center"></p>
          <a href="https://github.com/D-labz">GitHub</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center max-w-xs">
          <img
            src="https://ca.slack-edge.com/T01BAR6KJP4-U078HRW0S77-816ad98a1ae5-192"
            alt="Sebastião Profile Pic"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Sebastião Cerqueira</h2>
          <p className="text-gray-600 text-center"></p>
          <a href="https://github.com/smammc">GitHub</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center max-w-xs">
          <img
            src="https://ca.slack-edge.com/T01BAR6KJP4-U078E4D0LNS-3a5d983ff9d6-192"
            alt="David Profile Pic"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">David Mitreiro</h2>
          <p className="text-gray-600 text-center"></p>
          <a href="https://github.com/davemitreiro/">GitHub</a>
        </div>
      </div>
      <div className="mt-12 text-center max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          Information about the project
        </h2>
        <p className="text-gray-600">
          AirDnD is a growing platform for the best host's in the world. It
          offers them unique ways to costumize the way they display their rental
          properties! Soon it will be available to the user's and it will allow
          interaction between user and admins.
        </p>
      </div>
    </div>
  );
}
