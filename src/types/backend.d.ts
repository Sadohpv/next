interface User {
  username: ReactNode;
  id: number;
  name: string;
  userName: string;
  email: srting;
}
interface IUser {
  id: number | undefined;
  userName: string | undefined;
  avatar: string | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
}
// const [data, setData] = useState<DataResponse>({});

interface FailResponse {
  reg: {
    id: number | undefined;
    userName: string | undefined;
    avatar: string | undefined;
    email: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
  };
  status : number;
}
