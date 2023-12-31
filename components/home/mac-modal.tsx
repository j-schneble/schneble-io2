'use client' 

import Modal from "../../components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { Link } from "@nextui-org/link";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
     <div className="w-full max-w-lg overflow-hidden "> 
    <div className="flex flex-col items-center justify-center px-4 pt-6 mb-8 space-y-3 text-center md:px-16">
            <div className=''>
                <div className='flex gap-2 '>
                  <Image
                    src='/weather.png'
                    width={35}
                    height={35}
                    className="my-5 cursor-default"
                    alt='Summary image'
                  />
                <h1 className="mt-5 ml-1 text-3xl antialiased leading-none tracking-wider text-left cursor-default text-black/95 dark:text-white/95 font-sfprodisplayregular">
                   Your Forecast
                </h1>
          
                    </div>
                    <div className='flex gap-3 mt-1 antialiased text-left cursor-default justify-evenly text-black/90 dark:text-white/90'>
                   <h2>
                   Schneble.io is currently being updated , check out the source code for more information on this project
                    </h2>
                  </div>
                  <div className='grid grid-cols-2 mb-10 items-left justify-evenly'>
          <div className='flex w-4/12 py-1 mt-3 '>
          <Link 
          isExternal 
          href='https://github.com/j-schneble/weather-forecast-app'			
					className="p-2 text-white bg-black border-2 rounded-md border-zinc-600"
				>
					<GithubIcon size={20} />
					Source
				</Link>
          </div>
          <div className='flex w-4/12 py-1 mt-3 '>
          <Link 
          isExternal bg-white border-2 rounded-md border-zinc-400
          href='https://your-forecast.vercel.app/'			
					className="p-2 border-2 rounded-md bg-white/90 text-zinc-900 border-zinc-800/50"
				>
      
					<span className='pr-1 font-bold'>🔗</span>
          Forecast
				</Link>
          </div>
        </div> 
        </div>
       </div>
    </div>
  </Modal>
  );
};


export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
