'use client'

import Slider from 'react-infinite-logo-slider';
import SectionTitle from "../Common/SectionTitle.tsx";
import brandsData from "./brandsData.tsx";

const Clients = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full max-w-5xl">
                    <div className="section-title text-center mb-20">
              
                    <h2 className="title mt-40">
          <span>Clientes</span>
        </h2>
            </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <Slider
                                width="265px"
                                duration={40}
                                marginTop= "0"
                                pauseOnHover={true}
                                blurBorders={false}
                                blurBoderColor={'#fff'}
                                itemsToShow={5}
                                itemsToScroll={1}
                            >
                                {brandsData.map((brand, index) => (
                                    <Slider.Slide key={index} className="flex items-center justify-center">
                                        <a href={brand.href} target="_blank" rel="noopener noreferrer" className="mx-4">
                                            <img 
                                                src={brand.image} 
                                                alt={brand.name} 
                                                className="w-auto h-16 object-contain" 
                                            />
                                        </a>
                                    </Slider.Slide>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;