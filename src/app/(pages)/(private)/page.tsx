import { Card, CardBody } from '@nextui-org/card';

import { Heading } from '@/components/atom';
import { EmptyStates } from '@/components/molecul/EmptyStates';

import emptyIllustration from '@/assets/images/empty-state-task.svg';
import { CreateStores } from './components/CreateStore';

export default function Home() {
  return (
    <div className="mt-10 max-w-6xl px-6 lg:mx-auto lg:p-0">
      <Heading component="h1" variant="title-3">
        Your Store
      </Heading>
      <Card className="mt-9 p-6" shadow="sm">
        <CardBody>
          <EmptyStates
            imageSrc={emptyIllustration}
            title="No store to show"
            description="Looks like you don’t have stores for now. Add new stores to get started."
          >
           <CreateStores />
          </EmptyStates>
        </CardBody>
      </Card>
    </div>
  );
}
