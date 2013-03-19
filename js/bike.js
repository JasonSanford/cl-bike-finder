(function() {
    var locations = new Array("Auburn", "Birmingham", "Dothan", "Florence / Muscle Shoals", "Gadsden-anniston", "Huntsville / Decatur", "Mobile", "Montgomery", "Tuscaloosa", "Anchorage / Mat-su", "Fairbanks", "Kenai Peninsula", "Southeast Alaska", "Flagstaff / Sedona", "Mohave County", "Phoenix", "Prescott", "Show Low", "Sierra Vista", "Tucson", "Yuma", "Fayetteville", "Fort Smith", "Jonesboro", "Little Rock", "Texarkana", "Bakersfield", "Chico", "Fresno / Madera", "Gold Country", "Hanford-corcoran", "Humboldt County", "Imperial County", "Inland Empire", "Los Angeles", "Mendocino County", "Merced", "Modesto", "Monterey Bay", "Orange County", "Palm Springs", "Redding", "Sacramento", "San Diego", "San Francisco Bay Area", "San Luis Obispo", "Santa Barbara", "Santa Maria", "Siskiyou County", "Stockton", "Susanville", "Ventura County", "Visalia-tulare", "Yuba-sutter", "Boulder", "Colorado Springs", "Denver", "Eastern Co", "Fort Collins / North Co", "High Rockies", "Pueblo", "Western Slope", "Eastern Ct", "Hartford", "New Haven", "Northwest Ct", "Delaware", "Washington", "Daytona Beach", "Florida Keys", "Fort Lauderdale", "Ft Myers / Sw Florida", "Gainesville", "Heartland Florida", "Jacksonville", "Lakeland", "North Central Fl", "Ocala", "Okaloosa / Walton", "Orlando", "Panama City", "Pensacola", "Sarasota-bradenton", "South Florida", "Space Coast", "St Augustine", "Tallahassee", "Tampa Bay Area", "Treasure Coast", "West Palm Beach", "Albany", "Athens", "Atlanta", "Augusta", "Brunswick", "Columbus", "Macon / Warner Robins", "Northwest Ga", "Savannah / Hinesville", "Statesboro", "Valdosta", "Hawaii", "Boise", "East Idaho", "Lewiston / Clarkston", "Twin Falls", "Bloomington-normal", "Champaign Urbana", "Chicago", "Decatur", "La Salle Co", "Mattoon-charleston", "Peoria", "Rockford", "Southern Illinois", "Springfield", "Western Il", "Bloomington", "Evansville", "Fort Wayne", "Indianapolis", "Kokomo", "Lafayette / West Lafayette", "Muncie / Anderson", "Richmond", "South Bend / Michiana", "Terre Haute", "Ames", "Cedar Rapids", "Des Moines", "Dubuque", "Fort Dodge", "Iowa City", "Mason City", "Quad Cities", "Sioux City", "Southeast Ia", "Waterloo / Cedar Falls", "Lawrence", "Manhattan", "Northwest Ks", "Salina", "Southeast Ks", "Southwest Ks", "Topeka", "Wichita", "Bowling Green", "Eastern Kentucky", "Lexington", "Louisville", "Owensboro", "Western Ky", "Baton Rouge", "Central Louisiana", "Houma", "Lafayette", "Lake Charles", "Monroe", "New Orleans", "Shreveport", "Maine", "Annapolis", "Baltimore", "Eastern Shore", "Frederick", "Southern Maryland", "Western Maryland", "Boston", "Cape Cod / Islands", "South Coast", "Western Massachusetts", "Worcester / Central Ma", "Ann Arbor", "Battle Creek", "Central Michigan", "Detroit Metro", "Flint", "Grand Rapids", "Holland", "Jackson", "Kalamazoo", "Lansing", "Monroe", "Muskegon", "Northern Michigan", "Port Huron", "Saginaw-midland-baycity", "Southwest Michigan", "The Thumb", "Upper Peninsula", "Bemidji", "Brainerd", "Duluth / Superior", "Mankato", "Minneapolis / St Paul", "Rochester", "Southwest Mn", "St Cloud", "Gulfport / Biloxi", "Hattiesburg", "Jackson", "Meridian", "North Mississippi", "Southwest Ms", "Columbia / Jeff City", "Joplin", "Kansas City", "Kirksville", "Lake Of The Ozarks", "Southeast Missouri", "Springfield", "St Joseph", "St Louis", "Billings", "Bozeman", "Butte", "Great Falls", "Helena", "Kalispell", "Missoula", "Eastern Montana", "Grand Island", "Lincoln", "North Platte", "Omaha / Council Bluffs", "Scottsbluff / Panhandle", "Elko", "Las Vegas", "Reno / Tahoe", "New Hampshire", "Central Nj", "Jersey Shore", "North Jersey", "South Jersey", "Albuquerque", "Clovis / Portales", "Farmington", "Las Cruces", "Roswell / Carlsbad", "Santa Fe / Taos", "Albany", "Binghamton", "Buffalo", "Catskills", "Chautauqua", "Elmira-corning", "Finger Lakes", "Glens Falls", "Hudson Valley", "Ithaca", "Long Island", "New York City", "Oneonta", "Plattsburgh-adirondacks", "Potsdam-canton-massena", "Rochester", "Syracuse", "Twin Tiers Ny/pa", "Utica-rome-oneida", "Watertown", "Asheville", "Boone", "Charlotte", "Eastern Nc", "Fayetteville", "Greensboro", "Hickory / Lenoir", "Jacksonville", "Outer Banks", "Raleigh / Durham / Ch", "Wilmington", "Winston-salem", "Bismarck", "Fargo / Moorhead", "Grand Forks", "North Dakota", "Akron / Canton", "Ashtabula", "Athens", "Chillicothe", "Cincinnati", "Cleveland", "Columbus", "Dayton / Springfield", "Lima / Findlay", "Mansfield", "Sandusky", "Toledo", "Tuscarawas Co", "Youngstown", "Zanesville / Cambridge", "Lawton", "Northwest Ok", "Oklahoma City", "Stillwater", "Tulsa", "Bend", "Corvallis/albany", "East Oregon", "Eugene", "Klamath Falls", "Medford-ashland", "Oregon Coast", "Portland", "Roseburg", "Salem", "Altoona-johnstown", "Cumberland Valley", "Erie", "Harrisburg", "Lancaster", "Lehigh Valley", "Meadville", "Philadelphia", "Pittsburgh", "Poconos", "Reading", "Scranton / Wilkes-barre", "State College", "Williamsport", "York", "Rhode Island", "Charleston", "Columbia", "Florence", "Greenville / Upstate", "Hilton Head", "Myrtle Beach", "Northeast Sd", "Pierre / Central Sd", "Rapid City / West Sd", "Sioux Falls / Se Sd", "South Dakota", "Chattanooga", "Clarksville", "Cookeville", "Jackson", "Knoxville", "Memphis", "Nashville", "Tri-cities", "Abilene", "Amarillo", "Austin", "Beaumont / Port Arthur", "Brownsville", "College Station", "Corpus Christi", "Dallas / Fort Worth", "Deep East Texas", "Del Rio / Eagle Pass", "El Paso", "Galveston", "Houston", "Killeen / Temple / Ft Hood", "Laredo", "Lubbock", "Mcallen / Edinburg", "Odessa / Midland", "San Angelo", "San Antonio", "San Marcos", "Southwest Tx", "Texoma", "Tyler / East Tx", "Victoria", "Waco", "Wichita Falls", "Logan", "Ogden-clearfield", "Provo / Orem", "Salt Lake City", "St George", "Vermont", "Charlottesville", "Danville", "Fredericksburg", "Hampton Roads", "Harrisonburg", "Lynchburg", "New River Valley", "Richmond", "Roanoke", "Southwest Va", "Winchester", "Bellingham", "Kennewick-pasco-richland", "Moses Lake", "Olympic Peninsula", "Pullman / Moscow", "Seattle-tacoma", "Skagit / Island / Sji", "Spokane / Coeur D'alene", "Wenatchee", "Yakima", "Charleston", "Eastern Panhandle", "Huntington-ashland", "Morgantown", "Northern Panhandle", "Parkersburg-marietta", "Southern Wv", "West Virginia (old)", "Appleton-oshkosh-fdl", "Eau Claire", "Green Bay", "Janesville", "Kenosha-racine", "La Crosse", "Madison", "Milwaukee", "Northern Wi", "Sheboygan", "Wausau", "Wyoming", "Guam-micronesia", "Puerto Rico", "U.s. Virgin Islands", "Calgary", "Edmonton", "Ft Mcmurray", "Lethbridge", "Medicine Hat", "Peace River Country", "Red Deer", "Cariboo", "Comox Valley", "Fraser Valley", "Kamloops", "Kelowna / Okanagan", "Kootenays", "Nanaimo", "Prince George", "Skeena-bulkley", "Sunshine Coast", "Vancouver", "Victoria", "Whistler", "Winnipeg", "New Brunswick", "St John's", "Territories", "Yellowknife", "Halifax", "Barrie", "Belleville", "Brantford-woodstock", "Chatham-kent", "Cornwall", "Guelph", "Hamilton-burlington", "Kingston", "Kitchener-waterloo-cambridge", "London", "Niagara Region", "Ottawa-hull-gatineau", "Owen Sound", "Peterborough", "Sarnia", "Sault Ste Marie", "Sudbury", "Thunder Bay", "Toronto", "Windsor", "Prince Edward Island", "Montreal", "Quebec City", "Saguenay", "Sherbrooke", "Trois-rivieres", "Regina", "Saskatoon", "Whitehorse", "Vienna", "Belgium", "Bulgaria", "Croatia", "Prague", "Copenhagen", "Finland", "Bordeaux", "Brittany", "Grenoble", "Lille", "Loire Valley", "Lyon", "Marseille", "Montpellier", "Nice / Cote D'azur", "Normandy", "Paris", "Strasbourg", "Toulouse", "Berlin", "Bremen", "Cologne", "Dresden", "Dusseldorf", "Essen / Ruhr", "Frankfurt", "Hamburg", "Hannover", "Heidelberg", "Kaiserslautern", "Leipzig", "Munich", "Nuremberg", "Stuttgart", "Greece", "Budapest", "Reykjavik", "Dublin", "Bologna", "Florence / Tuscany", "Genoa", "Milan", "Napoli / Campania", "Perugia", "Rome", "Sardinia", "Sicilia", "Torino", "Venice / Veneto", "Luxembourg", "Amsterdam / Randstad", "Norway", "Poland", "Faro / Algarve", "Lisbon", "Porto", "Romania", "Moscow", "St Petersburg", "Alicante", "Baleares", "Barcelona", "Bilbao", "Cadiz", "Canarias", "Granada", "Madrid", "Malaga", "Sevilla", "Valencia", "Sweden", "Basel", "Bern", "Geneva", "Lausanne", "Zurich", "Urkey", "Ukraine", "Aberdeen", "Bath", "Belfast", "Birmingham / West Mids", "Brighton", "Bristol", "Cambridge, Uk", "Cardiff / Wales", "Coventry", "Derby", "Devon & Cornwall", "Dundee", "East Anglia", "East Midlands", "Edinburgh", "Essex", "Glasgow", "Hampshire", "Kent", "Leeds", "Liverpool", "London", "Manchester", "Newcastle / Ne England", "Nottingham", "Oxford", "Sheffield", "Guam-micronesia", "Bangladesh", "Beijing", "Chengdu", "Chongqing", "Dalian", "Guangzhou", "Hangzhou", "Nanjing", "Shanghai", "Shenyang", "Shenzhen", "Wuhan", "Xi'an", "Hong Kong", "Ahmedabad", "Bangalore", "Bhubaneswar", "Chandigarh", "Chennai (madras)", "Delhi", "Goa", "Hyderabad", "Indore", "Jaipur", "Kerala", "Kolkata (calcutta)", "Lucknow", "Mumbai", "Pune", "Surat Surat", "Indonesia", "Iran", "Iraq", "Haifa", "Jerusalem", "Tel Aviv", "West Bank", "Fukuoka", "Hiroshima", "Nagoya", "Okinawa", "Osaka-kobe-kyoto", "Sapporo", "Sendai", "Tokyo", "Seoul", "Kuwait", "Beirut, Lebanon", "Malaysia", "Pakistan", "Bacolod", "Bicol Region", "Cagayan De Oro", "Cebu", "Davao City", "Iloilo", "Manila", "Pampanga", "Zamboanga", "Singapore", "Taiwan", "Thailand", "United Arab Emirates", "Vietnam", "Adelaide", "Brisbane", "Cairns", "Canberra", "Darwin", "Gold Coast", "Melbourne", "Newcastle, Nsw", "Perth", "Sydney", "Tasmania", "Wollongong", "Auckland", "Christchurch", "Dunedin", "Wellington", "Caribbean Islands", "Buenos Aires", "Bolivia", "Belo Horizonte", "Brasilia", "Curitiba", "Fortaleza", "Porto Alegre", "Recife", "Rio De Janeiro", "Salvador, Bahia", "Sao Paulo", "Chile", "Colombia", "Costa Rica", "Dominican Republic", "Ecuador", "El Salvador", "Guatemala", "Acapulco", "Baja California Sur", "Chihuahua", "Ciudad Juarez", "Guadalajara", "Guanajuato", "Hermosillo", "Mazatlan", "Mexico City", "Monterrey", "Oaxaca", "Puebla", "Puerto Vallarta", "Tijuana", "Veracruz", "Yucatan", "Nicaragua", "Panama", "Peru", "Puerto Rico", "Montevideo", "Venezuela", "Virgin Islands", "Egypt", "Ethiopia", "Ghana", "Kenya", "Morocco", "Cape Town", "Durban", "Johannesburg", "Pretoria", "Tunisia");
    var subdomains = new Array("auburn", "bham", "dothan", "shoals", "gadsden", "huntsville", "mobile", "montgomery", "tuscaloosa", "anchorage", "fairbanks", "kenai", "juneau", "flagstaff", "mohave", "phoenix", "prescott", "showlow", "sierravista", "tucson", "yuma", "fayar", "fortsmith", "jonesboro", "littlerock", "texarkana", "bakersfield", "chico", "fresno", "goldcountry", "hanford", "humboldt", "imperial", "inlandempire", "losangeles", "mendocino", "merced", "modesto", "monterey", "orangecounty", "palmsprings", "redding", "sacramento", "sandiego", "sfbay", "slo", "santabarbara", "santamaria", "siskiyou", "stockton", "susanville", "ventura", "visalia", "yubasutter", "boulder", "cosprings", "denver", "eastco", "fortcollins", "rockies", "pueblo", "westslope", "newlondon", "hartford", "newhaven", "nwct", "delaware", "washingtondc", "daytona", "keys", "fortlauderdale", "fortmyers", "gainesville", "cfl", "jacksonville", "lakeland", "lakecity", "ocala", "okaloosa", "orlando", "panamacity", "pensacola", "sarasota", "miami", "spacecoast", "staugustine", "tallahassee", "tampa", "treasure", "westpalmbeach", "albanyga", "athensga", "atlanta", "augusta", "brunswick", "columbusga", "macon", "nwga", "savannah", "statesboro", "valdosta", "honolulu", "boise", "eastidaho", "lewiston", "twinfalls", "bn", "chambana", "chicago", "decatur", "lasalle", "mattoon", "peoria", "rockford", "carbondale", "springfieldil", "quincy", "bloomington", "evansville", "fortwayne", "indianapolis", "kokomo", "tippecanoe", "muncie", "richmondin", "southbend", "terrehaute", "ames", "cedarrapids", "desmoines", "dubuque", "fortdodge", "iowacity", "masoncity", "quadcities", "siouxcity", "ottumwa", "waterloo", "lawrence", "ksu", "nwks", "salina", "seks", "swks", "topeka", "wichita", "bgky", "eastky", "lexington", "louisville", "owensboro", "westky", "batonrouge", "cenla", "houma", "lafayette", "lakecharles", "monroe", "neworleans", "shreveport", "maine", "annapolis", "baltimore", "easternshore", "frederick", "smd", "westmd", "boston", "capecod", "southcoast", "westernmass", "worcester", "annarbor", "battlecreek", "centralmich", "detroit", "flint", "grandrapids", "holland", "jxn", "kalamazoo", "lansing", "monroemi", "muskegon", "nmi", "porthuron", "saginaw", "swmi", "thumb", "up", "bemidji", "brainerd", "duluth", "mankato", "minneapolis", "rmn", "marshall", "stcloud", "gulfport", "hattiesburg", "jackson", "meridian", "northmiss", "natchez", "columbiamo", "joplin", "kansascity", "kirksville", "loz", "semo", "springfield", "stjoseph", "stlouis", "billings", "bozeman", "butte", "greatfalls", "helena", "kalispell", "missoula", "montana", "grandisland", "lincoln", "northplatte", "omaha", "scottsbluff", "elko", "lasvegas", "reno", "nh", "cnj", "jerseyshore", "newjersey", "southjersey", "albuquerque", "clovis", "farmington", "lascruces", "roswell", "santafe", "albany", "binghamton", "buffalo", "catskills", "chautauqua", "elmira", "fingerlakes", "glensfalls", "hudsonvalley", "ithaca", "longisland", "newyork", "oneonta", "plattsburgh", "potsdam", "rochester", "syracuse", "twintiers", "utica", "watertown", "asheville", "boone", "charlotte", "eastnc", "fayetteville", "greensboro", "hickory", "onslow", "outerbanks", "raleigh", "wilmington", "winstonsalem", "bismarck", "fargo", "grandforks", "nd", "akroncanton", "ashtabula", "athensohio", "chillicothe", "cincinnati", "cleveland", "columbus", "dayton", "limaohio", "mansfield", "sandusky", "toledo", "tuscarawas", "youngstown", "zanesville", "lawton", "enid", "oklahomacity", "stillwater", "tulsa", "bend", "corvallis", "eastoregon", "eugene", "klamath", "medford", "oregoncoast", "portland", "roseburg", "salem", "altoona", "chambersburg", "erie", "harrisburg", "lancaster", "allentown", "meadville", "philadelphia", "pittsburgh", "poconos", "reading", "scranton", "pennstate", "williamsport", "york", "providence", "charleston", "columbia", "florencesc", "greenville", "hiltonhead", "myrtlebeach", "nesd", "csd", "rapidcity", "siouxfalls", "sd", "chattanooga", "clarksville", "cookeville", "jacksontn", "knoxville", "memphis", "nashville", "tricities", "abilene", "amarillo", "austin", "beaumont", "brownsville", "collegestation", "corpuschristi", "dallas", "nacogdoches", "delrio", "elpaso", "galveston", "houston", "killeen", "laredo", "lubbock", "mcallen", "odessa", "sanangelo", "sanantonio", "sanmarcos", "bigbend", "texoma", "easttexas", "victoriatx", "waco", "wichitafalls", "logan", "ogden", "provo", "saltlakecity", "stgeorge", "burlington", "charlottesville", "danville", "fredericksburg", "norfolk", "harrisonburg", "lynchburg", "blacksburg", "richmond", "roanoke", "swva", "winchester", "bellingham", "kpr", "moseslake", "olympic", "pullman", "seattle", "skagit", "spokane", "wenatchee", "yakima", "charlestonwv", "martinsburg", "huntington", "morgantown", "wheeling", "parkersburg", "swv", "wv", "appleton", "eauclaire", "greenbay", "janesville", "racine", "lacrosse", "madison", "milwaukee", "northernwi", "sheboygan", "wausau", "wyoming", "micronesia", "puertorico", "virgin", "calgary", "edmonton", "ftmcmurray", "lethbridge", "hat", "peace", "reddeer", "cariboo", "comoxvalley", "abbotsford", "kamloops", "kelowna", "cranbrook", "nanaimo", "princegeorge", "skeena", "sunshine", "vancouver", "victoria", "whistler", "winnipeg", "newbrunswick", "newfoundland", "territories", "yellowknife", "halifax", "barrie", "belleville", "brantford", "chatham", "cornwall", "guelph", "hamilton", "kingston", "kitchener", "londonon", "niagara", "ottawa", "owensound", "peterborough", "sarnia", "soo", "sudbury", "thunderbay", "toronto", "windsor", "pei", "montreal", "quebec", "saguenay", "sherbrooke", "troisrivieres", "regina", "saskatoon", "whitehorse", "vienna", "brussels", "bulgaria", "zagreb", "prague", "copenhagen", "helsinki", "bordeaux", "rennes", "grenoble", "lille", "loire", "lyon", "marseilles", "montpellier", "cotedazur", "rouen", "paris", "strasbourg", "toulouse", "berlin", "bremen", "cologne", "dresden", "dusseldorf", "essen", "frankfurt", "hamburg", "hannover", "heidelberg", "kaiserslautern", "leipzig", "munich", "nuremberg", "stuttgart", "athens", "budapest", "reykjavik", "dublin", "bologna", "florence", "genoa", "milan", "naples", "perugia", "rome", "sardinia", "sicily", "torino", "venice", "luxembourg", "amsterdam", "oslo", "warsaw", "faro", "lisbon", "porto", "bucharest", "moscow", "stpetersburg", "alicante", "baleares", "barcelona", "bilbao", "cadiz", "canarias", "granada", "madrid", "malaga", "sevilla", "valencia", "stockholm", "basel", "bern", "geneva", "lausanne", "zurich", "istanbul", "ukraine", "aberdeen", "bath", "belfast", "birmingham", "brighton", "bristol", "cambridge", "cardiff", "coventry", "derby", "devon", "dundee", "norwich", "eastmids", "edinburgh", "essex", "glasgow", "hampshire", "kent", "leeds", "liverpool", "london", "manchester", "newcastle", "nottingham", "oxford", "sheffield", "micronesia", "bangladesh", "beijing", "chengdu", "chongqing", "dalian", "guangzhou", "hangzhou", "nanjing", "shanghai", "shenyang", "shenzhen", "wuhan", "xian", "hongkong", "ahmedabad", "bangalore", "bhubaneswar", "chandigarh", "chennai", "delhi", "goa", "hyderabad", "indore", "jaipur", "kerala", "kolkata", "lucknow", "mumbai", "pune", "surat", "jakarta", "tehran", "baghdad", "haifa", "jerusalem", "telaviv", "ramallah", "fukuoka", "hiroshima", "nagoya", "okinawa", "osaka", "sapporo", "sendai", "tokyo", "seoul", "kuwait", "beirut", "malaysia", "pakistan", "bacolod", "naga", "cdo", "cebu", "davaocity", "iloilo", "manila", "pampanga", "zamboanga", "singapore", "taipei", "bangkok", "dubai", "vietnam", "adelaide", "brisbane", "cairns", "canberra", "darwin", "goldcoast", "melbourne", "ntl", "perth", "sydney", "hobart", "wollongong", "auckland", "christchurch", "dunedin", "wellington", "caribbean", "buenosaires", "lapaz", "belohorizonte", "brasilia", "curitiba", "fortaleza", "portoalegre", "recife", "rio", "salvador", "saopaulo", "santiago", "colombia", "costarica", "santodomingo", "quito", "elsalvador", "guatemala", "acapulco", "bajasur", "chihuahua", "juarez", "guadalajara", "guanajuato", "hermosillo", "mazatlan", "mexicocity", "monterrey", "oaxaca", "puebla", "pv", "tijuana", "veracruz", "yucatan", "managua", "panama", "lima", "puertorico", "montevideo", "caracas", "virgin", "cairo", "addisababa", "accra", "kenya", "casablanca", "capetown", "durban", "johannesburg", "pretoria", "tunis");

    $('#city').attr('data-source', function(i, attr){
        return JSON.stringify(locations);
    });

    $('.city-select').on('click', function(event) {
        event.preventDefault();
        var $this = $(this);
        if ($this.hasClass('label-info')) {
            return;
        }
        $('.label-info').removeClass('label-info');
        $this.addClass('label-info');
        $('#city').val('');
        generateUrl();
    });

    $('#keywords,#exclude').on('keyup', generateUrl);

    $('.refine,#city').on('change', generateUrl);

    function generateUrl() {

        var url,
            params = {},
            city = $('#city').val().length > 0 ? subdomains[locations.indexOf($('#city').val())] : $('.label-info').data('cl-subdomain');

        if ($('#keywords').val().trim().length < 1) {
            error('Enter at least one keyword');
            return;
        }

        params.query = $('#keywords').val().trim();

        $('.refine').each(function(i, o) {
            if ($(o).is(':checked')) {
                params.query += ' ' + $(o).data('exclude-string');
            }
        });

        if ($('#photos').is(':checked')) {
            params.hasPic = 1;
        }

        if ($('#title').is(':checked')) {
            params.srchType = 'T';
        }

        if ($('#exclude').val().trim().length > 0) {
            params.query += ' ' + (function() {
                var i,
                    splits = $('#exclude').val().trim().split(' '),
                    len = splits.length;
                for (i = 0; i < len; i++) {
                    splits[i] = '-' + splits[i];
                }
                return splits.join(' ');
            }());
        }

        if ($('#price-min').val().trim().length > 0) {
            params.minAsk = $('#price-min').val().trim();
        }

        if ($('#price-max').val().trim().length > 0) {
            params.maxAsk = $('#price-max').val().trim();
        }

        url = 'http://' + city + '.craigslist.org/search/bia?' + $.param(params);
        success(url);
    }

    function success(url) {
        $('#output')
            .removeClass('error')
            .addClass('success');

        $('#output-url').val(url);

        $('#output-link')
            .show()
            .attr('href', url);

        $('#output-help').html(' or click ');

        $('#output-label').text('Copy this link');
    }

    function error(message) {
        $('#output')
            .removeClass('success')
            .addClass('error');

        $('#output-url').val('Need more input to create URL ...');

        $('#output-help').html(message);

        $('#output-label').text('Needs input ...');

        $('#output-link').hide();
    }

    generateUrl();

}());
