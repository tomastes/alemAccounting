/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from "theme-ui";
import SectionHeader from "components/section-header";
import Rating from "components/rating";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";

import Avatar1 from "assets/natu2.JPG";
import Avatar2 from "assets/ambaAvatar.JPG";
import Avatar3 from "assets/edenAvatar.jpeg";
import Avatar4 from "assets/yodit.jpeg";


const data = [
  {
    id: 1,
    title: "AMBA (bedrijfsadministrateur)",
    description:
      "Mijn naam is Amba, ik studeer voor juridisch administratief medewerker. Bovendien heb ik de studie bedrijfsadministrateur gevolgd en help ik ondernemers met hun administratie. Met u kan ik ieder half jaar de voortgang van uw bedrijf bespreken en advies geven om uw bedrijf gezond te laten groeien.",
    avatar: Avatar2,
    name: "Ambasajir Fiseha",
    // designation: "@email.com",
    review: 4,
  },
  {
    id: 2,
    title: "NATU",
    description:
      "Natnael,  Met veel ervaring en verantwoordelijkheid, daarnaast de wil om mensen te helpen die moeite hebben met administratie ofwel boekhouding. Wij zien jouw bedrijf groeien.",
    avatar: Avatar1,
    name: "NATNAEL TESFAHUN ",
    // designation: "@email.com",
    review: 5,
  },
  {
    id: 3,
    title: "EDEN",
    description:
      <span>Eden ,<br /> Ik studeer financieel administratie en accountant afgerond in Eritrea. Graag help ik ondernemers bij hun administratie.       <br />      ‘’laten we samen naar de Top’’.</span>,
    avatar: Avatar3,
    name: "EDEN  ",
    // designation: "@email.com",
    review: 5,
  },
  {
    id: 4,
    title: "Yodit",
    avatar: Avatar4,
    description:
    `Yodit, Ik  heb Bedrijfsadministratie afgerond (nog de wil om te groeien in kennis) 
    en heb werkervaring als financieel administratief medewerker. Volledig bereid om u te helpen met uw administratie. Laat de administratieve taken aan ons over en concentreer u op de groei van uw bedrijf. samen staan wij sterker!`,
     name: "Yodit",
     review: 5,
  }
 
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 3,
    // slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    // slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    // slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    // slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Accountants() {
  return (
    <section id="testimonial" sx={{ variant: "section.testimonial" }}>
      <Container>
        <SectionHeader slogan="" title="Meet Our ALEM ACCOUNTANTS" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              {/* <Rating rating={item.review} /> */}
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image"><Image src={item.avatar} alt="Client Image" /></div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-35px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: ["100%", null, null, "750px", "1000px", "1180px", null, "calc(50% + 865px)"],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    minHeight:"500px",
    borderRadius: "6px",
    p: ["30px 20px 35px", "30px 25px 35px", "30px 20px 35px", "35px 30px 40px 40px", "30px 30px 35px", "35px 30px 40px 40px"],
    bg: "white",
    textAlign: "left",
    m: ["28px 5px 30px 5px", "28px 20px 30px 20px", "28px 15px 30px 15px", "28px 15px 30px 15px", "30px 20px 40px"],
    "&:hover": {
      boxShadow: "0px 6px 47px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "yellow",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "#25A0FF",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
};
