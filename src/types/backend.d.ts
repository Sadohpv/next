interface User {
  username: ReactNode;
  id: number;
  name: string;
  userName: string;
  email: srting;
}
interface IUser {
  status :1;
  id: number | undefined;
  email: string | undefined;
  password : string | undefined;
  userName: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  avatar: string | undefined;
  isAdmin : boolean | undefined
}
// const [data, setData] = useState<DataResponse>({});

interface FailResponse {
 

  status: 0 ;
  message : string | null;
}

