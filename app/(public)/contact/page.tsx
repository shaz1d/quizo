import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

const page = () => {
  return (
    <section className="py-20 w-full px-5 md:px-0">
      <div className="container mx-auto grid md:grid-cols-2 gap-10">
        <div className="flex flex-col ">
          <h1 className="text-4xl lg:text-6xl leading-[120%] font-medium">
            Contact Us
          </h1>
          <p className="mb-10 mt-1">
            Email, call or complete the form to learn how Quizo can solve
            <br />
            your messaging problem.
          </p>
          <Link className="mb-2" href="mailto:shazid.dev@gmail.com">
            @shazid.dev@gmail.com
          </Link>
          <Link href="tel:+8801882696017">+88 (018)8269-6017</Link>
          <div className="flex gap-6 w-full mt-20 text-sm">
            <div className="max-w-[250px]">
              <p className="font-semibold text-base mb-1">
                Feedback and Suggestions
              </p>
              <p>
                We value your feedback and are continuously working to imporve
                Quizo.
              </p>
            </div>
            <div className="max-w-[250px]">
              <p className="font-semibold text-base mb-1">Media Inquires</p>
              <p>
                For media related questions or inquiries, please contact us at
                shazid.dev@gmail.com.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default page;
