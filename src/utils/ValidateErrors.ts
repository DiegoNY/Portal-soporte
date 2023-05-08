export const ValidateStatus = (error: ErrorEvent | any) => {
  let error_status = 501;
  const { stack } = error;
  if (stack.includes("401")) {
    error_status = 401;
  }
  return error_status;
};
