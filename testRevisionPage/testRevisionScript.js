var currentPaper = "US";
var currentQ;
var currentSelect;
var selected;
var currentGreen;

function onStart() {
//main program
/*
    set of questions. then we have 4 choices for each, 
    one correct.
    have a fuller explanation for the correct choice, 
    which shows in feedback
*/
selected = false;
//check which paper is selected
}

//when user chooses answer
function selectAnswer(index) {
    choice = currentQ.options[index];
    question = currentQ;
    if (!selected) {
        if (choice == question.answer) {
        document.getElementById("feedback").style.color = "#a8d5b5";
        document.getElementById("feedback").textContent = ("✔ CORRECT - " + question.feedback);
        }
        else {
            document.getElementById("feedback").style.color = "#f38a8a";
            document.getElementById("feedback").textContent = ("✘ INCORRECT - " + question.feedback);
            getChoice(choice, currentQ);
        }
        document.getElementById("feedback").style.display = "block";
        document.getElementById("nextQButton").style.display = "block";
        getCorrectOpt(question);
        document.getElementById("feedback").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        selected = true;
    }

}

function getChoice(choice, question) {
    let options = document.getElementsByClassName("but");
    for (let i = 0; i < 4; i++) {
        if (question.options[i] == choice) {
            let id = String(options[i].id); 
            currentSelect = id;
            document.getElementById(id).style.backgroundColor = "#f38a8a";
            document.getElementById(id).style.color = "black";
            //#66BB6A green?
            //#7c3a3a red

        }
    }
}
//display right answer
function getCorrectOpt(question) {
    let options = document.getElementsByClassName("but");
    for (let i = 0; i < 4; i++) {
        if (question.options[i] == question.answer) {
            let id = String(options[i].id); 
            currentGreen = id;
            document.getElementById(id).style.backgroundColor = "#a8d5b5";
            document.getElementById(id).style.color = "black";
            //#66BB6A green?
            //#7c3a3a red

        }
    }
}

//go to nextQ
function nextQuestion() {
    displayQ(currentPaper);
    document.getElementById("feedback").textContent = "";
    document.getElementById("nextQButton").style.display = "none";
    if (currentGreen) {
        document.getElementById(currentGreen).style.backgroundColor = "#21262d";
        document.getElementById(currentGreen).style.color = "white";
    }
    if (currentSelect) {
        document.getElementById(currentSelect).style.backgroundColor = "#21262d";
        document.getElementById(currentSelect).style.color = "white";
    }

    selected = false;
}

//display the Q
function displayQ(paper) {
    if (paper == "US") {
        const Q = chooseQ(usQs);
        currentQ = Q;
        
        document.getElementById("qTopic").textContent = Q.topic;
        document.getElementById("qTitle").textContent = Q.question;

        document.getElementById("op1").textContent = Q.options[0];
        document.getElementById("op2").textContent = Q.options[1];
        document.getElementById("op3").textContent = Q.options[2];
        document.getElementById("op4").textContent = Q.options[3];
    }    
    else if (paper == "britain") {
        const Q = chooseQ(britishQs);
        currentQ = Q;
        
        document.getElementById("qTopic").textContent = Q.topic;
        document.getElementById("qTitle").textContent = Q.question;

        document.getElementById("op1").textContent = Q.options[0];
        document.getElementById("op2").textContent = Q.options[1];
        document.getElementById("op3").textContent = Q.options[2];
        document.getElementById("op4").textContent = Q.options[3];

    }
}

//randomly choose a Q
function chooseQ(questions) {
    const randomQ = questions[Math.floor(Math.random() * questions.length)];
    return randomQ;
}

//check which paper is selected
function checkPaper(paper) {
    if (paper == "US") {
        return true;
    }
    else {
        return false;
    }
}

//when US button pressed
function usButtonPress() {
    
    if (currentPaper == "US") { return; }

    selected = false;
    document.getElementById("centre").style.display = "block";
    if (currentGreen) {
        document.getElementById(currentGreen).style.backgroundColor = "#21262d";
        document.getElementById(currentGreen).style.color = "white";
    }
    if (currentSelect) {
        document.getElementById(currentSelect).style.backgroundColor = "#21262d";
        document.getElementById(currentSelect).style.color = "white";
    }
    //main bit
    if (currentPaper != "US") {
        document.getElementById("nextQButton").style.display = "none";
        document.getElementById("feedback").textContent = "";
        document.getElementById("desc").textContent = "";
        document.getElementById("title").textContent = "US History"
        displayQ("US");
    }
    else {

    }
    currentPaper = "US";
}

