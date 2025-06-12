import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { GiReturnArrow, GiWallet } from "react-icons/gi";
import { ImGift } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { IoChatboxOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookSquare, FaPinterestP, FaInstagramSquare } from "react-icons/fa";
import { SiYoutubekids } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-[#fafafa]">
        <div className="container">
          <div className="flex items-center justify-center gap-2 py-8 pb-8">
            <div className="w-full text-center justify-center flex-col group w-[15%]">
              <MdLocalShipping className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[12px] font-[500]">For all Orders over ₹2500</p>
            </div>

            <div className="w-full text-center justify-center flex-col group w-[15%]">
              <GiReturnArrow className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">30 Days Return</h3>
              <p className="text-[12px] font-[500]">For an exchange product</p>
            </div>

            <div className="w-full text-center justify-center flex-col group w-[15%]">
              <GiWallet className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
              <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
            </div>

            <div className="w-full text-center justify-center flex-col group w-[15%]">
              <ImGift className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
              <p className="text-[12px] font-[500]">Our First Product Order</p>
            </div>

            <div className="w-full text-center justify-center flex-col group w-[15%]">
              <BiSupport className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
              <p className="text-[12px] font-[500]">Contact us Anytime</p>
            </div>
          </div>

          <hr />

          <div className="footer flex py-8">
            {/* Contact Us */}
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.2)] pr-4">
              <h2 className="text-[20px] font-[600] mb-4">Contact us</h2>
              <p className="text-[13px] font-[400] pb-4">
                Classyshop-MEGA SUPER STORE ,507-Union Trade Center ,France
              </p>
              <Link className="text-[13px]" to="mailto:sales@yourcompany.com">
                sales@yourcompany.com
              </Link>
              <span className="text-[25px] font-[600] block w-full mt-3 text-primary">
                (+91) 9876-543-210
              </span>
              <div className="flex items-center gap-2 mt-2">
                <IoChatboxOutline className="text-[40px] text-primary" />
                <span className="text-[16px] font-[600]">Online Chats Get Expert Help</span>
              </div>
            </div>

            {/* Products and Company */}
            <div className="part2 w-[40%] flex pl-8 gap-12">
              <div>
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul>
                  {["Prices drop", "New Products", "Best Sales", "Contact Us", "Sitemap", "Stores"].map((text, i) => (
                    <li key={i} className="list-none text-[14px] mb-1">
                      <Link to="/" className="link">{text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-[18px] font-[600] mb-4">Our Company</h2>
                <ul>
                  {["Delivery", "Legal Notice", "Terms and Conditions of use", "About Us", "Secure Payment", "Login"].map((text, i) => (
                    <li key={i} className="list-none text-[14px] mb-1">
                      <Link to="/" className="link">{text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="part3 w-[35%] pr-8 flex flex-col pl-8">
              <h2 className="text-[18px] font-[600] mb-4">Subscribe to newsletter</h2>
              <p className="text-[13px] font-[400] pb-4">
                Subscribe to our latest newsletter to get news about special discounts.
              </p>
              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]"
                  placeholder="Your Email Address"
                />
                <Button className="btn-org">SUBSCRIBE</Button>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the Terms and Conditions"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Strip */}
      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-2">
            {[FaFacebookSquare, SiYoutubekids, FaPinterestP, FaInstagramSquare].map((Icon, i) => (
              <li key={i} className="list-none">
                <Link
                  to="/"
                  target="_blank"
                  className="w-[35px] h-[35px] rounded-full border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
                >
                  <Icon className="text-[20px] group-hover:text-white" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-[13px] text-center mb-0">
            ⓒ 2025 - Ecommerce software by PrestaShop
          </p>

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <img key={n} src={`/footer${n}.png`} alt={`footer${n}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
