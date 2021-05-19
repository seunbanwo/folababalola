import { useEffect, useState } from "react";

function Checkout() {
  const [isEventbriteLoaded, setEventbriteState] = useState(false);

  useEffect(() => {
    var callback = function () {
      console.log("Order complete!");
    };
    const eventScript = document.createElement("script");
    eventScript.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    document.body.appendChild(eventScript);
    //   window.addEventListener("message", this.receiveMessage, false);
    if (window.EBWidgets !== undefined) {
      setEventbriteState(true);
      console.log("eventbritestate true");
    } else {
      //   setEventbriteState(false);
      console.log("eventbritestate false");
    }

    if (isEventbriteLoaded) {
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
    return () => {
      document.body.removeChild(eventScript);
    };
  }, [isEventbriteLoaded]);

  return <div id="eventbrite-widget-container-155718792099" />;
}

export default Checkout;
