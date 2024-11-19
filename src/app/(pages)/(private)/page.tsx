import { Button } from '@nextui-org/button';

import { Heading, Text } from '@/components/atom';

export default function Home() {
  return (
    <div>
      <Heading component="h1" variant="title-1">
        Hello World
      </Heading>
      <Text component="span">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit rem quis
        repudiandae enim optio facere at aspernatur? Atque, vitae, reiciendis
        accusamus labore animi laudantium placeat sint totam asperiores facilis
        mollitia.
      </Text>
      <Button color="primary">Sample</Button>
    </div>
  );
}
