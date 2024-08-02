import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';

export default function Services() {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20 bg-gray-900">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-4">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            Secure and Seamless Connectivity for Enhanced Productivity
          </h2>
          <p className="text-base text-white md:text-lg">
           
EXPLORE OUR RANGE OF PRODUCTS
          </p>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/router" passHref>
       
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <Image src="/images/icons/1.png" alt="routers" width={100} height={100} />
              
            </div>
            <h6 className="mb-2 font-semibold leading-5">Routers</h6>
            <p className="text-sm text-gray-900">
            Devices that direct data packets between different networks, enabling internet and network connectivity for multiple devices.
            </p>
            <div className="mt-4 flex items-center  text-indigo-600 hover:text-indigo-800">
              <span className="text-sm font-semibold">Read More</span>
              <ArrowRightCircleIcon className="w-4 h-4 ml-2" />
            </div>
          </div>
         
         
          
          
        
      
          </Link>


          <Link href="/network-switches" passHref>
          
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <Image src="/images/icons/2.png" alt="routers" width={100} height={100} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Network Switches</h6>
            <p className="text-sm text-gray-900">
            Hardware that connects multiple devices within a local area network (LAN), allowing them to communicate and share resources efficiently.
            </p>
            <div className="mt-4 flex items-center  text-indigo-600 hover:text-indigo-800">
              <span className="text-sm font-semibold">Read More</span>
              <ArrowRightCircleIcon className="w-4 h-4 ml-2" />
            </div>
          </div>


          </Link>

          <Link href="/wireless-access-points" passHref>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <Image src="/images/icons/3.png" alt="routers" width={100} height={100} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Wireless Access Points</h6>
            <p className="text-sm text-gray-900">
            Devices that provide Wi-Fi connectivity to wireless devices, extending the reach of a wired network.
            </p>
            <div className="mt-4 flex items-center  text-indigo-600 hover:text-indigo-800">
              <span className="text-sm font-semibold">Read More</span>
              <ArrowRightCircleIcon className="w-4 h-4 ml-2" />
            </div>
          </div>
          </Link>

          <Link href="/security-firewall" passHref>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <Image src="/images/icons/4.png" alt="routers" width={100} height={100} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Security Firewalls</h6>
            <p className="text-sm text-gray-900">
            Systems designed to protect networks from unauthorized access and cyber threats by monitoring and controlling incoming and outgoing network traffic.
            </p>
            <div className="mt-4 flex items-center  text-indigo-600 hover:text-indigo-800">
              <span className="text-sm font-semibold">Read More</span>
              <ArrowRightCircleIcon className="w-4 h-4 ml-2" />
            </div>
          </div>
          </Link>

          <Link href="/cables-peripherals-devices" passHref>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <Image src="/images/icons/5.png" alt="routers" width={100} height={100} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Cables and Peripherals</h6>
            <p className="text-sm text-gray-900">
            Essential components like Ethernet cables and accessories that support network connectivity and the integration of various devices.
            </p>
            <div className="mt-4 flex items-center  text-indigo-600 hover:text-indigo-800">
              <span className="text-sm font-semibold">Read More</span>
              <ArrowRightCircleIcon className="w-4 h-4 ml-2" />
            </div>
          </div>
          </Link>
          
          <Link href="/ip-phones" passHref>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <Image src="/images/icons/6.png" alt="routers" width={100} height={100} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">IP Phones</h6>
            <p className="text-sm text-gray-900">
            Telecommunication devices that use Internet Protocol to transmit voice over a network, offering advanced features and seamless communication.
            </p>
            <div className="mt-4 flex items-center  text-indigo-600 hover:text-indigo-800">
              <span className="text-sm font-semibold">Read More</span>
              <ArrowRightCircleIcon className="w-4 h-4 ml-2" />
            </div>
          </div>
          </Link>
          
          <Link href="/tape-library" passHref>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <Image src="/images/icons/7.png" alt="routers" width={100} height={100} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Tape Library</h6>
            <p className="text-sm text-gray-900">
            A storage device that houses multiple tape drives and cartridges, used for backing up and archiving large volumes of data securely and efficiently.
            </p>
            <div className="mt-4 flex items-center  text-indigo-600 hover:text-indigo-800">
              <span className="text-sm font-semibold">Read More</span>
              <ArrowRightCircleIcon className="w-4 h-4 ml-2" />
            </div>
          </div>
          </Link>

          <Link href="/accessories" passHref>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <Image src="/images/icons/8.png" alt="routers" width={100} height={100} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Accessories</h6>
            <p className="text-sm text-gray-900">
            Supplemental components and gadgets that enhance the functionality and usability of primary devices, such as mounting brackets, power adapters, and protective cases.
            </p>
            <div className="mt-4 flex items-center  text-indigo-600 hover:text-indigo-800">
              <span className="text-sm font-semibold">Read More</span>
              <ArrowRightCircleIcon className="w-4 h-4 ml-2" />
            </div>
          </div>
          </Link>
        </div>
        <div className="text-center">
          <a
            href="/about-us"
            className="inline-flex items-center justify-center  h-12 px-6 rounded-md bg-indigo-600  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Learn more
          </a>
        </div>
      </div>
    )
  }