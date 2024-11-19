'use client';

import { zodResolver } from '@hookform/resolvers/zod';
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
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Text } from '@/components/atom';
import { storeSchema, StoreSchema } from '@/lib/validations/store';

export function CreateStores() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [openStoreId, setOpenStoreId] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<StoreSchema>({
    resolver: zodResolver(storeSchema),
    defaultValues: {
      name: '',
    },
  });

  const handleOpenStoreId = () => setOpenStoreId(true);
  const handleCloseStoreId = () => setOpenStoreId(false);

  // Handle reset form when close modal if any error form state or when storeid field is opened
  useEffect(() => {
    if (!isOpen) {
      reset();
      handleCloseStoreId();
    }
  }, [isOpen, reset]);

  const onSubmitStore: SubmitHandler<StoreSchema> = (payload) => {
    console.log(payload);
  };

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
            <form
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmitStore)}
            >
              <ModalHeader className="flex flex-col gap-1">
                Create Store
              </ModalHeader>
              <ModalBody>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      autoFocus
                      label="Store name"
                      labelPlacement="outside"
                      placeholder="Enter your store name"
                      variant="bordered"
                      isRequired
                      isInvalid={!!errors.name}
                      errorMessage={errors.name && errors.name.message}
                      {...field}
                    />
                  )}
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
                      <Controller
                        name="storeId"
                        control={control}
                        render={({ field }) => (
                          <Input
                            labelPlacement="outside"
                            placeholder="Your store ID"
                            variant="bordered"
                            {...field}
                          />
                        )}
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
                <Button type="submit" color="primary">
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