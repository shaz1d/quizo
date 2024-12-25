import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

const page = () => {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto grid grid-cols-2 gap-10">
        <div className="flex flex-col ">
          <h1 className="text-6xl leading-[120%] font-medium">Contact Us</h1>
          <p className="mb-10 mt-1">
            Email, call or complete the form to learn how Quizo can solve
            <br />
            your messaging problem.
          </p>
          <Link className="mb-2" href="mailto:shazid.dev@gmail.com">
            @shazid.dev@gmail.com
          </Link>
          <Link href="tel:+8801882696017">+88 (018)8269-6017</Link>
        </div>
        <div className="flex flex-col items-end">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default page;
