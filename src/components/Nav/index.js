import React from "react";

const Nav = () => {
  const categories = [
    {
      name: "Commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "Portraits", description: "Portraits of people in my life" },
    { name: "Food", description: "Delicious delicacies" },
    {
      name: "Landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  //function to log category name when clicked
  const categorySelected = (categoryName) => {
    console.log(`${categoryName} clicked`);
  };
  return (
    <header className = 'flex-row px-1'>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            //mapping over an array should return only ONE JSX element
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
