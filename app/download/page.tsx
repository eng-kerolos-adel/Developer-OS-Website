import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Cpu, Smartphone, Globe, Download, Layers } from "lucide-react";

const downloadOptions = [
  {
    id: "legacy",
    title: "Old Android",
    arch: "arm-v7a",
    description:
      "32-bit build optimized for older smartphones and legacy systems.",
    size: "31.4 MB",
    icon: Smartphone,
    recommended: false,
    url: "/app/Developer-OS-arm-v7a.apk",
  },
  {
    id: "modern",
    title: "Modern Android",
    arch: "arm64-v8a",
    description: "64-bit high-performance build for modern flagship devices.",
    size: "33.2 MB",
    icon: Cpu,
    recommended: true,
    url: "/app/Developer-OS-arm64-v8a.apk",
  },
  {
    id: "emulator",
    title: "Desktop & Sim",
    arch: "x86_64",
    description:
      "Specialized build for Chromebooks, Tablets, and Android Emulators.",
    size: "34.6 MB",
    icon: Globe,
    recommended: false,
    url: "/app/Developer-OS-x86_64.apk",
  },
];

const DownloadsPage = () => {
  return (
    <main className="min-h-screen text-white font-heading flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* 2. Header - Noir Minimalist */}
      <header className="w-full max-w-6xl mb-16 space-y-4 -mt-25 md:-mt-10 md:pt-16">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-12 bg-foreground" />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            System Artifacts / Release v1.2
          </p>
        </div>
        <h1 className="text-6xl md:text-8xl text-foreground font-black uppercase tracking-tighter leading-none">
          Downloads
        </h1>
      </header>

      {/* 3. Carousel Area */}
      <div className="w-[80%] relative">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {downloadOptions.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card
                  className={`group relative h-full bg-white/70 backdrop-blur-[10px] border border-border transition-all duration-500  ${item.recommended ? "ring-1 ring-white/10" : ""}`}
                >
                  <CardContent className="flex flex-col aspect-10/14 md:aspect-square px-8 justify-between">
                    {/* Top Info */}
                    <div className="flex justify-between items-start">
                      <div
                        className={`p-3 rounded-xl border border-border drop-shadow-foreground drop-shadow-xl/20 transition-colors bg-white text-foreground`}
                      >
                        <item.icon
                          size={24}
                          strokeWidth={1.5}
                          className="text-foreground"
                        />
                      </div>
                      {item.recommended && (
                        <span className="font-mono text-sm bg-white rounded-xl border border-border drop-shadow-foreground text-foreground px-3 py-1 font-bold uppercase tracking-widest">
                          Recommended
                        </span>
                      )}
                    </div>

                    {/* Middle Info */}
                    <div className="space-y-3">
                      <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                        Architecture: {item.arch}
                      </p>
                      <h3 className="text-3xl font-bold uppercase tracking-tighter leading-none">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px]">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action */}
                    <div className="space-y-6">
                      <div className="flex justify-between items-center font-mono text-sm text-muted-foreground border-t border-muted-foreground pt-4">
                        <span>PAYLOAD: {item.size}</span>
                        <span>STATUS: STABLE</span>
                      </div>
                      <a
                        href={item.url}
                        download={`Developer OS ${item.title}`}
                        className="flex items-center justify-center gap-3 w-full py-4 rounded-full text-md font-black uppercase transition-all active:scale-95 text-background bg-foreground hover:text-foreground hover:bg-transparent hover:border-foreground border border-transparent border-2"
                      >
                        <Download size={16} />
                        Download APK
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="h-10 w-10 border border-border drop-shadow-foreground drop-shadow-xl/20 bg-white/70 backdrop-blur-[10px] text-black transition-all" />
          <CarouselNext className="h-10 w-10 border border-border drop-shadow-foreground drop-shadow-xl/20 bg-white/70 backdrop-blur-[10px] text-black transition-all" />
        </Carousel>
      </div>
    </main>
  );
};

export default DownloadsPage;
