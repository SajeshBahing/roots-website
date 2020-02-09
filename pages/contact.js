import Header from "../components/header";
import Footer from "../components/footer";
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { withStyles } from '@material-ui/core/styles';

const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#007D98',
    },
    '& .MuiInput-underline:after': {
      borderBottom: '2px solid #007D98',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderColor: "#007D98"
    },
    '& .MuiInput-input': {
      color: '#007D98 !important'
    },
    '& .MuiFilledInput-multiline': {
      background: 'white',
      border: "1px solid rgba(0,0,0,0.37)",
      borderBottom: '0'
    },
    '& .MuiFilledInput-input' : {
      background: 'white',
      color: '#007D98'
    },
    '& .MuiFilledInput-underline:after':{
      borderColor: '#007D98'
    },
    '& .MuiFilledInput-underline:hover:before' : {
      borderColor: '#007D98'
    }
  },
})(TextField);

export default function Contact() {
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();

  function HandleSubmit(event)
  {
    event.preventDefault();

    console.log(companyName);
    console.log(name);
    console.log(email);
    console.log(message);

    router.push("/message");
  }

  return (
    <div>
      <Header currentPage="contact" />

      <section className="background-blue padding50">
        <div className="container">
          <h1 className="website-header">How can we help?</h1>
        </div>
      </section>

      <section className="padding50">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={HandleSubmit} >
                <div className="form-group">
                  <CustomTextField
                    onChange={(e) => setCompanyName(e.target.value)}
                    id="companyName"
                    className="w-100"
                    required
                    label="Company name"
                  />
                </div>

                <div className="form-group">
                  <CustomTextField
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    className="w-100"
                    required
                    label="Name"
                  />
                </div>

                <div className="form-group">
                  <CustomTextField
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    className="w-100"
                    label="Email"
                    required
                    type="email"
                  />
                </div>

                <div className="form-group">
                  <CustomTextField
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    className="w-100"
                    label="Message"
                    multiline
                    rows="4"
                    required
                    variant="filled"
                  />
                </div>

                <div className="form-grop">
                  <button type="submit" className="learn-more-button">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}