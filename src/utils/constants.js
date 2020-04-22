export const resourcesURL =
  'https://forward.livestories.com/api/resource?filter={"include": [{"relation":"resourcetype" }, {"relation":"resourcescope" }]}';

export const businessURL =
'https://forward.livestories.com/api/business?filter={"where":{"idBusiness":{"eq":102}},"include":[{"relation":"eligibilities","scope":{"include":[{"relation":"idResource"}]}}]}';
