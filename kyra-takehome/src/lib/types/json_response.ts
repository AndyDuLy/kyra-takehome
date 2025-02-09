export type JsonResponse<T> = {
  status: number;
  message?: string;
  data: T;
};
