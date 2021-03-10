## Technology Radar generator

A library that generates an interactive radar, inspired and based on [thoughtworks.com/radar](http://thoughtworks.com/radar).

This is a fork from the Open Source version at https://github.com/thoughtworks/build-your-own-radar  

## Changes from original version
* Added 2 extra rings for the circle: Mainstream and Deprecated
* Made the radar Emesa specific:
    * Added logo
    * Added Career buttons that points to the Technology vacancies we have
    * Changed footer to add SEO friendly keywords about new job search
* Removed from code possibility to load sheet from query string
* Removed the extra step (form) to link a custom CSV file and hardcoded the link in the code
to make the radar load directly; this also means query string can stay empty
* Changed a bit the layout since the Radar now needs to accommodate a bigger circle due to the 2 extra rings
* Changed also this README to reflect said changes


## How To Use
Add the link to CSV in `site.js` in `window.dataUrl`.

For data format read below.


### Using CSV data

You need to make your data public in a form we can digest.

| name          | ring   | quadrant               | isNew | description                                             |
|---------------|--------|------------------------|-------|---------------------------------------------------------|
| Composer      | adopt  | tools                  | TRUE  | Although the idea of dependency management ...          |
| Canary builds | trial  | techniques             | FALSE | Many projects have external code dependencies ...       |
| Apache Kylin  | assess | platforms              | TRUE  | Apache Kylin is an open source analytics solution ...   |
| JSF           | hold   | languages & frameworks | FALSE | We continue to see teams run into trouble using JSF ... |


You can enter any URL that responds CSV data into the input field on the first page.

```
name,ring,quadrant,isNew,description  
Composer,adopt,tools,TRUE,"Although the idea of dependency management ..."  
Canary builds,trial,techniques,FALSE,"Many projects have external code dependencies ..."  
Apache Kylin,assess,platforms,TRUE,"Apache Kylin is an open source analytics solution ..."  
JSF,hold,languages & frameworks,FALSE,"We continue to see teams run into trouble using JSF ..."  
```

***Note:*** The CSV file parsing is using D3 library, so consult the D3 documentation for the data format details.

***Note:*** The quadrants of the radar, and the order of the rings inside the radar will be drawn in the order they appear in your data.

Check [this page](https://www.thoughtworks.com/radar/how-to-byor) for step by step guidance.

### More complex usage

To create the data representation, you can use the Google Sheet [factory](/src/util/factory.js) or CSV, or you can also insert all your data straight into the code.

The app uses [Tabletop.js](https://github.com/jsoma/tabletop) to fetch the data from a Google Sheet or [D3.js](https://d3js.org/) if supplied as CSV, so refer to their documentation for more advanced interaction.  The input data is sanitized by whitelisting HTML tags with [sanitize-html](https://github.com/punkave/sanitize-html).

The application uses [webpack](https://webpack.github.io/) to package dependencies and minify all .js and .scss files.

The application also supports private google sheets. Following flags need to be set for private sheets to work. API key and OAuth Client ID can be obtained from your Google developer console.


```
export ENABLE_GOOGLE_AUTH=true
export API_KEY=[Google API Key]
export CLIENT_ID=[Google Client ID]
```

To enable Google Tag Manager, add the following environment variable.
```
export GTM_ID=[GTM ID]
```

## Technicalities

All tasks are defined in `package.json`.

Please write tests whenever possible. 
Make sure you have nodejs installed.

- `git clone git@github.com:EmesaDEV/technology-radar.git`
- `npm install`
- `npm test` - to run your tests
- `npm run dev` - to run application in localhost:8080. This will watch the .js and .css files and rebuild on file changes

To run End to End tests in headless mode
- add a new environment variable 'TEST_URL' and set it to 'http://localhost:8080/'
- `npm run end_to_end_test`

To run End to End tests in debug mode
- add a new environment variable 'TEST_URL' and set it to 'http://localhost:8080/'
- `npm run start`
- Click on 'Run all specs' in cypress window

### Don't want to install node? Run with one line docker

     $ docker run -p 8080:8080 -v $PWD:/app -w /app -it node:10.15.3 /bin/sh -c 'npm install && npm run dev'

***Note***: If you are facing Node-sass compile error while running, please prefix the command `npm rebuild node-sass` before `npm run dev`. like this
```
npm install && npm rebuild node-sass && npm run dev
```

After building it will start on `localhost:8080`

## Join us

Checkout our [Careers page](https://www.werkenbijemesa.nl/?lang=en&tags%5B%5D=department%2CProduct%20%26%20Technology&)
