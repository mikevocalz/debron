import { SolitoImage } from 'solito/image';
import Logo from '../../../apps/expo/assets/images/debron-logo2.svg';

const FooterComponent = () => {
  return (

    <footer className="bg-[#a17a74] sm:p-0 relative bottom-0 left-0 right-0">
      <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">
        <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#ffff33" />
        <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#a17a74" />
      </svg>
      <div className="py-6 px-10 md:flex md:justify-between">
        <div className=" mb-6 md:mb-0">
          <a href="www.clagart.com" className="justify-start items-start">
            <SolitoImage
              unoptimized
              alt='pruLTD-logo'
              src={Logo}
              contentFit='contain'
              width={200} height={250}
              style={{
                marginTop: 0,
                marginLeft: -10,
                height: 260,
                width: 300
              }}
            />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-16 sm:gap-8 sm:grid-cols-2">



          {/* Connect Section */}
          <div>
            <h2 className="mb-6  md:text-3xl text-xl font-semibold font-[BebasNeue-Bold] uppercase text-white tracking-wide">Let's Connect</h2>
            <ul className="text-gray-200 ">
              <li className="mb-4">
                <a href="mailto:ebrondominique@gmail.com" className="hover:underline break-all ">ebrondominique@gmail.com</a>
              </li>

            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h2 className="mb-6 md:text-3xl text-xl font-semibold font-[BebasNeue-Bold] tracking-wide uppercase text-white">Socials</h2>
            <ul className="text-gray-200 ">
              <li className="mb-4">
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Instagram</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-0 border-[#ffff33] sm:mx-auto  lg:my-8" />

      <div className="px-4 py-6 bg-[#136f63] md:flex md:items-center md:justify-between">
        <span className="font-bold  text-sm text-gray-300 sm:text-center">© 2023  <a href="https://uptv.com/" className="mx-2 tracking-wider "> Dominique Ebron.</a>  All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <a href="https://www.facebook.com/" className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
            <span className="sr-only">Linedin page</span>
          </a>
          <a href="https://www.instagram.com/" className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="https://www.youtube.com/@domclag8946" className="text-gray-400 hover:text-white">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" clip-rule="evenodd" /></svg>
            <span className="sr-only">Youtube</span>
          </a>
        </div>
      </div>
    </footer >
  )
}

export default FooterComponent