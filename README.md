# DogeAPI

[![Dependency Status](https://david-dm.org/ottoo/DogeAPI/status.svg)](https://david-dm.org/ottoo/DogeAPI#info=dependencies) [![devDependency Status](https://david-dm.org/ottoo/DogeAPI/dev-status.svg)](https://david-dm.org/ottoo/DogeAPI#info=devDependencies)
[![Build Status](https://api.travis-ci.org/ottoo/DogeAPI.svg)](https://travis-ci.org/ottoo/DogeAPI)

A cleaner JSON API for dog parks and trash bins. Currently will only support Tampere area data. In the future planning to act as a platform for multiple finnish cities open data information.


Run the server

```
npm run server
```

Run the server in watch mode (requires nodemon)  

```
npm run watch
```

Run tests  

```
npm run test
```

---

### Trashbins API

The API will return Tampere area trashbins in the following simple format.

##### route

```
[hostname]:[port]/api/v1/trashbins?location=Tampere
```

##### count

Total count of trashbins available

##### trashbins

- **id**  
  Unique identifier for the bin

- **location**  
  Location of the trashbin in the google maps supported WSG84 -format with lat & lng

- **type**  
  Possible type of the trashbin

```
{
    count: 2225,
    trashbins: [
        id: 'WFS_ROSKIS.123123',
        location: {
            lat: 23.69087268355268,
            lng: 61.50230402590069
        },
        type: 'ROSKAKORI'
    ]
}
```
