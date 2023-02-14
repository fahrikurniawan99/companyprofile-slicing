import Button from "@/components/Button";
import InputText from "@/components/InputText";
import TextArea from "@/components/TextArea";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function Card() {
  return (
    <section>
      <div className="flex justify-center bg-white md:p-20">
        <div className="w-full max-w-6xl rounded-3xl border border-gray-100 bg-white p-5 md:p-10 shadow-xl">
          <h2 className="text-4xl font-bold text-primary">
            Feel free to <span className="text-orange-600">contact us</span>{" "}
            <br /> for any query.
          </h2>
          <div className="mt-10 md:flex justify-between">
            <div className="md:w-4/12 space-y-10">
              <div className="flex w-full items-center gap-5 rounded-full bg-orange-100">
                <div className="flex aspect-square w-20 items-center justify-center rounded-full bg-orange-600 text-white">
                  <PhoneIcon className="w-10" />
                </div>
                <span>
                  <p className="text-lg font-bold text-primary">
                    Phone Number:
                  </p>
                  <p className="text-primary/90">Office: 202-824-84025</p>
                </span>
              </div>
              <div className="flex w-full items-center gap-5 rounded-full">
                <div className="flex aspect-square w-20 items-center justify-center rounded-full bg-orange-600 text-white">
                  <EnvelopeIcon className="w-10" />
                </div>
                <span>
                  <p className="text-lg font-bold text-primary">Mail Addres:</p>
                  <p className="text-primary/90">
                    info.contract@contractors.com
                  </p>
                </span>
              </div>
              <div className="flex w-full items-center gap-5 rounded-full">
                <div className="flex aspect-square w-20 items-center justify-center rounded-full bg-orange-600 text-white">
                  <MapPinIcon className="w-10" />
                </div>
                <span>
                  <p className="text-lg font-bold text-primary">
                    Office Addres:
                  </p>
                  <p className="text-primary/90">
                    4464 Massachusetts Avenue <br /> Washingtion, DC 200005
                  </p>
                </span>
              </div>
            </div>
            <div className="grid md:w-7/12 grid-cols-2 flex-wrap gap-5 space-y-0 mt-10 md:mt-0">
              <InputText
                className={"col-span-2 md:col-span-1"}
                icon={<UserIcon className="w-5" />}
                placeholder="*First Name"
              />
              <InputText
                className={"col-span-2 md:col-span-1"}
                icon={<UserIcon className="w-5" />}
                placeholder="*Last Name"
              />
              <InputText
                className={"col-span-2 md:col-span-1"}
                icon={<EnvelopeIcon className="w-5" />}
                placeholder="*Mail Address"
              />
              <InputText
                className={"col-span-2 md:col-span-1"}
                icon={<PhoneIcon className="w-5" />}
                placeholder="*Phone Number"
              />
              <TextArea
                placeholder={"Enter message"}
                className="col-span-2 px-8 py-2"
              />
              <div className="col-span-2">
                <Button text={"Submit"} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
