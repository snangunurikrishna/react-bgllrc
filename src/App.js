import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [otp, setOtp] = useState(new Array(6).fill(""));

 

  const myFunction = (element, index,e) => {
    console.log(e)
    if(e.code === "Backspace" || e.code === "Delete"){
      setOtp([...otp.map((d, idx) => (idx === index ? "" : d))]);

      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
    }
    } else{
      if (isNaN(element.value)) return false;
      if((parseInt(e.key) >= 0 && parseInt(e.key) <= 9)){
      setOtp([...otp.map((d, idx) => (idx === index ? e.key : d))]);

      if (element.nextSibling) {
          element.nextSibling.focus();
      }
    }
    else{
      return;
    }
    }
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some kkkkmagic happen :)</p>
      <div className="row">
                <div className="col text-center">
                    <h2>Welcome to the channel!!!</h2>
                    <p>Enter the OTP sent to yolllllu to verify your identity</p>

                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                className={data && "hello1"}
                                onChange={e => {}}
                                onFocus={e => e.target.select(e,index)}
                                onKeyDown={(e)=>myFunction(e.target, index,e)}
                            />
                        );
                    })}

                    <p>OTP Entered - {otp.join("")}</p>
                    <p>
                        <button
                            className="btn btn-secondary mr-2"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            }
                        >
                            Verify OTP
                        </button>
                    </p>
                </div>
            </div>
    </div>
  );
}
