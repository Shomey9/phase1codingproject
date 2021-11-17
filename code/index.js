//Using the MediaWiki Action API web service, this function allows users to dynamically access MediaWiki's API throughout different web pages in Liquidpedia.
//Refer to MediaWiki documentation: https://www.mediawiki.org/wiki/API:Main_page

const makeMyApiEndpoint = (urlOfPage) => {
    return `https://liquipedia.net/counterstrike/api.php?action=parse&formatversion=1&page=${urlOfPage.substr(37, urlOfPage.length - 1)}&prop=text&format=json&origin=*`
}

console.log(makeMyApiEndpoint("https://liquipedia.net/counterstrike/S1mple"));

//Make my TopPage
const renderTopContent = () => {
    fetch(makeMyApiEndpoint('https://liquipedia.net/counterstrike/HLTV/Team_Ranking'))
    .then(response => response.json())
    .then(pageContent => { 
        // console.log(pageContent); //Shows pageContent content.
        // console.log(typeof(pageContent)); //Tells us that pageContent is an object.

        console.log((new DOMParser()).parseFromString(pageContent.parse.text['*'], 'text/html')) //Parses an SVG string inside an object and returns an HTML Document. //

        //TRY TO TIDY UP THIS CODE BELOW LATER// 

        const wikiTablesHTMLCollection = (new DOMParser()).parseFromString(pageContent.parse.text['*'], 'text/html').querySelectorAll(".template-box"); 
        //  console.log((new DOMParser()).parseFromString(pageContent.parse.text['*'], 'text/html').querySelector("div.template-box")); //Queries all elements (wikitables) with class name "template-box" into an html collection.



        const wikiTables = [...wikiTablesHTMLCollection]; //
        // console.log(wikiTables); //Takes the HTML collection and puts it all in an array.

        const foundTable = wikiTables.find(table => {
            return table.querySelector('#October_2021')
        })
        console.log(foundTable);

        const tableItems = [...foundTable.querySelectorAll("tr")];
        console.log(foundTable.querySelectorAll("tr"));

        const teams = tableItems.slice(2, 22);
        console.log(teams);

        
        console.log(teams.map(allTeamInfo => {
            allTeamInfo.find(teamInfoIWant => {
                return teamInfoIWant.querySelector('img')
            })
        }))




        

        // // console.log(wikiTables[0]["innerHTML"]);
        // //Example of what you see in a wikiTable unparsed.

        // // console.log((new DOMParser()).parseFromString(wikiTables[0]["innerHTML"], 'text/html'));
        // //Parses wikiTable from SVG string into HTML.

        // // console.log((new DOMParser()).parseFromString(wikiTables[0]["innerHTML"], 'text/html').querySelector('#January_2021')); //
        // //An example of what the piece of code I'm filtering in the wikiTables looks like. Queries for id selector in parsed wikiTable.
        // //Output: <span class="mw-headline" id="January_2021"><span style="display:none;">January 2021</span></span>
        // //console.log(typeof((new DOMParser()).parseFromString(wikiTables[0]["innerHTML"], 'text/html').querySelector('#January_2021'))) returns an object.

        // // console.log((new DOMParser()).parseFromString(pageContent.parse.text['*'], 'text/html').querySelector('#October_2021'));
        // console.log((new DOMParser()).parseFromString(pageContent.parse.text['*'], 'text/html').querySelector('#October_2021'));
        // console.log((new DOMParser()).parseFromString('<span class="mw-headline" id="October_2021"><span style="display:none;">October 2021</span></span>', "text/html").querySelector('#October_2021'))
        //Piece of code I'm trying to filter out. 

        // console.log(wikiTables.find(wikiTable => 
            
            
            // wikiTable.id == "October_2021"    
            
            
        // ))
        


        // console.log(wikiTables.filter(wikiTable =>  
            // wikiTable["autofocus"]
            // wikiTable.innerHTML

            //(new DOMParser()).parseFromString(wikiTable["innerHTML"], 'text/html').querySelector('#October_2021') === 
            //(new DOMParser()).parseFromString('<span class="mw-headline" id="October_2021"><span style="display:none;">October 2021</span></span>', "text/html").querySelector('#October_2021')
        // ));
        // //Filters the October_2021 wikiTable I want out of all the wikiTables. I should get an array with 1 item.
        // //wikiTable = div.template-box

        // const testingParseFromString = () => {
        //     return (new DOMParser()).parseFromString('<span class="mw-headline" id="October_2021"><span style="display:none;">October 2021</span></span>', "text/html").querySelector('#October_2021');
        // }
        // // console.log(testingParseFromString());
        //Understanding parseFromString


        //TRY TO TIDY UP THIS COVE ABOVE LATER//

        //Junk Is Under This

        // console.log(wikiTables.forEach(wikiTable => {
        //     myEmptyArray = [];
        //     myEmptyArray.push((new DOMParser()).parseFromString(wikiTable["innerHTML"], 'text/html'));
        //     return myEmptyArray;
        // }))

        // console.log((new DOMParser()).parseFromString('<span class="mw-headline" id="October_2021"><span style="display:none;">October 2021</span></span>', 'text/html').querySelector('#October_2021') )
        

        // const parser = new DOMParser() //
        // const convertPageFromStringToHtml = parser.parseFromString(pageContent.parse.text['*'], "text/html"); //
        // // console.log(convertedPageFromStringToHtml.getElementsByClassName("template-box"))
        // // const wikiTables = document.getElementsByClassName("wikiTable");
        // // console.log(wikiTables.filter(word => word === "October_2021"))
        // const wikiTables = [...convertPageFromStringToHtml.querySelectorAll(".wikitable")];//
        // // console.log(wikiTables);
        // wikiTables.filter(wikiTable => {//

        
        //     const wikiTableInnerString = wikiTable["innerHTML"]//
        //     const convertStringToHtml = parser.parseFromString(wikiTableInnerString, "text/html");//
        //     const query = convertStringToHtml.querySelector("template-box");//
        //     console.log(query);//
        // });//



        // console.log(wikiTables[0]["innerHTML"]);//
        // const wikiTable = wikiTables[0]["innerHTML"]; //
        // const convertInnerHtmlToHtml = parser.parseFromString(wikiTable, "text/html");//
        // const query = convertInnerHtmlToHtml.querySelector(".team-template-team-icon");//
        // console.log(query);//
        // const secondTest = test.filter(wikiTable => wikiTable["innerHTML"].querySelector("#October_2021") === '<span style="display:none;">October 2021</span>');
        // console.log(secondTest);
        // const secondTest = test.filter(wikiTable => wikiTable.tbody.tr.th.a === "October 2021");
        // console.log(secondTest)

    })
    .catch(error => alert(error))
}

renderTopContent();

// const testMyArrayFilter = () => {
//     console.log([1, 2, 3, 4, 5].filter(number => number == 5));
// }
// testMyArrayFilter();








// function loadMyAPI() {
// fetch("https://liquipedia.net/counterstrike/api.php?action=parse&formatversion=1&page=S1mple&prop=text&format=json&origin=*") 
// .then(resp => resp.json())
// .then(playerInfo => //renderMyPage(playerInfo)
//     {
//     playerInfo.parse.text["*"];
//     const parser = new DOMParser();
//     var doc = parser.parseFromString(playerInfo.parse.text['*'], "text/html");
//     console.log(doc.querySelector(".team-template-team-icon"));  
//     }
// )
// .catch(error => console.log(error))
// }


// const renderMyPage = (api) => {
//     api.parse.text['*'];
//     const parser = new DOMParser();
//     var document = parser.parseFromString(api.parse.text['*'], 'text/html');
//     console.log(document.querySelector("h1"));
// }

// loadMyAPI();