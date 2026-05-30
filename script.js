var currentPaper;
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
        document.getElementById("feedback").textContent = ("CORRECT - " + question.feedback);
        }
        else {
            document.getElementById("feedback").textContent = ("INCORRECT - " + question.feedback);
            getChoice(choice, currentQ);
        }
        document.getElementById("feedback").style.display = "block";
        document.getElementById("nextQButton").style.display = "block";
        getCorrectOpt(question);
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

const britishQs = [
    {
        topic: "Conservative Revival 1945-51",
        question: "What were the election results in 1945, 1950 and 1951?",
        options: [
            "1945: Labour 200 seat maj; 1950: 20 seat maj; 1951: Tories won 10 seat maj",
            "1945: Labour 80 seat maj; 1950: 2 seat maj; 1951: Tories won 25 seat maj",
            "1945: Labour 100 seat maj; 1950: 15 seat maj; 1951: Tories won 30 seat maj",
            "1945: Labour 146 seat maj; 1950: 5 seat maj; 1951: Tories won 16 seat maj despite 0.8% fewer votes"
        ],
        answer: "1945: Labour 146 seat maj; 1950: 5 seat maj; 1951: Tories won 16 seat maj despite 0.8% fewer votes",
        feedback: "Labour won a 146-seat majority in 1945. By 1950 this fell to 5 seats, and in 1951 the Tories won a 16-seat majority despite receiving 0.8% fewer votes - a quirk of first past the post."
    },
    {
        topic: "Conservative Revival 1945-51",
        question: "Who headed Conservative structural reorganisation after 1945 and what did it achieve?",
        options: [
            "Lord Woolton - built a fighting fund from small donations, reaching around 3 million members by the early 1950s",
            "Rab Butler - reformed party finances and introduced the Young Conservative movement",
            "Harold Macmillan - reorganised constituency associations and introduced central funding",
            "Lord Beaverbrook - rebuilt the press wing and expanded membership to 5 million"
        ],
        answer: "Lord Woolton - built a fighting fund from small donations, reaching around 3 million members by the early 1950s",
        feedback: "Lord Woolton headed reorganisation as party chairman, fathered small member donations to restore finances, and reached around 3 million members by the early 1950s. The Young Conservative movement in 1946 brought in a younger demographic."
    },
    {
        topic: "Conservative Revival 1945-51",
        question: "What did the 1949 'Right Road for Britain' reassure voters about?",
        options: [
            "That Conservatives would renationalise industries privatised under Labour",
            "That Conservatives would not abandon Attlee's reforms and would protect the welfare state",
            "That Conservatives would dramatically cut the welfare state to balance the budget",
            "That Conservatives would pursue a more aggressive foreign policy than Labour"
        ],
        answer: "That Conservatives would not abandon Attlee's reforms and would protect the welfare state",
        feedback: "The Right Road for Britain stressed Tories would not abandon Attlee's reforms and would protect the welfare state. The promise to build 300,000 houses per year also resonated with voters wanting new homes."
    },
    {
        topic: "Conservative Revival 1945-51",
        question: "How did the Cold War assist the Conservative revival after 1945?",
        options: [
            "Labour's links to Soviet trade unions were exposed by Conservative press campaigns",
            "Conservative defence policy was seen as stronger than Labour's pacifism",
            "The Cold War shifted public language from planning to enterprise - socialism became the enemy",
            "The Korean War discredited Labour's foreign policy and boosted Conservative support"
        ],
        answer: "The Cold War shifted public language from planning to enterprise - socialism became the enemy",
        feedback: "Wartime state intervention had seemed to justify socialism, but the Cold War shifted the language - enterprise over planning, with socialism recast as the enemy, despite Labour bearing little resemblance to Soviet communism."
    },
    {
        topic: "Churchill's Premiership 1951-55",
        question: "What was Churchill's physical and political condition at the start of his second term?",
        options: [
            "He was 65, in excellent health, with a clear radical programme",
            "He was 77, had already suffered two strokes, suffered another in June 1953, and had a cautious undogmatic outlook",
            "He was 70, suffering from depression, and largely controlled by his cabinet",
            "He was 80 and completely incapacitated - Eden effectively ran the government"
        ],
        answer: "He was 77, had already suffered two strokes, suffered another in June 1953, and had a cautious undogmatic outlook",
        feedback: "Churchill was 77 at the start of his second term, had already suffered two strokes, and suffered another bad one in June 1953. Paul Addison argues he led the party 'with great vigour and flair towards the middle ground of politics'. He resigned in April 1955."
    },
    {
        topic: "Churchill's Premiership 1951-55",
        question: "What was Butler's economic inheritance in 1951 and how did he respond?",
        options: [
            "A balanced budget - he maintained existing policies while reducing nationalisation",
            "A £500 million deficit - he devalued the pound and sought an IMF loan",
            "A £700 million balance of payments deficit - he cut imports, credit and food subsidies, and raised the bank rate from 2% to 4%",
            "A £200 million surplus - he cut taxes and expanded the welfare state"
        ],
        answer: "A £700 million balance of payments deficit - he cut imports, credit and food subsidies, and raised the bank rate from 2% to 4%",
        feedback: "Butler inherited a £700 million BOP deficit. He responded with savage cuts on imports, credit, and food subsidies, raising the bank rate from 2% to 4%. By 1952 the deficit was wiped out and there was a £259 million surplus."
    },
    {
        topic: "Churchill's Premiership 1951-55",
        question: "How many houses per year did Macmillan build as Minister of Housing, and how did this compare to the promise?",
        options: [
            "250,000 per year - falling short of the 300,000 promise",
            "300,000 per year exactly - meeting but not exceeding the promise",
            "400,000 per year - far exceeding the promise",
            "327,000 in 1953 and 354,000 in 1954 - exceeding the 300,000 promise"
        ],
        answer: "327,000 in 1953 and 354,000 in 1954 - exceeding the 300,000 promise",
        feedback: "Macmillan exceeded the Conservative housing promise of 300,000 houses per year - building 327,000 in 1953 and 354,000 in 1954. By 1964 the Tories had built 1.7 million homes in total."
    },
    {
        topic: "Eden's Premiership",
        question: "What was Eden's record before the Suez Crisis?",
        options: [
            "He reduced the Conservative majority and introduced popular social reforms",
            "He maintained Churchill's majority unchanged and focused entirely on foreign affairs",
            "He was widely regarded as a failure from the start, with poor domestic policy",
            "He increased the Conservative majority from 17 to 60 - the first PM in 90 years to do so - and oversaw barely 1% unemployment in July 1955"
        ],
        answer: "He increased the Conservative majority from 17 to 60 - the first PM in 90 years to do so - and oversaw barely 1% unemployment in July 1955",
        feedback: "Eden increased the Conservative majority from 17 to 60 - the first PM in 90 years to increase the majority at an election. He oversaw the lowest unemployment since WW2 at barely 1% in July 1955."
    },
    {
        topic: "Eden's Premiership",
        question: "What was the Suez Crisis of 1956?",
        options: [
            "Nasser nationalised the Suez Canal - Britain secretly colluded with France and Israel to invade, but a run on the pound and US refusal to help forced a ceasefire",
            "Egypt seized British oil facilities - Britain successfully defended them with French and Israeli help",
            "Nasser blockaded the canal - Britain and the US jointly threatened military action, successfully reopening it",
            "Israel attacked Egypt - Britain and France intervened as neutral peacekeepers but were forced out by the UN"
        ],
        answer: "Nasser nationalised the Suez Canal - Britain secretly colluded with France and Israel to invade, but a run on the pound and US refusal to help forced a ceasefire",
        feedback: "Nasser nationalised the Suez Canal in July 1956. Britain secretly colluded with Israel and France - Israel attacked Egypt, providing Britain and France the pretext to intervene. A run on the pound and US refusal of economic support forced a ceasefire. Eden resigned shortly after."
    },
    {
        topic: "Macmillan's Premiership",
        question: "What did Macmillan claim at Bedford Town Football Ground in 1957?",
        options: [
            "'We shall build a Britain as prosperous as any nation on earth'",
            "'The age of austerity is over - the age of opportunity has begun'",
            "'Most of our people have never had it so good' - though adding the cautionary note 'is it too good to last?'",
            "'Britain is back - a proud nation leading the world once more'"
        ],
        answer: "'Most of our people have never had it so good' - though adding the cautionary note 'is it too good to last?'",
        feedback: "Addressing 1,500 people, Macmillan proclaimed 'most of our people have never had it so good' - but also added the cautionary note 'is it too good to last?', showing awareness of underlying economic vulnerabilities."
    },
    {
        topic: "Macmillan's Premiership",
        question: "What was the result of the 1959 general election?",
        options: [
            "Conservatives gained 20 seats, Labour lost 19, Tories winning 4% more votes",
            "A hung parliament - Macmillan formed a minority Conservative government",
            "Labour won by a narrow majority of 4 seats",
            "Conservatives won a landslide of 100 seats, their biggest ever majority"
        ],
        answer: "Conservatives gained 20 seats, Labour lost 19, Tories winning 4% more votes",
        feedback: "The 1959 election was a triumph for Macmillan - Conservatives gained 20 seats, Labour lost 19, and the Tories received 4% more votes. It reflected affluence and Labour's continued divisions."
    },
    {
        topic: "Macmillan's Premiership",
        question: "How did Macmillan use television to political advantage?",
        options: [
            "He hired actors to coach him but his performances were widely regarded as wooden",
            "He appeared calm, authoritative and self-assured on TV more than Gaitskell - a cartoonist drew him as Superman in 1957, earning him the 'Supermac' image",
            "He used TV only for party political broadcasts, refusing interviews entirely",
            "He refused to appear on TV, believing it was beneath a Prime Minister's dignity"
        ],
        answer: "He appeared calm, authoritative and self-assured on TV more than Gaitskell - a cartoonist drew him as Superman in 1957, earning him the 'Supermac' image",
        feedback: "Macmillan rebuilt his presentational skills - calm, aristocratic, wearing expensive Savile Row suits and fixing his lopsided teeth. In 1957 a cartoonist drew him as Superman with a giant No.10 on his tunic. He appeared on TV more than Gaitskell, increasingly important as more people had TVs."
    },
    {
        topic: "Conservative Fall from Power",
        question: "Why did the Conservatives fall from power by 1964?",
        options: [
            "A major recession in 1963 caused mass unemployment and widespread poverty",
            "Harold Wilson won a landslide on the strength of his economic programme alone",
            "Spy scandals, the Profumo Affair, economic difficulties, the out-of-touch Establishment image, and the selection of Douglas-Home combined to cost the Conservatives power",
            "The Liberal Party collapsed, with most votes going to Labour"
        ],
        answer: "Spy scandals, the Profumo Affair, economic difficulties, the out-of-touch Establishment image, and the selection of Douglas-Home combined to cost the Conservatives power",
        feedback: "The Conservative fall combined spy scandals (Blake, Vassall), the Profumo Affair, economic difficulties (878,000 unemployed by 1963), satire mocking the out-of-touch Establishment, and the selection of old Etonian aristocrat Alec Douglas-Home as PM."
    },
    {
        topic: "Conservative Fall from Power",
        question: "How many members of Macmillan's government were related to him by marriage?",
        options: ["15 members", "25 members", "35 members", "45 members"],
        answer: "35 members",
        feedback: "35 members of Macmillan's government were related to him by marriage - a striking illustration of the closed, nepotistic nature of the Establishment that critics argued was holding Britain back."
    },
    {
        topic: "Conservative Fall from Power",
        question: "How many Old Etonians were in Alec Douglas-Home's cabinet of 23?",
        options: ["4 Old Etonians", "7 Old Etonians", "10 Old Etonians", "13 Old Etonians"],
        answer: "10 Old Etonians",
        feedback: "Alec Douglas-Home's cabinet of 23 contained 10 Old Etonians - reinforcing the image of an out-of-touch Establishment at a time when Harold Wilson was presenting himself as a modern meritocrat."
    },
    {
        topic: "Labour Divisions 1951-59",
        question: "What were the key differences between the Bevanites and Gaitskellites?",
        options: [
            "Bevanites wanted lower taxes; Gaitskellites wanted higher public spending",
            "Bevanites supported NATO; Gaitskellites opposed it",
            "Bevanites wanted larger TU influence, greater state control, and were often unilateralists; Gaitskellites were centre-right, resisted TU dominance, and focused on electability",
            "Bevanites wanted to abolish Clause IV; Gaitskellites insisted on retaining it"
        ],
        answer: "Bevanites wanted larger TU influence, greater state control, and were often unilateralists; Gaitskellites were centre-right, resisted TU dominance, and focused on electability",
        feedback: "Bevanites wanted larger TUs with committed left-wingers shaping policy, regarded the welfare state as just the first step towards socialism, and many were unilateralists. Gaitskellites were centre-right, resisted TU dominance, and wanted to move Labour towards electability."
    },
    {
        topic: "Labour Divisions 1951-59",
        question: "What triggered the Bevanite split in 1951?",
        options: [
            "Bevan resigned from cabinet over prescription charges, giving the left wing a leader",
            "Bevan's refusal to support the Korean War effort in Parliament",
            "Bevan's opposition to Britain's nuclear weapons programme at conference",
            "Bevan's demand that Attlee resign as Labour leader immediately"
        ],
        answer: "Bevan resigned from cabinet over prescription charges, giving the left wing a leader",
        feedback: "In 1951, Bevan resigned from cabinet over prescription charges, providing the left wing with a leader. Subsequently, in 1952, 57 Bevanites voted against the Tory rearmament programme despite the party having agreed to abstain."
    },
    {
        topic: "Labour Divisions 1951-59",
        question: "Why did Labour's divisions damage its electoral prospects in the 1950s?",
        options: [
            "The divisions caused a formal party split in 1956, forcing a by-election Labour lost",
            "The divisions led the party to adopt extreme left-wing policies alienating centrist voters",
            "Internal divisions led Gaitskell to defect to the Liberal Party in 1958",
            "Divisions meant no clear direction, no suggestion of strong leadership, and too much infighting to effectively attack the Conservatives"
        ],
        answer: "Divisions meant no clear direction, no suggestion of strong leadership, and too much infighting to effectively attack the Conservatives",
        feedback: "Labour's divisions meant voters were unsure what policies they'd get. If a leader can't unite their own party, how can they lead the country? Infighting distracted from attacking the opposition. People still associated Labour with austerity and a 'cloth cap' image."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "What characterised the 'stop-go' economic cycle of the 1950s and early 1960s?",
        options: [
            "A pattern of nationalisation followed by privatisation as governments changed",
            "A cycle of devaluation followed by deflation recurring every three years",
            "Alternating periods of high employment and unemployment tied to global commodity prices",
            "Growth leading to overheating through excessive imports and rising wages, with budgets used as short-term electoral tools rather than genuine economic strategy"
        ],
        answer: "Growth leading to overheating through excessive imports and rising wages, with budgets used as short-term electoral tools rather than genuine economic strategy",
        feedback: "Stop-go saw growth lead to overheating through excessive imports and rising wage demands. Budgets were used as short-term measures to buy election votes - policy lagged behind events rather than directing them, suggesting no real economic plan."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "How did Britain's economic performance compare to competitors 1951-64?",
        options: [
            "Britain grew faster than all competitors throughout the period",
            "Britain and West Germany grew at roughly equal rates, both outpacing France and Japan",
            "Britain's world trade share rose slightly as the Empire provided protected markets",
            "Industrial production grew 3x quicker in France, 4x in West Germany, 10x in Japan; Britain's world trade share fell from 25.5% to 16.5% between 1950 and 1960"
        ],
        answer: "Industrial production grew 3x quicker in France, 4x in West Germany, 10x in Japan; Britain's world trade share fell from 25.5% to 16.5% between 1950 and 1960",
        feedback: "Industrial production grew 3x quicker in France, 4x in West Germany, and 10x in Japan. Britain's share of world trade fell from 25.5% in 1950 to 16.5% in 1960, while Germany and Japan's shares were growing."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "What was 'Butskellism'?",
        options: [
            "The term for the cosy relationship between Conservative ministers and trade union leaders",
            "A portmanteau of Butler and Gaitskell suggesting both parties used broadly similar Keynesian demand management",
            "The policy of keeping wages artificially low to control inflation, pursued by both parties",
            "The shared commitment to the nuclear deterrent across party lines throughout the period"
        ],
        answer: "A portmanteau of Butler and Gaitskell suggesting both parties used broadly similar Keynesian demand management",
        feedback: "Butskellism - combining Chancellor Butler and Shadow Chancellor Gaitskell - suggested both parties used broadly similar Keynesian demand management. Government expenditure rose from 39% of GDP in 1950 under Labour to 51% in 1960 under the Conservatives."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "By how much did British shipbuilding's share of the world market fall between 1950 and 1974?",
        options: ["From 25% to 10%", "From 50% to 20%", "From 20% to 5%", "From 37% to 3.7%"],
        answer: "From 37% to 3.7%",
        feedback: "British shipbuilding declined severely from 37% of world share in 1950 to just 3.7% in 1974 - a tenfold collapse reflecting Britain's broader failure to modernise industry and compete internationally."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "What was the BOT surplus 1956-60 compared to the BOT deficit 1946-50?",
        options: ["+£50 million compared to -£20 million", "+£200 million compared to -£100 million", "+£132 million compared to -£56 million", "+£300 million compared to -£150 million"],
        answer: "+£132 million compared to -£56 million",
        feedback: "The BOT surplus of +£132 million in 1956-60 compared favourably to the deficit of -£56 million in 1946-50, one of the positive economic indicators of the Conservative years before the stop-go cycle worsened."
    },
    {
        topic: "Affluence and Living Standards",
        question: "How did wages change between 1951 and 1964?",
        options: [
            "Real wages fell slightly as inflation outpaced wage growth throughout the period",
            "Living standards improved only for the middle class - working class wages stagnated",
            "Wages doubled in nominal terms but barely kept pace with inflation overall",
            "Average male weekly wages rose from around £8 to £18, with real wages rising ahead of prices at nearly 3% per year 1955-60"
        ],
        answer: "Average male weekly wages rose from around £8 to £18, with real wages rising ahead of prices at nearly 3% per year 1955-60",
        feedback: "Average weekly wages rose from around £8 in 1951 to around £18 in 1964. Real wages rose ahead of prices at nearly 3% per year 1955-60. Food rationing ended in 1954, and car sales nearly quadrupled from 1.5 million to 5.5 million 1950-65."
    },
    {
        topic: "Affluence and Living Standards",
        question: "By how much did car sales grow between 1950 and 1965?",
        options: ["Nearly doubled from 1 million to 2 million", "Nearly tripled from 1 million to 3 million", "Nearly quadrupled from 1.5 million to 5.5 million", "Nearly quintupled from 1 million to 5 million"],
        answer: "Nearly quadrupled from 1.5 million to 5.5 million",
        feedback: "Car sales nearly quadrupled from 1.5 million in 1950 to 5.5 million in 1965. Cars on the road rose from 3.6 million in 1955 to 11.8 million by 1970, marking the transition to a car-based economy."
    },
    {
        topic: "Affluence and Living Standards",
        question: "What did the 1959 Mark Abrams survey reveal about social attitudes?",
        options: [
            "That 60% of the population considered themselves working class despite rising incomes",
            "That support for the welfare state had collapsed as people became more affluent",
            "That young people were the most politically engaged generation since the war",
            "That 40% of manual labourers considered themselves middle class and were hence more likely to vote Tory"
        ],
        answer: "That 40% of manual labourers considered themselves middle class and were hence more likely to vote Tory",
        feedback: "The 1959 Mark Abrams survey found 40% of manual labourers considered themselves middle class and hence more likely to vote Tory. People associated Labour with austerity and a 'cloth cap' image, while Tories were associated with forward-looking, ambitious people."
    },
    {
        topic: "Affluence and Living Standards",
        question: "How did home ownership change between 1950 and 1970?",
        options: ["Home ownership fell slightly as more people rented from councils", "Home ownership stayed flat at around 30% throughout the period", "Home ownership rose modestly from 27% to 35% over the period", "Home ownership almost doubled from 27% to 50% between 1950 and 1970"],
        answer: "Home ownership almost doubled from 27% to 50% between 1950 and 1970",
        feedback: "Home ownership almost doubled from 27% to 50% between 1950 and 1970 - people were spending more on their homes and the Tories had built 1.7 million homes by 1964. The 1957 Rent Act abolished rent controls, putting 6 million properties on the market."
    },
    {
        topic: "Class and the Establishment",
        question: "What was 'the Establishment' and why was it criticised?",
        options: [
            "The BBC and broadsheet press, criticised for promoting left-wing values",
            "A small but powerful group of upper class, publicly-schooled, Oxbridge-educated people governing Britain - criticised for holding the country back through a self-selecting elite",
            "The trade union leadership that dominated post-war economic policy",
            "The network of Conservative Party donors who funded Macmillan's government"
        ],
        answer: "A small but powerful group of upper class, publicly-schooled, Oxbridge-educated people governing Britain - criticised for holding the country back through a self-selecting elite",
        feedback: "The Establishment was a small but powerful group - upper class, Oxbridge-educated. Macmillan was Eton and Oxford educated with 35 government members related to him by marriage. Alec Douglas-Home's cabinet of 23 included 10 Old Etonians. Social scientists like Richard Hoggart argued Britain needed leaders chosen on merit."
    },
    {
        topic: "Class and the Establishment",
        question: "How did the spy scandals damage Macmillan's government?",
        options: [
            "They had no real political impact as the public was indifferent to Cold War espionage",
            "The scandals only damaged US relations - British public opinion remained supportive",
            "The scandals led directly to Macmillan's resignation in 1962",
            "George Blake (Soviet double agent, 42 years) and John Vassall (KGB blackmail) tarnished intelligence services, damaged US relations, and Macmillan angered the press by imprisoning two journalists"
        ],
        answer: "George Blake (Soviet double agent, 42 years) and John Vassall (KGB blackmail) tarnished intelligence services, damaged US relations, and Macmillan angered the press by imprisoning two journalists",
        feedback: "Blake was sentenced to 42 years in 1961. Vassall was a clerk blackmailed by KGB photographs into passing Admiralty documents to Soviet intelligence. Both tarnished the security services. Macmillan had two journalists imprisoned - the press turned heavily against him. The Times called for a change of government."
    },
    {
        topic: "Class and the Establishment",
        question: "What was the Profumo Affair?",
        options: [
            "A financial scandal in which the Minister for War accepted bribes from defence contractors",
            "The revelation that cabinet ministers had attended parties hosted by a Soviet spy",
            "A sex scandal involving a junior minister that the press deliberately exaggerated",
            "Secretary of State for War John Profumo had an affair with Christine Keeler, who was also linked to a Soviet naval attache - he lied to Parliament, resigned in June 1963, and the scandal added pressure on Macmillan"
        ],
        answer: "Secretary of State for War John Profumo had an affair with Christine Keeler, who was also linked to a Soviet naval attache - he lied to Parliament, resigned in June 1963, and the scandal added pressure on Macmillan",
        feedback: "In 1961 Profumo began an affair with Christine Keeler, who was also linked to Soviet naval attache Eugene Ivanov. He denied wrongdoing to Parliament in 1963, then admitted lying and resigned. The affair fuelled public fascination with sex, class and espionage, and added pressure on Macmillan who resigned later in 1963."
    },
    {
        topic: "Women in the Affluent Society",
        question: "What was the dominant image of women in the 1950s and early 1960s?",
        options: [
            "Women were increasingly entering professional careers and the gender gap was rapidly closing",
            "Women were primarily defined by their role as factory workers following wartime employment",
            "Women were seen as politically active citizens following the suffragette movement",
            "The traditional housewife - cooking, shopping, washing, seeing to children - reinforced by magazines like Woman's Own and the Kenwood Mixer slogan 'Your servant, madam'"
        ],
        answer: "The traditional housewife - cooking, shopping, washing, seeing to children - reinforced by magazines like Woman's Own and the Kenwood Mixer slogan 'Your servant, madam'",
        feedback: "Throughout the 50s and 60s men and women lived generally separate lives. The modern housewife was presented as young, stylish and efficient. Educationalist John Newsom argued in 1963 that female education should follow 'broad themes of home-making' including needlework and cooking."
    },
    {
        topic: "Women in the Affluent Society",
        question: "What proportion of married women worked in 1951 compared to 1961?",
        options: ["1 in 8 in 1951 rising to 1 in 5 in 1961", "1 in 3 in 1951 rising to 1 in 2 in 1961", "1 in 4 in 1951 rising to 1 in 4 in 1961", "1 in 5 in 1951 rising to 1 in 3 in 1961"],
        answer: "1 in 5 in 1951 rising to 1 in 3 in 1961",
        feedback: "In 1951, 1 in 5 married women worked; by 1961, 1 in 3 did - made possible by contraception and the breakdown of the marriage bar. But women remained trapped in low-status jobs and in 1958 were paid less than 2/3 of a man's wage for the same job."
    },
    {
        topic: "Youth Culture 1951-64",
        question: "What factors enabled the emergence of a distinct youth culture in the late 1950s?",
        options: [
            "The introduction of comprehensive schools brought young people from different backgrounds together",
            "The Baby Boom generation reached adulthood simultaneously, creating a large peer group",
            "American rock and roll music created a shared cultural identity across class boundaries",
            "Young people who had not experienced wartime hardship enjoyed greater affluence, financial independence through widely available work, reduced obligations to parents, and national service abolished in 1960"
        ],
        answer: "Young people who had not experienced wartime hardship enjoyed greater affluence, financial independence through widely available work, reduced obligations to parents, and national service abolished in 1960",
        feedback: "By the late 50s, youth were too young to have experienced wartime hardship. Unskilled work was widely available, providing financial independence. The 1959 Mark Abrams survey found young people spending £830 million and providing 40% of all cinema admissions."
    },
    {
        topic: "Youth Culture 1951-64",
        question: "What distinguished Mods from Rockers?",
        options: [
            "Mods were from the North of England; Rockers were from the South",
            "Mods listened to jazz; Rockers listened to American rock and roll",
            "Mods were university educated; Rockers were from working class backgrounds",
            "Mods wore immaculate suits inspired by Italian and French designs, rode Italian scooters; Rockers wore leather and studs, rode motorcycles, and embraced a loud raw image"
        ],
        answer: "Mods wore immaculate suits inspired by Italian and French designs, rode Italian scooters; Rockers wore leather and studs, rode motorcycles, and embraced a loud raw image",
        feedback: "Mod dress was immaculate - suits crafted from Italian and French designs. Fashion was a rejection of post-war austerity. Rockers were named for their love of rock - dirty, loud, wearing leather and studs, riding motorcycles."
    },
    {
        topic: "Youth Culture 1951-64",
        question: "How much were young people spending annually by 1959 according to the Mark Abrams survey?",
        options: ["£200 million", "£500 million", "£830 million", "£1.2 billion"],
        answer: "£830 million",
        feedback: "The 1959 Mark Abrams survey found that young people had prospered, spending £830 million annually and providing 40% of all cinema admissions - demonstrating the enormous economic power of the new teenage consumer."
    },
    {
        topic: "Immigration and Race 1951-64",
        question: "What were the main pull factors drawing Commonwealth immigrants to Britain in the 1950s?",
        options: [
            "British government cash grants and subsidised housing for new arrivals",
            "The 1948 British Nationality Act specifically advertised free movement rights",
            "Relatively high wages and welfare state benefits available to new arrivals",
            "A romanticised image of Britain as the mother country, plentiful unskilled work, and active recruitment drives - London Transport took on 4,000 new employees in 1956"
        ],
        answer: "A romanticised image of Britain as the mother country, plentiful unskilled work, and active recruitment drives - London Transport took on 4,000 new employees in 1956",
        feedback: "Pull factors included a romanticised image of Britain, plenty of unskilled work, and active recruitment drives. London Transport took in 4,000 new employees in 1956, and the NHS and public transport were particularly reliant on immigrant labour."
    },
    {
        topic: "Immigration and Race 1951-64",
        question: "How many immigrants entered the UK in 1961 compared to the previous five years combined?",
        options: ["50,000 - roughly equal to the previous 5 years combined", "80,000 - slightly more than the previous 5 years combined", "130,000 - equivalent to the previous 5 years combined", "200,000 - twice the previous 5 years combined"],
        answer: "130,000 - equivalent to the previous 5 years combined",
        feedback: "In 1961, 130,000 immigrants entered the UK - the equivalent of the previous 5 years combined. By 1960-62, more migrants had arrived than in the whole of the 20th century to that point, prompting the Commonwealth Immigrants Act 1962."
    },
    {
        topic: "Immigration and Race 1951-64",
        question: "What did the Commonwealth Immigrants Act 1962 introduce?",
        options: [
            "It banned all non-white immigration from Commonwealth countries",
            "It introduced a points-based system favouring skilled workers of all nationalities equally",
            "It reaffirmed the 1948 British Nationality Act's guarantee of free entry",
            "It ended free immigration and replaced it with a work voucher scheme with 70% public support, though it effectively discriminated against non-white workers"
        ],
        answer: "It ended free immigration and replaced it with a work voucher scheme with 70% public support, though it effectively discriminated against non-white workers",
        feedback: "The 1962 Act ended free immigration for former colonial subjects and replaced it with a work voucher scheme - Category A (employment arranged), B (skills in short supply), C (all others). It had 70% public support but white workers were more likely to have the skills needed for vouchers."
    },
    {
        topic: "Immigration and Race 1951-64",
        question: "What was the Kelso Cochrane case of 1959?",
        options: [
            "A West Indian bus driver wrongfully dismissed by London Transport whose case led to the Race Relations Act",
            "A Caribbean nurse refused employment at a London hospital, exposing NHS racial discrimination",
            "A Jamaican man beaten by police in Brixton, leading to demands for accountability",
            "An Antiguan carpenter stabbed to death by six white youths - police treated it as robbery despite evidence of racial motive, and 1,000 Black and white people lined the streets at his funeral"
        ],
        answer: "An Antiguan carpenter stabbed to death by six white youths - police treated it as robbery despite evidence of racial motive, and 1,000 Black and white people lined the streets at his funeral",
        feedback: "Kelso Cochrane was an Antiguan carpenter stabbed to death by six white youths. Despite evidence of racial motive, police investigated it as a robbery, only arrested two who were later released. 1,000 Black and white people lined the streets in solidarity at his funeral."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "What was Churchill's 'three circles of influence' concept?",
        options: [
            "A military strategy dividing the world into American, Soviet, and neutral spheres",
            "A NATO doctrine organising Allied defences into three concentric rings around Western Europe",
            "A foreign policy framework dividing Britain's interests into economic, military, and cultural spheres",
            "Churchill argued Britain sat at the intersection of Europe, the US, and the Commonwealth - claiming it was 'the only country which has a great part in every one of them'"
        ],
        answer: "Churchill argued Britain sat at the intersection of Europe, the US, and the Commonwealth - claiming it was 'the only country which has a great part in every one of them'",
        feedback: "Churchill argued Britain sat at the intersection of three circles of influence - Europe, the US, and the Commonwealth. He claimed Britain was 'the only country which has a great part in every one of them' - justifying reluctance to integrate into European institutions."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "What was Macmillan's 'Winds of Change' speech?",
        options: [
            "A speech to NATO allies calling for a new approach to containing Soviet expansion in Africa",
            "A speech to the UN calling for a new world order based on American and British shared values",
            "A speech to the House of Commons announcing withdrawal of British forces from Africa",
            "A speech in the South African Parliament in February 1960 acknowledging independence movements across Africa, marking a shift from suppressing independence to accepting decolonisation"
        ],
        answer: "A speech in the South African Parliament in February 1960 acknowledging independence movements across Africa, marking a shift from suppressing independence to accepting decolonisation",
        feedback: "Macmillan made his 'Winds of Change' speech in Cape Town in February 1960: 'the wind of change is blowing through this continent'. It marked public recognition of African independence and a shift from suppressing movements - as with the brutal Mau Mau response in Kenya."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "Why did Britain initially refuse to join the EEC?",
        options: [
            "Churchill believed the EEC would become a federal superstate and was fundamentally opposed",
            "The City of London successfully lobbied against membership to protect financial services",
            "Britain believed EFTA would be just as economically successful as the EEC",
            "Britain objected because membership would mean losing economic sovereignty, feared political union, feared damaging the US special relationship, and 40% of exports went to the Empire/Commonwealth"
        ],
        answer: "Britain objected because membership would mean losing economic sovereignty, feared political union, feared damaging the US special relationship, and 40% of exports went to the Empire/Commonwealth",
        feedback: "Britain objected: it would no longer control its own economy; economic unity might lead to political unity; it feared damaging the special relationship with the US; and 40% of British exports went to the Empire/Commonwealth of 800 million people compared to under 200 million in Europe."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "Why did de Gaulle veto Britain's 1961 EEC application?",
        options: [
            "He objected to Britain's refusal to adopt French as a second EEC official language",
            "He was responding to British opposition to French nuclear testing in the Pacific",
            "He vetoed it because Britain refused to abandon special trade relationships with former colonies",
            "He claimed Britain's economic weaknesses would damage the EEC and it acted as a 'Trojan horse' for American influence - Britain believed his real motive was to preserve French-German dominance"
        ],
        answer: "He claimed Britain's economic weaknesses would damage the EEC and it acted as a 'Trojan horse' for American influence - Britain believed his real motive was to preserve French-German dominance",
        feedback: "De Gaulle claimed Britain's economic issues would weaken the EEC and that it acted as a Trojan horse for American influence. Britain believed his real motive was to ensure continued French-German dominance. The Dutch and Belgians actually wanted Britain to join to counteract this."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "What was the economic performance of ECSC members in its first 5 years?",
        options: ["Steel production among the Six rose 10% in its first 5 years", "Steel production among the Six rose 25% in its first 5 years", "Steel production among the Six rose 50% in its first 5 years", "Steel production among the Six rose 75% in its first 5 years"],
        answer: "Steel production among the Six rose 50% in its first 5 years",
        feedback: "Steel production among the Six rose 50% in the ECSC's first 5 years. In the EEC, within 5 years it became the world's biggest exporter and buyer of raw materials. Britain's parallel economic stagnation made the contrast stark."
    },
    {
        topic: "Post-War Consensus",
        question: "What is the main evidence that a post-war consensus existed?",
        options: [
            "Both parties agreed on immigration controls, nuclear deterrence, and EEC membership",
            "Both parties agreed to abandon nationalisation and pursue free market economics after 1951",
            "Both parties supported British entry into the EEC from its founding in 1957",
            "Both parties committed to the welfare state, used Keynesian economics (Butskellism), continued the housing pledge, agreed on decolonisation, and maintained trade union consultation"
        ],
        answer: "Both parties committed to the welfare state, used Keynesian economics (Butskellism), continued the housing pledge, agreed on decolonisation, and maintained trade union consultation",
        feedback: "Evidence for consensus includes: both parties committed to the welfare state (expenditure on social services rose from 39.2% to 43% of total public expenditure 1951-55); Butskellism in Keynesian economics; Conservatives continued Labour's housing pledge; agreement on decolonisation; and TU consultation as shared policy."
    },
    {
        topic: "Post-War Consensus",
        question: "What is the main evidence against a genuine post-war consensus?",
        options: [
            "The parties fought bitterly over NATO membership and the nuclear deterrent throughout",
            "The Conservatives abolished the welfare state in 1955 when they felt electorally secure",
            "The parties disagreed on every major policy area - consensus was a myth invented by historians",
            "Right-wing Tories called Attlee's legacy a 'social mistake'; Bevanites argued it wasn't socialist enough; Labour retained Clause IV; and sharp disagreements existed on immigration and the stop-go economic cycle"
        ],
        answer: "Right-wing Tories called Attlee's legacy a 'social mistake'; Bevanites argued it wasn't socialist enough; Labour retained Clause IV; and sharp disagreements existed on immigration and the stop-go economic cycle",
        feedback: "Evidence against: right-wing Tories believed continuation of Attlee's legacy was a 'social mistake'; Bevanites argued it wasn't nearly socialist enough; Labour retained Clause IV; the Suez Crisis led to Labour attacks on Eden; Gaitskell criticised Butler's stop-go cycle; and sharp disagreements on immigration existed."
    },

    // =====================================
    // THE SIXTIES 1964-1970
    // =====================================

    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "Why did Labour win the 1964 general election?",
        options: [
            "Wilson won a landslide on the strength of his economic programme alone",
            "A major economic recession had devastated living standards under the Conservatives",
            "The Liberal Party collapsed, with most of its votes going to Labour",
            "Labour was seen as a fresh start suited to a modern world - Wilson's youthful image, 'white heat of technology' agenda, Conservative scandals, and out-of-touch Douglas-Home gave Labour a 4-seat majority"
        ],
        answer: "Labour was seen as a fresh start suited to a modern world - Wilson's youthful image, 'white heat of technology' agenda, Conservative scandals, and out-of-touch Douglas-Home gave Labour a 4-seat majority",
        feedback: "Labour was considered a fresh start - creating the Department of Economic Affairs, National Plan, Department of Technology, and seven new universities. Wilson at 48 was younger and more modern than Home. Conservative scandals had damaged their image. Labour won a 4-seat majority in 1964, growing to 96 seats in 1966."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "What was the 1967 devaluation of the pound?",
        options: [
            "The pound was devalued by 5% - Wilson handled it calmly and it caused little damage",
            "The pound was devalued by 10% - Wilson successfully blamed the Conservative legacy",
            "The pound was devalued by 25% - immediately boosting exports",
            "The pound was devalued by 14% from $2.80 to $2.40 - Wilson's ill-judged TV broadcast appeared to deny the severity, Callaghan resigned as Chancellor, and it was a political catastrophe"
        ],
        answer: "The pound was devalued by 14% from $2.80 to $2.40 - Wilson's ill-judged TV broadcast appeared to deny the severity, Callaghan resigned as Chancellor, and it was a political catastrophe",
        feedback: "In November 1967 the pound was devalued by 14% from $2.80 to $2.40. Wilson's ill-judged TV broadcast appeared to deny the severity. Callaghan resigned as Chancellor, swapping roles with Roy Jenkins. It was a political catastrophe for the government."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "What was 'In Place of Strife' and why did it fail?",
        options: [
            "A successful trade union reform programme that reduced strikes by 50%",
            "A pay agreement between the TUC and government that successfully held wages down",
            "A redundancy protection act giving workers the right to appeal against unfair dismissal",
            "Barbara Castle's 1969 White Paper proposing strike ballots and fines for rule-breaking - it met with extreme protest from the TUC and Labour Party, with Callaghan opposing it, and Wilson accepted defeat"
        ],
        answer: "Barbara Castle's 1969 White Paper proposing strike ballots and fines for rule-breaking - it met with extreme protest from the TUC and Labour Party, with Callaghan opposing it, and Wilson accepted defeat",
        feedback: "'In Place of Strife' was Barbara Castle's January 1969 White Paper proposing strike ballots and fines for rule-breaking. It met with extreme protests from the TUC and Labour Party. Home Secretary Callaghan opposed it. Wilson accepted defeat - reforms were needed but Labour could not carry them through."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "By how much did working days lost through strikes increase under Wilson 1964-69?",
        options: ["From 1 million to 2 million working days lost", "From 1.75 million in 1963 to 7 million in 1969", "From 500,000 to 3 million working days lost", "From 2 million to 5 million working days lost"],
        answer: "From 1.75 million in 1963 to 7 million in 1969",
        feedback: "Working days lost through strikes increased from 1.75 million in 1963 to 2.9 million in 1965 and 7 million in 1969. This alarming rise, including 'wildcat' strikes led by shop stewards, was a key reason Wilson tried - and failed - to introduce 'In Place of Strife'."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "What did the 1965 LSE study by Abel-Smith and Townsend reveal about poverty?",
        options: [
            "That poverty had been virtually eliminated by the welfare state",
            "That poverty was exclusively concentrated in the elderly and could be solved by raising pensions",
            "That poverty was overwhelmingly caused by unemployment rather than low wages",
            "That poverty had risen from 7.8% in 1953-54 to 14.2% in 1960, with over 2 million children in low income households"
        ],
        answer: "That poverty had risen from 7.8% in 1953-54 to 14.2% in 1960, with over 2 million children in low income households",
        feedback: "The study showed poverty had risen from 7.8% in 1953-54 to 14.2% in 1960. Over 2 million children were in low income households, and up to 3 million elderly never claimed their entitled benefits. It led to the Child Poverty Action Group being set up in March 1965."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "Why did Labour lose the 1970 general election?",
        options: [
            "Wilson resigned before the election and Labour failed to unite behind a new leader",
            "Heath ran a brilliant campaign winning over traditional Labour voters in northern cities",
            "The 1967 devaluation caused a deep recession from which Labour never recovered",
            "Traditional supporters felt the government had failed - key industries declined, unemployment rose from 400,000 to 600,000, and ongoing issues with the pound, poverty, and trade unions eroded support"
        ],
        answer: "Traditional supporters felt the government had failed - key industries declined, unemployment rose from 400,000 to 600,000, and ongoing issues with the pound, poverty, and trade unions eroded support",
        feedback: "Many traditional supporters felt the government had failed to live up to its promises. Key industries - shipbuilding, coal mining, railway - continued to decline. Unemployment rose from 400,000 to just over 600,000 by 1970. The end of pay restraint meant steep wage increases and inflation regardless."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What were the cases of Derek Bentley and Ruth Ellis, and how did they shape opinion on capital punishment?",
        options: [
            "Both were exonerated after wrongful convictions, demonstrating the risk of executing the innocent",
            "Both were convicted for murders they clearly committed but the brutality of executions caused public revulsion",
            "Both were pardoned posthumously by Parliament, leading directly to the abolition debate",
            "Bentley was hanged despite having a mental age of a child while his younger accomplice who fired the shot could not be; Ellis shot her abusive partner who had caused a miscarriage - 600 letters called for a reprieve"
        ],
        answer: "Bentley was hanged despite having a mental age of a child while his younger accomplice who fired the shot could not be; Ellis shot her abusive partner who had caused a miscarriage - 600 letters called for a reprieve",
        feedback: "Bentley had a mental age of a child yet was hanged because his younger accomplice Craig, who fired the shot, was too young to hang. Ruth Ellis shot an abusive boyfriend who had caused her a miscarriage by punching her in the stomach. 600 letters called for a reprieve. Both cases shaped opinion ahead of the 1965 abolition."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What was the background to the Sexual Offences Act 1967?",
        options: [
            "The Act was introduced following a series of high-profile prosecutions of prominent gay men",
            "American pressure to modernise Britain's laws as a condition of continued financial support",
            "The Act was introduced following a government inquiry into sexual crimes against women",
            "The 1957 Wolfenden Report had called for decriminalisation of homosexual acts in private - backbencher Leo Abse led the campaign. The age of consent was set at 21, privacy was narrowly defined"
        ],
        answer: "The 1957 Wolfenden Report had called for decriminalisation of homosexual acts in private - backbencher Leo Abse led the campaign. The age of consent was set at 21, privacy was narrowly defined",
        feedback: "The 1957 Wolfenden Report called for decriminalisation. The Homosexual Law Reform Society campaigned since 1958. Backbencher Leo Abse led the campaign resulting in the 1967 Act. However, the age of consent was 21, privacy was narrowly defined, and Abse concluded the Act would be criticised for not going far enough."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What was the situation with abortion before the 1967 Abortion Act?",
        options: [
            "Abortion was legal but unavailable on the NHS, causing inequality of access",
            "Abortion was legal only when the mother's life was at risk, requiring three doctors' approval",
            "Abortion was legal in all circumstances up to 12 weeks",
            "Private clinics were only accessible to upper classes while others relied on dangerous backstreet abortions - 100,000-200,000 illegal abortions per year, 35,000 hospital admissions. The Thalidomide disaster swayed public opinion massively"
        ],
        answer: "Private clinics were only accessible to upper classes while others relied on dangerous backstreet abortions - 100,000-200,000 illegal abortions per year, 35,000 hospital admissions. The Thalidomide disaster swayed public opinion massively",
        feedback: "Private clinics were only accessible to upper classes. Others relied on dangerous backstreet abortions - 100,000-200,000 illegal abortions per year with 35,000 admitted to hospital. The Thalidomide disaster, in which a drug caused horrible birth defects from 1959-62, massively swayed public opinion. The Act permitted termination within 28 weeks with consent of two doctors."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What did the Divorce Reform Act 1969 change?",
        options: [
            "It banned divorce for the first five years of marriage",
            "It extended legal aid to cover divorce proceedings for the first time",
            "It made divorce available on demand after a 6-month cooling off period",
            "It removed the requirement to prove fault - couples could divorce after 2 years separation if both agreed, or 5 years if only one agreed. Divorce rates rose from 7% of marriages in the 1950s to nearly half by the 1970s"
        ],
        answer: "It removed the requirement to prove fault - couples could divorce after 2 years separation if both agreed, or 5 years if only one agreed. Divorce rates rose from 7% of marriages in the 1950s to nearly half by the 1970s",
        feedback: "The Divorce Reform Act 1969 removed the requirement to prove fault, ending the need for private investigators only the wealthy could afford. Couples could divorce after 2 years separation if both agreed, or 5 years if only one agreed. Divorce rates rose from 7% of marriages in the 1950s to nearly half by the 1970s."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What did the Theatre Act 1968 achieve?",
        options: [
            "It imposed new censorship rules on theatre to counteract the permissive society",
            "It introduced government funding for regional theatres for the first time",
            "It required all theatre productions to carry age ratings similar to film certificates",
            "It abolished stage censorship - scripts had previously needed to be licensed through the Lord Chamberlain's office. Writers began experimenting with new styles, and performances like 'Hair' and 'Oh Calcutta!' featured nudity"
        ],
        answer: "It abolished stage censorship - scripts had previously needed to be licensed through the Lord Chamberlain's office. Writers began experimenting with new styles, and performances like 'Hair' and 'Oh Calcutta!' featured nudity",
        feedback: "The Theatre Act 1968 abolished stage censorship. Until this point scripts had to be licensed through the Lord Chamberlain's office. Backed by Labour backbencher George Strauss and supported by Roy Jenkins, it enabled writers to experiment with new styles."
    },
    {
        topic: "Social and Cultural Change 1960s",
        question: "How did television transform British society in the 1960s?",
        options: [
            "Television remained a luxury item throughout the 1960s, only reaching 30% of households by 1970",
            "Television was exclusively a BBC monopoly until 1970 maintaining strict public broadcasting standards",
            "Television primarily reinforced conservative values throughout the decade",
            "From two thirds of the population never having seen a TV in 1949, TV was a social necessity by the early 1960s - 13 million licence holders by 1964. ITV's Coronation Street had over 20 million viewers by October 1961"
        ],
        answer: "From two thirds of the population never having seen a TV in 1949, TV was a social necessity by the early 1960s - 13 million licence holders by 1964. ITV's Coronation Street had over 20 million viewers by October 1961",
        feedback: "Two thirds of the population had never seen a TV in 1949. The 1953 Coronation took viewers from 1.5 million to 3 million overnight. By 1964 there were 13 million licence holders. ITV launched in 1955. Coronation Street had 20+ million viewers by October 1961."
    },
    {
        topic: "Social and Cultural Change 1960s",
        question: "How did pirate radio emerge and how did the government respond?",
        options: [
            "Pirate radio was immediately suppressed by the Post Office, which jammed all unlicensed broadcasts",
            "Pirate radio was tolerated as a harmless novelty and eventually absorbed into the BBC without legislation",
            "The government licensed pirate stations as commercial radio, creating a mixed broadcasting economy",
            "Radio Caroline launched in 1964 from a ship off the Essex coast. The government introduced the Marine Broadcasting Act 1967 to shut down offshore stations, then launched Radio One recruiting former pirate DJs"
        ],
        answer: "Radio Caroline launched in 1964 from a ship off the Essex coast. The government introduced the Marine Broadcasting Act 1967 to shut down offshore stations, then launched Radio One recruiting former pirate DJs",
        feedback: "At the start of the 1960s the BBC had no station for popular music. Radio Caroline launched in 1964 from a ship off the Essex coast. The government introduced the Marine Broadcasting Act 1967 to shut down offshore stations, then launched Radio One - recruiting former pirate DJs like Tony Blackburn."
    },
    {
        topic: "Social and Cultural Change 1960s",
        question: "What were the limits of the 'permissive society'?",
        options: [
            "There were no significant limits - British society was transformed root and branch by liberal attitudes",
            "Religious opposition from Catholic and Anglican churches successfully blocked most permissive legislation",
            "The permissive society was limited entirely to London with no impact on provincial Britain",
            "A 1969 New Society survey showed only 5% welcomed easier laws as the most important change; 77% thought too much publicity was given to sex; and surveys found most young people were virgins on marriage"
        ],
        answer: "A 1969 New Society survey showed only 5% welcomed easier laws as the most important change; 77% thought too much publicity was given to sex; and surveys found most young people were virgins on marriage",
        feedback: "A New Society survey in 1969 showed only 5% welcomed easier laws as the most important 60s change. 77% thought too much publicity was given to sex, and 71% believed murderers ought to be hanged. Surveys by Schofield and Gorer found promiscuity was not common teenage behaviour."
    },
    {
        topic: "Social and Cultural Change 1960s",
        question: "How many ITV advertising revenues grew between 1956 and 1961?",
        options: ["From £5 million to £30 million", "From £13 million to £93 million", "From £20 million to £60 million", "From £8 million to £50 million"],
        answer: "From £13 million to £93 million",
        feedback: "ITV proved a 'licence to print money' - advertising revenue grew from £13 million in 1956 to £93 million in 1961. Lord Reith, the BBC's first Director-General, likened ITV to 'smallpox, bubonic plague and the black death'."
    },
    {
        topic: "Women's Rights 1964-70",
        question: "What was the Ford Dagenham Strike of 1968 and what did it lead to?",
        options: [
            "Male workers struck in support of female colleagues' equal pay demands, winning immediate equality",
            "Female workers struck demanding access to the same training schemes as men",
            "A wildcat strike by women workers that the TUC refused to support, highlighting union sexism",
            "Women sewing machinists walked out after a regrading leaving them 15% below male rates, halting car production. Barbara Castle raised their pay to 8% below the men's rate. It led directly to the 1970 Equal Pay Act"
        ],
        answer: "Women sewing machinists walked out after a regrading leaving them 15% below male rates, halting car production. Barbara Castle raised their pay to 8% below the men's rate. It led directly to the 1970 Equal Pay Act",
        feedback: "Women sewing machinists at Ford's Dagenham plant walked out in 1968, halting car production. The regrading left them 15% below the male rate. Barbara Castle intervened - their pay was raised to 8% below men's rate. Only by 1984 was 95% of men's rate secured. It led directly to the 1970 Equal Pay Act."
    },
    {
        topic: "Women's Rights 1964-70",
        question: "What proportion of the labour force were women in 1951 compared to 1971?",
        options: ["25% in 1951 rising to 30% in 1971", "31% in 1951 rising to 37% in 1971", "20% in 1951 rising to 28% in 1971", "35% in 1951 rising to 42% in 1971"],
        answer: "31% in 1951 rising to 37% in 1971",
        feedback: "Women rose from 31% of the total labour force in 1951 to 37% in 1971. However, a 1965 Ministry of Labour survey found most women employed in low skill, low pay jobs - only 5% were managers, the same figure in 1970."
    },
    {
        topic: "Women's Rights 1964-70",
        question: "What were the limitations of the Women's Liberation Movement?",
        options: [
            "It was entirely middle class with no connection to working class women's concerns",
            "The movement was illegal under obscenity laws and its leaders were frequently imprisoned",
            "It failed entirely to achieve any legislative change during the 1960s and 1970s",
            "Male left-wing comrades expected women to 'lick envelopes and make tea'; popular magazines constantly revisited 'getting and keeping your man'; and sexual freedom created new objectification of women"
        ],
        answer: "Male left-wing comrades expected women to 'lick envelopes and make tea'; popular magazines constantly revisited 'getting and keeping your man'; and sexual freedom created new objectification of women",
        feedback: "Male comrades on the left expected women to 'lick envelopes and make tea rather than make speeches'. Popular publications like Woman's Own constantly revisited 'getting and keeping your man'. Sexual freedom led to new objectification - women were increasingly sexualised rather than liberated."
    },
    {
        topic: "Immigration and Race 1964-70",
        question: "What was the Commonwealth Immigrants Act 1968 and why was it controversial?",
        options: [
            "It banned all new Commonwealth immigration regardless of passport status",
            "It introduced a language test for all Commonwealth immigrants seeking permanent residence",
            "It reduced work vouchers to 8,500 per year with broad parliamentary support",
            "Triggered by the Kenyan Asian influx, it restricted citizenship to those with at least one parent or grandparent born in the UK - effectively excluding Kenyan Asians. 35 Labour, 15 Tory, and all Liberal MPs voted against it"
        ],
        answer: "Triggered by the Kenyan Asian influx, it restricted citizenship to those with at least one parent or grandparent born in the UK - effectively excluding Kenyan Asians. 35 Labour, 15 Tory, and all Liberal MPs voted against it",
        feedback: "When Kenya gained independence in 1963, 40,000 Asians held British passports. 13,000 arrived in the first two months of 1967 alone. The emergency Act restricted citizenship to those with at least one parent or grandparent born in the UK - effectively excluding Kenyan Asians. Incredibly divisive - 35 Labour, 15 Tory, and all Liberal MPs voted against it."
    },
    {
        topic: "Immigration and Race 1964-70",
        question: "What was Enoch Powell's 'Rivers of Blood' speech?",
        options: [
            "A measured parliamentary speech calling for immigration controls, widely supported by both parties",
            "A private letter to the Prime Minister leaked to the press calling for voluntary repatriation",
            "A House of Commons speech that led directly to the Race Relations Act 1968 being strengthened",
            "A speech predicting racial violence - 'I seem to see the Tiber foaming with much blood' - arguing the Race Relations Bill would give 'the black man the whip hand over the white man'. Heath sacked him from the Shadow Cabinet, yet 74% of a poll supported Powell"
        ],
        answer: "A speech predicting racial violence - 'I seem to see the Tiber foaming with much blood' - arguing the Race Relations Bill would give 'the black man the whip hand over the white man'. Heath sacked him from the Shadow Cabinet, yet 74% of a poll supported Powell",
        feedback: "Powell's speech predicted racial violence: 'I seem to see the Tiber foaming with much blood'. He argued the Race Relations Bill would mean 'the black man will have the whip hand over the white man'. Heath sacked him from the shadow cabinet, yet 74% of a poll supported Powell, 80% wanted stricter controls, and he received 43,000 letters within weeks."
    },
    {
        topic: "Northern Ireland 1964-70",
        question: "What was the Battle of the Bogside in 1969?",
        options: [
            "An IRA attack on the RUC that killed 15 police officers",
            "A loyalist attack on Catholic homes in Belfast that triggered British Army deployment",
            "A siege of the Bogside by British troops that ended with IRA surrender",
            "Skirmishes after the Apprentice Boys marched near the Catholic Bogside rapidly escalated into a full-scale uprising - the RUC used tear gas; 8 were killed, at least 750 injured, and £2.25 million in damage was caused"
        ],
        answer: "Skirmishes after the Apprentice Boys marched near the Catholic Bogside rapidly escalated into a full-scale uprising - the RUC used tear gas; 8 were killed, at least 750 injured, and £2.25 million in damage was caused",
        feedback: "The Apprentice Boys were permitted to march through Londonderry, passing close to the Catholic Bogside. Skirmishes rapidly escalated into a full-scale uprising. The RUC used tear gas and baton charges. 8 were killed by the RUC and B Specials, at least 750 injured, and £2.25 million in compensation was owed for 180 homes and buildings damaged."
    },
    {
        topic: "Education Reform 1960s",
        question: "What was Tony Crosland's Circular 10/65?",
        options: [
            "It ordered all local authorities to immediately convert grammar schools to comprehensives",
            "It created the polytechnic system by converting technical colleges into degree-awarding institutions",
            "It introduced the national curriculum for the first time",
            "Rather than ordering comprehensivisation, it requested it - making funding for new school buildings available only for comprehensives. Crosland privately declared his intention to 'destroy every f***ing grammar school in England'"
        ],
        answer: "Rather than ordering comprehensivisation, it requested it - making funding for new school buildings available only for comprehensives. Crosland privately declared his intention to 'destroy every f***ing grammar school in England'",
        feedback: "Crosland accelerated the shift to comprehensives via Circular 10/65, making funding for new school buildings only available for comprehensives. He privately declared: 'If it's the last thing I do, I'm going to destroy every f***ing grammar school in England. And Wales. And Northern Ireland.' Change had already begun - 90 of 146 authorities were moving to comprehensives by 1962."
    },
    {
        topic: "Education Reform 1960s",
        question: "What was the Open University and why was Wilson proud of it?",
        options: [
            "A network of evening classes bringing degree-level education to factory workers",
            "A government-funded adult literacy programme that expanded into higher education",
            "A distance learning programme exclusively for women returning to work after raising children",
            "High quality degree-level learning for those who had never attended campus universities, taught by radio and TV. First students began January 1971. By 1980 it had 70,000 students, awarding more degrees than Oxbridge"
        ],
        answer: "High quality degree-level learning for those who had never attended campus universities, taught by radio and TV. First students began January 1971. By 1980 it had 70,000 students, awarding more degrees than Oxbridge",
        feedback: "Wilson said the Open University was what he most wanted to be remembered for. Jennie Lee was appointed to handle the project - her working class background was crucial. First students began January 1971, taught by radio and TV. Tory Ian Macleod called it 'blithering nonsense'. By 1980 it had 70,000 students, awarding more degrees than Oxbridge."
    },
    {
        topic: "Wilson and Foreign Policy",
        question: "How did Wilson handle British military commitment to Vietnam?",
        options: [
            "Wilson sent 5,000 British troops under pressure from President Johnson",
            "Wilson offered naval support but refused to commit ground troops",
            "Wilson supported the US position publicly but privately lobbied Johnson for a ceasefire",
            "Wilson never sent a single regular soldier to Vietnam - historians regard this as a significant achievement given enormous pressure from Johnson and Britain's need for US support over Rhodesia"
        ],
        answer: "Wilson never sent a single regular soldier to Vietnam - historians regard this as a significant achievement given enormous pressure from Johnson and Britain's need for US support over Rhodesia",
        feedback: "Wilson never sent a single regular soldier to Vietnam. He needed US support for Rhodesian sanctions, and Americans wanted British involvement in Vietnam. He got Kosygin to agree to an American-approved peace plan, until Johnson changed his mind at the last minute."
    },
    {
        topic: "Wilson and Foreign Policy",
        question: "What was the Rhodesia Crisis and why did it embarrass Wilson?",
        options: [
            "Wilson successfully negotiated a peaceful transition to Black majority rule in Rhodesia by 1970",
            "Wilson sent troops to Rhodesia to enforce sanctions, leading to a minor military conflict",
            "Rhodesia agreed to Black majority rule in 1968 following effective British economic sanctions",
            "Wilson met Smith aboard HMS Tiger and HMS Fearless - Smith agreed to packages then rejected them at home both times. Sandbrook called it a symbol of 'British government's fading reputation' failing to control its own colonists"
        ],
        answer: "Wilson met Smith aboard HMS Tiger and HMS Fearless - Smith agreed to packages then rejected them at home both times. Sandbrook called it a symbol of 'British government's fading reputation' failing to control its own colonists",
        feedback: "By mid-1966 Smith's regime had dug in - sanctions had evaporated as Rhodesia traded through Mozambique and South Africa. Wilson met Smith aboard HMS Tiger in 1966 and HMS Fearless in 1968 - both times Smith agreed to packages then rejected them. Sandbrook said it symbolised 'British government's fading reputation'."
    },

    // =====================================
    // END OF POST-WAR CONSENSUS 1970-1979
    // =====================================

    {
        topic: "Heath's Government 1970-74",
        question: "What was Heath's initial economic approach and how did it fare?",
        options: [
            "Heath continued the Keynesian consensus, expanding public spending and achieving low inflation",
            "Heath immediately joined the EEC and used European structural funds to modernise British industry",
            "Heath successfully reduced inflation through strict monetarist control of the money supply",
            "Heath declared a 'new style of government' aiming to reduce state intervention - but inflation rose to 15% by end of 1971, BOP deficit reached nearly £1 billion, and unemployment exceeded 850,000 by 1973"
        ],
        answer: "Heath declared a 'new style of government' aiming to reduce state intervention - but inflation rose to 15% by end of 1971, BOP deficit reached nearly £1 billion, and unemployment exceeded 850,000 by 1973",
        feedback: "Heath entered office declaring a 'new style of government' - a Tory 'quiet revolution' reducing state intervention. But inflation rose to 15% by end of 1971, and by 1973 the BOP deficit was nearly £1 billion with unemployment over 850,000. Chancellor Ian Macleod died weeks into the government."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was Heath's 'U-Turn' of 1972?",
        options: [
            "Heath reversed his pro-European stance and demanded renegotiation of EEC terms",
            "Heath reversed his industrial relations legislation and reached a compromise with the TUC",
            "Heath called a snap election to seek a new mandate for his economic policies",
            "Heath returned to controlling prices and incomes - contradicting his free market approach - bailing out Upper Clyde Shipbuilders, nationalising Rolls-Royce. Marr said he was 'behaving like a Wilson-era socialist'"
        ],
        answer: "Heath returned to controlling prices and incomes - contradicting his free market approach - bailing out Upper Clyde Shipbuilders, nationalising Rolls-Royce. Marr said he was 'behaving like a Wilson-era socialist'",
        feedback: "In 1972 Heath announced a return to controlling prices and incomes - directly contradicting his original free market approach. He bailed out failing companies like Upper Clyde Shipbuilders and nationalised Rolls-Royce. Marr said he was 'behaving like a Wilson-era socialist'. The 1972 Industry Act gave unprecedented powers of industrial intervention."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was the Industrial Relations Act 1971 and why did it fail?",
        options: [
            "It successfully reduced strike days by 50% and improved industrial relations",
            "It introduced compulsory arbitration for all industrial disputes and was broadly welcomed",
            "It abolished the right to strike in essential services but was overturned by the courts",
            "It set up a National Industrial Relations Court - but the TUC voted not to cooperate, instructing all unions not to register. 23.9 million working days were lost in 1972"
        ],
        answer: "It set up a National Industrial Relations Court - but the TUC voted not to cooperate, instructing all unions not to register. 23.9 million working days were lost in 1972",
        feedback: "The Industrial Relations Act 1971 set up a National Industrial Relations Court with powers to enforce strike ballots and 60-day cooling-off periods. But the TUC formally voted not to cooperate and instructed all unions not to register. Murphy said Heath had 'made the mistake of legislating too quickly, without sufficient consultation'."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was the outcome of the 1972 miners' strike?",
        options: [
            "Miners struck for two weeks, accepted a modest increase, and returned to work without incident",
            "Heath used emergency powers to break the strike after two days, imprisoning the NUM leadership",
            "The strike was settled by an independent pay board awarding miners a 5% increase",
            "The NUM used flying pickets to bring coal movement to a standstill - the NUM gained a 21% wage increase, nearly 3 times what employers offered - a major defeat for Heath's government"
        ],
        answer: "The NUM used flying pickets to bring coal movement to a standstill - the NUM gained a 21% wage increase, nearly 3 times what employers offered - a major defeat for Heath's government",
        feedback: "In 1972 the NUM, led by Arthur Scargill, used flying pickets to bring the movement of coal to a standstill. The NUM gained a 21% wage increase - nearly 3 times what employers had originally offered. A major defeat for Heath's government, emboldening the unions significantly."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was Bloody Sunday and what were its consequences?",
        options: [
            "IRA bombers killed 13 soldiers in Londonderry, leading to the introduction of internment",
            "RUC officers fired on a civil rights march, killing 6 people and triggering the formation of the Provisional IRA",
            "Loyalist paramilitaries killed 13 Catholics in Belfast, leading Wilson to deploy British troops",
            "Troops from the Parachute Regiment killed 13 unarmed civilians in Londonderry in 1972 - mass protests followed, the British embassy in Dublin was burned, and direct rule from Westminster was imposed"
        ],
        answer: "Troops from the Parachute Regiment killed 13 unarmed civilians in Londonderry in 1972 - mass protests followed, the British embassy in Dublin was burned, and direct rule from Westminster was imposed",
        feedback: "On Bloody Sunday 1972, troops from the Parachute Regiment killed 13 unarmed civilians in Londonderry. Mass protests followed - the British embassy in Dublin was burned and the Parachute Regiment's Aldershot HQ was bombed. This led to the suspension of Stormont and direct rule from Westminster."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "Why did Heath take Britain into the EEC in 1973?",
        options: [
            "He was forced to by American pressure and had no personal enthusiasm for European integration",
            "He joined primarily to access European agricultural subsidies for British farmers",
            "EEC entry was a condition of the IMF loan that bailed out the British economy in 1972",
            "Heath was very pro-European and saw it as a means to modernise British society - the Commons approved entry 356 votes to 244, and Britain formally joined in January 1973"
        ],
        answer: "Heath was very pro-European and saw it as a means to modernise British society - the Commons approved entry 356 votes to 244, and Britain formally joined in January 1973",
        feedback: "Heath was very pro-European and saw EEC membership as a means to modernise British society, believing Britain could no longer act alone in the world. The Commons approved entry 356 votes to 244 and Britain formally joined in January 1973. However, the Common Agricultural Policy imposed high food import tariffs."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "By how much did oil prices rise following the Yom Kippur War?",
        options: ["From $2 to $10 a barrel by end of decade", "From $5 to $20 a barrel by end of decade", "From $2 to $35 a barrel by end of decade", "From $3 to $50 a barrel by end of decade"],
        answer: "From $2 to $35 a barrel by end of decade",
        feedback: "The Yom Kippur War caused OPEC to cut oil supplies to western countries - coinciding with British EEC entry in 1973. Prices spiked from $2 to $35 a barrel by the end of the decade, removing the economic stimulus Britain had hoped for from EEC membership."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What was the Social Contract under Wilson's second government?",
        options: [
            "A formal agreement between all three main parties to maintain the post-war consensus",
            "A binding legal agreement between employers and unions to submit all disputes to arbitration",
            "A European-style works council system giving unions representation on company boards",
            "An agreement with the TUC abolishing the Industrial Relations Act in exchange for a wage limit - but the miners' full wage claim was settled immediately, wages rose 19% in 1974 and 23% in 1975"
        ],
        answer: "An agreement with the TUC abolishing the Industrial Relations Act in exchange for a wage limit - but the miners' full wage claim was settled immediately, wages rose 19% in 1974 and 23% in 1975",
        feedback: "Wilson's second government abolished the Industrial Relations Act and introduced the Social Contract - the TUC agreed to a £6/week limit on wage rises. However, the miners' strike was settled by allowing their full wage claim, encouraging further action. Wages rose 19% in 1974 and 23% in 1975."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What was the 1976 IMF crisis and what were its consequences?",
        options: [
            "Britain refused the IMF loan and cut spending voluntarily, emerging stronger within six months",
            "The IMF imposed a 20% devaluation of sterling as a condition of the emergency loan",
            "Britain was forced to accept IMF supervision of all economic policy for five years",
            "A huge BOP deficit, 16% inflation, and the pound falling to $1.57 forced Healey to ask the IMF for a £3 billion loan - £2.5 billion in cuts followed. Economically successful but politically disastrous; Labour lost 4 by-elections and its Commons majority"
        ],
        answer: "A huge BOP deficit, 16% inflation, and the pound falling to $1.57 forced Healey to ask the IMF for a £3 billion loan - £2.5 billion in cuts followed. Economically successful but politically disastrous; Labour lost 4 by-elections and its Commons majority",
        feedback: "The 1976 crisis was caused by a huge BOP deficit, 16% inflation, unemployment over 1 million, and the pound falling to $1.57. Healey asked the IMF for £3 billion, granted on condition of massive cuts. Along with North Sea Oil, by 1977 Britain could repay much of the loan. But it was politically disastrous - Labour lost 4 by-elections and its Commons majority."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What was Callaghan's statement about Keynesian economics and why was it significant?",
        options: [
            "'Inflation is the enemy of the working class' - signalling a shift to monetarist economics",
            "'The trade unions must accept that wage restraint is the price of full employment'",
            "'Britain must join the ERM to solve inflation' - marking a shift to European monetary discipline",
            "'We used to think you could spend your way out of a recession... I tell you in all candour that that option no longer exists' - seen by some historians as the moment the post-war consensus ended"
        ],
        answer: "'We used to think you could spend your way out of a recession... I tell you in all candour that that option no longer exists' - seen by some historians as the moment the post-war consensus ended",
        feedback: "Callaghan said: 'We used to think you could spend your way out of a recession... I tell you in all candour that that option no longer exists.' Some historians argue this was the moment the post-war consensus ended - Labour had made a decisive break from Keynesian economics."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What was the Winter of Discontent 1978-79?",
        options: [
            "A period of severe blizzards that disrupted the economy and brought down Callaghan's government",
            "A series of IRA bombings across mainland Britain that paralysed public life",
            "Mass unemployment protests sweeping through northern cities in the winter of 1978",
            "Callaghan proposed limiting wages to 5% at a time of 10% inflation - strikes followed from lorry drivers, school meal workers, rubbish collectors and grave diggers. 29 million working days were lost in 1979"
        ],
        answer: "Callaghan proposed limiting wages to 5% at a time of 10% inflation - strikes followed from lorry drivers, school meal workers, rubbish collectors and grave diggers. 29 million working days were lost in 1979",
        feedback: "Callaghan proposed limiting wage increases to 5% at a time of 10% inflation. The Winter of Discontent followed - lorry drivers struck threatening food supplies, school meal workers, rubbish collectors and grave diggers struck. The press labelled Callaghan's relaxed leadership as 'Crisis? What crisis?' 29 million working days were lost in 1979."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What caused Callaghan to call a general election in 1979?",
        options: [
            "He chose to call an election at the most favourable moment following economic recovery",
            "The Liberal Party withdrew from the Lib-Lab Pact, removing his working majority",
            "Callaghan resigned after losing a vote on Winter of Discontent emergency measures",
            "Scottish and Welsh devolution referendums failed to reach the 40% threshold - the SNP withdrew support, a vote of no confidence was passed, forcing the election that Labour lost"
        ],
        answer: "Scottish and Welsh devolution referendums failed to reach the 40% threshold - the SNP withdrew support, a vote of no confidence was passed, forcing the election that Labour lost",
        feedback: "Devolution acts required 40% of the electorate to vote in favour - only 12% of Welsh and 33% of Scots voted yes. Plans were shelved, the SNP withdrew support, a vote of no confidence was passed, and Callaghan was forced to call the general election that Labour lost."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What was the 1975 EEC referendum result?",
        options: [
            "51% yes, 49% no - failing to resolve the issue within Labour",
            "Britain voted to leave the EEC, forcing renegotiation of entry terms",
            "The referendum returned a 70% yes vote, decisively ending debate",
            "17 million voted yes, 8 million voted no - avoiding a Labour party split as 'no' campaigners within Labour could not argue with the democratic result"
        ],
        answer: "17 million voted yes, 8 million voted no - avoiding a Labour party split as 'no' campaigners within Labour could not argue with the democratic result",
        feedback: "In 1975, 17 million voted yes and 8 million voted no. Only 2/3 of the electorate voted. Crucially, it avoided a Labour party split - 'no' campaigners within Labour could not argue with the democratic result. Wilson had promised the referendum precisely to manage deep divisions within his party."
    },
    {
        topic: "Society in the 1970s",
        question: "What progress did women make in the 1970s?",
        options: [
            "Full equality was achieved in the workplace by 1979 following the Equal Pay Act",
            "Women achieved equal representation in Parliament and the professions by the mid-1970s",
            "Margaret Thatcher's election as Conservative leader in 1975 delivered equal opportunities",
            "The pill was available on the NHS from 1971, women could take out mortgages without male guarantors from 1971, and 1975 saw the Equal Pay Act, Sex Discrimination Act, and Employment Protection Act - though women's wages were still only 70% of men's by 1977"
        ],
        answer: "The pill was available on the NHS from 1971, women could take out mortgages without male guarantors from 1971, and 1975 saw the Equal Pay Act, Sex Discrimination Act, and Employment Protection Act - though women's wages were still only 70% of men's by 1977",
        feedback: "The contraceptive pill became available on the NHS in 1971, women could take out mortgages without male guarantors from 1971, and 1975 saw the Equal Pay Act, Sex Discrimination Act, and Employment Protection Act (maternity leave). The 1976 Domestic Violence Act allowed restraining orders. But women's wages were only 70% of men's by 1977."
    },
    {
        topic: "Society in the 1970s",
        question: "What was the National Front and how significant was it in the 1970s?",
        options: [
            "A small fringe group with fewer than 1,000 members posing no serious political threat",
            "A mainstream party that won 15 seats in the 1979 general election",
            "An anti-immigration pressure group that successfully lobbied for the 1971 Immigration Act",
            "It grew rapidly to 20,000 members by 1976, its marches provoked violence with 100 incidents over 2.5 years including 2 murders, and assaults on Asians and Afro-Caribbeans rose by a third"
        ],
        answer: "It grew rapidly to 20,000 members by 1976, its marches provoked violence with 100 incidents over 2.5 years including 2 murders, and assaults on Asians and Afro-Caribbeans rose by a third",
        feedback: "The National Front grew rapidly to 20,000 members by 1976. Its marches provoked violence - 100 incidents over 2.5 years including 2 murders. Assaults on Asians and Afro-Caribbeans rose by a third. The skinhead movement became linked to the NF and football hooliganism. But the Rock Against Racism movement attracted 100,000 to a Trafalgar Square concert in opposition."
    },
    {
        topic: "Society in the 1970s",
        question: "What was the 1972 Ugandan Asian crisis and how did Heath respond?",
        options: [
            "Heath refused entry and they were resettled in Canada and Australia instead",
            "The Ugandan Asians were held in detention camps for six months while Parliament debated",
            "Heath admitted Ugandan Asians only after enormous US pressure and public protests",
            "Idi Amin expelled Asians from Uganda - 28,000 with British passports were allowed exemptions from the 1971 Act, Heath set up a resettlement board, and most settled prosperously in Britain"
        ],
        answer: "Idi Amin expelled Asians from Uganda - 28,000 with British passports were allowed exemptions from the 1971 Act, Heath set up a resettlement board, and most settled prosperously in Britain",
        feedback: "In 1972 Idi Amin expelled Asians from Uganda. The 28,000 with British passports were allowed exemptions from the 1971 Immigration Act. Heath set up a resettlement board. Most settled and lived prosperously - an example of successful managed immigration in contrast to the hostile atmosphere of the era."
    },
    {
        topic: "Society in the 1970s",
        question: "What did punk culture reflect about 1970s Britain?",
        options: [
            "Punk was an apolitical musical movement focused purely on fashion",
            "Punk was a middle class art school movement with little connection to working class experience",
            "Punk was primarily a response to the dominance of American pop music in the British charts",
            "Bands like the Sex Pistols played loud, fast music with deliberately shocking attire - 'God Save the Queen' reached number 2, criticising the monarchy as 'the fascist regime'. Punk reflected social alienation, anger and hopelessness of young people in the decade"
        ],
        answer: "Bands like the Sex Pistols played loud, fast music with deliberately shocking attire - 'God Save the Queen' reached number 2, criticising the monarchy as 'the fascist regime'. Punk reflected social alienation, anger and hopelessness of young people in the decade",
        feedback: "Punks rejected all norms - the Sex Pistols and The Damned played loud, fast music with deliberately shocking attire. 'God Save the Queen' reached number 2 - criticising the monarchy as 'the fascist regime'. Punk reflected the social alienation, anger and hopelessness of young people in the 1970s."
    },
    {
        topic: "Society in the 1970s",
        question: "What environmental developments characterised the 1970s?",
        options: [
            "Environmentalism was a fringe concern with little public support in 1970s Britain",
            "A series of nuclear accidents in Britain caused widespread public opposition to atomic power",
            "The government introduced strict environmental regulations following the Clean Air Act",
            "Photos of Earth from space highlighted its fragility; Greenpeace UK was founded in 1977; the 1967 Torrey Canyon wreck caused massive pollution; and the People's Party emerged in 1973 (later the Green Party) standing 53 candidates in 1979"
        ],
        answer: "Photos of Earth from space highlighted its fragility; Greenpeace UK was founded in 1977; the 1967 Torrey Canyon wreck caused massive pollution; and the People's Party emerged in 1973 (later the Green Party) standing 53 candidates in 1979",
        feedback: "Photos of Earth from space highlighted its fragility. David Attenborough's 'Life on Earth' showed the beauty of the natural world. The 1967 Torrey Canyon wreck caused massive pollution in SW England. Greenpeace UK was founded in 1977. The People's Party (later Green Party) stood 53 candidates in the 1979 election."
    },
    {
        topic: "Society in the 1970s",
        question: "What percentage of women's wages compared to men's did women earn in 1970, and how had this changed by 1977?",
        options: ["From 45% in 1970 to 55% in 1977", "From 75% in 1970 to 85% in 1977", "From 50% in 1970 to 65% in 1977", "From 59% in 1970 to 70% in 1977"],
        answer: "From 59% in 1970 to 70% in 1977",
        feedback: "Women's wages rose from 59% of men's in 1970 to 70% by 1977 following the Equal Pay Act and Sex Discrimination Act - progress, but still far from equality. The Equal Opportunities Commission set up to enforce the law was largely toothless, completing only 9 investigations in 8 years."
    }
]

