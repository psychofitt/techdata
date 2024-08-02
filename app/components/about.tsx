import Image from 'next/image';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


const features = [
  {
    name: 'Hardware Sales',
    description:
      'We offer a comprehensive range of hardware products, including servers, desktops, laptops, networking equipment, and peripherals. Our products come from trusted brands known for their reliability and performance.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Software Solutions',
    description: 'In addition to hardware, we provide a variety of software solutions tailored to enhance productivity, efficiency, and security within your organization. From operating systems to specialized business applications, we have got you covered.',
    icon: LockClosedIcon,
  },
  {
    name: 'IT Consultation',
    description: 'Need advice on how to optimize your IT environment? Our experienced consultants can assess your current setup, identify areas for improvement, and recommend solutions that align with your business goals and budget.',
    icon: ServerIcon,
  },
]

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 ">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to TECHDATA COMPUTING SERVICES LLP</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              At TECHDATA COMPUTING, we specialize in providing high-quality IT solutions and hardware for businesses of all sizes. Whether you're looking to upgrade your existing infrastructure or start from scratch, our team of experts is here to help you find the perfect solutions to meet your needs.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive services include network design, cloud integration, and cybersecurity, ensuring your business stays ahead in the digital landscape. Partner with TECHDATA COMPUTING for innovative, reliable, and scalable IT solutions tailored to drive your success.
              </p>
              <div>
          <a
            href="/about-us"
            className=" mt-6  inline-flex items-center justify-center  h-12 px-6 rounded-md bg-indigo-600  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Learn more
          </a>
        </div>

              {/* <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products and Services</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
          <Image src="/images/creatives/globe.gif"  width={600}
            height={600} alt="wires" unoptimized />
          {/* <img
            alt="Product screenshot"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          /> */}
        </div>
      </div>
    </div>
  )
}
