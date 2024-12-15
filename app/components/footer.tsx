




export default function Footer() {
    return (

        <div className="bg-gray-900">
          
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8 row-gap-8 lg:col-span-4 md:grid-cols-12">
              <div>
                <p className="font-medium tracking-wide text-gray-300">
                  Quick Links
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
             
              <div>
                <p className="font-medium tracking-wide text-gray-300">Products</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/router"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Routers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/network-switches"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Network Switches
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wireless-access-points"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Wireless Access Points
                    </a>
                  </li>
                  <li>
                    <a
                      href="/security-firewall"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Security Firewalls
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tape-library"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Tape Library
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ip-phones"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      IP Phones
                    </a>
                  </li>
                  <li>
                    <a
                      href="/accessories"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                    Accessories
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cables-peripherals-devices"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                    Cables and Peripherals
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium tracking-wide text-gray-300">
                  Brands
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Aruba
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      D-Link
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Mikrotik
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Ubiquiti
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Quantum
                    </a>
                  </li>

                  
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Polycom
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      VEEAM
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:max-w-md lg:col-span-2">
              <span className="text-base font-medium tracking-wide text-gray-300">
                Subscribe for updates
              </span>
              <form className="flex flex-col mt-4 md:flex-row">
                <input
                  placeholder="Email"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
               Keep In touch for more updates
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
            <p className="text-sm text-gray-500">
              © Copyright 2024 Techdata Computing. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
               <a
                      href="https://theoneinventor.in/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                    Designed And Developed By Theoneinventor
                    </a>
              
            </div>
          </div>
        </div>
      </div>
)
}
