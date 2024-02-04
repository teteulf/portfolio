import Layout from "./layout";
import Transition from "./transition";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function MyApp({ Component, pageProps }) {
  const path = usePathname();
  return (
    <main>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={path.pathname} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </main>
  );
}
