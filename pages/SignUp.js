import styles from '../styles/SignUp/Signup.module.css';
import React from "react";
import Signup from "../components/SignUp";

export default function SignUp() {
	return (
        <>
        <div className="row">
             <div className="col-md-6  login-bg-img ">
            <img className="img_size" src="./img/wifi.png"/>

            <div id="main_text">
                <h1 className={styles.h1_hights}>Auto Camera App</h1>
                <h3 className={styles.h3_hights}> Everything before your eyes </h3>
                <p className={styles.p_hights3}>
                    Lorem ipsum dolor sit amet, consectetur and it adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore magna enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur and it adipiscing elit, sed do eiusmod tem incididunt ut
                    labore et dolore magna enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur and it adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore magna enim ad minim veniam, quis nostrud. Lorem ipsum dolor
                    sit amet, consectetur and it adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore magna enim ad minim veniam, quis nostrud
                </p>

            </div>

        </div>

        <div className="col-md-6  styles.main_logindiv">

            <div className="row justify-content-center">
                <div col-md-6>
                    <button className="btn"><i  className="fa fa-home"></i></button>
                </div>
                <div col-md-6>
                    <button style={{backgroundColor: "#1e82d2"}} className="styles.btn"><i  className="fa fa-car"></i></button>

                </div>
            </div>
            <div>

                <h1 className="styles.h1mainstyle"> Sign Up </h1>
            </div>
            <div className="styles.form_style">
            <Signup/>
                <br/>

                <br/>

                <div className="styles.needaccount">
                    <span>Need an account?</span><span style={{color: "blue"}}> log in</span>
                </div>


            </div>


        </div>
    </div>
</>
			
	);
}
