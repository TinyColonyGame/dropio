import React from "react";
import { useGlobalState } from "../../context";
import { Button } from "../button";
import { RestoreDropForm } from "./restore-drop-form";
import Icon1svg from "./svg-selector/icon1";
import Icon2svg from "./svg-selector/icon2";
import Icon3svg from "./svg-selector/icon3";
import Icon4svg from "./svg-selector/icon4";

export const LandingHero = () => {
  const { createAccount } = useGlobalState();

  return (
    <>
      <div className="bg-white flex flex-1 items-center">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-2xl font-mono font-extrabold tracking-tight text-gray-900">
            <span className="block">AirDrop for Solana</span>
            <span className="block">Open Source, Secure, Free.</span>
          </h2>
          <div className="mt-8 justify-center">
            <div className="inline-flex">
              <Button onClick={createAccount}>
                <span className="px-4 py-1 text-xs">New Drop</span>
              </Button>
            </div>
            <div className="relative my-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white text-lg text-gray-400">OR</span>
              </div>
            </div>
            <div className="px-16">
              <RestoreDropForm />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-1 index-center">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl mx-auto text-center font-mono font-extrabold text-gray-900 tracking-tight">How does it work?</h2>
        <p className="mx-auto text-center py-2 px-4 sm:px-6 lg:px-8 mt-2 max-w-3xl text-lg text-gray-700">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus et magna sit morbi.</p>
        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 bg-opacity-10">
                <div className="h-6 w-6 text-gray-700">
                  <Icon1svg />
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
                  <Icon2svg />
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
                  <Icon3svg />
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
                  <Icon4svg />
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
  </>
  );
};
