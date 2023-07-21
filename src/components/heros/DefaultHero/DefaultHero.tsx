import { Container } from "components/layout/Container/Container";
import React from "react";

export interface DefaultHeroProps {
  bg?: string;
  children: React.ReactNode;
  image: React.ReactNode;
}

export const DefaultHero = ({
  bg = "bg-slate-100",
  image,
  children,
}: DefaultHeroProps) => (
  <div className={`relative ${bg}`}>
    <section className="relative py-6 sm:py-16 lg:pt-18 lg:pb-24">
      <Container style="flex-row lg:flex items-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-8">{children}</div>
        <div className="w-full lg:w-1/2">{image}</div>
      </Container>
    </section>
  </div>
);
