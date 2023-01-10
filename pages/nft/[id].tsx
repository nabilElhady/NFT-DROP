import react from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function NFTDropPage() {
  // auth
  const connectWithMetamask = useMetamask();
  const Address = useAddress();
  const disconnect = useDisconnect();

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10 ">
      {/* left side */}

      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4 ">
        <div className="flex flex-col items-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://i.seadn.io/gae/y9l_X91rfjL7e6KBBH3GYtZIAM8X6vtczx3X5_Rx5gQOCBrfTMZU7UBhu-r01F9JYCJThUKVHkwad6pBe_KyESy0SY-ZF0vvoZLy78Q?auto=format&w=1000"
            ></img>
          </div>
          <div className=" text-center p-5 space-y-2">
            <h1 className="text-4xl font-bold text-white">SUPER APES</h1>
            <h2 className=" text-xl text-gray-300">
              a collection of apes who lives & breathe passion
            </h2>
          </div>
        </div>
      </div>

      {/* right */}

      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            THE{" "}
            <span className="font-extrabold underline decoration-pink-600/50">
              SUPER
            </span>{" "}
            NFT MARKET
          </h1>
          <button
            className="rounded-full bg-gradient-to-br from-cyan-800 to-rose-500 text-white px-4  py-2 text-xs font-bold lg:px-3 lg:py-1.5 lg:text-xl"
            onClick={() => (Address ? disconnect() : connectWithMetamask())}
          >
            {Address ? `sign out` : `sign in`}
          </button>
        </header>
        <hr className="my-2 border" />
        {Address && (
          <p className="text-center text-sm text-rose-400">
            you are logged in with wallet {Address.substring(0, 5)}...
            {Address.substring(Address.length - 5)}
          </p>
        )}
        {/* content */}
        <div className="mt-10 flex flex-1 flex-col items-center  space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
          ></img>
          <h1 className="text-3xl font-bold lg:text-5xl font-extrabold">
            SUPER NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500">NFTs claimed</p>
        </div>
        {/* mintbutton */}
        <button className="h-16 w-full text-white rounded-full bg-red-500 font-bold">
          MINT NFT(0.01 ETH)
        </button>
      </div>
    </div>
  );
}
export default NFTDropPage;
