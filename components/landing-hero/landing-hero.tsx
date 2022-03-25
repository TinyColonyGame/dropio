import React from "react";
import { useGlobalState } from "../../context";
import { Button } from "../button";
import { RestoreDropForm } from "./restore-drop-form";

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
                <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
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
                <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
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
                <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
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
                <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
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
