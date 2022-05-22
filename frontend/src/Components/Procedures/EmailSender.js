// !! https://www.youtube.com/watch?v=kQTCLap8tvo&t=2566s
// https://www.youtube.com/watch?v=o3eR0X91Ogs

import React, { useContext } from "react";

import { GlobalContext } from "./../../Context";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import axios from "axios";
import { useState } from "react";
import sending from "../../Images/sending.svg";
import "../../index.css";

function EmailSender(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [letter, setLetter] = useState(""); // Hook for creating letter
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const { proceduresValue, setProceduresValue } = useContext(GlobalContext); // Catches chosen Procedures in Tabel

  const handleRequest = async (e) => {
    e.preventDefault(); // stops the default action of a selected element
    // Email validation
    const regexTest = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g);

    setNameError(false);
    setEmailError(false);
    setSubjectError(false);
    setMessageError(false);

    //  Form validation
    name === "" ? setNameError(true) : setName("");

    !email.match(regexTest) ? setEmailError(true) : setEmail("");

    subject === "" ? setSubjectError(true) : setSubject("");

    message === "" ? setMessageError(true) : setMessage("");

    if (name && email && subject && message !== "" && email.match(regexTest)) {
      setLoading(true);

      // Adding array of procedures to Rest Api, if Checkbox is checked - add to Api

      console.log({ email, message, name, subject }); // TODO see the object in console

      const chosenProcedures = proceduresValue
        .map((n) => `procedures=${n}`)
        .join("&"); // Take props, mapp it and with query param join

      // Rest Api with query parameters
      const response = await axios
        .post(
          `http://localhost:4000/api/mail/sendmail?name=${name}&email=${email}&subject=${subject}&message=${message}&${chosenProcedures}`
        )
        .then((res) => {
          setLetter(response.data);
          alert("Email Sent Successfully");
          setLoading(false);
          console.log(res);
          console.log(setProceduresValue);
          console.log(letter);
        });
    }
  };

  return (
    <form onSubmit={handleRequest} method="POST">
      <Typography variant="h6" component="div" gutterBottom mt={7} mb={3}>
        {loading
          ? "Saadetakse..."
          : "Sisestage palun andmed, et saada otsimise tulemus oma emailile"}
      </Typography>

      {loading && (
        <img
          src={sending}
          alt="loading..."
          style={{
            filter: "none",
            position: "absolute",
            width: 100,
            height: 100,
            top: "50%",
            left: "50%",
            justifyContent: "center",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      <Grid container spacing={5}>
        {/* --------------------- Name ---------------------------- */}

        <Grid item xs={12} sm={6} md={6}>
          <Tooltip
            title={<Typography fontSize={20}>Sisestage nimi</Typography>}
          >
            <Box mb={2}>
              <TextField
                // data-private Hides Input Data in LogRocket Video
                data-private="lipsum"
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                variant="outlined"
                label="Nimi"
                fullWidth
                autoComplete="name"
                error={nameError}
              />
            </Box>
          </Tooltip>
        </Grid>

        {/* ---------------------- Email with validation -------------------- */}

        <Grid item xs={12} sm={6} md={6}>
          <Tooltip
            title={
              <Typography fontSize={20}>Sisestage e-posti aadress</Typography>
            }
          >
            <Box mb={2}>
              <TextField
                // data-private Hides Input Data in LogRocket Video
                data-private="lipsum"
                id="email"
                data-testid="email-input"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                variant="outlined"
                label="E-post"
                fullWidth
                autoComplete="email"
                error={emailError}
              />
              {email &&
                !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g.test(email) && (
                  <span className="error" data-testid="error-msg">
                    Palun sisestage aadress õigesti.
                  </span>
                )}
            </Box>
          </Tooltip>
        </Grid>
      </Grid>

      {/* ------------------------------- Second grid with subject and message ---------------------------- */}

      <Grid container spacing={5}>
        {/* ------------------------- Subject  -------------------------- */}

        <Grid item xs={12} sm={6} md={6}>
          <Tooltip
            title={<Typography fontSize={20}>Sisestage teema</Typography>}
          >
            <Box mb={2}>
              <TextField
                // data-private Hides Input Data in LogRocket Video
                data-private="lipsum"
                id="subject"
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                variant="outlined"
                label="Teema"
                fullWidth
                error={subjectError}
              />
            </Box>
          </Tooltip>
        </Grid>

        {/* -------------------------- Message  -------------------------- */}

        <Grid item xs={12} sm={6} md={6}>
          <Tooltip
            title={<Typography fontSize={20}>Sisestage sõnum</Typography>}
          >
            <TextField
              // data-private Hides Input Data in LogRocket Video
              id="message"
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              label="Sisu"
              multiline
              rows={3}
              error={messageError}
            />
          </Tooltip>
        </Grid>
      </Grid>
      {/* ------------------------- Button --------------------------------- */}
      <Grid item xs={12} sm={6} md={6}>
        <Button
          id="buttonEmail"
          data-testid="button"
          disabled={email === ""}
          onClick={() => {
            handleRequest(name, email, subject, message);
          }}
          type="submit"
          variant="contained"
        >
          Saada emailile
        </Button>
      </Grid>
    </form>
  );
}

export default EmailSender;
