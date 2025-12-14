import toast from "react-hot-toast";

export const useGetNotify = () => {
  const notify = (statuss, msg) => {
    if (statuss == "ok") {
      toast.success(msg || "yaxshi habar");
    } else if (statuss == "err") {
      toast.error(msg || "yomon habar");
    }
  };

  return notify;
};
