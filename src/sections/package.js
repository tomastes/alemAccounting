/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import PriceCard from "components/price-card";
import SectionHeader from "components/section-header";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import PatternBG from "assets/patternBG.png";

const packages = [
  {
    // header: 'Recommended',
    name: "Basis",
    description: "For everyone",
    priceWithUnit: "$49.99/",
    buttonText: "I want this",
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Verwerken administratie",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: " 50 transacties per maand.",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Aangifte inkomstenbelasting",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Cloudopslag",
        isAvailable: true,
      },
    ],
  },
  {
    name: "PLus",
    description: "voor everyone",
    priceWithUnit: "$69.99/",
    buttonText: "I want this",
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: " Alles van Basis",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "100 transactie per maand",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Aangifte omzetbelasting (kwartaal)",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Persoonlijke begeleiding",
        isAvailable: true,
      },
    ],
  },
  {
    header: "populair",
    name: "Compleet",
    description: "For everyone",
    priceWithUnit: "$109.99/",
    buttonText: "I want this",
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: " Alles van Plus",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "oonberperkt transactie per maand",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Bankkoppeling",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: " 1x per kwartaal Haal- en brengservice van je administratie",
        isAvailable: true,
      },
    ],
  },
 
 
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader title="Let’s see how it works" slogan="Whats the function" isWhite={true} />
        <Flex
          sx={{
            justifyContent: "center",
            flexWrap: ["wrap", null, null, "nowrap"],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    py: [8, null, 9, null, null, 10],
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      background: "linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)",
      width: "100%",
      backgroundSize: "350px 350px",
      height: "100%",
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
