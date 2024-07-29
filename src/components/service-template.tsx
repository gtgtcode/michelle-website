import { Button } from "@mui/material";
import Link from "next/link";

export default function ServiceTemplate(props: any) {
  return (
    <section className="container mx-auto my-12 py-4 md:px-12">
      <div className="md:grid mx-4 md:mx-0 grid-cols-2 items-center">
        <div className={props.align == "right" ? "order-2" : ""}>
          <img src={props.src} alt={props.alt} className="rounded-[20px]" />
        </div>
        <div
          className={
            props.align == "right"
              ? "order-1 px-8 text-center md:text-right mt-8 md:mt-0"
              : "px-8 text-center md:text-left mt-8 md:mt-0"
          }
        >
          <h1 className="text-2xl font-bold">{props.header}</h1>
          <div
            className={
              "border-b border border-2 border-black w-[40px] my-4 " +
              (props.align == "left"
                ? "md:mr-auto md:mx-0 mx-auto"
                : "md:ml-auto md:mx-0 mx-auto")
            }
          />
          <p className="mb-8">{props.content}</p>
          <Link href="/contact">
            <Button variant="contained" color="error">
              <p className="font-bold">Contact Us</p>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
