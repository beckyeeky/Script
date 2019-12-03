/**
 * @supported 660C1F5C3E2B 8E5B14F73C92
 */
 /*
[Script]
http-response ^https://api\.rr\.tv/v3plus/index/(channel|todayChoice)$ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/RRad.js

[MITM]
hostname = api.rr.tv
*/

if ($request.method === "OPTIONS") {
  $done({});
} else {
  var obj = JSON.parse($response.body);
  if (obj.data.sections) {
    for (var i = obj.data.sections.length -1; i >= 0 ; i--) {
      if (obj.data.sections[i].sectionType === "AD") {
        obj.data.sections.splice(i,1);
      }
    }
  }
  $done({body: JSON.stringify(obj)});
}