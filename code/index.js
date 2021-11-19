//Using the MediaWiki Action API web service, this function allows users to dynamically access MediaWiki's API throughout different web pages in Liquidpedia.
//Refer to MediaWiki documentation: https://www.mediawiki.org/wiki/API:Main_page
// const BASE_URL = 'https://liquipedia.net'
const makeMyApiEndpoint = (urlOfPage) => {
    return `https://liquipedia.net/counterstrike/api.php?action=parse&formatversion=1&page=${urlOfPage.substr(37, urlOfPage.length - 1)}&prop=text&format=json&origin=*`
}

// console.log(makeMyApiEndpoint('https://liquipedia.net/counterstrike/HLTV/Team_Ranking')); //Test my makeMyApiEndpoint function

//Make my BottomPage






//Make my TopPage
const loadTopContent = () => {    
    fetch(makeMyApiEndpoint('https://liquipedia.net/counterstrike/HLTV/Team_Ranking'))
    .then(response => response.json())
    .then(pageContent => {
       
        const svgFileOfPage = pageContent.parse.text['*']

        const convertSvgToHtml = (svgString) => {
            return (new DOMParser()).parseFromString(svgString, 'text/html');
        }

        const htmlFileOfPage = convertSvgToHtml(svgFileOfPage);
        console.log(htmlFileOfPage);
        const whichTableDoIWant = () => {
            const previousMonth = () => {
                const localDate = new Date();
                const months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                     'October',
                    'November',
                    'December',
                ];
                return months[localDate.getMonth()-1];
            }

            const currentYear = () => {
                return (new Date()).getFullYear()
            }

            return `${previousMonth()}_${currentYear()}`
    

        };
        
        const createCollectionToFind = (selector, object) => {
            return [...object.querySelectorAll(selector)];
        }
    
        const searchForLatestTable = (collection) => {
            return collection.find(table => {
                return table.querySelector(`#${whichTableDoIWant()}`)
            })
        }
        
        const recentRankingTableHtml = searchForLatestTable(createCollectionToFind('.template-box', htmlFileOfPage));
        // console.log(createCollectionToFind('.template-box', htmlFileOfPage))
        // console.log(recentRankingTableHtml)

        // console.log(recentRankingTableHtml.querySelector('table'));
        const a = recentRankingTableHtml.querySelector('table');
        const b = [...a.querySelectorAll('tr')]
        const c = b.slice(2, 22);
        const d = c.map(stuff => stuff.querySelector('a'));
        // e = ([...(recentRankingTableHtml.querySelector('table')).querySelectorAll('tr)].slice(2,22)).map(stuff=>stuff.querySelector('a'))
        // console.log(d);
        let e = d.map(stuff => stuff.attributes[1].textContent)
        // console.log(a);
        // console.log(b);
        // console.log(c);
        // console.log(d);
        console.log(e);
        
        const teamRank1 = document.querySelector('#teamRank1');
        const teamRank2 = document.querySelector('#teamRank2');
        const teamRank3 = document.querySelector('#teamRank3');
        const teamRank4 = document.querySelector('#teamRank4');
        const teamRank5 = document.querySelector('#teamRank5');
        const teamRank6 = document.querySelector('#teamRank6');
        const teamRank7 = document.querySelector('#teamRank7');
        const teamRank8 = document.querySelector('#teamRank8');
        const teamRank9 = document.querySelector('#teamRank9');
        const teamRank10 = document.querySelector('#teamRank10');
        const teamRank11 = document.querySelector('#teamRank11');
        const teamRank12 = document.querySelector('#teamRank12');
        const teamRank13 = document.querySelector('#teamRank13');
        const teamRank14 = document.querySelector('#teamRank14');
        const teamRank15 = document.querySelector('#teamRank15');
        const teamRank16  = document.querySelector('#teamRank16');
        const teamRank17 = document.querySelector('#teamRank17');
        const teamRank18 = document.querySelector('#teamRank18');
        const teamRank19 = document.querySelector('#teamRank19');
        const teamRank20 = document.querySelector('#teamRank20');
        [teamRank1.innerText,teamRank2.innerText,teamRank3.innerText,teamRank4.innerText,teamRank5.innerText,
        teamRank6.innerText,teamRank7.innerText,teamRank8.innerText,teamRank9.innerText,teamRank10.innerText,
        teamRank11.innerText,teamRank12.innerText,teamRank13.innerText,teamRank14.innerText,teamRank15.innerText,
        teamRank16.innerText,teamRank17.innerText,teamRank18.innerText,teamRank19.innerText,teamRank20.innerText] = 
        e;
        
        const Rank1 = document.querySelector('#rank1');
        const Rank2 = document.querySelector('#rank2');
        const Rank3 = document.querySelector('#rank3');
        const Rank4 = document.querySelector('#rank4');
        const Rank5 = document.querySelector('#rank5');
        const Rank6 = document.querySelector('#rank6');
        const Rank7 = document.querySelector('#rank7');
        const Rank8 = document.querySelector('#rank8');
        const Rank9 = document.querySelector('#rank9');
        const Rank10 = document.querySelector('#rank10');
        const Rank11 = document.querySelector('#rank11');
        const Rank12 = document.querySelector('#rank12');
        const Rank13 = document.querySelector('#rank13');
        const Rank14 = document.querySelector('#rank14');
        const Rank15 = document.querySelector('#rank15');
        const Rank16  = document.querySelector('#rank16');
        const Rank17 = document.querySelector('#rank17');
        const Rank18 = document.querySelector('#rank18');
        const Rank19 = document.querySelector('#rank19');
        const Rank20 = document.querySelector('#rank20');

        [Rank1.src,Rank2.src,Rank3.src,Rank4.src,Rank5.src,
        Rank6.src,Rank7.src,Rank8.src,Rank9.src,Rank10.src,
        Rank11.src,Rank12.src,Rank13.src,Rank14.src,Rank15.src,
        Rank16.src,Rank17.src,Rank18.src,Rank19.src,Rank20.src] = e.map(el => `images/${el}.png`)
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
    
    // const fetchTeamMembers = () => {
    //     (([...(recentRankingTableHtml.querySelector('table')).querySelectorAll('tr')].slice(2,22)).map(stuff=>stuff.querySelector('a'))).map(stuff => stuff.attributes[1].textContent).map(el => {
    //         fetch(makeMyApiEndpoint(el))
    //         .then(resp=>resp.json())
    //         .then(pageContent => {

    //             const svgFileOfPage = pageContent.parse.text['*'];
    //             const convertSvgToHtml = (svgString) => {
    //                 return (new DOMParser()).parseFromString(svgString, 'text/html');
    //             }
    //             const htmlFileOfPage = convertSvgToHtml(svgFileOfPage);
                

    //             const createCollectionToFind = (selector, object) => {
    //                 return [...object.querySelectorAll(selector)];
    //             }
            
    //             const searchForLatestTable = (collection) => {
    //                 return collection.find(table => {
    //                     return table.querySelector(`#${whichTableDoIWant()}`)
    //                 })
    //             }
                
    //             const activePlayersTableHTML = searchForLatestTable(createCollectionToFind('.table-responsive', htmlFileOfPage));


    //         })
    //         .catch(error=>alert(error))    
        
            
        
            
        
    } 
    )
    .catch(error => alert(error))

    // fetchTeamMembers();

}
    