const usQs = [
    {
        topic: "Reconstruction",
        question: "When was the Freedmen's Bureau established, and what was its original intended duration?",
        options: ["1863, three years", "1867, five years", "1865, one year", "1870, two years"],
        answer: "1865, one year",
        feedback: "The Freedmen's Bureau was set up in 1865 to help former slaves with education and employment. It was only supposed to run for one year but was later extended to five years."
    },
    {
        topic: "Civil War",
        question: "How many states seceded from the Union to form the Confederacy?",
        options: ["9", "13", "7", "11"],
        answer: "11",
        feedback: "A total of 11 states seceded from the Union and set up the Confederacy."
    },
    {
        topic: "Civil War",
        question: "Approximately what percentage of the US population died in the Civil War?",
        options: ["1%", "2%", "5%", "0.5%"],
        answer: "2%",
        feedback: "At least 620,000 soldiers died - roughly 2% of the population in 1861."
    },
    {
        topic: "Civil War",
        question: "How did casualties at the Battle of Antietam compare to American deaths at D-Day?",
        options: ["Twice as many", "Half as many", "Three times as many", "Roughly equal"],
        answer: "Three times as many",
        feedback: "The number of casualties in a single day at Antietam was three times the American deaths at D-Day."
    },
    {
        topic: "Civil War",
        question: "What fraction of Mississippi's state revenue in 1865 was spent on artificial limbs?",
        options: ["1/3", "1/10", "1/2", "1/5"],
        answer: "1/5",
        feedback: "Mississippi spent one fifth of its entire state revenue in 1865 on artificial limbs, illustrating the devastating human cost of the Civil War on the South."
    },
    {
        topic: "Civil War",
        question: "By how much did the North's wealth increase over the course of the 1860s?",
        options: ["Over 75%", "Over 100%", "Over 50%", "Over 25%"],
        answer: "Over 50%",
        feedback: "The North's wealth increased by over 50% over the course of the 1860s, while the South was left economically devastated."
    },
    {
        topic: "Civil War",
        question: "How much had the South invested in slaves in 1860?",
        options: ["$1 billion", "$5 billion", "$3.5 billion", "$2 billion"],
        answer: "$3.5 billion",
        feedback: "Southern investment in slaves stood at $3.5 billion in 1860. After the Civil War and abolition, that investment became entirely worthless."
    },
    {
        topic: "Civil War",
        question: "Where did Robert E. Lee surrender to Ulysses S. Grant in April 1865?",
        options: ["Richmond, Virginia", "Petersburg, Virginia", "Gettysburg, Pennsylvania", "Appomattox Court House"],
        answer: "Appomattox Court House",
        feedback: "In April 1865, Robert E. Lee surrendered to Ulysses S. Grant at Appomattox Court House, effectively ending the Civil War."
    },
    {
        topic: "Reconstruction",
        question: "What did Lincoln's 10% Plan of April 1864 require for a rebel state to be readmitted?",
        options: ["50% of electorate pledge loyalty", "All citizens renounce slavery formally", "A new state constitution approved by Congress", "10% of electorate pledge future loyalty to the US"],
        answer: "10% of electorate pledge future loyalty to the US",
        feedback: "Under the 10% Plan, rebel states could be readmitted if 10% of the electorate agreed to future allegiance to the US and supported existing acts regarding slavery."
    },
    {
        topic: "Reconstruction",
        question: "What did the Radical Republicans' Wade-Davis Bill require, in contrast to Lincoln's 10% Plan?",
        options: ["5% of electorate to pledge loyalty", "Full citizenship for all freed slaves immediately", "Military tribunals for Confederate leaders", "50% of electorate to take a tougher oath, excluding ex-Confederates from government"],
        answer: "50% of electorate to take a tougher oath, excluding ex-Confederates from government",
        feedback: "The Radical Republicans' Wade-Davis Bill required 50% of the electorate to take a much tougher loyalty oath and excluded ex-Confederates from roles in government."
    },
    {
        topic: "Reconstruction",
        question: "Why did Andrew Johnson veto the 1866 Civil Rights Act?",
        options: ["He believed it was too lenient on the South", "He opposed equal pay for freed slaves", "He felt Congress had no authority over citizenship", "He argued it undermined the federal-state balance by giving citizenship to all born in the US"],
        answer: "He argued it undermined the federal-state balance by giving citizenship to all born in the US",
        feedback: "Johnson vetoed the 1866 Civil Rights Act - which gave citizenship to all born in the US - arguing it undermined the federal-state balance."
    },
    {
        topic: "Reconstruction",
        question: "By how many votes did Andrew Johnson escape conviction at his impeachment trial?",
        options: ["5 votes", "3 votes", "1 vote", "10 votes"],
        answer: "1 vote",
        feedback: "Johnson escaped impeachment by just one vote after an 11-week trial, having promised to enforce Reconstruction acts and stop attacking Congress publicly."
    },
    {
        topic: "Reconstruction",
        question: "What did the 15th Amendment of 1869 guarantee?",
        options: ["Abolition of slavery across the US", "Citizenship for all born in the US", "Equal pay regardless of race", "Voting rights could not be denied based on race, color or previous servitude"],
        answer: "Voting rights could not be denied based on race, color or previous servitude",
        feedback: "The 15th Amendment gave voting rights to all male freedmen - the right to vote could not be denied on the basis of race, color, or previous servitude."
    },
    {
        topic: "Reconstruction",
        question: "Which Supreme Court case weakened the 14th Amendment by preventing individuals being prosecuted for civil rights violations?",
        options: ["US v Reese", "Marbury v Madison", "Plessy v Ferguson", "Cruikshank v US"],
        answer: "Cruikshank v US",
        feedback: "Cruikshank v US undermined the 14th Amendment by ruling that individuals could not be prosecuted for civil rights violations, severely limiting federal protection of Black Americans."
    },
    {
        topic: "Reconstruction",
        question: "What was the outcome of the 1876 presidential election compromise?",
        options: ["Democrats won the presidency in exchange for civil rights protections", "Grant was given a third term in office", "The election was re-run in disputed Southern states", "Hayes took the presidency provided Republicans withdrew from the South"],
        answer: "Hayes took the presidency provided Republicans withdrew from the South",
        feedback: "Hayes won the electoral college 184 to 165. As a compromise, he took the presidency on the condition that Republicans withdrew from the South - effectively ending Reconstruction."
    },
    {
        topic: "Reconstruction",
        question: "How did Black political representation change between Reconstruction and the end of the century?",
        options: ["It stayed roughly the same throughout the period", "It grew as African Americans gained political experience", "It was never significant even during Reconstruction", "17 Black Americans served in Congress and 600 in state legislatures during Reconstruction, falling to a few scattered local officials by century's end"],
        answer: "17 Black Americans served in Congress and 600 in state legislatures during Reconstruction, falling to a few scattered local officials by century's end",
        feedback: "During Reconstruction, 17 African Americans served in Congress and 600 in state legislatures. By the end of the century this had fallen to just a few scattered local officials, reflecting the rollback of Black political power."
    },
    {
        topic: "Reconstruction",
        question: "What was the 1873 Colfax Massacre?",
        options: ["Federal troops massacred a KKK gathering in Louisiana", "Union soldiers fired on white supremacist rioters in South Carolina", "A massacre of sharecroppers by plantation owners in Mississippi", "A mob of 150-300 white men including KKK massacred a Black militia defending a courthouse after a disputed election"],
        answer: "A mob of 150-300 white men including KKK massacred a Black militia defending a courthouse after a disputed election",
        feedback: "After a disputed election, a Black militia defended a courthouse fearing a Democratic takeover. A mob of 150-300 white men including KKK members massacred them - as many as 153 may have died."
    },
    {
        topic: "Reconstruction",
        question: "What did US v Reese open the door to?",
        options: ["Federal prosecution of the KKK", "Segregation in public schools", "Re-admission of Confederate states without conditions", "Biased literacy tests and poll taxes to deny African Americans the vote"],
        answer: "Biased literacy tests and poll taxes to deny African Americans the vote",
        feedback: "US v Reese weakened the enforcement acts and the 15th Amendment, allowing denial of the vote outside of race, color, or previous servitude - opening the floor for biased literacy tests, poll taxes, and other disenfranchisement tactics."
    },
    {
        topic: "Reconstruction",
        question: "What was the KKK's origin and early membership estimate?",
        options: ["Founded by Union veterans in Ohio 1865, 100K members", "Founded in Mississippi 1868, 200K members by 1870", "Started by plantation owners in Georgia 1865, 300K members", "Started by Confederate veterans in Tennessee 1866; Nathan Bedford Forrest estimated over 500K members by 1867"],
        answer: "Started by Confederate veterans in Tennessee 1866; Nathan Bedford Forrest estimated over 500K members by 1867",
        feedback: "The KKK was started by Confederate veterans in Tennessee in 1866. Nathan Bedford Forrest, head of the Klan in 1867, estimated more than 500,000 members in the South."
    },
    {
        topic: "Reconstruction",
        question: "What factors caused Northern enthusiasm for Reconstruction to wane by the early 1870s?",
        options: ["Military success suppressing the KKK made Reconstruction seem complete", "Radical Republicans lost control of Congress in the 1870 midterms", "Grant publicly abandoned Reconstruction policy in 1872", "Corruption under Grant, the Panic of 1873, and Northern disassociation from the Black struggle in the South"],
        answer: "Corruption under Grant, the Panic of 1873, and Northern disassociation from the Black struggle in the South",
        feedback: "Corruption under Grant fouled the political atmosphere, the Panic of 1873 turned Northern attention to economic problems, and many Northern whites had little personal connection to the African American struggle in the South."
    },
    {
        topic: "Gilded Age",
        question: "What share of American wealth did the richest 9% of Americans own in 1890?",
        options: ["51%", "81%", "61%", "71%"],
        answer: "71%",
        feedback: "By 1890, the richest 9% of Americans owned 71% of all wealth, illustrating the extreme inequality of the Gilded Age."
    },
    {
        topic: "Gilded Age",
        question: "By what point had the US surpassed Britain as the world's leading producer of manufactured goods and steel?",
        options: ["By 1870", "By 1900", "By 1913", "By the middle of the 1880s"],
        answer: "By the middle of the 1880s",
        feedback: "By the middle of the 1880s, the US had surpassed Britain as the world's leading producer of manufactured goods and steel - a remarkable rise from being a second-rate power in 1860."
    },
    {
        topic: "Gilded Age",
        question: "What price did Carnegie sell his business to J.P. Morgan for, and when?",
        options: ["$200 million in 1900", "$350 million in 1905", "$480 million in 1913", "$600 million in 1915"],
        answer: "$480 million in 1913",
        feedback: "Carnegie sold his business to J.P. Morgan in 1913 for $480 million, one of the largest business transactions in history at the time."
    },
    {
        topic: "Gilded Age",
        question: "What share of American oil did Rockefeller control by the 1880s, and what was his fortune by 1889?",
        options: ["A quarter of oil; $50 million fortune", "A third of oil; $100 million fortune", "Three quarters of oil; $400 million fortune", "Half of American oil; $200 million fortune"],
        answer: "Half of American oil; $200 million fortune",
        feedback: "By the 1880s Rockefeller controlled half of all American oil. By 1889 his fortune stood at $200 million."
    },
    {
        topic: "Gilded Age",
        question: "What was the Credit Mobilier scandal?",
        options: ["Jay Gould and Jim Fisk manipulated the gold market with presidential connections", "Congressmen voted themselves major salary increases paid for by taxpayers", "Railroad companies colluded to fix freight rates across state lines", "12 members of Congress accepted bribes from Credit Mobilier and agreed to ignore its shady dealings"],
        answer: "12 members of Congress accepted bribes from Credit Mobilier and agreed to ignore its shady dealings",
        feedback: "The Credit Mobilier scandal revealed that 12 members of Congress had accepted bribes from the company and agreed to ignore its corrupt dealings, badly damaging public trust in government."
    },
    {
        topic: "Gilded Age",
        question: "What caused the Panic of 1873?",
        options: ["Collapse of Southern banks after Reconstruction ended", "Overproduction of wheat flooding international markets", "A run on gold following the 1869 Gold Scandal", "Wild financial speculation by railroad companies - Jay Cooke and Co went bankrupt"],
        answer: "Wild financial speculation by railroad companies - Jay Cooke and Co went bankrupt",
        feedback: "The Panic of 1873 was caused by wild financial speculation from railroad companies. When Jay Cooke and Co went bankrupt, NY stocks dropped 10% and 101 banks had failed by month's end."
    },
    {
        topic: "Gilded Age",
        question: "What was the 1883 Pendleton Act?",
        options: ["It broke up the Standard Oil monopoly", "It banned foreign contract labour entirely", "It created the Interstate Commerce Commission", "It established a merit system of promotions in the civil service"],
        answer: "It established a merit system of promotions in the civil service",
        feedback: "Chester Arthur pushed for the 1883 Pendleton Act, which created a merit system of promotions and continuity in the civil service, though it initially affected only around 10% of federal employees."
    },
    {
        topic: "Gilded Age",
        question: "What was the Great Railroad Strike of 1877?",
        options: ["Railroad owners locked out workers demanding safety improvements", "Chinese railroad workers struck for equal pay in California", "Railroad workers protested against the Pendleton Act reforms", "Over 100,000 workers struck across multiple states after repeated wage cuts, shutting down rail lines"],
        answer: "Over 100,000 workers struck across multiple states after repeated wage cuts, shutting down rail lines",
        feedback: "The 1877 Great Railroad Strike saw over 100,000 workers strike across multiple states after employers repeatedly cut wages to cover losses from the 1873 depression, shutting down rail lines nationwide."
    },
    {
        topic: "Gilded Age",
        question: "How did J.P. Morgan make his fortune?",
        options: ["He founded Standard Oil and monopolised the petroleum industry", "He built the transcontinental railroad and profited from land grants", "He manufactured steel and undercut Carnegie's prices nationally", "He inherited $12 million and increased his wealth through skills as a financier, helping create US Steel - the first $1 billion company"],
        answer: "He inherited $12 million and increased his wealth through skills as a financier, helping create US Steel - the first $1 billion company",
        feedback: "J.P. Morgan inherited $12 million and increased his fortunes through his skills as a financier. He was a major force behind the creation of large corporations, including US Steel - the first $1 billion company."
    },
    {
        topic: "Gilded Age",
        question: "How did the US economy grow between 1865 and 1898?",
        options: ["Coal production rose 400%, railway track mileage rose 300%", "Coal production rose 600%, railway track mileage rose 400%", "Coal production rose 200%, railway track mileage rose 800%", "Coal production rose 800%, railway track mileage rose 567%"],
        answer: "Coal production rose 800%, railway track mileage rose 567%",
        feedback: "Between 1865 and 1898, coal production rose 800% and railway track mileage rose 567%, reflecting the extraordinary pace of American industrialisation in the Gilded Age."
    },
    {
        topic: "Gilded Age",
        question: "Between 1895 and 1904, how many companies merged into giant corporations?",
        options: ["Over 5,000 companies merged into 50 corporations", "Over 25,000 companies merged into 200 corporations", "Over 10,000 companies merged into 100 corporations", "Over 18,000 companies merged into 157 giant corporations"],
        answer: "Over 18,000 companies merged into 157 giant corporations",
        feedback: "Between 1895 and 1904, over 18,000 companies merged into just 157 giant corporations, reflecting the massive consolidation of American industry during the Gilded Age."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "What did Plessy v Ferguson (1896) rule?",
        options: ["Segregation was unconstitutional under the 14th Amendment", "Literacy tests for voting were illegal under the 15th Amendment", "The 14th Amendment applied to private businesses directly", "Segregation was legal so long as accommodation was equal"],
        answer: "Segregation was legal so long as accommodation was equal",
        feedback: "In 1896, Plessy v Ferguson ruled that segregation was legal provided accommodation was equal - in practice, equality of facilities was often non-existent."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "What was the Mississippi 'understanding clause' of 1890?",
        options: ["African Americans had to prove they owned property before voting", "African Americans needed two white witnesses to register to vote", "Voters had to pay a $1 poll tax to access the ballot", "Voters had to give a reasonable interpretation of the constitution when read to them, determined by white registrars"],
        answer: "Voters had to give a reasonable interpretation of the constitution when read to them, determined by white registrars",
        feedback: "Mississippi's 1890 'understanding clause' required voters to give a reasonable interpretation of the constitution when it was read to them - judged entirely by white registrars, making it an effective tool for disenfranchising Black voters."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "How many people were lynched between 1882 and 1899?",
        options: ["Over 500 people lynched", "Over 1,000 people lynched", "Over 5,000 people lynched", "Over 2,500 people lynched"],
        answer: "Over 2,500 people lynched",
        feedback: "Between 1882 and 1899, over 2,500 men and women were lynched. In 1892 alone, 161 Black people were lynched."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "How did Booker T. Washington and W.E.B. Du Bois differ in approach?",
        options: ["Washington wanted political struggle; Du Bois favoured economic self-improvement", "Both agreed on economics but disagreed on the pace of change", "Washington wanted integration; Du Bois wanted separate Black institutions", "Washington emphasised self-help and economic advancement; Du Bois called him the 'Great Accommodator' and wanted active political struggle"],
        answer: "Washington emphasised self-help and economic advancement; Du Bois called him the 'Great Accommodator' and wanted active political struggle",
        feedback: "Booker T. Washington focused on self-help and economic advancement. Du Bois called Washington the 'Great Accommodator' and argued instead for active political struggle for civil rights."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "What were Black literacy rates before and after slavery?",
        options: ["Around 20-30% under slavery, rising to 70% by 1910", "Around 1-2% under slavery, rising to 30% by 1910", "Around 40% under slavery, rising to 80% by 1910", "Around 5-10% under slavery, rising to 50% by 1910"],
        answer: "Around 5-10% under slavery, rising to 50% by 1910",
        feedback: "Black literacy rates rose from around 5-10% under slavery to 50% by 1910, reflecting the enormous educational effort of African Americans in the post-Civil War decades despite systematic underfunding of Black schools."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "What was the Springfield Riot of 1908 and what did it lead to?",
        options: ["A race riot following a disputed election, leading to the 15th Amendment being enforced", "A labour riot linking race and class, leading to the formation of the AFL", "A massacre of sharecroppers, leading to federal anti-lynching legislation", "A racially motivated mob attacked Black neighbourhoods, leading to the formation of the NAACP in 1909"],
        answer: "A racially motivated mob attacked Black neighbourhoods, leading to the formation of the NAACP in 1909",
        feedback: "The Springfield Riot saw a racially motivated mob attack Black neighbourhoods following the arrest of two Black men. At least 6 people died and numerous homes were destroyed. It led to the formation of the NAACP in 1909."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "Between 1889 and 1929, how many people were lynched in the US and what proportion were Black?",
        options: ["Around 1,000 people; 50% were Black", "Around 2,000 people; 70% were Black", "Around 6,000 people; 90% were Black", "Nearly 4,000 people; 85% were Black"],
        answer: "Nearly 4,000 people; 85% were Black",
        feedback: "Between 1889 and 1929, nearly 4,000 people were lynched - 85% of them Black. Only 50 perpetrators were ever arrested and only 4 were sentenced."
    },
    {
        topic: "Westward Expansion",
        question: "How many acres could be claimed under the 1862 Homestead Act, and for how long did the land need to be cultivated?",
        options: ["80 acres for 3 years", "320 acres for 7 years", "240 acres for 4 years", "160 acres for 5 years"],
        answer: "160 acres for 5 years",
        feedback: "The 1862 Homestead Act offered 160 acres in any of 30 domain states, provided the land was cultivated continuously for 5 years. By the end of the Act, over 270 million acres had been claimed and settled."
    },
    {
        topic: "Westward Expansion",
        question: "What was the 1864 Sand Creek Massacre?",
        options: ["Sioux warriors attacked a US Army fort in Colorado", "A group of settlers were massacred by Comanche raiders in Texas", "US troops clashed with Lakota warriors at a reservation boundary", "700 untrained cavalry attacked an undefended Cheyenne tribe, killing and mutilating elderly men, women and children"],
        answer: "700 untrained cavalry attacked an undefended Cheyenne tribe, killing and mutilating elderly men, women and children",
        feedback: "The 1864 Sand Creek Massacre saw 700 untrained, ill-disciplined cavalry troops attack an undefended Cheyenne tribe, killing and mutilating elderly men, women and children - one of the most notorious atrocities of the Indian Wars."
    },
    {
        topic: "Westward Expansion",
        question: "What happened at the Battle of Little Bighorn?",
        options: ["General Sherman negotiated a peace treaty with Sitting Bull", "The US Army successfully rounded up the last Sioux holdouts", "Sitting Bull and Crazy Horse surrendered after being surrounded", "George Custer divided his force and attempted to encircle a Native encampment without waiting for the rest - his unit of 210 men was attacked and all were killed"],
        answer: "George Custer divided his force and attempted to encircle a Native encampment without waiting for the rest - his unit of 210 men was attacked and all were killed",
        feedback: "Custer divided his units into three and attempted to encircle the encampment without waiting for the rest of his force. His unit of 210 men came under attack and all were killed - the most famous US military defeat of the Indian Wars."
    },
    {
        topic: "Westward Expansion",
        question: "What did the 1887 Dawes Act do to Native American reservation land?",
        options: ["Doubled the size of reservations as compensation", "Granted full US citizenship to all tribal members immediately", "Required Native American children to attend federal boarding schools", "Carved reservations into 160-acre family allotments, with surplus land given to non-Native Americans - land dropped from 138 to 48 million acres by 1934"],
        answer: "Carved reservations into 160-acre family allotments, with surplus land given to non-Native Americans - land dropped from 138 to 48 million acres by 1934",
        feedback: "The Dawes Act carved reservation land into 160-acre allotments for each family head. The rest was declared surplus and given to non-Native Americans - reservation land dropped from 138 million to 48 million acres by 1934, a loss of 65%."
    },
    {
        topic: "Westward Expansion",
        question: "What happened at the Battle of Wounded Knee in 1890?",
        options: ["Native Americans successfully repelled a US Army attack and negotiated a peace treaty", "The last major battle of the Great Sioux War ended in Native American defeat", "The US Army suppressed a planned Native American uprising before it began", "Nervous 7th Cavalry fired into a group of Sioux - 200 Sioux died including many women and children, and 31 soldiers were killed"],
        answer: "Nervous 7th Cavalry fired into a group of Sioux - 200 Sioux died including many women and children, and 31 soldiers were killed",
        feedback: "The 1890 Battle of Wounded Knee saw nervous 7th Cavalry fire into a group of Sioux - 200 Sioux died, many of them women and children. 31 soldiers were also killed. Some describe it as an accidental battle; others as a massacre."
    },
    {
        topic: "Westward Expansion",
        question: "What ended the era of the open range cattle drives?",
        options: ["The invention of refrigerated railcars made long drives obsolete", "The closing of the frontier declared by the Census Bureau in 1890", "Federal legislation prohibited the long drive route entirely", "Two severe winters in 1885-87 killed possibly 90% of Western cattle, ruining thousands of cattlemen"],
        answer: "Two severe winters in 1885-87 killed possibly 90% of Western cattle, ruining thousands of cattlemen",
        feedback: "Two severe winters in 1885-87 resulted in the deaths of millions of Western cattle - possibly 90% of the total - ruining thousands of cattlemen including the Swan Land and Cattle Company of Wyoming."
    },
    {
        topic: "Westward Expansion",
        question: "What was Frederick Jackson Turner's 'Frontier Thesis'?",
        options: ["The West was a source of national division and should be governed separately", "Manifest Destiny required the US to expand beyond its continental borders", "The closing of the frontier would inevitably lead to social conflict in cities", "The West acted as a safety valve for discord, created self-reliant individuals, and was central to American identity and freedom"],
        answer: "The West acted as a safety valve for discord, created self-reliant individuals, and was central to American identity and freedom",
        feedback: "Frederick Jackson Turner's 1893 thesis argued that the West acted as a safety valve for discord and violence, created self-reliant individuals, and was a central part of America's identity of freedom."
    },
    {
        topic: "Westward Expansion",
        question: "What happened to the Buffalo population between 1800 and 1886?",
        options: ["Fell from 10 million to around 500,000", "Fell from 5 million to around 10,000", "Fell from 50 million to around 1 million", "Fell from 30 million to a point where the Smithsonian Institute could not find 25 good specimens"],
        answer: "Fell from 30 million to a point where the Smithsonian Institute could not find 25 good specimens",
        feedback: "In 1800 there were around 30 million Buffalo. By 1886 the Smithsonian Institute could not find 25 'good specimens' - the near-total extermination of the Buffalo was devastating to Native American Plains cultures."
    },
    {
        topic: "Immigration",
        question: "What was the purpose of the 1882 Chinese Exclusion Act?",
        options: ["It banned all Asian immigration permanently", "It required Chinese immigrants to pass a literacy test", "It limited Chinese workers to railroad construction only", "It banned Chinese immigration for 10 years"],
        answer: "It banned Chinese immigration for 10 years",
        feedback: "The Chinese Exclusion Act of 1882 banned Chinese immigration for 10 years. By the 1880s there were over 100,000 Chinese in the US, and organisations like the AFL under Samuel Gompers strongly opposed competition from Chinese labourers."
    },
    {
        topic: "Immigration",
        question: "What was the Chinese workers' strike of 1867?",
        options: ["500 Chinese workers struck in San Francisco demanding citizenship rights", "Chinese miners struck against unsafe conditions in Pennsylvania coal mines", "Chinese factory workers in New York struck demanding an end to child labour", "3,000 Chinese railroad workers struck demanding equal pay - the strike failed and their food supply was cut off in a remote area"],
        answer: "3,000 Chinese railroad workers struck demanding equal pay - the strike failed and their food supply was cut off in a remote area",
        feedback: "In 1867, 3,000 Chinese workers went on strike demanding equal pay - white workers were paid twice as much. The strike failed and their food supply was cut off in the remote area where they were working."
    },
    {
        topic: "Immigration",
        question: "What opened in 1892 and processed over 12 million arrivals in the following 62 years?",
        options: ["The Port of Boston immigration centre", "Castle Garden in New York", "The Port of Baltimore processing centre", "Ellis Island"],
        answer: "Ellis Island",
        feedback: "Ellis Island opened in 1892 and over the following 62 years more than 12 million immigrants arrived there, facing interrogation, medical inspection, fumigation of clothing, and separation of men and women."
    },
    {
        topic: "Immigration",
        question: "How many immigrants arrived in the US between 1881 and 1900?",
        options: ["3 million", "6 million", "14 million", "9 million"],
        answer: "9 million",
        feedback: "9 million immigrants arrived between 1881 and 1900, with a further 8 million in the preceding two decades. Over 14 million more arrived between 1901 and 1920."
    },
    {
        topic: "Immigration",
        question: "What was the Haymarket Bomb outrage of 1886?",
        options: ["Railroad workers bombed a scab labour train in Chicago", "Anarchists bombed the New York Customs House in protest at the spoils system", "A bomb at a Carnegie steel plant killed several workers during a strike", "A peaceful protest turned violent when a bomb was thrown at police, fatally linking the Knights of Labor with violence and radicalism"],
        answer: "A peaceful protest turned violent when a bomb was thrown at police, fatally linking the Knights of Labor with violence and radicalism",
        feedback: "The 1886 Haymarket Bomb outrage saw a peaceful protest turn violent when a bomb was thrown at police, killing several officers. This fatally linked the Knights of Labor with violence and radicalism in the public mind."
    },
    {
        topic: "Immigration",
        question: "What distinguished the AFL from the Knights of Labor?",
        options: ["The AFL was more radical and included unskilled workers and immigrants", "The AFL supported political action while the Knights focused only on wages", "The AFL was founded earlier and was the more established union body", "The AFL admitted only skilled white men and focused on wages and hours, while the Knights of Labor was inclusive to immigrants"],
        answer: "The AFL admitted only skilled white men and focused on wages and hours, while the Knights of Labor was inclusive to immigrants",
        feedback: "Led by Samuel Gompers, the AFL admitted only skilled white men and focused on higher wages and shorter working days, winning recognition and collective bargaining agreements from employers. The Knights of Labor was more inclusive, welcoming immigrants."
    },
    {
        topic: "US Imperialism",
        question: "What was the USS Maine incident?",
        options: ["A US warship was deliberately sunk by Spain to provoke a war", "Spain attacked the USS Maine after the US imposed trade sanctions on Cuba", "The USS Maine accidentally ran aground and was seized by Spanish forces", "An explosion sank the USS Maine in Havana harbour in February 1898, killing 266 sailors - the press quickly blamed Spain"],
        answer: "An explosion sank the USS Maine in Havana harbour in February 1898, killing 266 sailors - the press quickly blamed Spain",
        feedback: "On 15 February 1898, an explosion sank the USS Maine, killing 266 sailors. The press was quick to blame Spain - 'Remember the Maine, to hell with Spain!' - helping to push the US towards war."
    },
    {
        topic: "US Imperialism",
        question: "What territories did the US acquire following the Spanish-American War?",
        options: ["Cuba, Puerto Rico and Guam", "Hawaii, Guam and the Philippines", "Cuba, Hawaii and Puerto Rico", "The Philippines, Puerto Rico and Guam"],
        answer: "The Philippines, Puerto Rico and Guam",
        feedback: "The 1898 Teller Amendment forswore annexation of Cuba. The US acquired the Philippines, Puerto Rico and Guam, and secured a permanent naval base in Cuba. The Philippines cost $20 million."
    },
    {
        topic: "US Imperialism",
        question: "What was the Roosevelt Corollary?",
        options: ["An extension of the Burlingame Treaty governing trade with Latin America", "A trade agreement with Latin American nations guaranteeing American commercial access", "A military alliance with Britain and France to counter European colonialism", "An extension of the Monroe Doctrine asserting the US right to intervene in cases of chronic wrongdoing in Latin America"],
        answer: "An extension of the Monroe Doctrine asserting the US right to intervene in cases of chronic wrongdoing in Latin America",
        feedback: "The Roosevelt Corollary was an extension of the Monroe Doctrine asserting that the US had the right to intervene in Latin America in cases of 'chronic wrongdoing or impotence'. It was used to justify taking over Dominican Republic finances in 1905 and military intervention in Nicaragua in 1912."
    },
    {
        topic: "US Imperialism",
        question: "How did the US secure the Panama Canal Zone?",
        options: ["It purchased the rights from Colombia for $50 million", "It built the canal on neutral territory after a multilateral treaty", "It seized the canal zone from Spain following the Spanish-American War", "It backed Panama's independence from Colombia in 1903 and secured the canal zone for $10 million plus annual rent"],
        answer: "It backed Panama's independence from Colombia in 1903 and secured the canal zone for $10 million plus annual rent",
        feedback: "The US backed Panama's independence from Colombia in 1903, sending the cruiser Nashville to prevent Colombians retaking control. The US secured control of the canal zone for $10 million and $250,000 annual rent. The canal opened in 1914."
    },
    {
        topic: "US Imperialism",
        question: "Why did the US annex Hawaii in 1898?",
        options: ["To prevent a Japanese takeover of the islands", "To establish a naval base following the lessons of the Spanish-American War", "Congress voted for annexation after a Hawaiian request for statehood", "Hawaii had become economically dependent on the US since 1875 - by the 1890s 3,000 American sugar growers dominated the island - and it was a vital stopping station to the Far East"],
        answer: "Hawaii had become economically dependent on the US since 1875 - by the 1890s 3,000 American sugar growers dominated the island - and it was a vital stopping station to the Far East",
        feedback: "Since 1875 the US had imported Hawaiian sugar duty free, making Hawaii increasingly dependent on the US economy. By the 1890s, 3,000 American sugar growers out of 90,000 Hawaiians dominated the island. Hawaii was also a vital stopping station on the way to the Far East."
    },
    {
        topic: "Progressive Era",
        question: "What was President Roosevelt's domestic policy agenda branded as?",
        options: ["The New Deal", "The Fair Deal", "The New Nationalism", "The Square Deal"],
        answer: "The Square Deal",
        feedback: "Roosevelt's domestic policy agenda was called the Square Deal - he was the first president to brand his domestic agenda, setting a trend for future administrations."
    },
    {
        topic: "Progressive Era",
        question: "What action did Roosevelt take against the Northern Securities Company in 1902?",
        options: ["He personally negotiated a merger to create a regulated monopoly", "He asked Congress to pass a law breaking up all railroad monopolies", "He fined the company but allowed it to continue under new regulations", "He instructed attorney general Philander Knox to start anti-trust proceedings - the Supreme Court declared the company illegal in 1904 and dissolved it"],
        answer: "He instructed attorney general Philander Knox to start anti-trust proceedings - the Supreme Court declared the company illegal in 1904 and dissolved it",
        feedback: "In 1902 TR instructed attorney general Philander C. Knox to start proceedings against the Northern Securities company - involving taking on both J.P. Morgan and Rockefeller. In 1904, the Supreme Court declared the company illegal and it was dissolved. TR went on to 44 anti-trust prosecutions."
    },
    {
        topic: "Progressive Era",
        question: "What did the 1906 Hepburn Act do?",
        options: ["Banned child labour in factories across the US", "Established the first federal income tax on earnings", "Required all meat to be federally inspected before sale", "Gave a federal commission power to inspect railroad books and lay down maximum rates"],
        answer: "Gave a federal commission power to inspect railroad books and lay down maximum rates",
        feedback: "The 1906 Hepburn Act gave a federal government commission the power to inspect the books of railroad companies and lay down maximum rates - a major step in protecting the public from railroad monopoly power."
    },
    {
        topic: "Progressive Era",
        question: "How did Roosevelt resolve the 1902 Anthracite Coal Strike?",
        options: ["He sided with employers and threatened to use troops against the strikers", "He passed emergency legislation forcing both sides to accept federal arbitration", "He personally negotiated a deal with union leaders without involving employers", "He summoned both sides and threatened to seize the mines if employers refused arbitration - employers raised wages and offered 9-hour days"],
        answer: "He summoned both sides and threatened to seize the mines if employers refused arbitration - employers raised wages and offered 9-hour days",
        feedback: "In 1902, employers had locked out striking miners. TR summoned both sides and threatened to send in troops if employers refused arbitration. The employers ultimately raised wages and offered 9-hour days - a landmark moment in presidential intervention in labour disputes."
    },
    {
        topic: "Progressive Era",
        question: "Which journalist is most associated with exposing Standard Oil as a muckraker?",
        options: ["Upton Sinclair", "Lincoln Steffens", "Jacob Riis", "Ida Tarbell"],
        answer: "Ida Tarbell",
        feedback: "Ida Tarbell was one of the leading muckraking journalists, famous for exposing Standard Oil. Upton Sinclair wrote The Jungle exposing Chicago meatpacking, and Lincoln Steffens exposed political corruption in America's cities."
    },
    {
        topic: "Progressive Era",
        question: "What was Taft's 'dollar diplomacy'?",
        options: ["A domestic policy encouraging Americans to invest in Liberty Bonds", "A tariff policy tying American trade agreements to the gold standard", "A plan to use American financial aid to stabilise European post-war economies", "A foreign policy encouraging US investments in Latin America and the Far East, using the government to promote US commercial interests abroad"],
        answer: "A foreign policy encouraging US investments in Latin America and the Far East, using the government to promote US commercial interests abroad",
        feedback: "Dollar diplomacy was Taft's foreign policy - encouraging US investments in South and Central America, the Caribbean and the Far East, and using government officials to promote the sale of American products overseas."
    },
    {
        topic: "Progressive Era",
        question: "What split the Republican Party and led to the 1912 election result?",
        options: ["A disagreement over the gold standard between eastern and western Republicans", "Taft's dismissal of conservation policies alienated western Republicans", "A scandal involving Taft's cabinet drove progressive Republicans to support TR", "TR returned to run against Taft after growing frustration with his conservatism - TR ran as a Progressive, splitting the Republican vote. Result: Democrats 41.8%, Progressives 27.4%, Republicans 23.3%"],
        answer: "TR returned to run against Taft after growing frustration with his conservatism - TR ran as a Progressive, splitting the Republican vote. Result: Democrats 41.8%, Progressives 27.4%, Republicans 23.3%",
        feedback: "TR was unhappy with Taft's efforts and returned to run again. Unable to win the Republican nomination, he ran as a Progressive (National Progressive Party). The result: Democrats 41.8%, Progressives 27.4%, Republicans 23.3% - handing Wilson the presidency."
    },
    {
        topic: "World War I",
        question: "What was the Zimmermann Telegram?",
        options: ["A German pledge to resume unrestricted submarine warfare against Allied shipping", "An intercepted German order to sink the Lusitania in 1915", "Germany's offer of a ceasefire based on Wilson's 14 Points", "A secret German proposal to Mexico - Germany would help Mexico recover Texas, Arizona and New Mexico if the US declared war"],
        answer: "A secret German proposal to Mexico - Germany would help Mexico recover Texas, Arizona and New Mexico if the US declared war",
        feedback: "German Foreign Secretary Arthur Zimmermann sent a secret telegram to the Mexican German Ambassador proposing an alliance - Germany would help Mexico recover Texas, Arizona and New Mexico if the US went to war. It was intercepted by British intelligence and helped push the US into the war."
    },
    {
        topic: "World War I",
        question: "What was the financial cost of American participation in World War I?",
        options: ["$10 billion in total war costs", "$20 billion in war costs with no loans to allies", "$50 billion including post-war reconstruction costs", "$33.5 billion in war costs plus $7 billion lent to allies"],
        answer: "$33.5 billion in war costs plus $7 billion lent to allies",
        feedback: "The war cost $33.5 billion plus $7 billion lent to allies. Two thirds of the cost was raised through war bonds - liberty and victory loans - with celebrities like Charlie Chaplin deployed to encourage bond purchases."
    },
    {
        topic: "World War I",
        question: "What were Wilson's 14 Points?",
        options: ["A list of German war crimes submitted to the Paris Peace Conference", "A set of conditions Germany had to meet before the US would end hostilities", "A programme for post-war European reconstruction funded by American loans", "Peace proposals covering collective security, disarmament, open diplomacy, free trade, and national self-determination"],
        answer: "Peace proposals covering collective security, disarmament, open diplomacy, free trade, and national self-determination",
        feedback: "Wilson's 14 Points addressed themes of collective security, disarmament, open diplomacy, free trade, national self-determination, and maintaining orderly international relations - and formed the basis on which Germany agreed to the ceasefire."
    },
    {
        topic: "World War I",
        question: "What was Senator Henry Cabot Lodge's core objection to the Treaty of Versailles?",
        options: ["He believed the reparations on Germany were too harsh and would cause instability", "He thought the League gave too much power to Britain and France", "He opposed the principle of national self-determination as destabilising", "He objected to Article X, which obligated League members to defend one another and could override Congress's war powers"],
        answer: "He objected to Article X, which obligated League members to defend one another and could override Congress's war powers",
        feedback: "Lodge's key objection was Article X, which obligated League of Nations members to defend one another - potentially allowing the League to override Congress's constitutional war powers. Wilson refused to accept any amendments and the Senate voted twice against ratification."
    },
    {
        topic: "World War I",
        question: "What was the 'Red Summer' of 1919?",
        options: ["A wave of communist-inspired strikes across American industrial cities", "The Palmer Raids targeting radical immigrants across 36 cities", "The Seattle General Strike spreading to other cities across the country", "Mob violence erupting in over 36 cities - 12 veterans lynched, 76 African Americans lynched by year's end"],
        answer: "Mob violence erupting in over 36 cities - 12 veterans lynched, 76 African Americans lynched by year's end",
        feedback: "Mob violence erupted in over 36 cities in 1919 - the 'Red Summer'. Twelve veterans were dead from lynching and 76 African Americans had been lynched by year's end. An effort by Black sharecroppers in Elaine, Arkansas to organise for better wages led to a massacre with 200 African Americans dead."
    },
    {
        topic: "World War I",
        question: "What was the sinking of the Lusitania in 1915?",
        options: ["A US Navy vessel sunk by German forces in the North Atlantic", "A German supply ship sunk by a British destroyer, drawing the US into the conflict", "A neutral American cargo ship sunk by Germany, triggering a diplomatic crisis", "A British luxury liner sunk by a German submarine - over 1,000 died including 129 Americans. Germany temporarily called off unrestricted U-boat warfare but resumed it in 1917"],
        answer: "A British luxury liner sunk by a German submarine - over 1,000 died including 129 Americans. Germany temporarily called off unrestricted U-boat warfare but resumed it in 1917",
        feedback: "In 1915, the British luxury liner Lusitania was sunk by a German submarine - over 1,000 people died, including 129 Americans. Germany temporarily called off unrestricted U-boat warfare in response to American outrage, before resuming it in 1917."
    },
    {
        topic: "World War I and African Americans",
        question: "What were conditions like for African American soldiers in World War I?",
        options: ["African Americans were fully integrated into all units and served with distinction", "African American officers commanded integrated units at the front", "The War Department gave African American units the most dangerous frontline assignments", "Rigid segregation - most Black troops were assigned to labour duties, often without proper training. AA women were not allowed to nurse abroad"],
        answer: "Rigid segregation - most Black troops were assigned to labour duties, often without proper training. AA women were not allowed to nurse abroad",
        feedback: "There was rigid segregation in the army. Most African American troops were assigned to Services of Supply (SOS) units - retrieving dead soldiers, building roads, working at docks. African American women were not allowed to nurse abroad. White Southern officers accused the 92nd Division of being 'rapists, malcontents and incompetent soldiers'."
    },
    {
        topic: "World War I and African Americans",
        question: "What was the 'Harlem Hell-fighters' regiment's achievement in World War I?",
        options: ["They were the first all-Black unit to land in France", "They captured the most enemy soldiers of any American regiment in the war", "They were awarded the Medal of Honor for their defence of the Argonne Forest", "They served 191 days at the front - more than any other American outfit - never lost a foot of ground, and members were awarded the French Croix de Guerre"],
        answer: "They served 191 days at the front - more than any other American outfit - never lost a foot of ground, and members were awarded the French Croix de Guerre",
        feedback: "The 'Harlem Hell-fighters' served 191 days at the front - more than any other American outfit. They never lost a foot of ground to the Germans. Members were awarded the French Croix de Guerre."
    },
    {
        topic: "Prohibition",
        question: "When did the 18th Amendment come into force, banning alcohol?",
        options: ["January 1917", "January 1919", "January 1921", "January 1920"],
        answer: "January 1920",
        feedback: "The 18th Amendment was passed in January 1919 and came into force in January 1920. Less than an hour after spirits became illegal, armed men robbed a Chicago freight train of thousands of dollars' worth of whiskey."
    },
    {
        topic: "Prohibition",
        question: "How widespread was prohibition before the 18th Amendment?",
        options: ["Only a handful of rural counties were dry before 1919", "Only Southern states had local prohibition before the federal amendment", "Prohibition was exclusively an urban phenomenon before the federal amendment", "40% of counties were dry by 1906 and a full dozen states by 1909"],
        answer: "40% of counties were dry by 1906 and a full dozen states by 1909",
        feedback: "Prohibition had significant grassroots support well before the 18th Amendment - 40% of the nation's counties were dry by 1906, and a full dozen states had gone dry by 1909."
    },
    {
        topic: "Red Scare",
        question: "What were the Palmer Raids of 1919-20?",
        options: ["Federal raids on KKK headquarters across the South following racial violence", "Army raids on communist cells in major industrial cities following the Seattle Strike", "Congressional investigations into radical trade union activity following the Homestead Strike", "Attorney General Palmer directed raids across 36 cities - 6,000 arrested, 556 immigrants deported. The Supreme Court later ruled evidence gathered was illegal"],
        answer: "Attorney General Palmer directed raids across 36 cities - 6,000 arrested, 556 immigrants deported. The Supreme Court later ruled evidence gathered was illegal",
        feedback: "The 1919-20 Palmer Raids saw Attorney General Palmer direct raids across 36 cities - 6,000 were arrested, radicals were seized nationwide, and 556 immigrants were deported. The Supreme Court later ruled that evidence gathered during the raids was illegal."
    },
    {
        topic: "Red Scare",
        question: "What factors fuelled the Red Scare of 1919?",
        options: ["The discovery of a Soviet spy network inside the US government", "A series of communist election victories in state legislatures across the country", "German propaganda campaigns targeting American workers after the war ended", "The 1917 Bolshevik Revolution, cost of living rising 99% between 1913-19, rapid demobilisation of 4 million troops, bomb attacks by anarchists, and widespread strikes"],
        answer: "The 1917 Bolshevik Revolution, cost of living rising 99% between 1913-19, rapid demobilisation of 4 million troops, bomb attacks by anarchists, and widespread strikes",
        feedback: "The Red Scare was fuelled by the 1917 Bolshevik Revolution, the cost of living rising 99% between 1913-19, rapid demobilisation of 4 million troops with inadequate planning, anarchist bomb attacks, and the Seattle General Strike."
    },
    {
        topic: "Harding and Normalcy",
        question: "What was Warren Harding's appeal in the 1920 election?",
        options: ["He promised to continue Wilson's progressive internationalism at home and abroad", "He promised to crush the Red Scare with firm military action against radicals", "He ran on expanding civil rights following the race riots of 1919", "He called for 'healing not heroics, normalcy not revolution' - higher tariffs, lower taxes, fewer immigrants, and rejection of the League of Nations"],
        answer: "He called for 'healing not heroics, normalcy not revolution' - higher tariffs, lower taxes, fewer immigrants, and rejection of the League of Nations",
        feedback: "Harding called for 'healing not heroics, normalcy not revolution, serenity not surgery'. His policies appealed broadly after years of war, red scare, race riots and economic hardship. He won 61% of the popular vote."
    },
    {
        topic: "Populism",
        question: "What was W.J.B.'s famous 'Cross of Gold' speech about?",
        options: ["A call to break up the banking monopolies controlling American agriculture", "A call for the nationalisation of railroad companies to protect farmers from exploitation", "A demand for free trade to help farming communities access global markets freely", "An attack on the gold standard and how it destroyed opportunity for farming communities, pulling populist voters towards the Democrat Party"],
        answer: "An attack on the gold standard and how it destroyed opportunity for farming communities, pulling populist voters towards the Democrat Party",
        feedback: "W.J.B.'s famous speech - 'You shall not crucify mankind upon a cross of gold' - addressed the gold standard and how it destroyed opportunity for farming communities, making him the vehicle pulling populist voters to the Democrat Party."
    },
    {
        topic: "Populism",
        question: "How did the Populist Party perform in the 1892 election?",
        options: ["They swept the South but failed to make inroads in the North or West", "They merged with the Democratic Party before the election took place", "They won just a handful of local races and failed to elect anyone to Congress", "Their presidential candidate James B. Weaver won 1 million votes, they won 22 electoral votes and 5 of 7 House seats in Kansas"],
        answer: "Their presidential candidate James B. Weaver won 1 million votes, they won 22 electoral votes and 5 of 7 House seats in Kansas",
        feedback: "The 1892 election was a significant early success for the Populists - James B. Weaver won 1 million votes for president, the party won 22 electoral votes and 5 of 7 House seats in Kansas."
    }
]


onStart();

//event listeners
document.getElementById("us").addEventListener("click", usButtonPress);
document.getElementById("britain").addEventListener("click", britainButtonPress);
document.getElementById("nextQButton").addEventListener("click", nextQuestion);
document.getElementById("op1").addEventListener("click", () => selectAnswer(0));
document.getElementById("op2").addEventListener("click", () => selectAnswer(1));
document.getElementById("op3").addEventListener("click", () => selectAnswer(2));
document.getElementById("op4").addEventListener("click", () => selectAnswer(3));

//fix button styling
//so too vast a proportion of the answers are the 2nd option
//british ones are also too lengthy need to be more like US ones

//implement more Qs for both Britain and US