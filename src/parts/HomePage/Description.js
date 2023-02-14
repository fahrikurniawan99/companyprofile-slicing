import Image from "next/image";

export default function Description() {
  return (
    <div className="overflow-hidden">
      <div className="relative my-20 gap-10 px-5 md:-left-36 md:flex xl:px-0">
        <div className="grid h-[500px] grid-cols-6 grid-rows-3 gap-2 md:w-1/2 md:gap-5">
          <div className="relative col-span-3 row-span-2 overflow-hidden rounded-xl bg-gray-200">
            <Image
              src={"/images/image-1.avif"}
              layout="fill"
              objectFit="cover"
              alt="desc-1"
            />
          </div>
          <div className="relative col-span-3 row-span-3 overflow-hidden rounded-xl bg-gray-200">
            <Image
              layout="fill"
              objectFit="cover"
              src={"/images/image-2.jpg"}
              alt="desc-2"
            />
          </div>
          <div className="relative col-span-3 row-span-1 overflow-hidden rounded-xl bg-gray-200">
            <Image
              layout="fill"
              objectFit="cover"
              src={"/images/image-3.jpg"}
              alt="desc-3"
            />
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:w-1/2">
          <p className="font-medium text-orange-500">We are</p>
          <p className="mb-3 text-4xl font-bold leading-relaxed tracking-wide text-primary">
            The one of largest <br /> construction
          </p>
          <p className="leading-relaxed text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            nesciunt consequuntur! Ratione, quo voluptate reprehenderit rem est
            ipsam necessitatibus porro deleniti hic, aut voluptates delectus.
            Repudiandae, sint. Ratione, sed obcaecati!
          </p>
          <p className="mt-5 leading-relaxed text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            nesciunt consequuntur! Ratione, quo voluptate reprehenderit rem est
            ipsam necessitatibus porro deleniti hic, aut voluptates delectus.
            Repudiandae, sint. Ratione, sed obcaecati!
          </p>
        </div>
      </div>
    </div>
  );
}
