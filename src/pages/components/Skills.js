  import React from "react"
  import css from '../assets/icons/css-3.png'; 
  
  function Skills() {

    return (
        <section >
          {/* container start */}
          <div>
            {/* medium-title start */}
            <h2 >
              <span
                data-animation-child
                className="title-fill animated title-fill-anim"
                data-animation="title-fill-anim"
                data-text="Fine Folks"
              >
                Fine Folks
              </span>
              <br />
              <span
                data-animation-child
                className="title-fill tr-delay01 animated title-fill-anim"
                data-animation="title-fill-anim"
                data-text="We’ve Worked"
              >
                We’ve Worked
              </span>
              <br />
              <span
                data-animation-child
                className="title-fill tr-delay02 animated title-fill-anim"
                data-animation="title-fill-anim"
                data-text="With"
              >
                With
              </span>
            </h2>
            {/* medium-title end */}
            {/* client-list start */}
            <ul className="client-list d-flex-wrap top-padding-60">
              <li>
                <a href="#/" className="pointer-large d-block">
                  <div
                    className="brand-box"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={css}
                      alt="TWJ Logo"
                      className="hover-opac-img"
                    />
                    <img src={css} alt="TWJ Logo" className="opac-img" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#/" className="pointer-large d-block">
                  <div
                    className="brand-box"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={css}
                      alt="Chioma Akpuru Logo"
                      className="hover-opac-img"
                    />
                    <img
                      src={css}
                      alt="Chioma Akpuru Logo"
                      className="opac-img"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="#/" className="pointer-large d-block">
                  <div
                    className="brand-box"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={css}
                      alt="Nelz Management Logo"
                      className="hover-opac-img"
                    />
                    <img
                      src={css}
                      alt="Nelz Management Logo"
                      className="opac-img"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="#/" className="pointer-large d-block">
                  <div
                    className="brand-box"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={css}
                      alt="Michaels & Associates Logo"
                      className="hover-opac-img"
                    />
                    <img
                      src={css}
                      alt="Michaels & Associates Logo"
                      className="opac-img"
                    />
                  </div>
                </a>
              </li>
    
              <li>
                <a href="#/" className="pointer-large d-block">
                  <div className="brand-box"
                     style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                     }}
                     >
                    <img
                      src={css}
                      alt="Summerville logo"
                      className="hover-opac-img"
                    />
                    <img
                      src={css}
                      alt="Summerville logo"
                      className="opac-img"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="#/" className="pointer-large d-block">
                  <div className="brand-box"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                   }}>
                    <img
                      src={css}
                      alt="Earnabler logo"
                      className="hover-opac-img"
                    />
                    <img
                      src={css}
                      alt="Earnabler logo"
                      className="opac-img"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="#/" className="pointer-large d-block">
                  <div className="brand-box">
                    <img
                      src="assets/images/clients/d383cf8d-abee-4290-810d-a965f6c0fa6c.png"
                      alt="Brand"
                      className="hover-opac-img"
                    />
                    <img
                      src="assets/images/clients/7f7b6ede-3a3e-4e17-af25-f881c0121d63.png"
                      alt="Brand"
                      className="opac-img"
                    />
                  </div>
                </a>
              </li>
              <li className="empty-spot-box">
                <a
                  data-animation-container
                  href="#/"
                  className="pointer-large p-style-bold-up empty-spot d-block animated"
                >
                  <span
                    data-animation-child
                    className="title-fill animated title-fill-anim"
                    data-animation="title-fill-anim"
                    data-text="This spot"
                  >
                    This spot
                  </span>
                  <span
                    data-animation-child
                    className="title-fill tr-delay01 animated title-fill-anim"
                    data-animation="title-fill-anim"
                    data-text="Awaits"
                  >
                    Awaits
                  </span>
                  <span
                    data-animation-child
                    className="title-fill tr-delay02 animated title-fill-anim"
                    data-animation="title-fill-anim"
                    data-text="You"
                  >
                    You
                  </span>
                </a>
              </li>
            </ul>
            {/* client-list end */}
          </div>
          {/* container end */}
        </section>
      );
    };
  


  export default Skills;