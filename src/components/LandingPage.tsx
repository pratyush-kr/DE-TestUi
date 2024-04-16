import React from "react";
import styles from "@/styles/components/LandingPage.module.css";

export const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      <header>
        <h1>Welcome to Optum Testing Platform</h1>
        <p>Transforming Testing with AI</p>
      </header>
      <section>
        <h2>Cutting-edge Technologies</h2>
        <ul>
          <li>
            <strong>genAI:</strong> Our proprietary AI technology creates dynamic and robust test cases
            tailored to your application.
          </li>
          <li>
            <strong>Django:</strong> Powering the backend, Django ensures reliability and scalability.
          </li>
          <li>
            <strong>Next.js:</strong> At the frontend, Next.js delivers lightning-fast performance and a
            seamless user experience.
          </li>
        </ul>
      </section>
      <section>
        <h2>Key Features</h2>
        <ul>
          <li>
            Automated Test Case Generation: Say goodbye to manual test case creation. Let genAI handle it for
            you.
          </li>
          <li>
            Intuitive Interface: Our user-friendly interface makes testing a breeze for both developers and QA
            engineers.
          </li>
          <li>
            Scalability: Whether you're a small team or an enterprise, scales effortlessly to meet your needs.
          </li>
        </ul>
      </section>
      <section>
        <h2>Trusted by Leading Companies</h2>
        {/* Add logo carousel or testimonials section */}
      </section>
      <footer>
        <h2>Contact Us</h2>
        <p>Got questions? We're here to help. Reach out to our team at data_externalization@optum.com</p>
      </footer>
    </div>
  );
};
