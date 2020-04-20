// const resourcesURL = `https://forward.livestories.com/api/resource?filter=\{%22include%22:%20\[\{%22relation%22:%22resourcetype%22%20\},%20\{%22relation%22:%22resourcescope%22%20\}\]\}' -H 'Connection: keep-alive' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'Accept: application/json, text/plain, */*' -H 'Sec-Fetch-Dest: empty' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36' -H 'Sec-Fetch-Site: same-origin' -H 'Sec-Fetch-Mode: cors' -H 'Referer: https://forward.livestories.com/resources' -H 'Accept-Language: en-US,en;q=0.9,es;q=0.8' -H 'Cookie: _ga=GA1.2.542671277.1526423399; lc_sso10618872=1558977356925; __gads=ID=4662a2aae01ced31:T=1586358805:S=ALNI_MboO2LezuuqZmD7PUyNAqNHso13Uw; _gcl_au=1.1.891615596.1586378343; _fbp=fb.1.1586378347480.1515134617; mp_8645437928e12fe7a93115d727a3e4bc_mixpanel=%7B%22distinct_id%22%3A%20%225a130dcda464fa0013dc658c%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fapps.livestories.com%2Flogin%22%2C%22%24initial_referring_domain%22%3A%20%22apps.livestories.com%22%2C%22team%22%3A%20%7B%22name%22%3A%20%22si-ba-team%22%2C%22id%22%3A%20%225c9925397a9e530013746265%22%7D%2C%22User%20Agent%22%3A%20%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F80.0.3987.163%20Safari%2F537.36%22%2C%22%24search_engine%22%3A%20%22google%22%7D; mp_mixpanel__c=0' --compressed`;
const resourcesURL =
  'https://forward.livestories.com/api/resource?filter":"\\{"include": \\[\\{"relation":"resourcetype" \\}, \\{"relation":"resourcescope" \\}\\]\\}';
import axios from 'axios';

const fetchResources = async () => {
  try {
    const { data } = await axios.get(`${resourcesURL}`, {});
    return { resources: data.resources };
  } catch (err) {
    if (axios.isCancel(err)) return { cancelPrevQuery: true };
    return [err];
  }
};

export { resourcesURL, fetchResources };
