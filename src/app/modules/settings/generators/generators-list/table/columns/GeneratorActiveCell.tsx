import { FC } from 'react';

type Props = {
  isActive: boolean;
};

const GeneratorActiveCell: FC<Props> = ({ isActive }) => {
  return (
    <div className={`badge badge-${isActive ? 'success' : 'danger'} fw-bolder`}>
      {isActive ? 'Yes' : 'No'}
    </div>
  );
};

export { GeneratorActiveCell };
