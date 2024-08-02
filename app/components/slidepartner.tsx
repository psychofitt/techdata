import React from 'react';
import Image from 'next/image';

interface SlidePartnerItem {
  id: number;
  logo: string;
  companyName: string;
  description: string;
}

const slidePartnerItems: SlidePartnerItem[] = [
  {
    id: 1,
    logo: '/images/logos/Aruba-Logo.png',
    companyName: 'Aruba',
    description: 'Aruba, a company owned by Hewlett Packard Enterprise, offers modern network access solutions for businesses that rely on mobile technology.',
  },
  {
    id: 2,
    logo: '/images/logos/D-Link.png',
    companyName: 'D-Link',
    description: 'D-Link is a specialized manufacturer of networking solutions for use in the home and workplace, including routers and modems.',
  },
  {
    id: 3,
    logo: '/images/logos/MikroTik-logo.png',
    companyName: 'MikroTik',
    description: 'Netmatriks has been a preferred partner of MikroTik for many years, serving customers throughout America. In addition to MikroTik, Netmatriks.',
  },
  {
    id: 4,
    logo: '/images/logos/Polycom-Logo.png',
    companyName: 'Polycom',
    description: 'Polycom offers diverse unified communications that enable meaningful human connection and collaboration by combining audio expertise with powerful video.',
  },
  {
    id: 5,
    logo: '/images/logos/Quantum.png',
    companyName: 'Quantum',
    description: 'Quantum Range of products offers multiple hardware and software storage solutions for both consumer and enterprise customers.',
  },
  {
    id: 6,
    logo: '/images/logos/Ubiquiti.png',
    companyName: 'Ubiquiti',
    description: 'Ubiquiti product range is extensive and includes popular enterprise Wi-Fi Access Points, routers, and switches that are all managed via.',
  },
  {
    id: 7,
    logo: '/images/logos/Quantum.png',
    companyName: 'Quantum',
    description: 'Quantum Range of products offers multiple hardware and software storage solutions for both consumer and enterprise customers.',
  },
  {
    id: 8,
    logo: '/images/logos/VEEAM-LOGO.png',
    companyName: 'VEEAM',
    description: 'Veeam® is the market leader in delivering Modern Data Protection solutions for backup, recovery, and data management. Founded in 2006.',
  },
  // Add more items as needed
];

const Slides: React.FC = () => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
        {slidePartnerItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center mx-4 bg-white rounded-lg shadow-md p-4 w-80">
            <Image src={item.logo} alt={`${item.companyName} Logo`} width={200} height={250} className="h-20 mb-4" />
         
          </div>
        ))}
      </div>

      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center">
        {slidePartnerItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center mx-4 bg-white rounded-lg shadow-md p-4 w-80">
            <Image src={item.logo} alt={`${item.companyName} Logo`} width={200} height={250} className="h-20 mb-4" />
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slides;
