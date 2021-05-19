import { useEffect, useState } from "react";

function Checkout() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    let eventScript;
    const event = document.getElementById("fola-event-script");

    if (event == null) {
      eventScript = document.createElement("script");
      eventScript.setAttribute("async", ""); // Or defer or nothing
      eventScript.setAttribute("id", "fola-event-script");
      eventScript.src =
        "https://www.eventbrite.com/static/widgets/eb_widgets.js";
      const position = document.querySelector("body"); // Or any other location , example head
      position.appendChild(eventScript);
      // document.body.appendChild(eventScript);
      setScriptLoaded(true);
    }

    //Check if window and script is loaded`
    if (typeof window === undefined && !scriptLoaded) {
      console.log("oh no");
    } else {
      console.log("there you go");
      window.EBWidgets.createWidget({
        // Required
        widgetType: "checkout",
        eventId: "155718792099",
        iframeContainerId: "eventbrite-widget-container-155718792099",

        // Optional
        iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: callback, // Method called when an order has successfully completed
      });
    }
  }, [scriptLoaded]);

  return <div id="eventbrite-widget-container-155718792099" />;
}
export default Checkout;
