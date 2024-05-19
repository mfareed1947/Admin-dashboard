import { FC } from 'react';

type Props = {
  createdBy: string;
  createdAt: string;
};

const CountryCreationCell: FC<Props> = ({ createdBy, createdAt }) => {
  return (
    <div className='d-flex flex-column'>
      <span className='text-gray-800 mb-1'>{createdBy}</span>
      <span>{createdAt}</span>
    </div>
  );
};

export { CountryCreationCell };
