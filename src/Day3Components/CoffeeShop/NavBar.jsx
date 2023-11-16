const NavBar = ({ category, handleClick }) => {
    return (
      <nav>
        {category.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              handleClick(index);
              console.log(index);
            }}
          >
            {item.title}
          </button>
        ))}
      </nav>
    );
  };
  
  export default NavBar;