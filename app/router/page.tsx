'use client'

import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import CTA from "../components/cta"
import TawkToScript from "../components/chatbot"
import Slides from '../components/slidepartner';



import  '@/app/main.css'

const products = [
    {
      id: 1,
      name: 'ISR4221-K9',
      href: '#',
      price: 'ISR4221-K9',
      imageSrc: '/images/routers/ISR4221-K9.jpeg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'ISR4321-AX/K9',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/ISR4321-AXK9.jpeg',
      imageAlt: 'ISR4321-AX/K9',
    },
    {
      id: 3,
      name: 'ISR4321-AX/K9',
      href: '#',
      price: '$89',
      imageSrc: '/images/routers/ISR4321-AXK9-1.jpeg',
      imageAlt: 'ISR4321-AX/K9',
    },
    {
      id: 4,
      name: 'ISR4321-VK9',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/ISR4321-VK9.jpeg',
      imageAlt: 'ISR4321-VK9',
    },

    {
      id: 5,
      name: 'ISR4321-VSEC/K9',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/ISR4321-VSECK9.jpeg',
      imageAlt: 'ISR4321-VSEC/K9',
    },

    {
      id: 6,
      name: 'ISR4321/K9',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/ISR4321K9.jpeg',
      imageAlt: 'ISR4321/K9',
    },

    {
      id: 7,
      name: 'ISR4331-AX/K9',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/ISR4331-AXK9.jpeg',
      imageAlt: 'ISR4331-AX/K9',
    },

    {
      id: 8,
      name: 'ISR4331-SEC/K9',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/ISR4331-SECK9.jpeg',
      imageAlt: 'ISR4331-SEC/K9',
    },

    {
      id: 9,
      name: 'ISR4331-V/K9',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/ISR4331-VK9.jpeg',
      imageAlt: 'ISR4331-V/K9',
    },

    {
      id: 10,
      name: 'ISR4351-SEC/K9',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/ISR4351-SECK9.jpeg',
      imageAlt: 'ISR4351-SEC/K9',
    },

    {
      id: 11,
      name: 'ISR4351/K9',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/ISR4351K9.jpeg',
      imageAlt: 'ISR4351/K9',
    },

    
    {
      id: 12,
      name: 'ISR4531/K9',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/ISR4531K9.jpeg',
      imageAlt: 'ISR4531/K9',
    },


    {
      id: 13,
      name: 'MR42-HW',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/MR42-HW.jpeg',
      imageAlt: 'MR42-HW',
    },

    {
      id: 14,
      name: 'MS120-24P-HW',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/MS120-24P-HW.jpeg',
      imageAlt: 'MS120-24P-HW',
    },


    {
      id: 15,
      name: 'MS220-48FP-HW',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/MS220-48FP-HW.jpeg',
      imageAlt: 'MS220-48FP-HW',
    },

    {
      id: 16,
      name: 'MS220-48LP-HW',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/MS220-48LP-HW.jpeg',
      imageAlt: 'MS220-48LP-HW',
    },

    {
      id: 17,
      name: 'MS225-48LP-HW',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/MS225-48LP-HW.jpeg',
      imageAlt: 'MS225-48LP-HW',
    },

    {
      id: 18,
      name: 'MX100-HW',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/MX100-HW.jpeg',
      imageAlt: 'MX100-HW',
    },

    {
      id: 19,
      name: 'MX64-HW',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/MX64-HW.jpeg',
      imageAlt: 'MX64-HW',
    },

    {
      id: 20,
      name: 'MX84-HW',
      href: '#',
      price: '$35',
      imageSrc: '/images/routers/MX84-HW.jpeg',
      imageAlt: 'MX84-HW',
    },


    // More products...
  ]
  
  export default function Router() {
    return (
       <>
            <Header />
        <div className="image-container">
<Image className="custom-image" src="/images/servicebanner/router.gif" width={1920} height={300} alt="rouer-banner-image" unoptimized />
<div className="centered-text">Routers</div>
</div>
      <div className="bg-white">
    
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-gray-900 text-2xl font-bold py-8">TechData Computing: Premier Router Distributors in India</h2>
          <p className="text-sm sm:text-lg mt-3 mb-3 leading-8 text-gray-600">
          At TechData Computing, we understand the critical role that routers play in modern networking. A router is a pivotal device that forwards data packets between computer networks, directing traffic on the Internet. Whether it's web pages, emails, or other data transmitted online, routers ensure these data packets reach their destination efficiently. Our extensive range of routing hardware caters to diverse needs, from high-end platforms for building IP-optimized backbones to Ethernet LANs and WANs for small businesses and branch offices. We also offer cost-effective solutions for routing data, voice, and video over HFC or fixed wireless networks.

              </p>
              <p className="text-sm sm:text-lg mt-3 mb-3 leading-8 text-gray-600">
              In the dynamic business landscape of today, a robust network is essential for organizations to achieve agility and efficiency. Connected devices are integral to delivering applications across geographic boundaries, necessitating a secure and intelligent infrastructure for continuous performance. As virtualization and cloud workloads increase between geographically separated data centers, maintaining smooth network operations becomes increasingly challenging.

              </p>
              <p className="text-sm sm:text-lg mt-3 mb-3 leading-8 text-gray-600">
              If you are interested in our networking and enterprise security products and solutions, please do not hesitate to contact us. Our team is ready to provide you with more information and answer any questions you may have.
              </p>
<div className="text-center text-2xl font-bold py-8">
              <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Request A Quote</button>
              </div>
            
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 rounded border border-indigo-600"
                  />
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900 text-center">{product.name}</h3>
              </a>
            ))}
          </div>
        </div>
       
      </div>
      <CTA/>
      <Slides/>
      <TawkToScript />
      <Footer/>
      </>
    )
  }
  