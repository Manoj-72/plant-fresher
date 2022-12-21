import React, { useState, useEffect, useRef } from "react";
import swal from "sweetalert";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { NavbarPage } from "../../components";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import axios from "axios";

const Login = (props) => {
  const email = useRef();
  const password = useRef();
  const number = useRef();

  const navigate = useNavigate();
  const localSignup = localStorage.getItem("logIn");
  const [loginMobileNumber, setLoginMobileNumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupMobileNumber, setSignupMobileNumber] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const loginOperation = async (e) => {
    e.preventDefault();
    if (!loginMobileNumber.length || !loginPassword.length) {
      alert("Please enter vaild details");
    } else {
    setLoading(true);
    try {
      let Data =
        "userName=" +
        loginMobileNumber +
        "&password=" +
        loginPassword +
        "&grant_type=password&Type=cart";
      const response = await axios({
        method: "POST",
        url: "https://fioritest.avaniko.com/login",
        data: Data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      localStorage.setItem("userInfo", JSON.stringify(response));
      swal({
        title: `Logged in successfully!`,
        icon: "success",
        dangerMode: false,
      });
      navigate("/");
      
      
    } catch (err) {
      setLoading(false);
      setErr(true);
      setErrMessage(err.response.data.error);
      console.error(err);
    }
  }
  };
 const singupOperation = async (e) => {
  e.preventDefault();
  if (!signupName.length|| !signupMobileNumber.length || !signupPassword.length){
    alert("Please enter vaild details");
  } else {
    setLoading(true);
  try {
    let signupData =
    "phNum=" +
      signupMobileNumber +
    "&name=" + signupName +
      "&password=" +
      signupPassword +
      "&type=cart";
    const response = await axios({
      method: "POST",
      url: "https://fioritest.avaniko.com/User/AddUser",
      data: signupData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }) 
    if (response.data !== 'User already exists'){
    // .then((res) => console.log(res.data))
    // .catch((error) => console.log(error.response.data.error));
    localStorage.setItem("signupInfo", JSON.stringify(response))
    swal({
      title: `Account created successfully`,
      icon: "success",
      dangerMode: false,
    });
    navigate('/login')
    console.log(response)
  } else {
    alert('User already exist')
  }
  }
  catch (err) {
    // setLoading(false);
    //   setErr(true);
    //   setErrMessage(err.response.data.error);
    //   console.error(err);
  }
}};
  const handleClick = () => {
    if (email.current.value && password.current.value) {
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("logIn", email.current.value);
      navigate("/");
      console.log(localSignup);
    }
  };

  const otpClick = () => {
    localStorage.setItem("number", number.current.value);
    localStorage.setItem("OTP", number.current.value);
  };

  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const [counter, setCounter] = useState(59);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleOTP = () => {
    navigate("/reset-password");
  };

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [confirmType, setConfirmType] = useState("password");
  const [confirmIcon, setConfirmIcon] = useState(eyeOff);

  const newToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const confirmToggle = () => {
    console.log(type);
    if (confirmType === "password") {
      setConfirmIcon(eye);
      setConfirmType("text");
    } else {
      setConfirmIcon(eyeOff);
      setConfirmType("password");
    }
  };

  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleNewPass = (e) => {
    setNewpassword(e.target.value);
  };

  const handleConfirmPass = (e) => {
    setConfirmpassword(e.target.value);
  };

  const handleReset = () => {
    if (newpassword === confirmpassword) {
      swal({
        title: "Password changed successfully!",
        icon: "success",
        dangerMode: false,
      });
      navigate("/");
    } else {
    }
  };

  return (
    <div className="login">
      <NavbarPage title='login' username="loginName" />
      <div className="loginCard">
        {props.title === "Login" && (
          <h3 className="loginHeading">{props.title}</h3>
        )}
        {props.title === "Login" && <p className="loginPara">{props.des}</p>}
        {props.title === "Login" && (
          <input
          autoFocus
            className="loginInput"
            type="text"
            id="loginFocus"
            placeholder={props.placeholder}
            // ref={email}
            onChange={(e) => setLoginMobileNumber(e.target.value)}
          />
        )}
        {props.title === "Login" && (
          <input
            className="loginInput"
            type="password"
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
            // ref={password}
          />
        )}
        {props.title === "Login" && (
          <Link to="/forget-password">
            <p className="forgetPwd">{props.forget}</p>{" "}
          </Link>
        )}
        {props.title === "Login" && (
          <button className="loginBtn" type="submit" onClick={loginOperation}>
            {props.button}
          </button>
        )}
        {err && <p className="invalid-err">{errMessage}</p>}
        {props.title === "Login" && (
          <Link to="/signup">
            <p className="signup">{props.signup}</p>{" "}
          </Link>
        )}
        {props.title === "Signup" && (
          <h3 className="loginHeading">{props.title}</h3>
        )}
        {props.title === "Signup" && <p className="loginPara">{props.para}</p>}
        {props.title === "Signup" && (
          <input
          autoFocus
            className="loginInput"
            type="text"
            placeholder="Name"
            onChange={(e) => setSignupName(e.target.value)}
            // ref={password}
          />
        )}
        {props.title === "Signup" && (
          <input
            className="loginInput"
            type="text"
            placeholder={props.placeholder}
            // ref={email}
            onChange={(e) => setSignupMobileNumber(e.target.value)}
          />
        )}
        {props.title === "Signup" && (
          <input
            className="loginInput"
            type="password"
            placeholder="Password"
            onChange={(e) => setSignupPassword(e.target.value)}
            // ref={password}
          />
        )}
        {/* {err && <p className="invalid-err">{errMessage}</p>} */}
        {props.title === "Signup" && (
          <button className="loginBtn" type="submit" onClick={singupOperation}>
            {props.button}
          </button>
        )}
        
        {props.title === "Signup" && (
          <Link to="/signup">
            <p className="signup">{props.signup}</p>{" "}
          </Link>
        )}

        {props.title === "Forget password" && (
          <h3 className="forgetHeading">{props.title}</h3>
        )}
        {props.title === "Forget password" && (
          <p className="forgetPara">{props.para}</p>
        )}
        {props.title === "Forget password" && (
          <input
            className="loginInput"
            type="text"
            placeholder={props.placeholder}
            ref={number}
          />
        )}
        {props.title === "Forget password" && (
          <Link to="/verification">
            {" "}
            <button className="otpBtn" type="submit" onClick={otpClick}>
              {props.button}
            </button>
          </Link>
        )}

        {props.title === "OTP Verification" && (
          <h3 className="otpHeading">{props.title}</h3>
        )}
        {props.title === "OTP Verification" && (
          <p className="otpPara">{props.para}</p>
        )}
        {props.title === "OTP Verification" && (
          <div className="otpInpBox">
            <h6>Enter otp</h6>
            {otp.map((data, index) => {
              return (
                <input
                  className="otpField"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
            <div className="otpTimerBox">
              <p>00:{counter}</p>
              <p className="resendOTP" onClick={refreshPage}>
                Resend otp
              </p>
            </div>
            <div className="resendBtn">
              <button className="otpBtn" type="submit" onClick={handleOTP}>
                {props.button}
              </button>
            </div>
          </div>
        )}
        {props.title === "Reset password" && (
          <h3 className="resetHeading">{props.title}</h3>
        )}
        {props.title === "Reset password" && (
          <div className="resetBox">
            <input
              name="newpass"
              className="loginInput"
              type={type}
              placeholder={props.newpwd}
              onChange={handleNewPass}
            />
            <span onClick={newToggle}>
              <Icon icon={icon} size={18} />
            </span>
          </div>
        )}
        {props.title === "Reset password" && (
          <div className="resetBox">
            <input
              name="confirmpass"
              className="loginInput"
              type={confirmType}
              placeholder={props.confirmpwd}
              onChange={handleConfirmPass}
            />
            <span onClick={confirmToggle}>
              <Icon icon={confirmIcon} size={18} />
            </span>
          </div>
        )}
        {props.title === "Reset password" && (
          <>
            <button className="otpBtn" type="submit" onClick={handleReset}>
              {props.button}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
