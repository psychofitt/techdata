import React, { useState, ReactNode } from 'react';

interface ItemProps {
  title: string;
  children: ReactNode;
}

const Item: React.FC<ItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  return (
    <div className="px-4 py-32"   style={{
      backgroundImage: 'url(/images/creatives/bg.jpg)',
      backgroundSize: 'cover', // Adjust this based on your needs (e.g., 'contain', 'auto')
      backgroundPosition: 'center', // Adjust this based on your needs (e.g., 'top', 'bottom')
      backgroundRepeat: 'no-repeat' // Adjust this based on your needs (e.g., 'repeat')
    }}>
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl bg-white py-8 px-8 rounded-md">
        <div className="flex flex-col mb-16 sm:text-center">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
              
              </span>
           Frequantly Asks Questions
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Whether you are looking for information about our products, services, policies, or troubleshooting tips, this section aims to address your concerns efficiently. 
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <Item title="What IT solutions does TECHDATA COMPUTING offer?">
            At TECHDATA COMPUTING, we provide a wide range of IT solutions including network infrastructure setup, cloud computing services, cybersecurity solutions, and IT consulting services tailored to meet the unique needs of businesses of all sizes.
          </Item>
          <Item title="What types of hardware does TECHDATA COMPUTING provide?">
            We offer high-quality hardware such as servers, workstations, laptops, networking equipment, and peripherals from leading manufacturers to ensure your business has the reliable and robust tools it needs.
          </Item>
          <Item title="How can TECHDATA COMPUTING support my business's IT infrastructure?">
            Our team of experts can assist with the design, implementation, and management of your IT infrastructure. We provide ongoing support and maintenance to ensure your systems are always up-to-date and functioning optimally.
          </Item>
          <Item title="Can TECHDATA COMPUTING help with cybersecurity?">
            Yes, we provide comprehensive cybersecurity solutions including threat assessments, implementation of security protocols, and continuous monitoring to protect your business from cyber threats and ensure data integrity.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Faq;
