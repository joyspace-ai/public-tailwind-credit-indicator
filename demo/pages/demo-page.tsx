'use client';

import { CreditsDisplay } from "../components/credits-display";
import { CreditsIndicator } from "../../src/components/credit-indicator";

export default function DemoPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <h1 className="text-3xl font-bold">Credits Component Demo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CreditsDisplay />

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Different States</h2>

          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <CreditsIndicator credits={900} maxCredits={1000} />
              <span>High Credits (90%)</span>
            </div>

            <div className="flex items-center gap-4">
              <CreditsIndicator credits={450} maxCredits={1000} />
              <span>Medium Credits (45%)</span>
            </div>

            <div className="flex items-center gap-4">
              <CreditsIndicator credits={150} maxCredits={1000} />
              <span>Low Credits (15%)</span>
            </div>

            <div className="flex items-center gap-4">
              <CreditsIndicator credits={50} maxCredits={1000} />
              <span>Critical Credits (5%)</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-8">Different Sizes</h2>

          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <CreditsIndicator credits={750} maxCredits={1000} size="sm" />
              <span>Small</span>
            </div>

            <div className="flex items-center gap-4">
              <CreditsIndicator credits={750} maxCredits={1000} size="md" />
              <span>Medium</span>
            </div>

            <div className="flex items-center gap-4">
              <CreditsIndicator credits={750} maxCredits={1000} size="lg" />
              <span>Large</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-8">Light & Dark Mode</h2>

          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <CreditsIndicator credits={750} maxCredits={1000} />
              <span>Light Mode (Default)</span>
            </div>
            
            <div className="flex items-center gap-4 bg-gray-800 p-3 rounded-md text-white">
              <CreditsIndicator credits={750} maxCredits={1000} isDarkMode={true} />
              <span>Dark Mode</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 