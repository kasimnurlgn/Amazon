import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from "./LowerHeader";
import css from "./Header.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext, DataProvider } from "../DataProvider/DataProvider";
const Header = () => {
  let [state, dispatch] = useContext(DataContext);
  let totalItem = state.basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={css.fixed}>
      <section>
        <div className={css.header__container}>
          <div className={css.logo__container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </Link>
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
            <Link to="/" className={css.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt="American Flag"
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>

            <Link to="/auth" className={css.accounts}>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>

            {/* orders */}
            <Link to="/orders" className={css.returns}>
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={css.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
