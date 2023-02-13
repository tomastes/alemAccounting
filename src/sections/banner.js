/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Flex, Box, Heading, Text, Image, Button } from "theme-ui";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-scroll";
import { FaPlayCircle } from "react-icons/fa";
import BannerBG from "assets/bannerBg.png";
import BannerThumb from "assets/banner.jpeg";

import client1 from "assets/sponsor/paypal.svg";
import client2 from "assets/sponsor/google.svg";
import client3 from "assets/sponsor/dropbox.svg";
import { TypeAnimation } from "react-type-animation";

const data = [
  {
    id: 1,
    path: "#",
    image: client1,
    title: "paypal",
  },
  {
    id: 2,
    path: "#",
    image: client2,
    title: "google",
  },
  {
    id: 3,
    path: "#",
    image: client3,
    title: "dropbox",
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="p" variant="heroPrimary">
            '✋🏾' WELCOME FROM ALEMACCOUNTING
          </Heading>
          <Box sx={{ height: "300px" }}>
            <TypeAnimation
              color="white"
              // Same String at the start will only be typed once, initially
              sequence={[
                "Dé boekhouder voor MKB ,ZZP'ers ,VOF ,Starters",
                1000,
                "Complete boekhouding vanaf €49,- per maand",
                1000,
                "Persoonlijk advies voor jou en jouw onderneming",
                1000,
                "Tips voor meer belastingvoordeel",
                1000,
              ]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "2em" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </Box>
          <Flex>
            <Link activeClass="active" to={"contact"} spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="whiteButton" aria-label="Get Started">
                Contact
              </Button>
            </Link>
            <>
              <ModalVideo channel="youtube" isOpen={videoOpen} videoId="" onClose={() => setVideoOpen(false)} />
              <Button variant="textButton" aria-label="Watch Video" onClick={handleClick}>
                <FaPlayCircle /> Watch Video
              </Button>
            </>
          </Flex>
          <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>works together:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {/* {data.map((item, index) => (
                <Link path={item.path} key={`client-key${index}`}>
                  <Image src={item.image} alt={item.title} />
                </Link>
              ))} */}
              {/* <Image src={data[1].image} alt={data[1].title} /> */}
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>{/* <Image src={BannerThumb} alt="banner" /> */}</Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ["hidden", "initial", null, "hidden"],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ["150px", null, null, null, null, null, "140px", "130px"],
    pb: ["100px", null, null, "110px", null, 10, "150px"],
    backgroundColor: "secondary",
    container: {
      display: "flex",
    },
    contentBox: {
      width: ["100%", null, "85%", "55%", "50%", "55%"],
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ["none", null, null, "block"],
      justifyContent: "center",
      ml: [0, null, null, "-110px", "-115px", "-150px", "-210px", "-270px"],
      mr: [0, null, null, "-145px", "-160px", "-180px", "-220px", "-290px"],
      mt: [0, null, null, "40px", 4, 7, 0],
      mb: [0, null, null, null, "-45px", "-70px", null, "-115px"],
      overflow: "hidden",
      textAlign: "right",
      width: "50%",
    },
  },
  sponsorTitle: {
    color: "white",
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ["35px", null, null, null, null, "45px"],
    flexDirection: ["column", null, "row"],
    sponsor: {
      display: "flex",
      alignItems: "center",
      "> a": {
        mr: [5, null, null, 4, 6],
        display: "flex",
        "&:last-of-type": {
          mr: 0,
        },
      },
    },
  },
};
