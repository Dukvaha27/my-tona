export type authProps = {
  title: string;
  buttonName: string;
  data:dataProps
  onChange: (data:dataProps) => void;
  onClick:() => void;
  error:string
};

export type dataProps = {
  username: string;
  password: string;
};
