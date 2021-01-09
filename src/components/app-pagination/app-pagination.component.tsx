import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

interface IPaginationProps {
  count: number;
  classes: {
    [key: string]: string;
  };
}

const AppPagination = ({
  count,
  classes,
}: IPaginationProps): React.ReactElement => {
  return (
    <Pagination
      classes={classes}
      count={count}
      shape="rounded"
      color="primary"
    />
  );
};

export default AppPagination;
