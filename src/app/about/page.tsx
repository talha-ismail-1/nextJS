import Image from "next/image";

function AboutUs(){

    return(
        <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">About Us</h1>
                <p className="mt-4">
                    This is the About Us page of the web application. Here, you can find
                    information about our company, our mission, and our team.
                </p>
                <div className="flex flex-wrap mt-4">
                    <div className="w-1/2 p-4">
                        <Image
                            src="/images/car1.jpg"
                            alt="Hero"
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className="w-1/2 p-4">
                        <Image
                            src="/images/car2.jpg"
                            alt="Hero"
                            width={500}
                            height={300}
                        />
                    </div>
                </div>
            </div>
    );
}

export default AboutUs;