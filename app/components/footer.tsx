import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto">
      <div className="hidden mx-auto px-4 md:grid grid-cols-2 gap-8">
        <div className="flex flex-col items-start">
          <div className="w-20">
            <img
              src="/images/logo-footer.png"
              alt="Logo"
              width={50}
              height={100}
            />
          </div>
          <p className="text-lg font-normal leading-7 text-left text-gray-400 my-2">
            Valletta Buildings, South Street, <br />
            Valletta - VLT 1103 Malta
          </p>
          <div className="flex space-x-3 py-4">
            <a href="#" aria-label="Twitter">
              <img
                src="/images/twitter-icon.png"
                alt="Logo"
                width={30}
                height={30}
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                src="/images/youtube-icon.png"
                alt="Logo"
                width={30}
                height={30}
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="/images/linkedin-icon.png"
                alt="Logo"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>

        <div className="flex ml-auto space-x-5 md:grid md:grid-cols-4 gap-4">
          <div className="ml-auto flex flex-col items-start">
            <h5 className="font-semibold mb-2">WEB MAP</h5>
            <ul>
              {[
                "Home",
                "Games ",
                "News",
                "Math",
                "Company",
                "Events",
                "Partners",
              ].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} legacyBehavior>
                    <a className="leading-6 text-gray-400 hover:text-gray-900">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-auto flex flex-col items-start">
            <h5 className="font-semibold mb-2">ABOUT US</h5>
            <ul>
              {[
                "Licensing",
                "Certification",
                "Responsible Gaming",
                "Exhibitions",
                "Copyright Protection",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    legacyBehavior
                  >
                    <a className="leading-6 text-gray-400 hover:text-gray-900">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-auto flex flex-col items-start">
            <h5 className="font-semibold mb-2">EVENTS</h5>
            <ul>
              {["PG ICE 2017", "PG ICE 2018", "PG ICE 2019", "About ICE"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      legacyBehavior
                    >
                      <a className="leading-6 text-gray-400 hover:text-gray-900">
                        {item}
                      </a>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="ml-auto flex flex-col items-start">
            <h5 className="font-semibold mb-2">OUR PARTNERS</h5>
            <ul>
              {["Relax Gaming", "Leander Games"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    legacyBehavior
                  >
                    <a className="leading-6 text-gray-400 hover:text-gray-900">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden mx-auto my-10 pt-6 md:flex flex-col md:flex-row justify-between border-t border-gray-200">
        <p className="text-xs font-normal md:text-left text-gray-400">
          COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
        </p>
      </div>

      <div className="md:hidden m-4">
        <div className="flex justify-between border-b pb-8">
          <h3>WEB MAP</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <div className="flex justify-between border-b py-8">
          <h3>ABOUT US</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <div className="flex justify-between border-b py-8">
          <h3>EVENTS</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <div className="flex justify-between border-b py-8">
          <h3>OUR PARTNERS</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <div className="py-8 text-gray-400">
          <p>Valletta Buildings, South Street, Valletta - VLT 1103 Malta</p>
          <p className="py-4">COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-3 py-4">
            <a href="#" aria-label="Twitter">
              <img
                src="/images/twitter-icon.png"
                alt="Logo"
                width={30}
                height={30}
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                src="/images/youtube-icon.png"
                alt="Logo"
                width={30}
                height={30}
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="/images/linkedin-icon.png"
                alt="Logo"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
