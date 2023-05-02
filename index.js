const lorapacket = require("lora-packet");
const { default: LoraPacket } = require("lora-packet/out/lib/LoraPacket");

const nwkSKey = Buffer.from("11111111111111111111111111111111", "hex");

const appSKey = Buffer.from("11111111111111111111111111111111", "hex");

// const data = Buffer.from(
//   "QCUlJSWAKQBkvFrDD8sEDO/fyrajRHkosgPRtSUXHm/ABpvuZw==",
//   "base64"
// );

const data = Buffer.from(
  "QCIiIiKAKQBkvFrDD8sEDO/fyrajRHkosgPRtSUXHm/ABpvuZw==",
  "base64"
);

const packet = lorapacket.fromWire(data);

// console.log(packet.toString());
// console.log(packet.getPHYPayload());

// console.log(Buffer.from(packet.getPHYPayload(), "hex").toString("base64"));

// console.log(packet.getPHYPayload()[1]);

packet.getPHYPayload()[1] = "0xab";
packet.getPHYPayload()[2] = "0xad";
packet.getPHYPayload()[3] = "0xba";
packet.getPHYPayload()[4] = "0xbe";

console.log(packet.getPHYPayload());
console.log(Buffer.from(packet.getPHYPayload(), "hex").toString("base64"));

// // console.log(packet.toString());

// const constructedPacket = lorapacket.fromFields(
//   {
//     MType: "Unconfirmed Data Up",
//     DevAddr: Buffer.from("01020304", "hex"),
//     FCtrl: {
//       ADR: false,
//       ACK: true,
//       ADRACKReq: false,
//       FPending: false,
//     },
//     FCnt: Buffer.from("0003", "hex"),
//     payload: "test",
//   },
//   Buffer.from("11111111111111111111111111111111", "hex"),
//   Buffer.from("11111111111111111111111111111111", "hex")
// );

// // console.log(Buffer.from(JSON.stringify(constructedPacket), "utf-8"));

// const b = lorapacket.encrypt(constructedPacket, nwkSKey, appSKey);

// console.log(b.toString("base64"));

// console.log(data);
