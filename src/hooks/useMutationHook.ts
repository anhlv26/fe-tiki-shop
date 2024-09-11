import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useMutationHook = <TData, TVariables>(
  callback: (variables: TVariables) => Promise<TData>
): UseMutationResult<TData, unknown, TVariables> => {
  const mutation = useMutation<TData, unknown, TVariables>({
    mutationFn: callback,
  });
  return mutation;
};
