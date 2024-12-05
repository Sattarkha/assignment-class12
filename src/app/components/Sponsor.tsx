import Image from "next/image";
export default function Sponsor() {
    return (
      <section className="bg-white py-36 px-20 flex flex-col justify-center items-center">
        <div className="container mx-auto text-center">
          
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our sponsors</h2>
  
          
          <div className="py-10">
            <Image src='/sponsors.png' alt='logos' width={1482} height={71}/>
          </div>
        </div>
      </section>
    );
  }
  