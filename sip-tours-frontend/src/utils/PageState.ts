const BETALENT_PAGE_STATE = "BETALENT_PAGE_STATE";

export function getPageState<T>(page: string) {
  const item = localStorage.getItem(BETALENT_PAGE_STATE);

  if (process.env.NODE_ENV === "development") {
    if (item && item !== "undefined") {
      const obj = JSON.parse(item) as T;
      return obj;
    }
  } else {
    if (item) {
      const obj = JSON.parse(item) as T;
      return obj;
    }
  }

  throw new Error("The state is undefined");
}

export function setPageState(page: string, obj: any) {
  localStorage.setItem(BETALENT_PAGE_STATE, JSON.stringify(obj));
}
