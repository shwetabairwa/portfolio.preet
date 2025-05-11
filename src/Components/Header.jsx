import React from "react";
import profileImage from "../assets/images/profileImage.jpeg"; // Optional image

const styles = {
  header: {
    backgroundColor: "#f9fafb", // Tailwind's bg-gray-50
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  container: {
    maxWidth: "112rem",
    margin: "0 auto",
    padding: "4rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageSection: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5rem",
    order: 1,
  },
  textSection: {
    width: "100%",
    marginBottom: "2rem",
    textAlign: "center",
    paddingLeft: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    order: 2,
  },
  introText: {
    display: "block",
    fontSize: "1.25rem",
    color: "#eab308", // yellow-500
    marginBottom: "0.5rem",
  },
  name: {
    fontSize: "3.75rem",
    fontWeight: "bold",
    color: "#111827",
    margin: "0",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#eab308",
    textTransform: "uppercase",
    lineHeight: "1.2",
    margin: "0",
  },
  paragraph: {
    marginTop: "0.75rem",
    fontSize: "0.875rem",
    color: "#4b5563",
    maxWidth: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonsWrapper: {
    marginTop: "2rem",
  },
  downloadBtn: {
    padding: "0.75rem 1.5rem",
    fontSize: "1.125rem",
    fontWeight: "500",
    color: "#ffffff",
    backgroundColor: "#16a34a",
    border: "none",
    borderRadius: "0.375rem",
    cursor: "pointer",
    textDecoration: "none",
    marginRight: "0.75rem",
  },
  contactBtn: {
    padding: "0.75rem 1.5rem",
    fontSize: "1.125rem",
    fontWeight: "500",
    color: "#15803d",
    backgroundColor: "#dcfce7",
    border: "none",
    borderRadius: "0.375rem",
    cursor: "pointer",
    textDecoration: "none",
  },
};

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Image Section */}
        <div style={styles.imageSection}>
          <img
            src={profileImage}
            alt="Pooja Verma"
            style={{
              height: "20%",
              width: "20%",
              objectFit: "cover",
              borderRadius: "9999px",
              backgroundColor: "#facc15",
            }}
          />
        </div>

        {/* Text Section */}
        <div style={styles.textSection}>
          <span style={styles.introText}>Hello, I am</span>
          <h1 style={styles.name}>Pooja Verma,</h1>
          <h1 style={styles.title}>Digital Marketer</h1>
          <p style={styles.paragraph}>
            Hi, I'm Pooja Verma, a digital marketing expert from Gurugram. I
            love helping businesses grow online. I'm really good at using tools
            like Google My Business, social media, Google Ads, and Meta Ads to
            reach more people and get better results. I use data to make smart
            decisions and create campaigns that really work. I want to help you
            make your brand more visible and connect with your customers in a
            meaningful way. Let's work together to take your business to the
            next level!
          </p>
          <div style={styles.buttonsWrapper}>
            <a
              href="/Digital Marketer_2+yr_Exp_Resume_PoojaVerma.pdf"
              download
              style={styles.downloadBtn}
            >
              Download CV
            </a>
            <a href="#contact" style={styles.contactBtn}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
