import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { format } from 'date-fns';
import { Trash } from 'lucide-react';
import Link from 'next/link';

import { Text } from '@/components/atom';
import { EmptyStates } from '@/components/molecul/EmptyStates';
import { getStores } from '@/lib/database/queries/stores';

import emptyIllustration from '@/assets/images/empty-state-task.svg';

import { CreateStores } from './CreateStore';

export default async function StoreList() {
  const storeList = await getStores();

  if (!storeList.length) {
    return (
      <Card className="mt-9 p-6" shadow="sm">
        <CardBody>
          <EmptyStates
            imageSrc={emptyIllustration}
            title="No store to show"
            description="Looks like you don’t have stores for now. Add new stores to get started."
          >
            <CreateStores store={storeList} />
          </EmptyStates>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <CreateStores store={storeList} />
      {storeList.map((store) => (
        <Card
          as={Link}
          key={store.id}
          shadow="sm"
          className="h-48"
          href={`/${store.storeId}`}
        >
          <CardHeader>
            <Button isIconOnly variant="light" color="danger" size="sm">
              <Trash size={14} />
            </Button>
          </CardHeader>
          <CardBody className="pt-8">
            <Chip size="sm" variant="flat">
              <Text component="span" size="xsmall" className="text-gray-600">
                {store.storeId}
              </Text>
            </Chip>
            <Text weight="medium" className="mt-2">
              {store.name}
            </Text>
          </CardBody>
          <CardFooter className="border-t">
            <Text size="xsmall" className="text-gray-600">
              Updated {format(new Date(store.updatedAt as Date), 'dd MMM yyyy')}
            </Text>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
