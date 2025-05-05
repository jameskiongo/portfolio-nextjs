export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col justify-center w-full h-full mt-10">
      <div className="w-full">
        <p className="text-sm font-extralight text-center text-gray-500">
          {`© ${year} James Kiongo. All rights reserved.`}
        </p>
      </div>
    </div>
  );
}
