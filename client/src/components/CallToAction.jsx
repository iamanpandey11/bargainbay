import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 py-8">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between rounded-lg shadow-lg overflow-hidden">
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Want to see the latest trending phone?
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            Check out the amazing features of the latest smartphone.
          </p>
          <Button gradientDuoTone="purpleToPink" className="w-full">
            <a
              href="https://www.samsung.com/in/smartphones/galaxy-s24-ultra"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              S24 Ultra
            </a>
          </Button>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/1536x920.jpg?imbypass=true"
            alt="Samsung Galaxy S24 Ultra"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
