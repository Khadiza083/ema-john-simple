import './Header.css'
import logo from './../images/Logo.svg'

const Header = () => {
    return (
        <nav className='bg-[#1C2B35] py-4 px-24 flex justify-between items-center'>
            <img src={logo} alt="" />
            <div className='text-white flex gap-8'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;