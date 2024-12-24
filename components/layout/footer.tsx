import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "../ui/button";

const Footer = () => {
  return <footer className="w-full pt-10">
    <div className="container mx-auto">
      <div className="w-full flex justify-between pb-6 border-b border-primary/20">
        <div>
          <Link href="/"><Icons.newLogo className="size-10"/></Link>
          <p className="font-semibold text-xl">Quizo</p>
          <div className="flex gap-10 mt-8">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <a href="mailto:shazid.dev@gmail.com">shazid.dev@gmail.com</a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <a href="tel:01882696017">+880(188)269-6017</a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl font-medium mb-2">Get Started with You Skills <br /> in Quiz Now!</p>
          <Button>Play Now</Button>
        </div>
      </div>
      <div className="w-full py-6 flex justify-between gap-5">
          <div className="flex items-center gap-5">
            <Link  href="https://x.com/sh4zid"><Icons.twitter className="size-5"/></Link>
            <Link  href="https://www.github.com/shaz1d"><Icons.gitHub className="size-5"/></Link>
          </div>
          <p>© Quizo. All Rights Reserved.</p>
      </div>
    </div>
    <div className="w-full h-2 bg-primary"></div>
  </footer>;
};

export default Footer;
