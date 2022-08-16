import React,{useState, useEffect} from 'react'
import {ShortHeader, HeaderIccon, logo,dropDownIcon,Cancell, LogoFooter } from "../Imports/ImportImages";
import {Link} from 'react-router-dom'

const Header = (props) => {
  const [dropdownActive , setDropdownActive] = useState(false);
  const [nav , SetNav] = useState(false)

  const [isLight, setDesktop] = useState(window.innerWidth > 768 && props.HeaderInside);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450 && props.HeaderInside);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  

    return (
      <React.Fragment>
        {props.shortHeader ? (
            <header className="absolute z-20 w-full bg-primary">
              <div className="md:container mx-auto px-4">
                <div className={`header-wrapper justify-between flex items-center lg:pt-9 pt-6 pb-6 ${props.HeaderInside ? 'border-b border-[#689BD9]' : 'border-0' }`}>
                  <div className='logo'>
                    <Link to={`/`}>
                      <img className='lg:w-auto w-16' src={props.HeaderInside ? LogoFooter : logo} alt="" />
                    </Link>
                  </div>
                  <div className="info flex">
                    <img src={ShortHeader} className='lg:mr-3 mr-1 lg:w-auto w-4' alt="" />
                    <span className='text-white font-medium lg:text-base text-sm'>Créer une demande d’assistance</span>
                  </div>
                </div>
              </div>
          </header>
        ) : (
        <header className="absolute z-20 w-full">
          <div className="md:container mx-auto px-4">
            <div className={`header-wrapper lg:justify-start justify-between flex items-center lg:pt-9 pt-6 pb-6 ${props.HeaderInside ? 'border-b border-[#689BD9]' : 'border-0' }`}>
              <div className='logo'>
                <Link to={`/`}>
                  <img className='lg:w-auto md:w-32 w-24' src={props.HeaderInside ? LogoFooter : logo} alt="" />
                </Link>
              </div>
              <div className={`header-main shadow-lg lg:shadow-none px-5 lg:px-0 lg:flex lg:flex-row flex-col w-full lg:static absolute left-0 right-0 top-full z-10 lg:py-0 py-5 lg:bg-transparent bg-white transition-all duration-500 ease-linear lg:z-auto ${nav ? 'opacity-100' : 'top-[-400px]'} `}>
                <ul className="main-menu relative lg:flex items-center list-none lg:ml-12 ml-0">
                  <li className='py-2 lg:ml-8 lg:mb-0 mb-2 have-dropdown' onClick={()=> setDropdownActive(!dropdownActive)}>
                    <span className={`relative font-medium lg:inline-block block lg:text-base text-sm ${isLight ? 'text-white' : 'text-dark hover:text-primary' }`} >Domaines</span>
                  
                    <div className="mega-menu w-full lg:w-[800px] bg-gray-100 lg:bg-white rounded-xl lg:shadow-xl absolute p-4 lg:p-8 z-20 lg:-ml-20">
                      <div className="flex lg:flex-row flex-col">
                        <div className="w-full lg:w-1/3 mb-3 md:mb-0">
                          <h3 className="text-base lg:text-lg mb-4">Payments</h3>
                          
                          <a href="#" className="item flex hover:pl-1.5 pl-0 py-1 my-2 transition-all ease-in duration-150">
                            <span className="icon text-center pr-4">
                              <img src="https://via.placeholder.com/44" alt="" className="inline-block max-w-full"/>
                            </span>

                            <span>
                              <h4 className="font-bold text-blue-500">Payments</h4>
                              <p className="text-sm text-gray-500">Online payments</p>
                            </span>
                          </a>

                          <a href="#" className="item flex hover:pl-1.5 pl-0 py-1 my-2 transition-all ease-in duration-150">
                            <span className="icon text-center pr-4">
                              <img src="https://via.placeholder.com/44" alt="" className="inline-block max-w-full"/>
                            </span>

                            <span>
                              <h4 className="font-bold text-blue-500">Terminal</h4>
                              <p className="text-sm text-gray-500">In-person payments</p>
                            </span>
                          </a>

                          <a href="#" className="item flex hover:pl-1.5 pl-0 py-1 my-2 transition-all ease-in duration-150">
                            <span className="icon text-center pr-4">
                              <img src="https://via.placeholder.com/44" alt="" className="inline-block max-w-full"/>
                            </span>

                            <span>
                              <h4 className="font-bold text-blue-500">Connect</h4>
                              <p className="text-sm text-gray-500">Payments for platforms</p>
                            </span>
                          </a>

                          <a href="#" className="item flex hover:pl-1.5 pl-0 py-1 my-2 transition-all ease-in duration-150">
                            <span className="icon text-center pr-4">
                              <img src="https://via.placeholder.com/44" alt="" className="inline-block max-w-full"/>
                            </span>

                            <span>
                              <h4 className="font-bold text-blue-500">Billing</h4>
                              <p className="text-sm text-gray-500">Subscriptions & invoicing</p>
                            </span>
                          </a>
                        </div>

                        <div className="w-full lg:w-1/3 mb-3 md:mb-0">
                          <h3 className="text-base lg:text-lg mb-4">Payouts</h3>
                          
                          <a href="#" className="item flex hover:pl-1.5 pl-0 py-1 my-2 transition-all ease-in duration-150">
                            <span className="icon text-center pr-4">
                              <img src="https://via.placeholder.com/44" alt="" className="inline-block max-w-full"/>
                            </span>

                            <span>
                              <h4 className="font-bold text-blue-500">Payouts</h4>
                              <p className="text-sm text-gray-500">Programmatic payouts</p>
                            </span>
                          </a>

                          <a href="#" className="item flex hover:pl-1.5 pl-0 py-1 my-2 transition-all ease-in duration-150">
                            <span className="icon text-center pr-4">
                              <img src="https://via.placeholder.com/44" alt="" className="inline-block max-w-full"/>
                            </span>

                            <span>
                              <h4 className="font-bold text-blue-500">Issuing</h4>
                              <p className="text-sm text-gray-500">Card creation</p>
                            </span>
                          </a>

                        </div>

                        <div className="w-full lg:w-1/3 mb-3 md:mb-0">
                          <h3 className="text-base lg:text-lg mb-4">Business Operations</h3>
                          
                          <a href="#" className="item flex hover:pl-1.5 pl-0 py-1 my-2 transition-all ease-in duration-150">
                            <span className="icon text-center pr-4">
                              <img src="https://via.placeholder.com/44" alt="" className="inline-block max-w-full"/>
                            </span>

                            <span>
                              <h4 className="font-bold text-blue-500">Radar</h4>
                              <p className="text-sm text-gray-500">Fraud & risk management</p>
                            </span>
                          </a>

                          <a href="#" className="item flex hover:pl-1.5 pl-0 py-1 my-2 transition-all ease-in duration-150">
                            <span className="icon text-center pr-4">
                              <img src="https://via.placeholder.com/44" alt="" className="inline-block max-w-full"/>
                            </span>

                            <span>
                              <h4 className="font-bold text-blue-500">Sigma</h4>
                              <p className="text-sm text-gray-500">Custom reports</p>
                            </span>
                          </a>

                          <a href="#" className="item flex hover:pl-1.5 pl-0 py-1 my-2 transition-all ease-in duration-150">
                            <span className="icon text-center pr-4">
                              <img src="https://via.placeholder.com/44" alt="" className="inline-block max-w-full"/>
                            </span>

                            <span>
                              <h4 className="font-bold text-blue-500">Atlas</h4>
                              <p className="text-sm text-gray-500">Start-up incorporation</p>
                            </span>
                          </a>
                        </div>

                      </div>
                    </div>
                  </li>
                  <li className='py-2 lg:ml-8 lg:mb-0 mb-2'><Link to={`/webhosting`} className={`inline-block font-medium ${isLight ? 'text-white' : 'text-dark hover:text-primary'} lg:text-base text-sm`}>Hébergement</Link></li>
                  <li className='py-2 lg:ml-8 lg:mb-0 mb-2'><Link to={`/contact`} className={`inline-block font-medium ${isLight ? 'text-white' : 'text-dark hover:text-primary'} lg:text-base text-sm`}>Serveurs</Link></li>
                  <li className='py-2 lg:ml-8 lg:mb-0 mb-2'><Link to={`/`} className={`inline-block font-medium ${isLight ? 'text-white' : 'text-dark hover:text-primary'} lg:text-base text-sm`}>Email</Link></li>
                  <li className='py-2 lg:ml-8 lg:mb-0 mb-2'><Link to={`/about`} className={`inline-block font-medium ${isLight ? 'text-white' : 'text-dark hover:text-primary'} lg:text-base text-sm`}>À propos</Link></li>
                </ul>
                
                <div className="header-buttons flex justify-center md:justify-end pt-4 mt-4 md:mt-0 md:pt-0 md:border-0 border-t ml-auto">
                  <div className="button1 mr-4">
                  <Link to={`/about`} className={`lg:inline-block block lg:px-5 px-3 py-2 rounded ${props.HeaderInside ? 'bg-[#308EFF] text-white' : 'bg-white text-black hover:bg-gray-50'} font-medium lg:text-base text-sm`}>
                      Support
                    </Link>
                  </div>
                  <div className="button2">
                    <Link to={`/`} className={`lg:inline-block block lg:px-5 px-3 py-2 rounded ${props.HeaderInside ? 'bg-white text-[#474747]' : 'bg-[#308EFF] text-white hover:bg-secondary hover:text-white'} font-medium lg:text-base text-sm`}>
                      {props.HeaderInside ? 'Login' : 'Espace client'}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-1 cursor-pointer lg:hidden block" onClick={() => SetNav(!nav)}>
                <span className={`block w-5 h-0.5 ${props.HeaderInside ? 'bg-white' : 'bg-tertiary'}`}></span>
                <span className={`block w-5 h-0.5 ${props.HeaderInside ? 'bg-white' : 'bg-tertiary'}`}></span>
                <span className={`block w-5 h-0.5 ${props.HeaderInside ? 'bg-white' : 'bg-tertiary'}`}></span>
              </div>
            </div>
          </div>
        </header>
    )}
    </React.Fragment>
    )
}

export default Header