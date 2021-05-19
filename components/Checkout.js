import { useEffect, useState } from "react";

function Checkout() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    let eventScript;
    const eventCount = document.querySelectorAll(
      "[id=fola-event-script]"
    ).length;
    // document.getElementById("fola-event-script");

    // console.log(eventCount);

    if (scriptLoaded == false) {
      // console.log("creatScript");
      // const script = document.createElement('script');
      eventScript = document.createElement("script");

      eventScript.setAttribute("async", ""); // Or defer or nothing
      eventScript.setAttribute("id", "fola-event-script");

      // script.src = "source-of-script";
      eventScript.src =
        "https://www.eventbrite.com/static/widgets/eb_widgets.js";
      const position = document.querySelector("body"); // Or any other location , example head
      position.appendChild(eventScript);
      // document.body.appendChild(eventScript);
      setScriptLoaded(true);
    }

    if (
      window.EBWidgets != undefined &&
      eventCount == 1 &&
      scriptLoaded == true
    ) {
      // console.log("there you go");
      // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );

      // const ebWidget = window.EBWidgets;

      window.EBWidgets.createWidget({
        // Required
        widgetType: "checkout",
        eventId: "155718792099",
        iframeContainerId: "eventbrite-widget-container-155718792099",

        // Optional
        iframeContainerHeight: vh, // 568, // Widget height in pixels. Defaults to a minimum of 425px if not provided

        onOrderComplete: callback, // Method called when an order has successfully completed
      });
    }

    var callback = function () {
      console.log("Order complete!");
      // document.body.removeChild(eventScript);
    };
  }, [scriptLoaded]);

  return <div id="eventbrite-widget-container-155718792099" />;
}
export default Checkout;
