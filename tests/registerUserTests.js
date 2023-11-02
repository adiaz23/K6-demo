import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { registerUser,registerCreatedUser} from "../modules/registerUser.js";
import { group } from 'k6';

const baseURL = "https://test-api.k6.io/user/register/";
export const options = {
    thresholds: {
      checks: ['rate>0.75']
    },
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: 50,
        iterations: 1,
        maxDuration:"10s"
      },
    },
  };

export default function(){
  group("Register multiple users with valid credentials", () => {
    registerUser(baseURL);
  });

  group("Register multiple user with credentials already used", () => {
    registerCreatedUser(baseURL);
  });
}

export function handleSummary(data) {
  let time = Date.now();
  return {
    [`reports/result_${time}.html`]: htmlReport(data),
  }
};