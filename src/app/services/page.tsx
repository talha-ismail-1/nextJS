import Image from "next/image";

function Services(){
    return(
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">Services</h1>
          <p className="mt-4">
            This is the Services page of the web application. Here, you can find
            information about the services we offer.
          </p>
          <div className="flex flex-wrap mt-4">
            <div className="w-1/3 p-4">
              <Image
                src="/images/car1.jpg"
                alt="Hero"
                width={300}
                height={200}
              />
            </div>
            <div className="w-1/3 p-4">
              <Image
                src="/images/car2.jpg"
                alt="Hero"
                width={300}
                height={200}
              />
            </div>
            <div className="w-1/3 p-4">
              <Image
                src="/images/car2.jpg"
                alt="Hero"
                width={300}
                height={200}
              />
            </div>
          <a href="/services">View More</a>
          </div>
        </div>
    );
}

export default Services;