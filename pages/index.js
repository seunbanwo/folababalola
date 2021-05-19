import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
// const Index = () => <Gallery />;

// export default Index;

// import Banner from "../components/Banner-old";
// import Loader from "../components/Loader-old";
// import Header from "../components/Header-old";

// Components
// import Header from "../components/Header";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Loader from "../components/Loader";

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
        <Layout>
          <Banner />

          {/* {!loading && (
            <div className="transition-image final">
              <motion.img
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                // src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                src={`/images/image-2.jpg`}
                layoutId="main-image-1"
              />
            </div>
          )} */}
        </Layout>
      )}
    </>
  );
}

export default Index;
