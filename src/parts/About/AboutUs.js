import {
  DocumentMagnifyingGlassIcon,
  MegaphoneIcon,
  PuzzlePieceIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section>
      <div className="mx-auto max-w-6xl justify-between py-16 px-5 md:flex xl:px-0">
        <div className="relative h-[500px] md:w-6/12">
          <div className="absolute right-0 h-[450px] w-10/12 overflow-hidden">
            <Image
              src="/images/image-1.avif"
              layout="fill"
              objectFit="fill"
              className="rounded-3xl shadow-lg"
            />
            <p className="absolute top-20 left-0 inline-flex items-center rounded-r-xl bg-primary/20 p-10">
              <span className="text-5xl font-bold text-primary">25+</span>
              <span className="ml-2 text-lg font-medium text-primary">
                years of <br /> Expreriences
              </span>
            </p>
          </div>
          {/* <img
            src="/images/quotesbg.jpg"

            className="absolute bottom-0 aspect-video w-[240px] rounded-xl shadow-xl"
          /> */}
          <Image
            src="/images/quotesbg.jpg"
            width={240}
            height={240}
            className="absolute bottom-0 rounded-xl shadow-xl"
          />
        </div>
        <div className="md:ml-10 md:w-6/12 mt-10 md:mt-0">
          <p className="font-semiold text-orange-600">About us</p>
          <p className="text-4xl font-bold leading-relaxed text-primary">
            Building a Legacy <br /> of Success
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            natus ullam earum fugit at necessitatibus mollitia modi quaerat
            animi ipsa! Quam nesciunt commodi quisquam perferendis voluptatibus
            impedit ipsam, odit in?
          </p>
          <div className="mt-10 flex flex-wrap">
            <div className="flex w-1/2 items-center gap-3 px-10 py-3">
              <div className="flex aspect-square w-16 rounded-full bg-orange-100">
                <PuzzlePieceIcon className="m-auto w-7 text-orange-600" />
              </div>
              <p className="font-semibold text-primary">Strategy</p>
            </div>
            <div className="flex w-1/2 items-center gap-3 px-10 py-3">
              <div className="flex aspect-square w-16 rounded-full bg-orange-100">
                <DocumentMagnifyingGlassIcon className="m-auto w-7 text-orange-600" />
              </div>
              <p className="font-semibold text-primary">Results</p>
            </div>
            <div className="flex w-1/2 items-center gap-3 px-10 py-3">
              <div className="flex aspect-square w-16 rounded-full bg-orange-100">
                <SparklesIcon className="m-auto w-7 text-orange-600" />
              </div>
              <p className="font-semibold text-primary">Expertise</p>
            </div>
            <div className="flex w-1/2 items-center gap-3 px-10 py-3">
              <div className="flex aspect-square w-16 rounded-full bg-orange-100">
                <MegaphoneIcon className="m-auto w-7 text-orange-600" />
              </div>
              <p className="font-semibold text-primary">Support 24/7</p>
            </div>
          </div>
          <div className="mt-10 border-l-4 border-orange-600 bg-orange-100 p-5 md:mx-10">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo amet
              repellat sunt, modi quas molestiae exercitationem!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
