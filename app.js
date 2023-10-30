const MessagingApiClient =
  require("@line/bot-sdk").messagingApi.MessagingApiClient;
require("dotenv").config();

const client = new MessagingApiClient({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
});

// client
//   .broadcast({ messages: [{ type: "text", text: "hello, world" }] })
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

if (process.env.DRONE_BUILD_STATUS && process.env.DRONE_BUILD_STATUS != null) {
  if (process.env.DRONE_BUILD_STATUS === "failure") {
    client
      .broadcast({
        messages: [
          {
            type: "text",
            text: `${process.env.DRONE_REPO} (${process.env.DRONE_COMMIT_BRANCH}) - Buid #${process.env.DRONE_BUILD_NUMBER}: "${process.env.DRONE_COMMIT_MESSAGE}". Status: [${process.env.DRONE_BUILD_STATUS}] Commited By ${process.env.DRONE_COMMIT_AUTHOR_NAME} 😮`,
          },
        ],
      })
      .catch((e) => console.log(e));
  }

  client
    .broadcast({
      messages: [
        {
          type: "text",
          text: `${process.env.DRONE_REPO} (${process.env.DRONE_COMMIT_BRANCH}) - Buid #${process.env.DRONE_BUILD_NUMBER}: "${process.env.DRONE_COMMIT_MESSAGE}". Status: [${process.env.DRONE_BUILD_STATUS}] Commited By ${process.env.DRONE_COMMIT_AUTHOR_NAME} 🎉`,
        },
      ],
    })
    .catch((e) => console.log(e));
}

/**
 * api:
 * https://developers.line.biz/en/reference/messaging-api/#send-push-message
 * https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-reply-message
 *
 */
