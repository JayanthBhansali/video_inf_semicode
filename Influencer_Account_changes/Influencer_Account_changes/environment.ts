// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  token: '',
  baseUrl:'http://52.172.29.253:8344',
  
    setDefaultAddress: "/api/customer/SetDefaultAddress",
    getCustomerAddresses: "/api/customer/addresses",
    addAddress: "/api/customer/addAddress",
    updateAddress: "/api/customer/UpdateAddress",
    deleteAddress: "/api/customer/DeleteAddress", 
    getCards: "/api/customer/cards",
    setDefaultCard : "/api/customer/SetDefaultCard"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
