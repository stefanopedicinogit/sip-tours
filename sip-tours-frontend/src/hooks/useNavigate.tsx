import { setPageState } from "@/utils/PageState";
import { useRouter } from "next/router";

export interface NavigateOptions {
  replace?: boolean;
  state?: any;
}

const useNavigate = () => {
  const router = useRouter();

  const navigate = (path: string, options?: NavigateOptions) => {
    if (options) {
      if (options.state) {
        setPageState(path, options.state);
      }

      if (options.replace) {
        router.replace(path);
        return;
      }
    }

    router.push(path);
  };

  return navigate;
};

export default useNavigate;
