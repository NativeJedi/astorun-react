import { PaginationItem } from '@material-ui/lab';
import React, { useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Link, useRouteMatch } from 'react-router-dom';
import useQuery from '../../hooks/use-query.hook';

interface IPaginationProps {
  count: number;
  classes: {
    [key: string]: string;
  };
  onChange: ({ page }: { page: number }) => void;
}

const AppPagination = ({
  count,
  classes,
  onChange,
}: IPaginationProps): React.ReactElement => {
  const query = useQuery();
  const page: number = Number(query.get('page')) || 1;
  const { url } = useRouteMatch();

  useEffect(() => {
    onChange({ page });
  }, [page, onChange]);

  return (
    <Pagination
      shape="rounded"
      color="primary"
      classes={classes}
      page={page}
      count={count}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`${url}?page=${item.page}`}
          {...item}
        />
      )}
    />
  );
};

export default AppPagination;
