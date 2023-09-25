import { CognitoUserPool } from "amazon-cognito-identity-js";

const POOL_DATA = {
  UserPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
  ClientId: process.env.REACT_APP_AWS_COGNITO_APP_CLIENT_ID,
};

export default new CognitoUserPool(POOL_DATA);
