const Client = require('@line/bot-sdk').Client;
require('dotenv').config();

const client = new Client({
    channelAccessToken: 'n8Bl860OTH6sGiOgre2HtWUG0XhzATy+7REev7j9JyAhjjm71XomzPISmKEfKP7blYTL/bLAU8dNepuR0s3r19tq+Gjg5dW+/MPZm15dFgDZQWS2rYeCiuM0b/cm18Y77A9iREWgLTDYYCoixkWFkwdB04t89/1O/w1cDnyilFU=',
    channelSecret: '90b08760a0aaae74607fda11f7de009a'
  });

//   client.pushMessage('U6d48015f726ee8dc0f6826814fb31992', {
//     type: 'text',
//     text: 'hello, world',
//   })
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

//   client.broadcast({
//     type: 'text',
//     text: '測試訊息',
//   })
//   .catch(e => console.log(e));


if (process.env.DRONE_BUILD_STATUS && process.env.DRONE_BUILD_STATUS != null){
    client.broadcast({
        type: 'text',
        text: `[${process.env.DRONE_BUILD_STATUS}] ${process.env.DRONE_REPO} (${process.env.DRONE_COMMIT_BRANCH}) "${process.env.DRONE_COMMIT_MESSAGE}" by ${process.env.DRONE_COMMIT_AUTHOR}`,
      })
      .catch(e => console.log(e));
}

