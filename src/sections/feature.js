/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Smart from "assets/feature/smart.svg";
import Winner from "assets/feature/winner.svg";
import Cloud from "assets/feature/cloud.svg";
import Setting from "assets/feature/setting.svg";
import Design from "assets/feature/design.svg";
import Chat from "assets/feature/chat.svg";

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: "Smart",
    title: "Scherpe prijs",
    text: "Met een vaste lage prijs weet je precies waar je aan toe bent",
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: "Performance",
    title: "Persoonlijke support",
    text: "We denken graag met je mee om het beste uit je onderneming te halen",
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: "Content",
    title: "Online boekhouding",
    text: "Volledig papierloos werken,veilig in de cloud",
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: "Customization",
    title: "Facturatie",
    text: "Professioneel factureren in ons boekhoudpakket",
  },
  {
    id: 5,
    imgSrc: Design,
    altText: "Productivity",
    title: "Elke dag bereikbaar",
    text: "Niet alleen tussen 9 en 5, maar ook in de avond en het weekend bereikbaar",
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: "Support",
    title: "Financiële analyse",
    text: "Met financiële analyses weet jij hoe je onderneming ervoor staat",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          title="Waarom onze klanten kiezen voor ALEMACCOUNTNG
"
          // title="Meet exciting feature of app"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard key={item.id} src={item.imgSrc} alt={item.title} title={item.title} text={item.text} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ["37px 0", null, "45px 30px", null, "50px 30px", null, null, "90px 70px"],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)", null, "repeat(3,1fr)"],
  },
};
