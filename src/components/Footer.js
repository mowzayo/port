import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';


function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (

    <footer className="footer">
  <div></div>
  <div className="dn">
    <ul className="dnhm">
      {["Home", "Contact", "Projects"].map((item) => (
        <li
          className={`dn--hm1--footer--item ${
            item.toLowerCase() === "projects" ? "has-submenu" : ""
          }`}
          key={item.toLowerCase()}
        >
              {item.toLowerCase() === "projects" ? (
                <span 
                  className="dn--hm1--footer--item-link" 
                  style={{cursor: 'default'}} // Make it look like it's not clickable
                  aria-label="Projects (not clickable)"
                  title="This item is not clickable"
                >
                  {item}
                </span>
              ) : (
          <Link
            className="dn--hm1--footer--item-link"
            to={`/${item.toLowerCase()}`}
            aria-label={`Navigate to ${item} page`}
            title={`Go to the ${item} section`}
          >
            {item}
          </Link>
              )}
          {/* Submenu for "Projects" */}
          {item.toLowerCase() === "projects" && (
            <ul className="submenu">
              {["Web Developer","Data Analyst"].map((subItem) => (
                <li className="submenu-item" key={subItem.toLowerCase()}>
                  <Link
                    className="submenu-link"
                    to={`/${subItem.toLowerCase().replace(" ", "-")}`}
                    aria-label={`Navigate to ${subItem} page`}
                    title={`Go to the ${subItem} section`}
                  >
                    {subItem}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
</footer>

  );
}

export default Footer;