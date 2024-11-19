'use client';

import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/modal';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

import { Text } from '@/components/atom';

export function CreateStores() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [openStoreId, setOpenStoreId] = useState(false);

  const handleOpenStoreId = () => setOpenStoreId(true);
  const handleCloseStoreId = () => setOpenStoreId(false);

  return (
    <>
      <div className="mt-4">
        <Button
          color="primary"
          startContent={<Plus size={16} />}
          onPress={onOpen}
        >
          Add Store
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form className="flex flex-col">
              <ModalHeader className="flex flex-col gap-1">
                Create Store
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Store name"
                  labelPlacement="outside"
                  placeholder="Enter your store name"
                  variant="bordered"
                />
                {openStoreId ? (
                  <Card className="text-sm">
                    <Button
                      isIconOnly
                      radius="full"
                      size="sm"
                      variant="light"
                      className="absolute right-2 top-2 z-[100]"
                      onPress={handleCloseStoreId}
                    >
                      <X size={14} className="text-gray-600" />
                    </Button>
                    <CardHeader className="flex-col items-start gap-1 border-b">
                      <Text weight="medium">Store ID</Text>
                      <Text className="text-gray-600">
                        Enter your custom store id, leave blank for randomly
                        generated one
                      </Text>
                    </CardHeader>
                    <CardBody>
                      <Input
                        labelPlacement="outside"
                        placeholder="Your store ID"
                        variant="bordered"
                      />
                    </CardBody>
                  </Card>
                ) : (
                  <Button
                    variant="bordered"
                    size="sm"
                    onPress={handleOpenStoreId}
                  >
                    Store ID
                  </Button>
                )}
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
