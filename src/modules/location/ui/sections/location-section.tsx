import { Button } from "@/components/ui/button";
import { MapPinIcon, NavigationIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export const LocationSection = () => {
  return (
    <section
      id="contact"
      className="py-32 md:px-20 md:py-24 lg:py-32 px-2 bg-gradient-to-br from-[#101826] to-[#101752] overflow-hidden min-h-screen flex flex-col gap-y-8 items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-blue-500 text-lg font-medium">Visit Our Shop</p>
          <h1 className="text-3xl font-semibold text-white">Our Location </h1>
          <p className="text-lg text-white/60 mt-6 max-w-3xl mx-auto">
            Conveniently located in Denton, TX:
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-8 mt-6">
          <div className="flex justify-center items-center w-full h-full bg-[#374151] rounded-md">
            <MapPinIcon className="h-32 w-32 text-blue-500" />
          </div>
          <div className="bg-[#374151] p-6 rounded-md ">
            <p className="text-lg font-semibold p-2 text-white">
              Contact information
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 group hover:bg-muted/80 rounded-lg p-2">
                <div className="flex items-center justify-center px-2 bg-blue-500 rounded-l-full">
                  <MapPinIcon className="text-white size-5" />
                </div>
                <div className="flex flex-col ">
                  <p className="text-lg font-semibold text-white group-hover:text-black">
                    Adreess
                  </p>
                  <p className="text-muted-foreground">
                    518 Acme St unit 101, Denton, TX 76205, United States
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 group hover:bg-muted/80 rounded-lg p-2">
                <div className="flex items-center justify-center px-2 bg-blue-500 rounded-l-full">
                  <PhoneIcon className="text-white size-5" />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-white group-hover:text-black">
                    Phone
                  </p>
                  <p className="text-muted-foreground">+19408081569</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Button
                  variant="elevated"
                  asChild
                  className="flex gap-2 bg-blue-500 text-white hover:text-primary hover:bg-white"
                >
                  <Link
                    href={
                      "https://www.google.com/maps/dir/?api=1&destination=518%20Acme%20St%20unit%20101%2C%20Denton%2C%20TX%2076205%2C%20United%20States"
                    }
                    target="_blank"
                  >
                    <NavigationIcon />
                    Get direction
                  </Link>
                </Button>
                <Button
                  variant="elevated"
                  asChild
                  className="flex gap-2 hover:bg-blue-500 hover:text-white"
                >
                  <Link href={"tel:+19408081569"}>
                    <PhoneIcon />
                    Call us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
