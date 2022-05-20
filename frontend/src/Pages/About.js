import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const classes = {
  root: {
    margin: "auto",

  },
  intro: {
    backgroundColor: "#EDEDED",
    color: "#000000",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    margin: "auto",
  },
  sec: {
    margin: "auto",
    maxWidth: "1200px",
  },
  secTwo: {
    margin: "auto",
    maxWidth: "1200px",
    marginTop: "5rem",
    paddingLeft: "20px !important",
  },
  container: {
    width: "100%",
    display: "flex",
  },
  containerSecond: {
    width: "100%",
    display: "flex",
    marginTop: "4rem",
  },
  containerThird: {
    width: "100%",
    display: "flex",
    marginLeft: "-19px !important",
  },
  filter: {
    width: "100%",
    justifyContent: "right",
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "blue",
    fontFamily: "Roboto",
    marginTop: "10rem",
  },
};

export const About = () => {
  
  return (
    <div style={classes.root}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        id="procedurePage"
      >
        <Grid item xs={12} style={classes.intro}>
          {/* HEADER */}
          <div style={classes.sec}>
            <Typography variant="h4" component="div" gutterBottom>
              Meist
            </Typography>
            {/* INTRO TEXT */}
            <Typography variant="h6" component="div" gutterBottom mt={5} mb={3}>
              Oleme eksklusiivne loodusravi ja spaakeskus. Pakume erakordset
              võimalust vabanemiseks tervistkahjustavatest harjumustest – teie
              teekond ravimiteta tervisliku eluviisi poole algab siit!
              <br></br>
              <br></br>
              Loodus BioSpa pakub professionaalseid organismi puhastamise, noorendamise ja kaalulangetamise programme Põhjamaade parimate spetsialistide hoole all.
            </Typography>
          
          </div>
        </Grid>
      </Grid>
      <div style={classes.secTwo}>
          <Typography variant="h4" component="div" gutterBottom>
              Meie ajalugu
          </Typography>

          <Typography variant="h6" component="div" gutterBottom mt={5} mb={3}>
          <b>22 aastat tagasi asutas Loodus BioSpa-d Dr. Med. Natalia Trofimova, kes on ühtlasi meie peaarst-dietoloog ning Eestis sel alal enimmüüdud raamatu “Paastuga terveks” autor.</b>
          <br></br>
          <br></br>
          Oleme siiamaani jäänud perekondlikuks ettevõtteks, mille eesmärk on aidata inimestel astuda nende tervisliku tuleviku teekonnale.
          <br></br>
          <br></br>
          Meie meeskond koosneb kõrgelt treenitud ja kogemusega spetsialistidest ja meditsiinitöötajatest, kes kindlustavad teie viibimise ajal professionaalse tervise järelvalve ja rahuliku ning meeldiva keskkonna.
          </Typography>
          
      </div>
  </div>
  ) 
};