//when britain button pressed
function britainButtonPress() {

    if (currentPaper == "britain") { return; }

    selected = false;
    document.getElementById("centre").style.display = "block";
    if (currentGreen) {
        document.getElementById(currentGreen).style.backgroundColor = "#21262d";
        document.getElementById(currentGreen).style.color = "white";
    }
    if (currentSelect) {
    document.getElementById(currentSelect).style.backgroundColor = "#21262d";
    document.getElementById(currentSelect).style.color = "white"; 
    }
    //main bit
    if (currentPaper != "britain") {
        document.getElementById("nextQButton").style.display = "none";
        document.getElementById("feedback").textContent = "";
        document.getElementById("desc").textContent = "";
        document.getElementById("title").textContent = "British History"
        displayQ("britain");
    }
    else {

    }

    currentPaper = "britain";
}

const usQs = [
    {
        topic: "US Foreign Policy",
        question: "What did the 1823 Monroe Doctrine warn European powers against?",
        options: ["Building new consulates in Latin American capitals", "Raising tariffs on goods shipped to the Americas", "Further colonization or interference in the Western Hemisphere", "Forming trade blocs that excluded the United States"],
        answer: "Further colonization or interference in the Western Hemisphere",
        feedback: "The 1823 Monroe Doctrine was a pivotal US foreign policy that warned European powers against further colonization or interference in the Western Hemisphere."
    },
    {
        topic: "US Foreign Policy",
        question: "What did George Washington say about political connections with foreign nations in his 1796 Farewell Address?",
        options: ["That the US should extend commercial relations while having as little political connection as possible", "That the US should form defensive pacts with any nation sharing its values", "That the US should mirror European alliances to stay competitive", "That the US should limit foreign policy decisions to Congress alone"],
        answer: "That the US should extend commercial relations while having as little political connection as possible",
        feedback: "In his 1796 Farewell Address, Washington said the US should have 'as little political connection as possible' with foreign nations - economic connections with all, political with none. This was rooted partly in America's fortunate geography and a desire to protect American Exceptionalism."
    },
    {
        topic: "US Foreign Policy",
        question: "What evidence suggests the US was never truly isolationist from an economic perspective?",
        options: ["Import tariffs were abolished entirely between 1865 and 1898", "The US navy was already ranked among the top five in the world by 1880", "The US signed formal military pacts with six European powers by 1890", "Coal production rose 800% and the US surpassed Britain in manufacturing by the mid-1880s"],
        answer: "Coal production rose 800% and the US surpassed Britain in manufacturing by the mid-1880s",
        feedback: "Between 1865-98, coal production rose 800% and railway track mileage by 567%. By the middle of the 1880s, the US surpassed Britain as the world's leading producer of manufactured goods and steel - yet by the end of the century its navy still ranked only 17th."
    },
    {
        topic: "US Foreign Policy",
        question: "How did the US respond to France's installation of Maximilian as puppet emperor of Mexico in 1865?",
        options: ["It offered Mexico immediate statehood within the Union", "It formally recognised Maximilian's government to avoid conflict", "It severed all diplomatic ties with France but took no military action", "It sent General Sheridan with 50,000 troops to the border, forcing a French withdrawal by 1867"],
        answer: "It sent General Sheridan with 50,000 troops to the border, forcing a French withdrawal by 1867",
        feedback: "France's installation of Maximilian violated the Monroe Doctrine. General Philip Sheridan was sent with 50,000 troops to the Mexican border in 1866; an ultimatum was issued, France pulled out in 1867, and Maximilian was shot by firing squad - an example of active, non-isolationist US protection of its interests."
    },
    {
        topic: "US Foreign Policy",
        question: "What did the 1868 Burlingame Treaty with China establish?",
        options: ["A joint US-China naval command in the Pacific", "Free movement of people and goods, stimulating Chinese immigration for railroad work", "A fixed quota limiting Chinese immigration to the US", "A US monopoly over Chinese silk exports"],
        answer: "Free movement of people and goods, stimulating Chinese immigration for railroad work",
        feedback: "In 1868, the US signed the Burlingame Treaty with China, allowing free movement of people and goods. This stimulated Chinese immigration for railroad construction and established friendly relations and free trade with China, a year after the US acquired the Midway Islands."
    },
    {
        topic: "US Foreign Policy",
        question: "Why was the 1867 Alaska Purchase made, and what was it nicknamed?",
        options: ["Fear Britain would buy it and invade from Canada - nicknamed Seward's 'folly' or 'ice-box'", "A desire to secure Pacific whaling routes - nicknamed 'Seward's Gamble'", "Concern over Japanese naval expansion - nicknamed 'Seward's Blunder'", "A gesture of goodwill toward Russia - nicknamed 'Seward's Gift'"],
        answer: "Fear Britain would buy it and invade from Canada - nicknamed Seward's 'folly' or 'ice-box'",
        feedback: "Alaska was purchased for $7.2 million in 1867 partly out of fear Britain could purchase it and invade from Canada. It expanded American influence in the Pacific as an extension of Manifest Destiny, though few understood the motive, and it became known as Seward's 'folly' or 'ice-box'."
    },
    {
        topic: "US Foreign Policy",
        question: "What happened when the Dominican Republic offered itself for US annexation in 1869?",
        options: ["The US annexed it but granted immediate self-governance", "Congress approved it unanimously as part of Reconstruction", "The Senate refused, partly over concerns about reducing white American influence and Reconstruction preoccupations", "Grant personally rejected the offer before it reached the Senate"],
        answer: "The Senate refused, partly over concerns about reducing white American influence and Reconstruction preoccupations",
        feedback: "Grant lobbied the Senate heavily for annexation, but it refused - partly due to concerns about reducing the influence of white Americans if admitted, and because Congress was preoccupied with Reconstruction and had little interest in expansion."
    },
    {
        topic: "US Foreign Policy",
        question: "How was the US-Britain dispute over Civil War-era damages eventually settled in 1872?",
        options: ["The US dropped all claims in return for tariff-free Canadian trade", "Britain ceded a strip of Canadian territory to the US", "Britain paid the full $2 billion originally demanded by Washington", "Britain agreed to pay $15.5 million for Confederate commerce raiders built in its shipyards"],
        answer: "Britain agreed to pay $15.5 million for Confederate commerce raiders built in its shipyards",
        feedback: "The US originally wanted $2 billion or the ceding of Canada as compensation for Britain's Civil War involvement. After Canada became self-governing in 1867 and the US permitted Fenian border raids 1866-71, the dispute was settled in 1872 with Britain agreeing to pay $15.5 million for Confederate commerce raiders built in its shipyards."
    },
    {
        topic: "US Foreign Policy",
        question: "What trade arrangement did Hamilton Fish arrange with Hawaii in 1873?",
        options: ["A pact banning American sugar growers from settling on the islands", "A defence treaty aimed at deterring Japanese expansion", "An agreement ceding Pearl Harbor directly to the US Navy", "A treaty paving the way for later annexation, followed by a US naval base in 1887"],
        answer: "A treaty paving the way for later annexation, followed by a US naval base in 1887",
        feedback: "High US import tariffs on Hawaiian sugar had left Hawaii unhappy while American goods entered cheaply. In 1873, Hamilton Fish arranged a new trade treaty, paving the way for annexation in the 1890s, and a US naval base was established in Hawaii in 1887."
    },
    {
        topic: "US Foreign Policy",
        question: "What did an 1882 naval review find about the state of the US fleet?",
        options: ["Of 140 ships on the naval list, only 42 were operational", "The fleet had grown to over 300 fully operational ships", "The navy had overtaken Britain to rank first in the world", "Every ship on the naval list was a modern steam vessel"],
        answer: "Of 140 ships on the naval list, only 42 were operational",
        feedback: "A review in 1882 found that of 140 ships on the naval list, only 42 were operational - Representative John D. Long described it as 'an alphabet of floating tubs', reflecting little interest in imperial expansion in the 1870s-80s despite growing calls to build up the navy."
    },
    {
        topic: "US Foreign Policy",
        question: "What was the outcome of the 1889 Pan-American Conference organised by Secretary of State James Blaine?",
        options: ["It collapsed entirely with no agreement of any kind", "It produced a full customs union signed by all 18 nations", "Delegates settled for reciprocity agreements and a weak arbitration system signed by less than half of them", "It created a joint US-Latin American military alliance"],
        answer: "Delegates settled for reciprocity agreements and a weak arbitration system signed by less than half of them",
        feedback: "Blaine first advocated a Pan-American conference in 1881; delegates from 18 countries met in Washington in October 1889 aiming for a customs union and arbitration system, but settled for reciprocity agreements and a weak arbitration system signed by less than half the delegates - though it set a precedent for future cooperation."
    },
    {
        topic: "US Foreign Policy",
        question: "According to Harold Evans' 'Accidental Empire' interpretation, what decided the annexation of the Philippines?",
        options: ["The deciding vote of Vice-President Garrett Augustus Hobart", "A unanimous Senate vote driven by economic necessity", "A direct executive order signed by McKinley alone", "A referendum held among Filipino provincial elites"],
        answer: "The deciding vote of Vice-President Garrett Augustus Hobart",
        feedback: "Harold Evans argues the USA never sought an empire at all, and that the decision to annex the Philippines came down to the deciding vote of Vice-President Garrett Augustus Hobart. Evans insists the US did not economically need an empire since it already traded heavily with Britain."
    },
    {
        topic: "US Foreign Policy",
        question: "What happened to Cubans in Spanish concentration camps during the 1895 Cuban Revolution led by Jose Marti?",
        options: ["Around 95,000 Cubans died from disease and malnutrition", "Most detainees were released within weeks under US pressure", "The camps mainly held captured American sailors", "Fewer than 5,000 Cubans passed through the camp system"],
        answer: "Around 95,000 Cubans died from disease and malnutrition",
        feedback: "In 1895, Cuban revolutionary Jose Marti led an expedition to seize power, sparking a brutal fight for independence in which 95,000 Cubans died from disease and malnutrition in Spanish concentration camps."
    },
    {
        topic: "US Foreign Policy",
        question: "What interpretation does Frederick Jackson Turner offer linking westward expansion and foreign policy?",
        options: ["That westward expansion was a form of imperialism, and once it ended America turned to foreign ventures", "That westward expansion permanently delayed any American interest in empire", "That westward expansion was unrelated to the later drive for overseas territory", "That westward expansion was primarily a response to European pressure"],
        answer: "That westward expansion was a form of imperialism, and once it ended America turned to foreign ventures",
        feedback: "Historians such as Frederick Jackson Turner argue that westward expansion in the second half of the 19th century was itself a form of imperialism, and that once this era ended, America then turned its attention to foreign ventures overseas."
    },
    {
        topic: "US Foreign Policy",
        question: "What did Secretary of State John Hay call the Spanish-American War?",
        options: ["A 'necessary evil'", "'America's great trial'", "A 'Splendid Little War'", "A 'reluctant crusade'"],
        answer: "A 'Splendid Little War'",
        feedback: "The Spanish-American War was very successful for the US - Secretary of State John Hay called it a 'Splendid Little War'. Fighting lasted only a few months, fewer than 400 Americans died in combat (though 5,000 died of disease), and Theodore Roosevelt rose to fame leading the 'Rough Riders'."
    },
    {
        topic: "US Foreign Policy",
        question: "According to William A. Williams, what was the primary motive behind American expansion in the 1890s?",
        options: ["A need for overseas markets, especially after the Depression of 1893", "A wish to spread Protestant missionary influence abroad", "Pressure from European allies to join their colonial ventures", "A purely symbolic drive for military prestige"],
        answer: "A need for overseas markets, especially after the Depression of 1893",
        feedback: "William A. Williams argued the need for markets was the primary motive for expansion, especially following the Depression of 1893, as the US faced farm produce surpluses and needed overseas markets to absorb them."
    },
    {
        topic: "US Foreign Policy",
        question: "What does the historical term 'preclusive imperialism', coined by William Langer, refer to?",
        options: ["Taking colonies to prevent other countries from taking them first", "Withdrawing from colonies before a rival power can contest them", "Colonising territory purely for religious conversion", "Imperial expansion driven solely by domestic unemployment"],
        answer: "Taking colonies to prevent other countries from taking them first",
        feedback: "'Preclusive imperialism', a term first used by historian William Langer, refers to the idea that countries take on colonies to prevent other countries from doing so."
    },
    {
        topic: "US Foreign Policy",
        question: "How did the 1898-99 Samoa crisis resolve as an example of preclusive imperialism?",
        options: ["The US withdrew entirely, leaving Samoa fully independent", "The Samoan monarchy was abolished and Samoa split between a US protectorate in the east and a German colony in the west", "Germany took full control after defeating British and American forces", "Britain retained sole control over the entire island chain"],
        answer: "The Samoan monarchy was abolished and Samoa split between a US protectorate in the east and a German colony in the west",
        feedback: "During an 1898 Samoan civil war, the US and Britain backed the opposing side to Germany. In 1899 the three powers abolished the Samoan monarchy and signed the Tripartite Convention: Britain relinquished its claim, the US established a protectorate in Eastern Samoa, and Western Samoa became a German colony."
    },
    {
        topic: "US Foreign Policy",
        question: "What does historian Walter McDougall's 'Progressive Imperialism' interpretation suggest motivated US expansion?",
        options: ["A wish to copy British colonial administrative structures exactly", "A desire to improve the lives of non-Americans, such as removing yellow fever and building hospitals and schools in Cuba", "A need to distract the public from domestic labour unrest", "A purely cynical drive for territorial control alone"],
        answer: "A desire to improve the lives of non-Americans, such as removing yellow fever and building hospitals and schools in Cuba",
        feedback: "Walter McDougall suggests US imperialism was motivated by a desire to improve the lives of non-Americans - shown by the removal of yellow fever in Cuba and the building of hospitals and schools - as the US sought to export its values and tailor nations closer to its own example."
    },
    {
        topic: "US Foreign Policy",
        question: "What did the Teller Amendment of April 1898 forswear, and what territory did the US still acquire from the war?",
        options: ["It forswore any naval bases in Cuba, though the US annexed the island fully", "It forswore Philippine annexation, though the US annexed Cuba outright", "It forswore Cuban annexation, though the US still acquired the Philippines, Puerto Rico and Guam", "It forswore all territorial gains, and the US acquired nothing"],
        answer: "It forswore Cuban annexation, though the US still acquired the Philippines, Puerto Rico and Guam",
        feedback: "The Teller Amendment of April 1898 forswore American annexation of Cuba. However, the US did acquire the Philippines, Puerto Rico and Guam as part of the war, and it also annexed Hawaii around the same time. Cuba was not annexed, but a permanent US naval base was set up there."
    },
    {
        topic: "US Foreign Policy",
        question: "What actions did Theodore Roosevelt take as Assistant Secretary of the Navy just before the Spanish-American War?",
        options: ["He resigned in protest against war preparations", "While his boss was away, he ordered ammunition, requested unlimited naval recruitment, and ordered the Asiatic squadron to prepare to seize the Philippines", "He was dismissed for insubordination shortly before war began", "He personally negotiated a peace settlement with Spanish diplomats"],
        answer: "While his boss was away, he ordered ammunition, requested unlimited naval recruitment, and ordered the Asiatic squadron to prepare to seize the Philippines",
        feedback: "While his boss, the Secretary of the Navy, went to the osteopath at lunch, Theodore Roosevelt began giving orders - requesting ammunition, asking Congress for unlimited recruitment of seamen, and ordering the Asiatic squadron to go to Hong Kong with standing orders to seize the Philippines from Spain if war broke out."
    },
    {
        topic: "US Foreign Policy",
        question: "What is the likely true cause of the USS Maine explosion, and how did the American press respond?",
        options: ["An internal error, though the press quickly blamed Spain with 'Remember the Maine, to Hell with Spain!'", "A Spanish naval mine, prompting an immediate declaration of war by Congress", "Cuban rebel sabotage, which the press deliberately downplayed", "Faulty American ammunition, which the press blamed on domestic contractors"],
        answer: "An internal error, though the press quickly blamed Spain with 'Remember the Maine, to Hell with Spain!'",
        feedback: "William McKinley sent the USS Maine to Havana to protect American interests after a January 1898 riot. On 15 February an explosion sank the ship, killing 266 sailors - likely the result of an internal error - but the American press quickly blamed Spain, rallying behind 'Remember the Maine, to Hell with Spain!'"
    },
    {
        topic: "US Foreign Policy",
        question: "What did Theodore Roosevelt argue was necessary for America to remain a great power?",
        options: ["That America must strive to play a great part in the world or be passed by bolder, stronger peoples", "That the US should avoid all foreign contests to conserve its resources", "That America should pursue economic strength while avoiding military engagement entirely", "That the US should form a permanent formal alliance with Britain"],
        answer: "That America must strive to play a great part in the world or be passed by bolder, stronger peoples",
        feedback: "Roosevelt declared: 'if we Americans are to be a really great power we must strive to play a really great part in the world. If we shrink from the hard contests, then bolder and stronger peoples will pass us by and win for themselves the domination of the world.'"
    },
    {
        topic: "US Foreign Policy",
        question: "What was William McKinley's general stance on the prospect of war with Spain?",
        options: ["He pushed aggressively for war to shore up his public standing", "As a Civil War veteran who had seen much death, he held back from war, being an isolationist", "He remained indifferent, deferring the whole decision to Congress", "He supported war mainly to satisfy naval expansionists like Mahan"],
        answer: "As a Civil War veteran who had seen much death, he held back from war, being an isolationist",
        feedback: "William McKinley was an isolationist who saw many reasons to hold back from war with Spain. As a Civil War veteran who had witnessed a great deal of death, he did not wish to go steadfastly into warfare."
    },
    {
        topic: "US Foreign Policy",
        question: "What foreign policy stance did Senator Henry Cabot Lodge support?",
        options: ["Reliance on economic rather than military power abroad", "A forward-looking, expansionist policy based on modern sea power", "Strict isolationism modelled on Washington's Farewell Address", "Alignment with Bryan's anti-imperialist coalition"],
        answer: "A forward-looking, expansionist policy based on modern sea power",
        feedback: "Senator Henry Cabot Lodge was an expansionist who supported a forward-looking foreign policy based on modern sea power."
    },
    {
        topic: "US Foreign Policy",
        question: "What was Alfred Thayer Mahan's role and relationship to Theodore Roosevelt?",
        options: ["An isolationist senator who repeatedly opposed Roosevelt's naval policy", "A Spanish diplomat who negotiated directly with Roosevelt during the war", "A journalist who wrote critically of Roosevelt's expansionist views", "A naval commander and theorist, close friend and supporter of Roosevelt, who wrote 'The Influence of Sea Power Upon History' in 1890"],
        answer: "A naval commander and theorist, close friend and supporter of Roosevelt, who wrote 'The Influence of Sea Power Upon History' in 1890",
        feedback: "Alfred Thayer Mahan was a naval commander and theorist, and an expansionist who supported forward-looking foreign policy based on naval military power. He was a close friend and supporter of Theodore Roosevelt, and famously wrote 'The Influence of Sea Power Upon History' in 1890."
    },
    {
        topic: "US Foreign Policy",
        question: "What was William Jennings Bryan's criticism of expansionists like Theodore Roosevelt?",
        options: ["That they favoured Britain's interests over those of Latin America", "That they were too slow in extending American influence abroad", "That they ignored the economic benefits overseas markets could bring", "That they were immoral and betrayed the ideals of Washington and the forefathers' pacifist beliefs"],
        answer: "That they were immoral and betrayed the ideals of Washington and the forefathers' pacifist beliefs",
        feedback: "William Jennings Bryan was an isolationist who attacked figures like Theodore Roosevelt for being immoral and betraying the ideals of George Washington and the forefathers' pacifist beliefs."
    },
    {
        topic: "US Foreign Policy",
        question: "How did the 1893 economic downturn influence American foreign policy thinking?",
        options: ["It led directly to the immediate annexation of Alaska", "Fear that the domestic market was saturated drove a push to acquire overseas outlets for raw materials and to relieve labour tensions", "It caused the US to abandon overseas ambitions entirely to focus on recovery", "It prompted an immediate formal alliance with Britain to stabilise trade"],
        answer: "Fear that the domestic market was saturated drove a push to acquire overseas outlets for raw materials and to relieve labour tensions",
        feedback: "By 1893, the American economy entered a downturn beginning a four-year depression. Fear that the domestic market had been saturated meant overseas outlets were sought, since overseas possessions could provide cheap raw materials and outward expansion could relieve domestic labour tensions."
    },
    {
        topic: "US Foreign Policy",
        question: "What was established in Samoa in 1889 involving the US, Britain and Germany?",
        options: ["A demilitarised zone barred to all foreign involvement", "A German-only colonial administration over the whole chain", "A joint protectorate to develop trade with Asia", "A full US annexation of the entire island chain"],
        answer: "A joint protectorate to develop trade with Asia",
        feedback: "In 1889, a joint protectorate was established with the US, Britain and Germany in Samoa to develop trade with Asia - a precursor to the later Tripartite Convention that formally divided the islands."
    },
    {
        topic: "US Foreign Policy",
        question: "How did fears about European imperialism and the balance of power shape US foreign policy thinking?",
        options: ["Americans believed European colonial growth posed no real risk to US power", "European imperialism had essentially no influence on American expansionist thought", "The US responded mainly by cutting diplomatic ties with European powers", "Social Darwinist arguments spreading from Europe gave racial justification for expansion, amid fears the balance of power could shift against the US"],
        answer: "Social Darwinist arguments spreading from Europe gave racial justification for expansion, amid fears the balance of power could shift against the US",
        feedback: "The US was concerned that as European empires grew, American power would be diminished. Social Darwinist arguments spreading from Europe gave Americans a racial justification for expansion. Between 1875 and 1914, a quarter of the world was claimed as colonies - if the US did not join the imperial 'club', the balance of power could shift against it."
    },
    {
        topic: "US Foreign Policy",
        question: "How did the US respond to Britain's 1895 border dispute with Venezuela?",
        options: ["The dispute escalated into a formal US-British war", "The US refused to get involved, citing strict neutrality", "The US openly sided with Britain against Venezuela's claims", "The US intervened, showing willingness to assert authority in Latin America under the Monroe Doctrine"],
        answer: "The US intervened, showing willingness to assert authority in Latin America under the Monroe Doctrine",
        feedback: "Britain fell into a border dispute with Venezuela in 1895, and the USA intervened - showing its willingness to assert authority in Latin America and demonstrating a more assertive application of the Monroe Doctrine."
    },
    {
        topic: "US Foreign Policy",
        question: "What was the position of the anti-expansion minority represented by figures like Twain, Carnegie, and Bryan?",
        options: ["They supported expansion but insisted it be managed by Congress alone", "They argued economic and moral arguments for empire were unconvincing, urging the US not to abandon its unique democratic role", "They believed expansion was inevitable and should be embraced fully", "They focused their objections solely on naval spending levels"],
        answer: "They argued economic and moral arguments for empire were unconvincing, urging the US not to abandon its unique democratic role",
        feedback: "An important minority - including Twain, Carnegie and Bryan - campaigned against expansion, arguing that economic and moral arguments for empire were unconvincing, and urging the US not to give up its unique role as a powerful, democratic nation representing freedom."
    },
    {
        topic: "US Foreign Policy",
        question: "How did concerns about China and Japan shape American attitudes in the Pacific?",
        options: ["American concerns focused exclusively on Chinese trade, with no attention to Japan", "Japan's rapid modernisation was welcomed as a stabilising force with no perceived threat", "The US had little meaningful interest in East Asian affairs during this period", "Instability in China and Japan's rapid post-1868 modernisation fuelled fears intensified by 'Yellow Peril' immigration anxieties"],
        answer: "Instability in China and Japan's rapid post-1868 modernisation fuelled fears intensified by 'Yellow Peril' immigration anxieties",
        feedback: "Instability in China led to greater American involvement in the Far East. Japan's startlingly fast modernisation after 1868 was seen as a threat to American Pacific interests, and these worries and 'Yellow Peril' sentiment were intensified by growing social tensions over Chinese and Japanese immigration."
    },
    {
        topic: "US Foreign Policy",
        question: "Until the Spanish-American War, how did Americans generally restrict the scope of their overseas ambition?",
        options: ["To international commerce, given their sense of democratic exceptionalism", "To formal alliances with sympathetic European monarchies", "To religious missionary work almost exclusively", "To military bases only, with little interest in trade"],
        answer: "To international commerce, given their sense of democratic exceptionalism",
        feedback: "Americans long deemed their democratic experiment exceptional, envisaging changing the world by the power of example. From the nation's founding until the Spanish-American War, Americans restricted the scope of their overseas ambition to international commerce."
    },
    {
        topic: "US Foreign Policy",
        question: "How far did American continental expansion go despite this restraint, before the Spanish-American War?",
        options: ["It was limited entirely to peaceful treaty negotiations with no territorial gains", "It included seizing part of Mexico (1846-48) and purchasing Alaska (1867), but pushed no farther than the Pacific coast", "It stopped strictly at the original thirteen colonies' borders", "It extended overseas to Pacific islands well before 1890"],
        answer: "It included seizing part of Mexico (1846-48) and purchasing Alaska (1867), but pushed no farther than the Pacific coast",
        feedback: "Americans steadfastly expanded across North America - trampling on Native Americans, launching failed attempts to grab Canada, seizing a sizable chunk of Mexico in the 1846-48 war, and purchasing Alaska from Russia in 1867 - but pushed no farther than the Pacific coast."
    },
    {
        topic: "US Foreign Policy",
        question: "What guiding principle did George Washington lay out in his 1796 Farewell Address regarding foreign nations?",
        options: ["Prioritising Latin American diplomacy over European ties", "Avoiding all trade with nations under monarchical rule", "Forming permanent military alliances with sympathetic republics", "Extending commercial relations while having as little political connection as possible"],
        answer: "Extending commercial relations while having as little political connection as possible",
        feedback: "Americans stuck to the statecraft laid out by Washington's 1796 Farewell Address: 'The great rule of conduct for us in regard to foreign nations is in extending our commercial relations, to have with them as little political connection as possible.'"
    },
    {
        topic: "US Foreign Policy",
        question: "How did US industrial growth between 1865 and 1898 relate to its isolationist foreign policy?",
        options: ["Industrial decline forced the US into overseas expansion earlier than planned", "The US abandoned isolationism as soon as industrial growth began in earnest", "Industrial growth had essentially no bearing on foreign policy decisions", "Domestic development helped the economy take off - coal rose 800% and the US surpassed Britain in manufacturing by the mid-1880s - while geopolitical ambition was kept at bay"],
        answer: "Domestic development helped the economy take off - coal rose 800% and the US surpassed Britain in manufacturing by the mid-1880s - while geopolitical ambition was kept at bay",
        feedback: "Focus on domestic development helped the American economy take off. Between 1865-98 coal production rose 800% and railway mileage 567%; by the mid-1880s the US surpassed Britain in manufactured goods and steel. The Navy occasionally defended traders' interests, but regardless of who was in power, geopolitical ambition was kept at bay."
    },
    {
        topic: "US Foreign Policy",
        question: "What underlying belief drove America's long-standing avoidance of great-power entanglement?",
        options: ["Pressure from Latin American allies insisting the US remain neutral", "A legal requirement written explicitly into the Constitution", "A belief that preserving their unique experiment in political and economic liberty required standing aloof from corrupting foreign influences", "A purely military calculation about chronic troop shortages"],
        answer: "A belief that preserving their unique experiment in political and economic liberty required standing aloof from corrupting foreign influences",
        feedback: "America long shunned great-power entanglement and overseas territories because it believed that preserving its unique experiment in political and economic liberty required standing aloof from the perils and corrupting influences that lay beyond its shores."
    },
    {
        topic: "US Foreign Policy",
        question: "What did Thomas Jefferson say about foreign entanglements, reflecting America's trade-dependent economy?",
        options: ["'Trade with all, ally with none, fear none'", "'Commerce first, politics never'", "'Friendship abroad, isolation at home'", "'Peace, commerce, and honest friendship with all nations, entangling alliances with none'"],
        answer: "'Peace, commerce, and honest friendship with all nations, entangling alliances with none'",
        feedback: "The American economy was dependent on international trade from the outset, underscoring the need to avoid foreign entanglements that risked disrupting seaborne commerce. Thomas Jefferson insisted: 'Peace, commerce, and honest friendship with all nations, entangling alliances with none.'"
    },
    {
        topic: "US Foreign Policy",
        question: "What did Congregational minister Horace Bushnell's quotation reveal about a motive behind American isolationism?",
        options: ["A legal argument about constitutional limits on immigration", "A purely economic argument about protecting domestic industry", "A religious argument focused mainly on funding missionary work", "A belief that the 'Saxon' and 'British family' stock was the noblest chosen to people the country, reflecting a desire to prevent dilution of the white population"],
        answer: "A belief that the 'Saxon' and 'British family' stock was the noblest chosen to people the country, reflecting a desire to prevent dilution of the white population",
        feedback: "Isolationism was also intended to prevent dilution of America's predominantly white population. Horace Bushnell said: 'out of all the inhabitants of the world... a select stock, the Saxon, and out of this the British family, the noblest of stock was chosen to people our country.'"
    },
    {
        topic: "US Foreign Policy",
        question: "What was Representative John Franklin Farnsworth's objection to annexing Santo Domingo in 1870?",
        options: ["That it would integrate 'Indians, savages and negroes from every part of Western Africa' into the population", "That it would overextend the navy's already limited resources", "That it would cost far more to administer than Congress could justify", "That it would violate standing treaty obligations with Spain"],
        answer: "That it would integrate 'Indians, savages and negroes from every part of Western Africa' into the population",
        feedback: "Amid Congress's rejection of Grant's 1870 effort to annex Santo Domingo, Representative John Franklin Farnsworth recoiled at the prospect of integrating into the nation's population 'Indians, savages and negroes from every part of Western Africa' - reflecting racist attitudes that repeatedly sank expansion proposals."
    },
    {
        topic: "US Foreign Policy",
        question: "How did racist attitudes towards potential new populations affect broader US immigration policy from the 1880s?",
        options: ["They only affected policy toward Latin America, leaving Asian immigration untouched", "They led to more open immigration policy to compensate for lost expansion", "They had essentially no measurable effect on immigration policy", "Fear of diluting the nation's citizenry led to tightening restrictions on immigration"],
        answer: "Fear of diluting the nation's citizenry led to tightening restrictions on immigration",
        feedback: "Racist attitudes repeatedly helped sink proposals to expand the union in the Caribbean, Latin America and the Pacific. Beginning in the 1880s, fear of diluting the nation's citizenry led to tightening restrictions on immigration."
    },
    {
        topic: "US Foreign Policy",
        question: "How did geography and resources support American isolationism in the 19th century?",
        options: ["Neighbouring states posed a major and constant military threat requiring vigilance", "America depended heavily on imported raw materials throughout this period", "The Pacific and Atlantic oceans acted as natural barriers, and vast continental resources meant industrialisation did not require imports", "The US had no natural barriers and relied entirely on naval power for protection"],
        answer: "The Pacific and Atlantic oceans acted as natural barriers, and vast continental resources meant industrialisation did not require imports",
        feedback: "The Pacific and Atlantic oceans acted as immense natural barriers, and none of America's bordering states posed a major threat. Vast resources across the American continent meant that when industrialisation began, America had sufficient resources not to need imports."
    },
    {
        topic: "US Foreign Policy",
        question: "What did expansionists broadly believe the US should gain by taking overseas territories?",
        options: ["Cultural exchange programmes with no material benefit expected", "Purely defensive military buffer zones along key trade routes", "Religious converts and permanent missionary outposts", "Power, markets and prestige"],
        answer: "Power, markets and prestige",
        feedback: "Expansionists believed the US should take overseas territories for power, markets and prestige, standing in direct opposition to the isolationist tradition rooted in Washington's Farewell Address and America's unique geography."
    }
]
//navigator.serviceWorker.register('./sw.js');

onStart();
displayQ("US");
document.getElementById("centre").style.display = "block";


//event listeners

document.getElementById("nextQButton").addEventListener("click", nextQuestion);
document.getElementById("op1").addEventListener("click", () => selectAnswer(0));
document.getElementById("op2").addEventListener("click", () => selectAnswer(1));
document.getElementById("op3").addEventListener("click", () => selectAnswer(2));
document.getElementById("op4").addEventListener("click", () => selectAnswer(3));

