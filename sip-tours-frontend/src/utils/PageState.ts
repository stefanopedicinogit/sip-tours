const PAGE_STATE = "PAGE_STATE";

export function getPageState<T>(page: string) {
  const item = localStorage.getItem(PAGE_STATE);

  if (item) {
      const obj = JSON.parse(item) as T;
      return obj;
    }

  throw new Error("The state is undefined");
}

export function setPageState(page: string, obj: any) {
  localStorage.setItem(PAGE_STATE, JSON.stringify(obj));
}
