import React, {FC} from 'react';

interface ButtonProps {
  test: string;
}

export const Button: FC<ButtonProps> = () => {

  return <button>Hello</button>
}