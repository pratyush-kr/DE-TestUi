import { Header } from "@/components/Header";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { LandingPage } from "@/components/LandingPage";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.body}>
        <LandingPage />
      </div>
      <Footer />
    </div>
  );
}