// const allImages = ".topTeamLogoImg"
const rank1Image = document.querySelector('#rank1');
// console.log(rank1Image);
rank1Image.addEventListener("click", function(e) {
    e.target.style.display = "none";
})
rank1Image.addEventListener("mouseout", function(e) {
    e.target.style.display = "";
})

//Load Bottom Content
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#player-input-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let userText = form.querySelector('#textInputIgn').value;

        fetch(makeMyApiEndpoint(`https://liquipedia.net/counterstrike/${userText}`))
        .then(resp=>resp.json())
        .then(pageContent=> {
            const html = (new DOMParser()).parseFromString((pageContent.parse.text['*']), 'text/html')
            const playerDescription = html.querySelector('p');
            console.log(playerDescription)
            const playerName = playerDescription.querySelector('b').innerText;
            console.log(playerName);
            document.querySelector('#playerName').innerText = playerName
        }
        ).catch(error => alert(error))
        form.reset()
    })
})

loadTopContent();
// const testing = () => {
// fetch(makeMyApiEndpoint('https://liquipedia.net/counterstrike/S1mple'))
// .then(resp=>resp.json())
// .then(pageContent=> {
//     const html = (new DOMParser()).parseFromString((pageContent.parse.text['*']), 'text/html')
//     const playerDescription = html.querySelector('p');
//     console.log(playerDescription)
//     const playerName = playerDescription.querySelector('b').innerText;
//     console.log(playerName);
//     document.querySelector('#playerName').innerText = playerName
// }
// )}
// testing();
// const form = document.querySelector('#player-input-form')
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     let userText = form.querySelector('#textInputIgn').value;

//     fetch(makeMyApiEndpoint(userText))
//     .then(resp=>resp.json())
//     .then(pageContent=> {
//         ((new DOMParser()).parseFromString(pageContent.parse.text), 'text/html')
//     })
    
// })
// fetch(makeMyApiEndpoint('https://liquipedia.net/counterstrike/api.php?action=parse&formatversion=1&page=S1mple&prop=text&format=json&origin=*'))
//     .then(resp=>resp.json())
//     .then(pageContent=> {
//         const svgFileOfPage = pageContent.parse.text['*'];
//         console.log(svgFileOfPage)
            
