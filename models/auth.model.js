global.fetch = require("node-fetch");
const config = require("../config");
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");

const poolData = {
  UserPoolId: config.poolId,
  ClientId: config.clientId,
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

exports.signUp = (user) => {
  const emailData = { Name: "email", Value: user.email };
  const nameData = { Name: "name", Value: user.name };

  const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(
    emailData
  );
  const nameAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(
    nameData
  );
  return new Promise((resolve, reject) => {
    userPool.signUp(
      user.email,
      user.password,
      [emailAttribute, nameAttribute],
      null,
      (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      }
    );
  });
};

exports.signIn = (user) => {
  const loginCreds = {
    Username: user.email,
    Password: user.password,
  };

  const authCreds = new AmazonCognitoIdentity.AuthenticationDetails(loginCreds);

  const userCreds = {
    Username: user.email,
    Pool: userPool,
  };

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userCreds);

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authCreds, {
      onSuccess: (data) => {
        console.log(data);
        resolve(data);
      },
      onFailure: (error) => {
        console.log(error);
        reject(error);
      },
    });
  });
};

exports.signOut = () => {
  const cognitoUser = userPool.getCurrentUser();

  if (cognitoUser != null) {
    cognitoUser.signOut();
    return {
      success: "Signed out Successfully",
    };
  } else {
    return {
      error: "There was an error Signing out",
    };
  }
};

exports.getProfile = (userid) => {};
