import clsx from 'clsx';
import { FC } from 'react';
import { WithChildren } from '../react18MigrationHelpers';

type Props = {
  className?: string;
};

const KTCardHeader: FC<Props & WithChildren> = (props) => {
  const { className, children } = props;
  return <div className={clsx('card-header', className && className)}>{children}</div>;
};

export { KTCardHeader };
