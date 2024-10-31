import React, { ElementType } from 'react';

type Props = {
  component: ElementType,
}


export const Section: React.FC<Props> = ({ component: Component }) => {
  return (
    <section>
      <Component />
    </section>
  );
};
