import React from "react"


const Main = () => {
  return (
    <div className="p-12 max-w-sm mx-auto bg-[#577DF3] rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-gray-500">You have a new message!</p>
      </div>
      <button className="bg-red-500 hover:bg-blue-700">
        Hover me
      </button>
    </div>
  )
}

export default Main 
