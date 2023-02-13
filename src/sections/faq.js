/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";
import PatternBG from "assets/patternBG.png";

const faqs = [
  {
    title: "Welke belastingen moet ik als ondernemer betalen?",
    contents: (
      <div>
        Als je naast de werkzaamheden in de onderneming ook nog in loondienst werkt heb je eens per jaar (maart/april) je aangifte over je inkomstenbelasting. Als je voor je bedrijf ook nog
        btw-plichtig bent, heb je elk kwartaal ook nog eens een btw-aangifte in te dienen. In principe geldt dit voor iedereen tenzij je een btw-vrijstelling hebt (bijvoorbeeld als zorgmedewerker).
        <br />
        eerste kwartaal: van 01-01 t/m 31-03, uiterlijke indienings- en betaaldatum is 30 april <br /> tweede kwartaal: van 01-04 t/m 30-06, uiterlijke indienings- en betaaldatum is 30 juli <br />
        derde kwartaal: van 01-07 t/m 30-09, uiterlijke indienings- en betaaldatum is 31 oktober <br /> vierde kwartaal: van 01-10 t/m 31-12, uiterlijke indienings- en betaaldatum is 31 januari
      </div>
    ),
  },
  {
    title: "Hoe weet ik welk btw-percentage ik moet kiezen?",
    contents: (
      <div>
        Als je een factuur maakt is het belangrijk om te weten dat je wel het juiste tarief hanteert. 21% btw: Het algemene btw-tarief van 21% geldt voor alle producten en diensten die niet zijn
        vrijgesteld, en die niet onder het 9%-tarief of het 0%-tarief vallen. 9% btw: 9% is het verlaagde btw-tarief. Het geldt onder meer voor etenswaren en sommige diensten. 0% btw: Voor een aantal
        goederen en diensten geldt het 0%-tarief. Je berekent dan geen btw, maar btw die je betaalt over uw uitgaven, kunt u wel aftrekken als voorbelasting. Het 0%-tarief kan gelden als je zaken doet
        met het buitenland. En in een aantal gevallen voor de visserij en de bevoorrading van zeeschepen. Vrijstellingen van btw: In een aantal branches en voor een aantal activiteiten bent u
        vrijgesteld van btw. Jij brengt dan geen btw in rekening. De btw-vrijstelling geldt voor een aantal sectoren, zoals de zorgsector, de erkende kinderopvang, het onderwijs, uitvaartondernemers
        en meer. Kijk voor alle regels omtrent belastingen op de website van de Belastingdienst
      </div>
    ),
  },
  {
    title: `Moet ik zelf ook nog mijn facturen bewaren?`,
    contents: (
      <div>
        Wij bewaren alle documenten op in onze online cloudomgeving, hiermee kan jij ervan uitgaan dat alle documenten veilig bewaard zijn. Daarnaast heb jij zelf ook een verplichting om documenten
        tot wel 7 jaar te bewaren, voor het geval de belastingdienst je documenten wilt controleren.
      </div>
    ),
  },
  {
    title: `Hoe weet ik welk pakket geschikt is voor mij?`,
    contents: (
      <div>
        Je wilt natuurlijk wel weten welk pakket het beste bij jou aansluit. Geen zorgen, als je twijfelt kun je altijd contact met ons opnemen. Wij zullen dan samen kijken welk pakket voor jou
        geschikt is. Zo kunnen we een perfect pakket vinden die bij jouw type bedrijf en behoefte past.
      </div>
    ),
  },
  {
    title: `Hoe lever ik mijn documenten aan?`,
    contents: (
      <div>
        Bij elk abonnement kun je de administratie digitaal via de cloud uploaden. Als je toch graag zou willen dat we de papieren facturen ontvangen, dan is dat natuurlijk mogelijk. Door zo veel
        mogelijk digitaal te werken en minder te rijden voor administratie, houden we de wereld een stukje schoner, da's voor iedereen fijn!
      </div>
    ),
  },
  {
    title: `Kan ik tussendoor van pakket wijzigen?
`,
    contents: <div>Tuurlijk, we zullen in overleg de abonnementskosten verhogen of verlagen, afhankelijk van je nieuwe abonnement. Flexibiliteit is onze tweede naam.</div>,
  },
];
export default function Faq() {
  return (
    <section id="faq" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Veelgestelde vragen
"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: "gray",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    color: "white",
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
