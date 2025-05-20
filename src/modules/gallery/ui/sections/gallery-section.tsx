"use client";
import Image from "next/image";
import { galleryConstant } from "../../gallery-constant";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { XIcon } from "lucide-react";

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-32 md:px-20 md:py-24 lg:py-32 px-2 bg-gradient-to-br from-blue-200 to-blue-950 overflow-hidden min-h-screen flex flex-col gap-y-8 items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-black text-lg font-medium">Our Work & Shop</p>
          <h1 className="text-3xl font-semibold text-black">
            Our Barbershop Gallery
          </h1>
          <p className="text-lg text-white/60 mt-6 max-w-3xl mx-auto">
            Take a look at our shop atmosphere and the quality cuts we deliver
            to our clients.
          </p>
        </div>
      </div>
      <div className="max-w-7xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {galleryConstant.map((img) => (
          <div
            key={img.id}
            className="hover:border-black border-2 border-transparent rounded-lg relative group"
            onClick={() => setSelectedImage(img.imageUrl)}
          >
            <Image
              key={img.id}
              height={200}
              width={600}
              alt={img.id}
              src={img.imageUrl}
              className="object-cover w-full h-[300px] rounded-lg"
            />
            <Button
              variant="ghost"
              onClick={() => setSelectedImage(img.imageUrl)}
              className="absolute opacity-0 group-hover:opacity-100 bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded bg-black/70 text-white"
            >
              View
            </Button>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div>
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors"
            >
              <XIcon size={28} />
            </button>
            <Image
              src={selectedImage}
              alt="Preview"
              width={500}
              height={500}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
