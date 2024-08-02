import Image from 'next/image';

export default function Feature  () {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full  md:px-24 lg:px-8 lg:py-34 bg-white py-24 sm:py-32">
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-xl lg:pr-16 mx-auto mb-10">
            <h5 className="mb-6 text-3xl font-extrabold leading-none">
              Why Choose Us?
            </h5>
            <Image src="/images/creatives/why.gif"  width={600}
            height={600} alt="wires" unoptimized />
            <div className="flex items-center">
            
             
            </div>
          </div>
          <div className="grid gap-4 row-gap-4 sm:grid-cols-2">
            <div className="max-w-[288px]">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
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
              <h6 className="mb-2 font-semibold leading-5">Expertise</h6>
              <p className="text-sm text-gray-700">
              With years of experience in the industry, our team has the knowledge and skills to deliver IT solutions that work.
              </p>
            </div>
            <div className="max-w-[288px]">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
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
              <h6 className="mb-2 font-semibold leading-5">Reliability</h6>
              <p className="text-sm text-gray-700">
              We are partner with leading hardware and software manufacturers to ensure that our customers receive products that are dependable and built to last.
              </p>
            </div>
            <div className="max-w-[288px]">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
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
              <h6 className="mb-2 font-semibold leading-5">Customer Satisfaction</h6>
              <p className="text-sm text-gray-700">
              Our commitment to customer satisfaction is paramount. We strive to build long-term relationships with our clients by providing exceptional service and support.
              </p>
            </div>
            <div className="max-w-[288px]">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
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
              <h6 className="mb-2 font-semibold leading-5">Competitive Pricing</h6>
              <p className="text-sm text-gray-700">
              We offer competitive pricing on all our products and services, ensuring that you get the best value for your investment.

              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };