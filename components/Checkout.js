import { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    minHeight: "100vh",
  },
}));

function Checkout() {
  const classes = useStyles();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // console.log("addScript");
    const eventScript = document.createElement("script");

    // eventScript.setAttribute("async", ""); // Or defer or nothing
    eventScript.setAttribute("id", "fola-event-script");

    eventScript.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    const position = document.querySelector("body"); // Or any other location , example head
    position.appendChild(eventScript);
    // document.body.appendChild(eventScript);
    // setScriptLoaded(true);

    return () => {
      // cleanup;
      // console.log("cleanup");
      // document.body.removeChild(eventScript);
    };
  }, []);

  useEffect(() => {
    // console.log("addWidget");

    const eventCount = document.querySelectorAll(
      "[id=fola-event-script]"
    ).length;

    // console.log(`eventcount: ${eventCount}`);

    // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    var callback = function () {
      // console.log("Order complete!");
      // document.body.removeChild(eventScript);
    };

    setTimeout(() => {
      // do something 1 sec after script has loaded
      setScriptLoaded(true);
      // if (window.EBWidgets != undefined && scriptLoaded == true) {

      // }

      if (typeof window !== "undefined" && eventCount == 1) {
        // Firstly, get the iframe
        // frame = window.frames[iFrameID];
        const frame = window.EBWidgets;
        if (frame) {
          // console.log("there you go");
          frame.createWidget({
            // Required
            widgetType: "checkout",
            eventId: "155718792099",
            iframeContainerId: "eventbrite-widget-container-155718792099",

            // Optional
            iframeContainerHeight: vh, // 568, // Widget height in pixels. Defaults to a minimum of 425px if not provided

            onOrderComplete: callback, // Method called when an order has successfully completed
          });

          // cont = frame.contentWindow || frame.contentDocument;

          // // cont might be the iFrame window or the document
          // if (cont) {
          //   doc = cont.document || cont;

          //   // For current browsers that don't have the above
          // } else {
          //   doc = frame.document;
          // }

          // If have a document, set the vaue of location.href
          //   if (doc && doc.location) {
          //     doc.location.href = href;
          // }
        }
      }
      return () => {
        // cleanup;
        // console.log("cleanup2");
      };
    }, 2000);
  }, []);

  return !scriptLoaded ? (
    <div className={classes.root}>
      {/* <CircularProgress /> */}
      <Grid container alignItems={"center"} justify={"center"}>
        <CircularProgress />
      </Grid>
    </div>
  ) : (
    <div id="eventbrite-widget-container-155718792099" />
  );
}
export default Checkout;
