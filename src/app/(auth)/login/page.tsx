import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UserAuthForm from "@/components/auth/UserAuthForm";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full mx-auto">
      <MaxWidthWrapper>
        <div className="mx-auto pt-10 pb-8 min-h-screen flex w-full flex-col justify-center items-center space-y-7 sm:w-md">
          <Image
            alt="Favicon"
            src="/icon.gif"
            width={50}
            height={50}
            className="w-[150px] h-[150px]"
          />
          <p className="text-4xl font-semibold tracking-tight mt-[50px] text-white">Welcome</p>
          <p className="text-xl max-w text-stone-300">Login to start.</p>
          <UserAuthForm />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
