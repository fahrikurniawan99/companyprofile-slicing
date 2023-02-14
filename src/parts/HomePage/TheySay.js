import Image from "next/image";
import Slider from "react-slick";

export default function TheySay() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-6xl py-20 px-5 xl:px-5">
        <p className="font-medium text-orange-500">Out clients</p>
        <p className="mt-2 text-4xl font-bold text-primary">What they say</p>
        <div className="px-5">
          <Slider
            slidesToShow={2}
            slidesToScroll={2}
            infinite={true}
            speed={500}
            dots={true}
            autoplay={true}
            autoplaySpeed={5000}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            <div className="py-5 md:p-10">
              <div className="cursor-grab rounded-xl bg-white px-10 py-7 shadow">
                <p className="border-l-4 border-orange-600 pl-3 font-semibold text-primary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam quidem aliquid quam soluta doloribus cumque iure aut
                  dolores obcaecati eum.
                </p>
                <div className="mt-10 flex items-center gap-5">
                  <div className="relative ml-5 aspect-square w-20 overflow-hidden rounded-full">
                    <Image
                      objectFit="cover"
                      layout={"fill"}
                      src="/images/member-1.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-orange-600">
                      Edgar D. Best
                    </p>
                    <p className="text-primary">Bussines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 md:p-10">
              <div className="cursor-grab rounded-xl bg-white px-10 py-7 shadow">
                <p className="border-l-4 border-orange-600 pl-3 font-semibold text-primary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam quidem aliquid quam soluta doloribus cumque iure aut
                  dolores obcaecati eum.
                </p>
                <div className="mt-10 flex items-center gap-5">
                  <div className="relative ml-5 aspect-square w-20 overflow-hidden rounded-full">
                    <Image
                      objectFit="cover"
                      layout={"fill"}
                      src="/images/member-2.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-orange-600">
                      Edgar D. Best
                    </p>
                    <p className="text-primary">Bussines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 md:p-10">
              <div className="cursor-grab rounded-xl bg-white px-10 py-7 shadow">
                <p className="border-l-4 border-orange-600 pl-3 font-semibold text-primary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam quidem aliquid quam soluta doloribus cumque iure aut
                  dolores obcaecati eum.
                </p>
                <div className="mt-10 flex items-center gap-5">
                  <div className="relative ml-5 aspect-square w-20 overflow-hidden rounded-full">
                    <Image
                      objectFit="cover"
                      layout={"fill"}
                      src="/images/member-3.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-orange-600">
                      Edgar D. Best
                    </p>
                    <p className="text-primary">Bussines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 md:p-10">
              <div className="cursor-grab rounded-xl bg-white px-10 py-7 shadow">
                <p className="border-l-4 border-orange-600 pl-3 font-semibold text-primary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam quidem aliquid quam soluta doloribus cumque iure aut
                  dolores obcaecati eum.
                </p>
                <div className="mt-10 flex items-center gap-5">
                  <div className="relative ml-5 aspect-square w-20 overflow-hidden rounded-full">
                    <Image
                      objectFit="cover"
                      layout={"fill"}
                      src="/images/member-1.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-orange-600">
                      Edgar D. Best
                    </p>
                    <p className="text-primary">Bussines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 md:p-10">
              <div className="cursor-grab rounded-xl bg-white px-10 py-7 shadow">
                <p className="border-l-4 border-orange-600 pl-3 font-semibold text-primary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam quidem aliquid quam soluta doloribus cumque iure aut
                  dolores obcaecati eum.
                </p>
                <div className="mt-10 flex items-center gap-5">
                  <div className="relative ml-5 aspect-square w-20 overflow-hidden rounded-full">
                    <Image
                      objectFit="cover"
                      layout={"fill"}
                      src="/images/member-2.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-orange-600">
                      Edgar D. Best
                    </p>
                    <p className="text-primary">Bussines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 md:p-10">
              <div className="cursor-grab rounded-xl bg-white px-10 py-7 shadow">
                <p className="border-l-4 border-orange-600 pl-3 font-semibold text-primary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam quidem aliquid quam soluta doloribus cumque iure aut
                  dolores obcaecati eum.
                </p>
                <div className="mt-10 flex items-center gap-5">
                  <div className="relative ml-5 aspect-square w-20 overflow-hidden rounded-full">
                    <Image
                      objectFit="cover"
                      layout={"fill"}
                      src="/images/member-3.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-orange-600">
                      Edgar D. Best
                    </p>
                    <p className="text-primary">Bussines</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
