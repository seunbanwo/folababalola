import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Gallery from "../components/Gallery";

// const Index = () => <Gallery />;

// export default Index;

import Banner from "../components/Banner";
import Loader from "../components/Loader";
import Header from "../components/Header";

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Header />
          <Gallery />
          <Banner />

          {/* {!loading && (
            <div className="transition-image final">
              <motion.img
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                // src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                // src={`/images/fola-babalola50-cover.png`}
                src={`/images/fola-in-white.jpg`}
                layoutId="main-image-1"
              />
            </div>
          )} */}
        </>
      )}
    </>
  );
}

export default Index;
