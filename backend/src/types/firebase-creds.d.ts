// firebase.json is a service account credentials file that is not committed to
// version control. This declaration tells TypeScript its shape.
declare module "*/firebase.json" {
  import { ServiceAccount } from "firebase-admin";
  const value: ServiceAccount;
  export default value;
}
