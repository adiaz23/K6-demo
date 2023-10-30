import { registerUser,registerCreatedUser} from "../modules/registerUser.js";
import { group } from 'k6';

const baseURL = "https://test-api.k6.io/user/register/";
export const options = {
    vus: 1,
    duration: '2s',
  };

export default function(){
  group("Register multiple users with valid credentials", () => {
    registerUser(baseURL);
  });

  group("Register multiple user with credentials already used", () => {
    registerCreatedUser(baseURL);
  });
}