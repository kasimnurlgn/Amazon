import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from "./LowerHeader";
import css from "./Header.module.css";
const Header = () => {
  return (
    <section className={css.fixed}>
      <section>
        <div className={css.header__container}>
          <div className={css.logo__container}>
            {/* logo */}
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </a>
            {/* delivery */}
            <div className={css.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span className={css.ethiopia}>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search */}
          <div className={css.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Amazon " />
            <BsSearch size={38} />
          </div>
          {/* right side div  */}
          <div className={css.order__container}>
            <a href="" className={css.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt="American Flag"
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>

            <a href="" className={css.accounts}>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>

            {/* orders */}
            <a href="" className={css.returns}>
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="" className={css.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
