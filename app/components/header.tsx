import { useState, Fragment } from 'react';
import { Dialog, DialogPanel, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChatBubbleBottomCenterIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Sidebar from '@/app/components/sidebar'


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Products', href: '#' }, // Renamed Services to Products
  { name: 'Contact', href: '/contact' },
];

const products = [
  { name: 'Routers', href: '/router' },
  { name: 'Network Switches', href: '/network-switches' },
  { name: 'Security Firewalls', href: '/security-firewall' },
  { name: 'Wireless Access Points', href: '/wireless-access-points' },
  { name: 'IP Phones', href: '/ip-phones' },
  { name: 'Tape Library', href: '/tape-library' },
  { name: 'Cables and Peripherals', href: '/cables-peripherals-devices' },
  { name: 'Accessories', href: '/accessories' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://res.cloudinary.com/dug30iszj/image/upload/v1728824101/logo_xyaiqh.png"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            item.name === 'Products' ? (
              <Menu as="div" className="relative inline-block text-left" key={item.name}>
                <Menu.Button className="inline-flex items-center text-sm font-semibold leading-6 text-white">
                  {item.name}
                  <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {products.map((product) => (
                        <Menu.Item key={product.name}>
                          {({ active }) => (
                            <a
                              href={product.href}
                              className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                            >
                              {product.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            )
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Call Us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>


        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  item.name === 'Products' ? (
                    <Menu as="div" className="-mx-3 block rounded-lg px-3 py-2" key={item.name}>
                      <Menu.Button className="inline-flex w-full items-center justify-between text-left text-base font-semibold leading-7 text-black hover:bg-gray-50">
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {products.map((product) => (
                              <Menu.Item key={product.name}>
                                {({ active }) => (
                                  <a
                                    href={product.href}
                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                                  >
                                    {product.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

    </header>
    <div className='max-w-full p-0 m0'>
      
        {/* Quick Enquiry Button */}
        <a
        onClick={openSidebar}
 className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col "
        aria-label="Quick Enquiry"
      >
        <span className="text-sm rotate-90 py-2.5  px-2.5 bg-indigo-600 text-white ">Quick Enquiry</span>
      </a>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
    </>
  );
};

export default Header;


