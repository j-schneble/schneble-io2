// components/Modalx.tsx
'use client'
// components/Modalx.tsx
import { MdOutlineDescription } from "react-icons/md";
import React, { useEffect } from 'react';
import { Card, Image } from '@nextui-org/react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
interface ModalyProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string; // New prop for image filename
  description: string;
  repoUrl: string; // Unique GitHub repository URL
  dispUrl: string; // Unique website URL
}

const Modaly: React.FC<ModalyProps> = ({  onClose, image, title, description, repoUrl, dispUrl }) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button isIconOnly className='w-16 h-16 rounded-full' onPress={onOpen}> <Image src={`/logos/${image}`}
         alt={title} 
            width={100}
            height={100}
            className="w-16 h-16 rounded-full "
            style={{cursor: 'pointer' }}
              /></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
              <h3>{title}</h3>
        <p>{description}</p>
        <div style={{  textAlign: 'center' }}>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer"><button style={{ marginRight: '10px' }}>GitHub Repository</button></a>
          <a href={dispUrl} target="_blank" rel="noopener noreferrer"><button>Website</button></a>
        </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modaly;