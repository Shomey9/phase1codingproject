//Using the MediaWiki Action API web service, this function allows users to dynamically access MediaWiki's API throughout different web pages in Liquidpedia.
//Refer to MediaWiki documentation: https://www.mediawiki.org/wiki/API:Main_page
// const BASE_URL = 'https://liquipedia.net'
const makeMyApiEndpoint = (urlOfPage) => {
    return `https://liquipedia.net/counterstrike/api.php?action=parse&formatversion=1&page=${urlOfPage.substr(37, urlOfPage.length - 1)}&prop=text&format=json&origin=*`
}

console.log(makeMyApiEndpoint('https://liquipedia.net/counterstrike/HLTV/Team_Ranking')); //Test my makeMyApiEndpoint function


//Make my ranklist
const loadTopContent = () => {    
    fetch(makeMyApiEndpoint('https://liquipedia.net/counterstrike/HLTV/Team_Ranking'))
    .then(response => response.json())
    .then(pageContent => {
        
        const svgFileOfPage = pageContent.parse.text['*']

        const convertSvgToHtml = (svgString) => {
            return (new DOMParser()).parseFromString(svgString, 'text/html');
        }

        const htmlFileOfPage = convertSvgToHtml(svgFileOfPage);
        console.log(htmlFileOfPage);                                                     //Test my DOMParser
        
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
        const tables = recentRankingTableHtml.querySelector('table');

        const tableRows = [...tables.querySelectorAll('tr')];
        const  top20TeamRows = tableRows.slice(2, 22);
        const ays = top20TeamRows.map(stuff => stuff.querySelector('a'));
        const top20TeamNames = ays.map(a => a.attributes[1].textContent);
       
        // console.log(top20TeamNames);  
        
        //where I manipulate the DOM mostly
        //prints out my team names for rank list
        const teamRankInnerText = (twentyTopTeams) => {
            let myArray = []
            for (let i = 1; i < 21; i++) {
                myArray.push(document.querySelector(`#teamRank${i}`).innerText = twentyTopTeams[i-1]);
            }
        }
        teamRankInnerText(top20TeamNames);

        //generates image file path
        const teamLogoSrc = (twentyTopTeams) => {
            let myArray = []
            for (let i = 1; i < 21; i++) {
                myArray.push(document.querySelector(`#rank${i}`).src = `images/${twentyTopTeams[i-1]}.png`); 
            }
        }

        teamLogoSrc(top20TeamNames);
    } 
    )
    .catch(error => alert(error))

    // fetchTeamMembers();

}
//make my ranklist
    
const rank1 = document.querySelector('#rank1');
const innerText = document.querySelector('.teamMembers1')

rank1.addEventListener("mouseover", () => {
    rank1.style.display = "none"
})
rank1.addEventListener("mouseout", () => {
    rank1.style.display = ""
})

//Load Bottom Content
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#player-input-form');
    

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let userText = form.querySelector('#textInputIgn').value;
        document.querySelector('#playerPicture').src =`images/${userText}.jpg`
        fetch(makeMyApiEndpoint(`https://liquipedia.net/counterstrike/${userText}`))
        .then(resp=>resp.json())
        .then(pageContent=> {
            const html = (new DOMParser()).parseFromString((pageContent.parse.text['*']), 'text/html')
            const playerDescription = html.querySelector('p');
            // console.log(playerDescription)
            const playerName = playerDescription.querySelector('b').innerText;
            // console.log(playerName);
            document.querySelector('#playerName').innerText = playerName;
            
        }
        ).catch(error => alert(error))
        form.reset()
    })
})

//my init
loadTopContent();