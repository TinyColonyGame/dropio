import React from "react";
import Icon1 from "./images/icon1.svg";
import Icon2 from "./images/icon2.svg";
import Icon3 from "./images/icon3.svg";
import Icon4 from "./images/icon4.svg";

export const HowItWorks = () => {
  return (
    <div className="bg-white flex flex-1 index-center">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl mx-auto text-center font-mono font-extrabold text-gray-900 tracking-tight">How it works?</h2>
        <p className="mx-auto text-center py-2 px-4 sm:px-6 lg:px-8 mt-2 max-w-3xl text-lg text-gray-700">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus et magna sit morbi.</p>
        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 bg-opacity-10">
                <div className="h-6 w-6 text-gray-700">
                  <Icon1 />
                </div>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-mono text-gray-700">ARBITRARY TEXT</h3>
              <p className="mt-2 text-base text-gray-700">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </div>
          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 bg-opacity-10">
                <div className="h-6 w-6 text-gray-700">
                  <Icon2 />
                </div>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-mono text-gray-700">ARBITRARY TEXT</h3>
              <p className="mt-2 text-base text-gray-700">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </div>
          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 bg-opacity-10">
                <div className="h-6 w-6 text-gray-700">
                  <Icon3 />
                </div>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-mono text-gray-700">ARBITRARY TEXT</h3>
              <p className="mt-2 text-base text-gray-700">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </div>
          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 bg-opacity-10">
                <div className="h-6 w-6 text-gray-700">
                  <Icon4 />
                </div>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-mono text-gray-700">ARBITRARY TEXT</h3>
              <p className="mt-2 text-base text-gray-700">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;