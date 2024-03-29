import {React,useContext } from "react";
import Navbar from "./Navbar";
 
import Register from "./Register";
import { UserContext } from "../UserContext";
import Chat from "./Chat";
'../../public/Background.png'

export default function Login() {
   
  return (
    <>
    
      <div 
        className=" flex-shrink-0 bg-no-repeat  bg-[url('https://s3-alpha-sig.figma.com/img/f92d/0a41/878799f848da9fe7de85284851b01be7?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pgaj-IGeyPcWGKkLPBf-h9j4CjL8KVka25TE5IgXki7cXxlMPhe2sCUhYGZ9iFDNgUWTUhEpTvgBWaNIR9IRtLVZfSRrR-c7qU-xKI6phYoHyY3Z6GHr0B8kHTkZGuRwO9V3qJ2Pz4hRLwfp3-K7AMkRnE9MBuhxOJlvKjIUOAhVeHAX8zpwQv336kN3XkiArmZGI96NncfbHjqGz0ow-Ysn65xC7CWXSeHEinhEEE2RZylfwQPrSqcdOwKOAbJ7D~PGQS3L14l22kx1G0LnEzp00jQNqGOr8MEvTl6q1zRyKqdn~qeyChNQSfwvEIpnzzvP6NDLPH8FBFl3ekQE0A__')]
    h-screen bg-cover "
      >
        <Navbar />
        <section className="display flex justify-evenly">
         
          <div className="   inline-flex  flex-col items-start w-[30%] h-full">
            <div className="mt-12 mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="113"
                height="174"
                viewBox="0 0 113 174"
                fill="none"
              >
                <path
                  d="M1.53715 135.898C1.22972 137.743 0.92228 140.51 2.45947 144.814C7.37846 158.034 23.0578 165.72 26.4396 167.257C39.3519 173.406 51.0345 173.713 56.261 173.713C58.7205 173.713 68.5584 173.713 80.8559 169.716C85.4675 168.179 92.2311 166.027 99.3022 160.801C106.066 155.882 108.833 151.27 109.755 150.04C109.755 150.04 109.755 150.04 109.755 149.733C110.677 148.196 113.752 143.277 112.829 137.128C112.829 136.206 111.6 130.364 106.681 126.675C106.681 126.675 98.3799 121.141 89.1567 126.06C88.8493 126.06 88.5419 126.368 88.5419 126.368C87.927 126.983 87.3121 127.29 87.3121 127.29C86.3898 128.212 83.008 131.287 82.7006 131.594C82.7006 131.594 80.5485 133.439 75.0146 137.128C74.3998 137.435 73.7849 138.05 73.7849 138.05L73.4774 138.358C71.9403 139.28 68.8659 140.817 65.1766 141.74C62.4097 142.354 56.5684 144.199 49.1899 142.354C43.0412 141.125 38.737 138.05 36.8924 136.821C34.1255 134.976 33.8181 134.054 27.6693 129.135C23.0578 125.445 22.1354 124.831 20.5983 124.523C15.0644 122.678 9.83796 125.445 9.22308 126.06C8.60821 125.753 2.7669 129.135 1.53715 135.898Z"
                  fill="white"
                />
                <path
                  d="M109.755 55.9602C109.755 41.2032 110.063 26.1388 110.063 11.3818C109.755 10.152 109.14 8.61486 107.603 6.77024C106.681 5.23305 104.221 2.15868 99.9171 0.621495C98.9948 0.314058 95.613 -0.608254 91.9237 0.621495C87.0047 2.15868 84.8527 6.4628 84.2378 7.38511C83.3155 8.9223 83.008 10.4595 83.008 11.3818C83.008 11.9967 83.008 12.6115 83.008 13.2264C74.7072 8.30742 65.1767 5.23305 54.7238 5.23305C24.595 5.54049 0 30.1355 0 60.5717C0 91.008 24.595 115.296 54.7238 115.296C84.8527 115.296 109.448 90.7006 109.448 60.5717C109.755 59.0345 109.448 57.4974 109.755 55.9602ZM54.7238 85.1667C40.8891 85.1667 30.1288 74.099 30.1288 60.2643C30.1288 46.4296 41.1966 35.3619 55.0313 35.3619C68.8659 35.3619 79.9337 46.4296 79.9337 60.2643C79.9337 74.099 68.5585 85.1667 54.7238 85.1667Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className=" font-bold text-[30px] w-full text-white">
              Welcome to <br /> 
              Goodspace Communications
            </div>
          </div>
          
            <Register/>
           
            
        </section>
      </div>
    </>
  );
}
