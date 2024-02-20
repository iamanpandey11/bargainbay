import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to see the latest trending phone</h2>
        <p className="text-gray-500 my-2">
          checkout these cool features of the this smartphone
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.samsung.com/in/smartphones/galaxy-s24-ultra"
            target="_blank"
            rel="noopener noreferrer"
          >
            S24 Ultra
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/1536x920.jpg?imbypass=true" />
      </div>
    </div>
  );
}