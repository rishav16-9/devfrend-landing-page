"use client";
import { Button } from "@/components/ui/button";
import { MapPinIcon, MoveDownIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="px-2 py-16 md:py-24 lg:py-36 bg-gradient-to-br from-blue-200 to-blue-950 overflow-hidden min-h-svh"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <p className="text-primary font-medium mb-3">
              Premium Barber Services in Denton
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground mb-6">
              Classic Cuts, Modern Style
              <span className="text-primary inline-block">
                Premium Barber Shop
              </span>
            </h1>
            <p className="text-lg text-white/50 mb-8">
              At PMC Barbershop, we combine traditional barbering techniques
              with modern styling to give you the perfect look. Our experienced
              barbers deliver precision cuts, beard grooming, and relaxing hot
              towel shaves in a classic barbershop atmosphere.
            </p>
            <div className="inline-flex items-center text-muted-foreground px-3 py-1.5 rounded-full border border-border/50 bg-background/50 cursor-pointer hover:border-primary/40 hover:bg-background/80 gap-2 mb-8">
              <MapPinIcon />
              <span className="">Denton, TX</span>
            </div>
            <div className="flex flex-wrap gap-4 flex-col">
              <Button
                asChild
                variant="elevated"
                className="hover:bg-indigo-600"
              >
                <Link
                  className="w-full flex"
                  data-slot="button"
                  href="#services"
                >
                  <PhoneIcon fill="white" />
                  Our Services
                </Link>
              </Button>
              <Button
                asChild
                variant="elevated"
                className="bg-indigo-600 hover:bg-white"
              >
                <Link
                  className="flex w-full"
                  data-slot="button"
                  href="#contact"
                >
                  <PhoneIcon fill="white" />
                  Book Now
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full animate-bounce border-0 bg-transparent text-indigo-950 hover:bg-transparent hover:border-0 mt-8"
              >
                <Link href="#about" className="flex w-full">
                  <MoveDownIcon />
                </Link>
              </Button>
            </div>
          </div>
          <div className="items-center justify-center md:hidden transition-transform duration-300 hover:scale-105">
            <Image
              alt="Haidresser's"
              className="w-full h-auto max-h-[600px] object-contain"
              src="/hero.webp"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
