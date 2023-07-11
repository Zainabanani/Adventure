import React from "react";
import "../Styles/footer.css";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <>
      <footer>
        <article>
          <div className="footerup">
          <div className="About">
            <div>
              <h3>About Adventor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Tincidunt id sem vel quis in turpis sit eget pellentesque. <br />{" "}
              Nunc etiicies in rhoncus, rhoncus in arcu. Tincidunt <br />{" "}
              nrneque fusce vitaenisi aliquet. que maeae tortoere <br /> necsem
              commodo ac.
            </p>

            </div>
            
          </div>

          <div className="footer-links">
            <h3>Quick Menu</h3>
            <div className="pdfof">
              <div className="Home">
              <ul>
                <li>Home</li>
                <li>Stories</li>
                <li>Trending Stories</li>
                <li>Popular Stories</li>
              </ul>
            </div>
            <div className="signup">
              <ul>
                <li>Sign up</li>
                <li>Login</li>
                <li>Contact us</li>
              </ul>
            </div>
            </div>
            
          </div>
          <div className="subscribe">
            <h4>Suscribe to our newsleter</h4>
            <div className="input-container">
               <input type="text" placeholder="Email Address" />
              <button type="submit">Submit</button>
            </div>
           
          </div>
        </div>
        <hr />

        <div className="socials">
          
            <h5>Terms and Policy</h5>
            <div className="icon">
              <img src={twitter} alt={"twitter"} />
              <img src={facebook} alt={"facebook"} />
              <img src={insta} alt={"instagram"} />
            </div>
         
        </div>

        </article>
        
      </footer>
    </>
  );
};

export default Footer;
