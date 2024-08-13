import { ArrowDropDown } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export default function List() {
  return (
    <section className="container mx-auto mb-12">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Industries We Serve
      </h1>
      <div className="md:grid grid-cols-2 gap-10 px-2">
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
              id="panel-header-commercial"
              aria-controls="panel-content-commercial"
            >
              Commercial Offices
            </AccordionSummary>
            <AccordionDetails>
              At GSR General Services of RVA, LLC, we provide comprehensive
              janitorial services for commercial office spaces. Our team ensures
              a clean, organized, and professional environment to enhance
              productivity and leave a lasting impression.
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
              id="panel-header-corporate"
              aria-controls="panel-content-corporate"
            >
              Corporate Facilities
            </AccordionSummary>
            <AccordionDetails>
              We specialize in maintaining corporate facilities with meticulous
              cleaning practices. Our services help uphold a high standard of
              cleanliness, promoting a healthy and welcoming atmosphere for
              employees and visitors.
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
              id="panel-header-healthcare"
              aria-controls="panel-content-healthcare"
            >
              Healthcare Facilities
            </AccordionSummary>
            <AccordionDetails>
              GSR General Services of RVA, LLC offers expert janitorial services
              for healthcare facilities. We adhere to strict hygiene standards
              to ensure a sanitary environment that supports patient care and
              staff safety.
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
              id="panel-header-data"
              aria-controls="panel-content-data"
            >
              Data Centers
            </AccordionSummary>
            <AccordionDetails>
              Our janitorial services for data centers are designed to meet the
              highest standards of cleanliness and organization, ensuring that
              your critical infrastructure operates smoothly and remains free
              from dust and debris.
            </AccordionDetails>
          </Accordion>
        </div>
        <br className="md:hidden" />
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
              id="panel-header-hospitality"
              aria-controls="panel-content-hospitality"
            >
              Hospitality/Hotels
            </AccordionSummary>
            <AccordionDetails>
              We provide thorough and reliable cleaning services for hotels and
              hospitality spaces, focusing on delivering a pristine environment
              that enhances guest satisfaction and maintains high standards of
              cleanliness.
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
              id="panel-header-industrial"
              aria-controls="panel-content-industrial"
            >
              Industrial/Warehouse
            </AccordionSummary>
            <AccordionDetails>
              GSR General Services of RVA, LLC handles janitorial needs for
              industrial and warehouse settings with a focus on safety and
              efficiency. Our services include regular cleaning and maintenance
              to keep your operations running smoothly.
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
              id="panel-header-educational"
              aria-controls="panel-content-educational"
            >
              Educational Buildings
            </AccordionSummary>
            <AccordionDetails>
              We offer dedicated janitorial services for educational
              institutions, ensuring that classrooms, hallways, and common areas
              are kept clean and conducive to learning.
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
              id="panel-header-retail"
              aria-controls="panel-content-retail"
            >
              Retail Properties
            </AccordionSummary>
            <AccordionDetails>
              Our team provides expert cleaning services for retail properties,
              ensuring that your store or shopping center maintains a spotless
              and inviting environment for customers.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
