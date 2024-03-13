export const INPUTS = {
  store: [],
  products: ["storeid"],
  myorder: [],
  order: ["storeid", "productName", "numberofunits"],
  "update-product": ["storeid", "productName", "numberofunits", "pricePerUnit"],
  "all-users": [],
  "update-users": [
    "updateUserid",
    "updateName",
    "updateType",
    "updateLatitude",
    "updateLongitude",
  ],
  "delete-users": ["deleteUserid"],
};
