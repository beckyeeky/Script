/**
 * @supported 660C1F5C3E2B 8E5B14F73C92
 */
 /*
[Script]
http-request ^https://sp\.kaola\.com/api/openad$ script-path=https://Choler.github.io/Surge/Script/Kaola.js

[MITM]
hostname = sp.kaola.com
*/

var data = {
  body: "{}",
  headers: {
    "Content-Type": "application/json"
  }
};
$done({response: data});