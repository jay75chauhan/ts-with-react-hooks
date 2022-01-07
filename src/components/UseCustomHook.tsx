import React, { useMemo } from "react";

interface RootObject {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu?: any;
  logo: string;
  level: number;
}

function useFetch<payload>(url: string): {
  data: payload | null;
  done: boolean;
} {
  const [data, setData] = React.useState<payload | null>(null);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d: payload) => setData(d));
    setDone(true);
  }, [url]);

  return { data, done };
}

export const UseCustomHook = () => {
  const { data, done } = useFetch<RootObject[]>("/public/hv-taplist.json");

  const portlandTapse = useMemo(() => {
    (data || []).filter((bav) => bav.producerLocation.includes("Portland"));
  }, [data]);

  return (
    <div>
      {done && <img height={200} width={200} src={data![7].logo} alt="" />}
    </div>
  );
};
