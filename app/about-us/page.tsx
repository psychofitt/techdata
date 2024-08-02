'use client';

import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import About from "../components/about";
import Image from "next/image"
import CTA from "../components/cta"
import Slides from '../components/slidepartner';


import TawkToScript from "../components/chatbot"
import  '@/app/main.css'

import { DevicePhoneMobileIcon, LockClosedIcon, FingerPrintIcon, ArrowPathIcon, ServerStackIcon, ArchiveBoxIcon, LinkIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Routers',
    description:
      'High-performance routers to ensure reliable and fast connectivity for your business needs.',
    icon: DevicePhoneMobileIcon, // Choose the most suitable icon for Routers
  },
  {
    name: 'Network Switches',
    description:
      'Advanced network switches that offer scalability, efficiency, and security for your network infrastructure.',
    icon: ServerStackIcon, // Use ServerStackIcon for Network Switches
  },
  {
    name: 'Security Firewalls',
    description:
      'Robust firewalls to protect your network from threats and ensure compliance with security standards.',
    icon: LockClosedIcon,
  },
  {
    name: 'Wireless Access Points',
    description:
      'Reliable and secure wireless access points that provide seamless connectivity throughout your facility.',
    icon: ArrowPathIcon, // Use ArrowPathIcon for Wireless Access Points
  },
  {
    name: 'IP Phones',
    description:
      'State-of-the-art IP phones that offer crystal-clear voice communication over your IP network.',
    icon: DevicePhoneMobileIcon, // Use DevicePhoneMobileIcon or another suitable icon
  },
  {
    name: 'Tape Library',
    description:
      'Efficient tape library solutions for reliable long-term data storage and backup.',
    icon: ArchiveBoxIcon,
  },
  {
    name: 'Cables and Peripherals',
    description:
      'A wide range of cables and peripherals to connect and enhance your network setup.',
    icon: LinkIcon, // Use LinkIcon for Cables and Peripherals
  },
  {
    name: 'Accessories',
    description:
      'Essential accessories to support and expand your network infrastructure.',
    icon: Cog8ToothIcon,
  },
];

  

const AboutPage = () => {
return(
<div>
 
    <Header/>
    <div className="image-container">
<Image className="custom-image" src="/images/creatives/network.jpg" width={1920} height={300} alt="rouer-banner-image" unoptimized />
<div className="centered-text">About Us</div>
</div>
<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base font-semibold leading-7 text-indigo-600">TechData Computing</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Your Trusted Technology Partner
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        At TechData Computing, we provide cutting-edge technology solutions tailored to meet your business needs. From advanced networking products to enterprise security, our goal is to help you succeed in a rapidly evolving digital landscape.
      </p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              {feature.name}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
</div>

    <About/>
    <CTA/>
    <Slides/>
    <TawkToScript />
    <Footer/>
   
</div>
);
};

export default AboutPage;





