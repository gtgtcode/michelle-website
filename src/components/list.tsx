import { ArrowDropDown } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export default function List() {
  return (
    <section className="container mx-auto mb-12">
      <div className="grid grid-cols-2 gap-2">
        <div>
          {" "}
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
              id="panel-header"
              aria-controls="panel-content"
            >
              Header
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionDetails>
          </Accordion>{" "}
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
              id="panel-header"
              aria-controls="panel-content"
            >
              Header
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          {" "}
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
              id="panel-header"
              aria-controls="panel-content"
            >
              Header
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
              id="panel-header"
              aria-controls="panel-content"
            >
              Header
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
