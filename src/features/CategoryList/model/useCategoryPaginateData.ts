import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from 'src/entities/Category';
import { useAuth } from 'src/entities/User';
import { useErrorHandler } from 'src/shared/api/errors/useErrorHandler';
import { ROUTES } from 'src/shared/config/routes';
import { IRenderItem } from 'src/shared/ui/RenderList/IRenderItem';
import { convertToItem } from './convertToItem';

const PAGE_SIZE = 10;

export const useCategoryPaginateData = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const loadedPages = useRef<number[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState<IRenderItem[]>([]);
  const { data, isFetching, isLoading, error, refetch } = useGetCategoriesQuery(
    {
      pagination: { pageSize: PAGE_SIZE, pageNumber: pageNumber },
      sorting: { type: 'ASC', field: 'createdAt' },
    },
    {
      refetchOnMountOrArgChange: true,
    },
  );

  useErrorHandler({ error });

  useEffect(() => {
    if (data === undefined) {
      loadedPages.current = [];
      setItems([]);
      setHasMore(true);
      setPageNumber(1);
    }
  }, [data]);

  useEffect(() => {
    if (isLoading && isFetching) {
      setItems([]);
    }
  }, [isFetching, isLoading]);

  const handleLastItem = useCallback(() => {
    if (!hasMore || isFetching) return;
    setPageNumber((prev) => prev + 1);
  }, [hasMore, isFetching]);

  useEffect(() => {
    if (
      data &&
      data.data.length > 0 &&
      !loadedPages.current.includes(pageNumber) &&
      data.pagination.pageNumber === pageNumber
    ) {
      loadedPages.current.push(pageNumber);
      setItems((prev) => [
        ...prev,
        ...data.data.map((category) =>
          convertToItem(category, () => navigate(`${ROUTES.products.basePath}${category.id}`)),
        ),
      ]);
    } else if (data && data.data.length < PAGE_SIZE) {
      setHasMore(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, pageNumber]);

  return {
    isAuth,
    isFetching,
    hasMore,
    items,
    refetch,
    handleLastItem,
  };
};
