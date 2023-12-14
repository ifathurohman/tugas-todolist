const Header = ({ text, bg, count }) => {
    return (
        <div className={`${bg} flex items-center h-12 pl-4 pr-4 rounded-md uppercase text-sm text-white justify-between`}>
            {text}
            <div className="bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">{count}</div>
        </div>
    );

}

export default Header;