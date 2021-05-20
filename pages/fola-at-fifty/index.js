import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
// import Loader from "../../components/Loader";
// import LoaderWithAnimation from "../../components/LoaderWithAnimation";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import CenterLoader from "../../components/CenterLoader";
import { makeStyles } from "@material-ui/core/styles";
// import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  content: {
    // position: "relative",
    // bottom: 0,
    paddingBottom: "200px",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
}));

function Jubilee() {
  const classes = useStyles();
  // const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);
  // useEffect(() => {
  //   loading
  //     ? document.querySelector("body").classList.add("loading")
  //     : document.querySelector("body").classList.remove("loading");
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      // do something 1 sec after
      setLoading(false);

      return () => {
        // cleanup;
        // console.log("cleanup2");
      };
    }, 500);
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <motion.div key="loader">
          {/* <Loader setLoading={setLoading} /> */}
          {/* <LoaderWithAnimation setLoading={setLoading} /> */}
          <CenterLoader />
        </motion.div>
      ) : (
        <Layout>
          <Banner hasBottom={true} />
          <div className="transition-image final">
            <motion.img
              transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
              // src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
              // src={`/images/image-2.jpg`}
              src={`/images/invite.png`}
              layoutId="main-image-1"
            />
          </div>
          <div className={classes.content}>
            <Container maxWidth="lg">
              <Grid container justify={"center"} spacing={8}>
                <Grid item xs={10}>
                  <Typography variant={"h1"} align={"center"}>
                    Wah Gwaan
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="lg">
              <Grid container justify={"center"} spacing={8}>
                <Grid item xs={10}>
                  <Typography variant={"h3"} align={"center"}>
                    In about 7 months' time, Dec 2021, you will arrive at the
                    Grand Palladium Jamaica Resort & spa, an all-inclusive hotel
                    with direct access to the beach in the famous zone of
                    Montego Bay.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="lg">
              <Grid container justify={"center"} spacing={8}>
                <Grid item xs={10}>
                  <Typography variant={"h4"} align={"center"}>
                    We welcome you to a week-long birthday experience with FOLA
                    BABALOLA AT 50. We would like to officially invite you to
                    the special event filled with adventure, great fun,
                    all-inclusive food, laughter, great friends, and memories.
                    We would love for you to join us on this voyage. It's also a
                    perfect getaway to celebrate the Christmas season close to
                    those we love.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="md">
              <Grid container justify={"center"} spacing={8}>
                <Grid item xs={10}>
                  <Typography variant={"h6"} align={"center"}>
                    Between the white shores and warm Carribean waters, you'll
                    find a vacation sanctuary, a temple of tranquility where
                    you'll be able to enjoy nature in its purest form. Located
                    on the northen coast of Jamaica in the land of Lucea, the
                    Grand Palladium is close to a variety of interesting cities,
                    golf courses, and shopping centers. Exploring each corner of
                    the area will be a unique experience after charging your
                    energy in comfortable rooms and Balinese beds.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="md">
              <Grid container justify={"center"} spacing={8}>
                <Grid item xs={10}>
                  <Typography variant={"h5"} align={"center"}>
                    You can download a copy of the program of events by clicking
                    on the Guide button below.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="md">
              <Grid container justify={"center"} spacing={8}>
                <Grid item xs={10}>
                  <Typography variant={"h4"} align={"center"}>
                    Please RSVP Now by clicking the button below to experience
                    this life changing experience with me. I'm looking forward
                    to seeing you in Jaimaca and lets have a good time. "Kick Up
                    Rumpus".
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="md">
              <Grid container justify={"center"} spacing={8}>
                <Grid item xs={10}>
                  <Typography variant={"h6"} align={"center"}>
                    NOTE: RSVP reserves your space and helps us in planning.
                    Only a few seats left. Reservation closes on the 1st of
                    June.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="md">
              <Grid container justify={"space-around"} spacing={10}>
                <Grid item xs={6} sm={6} md={3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      alert("clicked");
                    }}
                    // classes={{
                    //   root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    //   label: classes.label, // class name, e.g. `classes-nesting-label-x`
                    // }}
                  >
                    Guide
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                  <a href="/fola-at-fifty/rsvp">
                    <Button
                      variant="contained"
                      color="secondary"
                      // onClick={() => {
                      //   router.push("/fola-at-fifty/rsvp");
                      // }}
                      // classes={{
                      //   root: classes.root, // class name, e.g. `classes-nesting-root-x`
                      //   label: classes.label, // class name, e.g. `classes-nesting-label-x`
                      // }}
                    >
                      RSVP
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Layout>
      )}
    </>
  );
}

export default Jubilee;
