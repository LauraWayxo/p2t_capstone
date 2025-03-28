import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero'; //find image to add as Hero.png
import Footer from '../components/Footer';

function Layouts(props: { children: React.ReactNode; showHero?: boolean; }) {

  const Layout = ({ children, showHero = false }: Props) => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <Header />
    {showHero && <Hero />}
        <div className="container mx-auto flex-1 py-10">{ props.children }</div>
    </div>
    <Footer />
    </>
  );
}
};

export default Layouts;

