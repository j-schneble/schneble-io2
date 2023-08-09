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
                 src='/../public/who3.png'
                 width={35}
                 height={35}
                 className="my-5 cursor-default"
                 alt='Summary image'
             />
                <h1 className="mt-5 cursor-default ml-1 text-3xl antialiased leading-none tracking-wider text-left text-black/95 dark:text-white/95 font-sfprodisplayregular">
                    Chief Analytics
                </h1>
          
                    </div>
                    <div className='flex cursor-default gap-3 mt-1 antialiased text-left justify-evenly text-black/90 dark:text-white/90'>
                   <h2>
                    Schneble.io is currently being updated , check out the source code for more information on this project
                    </h2>
                  </div>
                  <div className='flex flex-col mb-10 items-left justify-evenly  '>
          <div className='flex w-4/12 py-1 mt-3 '>
          <Link 
          isExternal 
          href='https://github.com/j-schneble/chief-backend'			
					className="p-2 text-white bg-black border-2 rounded-md border-zinc-600"
				>
					<GithubIcon size={20} />
					Source
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
