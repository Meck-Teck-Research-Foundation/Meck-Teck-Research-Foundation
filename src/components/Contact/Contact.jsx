import React, { useState } from "react";
import con2 from "../../images/wallcon.jpg";
import emailjs from "emailjs-com";
import "./contact.css";
import And from "../../images/Capture.PNG";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_gkoso8l";
    const templateId = "template_2a24cms";
    const publicKey = "t1zcHKIASyKoLbsTe";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_mobile: mobile,
      from_title: title,
      to_name: "Meck Teck Research Foundation",
      message: msg,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email send successfully", response);
        setName("");
        setEmail("");
        setMsg("");
        setTitle("");
        setMobile("");
      })
      .catch((error) => {
        console.error("Error sending Email:", error);
      });
  };
  return (
    <div>
      <div className="stillj">
        <img src={con2} />
      </div>
      <div className="stillk">
        <h2>Enquiry Us!</h2>
      </div>
      <div className="form-container">
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                class="item"
                autoComplete="off"
              ></input>
              <div className="error-txt">Full name can't be blank</div>
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Email Address"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="item"
                autoComplete="off"
              ></input>
              <div className="error-txt">Email can't be blank</div>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                placeholder="Mobile Number"
                id="phone"
                class="item"
                autoComplete="off"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              ></input>
              <div className="error-txt">Mobile Number can't be blank</div>
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Purpose to Mail Us"
                id="purpose"
                class="item"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoComplete="off"
              ></input>
              <div className="error-txt">Purpose can't be blank</div>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              placeholder=" Message Here"
              class="item"
              autoComplete="off"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <div className="error-txt">Message can't be blank</div>
          </div>
          <button type="submit">Send Mail</button>
        </form>
      </div>
      <div className="india">
        <img src={And} alt="hi" className="in1" />
      </div>

      <div className="foot2">
        <img src="logo.jpeg" alt="logo" class="logo1" />
        <p>&copy; 2024 Meck Teck Research Foundation.All rights Reserved</p>
      </div>
    </div>
  );
}