//     })
//     .catch(error=>alert(error))







        
        // let 

        // console.log(recentRankingTableHtml.querySelector('table').querySelectorAll('a'))
        // console.log(recentRankingTableHtml.querySelectorAll('.team-template-image-icon lightmode'))
        // console.log(createCollectionToFind('a', recentRankingTableHtml));
        // const topTeamLogos = topTeamsTableContent.map(teamRowContent => teamRowContent.querySelector("img"));

        
        // team-template-image-icon lightmode
        
        
        
        // htmlFileOfPage.find(html => html.querySelector(`#${whichTableDoIWant()}`));
        
        // // .querySelector(`#${whichTableDoIWant()}`)
        // console.log(findMyTable);
        // const findMyTable 

        // const tablesOfPage = htmlFileOfPage.querySelectorAll("table");
        
        // const foundTable = wikiTables.find(table => {
            //         return table.querySelector('#October_2021')
            //     })
            //     // console.log(foundTable);
        // console.log((new DOMParser()).parseFromString(pageContent.parse.text['*'], 'text/html').querySelectorAll(".template-box")) 75
    
        // const wikiTablesHTMLCollection = (new DOMParser()).parseFromString(pageContent.parse.text['*'], 'text/html').querySelectorAll(".template-box");
        // console.log(wikiTablesHTMLCollection);
        // console.log((new DOMParser()).parseFromString(pageContent.parse.text['*'], 'text/html')) //Parses an SVG string inside an object and returns an HTML Document. //
        
    //     const foundTable = wikiTables.find(table => {
    // //         return table.querySelector('#October_2021')
    // //     })
    // //     // console.log(foundTable);
        



// const renderTopComment = () => {

    // const top20Teams = []

    // const team
    // let topTeamLogos = [...document.querySelectorAll('.topTeamLogoImg')];
    // topTeamLogos.map(topTeamLogo => topTeamLogo.attributes[2].textContent = `images/${team}.png`)

    // console.log(topTeamLogos)


    // topTeamLogos[0].attributes[2].textContent = "images/astralis.png"
    // console.log(rank1TeamLogos);



    //     //////////////////
        // console.log(pageContent); //Shows pageContent content.
        // console.log(typeof(pageContent)); //Tells us that pageContent is an object.

        // console.log((new DOMParser()).parseFromString(pageContent.parse.text['*'], 'text/html')) //Parses an SVG string inside an object and returns an HTML Document. //

        //TRY TO TIDY UP THIS CODE BELOW LATER// 

        // const wikiTablesHTMLCollection = (new DOMParser()).parseFromString(pageContent.parse.text['*'], 'text/html').querySelectorAll(".template-box"); 
        // console.log((new DOMParser()).parseFromString(pageContent.parse.text['*'], 'text/html').querySelector("div.template-box")); //Queries all elements (wikitables) with class name "template-box" into an html collection.



    //     const wikiTables = [...wikiTablesHTMLCollection]; //
    //     // console.log(wikiTables); //Takes the HTML collection and puts it all in an array.

    //     const foundTable = wikiTables.find(table => {
    //         return table.querySelector('#October_2021')
    //     })
    //     // console.log(foundTable);

    //     const tableItems = [...foundTable.querySelectorAll("tr")];
    //     // console.log(foundTable.querySelectorAll("tr"));

    //     const topTeamsTableContent = tableItems.slice(2, 22);
    //     const topTeamLogos = topTeamsTableContent.map(teamRowContent => teamRowContent.querySelector("img"));
    //     // console.log(topTeamLogos);
    //     // console.log(topTeamLogos.map(topTeamImg => topTeamImg["attributes"][1]["nodeValue"]));
    //     let topTeamLogoSrc = topTeamLogos.map(topTeamImg => topTeamImg["attributes"][1]["nodeValue"]);
    //     console.log(topTeamLogoSrc);

    //     let myTopTeamLogoImg = [...document.querySelectorAll(".topTeamLogoImg")]
    //     console.log(myTopTeamLogoImg);

    //     let myTopTeamLogoSrc = myTopTeamLogoImg.map(myTopTeamImg => myTopTeamImg["attributes"][2]["nodeValue"]);

    //     myTopTeamLogoSrc = topTeamLogoSrc;
    //     myTopTeamLogoSrc = topTeamLogoSrc.map(item => BASE_URL + item);
    //     console.log(document.querySelector('#rank2.src'));
    // //     ////////////
        // console.log(teams);
        // console.log(teams.map(team => team.querySelector("img")));
        // // const a = teams.map(team => team.querySelector("img"));


        // (new DOMParser()).parseFromString(a[0]["innerHTML"], 'text/html')
        // console.log( (new DOMParser()).parseFromString(a[0]["attributes"][1]["nodeValue"], 'text/html'))


        // console.log(a[0]["attributes"][1]["nodeValue"])
        // console.log(a[1]["attributes"][1]["nodeValue"])
        // //Gives me URL ENDPOINT for team images on a table 

        // a.map(z => )
        //TRY TO TIDY UP THIS COVE ABOVE LATER//
// // }

// const init = () => {
//     renderTopComment();
// };

// init();

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