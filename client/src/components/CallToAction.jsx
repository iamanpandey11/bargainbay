import { Button } from "flowbite-react";

export default function CallToAction(props) {
  return (
    <div className="py-8 bg-blue-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between rounded-lg shadow-lg overflow-hidden">
        <div className="lg:w-1/2">
          <img
            src={props.photo}
            alt={props.alt}
            className="w-full  rounded-lg lg:rounded-l-lg lg:rounded-r-none"
          />
        </div>
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {props.heading}
          </h2>
          <p className="text-lg mb-6">{props.text}</p>
          <a
            href="https://www.samsung.com/in/smartphones/galaxy-s24-ultra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
}
