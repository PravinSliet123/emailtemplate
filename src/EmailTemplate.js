import React from 'react'
import Emailtempimg1 from "./images/tf22 (1).png"
import Emailtempimg2 from "./images/Emailtemp2.png"
import EmailTemplateHeadelogo from "./images/header-logo.png"
import EmailtemplateTopShadow from "./images/bgoverlay-left.png"
import "./Emailtemplate.css"

function EmailTemplate() {
    return (
        <div className='EmailTemplate'>
            <div className="EmailTemplate__topShadow">
                <img src={EmailtemplateTopShadow} alt="" />
            </div>
            <div className="EmailTemplate__nav">
                <div className="EmailTemplate__nav__logo">
                    <img src={EmailTemplateHeadelogo} alt="" />

                </div>
                <div className="EmailTemplateHeadelogo__right">
                    <h3>Wisit Website {`>`}</h3>
                </div>
            </div>
            <div className="EmailTemplate__content">
                <div className="EmailTemplate__content__topImage">
                    <img src={Emailtempimg2} alt="" />
                    <h1>Possword Reset</h1>
                </div>
                <div className="EmailTemplate__content__username">
                    <h3>Hi Pravin!</h3>
                    <p>You are receiving this email bacause you requested <br /> a password reset</p>
                    <button type='submit' > Set a new password</button>
                </div>
                <div className="EmailTemplate__content__para">
                    <p>If you didn’t request a password reset, you can <br />
                        ignore this email.Your password will not be changed. </p>
                </div>
                <div className="EmailTemplate__content__imagebottom">
                    <img src={Emailtempimg1} alt="" />
                    <h3>Team techFEST</h3>
                </div>


            </div>
            <div className="EmailTemplate__footer">
                <div className="EmailTemplate__footer__icons">
                    <h4>follow us on /</h4>
                    <a href=""><i class=" fa fa-brands fa-facebook"></i></a>
                    <a href=""> <i class=" fa fa-brands fa-instagram"></i></a>
                    <a href=""><i class=" fa fa-brands fa-twitter"></i></a>
                    <a href=""><i class=" fa fa-brands fa-linkedin"></i></a>
                </div>
                <div className="EmailTemplate__techfestPageLink">
                    <a href="">www.techfestsliet.com</a>
                </div>
               
            </div>
            <div className="EmailTemplate__topShadow__bottom">
                    <img src={EmailtemplateTopShadow} alt="" />
                </div>
        </div>
    )
}

export default EmailTemplate