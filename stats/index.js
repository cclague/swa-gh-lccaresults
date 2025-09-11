// [START maps_custom_markers]
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(54.52447,-1.80593),
    zoom: 6.3,
  });

  const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  const icons = {
    parking: {
      icon: "https://maps.google.com/mapfiles/kml/paddle/blu-circle.png",
    },
    1: {
      icon: "https://maps.google.com/mapfiles/kml/paddle/1.png",
    },
    2: {
      icon: "https://maps.google.com/mapfiles/kml/paddle/2.png",
    },
    3: {
        icon: "https://maps.google.com/mapfiles/kml/paddle/3.png",
    },
    4: {
        icon: "https://maps.google.com/mapfiles/kml/paddle/4.png",
    },
    5: {
        icon: "https://maps.google.com/mapfiles/kml/paddle/5.png",
    },
    6: {
        icon: "https://maps.google.com/mapfiles/kml/paddle/6.png",
    },
    7: {
        icon: "https://maps.google.com/mapfiles/kml/paddle/7.png",
    },
    8: {
        icon: "https://maps.google.com/mapfiles/kml/paddle/8.png",
    },
    9: {
        icon: "https://maps.google.com/mapfiles/kml/paddle/9.png",
    },
    10: {
        icon: "https://maps.google.com/mapfiles/kml/paddle/10.png",
    },
                
    info: {
      icon: iconBase + "info-i_maps.png",
    },
  };
  const features = [
    {
        position: new google.maps.LatLng(51.41158,0.37279),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>South East Regional Championships</p>' +
        '<p>Sun, 28th Nov 2021</p>' +
        '<p>Att: 291</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/253204/South-East-Regional-Championships#results"><b>497110</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.95884,-2.09432),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Trek Fox ValleyBespoke Sports KitInSyncCyclingCoach   2021 Winter Cyclo Cross Series   Yorkshire Points No 2</p>' +
        '<p>Sun, 26th Sep 2021</p>' +
        '<p>Att: 314</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248741/Trek-Fox-ValleyBespoke-Sports-KitInSyncCyclingCoach---2021-Winter-Cyclo-Cross-Series---Yorkshire-Points-No-2#results"><b>493156</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(55,-1.41604),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>CXNE Round 2</p>' +
        '<p>Sun, 26th Sep 2021</p>' +
        '<p>Att: 305</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247941/CXNE-Round-2#results"><b>492402</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.636,-1.17494),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Leicestershire Cyclo Cross League Rd 2</p>' +
        '<p>Sun, 10th Oct 2021</p>' +
        '<p>Att: 245</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249018/Leicestershire-Cyclo-Cross-League-Rd-2#results"><b>493423</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.3723,-0.42238),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Welsh Cyclo cross League Round 3   Cardiff Ajax  Mountain View Bike Park</p>' +
        '<p>Sun, 28th Nov 2021</p>' +
        '<p>Att: 291</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/250888/Welsh-Cyclo-cross-League-Round-3---Cardiff-Ajax--Mountain-View-Bike-Park#results"><b>495058</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.03059,1.2217),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Ipswich BC Cyclo cross Eastern league Round 8 Incorporating the Eastern Regional Championship</p>' +
        '<p>Sun, 28th Nov 2021</p>' +
        '<p>Att: 313</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/229037/Ipswich-BC-Cyclo-cross-Eastern-league-Round-8-Incorporating-the-Eastern-Regional-Championship#results"><b>474238</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.42191,-2.49591),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Western Cyclo Cross League R1</p>' +
        '<p>Sun, 12th Sep 2021</p>' +
        '<p>Att: 249</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247776/Western-Cyclo-Cross-League-R1#results"><b>492241</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(58.01358,-3.86385),
        type: "1",
        contentStr: '<div id="content">' +
        '<p>Fascally Bundle</p>' +
        '<p>Sat, 27th Nov 2021</p>' +
        '<p>Att: 12</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248479/Fascally-Bundle#results"><b>492920</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.395,0.20488),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Challenge Tires London and South East CX League   Round 02</p>' +
        '<p>Sun, 26th Sep 2021</p>' +
        '<p>Att: 305</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249532/Challenge-Tires-London-and-South-East-CX-League---Round-02#results"><b>493893</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.04441,-0.74103),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>CCXL Round 3   CX in the City III</p>' +
        '<p>Sat, 25th Sep 2021</p>' +
        '<p>Att: 415</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/246699/CCXL-Round-3---CX-in-the-City-III#results"><b>491179</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.11557,-1.64568),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Forme Notts  Derby   Middlehills</p>' +
        '<p>Sat, 30th Oct 2021</p>' +
        '<p>Att: 319</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248267/Forme-Notts--Derby---Middlehills#results"><b>492721</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.53896,-2.15021),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Shimano Lazer WMCCL Round 6</p>' +
        '<p>Sun, 10th Oct 2021</p>' +
        '<p>Att: 301</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248029/Shimano-Lazer-WMCCL-Round-6#results"><b>492494</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(50.77534,-3.30093),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Escot Superprestige Cyclo Cross 2021</p>' +
        '<p>Sun, 17th Oct 2021</p>' +
        '<p>Att: 245</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/246856/Escot-Superprestige-Cyclo-Cross-2021#results"><b>491336</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.436,-2.36948),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Shimano Lazer WMCCL Round 10</p>' +
        '<p>Sun, 7th Nov 2021</p>' +
        '<p>Att: 295</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249421/Shimano-Lazer-WMCCL-Round-10#results"><b>493791</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.42191,-2.49591),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Regional Championships WesternWessex Cyclo Cross League  WCCL R8</p>' +
        '<p>Sun, 28th Nov 2021</p>' +
        '<p>Att: 304</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248562/Regional-Championships-WesternWessex-Cyclo-Cross-League--WCCL-R8#results"><b>492997</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.4151357,-1.5572471),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>Newbury Velo   Miche Wessex Cyclo cross Round 8</p>' +
        '<p>Sun, 7th Nov 2021</p>' +
        '<p>Att: 470</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248085/Newbury-Velo---Miche-Wessex-Cyclo-cross-Round-8#results"><b>492550</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(56.99748,-2.495),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>DTCC Knockburn Loch CX</p>' +
        '<p>Sun, 7th Nov 2021</p>' +
        '<p>Att: 177</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/250460/DTCC-Knockburn-Loch-CX#results"><b>494711</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.65533,-0.59114),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Lincolnshire Cyclo cross Championships R4   Winterton Showground</p>' +
        '<p>Sun, 14th Nov 2021</p>' +
        '<p>Att: 135</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/252537/Lincolnshire-Cyclo-cross-Championships-R4---Winterton-Showground#results"><b>496493</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.51214,-0.39763),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>CCXL Round 6   Hillingdon   Twickenham CC   incorporating  Central Region Championships </p>' +
        '<p>Sun, 28th Nov 2021</p>' +
        '<p>Att: 342</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247705/CCXL-Round-6---Hillingdon---Twickenham-CC---incorporating--Central-Region-Championships-#results"><b>492171</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.41158,0.37279),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>HSBC UK Cyclo Cross National Trophy Series 202122 Round 5</p>' +
        '<p>Sat, 11th Dec 2021</p>' +
        '<p>Att: 494</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248821/HSBC-UK-Cyclo-Cross-National-Trophy-Series-202122-Round-5#results"><b>493234</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.9473,-1.02822),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Trek Fox ValleyBespoke Sports KitInSyncCyclingCoach  2021 Winter Cyclo Cross Series   Yorkshire Points No 7</p>' +
        '<p>Sun, 14th Nov 2021</p>' +
        '<p>Att: 364</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/251704/Trek-Fox-ValleyBespoke-Sports-KitInSyncCyclingCoach--2021-Winter-Cyclo-Cross-Series---Yorkshire-Points-No-7#results"><b>495760</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(50.95839,-1.51715),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>VC Venta   Miche Wessex Cyclo cross Round 7</p>' +
        '<p>Sun, 31st Oct 2021</p>' +
        '<p>Att: 334</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/251483/VC-Venta---Miche-Wessex-Cyclo-cross-Round-7#results"><b>495574</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.26804,-0.48825),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Lincolnshire Cyclo cross Trophy Day Series R3   Lincoln Wheelers</p>' +
        '<p>Sun, 24th Oct 2021</p>' +
        '<p>Att: 148</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249598/Lincolnshire-Cyclo-cross-Trophy-Day-Series-R3---Lincoln-Wheelers#results"><b>493952</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(54.87626,-1.48538),
        type: "6",
        contentStr: '<div id="content">' +
        '<p>HSBC UK Cyclo Cross National Trophy Series 202122 Round 4</p>' +
        '<p>Sat, 20th Nov 2021</p>' +
        '<p>Att: 542</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248820/HSBC-UK-Cyclo-Cross-National-Trophy-Series-202122-Round-4#results"><b>493233</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.73969,-0.41023),
        type: "1",
        contentStr: '<div id="content">' +
        '<p>Vive le Velo Nocturne Cross Series 2021 Event 4</p>' +
        '<p>Wed, 20th Oct 2021</p>' +
        '<p>Att: 86</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247703/Vive-le-Velo-Nocturne-Cross-Series-2021-Event-4#results"><b>492169</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.00656,-1.35953),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Forme Notts  Derby   Shipley Park</p>' +
        '<p>Sat, 4th Sep 2021</p>' +
        '<p>Att: 339</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/246463/Forme-Notts--Derby---Shipley-Park#results"><b>490930</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.849117,-2.4780867),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>NWCCA League Round Stonyhurst College   Secret Trainingcom CX 2021</p>' +
        '<p>Sun, 19th Dec 2021</p>' +
        '<p>Att: 403</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/250279/NWCCA-League-Round-Stonyhurst-College---Secret-Trainingcom-CX-2021#results"><b>494550</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.25648,-2.25286),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Shimano Lazer WMCCL Round 7</p>' +
        '<p>Sun, 17th Oct 2021</p>' +
        '<p>Att: 351</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248030/Shimano-Lazer-WMCCL-Round-7#results"><b>492495</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.44823,-0.08848),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Challenge Tires London and South East CX League   Round 03</p>' +
        '<p>Sun, 3rd Oct 2021</p>' +
        '<p>Att: 381</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249533/Challenge-Tires-London-and-South-East-CX-League---Round-03#results"><b>493894</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.89467,0.88957),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Neil Pears Memorial Cross Eastern League Round 6</p>' +
        '<p>Sun, 14th Nov 2021</p>' +
        '<p>Att: 305</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/229035/Neil-Pears-Memorial-Cross-Eastern-League-Round-6#results"><b>474236</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.67072,-1.51488),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Trek Fox ValleyBespoke Sports KitInSyncCyclingCoach   2021 Winter Cyclo Cross Series   Yorkshire Points No 3</p>' +
        '<p>Sun, 3rd Oct 2021</p>' +
        '<p>Att: 331</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249419/Trek-Fox-ValleyBespoke-Sports-KitInSyncCyclingCoach---2021-Winter-Cyclo-Cross-Series---Yorkshire-Points-No-3#results"><b>493789</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(50.95839,-1.51715),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Fareham Wheelers CC   Miche Wessex Cyclo cross Round 1</p>' +
        '<p>Sun, 12th Sep 2021</p>' +
        '<p>Att: 377</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247434/Fareham-Wheelers-CC---Miche-Wessex-Cyclo-cross-Round-1#results"><b>491909</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(54.54594,-1.20567),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>CXNE Round 3</p>' +
        '<p>Sun, 3rd Oct 2021</p>' +
        '<p>Att: 243</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247942/CXNE-Round-3#results"><b>492403</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.22594,-1.5694),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Andover Wheelers   Miche Wessex Cyclo Cross Round 6</p>' +
        '<p>Sun, 24th Oct 2021</p>' +
        '<p>Att: 368</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247475/Andover-Wheelers---Miche-Wessex-Cyclo-Cross-Round-6#results"><b>491944</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.52382,-1.66038),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Foxhill   Miche Wessex Cyclo cross Round 3</p>' +
        '<p>Sun, 26th Sep 2021</p>' +
        '<p>Att: 338</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247864/Foxhill---Miche-Wessex-Cyclo-cross-Round-3#results"><b>492327</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.31107,0.63972),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>West Suffolk Cross Eastern League Round 5</p>' +
        '<p>Sat, 6th Nov 2021</p>' +
        '<p>Att: 323</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/229038/West-Suffolk-Cross-Eastern-League-Round-5#results"><b>474239</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.58952,-0.68074),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Lincolnshire Cyclo Cross Championship R2   Scunthorpe RC</p>' +
        '<p>Sun, 3rd Oct 2021</p>' +
        '<p>Att: 106</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249144/Lincolnshire-Cyclo-Cross-Championship-R2---Scunthorpe-RC#results"><b>493541</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.73969,-0.41023),
        type: "1",
        contentStr: '<div id="content">' +
        '<p>Vive le Velo Nocturne Cross Series 2021 Event 3</p>' +
        '<p>Wed, 6th Oct 2021</p>' +
        '<p>Att: 87</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247702/Vive-le-Velo-Nocturne-Cross-Series-2021-Event-3#results"><b>492168</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(54.82698,-1.43726),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>CXNE Round 8</p>' +
        '<p>Sun, 5th Dec 2021</p>' +
        '<p>Att: 249</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247947/CXNE-Round-8#results"><b>492408</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.26624,1.33645),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>East Kent Cyclo Cross League Round 1 SandwichTechCross   Tim Mountford Memorial</p>' +
        '<p>Sun, 12th Sep 2021</p>' +
        '<p>Att: 253</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/245683/East-Kent-Cyclo-Cross-League-Round-1-SandwichTechCross---Tim-Mountford-Memorial#results"><b>490143</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(55,-1.41604),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>Northern Area Championships</p>' +
        '<p>Sun, 28th Nov 2021</p>' +
        '<p>Att: 412</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248217/Northern-Area-Championships#results"><b>492675</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(50.40426,-4.03024),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>South West Championship   Newnham Park</p>' +
        '<p>Sun, 28th Nov 2021</p>' +
        '<p>Att: 297</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/246859/South-West-Championship---Newnham-Park#results"><b>491339</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.49116,-0.70905),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>CCXL Round 5    Corby   Rockingham Forest Wheelers</p>' +
        '<p>Sun, 14th Nov 2021</p>' +
        '<p>Att: 300</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247704/CCXL-Round-5----Corby---Rockingham-Forest-Wheelers#results"><b>492170</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.25648,-2.25286),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Shimano Lazer WMCCL Round 11 incorporating the West Midlands Regional Championships</p>' +
        '<p>Sun, 28th Nov 2021</p>' +
        '<p>Att: 306</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249028/Shimano-Lazer-WMCCL-Round-11-incorporating-the-West-Midlands-Regional-Championships#results"><b>493433</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(56.4868778,-3.0497656),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>2021 Scottish Cyclo Cross Championships</p>' +
        '<p>Sun, 14th Nov 2021</p>' +
        '<p>Att: 374</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/250169/2021-Scottish-Cyclo-Cross-Championships#results"><b>494455</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.60051,0.10897),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Challenge Tires London and South East CX League   Round 08</p>' +
        '<p>Sun, 21st Nov 2021</p>' +
        '<p>Att: 303</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/251087/Challenge-Tires-London-and-South-East-CX-League---Round-08#results"><b>495237</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(55.99491,-3.76621),
        type: "6",
        contentStr: '<div id="content">' +
        '<p>HSBC UK Cyclo Cross National Trophy Series 202122 Round 3</p>' +
        '<p>Sat, 23rd Oct 2021</p>' +
        '<p>Att: 595</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248816/HSBC-UK-Cyclo-Cross-National-Trophy-Series-202122-Round-3#results"><b>493229</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.36357,-0.01672),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Lincolnshire Cyclo cross Championships R5   Hubbards Hills</p>' +
        '<p>Sun, 19th Dec 2021</p>' +
        '<p>Att: 135</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/252899/Lincolnshire-Cyclo-cross-Championships-R5---Hubbards-Hills#results"><b>496838</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.84678,-1.83972),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Trek Fox ValleyBespoke Sports KitInSyncCyclingCoach   2021 Winter Cyclo Cross Series   Yorkshire Points No 4</p>' +
        '<p>Sun, 17th Oct 2021</p>' +
        '<p>Att: 369</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249420/Trek-Fox-ValleyBespoke-Sports-KitInSyncCyclingCoach---2021-Winter-Cyclo-Cross-Series---Yorkshire-Points-No-4#results"><b>493790</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.10169,-4.02147),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Coxleigh Barton Cyclo cross 2021</p>' +
        '<p>Sun, 14th Nov 2021</p>' +
        '<p>Att: 150</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247432/Coxleigh-Barton-Cyclo-cross-2021#results"><b>491907</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(55.65137,-2.11544),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>CXNE Round 4</p>' +
        '<p>Sun, 17th Oct 2021</p>' +
        '<p>Att: 285</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247943/CXNE-Round-4#results"><b>492404</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.66484,-1.16776),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Leicestershire Cyclo Cross League Rd 4</p>' +
        '<p>Sun, 21st Nov 2021</p>' +
        '<p>Att: 340</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249024/Leicestershire-Cyclo-Cross-League-Rd-4#results"><b>493429</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.95884,-2.09432),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>NWCCA League Round 6   Horwich Humdinger</p>' +
        '<p>Sun, 12th Dec 2021</p>' +
        '<p>Att: 325</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/253740/NWCCA-League-Round-6---Horwich-Humdinger#results"><b>497577</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.42127,-0.06617),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>Challenge Tires London and South East CX League   Round 04</p>' +
        '<p>Sun, 10th Oct 2021</p>' +
        '<p>Att: 456</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249480/Challenge-Tires-London-and-South-East-CX-League---Round-04#results"><b>493845</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.25669,0.05234),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Lincolnshire Cyclo cross Trophy Day Series R2   Alford Wheelers</p>' +
        '<p>Sun, 10th Oct 2021</p>' +
        '<p>Att: 112</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249084/Lincolnshire-Cyclo-cross-Trophy-Day-Series-R2---Alford-Wheelers#results"><b>493485</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.18167,0.29391),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Challenge Tires London and South East CX League   Round 05</p>' +
        '<p>Sun, 17th Oct 2021</p>' +
        '<p>Att: 384</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/250689/Challenge-Tires-London-and-South-East-CX-League---Round-05#results"><b>494892</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.2991,-2.7673),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Western Cyclo Cross League R6</p>' +
        '<p>Sun, 14th Nov 2021</p>' +
        '<p>Att: 165</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248561/Western-Cyclo-Cross-League-R6#results"><b>492996</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(55.79446,-4.31149),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>RGCX</p>' +
        '<p>Sun, 28th Nov 2021</p>' +
        '<p>Att: 188</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/250226/RGCX#results"><b>494508</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(56.62783,-6.13562),
        type: "1",
        contentStr: '<div id="content">' +
        '<p>Cross at the Castle</p>' +
        '<p>Sat, 11th Dec 2021</p>' +
        '<p>Att: 80</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247696/Cross-at-the-Castle#results"><b>492153</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.45009,-1.18198),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>WVCC MudlarksTaxAssist Accountants   Leicestershire Cyclo Cross League Rd 3</p>' +
        '<p>Sun, 24th Oct 2021</p>' +
        '<p>Att: 316</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249017/WVCC-MudlarksTaxAssist-Accountants---Leicestershire-Cyclo-Cross-League-Rd-3#results"><b>493422</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.36193,1.00932),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Diss CC Suffolk Supercross Eastern League Round 7</p>' +
        '<p>Sat, 20th Nov 2021</p>' +
        '<p>Att: 294</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/229039/Diss-CC-Suffolk-Supercross-Eastern-League-Round-7#results"><b>474240</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.78752,-1.45407),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Trek Fox ValleyBespoke Sports KitInSyncCyclingCoach   2021 Winter Cyclo Cross Series   Yorkshire Points No 5</p>' +
        '<p>Sun, 31st Oct 2021</p>' +
        '<p>Att: 378</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/251022/Trek-Fox-ValleyBespoke-Sports-KitInSyncCyclingCoach---2021-Winter-Cyclo-Cross-Series---Yorkshire-Points-No-5#results"><b>495174</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(54.96188,-1.58069),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>CXNE Round 5</p>' +
        '<p>Sun, 31st Oct 2021</p>' +
        '<p>Att: 239</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247944/CXNE-Round-5#results"><b>492405</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.57576,-3.00746),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Welsh Cyclo Cross League Round 1   Cwmcarn Paragon Crossoween</p>' +
        '<p>Sun, 31st Oct 2021</p>' +
        '<p>Att: 255</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247777/Welsh-Cyclo-Cross-League-Round-1---Cwmcarn-Paragon-Crossoween#results"><b>492242</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.7046782,-2.277112),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>NWCCA League Round 2   Rossendale Road Club</p>' +
        '<p>Sat, 25th Sep 2021</p>' +
        '<p>Att: 352</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247694/NWCCA-League-Round-2---Rossendale-Road-Club#results"><b>492150</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(54.24239,-2.72811),
        type: "7",
        contentStr: '<div id="content">' +
        '<p>HSBC UK Cyclo Cross National Trophy Series 202122 Round 2</p>' +
        '<p>Sat, 9th Oct 2021</p>' +
        '<p>Att: 635</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248814/HSBC-UK-Cyclo-Cross-National-Trophy-Series-202122-Round-2#results"><b>493224</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.41312,-2.80825),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>NWCCA League Round 4   Geoff Bewley Memorial Cross</p>' +
        '<p>Sat, 6th Nov 2021</p>' +
        '<p>Att: 408</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/251181/NWCCA-League-Round-4---Geoff-Bewley-Memorial-Cross#results"><b>495323</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.73969,-0.41023),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Vive le Velo Nocturne Cross Series 2021 Event 2</p>' +
        '<p>Wed, 22nd Sep 2021</p>' +
        '<p>Att: 111</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247700/Vive-le-Velo-Nocturne-Cross-Series-2021-Event-2#results"><b>492166</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.22823,1.32081),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>East Kent Cyclo Cross League Round 2 NorthbourneParkCross</p>' +
        '<p>Sun, 24th Oct 2021</p>' +
        '<p>Att: 208</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/245992/East-Kent-Cyclo-Cross-League-Round-2-NorthbourneParkCross#results"><b>490449</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.30458,-1.8234),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Shimano Lazer WMCCL Round 1</p>' +
        '<p>Sun, 5th Sep 2021</p>' +
        '<p>Att: 310</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248160/Shimano-Lazer-WMCCL-Round-1#results"><b>492621</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.88884,-1.46264),
        type: "8",
        contentStr: '<div id="content">' +
        '<p>HSBC UK Cyclo Cross National Trophy Series 202122 Round 1</p>' +
        '<p>Sat, 18th Sep 2021</p>' +
        '<p>Att: 712</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247246/HSBC-UK-Cyclo-Cross-National-Trophy-Series-202122-Round-1#results"><b>491722</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.67729,-4.30079),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Welsh Cyclo Cross League Round 4   Holt Racing Pembrey incl the Welsh Championships</p>' +
        '<p>Sun, 5th Dec 2021</p>' +
        '<p>Att: 364</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/251120/Welsh-Cyclo-Cross-League-Round-4---Holt-Racing-Pembrey-incl-the-Welsh-Championships#results"><b>495272</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.97265,-0.53621),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Lincolnshire Cyclo cross Championship R1   Sleaford Wheelers</p>' +
        '<p>Sun, 26th Sep 2021</p>' +
        '<p>Att: 145</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248612/Lincolnshire-Cyclo-cross-Championship-R1---Sleaford-Wheelers#results"><b>493043</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.74891,0.4802),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Springfield Cross Eastern League Round 1</p>' +
        '<p>Sun, 26th Sep 2021</p>' +
        '<p>Att: 320</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/229031/Springfield-Cross-Eastern-League-Round-1#results"><b>474232</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.47667,-2.5676),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Western Cyclo Cross League R9</p>' +
        '<p>Sun, 5th Dec 2021</p>' +
        '<p>Att: 109</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248604/Western-Cyclo-Cross-League-R9#results"><b>493035</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(50.942974,-1.0220258),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>Clanfield Cross  Miche Wessex Cyclo cross Round 10</p>' +
        '<p>Sun, 12th Dec 2021</p>' +
        '<p>Att: 434</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/251986/Clanfield-Cross--Miche-Wessex-Cyclo-cross-Round-10#results"><b>495996</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.73969,-0.41023),
        type: "1",
        contentStr: '<div id="content">' +
        '<p>Vive le Velo Nocturne Cross Series 2021 Event 1</p>' +
        '<p>Wed, 8th Sep 2021</p>' +
        '<p>Att: 91</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247698/Vive-le-Velo-Nocturne-Cross-Series-2021-Event-1#results"><b>492155</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(50.42672,-3.57454),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Torbay Velopark JingleCross 2021</p>' +
        '<p>Sun, 19th Dec 2021</p>' +
        '<p>Att: 173</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/246045/Torbay-Velopark-JingleCross-2021#results"><b>490500</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(50.23504,-5.23924),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>South West Cyclo Cross Round 3 Cornwall</p>' +
        '<p>Sun, 31st Oct 2021</p>' +
        '<p>Att: 157</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/250658/South-West-Cyclo-Cross-Round-3-Cornwall#results"><b>494870</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.30458,-1.8234),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Shimano Lazer WMCCL Round 2</p>' +
        '<p>Sun, 12th Sep 2021</p>' +
        '<p>Att: 309</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248026/Shimano-Lazer-WMCCL-Round-2#results"><b>492491</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.03059,1.2217),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>World Masters Cyclo Cross   Weekend supporting events</p>' +
        '<p>Sun, 5th Dec 2021</p>' +
        '<p>Att: 156</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/252893/World-Masters-Cyclo-Cross---Weekend-supporting-events#results"><b>496830</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.60051,0.10897),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Challenge Tires London and South East CX League   Round 06</p>' +
        '<p>Sun, 31st Oct 2021</p>' +
        '<p>Att: 379</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/250924/Challenge-Tires-London-and-South-East-CX-League---Round-06#results"><b>495085</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(54.08825,-1.76698),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Pateley Bridge Cyclo Cross</p>' +
        '<p>Sun, 21st Nov 2021</p>' +
        '<p>Att: 141</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/252747/Pateley-Bridge-Cyclo-Cross#results"><b>496684</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.74824,-2.22911),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Western Cyclo Cross League R5</p>' +
        '<p>Sun, 31st Oct 2021</p>' +
        '<p>Att: 112</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248559/Western-Cyclo-Cross-League-R5#results"><b>492994</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.92039,-1.51099),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Forme Notts  Derby   Markeaton   East Mids Regional Championships</p>' +
        '<p>Sun, 28th Nov 2021</p>' +
        '<p>Att: 366</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248321/Forme-Notts--Derby---Markeaton---East-Mids-Regional-Championships#results"><b>492772</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(55.08721,-1.76459),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>CXNE Round 6</p>' +
        '<p>Sun, 7th Nov 2021</p>' +
        '<p>Att: 270</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247945/CXNE-Round-6#results"><b>492406</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.75547,-0.47526),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>CCXL Round 4   Hemel Hempstead</p>' +
        '<p>Sun, 3rd Oct 2021</p>' +
        '<p>Att: 279</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248797/CCXL-Round-4---Hemel-Hempstead#results"><b>493207</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.8554,-0.76315),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Lincolnshire Cyclo cross Trophy Day Series R1   Witham Wheelers</p>' +
        '<p>Sun, 19th Sep 2021</p>' +
        '<p>Att: 145</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247520/Lincolnshire-Cyclo-cross-Trophy-Day-Series-R1---Witham-Wheelers#results"><b>491984</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(54.90313,-1.66743),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>CXNE Round 7</p>' +
        '<p>Sun, 14th Nov 2021</p>' +
        '<p>Att: 208</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247946/CXNE-Round-7#results"><b>492407</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.14873,-1.267),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>Pedalon  NHRC   Miche Wessex Cyclo cross Round 9</p>' +
        '<p>Sun, 14th Nov 2021</p>' +
        '<p>Att: 480</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/246789/Pedalon--NHRC---Miche-Wessex-Cyclo-cross-Round-9#results"><b>491270</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(56.62783,-6.13562),
        type: "1",
        contentStr: '<div id="content">' +
        '<p>Cross at the Castle Sunday</p>' +
        '<p>Sun, 12th Dec 2021</p>' +
        '<p>Att: 58</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247697/Cross-at-the-Castle-Sunday#results"><b>492154</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.91283,-2.07811),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Western Cyclo Cross League R4</p>' +
        '<p>Sun, 24th Oct 2021</p>' +
        '<p>Att: 131</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248558/Western-Cyclo-Cross-League-R4#results"><b>492993</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.23684,0.15795),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>CC Ashwell Cross Eastern League Round 2</p>' +
        '<p>Sun, 3rd Oct 2021</p>' +
        '<p>Att: 310</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248461/CC-Ashwell-Cross-Eastern-League-Round-2#results"><b>492900</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.41158,0.37279),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>Challenge Tires London and South East CX League   Round 07</p>' +
        '<p>Sun, 7th Nov 2021</p>' +
        '<p>Att: 482</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/251014/Challenge-Tires-London-and-South-East-CX-League---Round-07#results"><b>495166</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.3175,-1.94259),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Shimano Lazer WMCCL Round 3</p>' +
        '<p>Sun, 19th Sep 2021</p>' +
        '<p>Att: 319</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248027/Shimano-Lazer-WMCCL-Round-3#results"><b>492492</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.57604,-1.80688),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Cotswold Veldrijden   Miche Wessex Cyclo cross Round 2</p>' +
        '<p>Sun, 19th Sep 2021</p>' +
        '<p>Att: 302</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248036/Cotswold-Veldrijden---Miche-Wessex-Cyclo-cross-Round-2#results"><b>492505</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.94621,-1.08733),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>Forme Notts  Derby   Holme Pierre Pont</p>' +
        '<p>Sat, 13th Nov 2021</p>' +
        '<p>Att: 453</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248320/Forme-Notts--Derby---Holme-Pierre-Pont#results"><b>492771</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.4504,-1.00641),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>Reading CC Bill Higson Memorial Cyclocross   Miche Wessex Cyclo cross Round 4</p>' +
        '<p>Sun, 3rd Oct 2021</p>' +
        '<p>Att: 421</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/246795/Reading-CC-Bill-Higson-Memorial-Cyclocross---Miche-Wessex-Cyclo-cross-Round-4#results"><b>491276</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.89467,0.88957),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>VC Revolution Hilly Fields Cross Eastern League Round 3</p>' +
        '<p>Sun, 10th Oct 2021</p>' +
        '<p>Att: 306</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/229034/VC-Revolution-Hilly-Fields-Cross-Eastern-League-Round-3#results"><b>474235</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.45487,-2.55329),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Western Cyclo Cross League R3</p>' +
        '<p>Sun, 17th Oct 2021</p>' +
        '<p>Att: 172</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248556/Western-Cyclo-Cross-League-R3#results"><b>492991</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.56123,-2.75196),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>NWCCA League Round 1   HMCC CX</p>' +
        '<p>Sun, 12th Sep 2021</p>' +
        '<p>Att: 328</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248314/NWCCA-League-Round-1---HMCC-CX#results"><b>492764</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.777,-2.3775),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Shimano Lazer WMCCL Round 8</p>' +
        '<p>Sun, 24th Oct 2021</p>' +
        '<p>Att: 257</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248031/Shimano-Lazer-WMCCL-Round-8#results"><b>492496</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.94965,-0.95519),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Forme Notts  Derby   Bingham</p>' +
        '<p>Sat, 2nd Oct 2021</p>' +
        '<p>Att: 316</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248039/Forme-Notts--Derby---Bingham#results"><b>492508</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(56.07835,-3.40534),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Fife College CX 2021  Return to Racing Event</p>' +
        '<p>Sun, 31st Oct 2021</p>' +
        '<p>Att: 215</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248749/Fife-College-CX-2021--Return-to-Racing-Event#results"><b>493164</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.12785,1.29689),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>East Kent Cyclo Cross League Round 3 GrandPrixAlexPaton</p>' +
        '<p>Sun, 14th Nov 2021</p>' +
        '<p>Att: 203</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/246406/East-Kent-Cyclo-Cross-League-Round-3-GrandPrixAlexPaton#results"><b>490870</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(55.92009,-3.13958),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Edinburgh RC Inch Park CX</p>' +
        '<p>Sat, 25th Sep 2021</p>' +
        '<p>Att: 156</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/246849/Edinburgh-RC-Inch-Park-CX#results"><b>491329</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.82947,-0.23005),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Lincolnshire Cyclo Cross Trophy Day Series R4   Spalding</p>' +
        '<p>Sun, 21st Nov 2021</p>' +
        '<p>Att: 126</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/250735/Lincolnshire-Cyclo-Cross-Trophy-Day-Series-R4---Spalding#results"><b>494930</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(50.87243,-2.88942),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Cricket St Thomas Cyclo cross 2021</p>' +
        '<p>Sun, 3rd Oct 2021</p>' +
        '<p>Att: 228</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247862/Cricket-St-Thomas-Cyclo-cross-2021#results"><b>492325</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.436,-2.36948),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Shimano Lazer WMCCL Round 12</p>' +
        '<p>Sun, 5th Dec 2021</p>' +
        '<p>Att: 216</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/252838/Shimano-Lazer-WMCCL-Round-12#results"><b>496780</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.78938,-0.21692),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Welwyn Wheelers Stanborough Cross Eastern League Round 4</p>' +
        '<p>Sun, 24th Oct 2021</p>' +
        '<p>Att: 307</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/229032/Welwyn-Wheelers-Stanborough-Cross-Eastern-League-Round-4#results"><b>474233</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.33227,-0.17332),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Lincolnshire Cyclo cross Championship R3   Pain Train</p>' +
        '<p>Sun, 31st Oct 2021</p>' +
        '<p>Att: 104</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/250351/Lincolnshire-Cyclo-cross-Championship-R3---Pain-Train#results"><b>494611</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.77481,-2.2264),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>NWCCA League Round 3   Towneley Park CX 2021</p>' +
        '<p>Sun, 17th Oct 2021</p>' +
        '<p>Att: 382</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/243467/NWCCA-League-Round-3---Towneley-Park-CX-2021#results"><b>487996</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.65533,-0.59114),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Lincolnshire Cyclo cross Trophy Day R5   Winterton Showground</p>' +
        '<p>Sun, 12th Dec 2021</p>' +
        '<p>Att: 149</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/252898/Lincolnshire-Cyclo-cross-Trophy-Day-R5---Winterton-Showground#results"><b>496837</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.72836,-2.72196),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Shimano Lazer WMCCL Round 4</p>' +
        '<p>Sun, 26th Sep 2021</p>' +
        '<p>Att: 248</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248028/Shimano-Lazer-WMCCL-Round-4#results"><b>492493</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.47294,-1.60089),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Shimano Lazer WMCCL Round 5</p>' +
        '<p>Sun, 3rd Oct 2021</p>' +
        '<p>Att: 336</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247938/Shimano-Lazer-WMCCL-Round-5#results"><b>492399</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(50.93675,-1.41696),
        type: "5",
        contentStr: '<div id="content">' +
        '<p>Sotonia CC   Miche Wessex Cyclo Cross Round 5</p>' +
        '<p>Sun, 17th Oct 2021</p>' +
        '<p>Att: 426</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249180/Sotonia-CC---Miche-Wessex-Cyclo-Cross-Round-5#results"><b>493571</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.15745,-3.4062),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Welsh Cyclo cross League Round 2   Bulls Cycling Club</p>' +
        '<p>Sun, 7th Nov 2021</p>' +
        '<p>Att: 242</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/251337/Welsh-Cyclo-cross-League-Round-2---Bulls-Cycling-Club#results"><b>495452</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.01494,-0.75748),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>CCXL Round 2   Team MK  MK Bowl</p>' +
        '<p>Sun, 19th Sep 2021</p>' +
        '<p>Att: 323</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247699/CCXL-Round-2---Team-MK--MK-Bowl#results"><b>492165</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.69969,-1.32466),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>Trek Fox ValleyBespoke Sports KitInSyncCyclingCoach   2021 Winter Cyclo Cross Series  Yorkshire Points No 6</p>' +
        '<p>Sun, 7th Nov 2021</p>' +
        '<p>Att: 346</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/251793/Trek-Fox-ValleyBespoke-Sports-KitInSyncCyclingCoach---2021-Winter-Cyclo-Cross-Series--Yorkshire-Points-No-6#results"><b>495831</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.07812,-1.02154),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>CCXL R1   Silverstone Festival </p>' +
        '<p>Sun, 5th Sep 2021</p>' +
        '<p>Att: 376</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247433/CCXL-R1---Silverstone-Festival-#results"><b>491908</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.07043,-2.72203),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Shimano Lazer WMCCL Round 9</p>' +
        '<p>Sun, 31st Oct 2021</p>' +
        '<p>Att: 227</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/250653/Shimano-Lazer-WMCCL-Round-9#results"><b>494865</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(55.08721,-1.76459),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>CXNE Round 1</p>' +
        '<p>Sun, 12th Sep 2021</p>' +
        '<p>Att: 225</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/247778/CXNE-Round-1#results"><b>492244</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.8483,-0.50951),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Trek Fox ValleyBespoke Sports KitInSyncCyclingCoach   2021 Winter Cyclo Cross Series   Yorkshire Points No 1</p>' +
        '<p>Sun, 12th Sep 2021</p>' +
        '<p>Att: 235</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248611/Trek-Fox-ValleyBespoke-Sports-KitInSyncCyclingCoach---2021-Winter-Cyclo-Cross-Series---Yorkshire-Points-No-1#results"><b>493042</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(52.49098,-0.65269),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Leicestershire Cyclo Cross League Rd 1</p>' +
        '<p>Sun, 26th Sep 2021</p>' +
        '<p>Att: 179</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248153/Leicestershire-Cyclo-Cross-League-Rd-1#results"><b>492614</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.23743,-2.31272),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Western Cyclo Cross League R2</p>' +
        '<p>Sun, 26th Sep 2021</p>' +
        '<p>Att: 233</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248458/Western-Cyclo-Cross-League-R2#results"><b>492896</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.45478,-2.55875),
        type: "2",
        contentStr: '<div id="content">' +
        '<p>Western Cyclo Cross League R10</p>' +
        '<p>Sun, 19th Dec 2021</p>' +
        '<p>Att: 117</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248605/Western-Cyclo-Cross-League-R10#results"><b>493036</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(51.06104,-0.08529),
        type: "3",
        contentStr: '<div id="content">' +
        '<p>Challenge Tires London and South East CX League   Round 01</p>' +
        '<p>Sun, 19th Sep 2021</p>' +
        '<p>Att: 286</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/248563/Challenge-Tires-London-and-South-East-CX-League---Round-01#results"><b>492999</b></a></p>' +
        "</div>",
        },
        {
        position: new google.maps.LatLng(53.01878,-2.36776),
        type: "4",
        contentStr: '<div id="content">' +
        '<p>NWCCA League Round 7   North Cheshire Clarion CX</p>' +
        '<p>Sat, 27th Nov 2021</p>' +
        '<p>Att: 367</p>' +
        '<p>URN:<a href="https://www.britishcycling.org.uk/events/details/249268/NWCCA-League-Round-7---North-Cheshire-Clarion-CX#results"><b>493656</b></a></p>' +
        "</div>",
        },
        

              ];


  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const infowindow = new google.maps.InfoWindow({
        content: features[i].contentStr,
        });      
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
    marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: true,
        });
      });
  }
}
// [END maps_custom_markers]