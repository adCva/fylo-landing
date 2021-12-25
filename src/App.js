import './App.css';
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Details from "./Components/Details/Details";
import EarlyAccess from "./Components/EarlyAccess/EarlyAccess";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero heroTitle="All your files in one secure location, accessible anywhere." heroDescription="Fylo stores your most important files in one secure location. 
          Access them wherever you need, share and collaborate with friends, 
          family, and co-workers." 
      />
      <Details detailsHeader="Stay productive, wherever you are" detailsParagraphA="Never let location be an issue when accessing your files. Fylo has you 
          covered for all of your file storage needs." detailsParagraphB="Securely share files and folders with friends, family and colleagues for 
          live collaboration. No email attachments required!" detailsBtn="See how Fylo works" detailsCardParagraph="  Fylo has improved our team productivity by an order of magnitude. Since 
          making the switch our team has become a well-oiled collaboration machine." detailsCardName="Kyle Burton" detailsCardTitle="Founder & CEO, Huddle" 
      />

    <EarlyAccess earlyAccessHeader="Get early access today" earlyAccessParagraph="It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you." />
    <Footer phone="Phone: +1-543-123-4567" email="example@fylo.com" />
    </div>
  );
}

export default App;
