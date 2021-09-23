//Configure AWS
if(c.aws_profile !== "DEPLOYED") {
    var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
    AWS.config.credentials = credentials;
  }