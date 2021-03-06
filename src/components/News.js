import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    // articles=[
    //             {
    //                 "source": {
    //                     "id": "the-washington-post",
    //                     "name": "The Washington Post"
    //                 },
    //                 "author": "Karla Adam, William Booth",
    //                 "title": "British troops on standby as truck driver crisis deepens, and people 'panic-buy' fuel - The Washington Post",
    //                 "description": "Brexit and the coronavirus pandemic are being blamed for widespread shortages across the country.",
    //                 "url": "https://www.washingtonpost.com/world/europe/britain-truck-driver-fuel-crisis-army/2021/09/28/0f94bd3e-203e-11ec-a8d9-0827a2a4b915_story.html",
    //                 "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/L5RMC6BALII6ZM6WRTPL4YGT4I.jpg&w=1440",
    //                 "publishedAt": "2021-09-28T16:41:55Z",
    //                 "content": "The British government put army drivers on standby Sept. 28, to help deliver fuel as pumps ran dry at gas stations throughout the country. (Reuters)\r\nThe fuel shortage in Britain is the latest and mo… [+6472 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": null,
    //                     "name": "CNBC"
    //                 },
    //                 "author": "Annie Palmer",
    //                 "title": "Amazon unveils Halo View smart fitness tracker and Halo Fitness workout service - CNBC",
    //                 "description": "Amazon announced a home robot named Astro, a new Echo Show 15 smart screen, a thermostat, a new fitness tracker and more.",
    //                 "url": "https://www.cnbc.com/2021/09/28/amazon-event-2021-live-updates-amazons-set-to-announce-new-products.html",
    //                 "urlToImage": "https://image.cnbcfm.com/api/v1/image/106948622-1632839136144astro-press.PNG?v=1632839257",
    //                 "publishedAt": "2021-09-28T16:25:00Z",
    //                 "content": "Amazon unveiled a new Echo device that can be mounted on a wall or placed anywhere around the home. It's called the Echo Show 15.\r\nAmazon has released other voice-activated smart displays through its… [+894 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": null,
    //                     "name": "NPR"
    //                 },
    //                 "author": "",
    //                 "title": "Here's The Full List of MacArthur 'Genius Grants' Recipients 2021 - NPR",
    //                 "description": "Yes, we know they're technically called \"MacArthur Fellows.\" But for this group of artists, scientists and scholars, the term fits well enough as any other.",
    //                 "url": "https://www.npr.org/2021/09/28/1037957309/macarthur-genius-grants-full-list-2021",
    //                 "urlToImage": "https://media.npr.org/assets/img/2021/09/28/untitled-design_wide-20537a5a3ab819bae101446fde39b1c186fbe415.jpg?s=1400",
    //                 "publishedAt": "2021-09-28T16:04:10Z",
    //                 "content": "A selection of MacArthur Fellows from the Class of 2021: Hanif Abdurraqib, Daniel Alarcón, Reginald Dwayne Betts, Jordan Casteel, Don Mee Choi, Nicole Fleetwood, Cristina Ibarra, Ibram X. Kendi, Dani… [+5583 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": null,
    //                     "name": "Investor's Business Daily"
    //                 },
    //                 "author": "Investor's Business Daily",
    //                 "title": "Dow Jones Dives On Janet Yellen Warning, Stocks Sell Off As Bond Yields Rise - Investor's Business Daily",
    //                 "description": "The Dow Jones Industrial Average tumbled as stocks sold off amid Treasury Secretary Janet Yellen's default risk warning and bond yields rose.",
    //                 "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-dives-yellen-warning-stocks-sell-off-bond-yields-rise/",
    //                 "urlToImage": "https://www.investors.com/wp-content/uploads/2021/09/Stock-Yellen-02-shutt.jpg",
    //                 "publishedAt": "2021-09-28T16:01:00Z",
    //                 "content": "The Dow Jones Industrial Average dived nearly 500 points midday Tuesday as stocks sold off on Treasury Secretary Janet Yellen's default risk warning and bond yields rose.\r\nXThe Nasdaq sank 2.6%, the … [+4759 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": "politico",
    //                     "name": "Politico"
    //                 },
    //                 "author": "Lara Seligman",
    //                 "title": "Top generals contradict Biden, say they urged him not to withdraw from Afghanistan - POLITICO",
    //                 "description": "Gen. Frank McKenzie said that he recommended maintaining a small force of 2,500 troops in Afghanistan earlier this year.",
    //                 "url": "https://www.politico.com/news/2021/09/28/top-generals-afghanistan-withdrawal-congress-hearing-514491",
    //                 "urlToImage": "https://static.politico.com/53/ee/dd00019a4d40b2813a3001262a26/ap21271515114477.jpg",
    //                 "publishedAt": "2021-09-28T16:00:56Z",
    //                 "content": "He also noted that in the fall of 2020, during the Trump administration, he advised that the U.S. maintain a force almost double the size, of 4,500 troops, in Afghanistan. \r\nIn answering questions fr… [+3220 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": null,
    //                     "name": "New York Times"
    //                 },
    //                 "author": "Christine Hauser",
    //                 "title": "Jarrod Ramos Sentenced to Five Life Terms in Capital Gazette Attack - The New York Times",
    //                 "description": "Jarrod W. Ramos had pleaded guilty to murder charges in one of the deadliest attacks on American journalists. In July, a jury found him criminally responsible for the 2018 shooting in Maryland’s capital.",
    //                 "url": "https://www.nytimes.com/2021/09/28/us/jarrod-ramos-capital-gazette.html",
    //                 "urlToImage": "https://static01.nyt.com/images/2021/09/28/world/28xp-gazette/28xp-gazette-facebookJumbo.jpg",
    //                 "publishedAt": "2021-09-28T15:50:03Z",
    //                 "content": "Six survivors also testified at the trial, recalling the day that Mr. Ramos walked through their workplace with a 12-gauge shotgun, killing five colleagues: Gerald Fischman, 61, the editorial page ed… [+948 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": null,
    //                     "name": "New York Times"
    //                 },
    //                 "author": "Jonathan O’Callaghan",
    //                 "title": "This May Be the First Planet Found Orbiting 3 Stars at Once - The New York Times",
    //                 "description": "It’s called a circumtriple planet, and evidence that one exists suggests that planet formation is less unusual than once believed.",
    //                 "url": "https://www.nytimes.com/2021/09/28/science/triple-sun-planet.html",
    //                 "urlToImage": "https://static01.nyt.com/images/2021/09/28/autossell/28sci-triplesun-vidcover/28sci-triplesun-vidcover-facebookJumbo.jpg",
    //                 "publishedAt": "2021-09-28T15:38:44Z",
    //                 "content": "Star Wars missed a trick, said Rebecca Nealon from the University of Warwick in England, a co-author on the paper.\r\nScientists have been on the lookout for a planet orbiting three stars, and found po… [+1674 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": null,
    //                     "name": "NPR"
    //                 },
    //                 "author": "Rachel Treisman",
    //                 "title": "DiGiorno Crispy Pan Crust Pepperoni Pizzas Recalled Over Mislabeling - NPR",
    //                 "description": "Nestlé USA Inc. is recalling some 27,872 pounds of frozen DiGiorno Crispy Pan Crust pepperoni pizza. Federal officials say there have been no reports of adverse effects, but advise against eating it.",
    //                 "url": "https://www.npr.org/2021/09/28/1041146353/digiorno-frozen-pizza-recall-pepperoni-crispy-pan-crust",
    //                 "urlToImage": "https://media.npr.org/assets/img/2021/09/28/nestle_recall_wide-4468a554521ffce941bc67e914fa616ea05344aa.png?s=1400",
    //                 "publishedAt": "2021-09-28T15:34:52Z",
    //                 "content": "Nestlé USA, Inc. is recalling thousands of pounds of DiGiorno Crispy Pan Crust Pepperoni Pizza over potential mislabeling and an undeclared soy allergen. It's asking consumers to throw the product ou… [+1954 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": null,
    //                     "name": "CNBC"
    //                 },
    //                 "author": "Jeff Cox",
    //                 "title": "Sen. Warren calls Fed Chair Powell a 'dangerous man,' says she will oppose his renomination - CNBC",
    //                 "description": "Sen. Elizabeth Warren charged that Fed Chairman Jerome Powell has led an effort to weaken the nation's banking system, and she will oppose his renomination.",
    //                 "url": "https://www.cnbc.com/2021/09/28/sen-warren-calls-fed-chair-powell-a-dangerous-man-says-she-will-oppose-his-renomination.html",
    //                 "urlToImage": "https://image.cnbcfm.com/api/v1/image/106948773-1632847376857-106948773-16328473042021-09-28t161357z_797793595_rc2heo8ctms7_rtrmadp_0_health-coronavirus-powell-yellen.jpg?v=1632847389",
    //                 "publishedAt": "2021-09-28T15:28:47Z",
    //                 "content": "Sen. Elizabeth Warren charged Tuesday that Federal Reserve Chairman Jerome Powell has led an effort to weaken the nation's banking system, and she vowed to oppose his renomination.\r\nIn remarks made d… [+3031 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": "cnn",
    //                     "name": "CNN"
    //                 },
    //                 "author": "Annie Grayer and Clare Foran, CNN",
    //                 "title": "House Democrats could vote on debt ceiling as soon as Tuesday - CNN",
    //                 "description": "House Speaker Nancy Pelosi told Democrats that a vote on raising the debt ceiling could come as soon as Tuesday, a source in the Democratic caucus meeting told CNN.",
    //                 "url": "https://www.cnn.com/2021/09/28/politics/debt-limit-house-vote/index.html",
    //                 "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210824141516-01-pelosi-0824-super-tease.jpg",
    //                 "publishedAt": "2021-09-28T15:11:00Z",
    //                 "content": "(CNN)House Speaker Nancy Pelosi told Democrats that a vote on raising the debt ceiling could come as soon as Tuesday, a source in the Democratic caucus meeting told CNN.\r\nWhile the move has not been … [+3253 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": "nbc-news",
    //                     "name": "NBC News"
    //                 },
    //                 "author": "Teaganne Finn",
    //                 "title": "Gen. Milley says he wasn't trying to undermine Trump in China call - NBC News",
    //                 "description": "Gen. Mark Milley on Tuesday defended calls he made to a Chinese official at the end of Donald Trump's presidency.",
    //                 "url": "https://www.nbcnews.com/politics/national-security/gen-milley-defends-call-china-says-he-wasn-t-trying-n1280239",
    //                 "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_39/3508842/210928-mark-milley-jm-1048.jpg",
    //                 "publishedAt": "2021-09-28T14:42:00Z",
    //                 "content": "WASHINGTON Gen. Mark Milley on Tuesday defended calls he made to a Chinese official at the end of Donald Trump's presidency, saying other administration officials were aware of the calls and they wer… [+1557 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": null,
    //                     "name": "ESPN"
    //                 },
    //                 "author": "Mechelle Voepel",
    //                 "title": "Connecticut Sun forward Jonquel Jones named WNBA MVP heading into semifinals - ESPN",
    //                 "description": "Connecticut Suns forward Jonquel Jones is the WNBA's 2021 MVP. Jones grabbed 48 of 49 first-place votes. Jones, 27, is in her fifth season in the WNBA, averaging 19.4 points, 11.2 rebounds, 2.8 assists, 1.3 blocked shots and 1.3 steals.",
    //                 "url": "https://www.espn.com/wnba/story/_/id/32297860/connecticut-sun-forward-jonquel-jones-named-wnba-mvp-heading-semifinals",
    //                 "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0606%2Fr863964_1296x729_16%2D9.jpg",
    //                 "publishedAt": "2021-09-28T14:28:22Z",
    //                 "content": "Connecticut heads into the WNBA semifinals Tuesday as not only the top seed but the team with the league MVP in Jonquel Jones, along with coach of the year Curt Miller and most improved player Brionn… [+3131 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": null,
    //                     "name": "BBC News"
    //                 },
    //                 "author": "https://www.facebook.com/bbcnews",
    //                 "title": "Germany election: Merkel heir loses support as parties meet - BBC News",
    //                 "description": "Armin Laschet is facing mounting unrest within his party, after their historic election defeat.",
    //                 "url": "https://www.bbc.com/news/world-europe-58719080",
    //                 "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/52DC/production/_120721212_laschetsad.jpg",
    //                 "publishedAt": "2021-09-28T14:28:05Z",
    //                 "content": "By Paul KirbyBBC News, Berlin\r\nimage source, Getty Images\r\nimage caption, Armin Laschet has insisted that he can still form a government even though he lost\r\nGerman conservative leader Armin Laschet … [+4341 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": null,
    //                     "name": "New York Post"
    //                 },
    //                 "author": "Jenna Lemoncelli",
    //                 "title": "Dak Prescott and girlfriend Natalie Buffett share a kiss after Cowboys win - New York Post ",
    //                 "description": "The Cowboys’ star quarterback was greeted by Buffett on the sideline after a 41-21 win over Philadelphia on “Monday Night Football.”",
    //                 "url": "https://nypost.com/2021/09/28/dak-prescott-and-natalie-buffett-kiss-after-cowboys-win/",
    //                 "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/09/dak2.jpg?quality=90&strip=all&w=1024",
    //                 "publishedAt": "2021-09-28T14:19:00Z",
    //                 "content": "Dak Prescott secured a win over the Eagles in Week 4, and celebrated with a kiss from girlfriend, Natalie Buffett.\r\nThe Cowboys star quarterback was greeted by Buffett on the sideline after a 41-21 w… [+1486 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": "the-hill",
    //                     "name": "The Hill"
    //                 },
    //                 "author": "Monique Beals",
    //                 "title": "131 federal judges failed to recuse themselves from cases in which they had financial interest: report | TheHill - The Hill",
    //                 "description": "One hundred and thirty-one federal judges oversaw court cases involving companies in which they or their family members owned stock, according to a new investigation.",
    //                 "url": "https://thehill.com/regulation/court-battles/574244-131-federal-judges-failed-to-recuse-themselves-from-cases-in-which",
    //                 "urlToImage": "https://thehill.com/sites/default/files/republicanjudges_111618istock.jpg",
    //                 "publishedAt": "2021-09-28T14:12:57Z",
    //                 "content": "One hundred and thirty-one federal judges oversaw court cases involving companies in which they or their family members owned stock, according to a new investigation.\r\nThose judges violated U.S. law … [+1537 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": null,
    //                     "name": "New York Post"
    //                 },
    //                 "author": "Yaron Steinbuch",
    //                 "title": "Brian Laundrie photo from campsite where Dog the Bounty Hunter got tip could be key - New York Post ",
    //                 "description": "A smiling Brian Laundrie was captured in a photo with Gabby Petito at a Florida campsite that Dog the Bounty Hunter believes could hold the key to finding the dead woman’s fugitive beau.",
    //                 "url": "https://nypost.com/2021/09/28/brian-laundrie-photo-with-gabby-petito-could-be-key-in-case/",
    //                 "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/09/laundrie-fort-soto.jpg?quality=90&strip=all&w=1024",
    //                 "publishedAt": "2021-09-28T13:58:00Z",
    //                 "content": "A smiling Brian Laundrie was captured behind bars in a photo with Gabby Petito at a Florida campsite that Dog the Bounty Hunter believes could hold the key to finding the dead womans fugitive beau.\r\n… [+2454 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": "google-news",
    //                     "name": "Google News"
    //                 },
    //                 "author": null,
    //                 "title": "Pokemon Legends: Arceus - Official Noble Pokémon Trailer - IGN",
    //                 "description": null,
    //                 "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9LUVVQ0lfZDNZWWvSAQA?oc=5",
    //                 "urlToImage": null,
    //                 "publishedAt": "2021-09-28T13:36:32Z",
    //                 "content": null
    //             },
    //             {
    //                 "source": {
    //                     "id": "fox-news",
    //                     "name": "Fox News"
    //                 },
    //                 "author": "Brooke Singman",
    //                 "title": "Florida sues Biden administration over catch-and-release policy, alleging violation of federal law - Fox News",
    //                 "description": "EXCLUSIVE: The state of Florida is suing the Biden administration over its catch-and-release policies at the Southern Border, saying officials are either in violation of federal immigration law, or simply abusing their authority.",
    //                 "url": "https://www.foxnews.com/politics/florida-sues-biden-administration-over-catch-and-release-policy",
    //                 "urlToImage": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/8e84228a-39c9-4d4f-9684-7d137be98498/3073f3de-be0c-4cae-b2be-896039c25dff/1280x720/match/image.jpg",
    //                 "publishedAt": "2021-09-28T13:03:27Z",
    //                 "content": "EXCLUSIVE: The state of Florida is suing the Biden administration over its \"illegal\" catch-and-release policies at the Southern Border, saying they cause harm to the state's \"quasi-sovereign interest… [+10191 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": null,
    //                     "name": "WKBN.com"
    //                 },
    //                 "author": "The Associated Press",
    //                 "title": "Boy dies from brain-eating amoeba found at splash pad - WKBN.com",
    //                 "description": "A child has died after being infected with a rare brain-eating amoeba that was found at a Texas splash pad.",
    //                 "url": "https://www.wkbn.com/news/national-world/boy-dies-from-brain-eating-amoeba-found-at-splash-pad/",
    //                 "urlToImage": "https://www.wkbn.com/wp-content/uploads/sites/48/2021/09/Splash-Pad.jpg?w=1280",
    //                 "publishedAt": "2021-09-28T13:01:53Z",
    //                 "content": "ARLINGTON, Texas (AP) A child has died after being infected with a rare brain-eating amoeba that was found at a Texas splash pad. \r\nOfficials in Arlington said Monday that the city and Tarrant County… [+522 chars]"
    //             },
    //             {
    //                 "source": {
    //                     "id": "google-news",
    //                     "name": "Google News"
    //                 },
    //                 "author": null,
    //                 "title": "Britney Spears' Attorney BLASTS Dad Jamie Over Alleged Surveillance - Entertainment Tonight",
    //                 "description": null,
    //                 "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dnNrRUk3dlI4UWvSAQA?oc=5",
    //                 "urlToImage": null,
    //                 "publishedAt": "2021-09-28T13:00:28Z",
    //                 "content": null
    //             }
    // ]


    constructor (){
        super();
        console.log("This is constructor");
        this.state={
             articles: [],
             loading: false,
             page: 1
        }
    }
    // ye life cycle method huy
 async componentDidMount(){
       
       let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=4de5df67cfa64ae6a8b19f3816a7f873";
       let data = await fetch(url);
       let parseData = await data.json();
       console.log(parseData);
       this.setState({articles: parseData.articles})
    }
    handlenextclick = async () => {
      console.log("NextC");

      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4de5df67cfa64ae6a8b19f3816a7f873=${this.state.page + 1}`;
       let data = await fetch(url);
       let parseData = await data.json();
       console.log(parseData);

       this.setState({
           page: this.state.page + 1,
           articles: parseData.articles
       })
    }
    handlepreviousclick= async()=>{
     console.log("PreC");

     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4de5df67cfa64ae6a8b19f3816a7f873=${this.state.page - 1}`;
       let data = await fetch(url);
       let parseData = await data.json();
       console.log(parseData);

       this.setState({
           page: this.state.page - 1,
           articles: parseData.articles
       })
    }
    // ye wait krega is romise k resolve honi ka
    render() {
        return (
                <div className="container my-3">
                <h2>News App Top Headlines</h2>
               
                <div className="row">
                {this.state.articles.map((element)=>{
                         return <div className="col-md-4" key={element.url}>
                    <NewsItem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imgUrl={element.urlToImage} newUrl={element.url} />
                    </div>
                    })} 
                </div>
                <hr/>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlepreviousclick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
