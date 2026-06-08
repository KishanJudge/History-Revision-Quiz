window.onerror = function(msg, src, line, col, err) {
    alert(
        "JS Error:\n" +
        msg +
        "\nLine: " + line
    );
};

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
        document.getElementById("feedback").style.color = "#a8d5b5";
        document.getElementById("feedback").textContent = ("CORRECT - " + question.feedback);
        }
        else {
            document.getElementById("feedback").style.color = "#f38a8a";
            document.getElementById("feedback").textContent = ("INCORRECT - " + question.feedback);
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

const britishQs = [
    {
        topic: "Conservative Revival 1945-51",
        question: "What were the election results in 1945, 1950 and 1951?",
        options: ["1945: Labour 100 seat maj; 1950: 15 seat maj; 1951: Tories won 30 seat maj", "1945: Labour 80 seat maj; 1950: 2 seat maj; 1951: Tories won 25 seat maj", "1945: Labour 146 seat maj; 1950: 5 seat maj; 1951: Tories won 16 seat maj", "1945: Labour 200 seat maj; 1950: 20 seat maj; 1951: Tories won 10 seat maj"],
        answer: "1945: Labour 146 seat maj; 1950: 5 seat maj; 1951: Tories won 16 seat maj",
        feedback: "Labour won a 146-seat majority in 1945. By 1950 this fell to 5 seats, and in 1951 the Tories won a 16-seat majority despite receiving 0.8% fewer votes - a quirk of first past the post."
    },
    {
        topic: "Conservative Revival 1945-51",
        question: "Who headed Conservative structural reorganisation after 1945 and what did it achieve?",
        options: ["Lord Beaverbrook - rebuilt the press wing and expanded membership to 5 million", "Harold Macmillan - reorganised constituency associations and introduced central funding", "Lord Woolton - around 3 million members by the early 1950s", "Rab Butler - reformed party finances and introduced the Young Conservative movement"],
        answer: "Lord Woolton - around 3 million members by the early 1950s",
        feedback: "Lord Woolton headed reorganisation as party chairman, gathered small member donations to restore finances, and reached around 3 million members by the early 1950s. The Young Conservative movement in 1946 brought in a younger demographic."
    },
    {
        topic: "Conservative Revival 1945-51",
        question: "What did the 1949 'Right Road for Britain' reassure voters about?",
        options: ["That Conservatives would not abandon Attlee's reforms and would protect the welfare state", "That Conservatives would pursue a more aggressive foreign policy than Labour", "That Conservatives would dramatically cut the welfare state to balance the budget", "That Conservatives would renationalise industries privatised under Labour"],
        answer: "That Conservatives would not abandon Attlee's reforms and would protect the welfare state",
        feedback: "The Right Road for Britain stressed Tories would not abandon Attlee's reforms and would protect the welfare state. The promise to build 300,000 houses per year also resonated with voters wanting new homes."
    },
    {
        topic: "Conservative Revival 1945-51",
        question: "How did the Cold War assist the Conservative revival after 1945?",
        options: ["Conservative defence policy was seen as stronger than Labour's pacifism", "The Cold War shifted public language from planning to enterprise - socialism became the enemy", "Labour's links to Soviet trade unions were exposed by Conservative press campaigns", "The Korean War discredited Labour's foreign policy and boosted Conservative support"],
        answer: "The Cold War shifted public language from planning to enterprise - socialism became the enemy",
        feedback: "Wartime state intervention had seemed to justify socialism, but the Cold War shifted the language - enterprise over planning, with socialism recast as the enemy, despite Labour bearing little resemblance to Soviet communism."
    },
    {
        topic: "Conservative Revival 1945-51",
        question: "How many Conservative Party members were there by the early 1950s?",
        options: ["Around 2 million", "Around 3 million", "Around 5 million", "Around 1 million"],
        answer: "Around 3 million",
        feedback: "Under Lord Woolton's reorganisation, the Conservative Party reached around 3 million members by the early 1950s, with the Young Conservative movement in 1946 bringing in a younger demographic."
    },
    {
        topic: "Churchill's Premiership 1951-55",
        question: "What was Churchill's physical and political condition at the start of his second term?",
        options: ["He was 77, had already suffered two strokes, and suffered another in June 1953", "He was 80 and completely incapacitated - Eden effectively ran the government", "He was 70, suffering from depression, and largely controlled by his cabinet", "He was 65, in excellent health, with a clear radical programme"],
        answer: "He was 77, had already suffered two strokes, and suffered another in June 1953",
        feedback: "Churchill was 77 at the start of his second term, had already suffered two strokes, and suffered another bad one in June 1953. Paul Addison argues he led the party 'with great vigour and flair towards the middle ground of politics'. He resigned in April 1955."
    },
    {
        topic: "Churchill's Premiership 1951-55",
        question: "What was Butler's economic inheritance in 1951 and how did he respond?",
        options: ["A 700 million pound balance of payments deficit - he cut imports, credit and food subsidies, and raised the bank rate", "A 500 million pound deficit - he devalued the pound and sought an IMF loan", "A balanced budget - he maintained existing policies while reducing nationalisation", "A 200 million pound surplus - he cut taxes and expanded the welfare state"],
        answer: "A 700 million pound balance of payments deficit - he cut imports, credit and food subsidies, and raised the bank rate",
        feedback: "Butler inherited a 700 million pound BOP deficit. He responded with savage cuts on imports, credit, and food subsidies, raising the bank rate from 2% to 4%. By 1952 the deficit was wiped out and there was a 259 million pound surplus."
    },
    {
        topic: "Churchill's Premiership 1951-55",
        question: "How many houses per year did Macmillan build as Minister of Housing?",
        options: ["300,000 per year exactly - meeting but not exceeding the promise", "400,000 per year - far exceeding the promise", "250,000 per year - falling short of the 300,000 promise", "327,000 in 1953 and 354,000 in 1954 - exceeding the promise"],
        answer: "327,000 in 1953 and 354,000 in 1954 - exceeding the promise",
        feedback: "Macmillan exceeded the Conservative housing promise of 300,000 houses per year - building 327,000 in 1953 and 354,000 in 1954. By 1964 the Tories had built 1.7 million homes in total."
    },
    {
        topic: "Churchill's Premiership 1951-55",
        question: "What happened to the balance of payments under Butler between 1951 and 1952?",
        options: ["A 200 million pound deficit became a 100 million pound deficit", "A 700 million pound deficit was halved to 350 million pounds", "A 700 million pound deficit became a 259 million pound surplus", "A 500 million pound deficit was eliminated but no surplus achieved"],
        answer: "A 700 million pound deficit became a 259 million pound surplus",
        feedback: "Butler inherited a 700 million pound BOP deficit. By 1952, through cuts on imports, credit, food subsidies, and raising the bank rate from 2% to 4%, the deficit was wiped out and there was a 259 million pound surplus."
    },
    {
        topic: "Eden's Premiership",
        question: "What was Eden's record before the Suez Crisis?",
        options: ["He was widely regarded as a failure from the start, with poor domestic policy", "He increased the Conservative majority from 17 to 60 and oversaw barely 1% unemployment", "He reduced the Conservative majority and introduced popular social reforms", "He maintained Churchill's majority unchanged and focused entirely on foreign affairs"],
        answer: "He increased the Conservative majority from 17 to 60 and oversaw barely 1% unemployment",
        feedback: "Eden increased the Conservative majority from 17 to 60 - the first PM in 90 years to increase the majority at an election. He oversaw the lowest unemployment since WW2 at barely 1% in July 1955."
    },
    {
        topic: "Eden's Premiership",
        question: "What was the Suez Crisis of 1956?",
        options: ["Nasser blockaded the canal - Britain and the US jointly threatened military action, successfully reopening it", "Egypt seized British oil facilities - Britain successfully defended them with French and Israeli help", "Israel attacked Egypt - Britain and France intervened as neutral peacekeepers but were forced out by the UN", "Nasser nationalised the canal - Britain secretly colluded with France and Israel to invade, but US refusal forced a ceasefire"],
        answer: "Nasser nationalised the canal - Britain secretly colluded with France and Israel to invade, but US refusal forced a ceasefire",
        feedback: "Nasser nationalised the Suez Canal in July 1956. Britain secretly colluded with Israel and France - Israel attacked Egypt, providing Britain and France the pretext to intervene. A run on the pound and US refusal of economic support forced a ceasefire. Eden resigned shortly after."
    },
    {
        topic: "Eden's Premiership",
        question: "By how much did Eden increase the Conservative majority in the 1955 election?",
        options: ["From 17 to 80 seats", "From 17 to 45 seats", "From 17 to 60 seats", "From 17 to 30 seats"],
        answer: "From 17 to 60 seats",
        feedback: "Eden increased the Conservative majority from 17 to 60 seats - the first Prime Minister in 90 years to increase the majority at a general election. He also oversaw barely 1% unemployment in July 1955."
    },
    {
        topic: "Macmillan's Premiership",
        question: "What did Macmillan claim at Bedford Town Football Ground in 1957?",
        options: ["'Britain is back - a proud nation leading the world once more'", "'The age of austerity is over - the age of opportunity has begun'", "'We shall build a Britain as prosperous as any nation on earth'", "'Most of our people have never had it so good'"],
        answer: "'Most of our people have never had it so good'",
        feedback: "Addressing 1,500 people, Macmillan proclaimed 'most of our people have never had it so good' - but also added the cautionary note 'is it too good to last?', showing awareness of underlying economic vulnerabilities."
    },
    {
        topic: "Macmillan's Premiership",
        question: "What was the result of the 1959 general election?",
        options: ["Labour won by a narrow majority of 4 seats", "Conservatives won a landslide of 100 seats, their biggest ever majority", "A hung parliament - Macmillan formed a minority Conservative government", "Conservatives gained 20 seats, Labour lost 19, Tories winning 4% more votes"],
        answer: "Conservatives gained 20 seats, Labour lost 19, Tories winning 4% more votes",
        feedback: "The 1959 election was a triumph for Macmillan - Conservatives gained 20 seats, Labour lost 19, and the Tories received 4% more votes. It reflected affluence and Labour's continued divisions."
    },
    {
        topic: "Macmillan's Premiership",
        question: "How did Macmillan use television to political advantage?",
        options: ["He hired actors to coach him but his performances were widely regarded as wooden", "He appeared calm and authoritative on TV, earning the 'Supermac' image in 1957", "He refused to appear on TV, believing it was beneath a Prime Minister's dignity", "He used TV only for party political broadcasts, refusing interviews entirely"],
        answer: "He appeared calm and authoritative on TV, earning the 'Supermac' image in 1957",
        feedback: "Macmillan rebuilt his presentational skills - calm, aristocratic, wearing expensive Savile Row suits and fixing his lopsided teeth. In 1957 a cartoonist drew him as Superman with a giant No.10 on his tunic. He appeared on TV more than Gaitskell, increasingly important as more people had TVs."
    },
    {
        topic: "Macmillan's Premiership",
        question: "What was the Night of the Long Knives in 1962?",
        options: ["Macmillan sacked a third of his cabinet in one night", "Macmillan's secret plan to merge with the Liberal Party to secure a majority", "Macmillan's reorganisation of the military top brass following the Suez debacle", "A series of dramatic policy U-turns that alienated Macmillan's right wing"],
        answer: "Macmillan sacked a third of his cabinet in one night",
        feedback: "The Night of the Long Knives in 1962 saw Macmillan sack a third of his cabinet - appearing as if the government was imploding. Combined with spy scandals and the Profumo Affair, it contributed to the Conservatives losing power in 1964."
    },
    {
        topic: "Conservative Fall from Power",
        question: "Why did the Conservatives fall from power by 1964?",
        options: ["Harold Wilson won a landslide on the strength of his economic programme alone", "Spy scandals, the Profumo Affair, economic difficulties, the out-of-touch Establishment image, and the selection of Douglas-Home combined to cost the Conservatives power", "The Liberal Party collapsed, with most votes going to Labour", "A major recession in 1963 caused mass unemployment and widespread poverty"],
        answer: "Spy scandals, the Profumo Affair, economic difficulties, the out-of-touch Establishment image, and the selection of Douglas-Home combined to cost the Conservatives power",
        feedback: "The Conservative fall combined spy scandals (Blake, Vassall), the Profumo Affair, economic difficulties (878,000 unemployed by 1963), satire mocking the out-of-touch Establishment, and the selection of old Etonian aristocrat Alec Douglas-Home as PM."
    },
    {
        topic: "Conservative Fall from Power",
        question: "How many members of Macmillan's government were related to him by marriage?",
        options: ["25 members", "45 members", "15 members", "35 members"],
        answer: "35 members",
        feedback: "35 members of Macmillan's government were related to him by marriage - a striking illustration of the closed, nepotistic nature of the Establishment that critics argued was holding Britain back."
    },
    {
        topic: "Conservative Fall from Power",
        question: "How many Old Etonians were in Alec Douglas-Home's cabinet of 23?",
        options: ["13 Old Etonians", "10 Old Etonians", "7 Old Etonians", "4 Old Etonians"],
        answer: "10 Old Etonians",
        feedback: "Alec Douglas-Home's cabinet of 23 contained 10 Old Etonians - reinforcing the image of an out-of-touch Establishment at a time when Harold Wilson was presenting himself as a modern meritocrat."
    },
    {
        topic: "Conservative Fall from Power",
        question: "How many unemployed were there in Britain in 1963?",
        options: ["Around 300,000", "Around 500,000", "Around 878,000", "Over 1 million"],
        answer: "Around 878,000",
        feedback: "Unemployment hit 878,000 in 1963 - a significant increase contributing to Conservative weakness going into the 1964 election. The 1961 'pay pause' to hold down inflation had also damaged the government's popularity."
    },
    {
        topic: "Labour Divisions 1951-59",
        question: "What were the key differences between the Bevanites and Gaitskellites?",
        options: ["Bevanites wanted lower taxes; Gaitskellites wanted higher public spending", "Bevanites favoured greater state control and were often unilateralists; Gaitskellites were centre-right and focused on electability", "Bevanites wanted to abolish Clause IV; Gaitskellites insisted on retaining it", "Bevanites supported NATO; Gaitskellites opposed it"],
        answer: "Bevanites favoured greater state control and were often unilateralists; Gaitskellites were centre-right and focused on electability",
        feedback: "Bevanites wanted larger TUs with committed left-wingers shaping policy, regarded the welfare state as just the first step towards socialism, and many were unilateralists. Gaitskellites were centre-right, resisted TU dominance, and wanted to move Labour towards electability."
    },
    {
        topic: "Labour Divisions 1951-59",
        question: "What triggered the Bevanite split in 1951?",
        options: ["Bevan resigned from cabinet over prescription charges, giving the left wing a leader", "Bevan's demand that Attlee resign as Labour leader immediately", "Bevan's opposition to Britain's nuclear weapons programme at conference", "Bevan's refusal to support the Korean War effort in Parliament"],
        answer: "Bevan resigned from cabinet over prescription charges, giving the left wing a leader",
        feedback: "In 1951, Bevan resigned from cabinet over prescription charges, providing the left wing with a leader. Subsequently, in 1952, 57 Bevanites voted against the Tory rearmament programme despite the party having agreed to abstain."
    },
    {
        topic: "Labour Divisions 1951-59",
        question: "Why did Labour's divisions damage its electoral prospects in the 1950s?",
        options: ["The divisions led the party to adopt extreme left-wing policies alienating centrist voters", "Divisions meant no clear direction, no strong leadership, and too much infighting to effectively attack the Conservatives", "Internal divisions led Gaitskell to defect to the Liberal Party in 1958", "The divisions caused a formal party split in 1956, forcing a by-election Labour lost"],
        answer: "Divisions meant no clear direction, no strong leadership, and too much infighting to effectively attack the Conservatives",
        feedback: "Labour's divisions meant voters were unsure what policies they'd get. If a leader can't unite their own party, how can they lead the country? Infighting distracted from attacking the opposition. People still associated Labour with austerity and a 'cloth cap' image."
    },
    {
        topic: "Labour Divisions 1951-59",
        question: "When did Gaitskell win the Labour leadership and how was Bevan's response significant?",
        options: ["1955 - Bevan accepted the result and returned to the fold, forming a Bevan-Gaitskell axis", "1957 - Bevan won instead, consolidating left-wing control of the party", "1951 - Bevan immediately challenged the result and split the party formally", "1953 - Bevan agreed reluctantly but continued opposing Gaitskell's policies"],
        answer: "1955 - Bevan accepted the result and returned to the fold, forming a Bevan-Gaitskell axis",
        feedback: "When Attlee retired in 1955, Gaitskell won the leadership vote overwhelmingly and Bevan accepted, returning to the fold. Between 1955 and 1959 a Bevan-Gaitskell axis developed - the Suez affair brought them together, leading to Bevan becoming shadow foreign secretary."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "What characterised the 'stop-go' economic cycle of the 1950s and early 1960s?",
        options: ["Alternating periods of high employment and unemployment tied to global commodity prices", "A pattern of nationalisation followed by privatisation as governments changed", "A cycle of devaluation followed by deflation recurring every three years", "Growth leading to overheating, with budgets used as short-term electoral tools rather than genuine economic strategy"],
        answer: "Growth leading to overheating, with budgets used as short-term electoral tools rather than genuine economic strategy",
        feedback: "Stop-go saw growth lead to overheating through excessive imports and rising wage demands. Budgets were used as short-term measures to buy election votes - policy lagged behind events rather than directing them, suggesting no real economic plan."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "How did Britain's economic performance compare to competitors 1951-64?",
        options: ["Britain and West Germany grew at roughly equal rates, both outpacing France and Japan", "Industrial production grew far quicker in France, West Germany and Japan; Britain's world trade share fell from 25.5% to 16.5%", "Britain grew faster than all competitors throughout the period", "Britain's world trade share rose slightly as the Empire provided protected markets"],
        answer: "Industrial production grew far quicker in France, West Germany and Japan; Britain's world trade share fell from 25.5% to 16.5%",
        feedback: "Industrial production grew 3x quicker in France, 4x in West Germany, and 10x in Japan. Britain's share of world trade fell from 25.5% in 1950 to 16.5% in 1960, while Germany and Japan's shares were growing."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "What was 'Butskellism'?",
        options: ["The shared commitment to the nuclear deterrent across party lines", "The policy of keeping wages artificially low to control inflation, pursued by both parties", "A portmanteau of Butler and Gaitskell suggesting both parties used broadly similar Keynesian demand management", "The term for the cosy relationship between Conservative ministers and trade union leaders"],
        answer: "A portmanteau of Butler and Gaitskell suggesting both parties used broadly similar Keynesian demand management",
        feedback: "Butskellism - combining Chancellor Butler and Shadow Chancellor Gaitskell - suggested both parties used broadly similar Keynesian demand management. Government expenditure rose from 39% of GDP in 1950 under Labour to 51% in 1960 under the Conservatives."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "By how much did British shipbuilding's share of the world market fall between 1950 and 1974?",
        options: ["From 50% to 20%", "From 20% to 5%", "From 25% to 10%", "From 37% to 3.7%"],
        answer: "From 37% to 3.7%",
        feedback: "British shipbuilding declined severely from 37% of world share in 1950 to just 3.7% in 1974 - a tenfold collapse reflecting Britain's broader failure to modernise industry and compete internationally."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "What was the BOT surplus 1956-60 compared to the BOT deficit 1946-50?",
        options: ["+300 million pounds compared to -150 million pounds", "+200 million pounds compared to -100 million pounds", "+50 million pounds compared to -20 million pounds", "+132 million pounds compared to -56 million pounds"],
        answer: "+132 million pounds compared to -56 million pounds",
        feedback: "The BOT surplus of +132 million pounds in 1956-60 compared favourably to the deficit of -56 million pounds in 1946-50, one of the positive economic indicators of the Conservative years before the stop-go cycle worsened."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "How much did Britain's world trade share fall between 1950 and 1960?",
        options: ["From 30% to 22%", "From 25.5% to 16.5%", "From 20% to 14%", "From 15% to 10%"],
        answer: "From 25.5% to 16.5%",
        feedback: "Britain's share of world trade fell from 25.5% in 1950 to 16.5% in 1960, while Germany and Japan's shares were growing. Industrial production grew 3x quicker in France, 4x in West Germany, and 10x in Japan during the same period."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "What was the annual GDP growth rate of Britain between 1951 and 1964?",
        options: ["Around 4-5% per year", "Around 1% per year", "Around 6-7% per year", "Around 2-3% per year"],
        answer: "Around 2-3% per year",
        feedback: "Britain grew at around 2-3% per year between 1951 and 1964 - positive in absolute terms but lagging significantly behind competitors. France grew at around 4.2% per year 1960-70, while Japan grew far faster."
    },
    {
        topic: "Affluence and Living Standards",
        question: "How did wages change between 1951 and 1964?",
        options: ["Real wages fell slightly as inflation outpaced wage growth throughout the period", "Average male weekly wages rose from around £8 to £18, with real wages rising ahead of prices", "Wages doubled in nominal terms but barely kept pace with inflation overall", "Living standards improved only for the middle class - working class wages stagnated"],
        answer: "Average male weekly wages rose from around £8 to £18, with real wages rising ahead of prices",
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
        options: ["That support for the welfare state had collapsed as people became more affluent", "That 40% of manual labourers considered themselves middle class, making them more likely to vote Tory", "That 60% of the population considered themselves working class despite rising incomes", "That young people were the most politically engaged generation since the war"],
        answer: "That 40% of manual labourers considered themselves middle class, making them more likely to vote Tory",
        feedback: "The 1959 Mark Abrams survey found 40% of manual labourers considered themselves middle class and hence more likely to vote Tory. People associated Labour with austerity and a 'cloth cap' image, while Tories were associated with forward-looking, ambitious people."
    },
    {
        topic: "Affluence and Living Standards",
        question: "How did home ownership change between 1950 and 1970?",
        options: ["Home ownership stayed flat at around 30% throughout the period", "Home ownership rose modestly from 27% to 35% over the period", "Home ownership fell slightly as more people rented from councils", "Home ownership almost doubled from 27% to 50%"],
        answer: "Home ownership almost doubled from 27% to 50%",
        feedback: "Home ownership almost doubled from 27% to 50% between 1950 and 1970 - people were spending more on their homes and the Tories had built 1.7 million homes by 1964. The 1957 Rent Act abolished rent controls, putting 6 million properties on the market."
    },
    {
        topic: "Affluence and Living Standards",
        question: "How many TV licence holders were there by 1964?",
        options: ["Around 8 million", "Around 13 million", "Around 20 million", "Around 5 million"],
        answer: "Around 13 million",
        feedback: "From two thirds of the population never having seen a TV in 1949, by 1964 there were 13 million licence holders - TV had become a social necessity. The 1953 Coronation alone took viewers from 1.5 million to 3 million overnight."
    },
    {
        topic: "Affluence and Living Standards",
        question: "What happened to the number of students staying in school until 17 between 1951 and 1955?",
        options: ["It rose by around 50%", "It stayed roughly the same throughout", "It doubled", "It tripled"],
        answer: "It doubled",
        feedback: "By 1955, the number of kids staying in school until 17 had doubled compared to 1951 - a sign of rising aspirations in the age of affluence, though Britain still lagged behind other advanced industrial nations."
    },
    {
        topic: "Class and the Establishment",
        question: "What was 'the Establishment' and why was it criticised?",
        options: ["The BBC and broadsheet press, criticised for promoting left-wing values", "The trade union leadership that dominated post-war economic policy", "A small, upper class, Oxbridge-educated group governing Britain, criticised for holding the country back", "The network of Conservative Party donors who funded Macmillan's government"],
        answer: "A small, upper class, Oxbridge-educated group governing Britain, criticised for holding the country back",
        feedback: "The Establishment was a small but powerful group - upper class, Oxbridge-educated. Macmillan was Eton and Oxford educated with 35 government members related to him by marriage. Alec Douglas-Home's cabinet of 23 included 10 Old Etonians. Social scientists like Richard Hoggart argued Britain needed leaders chosen on merit."
    },
    {
        topic: "Class and the Establishment",
        question: "What was the Profumo Affair?",
        options: ["The revelation that cabinet ministers had attended parties hosted by a Soviet spy", "A financial scandal in which the Minister for War accepted bribes from defence contractors", "Secretary of State for War John Profumo had an affair with Christine Keeler, who was also linked to a Soviet naval attache - he lied to Parliament, then resigned in 1963", "A sex scandal involving a junior minister that the press deliberately exaggerated"],
        answer: "Secretary of State for War John Profumo had an affair with Christine Keeler, who was also linked to a Soviet naval attache - he lied to Parliament, then resigned in 1963",
        feedback: "In 1961 Profumo began an affair with Christine Keeler, who was also linked to Soviet naval attache Eugene Ivanov. He denied wrongdoing to Parliament in 1963, then admitted lying and resigned. The affair fuelled public fascination with sex, class and espionage, and added pressure on Macmillan who resigned later in 1963."
    },
    {
        topic: "Class and the Establishment",
        question: "How did the spy scandals damage Macmillan's government?",
        options: ["George Blake and John Vassall tarnished the intelligence services, damaged US relations, and Macmillan angered the press by imprisoning two journalists", "The scandals only damaged US relations - British public opinion remained supportive", "The scandals led directly to Macmillan's resignation in 1962", "They had no real political impact as the public was indifferent to Cold War espionage"],
        answer: "George Blake and John Vassall tarnished the intelligence services, damaged US relations, and Macmillan angered the press by imprisoning two journalists",
        feedback: "Blake was sentenced to 42 years in 1961. Vassall was a clerk blackmailed by KGB photographs into passing Admiralty documents to Soviet intelligence. Both tarnished the security services. Macmillan had two journalists imprisoned - the press turned heavily against him. The Times called for a change of government."
    },
    {
        topic: "Class and the Establishment",
        question: "How long was George Blake's prison sentence and what happened next?",
        options: ["Life imprisonment - he died in prison in 1974", "30 years - he escaped after 10 years and lived the rest of his life in East Germany", "20 years - he served his full sentence and was released in 1981", "42 years - he made a daring escape in 1966 and was awarded the Order of Lenin in Moscow"],
        answer: "42 years - he made a daring escape in 1966 and was awarded the Order of Lenin in Moscow",
        feedback: "George Blake was sentenced to 42 years in 1961. He made one of the most daring escapes in 1966, was smuggled out of England and was awarded the Order of Lenin on arrival in Moscow. Sir Dick White, head of MI6, commented: 'the government could fall over this'."
    },
    {
        topic: "Women in the Affluent Society",
        question: "What was the dominant image of women in the 1950s and early 1960s?",
        options: ["Women were seen as politically active citizens following the suffragette movement", "Women were primarily defined by their role as factory workers following wartime employment", "Women were increasingly entering professional careers and the gender gap was rapidly closing", "The traditional housewife - cooking, shopping, washing, seeing to children - reinforced by magazines and advertising"],
        answer: "The traditional housewife - cooking, shopping, washing, seeing to children - reinforced by magazines and advertising",
        feedback: "Throughout the 50s and 60s men and women lived generally separate lives. The modern housewife was presented as young, stylish and efficient. Educationalist John Newsom argued in 1963 that female education should follow 'broad themes of home-making' including needlework and cooking."
    },
    {
        topic: "Women in the Affluent Society",
        question: "What proportion of married women worked in 1951 compared to 1961?",
        options: ["1 in 4 in 1951 rising to 1 in 4 in 1961", "1 in 3 in 1951 rising to 1 in 2 in 1961", "1 in 5 in 1951 rising to 1 in 3 in 1961", "1 in 8 in 1951 rising to 1 in 5 in 1961"],
        answer: "1 in 5 in 1951 rising to 1 in 3 in 1961",
        feedback: "In 1951, 1 in 5 married women worked; by 1961, 1 in 3 did - made possible by contraception and the breakdown of the marriage bar. But women remained trapped in low-status jobs and in 1958 were paid less than 2/3 of a man's wage for the same job."
    },
    {
        topic: "Women in the Affluent Society",
        question: "What proportion of women's wages compared to men's did women earn in 1958?",
        options: ["Less than 3/4", "Less than 1/3", "Less than 2/3", "Less than 1/2"],
        answer: "Less than 2/3",
        feedback: "In 1958, women were paid less than 2/3 of a man's wage for the same job. Despite more women entering the workforce, they remained trapped in low-status 'careers for girls' jobs."
    },
    {
        topic: "Youth Culture 1951-64",
        question: "What factors enabled the emergence of a distinct youth culture in the late 1950s?",
        options: ["The Baby Boom generation reached adulthood simultaneously, creating a large peer group", "The introduction of comprehensive schools brought young people from different backgrounds together", "Greater affluence, financial independence, reduced obligations to parents, and national service abolished in 1960", "American rock and roll music created a shared cultural identity across class boundaries"],
        answer: "Greater affluence, financial independence, reduced obligations to parents, and national service abolished in 1960",
        feedback: "By the late 50s, youth were too young to have experienced wartime hardship. Unskilled work was widely available, providing financial independence. The 1959 Mark Abrams survey found young people spending 830 million pounds and providing 40% of all cinema admissions."
    },
    {
        topic: "Youth Culture 1951-64",
        question: "What distinguished Mods from Rockers?",
        options: ["Mods were university educated; Rockers were from working class backgrounds", "Mods were from the North of England; Rockers were from the South", "Mods wore immaculate suits and rode Italian scooters; Rockers wore leather, rode motorcycles, and embraced a raw image", "Mods listened to jazz; Rockers listened to American rock and roll"],
        answer: "Mods wore immaculate suits and rode Italian scooters; Rockers wore leather, rode motorcycles, and embraced a raw image",
        feedback: "Mod dress was immaculate - suits crafted from Italian and French designs. Fashion was a rejection of post-war austerity. Rockers were named for their love of rock - dirty, loud, wearing leather and studs, riding motorcycles."
    },
    {
        topic: "Youth Culture 1951-64",
        question: "How much were young people spending annually by 1959 according to the Mark Abrams survey?",
        options: ["1.2 billion pounds", "500 million pounds", "830 million pounds", "200 million pounds"],
        answer: "830 million pounds",
        feedback: "The 1959 Mark Abrams survey found that young people had prospered, spending 830 million pounds annually and providing 40% of all cinema admissions - demonstrating the enormous economic power of the new teenage consumer."
    },
    {
        topic: "Youth Culture 1951-64",
        question: "How many people were arrested after the Battle of Margate in May 1964?",
        options: ["51 arrested", "117 arrested", "21 arrested", "200 arrested"],
        answer: "51 arrested",
        feedback: "At the Battle of Margate in May 1964, 51 people were arrested and 1,900 pounds in fines were issued. The Daily Mirror published 'Wild Ones Invade Seaside Town' - but the reality was more mundane, with photographers paying kids to pose for photos."
    },
    {
        topic: "Immigration and Race 1951-64",
        question: "What were the main pull factors drawing Commonwealth immigrants to Britain in the 1950s?",
        options: ["A romanticised image of Britain, plentiful unskilled work, and active recruitment drives", "British government cash grants and subsidised housing for new arrivals", "The 1948 British Nationality Act specifically advertised free movement rights", "Relatively high wages and welfare state benefits available to new arrivals"],
        answer: "A romanticised image of Britain, plentiful unskilled work, and active recruitment drives",
        feedback: "Pull factors included a romanticised image of Britain, plenty of unskilled work, and active recruitment drives. London Transport took in 4,000 new employees in 1956, and the NHS and public transport were particularly reliant on immigrant labour."
    },
    {
        topic: "Immigration and Race 1951-64",
        question: "How many immigrants entered the UK in 1961 compared to the previous five years combined?",
        options: ["80,000 - slightly more than the previous 5 years combined", "130,000 - equivalent to the previous 5 years combined", "200,000 - twice the previous 5 years combined", "50,000 - roughly equal to the previous 5 years combined"],
        answer: "130,000 - equivalent to the previous 5 years combined",
        feedback: "In 1961, 130,000 immigrants entered the UK - the equivalent of the previous 5 years combined. By 1960-62, more migrants had arrived than in the whole of the 20th century to that point, prompting the Commonwealth Immigrants Act 1962."
    },
    {
        topic: "Immigration and Race 1951-64",
        question: "What did the Commonwealth Immigrants Act 1962 introduce?",
        options: ["It ended free immigration and replaced it with a work voucher scheme, with 70% public support", "It introduced a points-based system favouring skilled workers of all nationalities equally", "It reaffirmed the 1948 British Nationality Act's guarantee of free entry", "It banned all non-white immigration from Commonwealth countries"],
        answer: "It ended free immigration and replaced it with a work voucher scheme, with 70% public support",
        feedback: "The 1962 Act ended free immigration for former colonial subjects and replaced it with a work voucher scheme - Category A (employment arranged), B (skills in short supply), C (all others). It had 70% public support but white workers were more likely to have the skills needed for vouchers."
    },
    {
        topic: "Immigration and Race 1951-64",
        question: "What was the Kelso Cochrane case of 1959?",
        options: ["A Caribbean nurse refused employment at a London hospital, exposing NHS racial discrimination", "An Antiguan carpenter stabbed to death by six white youths - police treated it as robbery and 1,000 people lined the streets at his funeral", "A Jamaican man beaten by police in Brixton, leading to demands for accountability", "A West Indian bus driver wrongfully dismissed by London Transport whose case led to the Race Relations Act"],
        answer: "An Antiguan carpenter stabbed to death by six white youths - police treated it as robbery and 1,000 people lined the streets at his funeral",
        feedback: "Kelso Cochrane was an Antiguan carpenter stabbed to death by six white youths. Despite evidence of racial motive, police investigated it as a robbery, only arrested two who were later released. 1,000 Black and white people lined the streets in solidarity at his funeral."
    },
    {
        topic: "Immigration and Race 1951-64",
        question: "How many people were arrested during the 1958 Notting Hill Race Riots?",
        options: ["Around 30", "Over 200", "117 people", "Around 75"],
        answer: "117 people",
        feedback: "The 1958 Notting Hill riots saw white youths attack West Indians and Black people. 117 people were arrested. Four nights of rioting brought the issue to national attention. The Notting Hill Carnival was established in 1959 in response."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "What was Churchill's 'three circles of influence' concept?",
        options: ["A military strategy dividing the world into American, Soviet, and neutral spheres", "A foreign policy framework dividing Britain's interests into economic, military, and cultural spheres", "Churchill argued Britain sat at the intersection of Europe, the US, and the Commonwealth", "A NATO doctrine organising Allied defences into three concentric rings around Western Europe"],
        answer: "Churchill argued Britain sat at the intersection of Europe, the US, and the Commonwealth",
        feedback: "Churchill argued Britain sat at the intersection of three circles of influence - Europe, the US, and the Commonwealth. He claimed Britain was 'the only country which has a great part in every one of them' - justifying reluctance to integrate into European institutions."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "What was Macmillan's 'Winds of Change' speech?",
        options: ["A speech in the South African Parliament in 1960 acknowledging African independence movements and accepting decolonisation", "A speech to NATO allies calling for a new approach to containing Soviet expansion in Africa", "A speech to the House of Commons announcing withdrawal of British forces from Africa", "A speech to the UN calling for a new world order based on American and British shared values"],
        answer: "A speech in the South African Parliament in 1960 acknowledging African independence movements and accepting decolonisation",
        feedback: "Macmillan made his 'Winds of Change' speech in Cape Town in February 1960: 'the wind of change is blowing through this continent'. It marked public recognition of African independence and a shift from suppressing movements - as with the brutal Mau Mau response in Kenya."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "Why did Britain initially refuse to join the EEC?",
        options: ["Churchill believed the EEC would become a federal superstate and was fundamentally opposed", "Concerns over losing economic sovereignty, fears of political union, damaging the US relationship, and 40% of exports going to the Empire", "The City of London successfully lobbied against membership to protect financial services", "Britain believed EFTA would be just as economically successful as the EEC"],
        answer: "Concerns over losing economic sovereignty, fears of political union, damaging the US relationship, and 40% of exports going to the Empire",
        feedback: "Britain objected: it would no longer control its own economy; economic unity might lead to political union; it feared damaging the special relationship with the US; and 40% of British exports went to the Empire/Commonwealth of 800 million people compared to under 200 million in Europe."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "Why did de Gaulle veto Britain's 1961 EEC application?",
        options: ["He objected to Britain's refusal to adopt French as a second EEC official language", "He was responding to British opposition to French nuclear testing in the Pacific", "He vetoed it because Britain refused to abandon special trade relationships with former colonies", "He claimed Britain's economic weaknesses would damage the EEC and it was a 'Trojan horse' for American influence"],
        answer: "He claimed Britain's economic weaknesses would damage the EEC and it was a 'Trojan horse' for American influence",
        feedback: "De Gaulle claimed Britain's economic issues would weaken the EEC and that it acted as a Trojan horse for American influence. Britain believed his real motive was to ensure continued French-German dominance. The Dutch and Belgians actually wanted Britain to join to counteract this."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "How much did steel production rise among the ECSC Six in its first 5 years?",
        options: ["25%", "50%", "75%", "10%"],
        answer: "50%",
        feedback: "Steel production among the Six rose 50% in the ECSC's first 5 years. In the EEC, within 5 years it became the world's biggest exporter and buyer of raw materials. Britain's parallel economic stagnation made the contrast stark."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "What was the Palestine issue and how did it affect Britain's finances?",
        options: ["Britain was spending 40 million pounds per year with 1/10 of armed forces there", "Britain was spending 60 million pounds per year with 1/5 of armed forces there", "Britain was spending 20 million pounds per year with 1/15 of armed forces there", "Britain was spending 10 million pounds per year with 1/20 of armed forces there"],
        answer: "Britain was spending 40 million pounds per year with 1/10 of armed forces there",
        feedback: "By 1946-47 Britain was overwhelmed by events in Palestine - 1/10 of British armed forces occupied the territory at a cost of 40 million pounds per year. In February 1947, an exhausted cabinet deferred the Palestine problem back to the UN, withdrawing in 1948."
    },
    {
        topic: "Post-War Consensus",
        question: "What is the main evidence that a post-war consensus existed?",
        options: ["Both parties committed to the welfare state, used Keynesian economics, continued the housing pledge, and maintained trade union consultation", "Both parties agreed on immigration controls, nuclear deterrence, and EEC membership", "Both parties supported British entry into the EEC from its founding in 1957", "Both parties agreed to abandon nationalisation and pursue free market economics after 1951"],
        answer: "Both parties committed to the welfare state, used Keynesian economics, continued the housing pledge, and maintained trade union consultation",
        feedback: "Evidence for consensus includes: both parties committed to the welfare state (expenditure on social services rose from 39.2% to 43% of total public expenditure 1951-55); Butskellism in Keynesian economics; Conservatives continued Labour's housing pledge; agreement on decolonisation; and TU consultation as shared policy."
    },
    {
        topic: "Post-War Consensus",
        question: "What is the main evidence against a genuine post-war consensus?",
        options: ["The Conservatives abolished the welfare state in 1955 when they felt electorally secure", "The parties disagreed on every major policy area - consensus was a myth invented by historians", "Right-wing Tories called Attlee's legacy a 'social mistake'; Bevanites argued it wasn't socialist enough; and sharp disagreements existed on immigration and the economy", "The parties fought bitterly over NATO membership and the nuclear deterrent throughout"],
        answer: "Right-wing Tories called Attlee's legacy a 'social mistake'; Bevanites argued it wasn't socialist enough; and sharp disagreements existed on immigration and the economy",
        feedback: "Evidence against: right-wing Tories believed continuation of Attlee's legacy was a 'social mistake'; Bevanites argued it wasn't nearly socialist enough; Labour retained Clause IV; the Suez Crisis led to Labour attacks on Eden; Gaitskell criticised Butler's stop-go cycle; and sharp disagreements on immigration existed."
    },
    {
        topic: "Post-War Consensus",
        question: "By how much did expenditure on social services rise as a proportion of total public expenditure between 1951 and 1955?",
        options: ["From 45% to 50%", "From 39.2% to 43%", "From 25% to 30%", "From 35% to 40%"],
        answer: "From 39.2% to 43%",
        feedback: "Expenditure on social services rose from 39.2% to 43% of total public expenditure between 1951 and 1955 under the Conservative government - evidence that the Tories were maintaining the welfare state rather than dismantling it."
    },

    // =====================================
    // THE SIXTIES 1964-1970
    // =====================================

    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "Why did Labour win the 1964 general election?",
        options: ["A major economic recession had devastated living standards under the Conservatives", "Labour was seen as a modern fresh start - Wilson's youthful image, 'white heat of technology' agenda, and Conservative scandals gave Labour a 4-seat majority", "Wilson won a landslide on the strength of his economic programme alone", "The Liberal Party collapsed, with most of its votes going to Labour"],
        answer: "Labour was seen as a modern fresh start - Wilson's youthful image, 'white heat of technology' agenda, and Conservative scandals gave Labour a 4-seat majority",
        feedback: "Labour was considered a fresh start - creating the Department of Economic Affairs, National Plan, Department of Technology, and seven new universities. Wilson at 48 was younger and more modern than Home. Conservative scandals had damaged their image. Labour won a 4-seat majority in 1964, growing to 96 seats in 1966."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "What was the 1967 devaluation of the pound?",
        options: ["The pound was devalued by 5% - Wilson handled it calmly and it caused little damage", "The pound was devalued by 10% - Wilson successfully blamed the Conservative legacy", "The pound was devalued by 14% from 2.80 to 2.40 dollars - Callaghan resigned as Chancellor and it was a political catastrophe", "The pound was devalued by 25% - immediately boosting exports"],
        answer: "The pound was devalued by 14% from 2.80 to 2.40 dollars - Callaghan resigned as Chancellor and it was a political catastrophe",
        feedback: "In November 1967 the pound was devalued by 14% from 2.80 to 2.40 dollars. Wilson's ill-judged TV broadcast appeared to deny the severity. Callaghan resigned as Chancellor, swapping roles with Roy Jenkins. It was a political catastrophe for the government."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "What was 'In Place of Strife' and why did it fail?",
        options: ["Barbara Castle's 1969 White Paper proposing strike ballots and fines - opposed by the TUC and Callaghan, Wilson accepted defeat", "A successful trade union reform programme that reduced strikes by 50%", "A redundancy protection act giving workers the right to appeal against unfair dismissal", "A pay agreement between the TUC and government that successfully held wages down"],
        answer: "Barbara Castle's 1969 White Paper proposing strike ballots and fines - opposed by the TUC and Callaghan, Wilson accepted defeat",
        feedback: "'In Place of Strife' was Barbara Castle's January 1969 White Paper proposing strike ballots and fines for rule-breaking. It met with extreme protests from the TUC and Labour Party. Home Secretary Callaghan opposed it. Wilson accepted defeat - reforms were needed but Labour could not carry them through."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "By how much did working days lost through strikes increase under Wilson 1963-69?",
        options: ["From 500,000 to 3 million", "From 1.75 million to 7 million", "From 1 million to 2 million", "From 2 million to 5 million"],
        answer: "From 1.75 million to 7 million",
        feedback: "Working days lost through strikes increased from 1.75 million in 1963 to 2.9 million in 1965 and 7 million in 1969. This alarming rise, including 'wildcat' strikes led by shop stewards, was a key reason Wilson tried - and failed - to introduce 'In Place of Strife'."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "What did the 1965 LSE study reveal about poverty?",
        options: ["That poverty was exclusively concentrated in the elderly and could be solved by raising pensions", "That poverty was overwhelmingly caused by unemployment rather than low wages", "That poverty had been virtually eliminated by the welfare state", "That poverty had risen from 7.8% in 1953-54 to 14.2% in 1960, with over 2 million children in low income households"],
        answer: "That poverty had risen from 7.8% in 1953-54 to 14.2% in 1960, with over 2 million children in low income households",
        feedback: "The study showed poverty had risen from 7.8% in 1953-54 to 14.2% in 1960. Over 2 million children were in low income households, and up to 3 million elderly never claimed their entitled benefits. It led to the Child Poverty Action Group being set up in March 1965."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "Why did Labour lose the 1970 general election?",
        options: ["Key industries declined, unemployment rose from 400,000 to 600,000, and ongoing issues with the pound, poverty, and trade unions eroded support", "Heath ran a brilliant campaign winning over traditional Labour voters in northern cities", "The 1967 devaluation caused a deep recession from which Labour never recovered", "Wilson resigned before the election and Labour failed to unite behind a new leader"],
        answer: "Key industries declined, unemployment rose from 400,000 to 600,000, and ongoing issues with the pound, poverty, and trade unions eroded support",
        feedback: "Many traditional supporters felt the government had failed to live up to its promises. Key industries - shipbuilding, coal mining, railway - continued to decline. Unemployment rose from 400,000 to just over 600,000 by 1970."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "What was Labour's majority after the 1966 general election?",
        options: ["4 seats", "150 seats", "30 seats", "96 seats"],
        answer: "96 seats",
        feedback: "The 1966 general election saw Labour win a 96-seat majority - the highest share of the vote since 1945. This gave Wilson the mandate to pursue his modernising agenda, though economic problems soon undermined his government."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "What was the 800 million pound BOP deficit that Wilson inherited, and why did it matter?",
        options: ["It forced immediate devaluation of the pound in 1964", "It was a minor inconvenience that Wilson resolved within a year through modest cuts", "It led Wilson to impose savage spending cuts that caused a recession", "It was a major constraint - Wilson refused devaluation, borrowed from the IMF, held wages down, but was forced to devalue in 1967"],
        answer: "It was a major constraint - Wilson refused devaluation, borrowed from the IMF, held wages down, but was forced to devalue in 1967",
        feedback: "Wilson inherited an 800 million pound BOP deficit from the Conservatives. He refused devaluation, Chancellor Callaghan borrowed heavily from the IMF and held wages down while raising import duties. But the pound was finally devalued by 14% in November 1967 - a political catastrophe."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What were the cases of Derek Bentley and Ruth Ellis, and how did they shape opinion on capital punishment?",
        options: ["Both were pardoned posthumously by Parliament, leading directly to the abolition debate", "Both were convicted for murders they clearly committed but the brutality of executions caused public revulsion", "Bentley was hanged despite having a mental age of a child, while Ellis shot an abusive partner who had caused her a miscarriage - 600 letters called for her reprieve", "Both were exonerated after wrongful convictions, demonstrating the risk of executing the innocent"],
        answer: "Bentley was hanged despite having a mental age of a child, while Ellis shot an abusive partner who had caused her a miscarriage - 600 letters called for her reprieve",
        feedback: "Bentley had a mental age of a child yet was hanged because his younger accomplice Craig, who fired the shot, was too young to hang. Ruth Ellis shot an abusive boyfriend who had caused her a miscarriage by punching her in the stomach. 600 letters called for a reprieve."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What was the background to the Sexual Offences Act 1967?",
        options: ["American pressure to modernise Britain's laws as a condition of continued financial support", "The 1957 Wolfenden Report called for decriminalisation of homosexual acts - backbencher Leo Abse led the resulting campaign", "The Act was introduced following a series of high-profile prosecutions of prominent gay men", "The Act was introduced following a government inquiry into sexual crimes against women"],
        answer: "The 1957 Wolfenden Report called for decriminalisation of homosexual acts - backbencher Leo Abse led the resulting campaign",
        feedback: "The 1957 Wolfenden Report called for decriminalisation. The Homosexual Law Reform Society campaigned since 1958. Backbencher Leo Abse led the campaign resulting in the 1967 Act. However, the age of consent was 21, privacy was narrowly defined, and Abse concluded the Act would be criticised for not going far enough."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What was the situation with abortion before the 1967 Abortion Act?",
        options: ["Abortion was legal in all circumstances up to 12 weeks", "Private clinics were only accessible to the wealthy while others relied on dangerous backstreet abortions - 100,000-200,000 per year", "Abortion was legal but unavailable on the NHS, causing inequality of access", "Abortion was legal only when the mother's life was at risk, requiring three doctors' approval"],
        answer: "Private clinics were only accessible to the wealthy while others relied on dangerous backstreet abortions - 100,000-200,000 per year",
        feedback: "Private clinics were only accessible to upper classes. Others relied on dangerous backstreet abortions - 100,000-200,000 per year with 35,000 admitted to hospital. The Thalidomide disaster, in which a drug caused horrible birth defects from 1959-62, massively swayed public opinion."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What did the Divorce Reform Act 1969 change?",
        options: ["It made divorce available on demand after a 6-month cooling off period", "It banned divorce for the first five years of marriage", "It removed the requirement to prove fault - couples could divorce after 2 years separation if both agreed, or 5 if only one agreed", "It extended legal aid to cover divorce proceedings for the first time"],
        answer: "It removed the requirement to prove fault - couples could divorce after 2 years separation if both agreed, or 5 if only one agreed",
        feedback: "The Divorce Reform Act 1969 removed the requirement to prove fault, ending the need for private investigators only the wealthy could afford. Couples could divorce after 2 years separation if both agreed, or 5 years if only one agreed. Divorce rates rose from 7% to nearly half by the 1970s."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What did the Theatre Act 1968 achieve?",
        options: ["It abolished stage censorship - scripts had previously needed to be licensed through the Lord Chamberlain's office", "It imposed new censorship rules on theatre to counteract the permissive society", "It introduced government funding for regional theatres for the first time", "It required all theatre productions to carry age ratings similar to film certificates"],
        answer: "It abolished stage censorship - scripts had previously needed to be licensed through the Lord Chamberlain's office",
        feedback: "The Theatre Act 1968 abolished stage censorship. Until this point scripts had to be licensed through the Lord Chamberlain's office. Backed by Labour backbencher George Strauss and supported by Roy Jenkins, it enabled writers to experiment with new styles."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What was the Murder (Abolition of Death Penalty) Act 1965?",
        options: ["It transferred the decision to impose the death penalty from judges to juries", "It abolished the death penalty on a trial basis for 5 years, then made permanent in 1969", "It reduced the death penalty to cases of multiple murder only", "It permanently abolished the death penalty and introduced life imprisonment immediately"],
        answer: "It abolished the death penalty on a trial basis for 5 years, then made permanent in 1969",
        feedback: "The Murder (Abolition of Death Penalty) Act 1965 abolished the death penalty on a trial basis for 5 years, then made permanent in 1969. Prisoner beating ceased in 1967. Jenkins also introduced majority jury verdicts - 10/12 rather than full unanimity. Despite these reforms, the rate of violent crime went up."
    },
    {
        topic: "Social and Cultural Change 1960s",
        question: "How did television transform British society in the 1960s?",
        options: ["Television was exclusively a BBC monopoly until 1970 maintaining strict public broadcasting standards", "From two thirds never having seen a TV in 1949, there were 13 million licence holders by 1964 - Coronation Street had 20 million viewers by 1961", "Television primarily reinforced conservative values throughout the decade", "Television remained a luxury item throughout the 1960s, only reaching 30% of households by 1970"],
        answer: "From two thirds never having seen a TV in 1949, there were 13 million licence holders by 1964 - Coronation Street had 20 million viewers by 1961",
        feedback: "Two thirds of the population had never seen a TV in 1949. The 1953 Coronation took viewers from 1.5 million to 3 million overnight. By 1964 there were 13 million licence holders. ITV launched in 1955. Coronation Street had 20+ million viewers by October 1961."
    },
    {
        topic: "Social and Cultural Change 1960s",
        question: "How did pirate radio emerge and how did the government respond?",
        options: ["Pirate radio was tolerated as a harmless novelty and eventually absorbed into the BBC without legislation", "The government licensed pirate stations as commercial radio, creating a mixed broadcasting economy", "Radio Caroline launched in 1964 from a ship off Essex - the government shut offshore stations down in 1967 and launched Radio One", "Pirate radio was immediately suppressed by the Post Office, which jammed all unlicensed broadcasts"],
        answer: "Radio Caroline launched in 1964 from a ship off Essex - the government shut offshore stations down in 1967 and launched Radio One",
        feedback: "At the start of the 1960s the BBC had no station for popular music. Radio Caroline launched in 1964 from a ship off the Essex coast. The government introduced the Marine Broadcasting Act 1967 to shut down offshore stations, then launched Radio One - recruiting former pirate DJs like Tony Blackburn."
    },
    {
        topic: "Social and Cultural Change 1960s",
        question: "What were the limits of the 'permissive society'?",
        options: ["There were no significant limits - British society was transformed root and branch by liberal attitudes", "The permissive society was limited entirely to London with no impact on provincial Britain", "Religious opposition from Catholic and Anglican churches successfully blocked most permissive legislation", "A 1969 survey showed only 5% welcomed easier laws as the most important change, and surveys found most young people were virgins on marriage"],
        answer: "A 1969 survey showed only 5% welcomed easier laws as the most important change, and surveys found most young people were virgins on marriage",
        feedback: "A New Society survey in 1969 showed only 5% welcomed easier laws as the most important 60s change. 77% thought too much publicity was given to sex, and 71% believed murderers ought to be hanged. Surveys by Schofield and Gorer found promiscuity was not common teenage behaviour."
    },
    {
        topic: "Social and Cultural Change 1960s",
        question: "How much did ITV advertising revenues grow between 1956 and 1961?",
        options: ["From 20 million to 60 million pounds", "From 5 million to 30 million pounds", "From 8 million to 50 million pounds", "From 13 million to 93 million pounds"],
        answer: "From 13 million to 93 million pounds",
        feedback: "ITV proved a 'licence to print money' - advertising revenue grew from 13 million pounds in 1956 to 93 million pounds in 1961. Lord Reith, the BBC's first Director-General, likened ITV to 'smallpox, bubonic plague and the black death'."
    },
    {
        topic: "Social and Cultural Change 1960s",
        question: "What was Mary Whitehouse's campaign and what did it achieve?",
        options: ["She successfully had ITV's licence revoked and forced it to adopt BBC-style public service obligations", "She successfully lobbied Parliament to introduce a Broadcasting Standards Act", "She led the Clean Up TV campaign attracting nearly 500,000 petitions, but ultimately failed to impact programmes shown", "Her campaign was widely ridiculed and attracted fewer than 10,000 supporters"],
        answer: "She led the Clean Up TV campaign attracting nearly 500,000 petitions, but ultimately failed to impact programmes shown",
        feedback: "Mary Whitehouse led the Clean Up TV campaign, attracting nearly 500,000 petitions. This led to the National Viewers and Listeners Association in 1965, soon with 100,000 members. But it failed to impact programmes shown. Michael Grade put it: 'she really wanted television to be propaganda for a very moral view of the world'."
    },
    {
        topic: "Social and Cultural Change 1960s",
        question: "What percentage of May 1965's top 10 US singles chart positions were held by British acts?",
        options: ["5 out of 10", "9 out of 10", "7 out of 10", "All 10 out of 10"],
        answer: "9 out of 10",
        feedback: "In May 1965, British records held 9 out of 10 top places in the US singles chart, demonstrating the extraordinary global impact of British pop music - the Beatles, Rolling Stones, and others - during the 1960s."
    },
    {
        topic: "Women's Rights 1964-70",
        question: "What was the Ford Dagenham Strike of 1968 and what did it lead to?",
        options: ["Male workers struck in support of female colleagues' equal pay demands, winning immediate equality", "Women sewing machinists walked out over a regrading leaving them 15% below male rates - it led directly to the 1970 Equal Pay Act", "Female workers struck demanding access to the same training schemes as men", "A wildcat strike by women workers that the TUC refused to support, highlighting union sexism"],
        answer: "Women sewing machinists walked out over a regrading leaving them 15% below male rates - it led directly to the 1970 Equal Pay Act",
        feedback: "Women sewing machinists at Ford's Dagenham plant walked out in 1968, halting car production. The regrading left them 15% below the male rate. Barbara Castle intervened - their pay was raised to 8% below men's rate. Only by 1984 was 95% of men's rate secured. It led directly to the 1970 Equal Pay Act."
    },
    {
        topic: "Women's Rights 1964-70",
        question: "What proportion of the labour force were women in 1951 compared to 1971?",
        options: ["20% in 1951 rising to 28% in 1971", "35% in 1951 rising to 42% in 1971", "25% in 1951 rising to 30% in 1971", "31% in 1951 rising to 37% in 1971"],
        answer: "31% in 1951 rising to 37% in 1971",
        feedback: "Women rose from 31% of the total labour force in 1951 to 37% in 1971. However, a 1965 Ministry of Labour survey found most women employed in low skill, low pay jobs - only 5% were managers, the same figure in 1970."
    },
    {
        topic: "Women's Rights 1964-70",
        question: "What were the limitations of the Women's Liberation Movement?",
        options: ["Male left-wing comrades expected women to 'lick envelopes and make tea'; popular magazines kept revisiting 'getting and keeping your man'; and sexual freedom created new objectification", "It failed entirely to achieve any legislative change during the 1960s and 1970s", "It was entirely middle class with no connection to working class women's concerns", "The movement was illegal under obscenity laws and its leaders were frequently imprisoned"],
        answer: "Male left-wing comrades expected women to 'lick envelopes and make tea'; popular magazines kept revisiting 'getting and keeping your man'; and sexual freedom created new objectification",
        feedback: "Male comrades on the left expected women to 'lick envelopes and make tea rather than make speeches'. Popular publications like Woman's Own constantly revisited 'getting and keeping your man'. Sexual freedom led to new objectification - women were increasingly sexualised rather than liberated."
    },
    {
        topic: "Immigration and Race 1964-70",
        question: "What was the Commonwealth Immigrants Act 1968 and why was it controversial?",
        options: ["It introduced a language test for all Commonwealth immigrants seeking permanent residence", "Triggered by the Kenyan Asian influx, it restricted citizenship to those with a parent or grandparent born in the UK", "It banned all new Commonwealth immigration regardless of passport status", "It reduced work vouchers to 8,500 per year with broad parliamentary support"],
        answer: "Triggered by the Kenyan Asian influx, it restricted citizenship to those with a parent or grandparent born in the UK",
        feedback: "When Kenya gained independence in 1963, 40,000 Asians held British passports. 13,000 arrived in the first two months of 1967 alone. The emergency Act restricted citizenship to those with at least one parent or grandparent born in the UK - effectively excluding Kenyan Asians. 35 Labour, 15 Tory, and all Liberal MPs voted against it."
    },
    {
        topic: "Immigration and Race 1964-70",
        question: "What was Enoch Powell's 'Rivers of Blood' speech?",
        options: ["A private letter to the Prime Minister leaked to the press calling for voluntary repatriation", "A measured parliamentary speech calling for immigration controls, widely supported by both parties", "A House of Commons speech that led directly to the Race Relations Act 1968 being strengthened", "A speech predicting racial violence and arguing the Race Relations Bill would give 'the black man the whip hand' - Heath sacked him, yet 74% of a poll supported Powell"],
        answer: "A speech predicting racial violence and arguing the Race Relations Bill would give 'the black man the whip hand' - Heath sacked him, yet 74% of a poll supported Powell",
        feedback: "Powell's speech predicted racial violence: 'I seem to see the Tiber foaming with much blood'. He argued the Race Relations Bill would mean 'the black man will have the whip hand over the white man'. Heath sacked him from the shadow cabinet, yet 74% of a poll supported Powell, 80% wanted stricter controls, and he received 43,000 letters within weeks."
    },
    {
        topic: "Immigration and Race 1964-70",
        question: "How many Kenyan Asians arrived in the first two months of 1967?",
        options: ["Around 7,000", "Around 20,000", "Around 13,000", "Around 3,000"],
        answer: "Around 13,000",
        feedback: "Around 13,000 Kenyan Asians arrived in the first two months of 1967 alone - prompting the emergency Commonwealth Immigrants Act 1968 which restricted UK citizenship to those with at least one parent or grandparent born in the UK."
    },
    {
        topic: "Northern Ireland 1964-70",
        question: "What was the Battle of the Bogside in 1969?",
        options: ["Skirmishes after the Apprentice Boys march rapidly escalated - 8 were killed, 750 injured, and 2.25 million pounds in damage caused", "A siege of the Bogside by British troops that ended with IRA surrender", "An IRA attack on the RUC that killed 15 police officers", "A loyalist attack on Catholic homes in Belfast that triggered British Army deployment"],
        answer: "Skirmishes after the Apprentice Boys march rapidly escalated - 8 were killed, 750 injured, and 2.25 million pounds in damage caused",
        feedback: "The Apprentice Boys were permitted to march through Londonderry, passing close to the Catholic Bogside. Skirmishes rapidly escalated into a full-scale uprising. The RUC used tear gas and baton charges. 8 were killed by the RUC and B Specials, at least 750 injured, and 2.25 million pounds in compensation was owed."
    },
    {
        topic: "Northern Ireland 1964-70",
        question: "What was the impact of the Falls Road Curfew of 1970?",
        options: ["It led to the Sunningdale Agreement as both sides sought to de-escalate tensions", "It successfully suppressed IRA activity and reduced violence for the next two years", "The army found 100 weapons but caused considerable damage and 4 deaths - overnight, Catholic opinion turned from neutral to outright hostility", "It was welcomed by Catholic communities as proof the army was targeting IRA gun caches"],
        answer: "The army found 100 weapons but caused considerable damage and 4 deaths - overnight, Catholic opinion turned from neutral to outright hostility",
        feedback: "The Falls Road curfew of 1970 saw the army find 100 weapons, but considerable damage was done to households and 4 people died - none with any IRA connection. Overnight, population sentiment turned from neutral or sympathetic to the military presence to outright hatred."
    },
    {
        topic: "Education Reform 1960s",
        question: "What was Tony Crosland's Circular 10/65?",
        options: ["Rather than ordering comprehensivisation, it requested it - making funding for new school buildings available only for comprehensives", "It ordered all local authorities to immediately convert grammar schools to comprehensives", "It introduced the national curriculum for the first time", "It created the polytechnic system by converting technical colleges into degree-awarding institutions"],
        answer: "Rather than ordering comprehensivisation, it requested it - making funding for new school buildings available only for comprehensives",
        feedback: "Crosland accelerated the shift to comprehensives via Circular 10/65, making funding for new school buildings only available for comprehensives. He privately declared: 'If it's the last thing I do, I'm going to destroy every f***ing grammar school in England. And Wales. And Northern Ireland.' Change had already begun - 90 of 146 authorities were moving to comprehensives by 1962."
    },
    {
        topic: "Education Reform 1960s",
        question: "What was the Open University and why was Wilson proud of it?",
        options: ["High quality degree-level learning taught by radio and TV for those who had never attended university - by 1980 it had 70,000 students", "A distance learning programme exclusively for women returning to work after raising children", "A government-funded adult literacy programme that expanded into higher education", "A network of evening classes bringing degree-level education to factory workers"],
        answer: "High quality degree-level learning taught by radio and TV for those who had never attended university - by 1980 it had 70,000 students",
        feedback: "Wilson said the Open University was what he most wanted to be remembered for. Jennie Lee was appointed to handle the project - her working class background was crucial. First students began January 1971, taught by radio and TV. Tory Ian Macleod called it 'blithering nonsense'. By 1980 it had 70,000 students, awarding more degrees than Oxbridge."
    },
    {
        topic: "Education Reform 1960s",
        question: "What did the Robbins Report 1963 reveal about university attendance in Britain?",
        options: ["Only 10% of Britain's youngsters attended its 30 universities vs 25% in France and 40% in the USA", "Only 4% of Britain's youngsters attended its 30 universities vs 12% in France and 25% in the USA", "Only 2% of Britain's youngsters attended its 30 universities vs 8% in France and 15% in the USA", "Only 8% of Britain's youngsters attended its 30 universities vs 20% in France and 35% in the USA"],
        answer: "Only 4% of Britain's youngsters attended its 30 universities vs 12% in France and 25% in the USA",
        feedback: "The Robbins Report 1963 revealed just 4% of Britain's youngsters attended its 30 universities vs 12% in France, 25% in the USA, with most following arts-related courses - few studying science and technology. This led to significant expansion of higher education."
    },
    {
        topic: "Wilson and Foreign Policy",
        question: "How did Wilson handle British military commitment to Vietnam?",
        options: ["Wilson sent 5,000 British troops under pressure from President Johnson", "Wilson supported the US position publicly but privately lobbied Johnson for a ceasefire", "Wilson never sent a single regular soldier to Vietnam, despite enormous pressure from Johnson", "Wilson offered naval support but refused to commit ground troops"],
        answer: "Wilson never sent a single regular soldier to Vietnam, despite enormous pressure from Johnson",
        feedback: "Wilson never sent a single regular soldier to Vietnam. He needed US support for Rhodesian sanctions, and Americans wanted British involvement in Vietnam. He got Kosygin to agree to an American-approved peace plan, until Johnson changed his mind at the last minute."
    },
    {
        topic: "Wilson and Foreign Policy",
        question: "What was the Rhodesia Crisis and why did it embarrass Wilson?",
        options: ["Wilson successfully negotiated a peaceful transition to Black majority rule in Rhodesia by 1970", "Wilson met Smith aboard HMS Tiger and HMS Fearless - Smith agreed to terms both times, then rejected them at home", "Rhodesia agreed to Black majority rule in 1968 following effective British economic sanctions", "Wilson sent troops to Rhodesia to enforce sanctions, leading to a minor military conflict"],
        answer: "Wilson met Smith aboard HMS Tiger and HMS Fearless - Smith agreed to terms both times, then rejected them at home",
        feedback: "By mid-1966 Smith's regime had dug in - sanctions had evaporated as Rhodesia traded through Mozambique and South Africa. Wilson met Smith aboard HMS Tiger in 1966 and HMS Fearless in 1968 - both times Smith agreed to packages then rejected them. Sandbrook said it symbolised 'British government's fading reputation'."
    },
    {
        topic: "Wilson and Foreign Policy",
        question: "What was Healey's White Paper 1967 on defence?",
        options: ["It committed Britain to strengthening its NATO forces in Europe as its primary military role", "It announced a massive increase in defence spending to reassert British global power", "It announced Britain would develop its own nuclear deterrent independent of the US", "It announced withdrawal from Malaysia, Singapore and the Persian Gulf - Britain would cease to play a worldwide military role"],
        answer: "It announced withdrawal from Malaysia, Singapore and the Persian Gulf - Britain would cease to play a worldwide military role",
        feedback: "Healey's White Paper 1967 announced British troops would be pulled out of Malaysia, Singapore and the Persian Gulf within 10 years - Britain would cease to play a worldwide military role. This marked the end of Britain's pretensions as a global power."
    },

    // =====================================
    // END OF POST-WAR CONSENSUS 1970-1979
    // =====================================

    {
        topic: "Heath's Government 1970-74",
        question: "What was Heath's initial economic approach and how did it fare?",
        options: ["Heath successfully reduced inflation through strict monetarist control of the money supply", "Heath declared a 'new style of government' reducing state intervention - but inflation rose to 15%, the BOP deficit hit 1 billion pounds, and unemployment exceeded 850,000", "Heath immediately joined the EEC and used European structural funds to modernise British industry", "Heath continued the Keynesian consensus, expanding public spending and achieving low inflation"],
        answer: "Heath declared a 'new style of government' reducing state intervention - but inflation rose to 15%, the BOP deficit hit 1 billion pounds, and unemployment exceeded 850,000",
        feedback: "Heath entered office declaring a 'new style of government' - a Tory 'quiet revolution' reducing state intervention. But inflation rose to 15% by end of 1971, and by 1973 the BOP deficit was nearly 1 billion pounds with unemployment over 850,000. Chancellor Ian Macleod died weeks into the government."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was Heath's 'U-Turn' of 1972?",
        options: ["Heath reversed his industrial relations legislation and reached a compromise with the TUC", "Heath returned to controlling prices and incomes, bailing out failing companies and nationalising Rolls-Royce", "Heath called a snap election to seek a new mandate for his economic policies", "Heath reversed his pro-European stance and demanded renegotiation of EEC terms"],
        answer: "Heath returned to controlling prices and incomes, bailing out failing companies and nationalising Rolls-Royce",
        feedback: "In 1972 Heath announced a return to controlling prices and incomes - directly contradicting his original free market approach. He bailed out failing companies like Upper Clyde Shipbuilders and nationalised Rolls-Royce. Marr said he was 'behaving like a Wilson-era socialist'."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was the Industrial Relations Act 1971 and why did it fail?",
        options: ["It set up a National Industrial Relations Court - but the TUC voted not to cooperate and 23.9 million working days were lost in 1972", "It introduced compulsory arbitration for all industrial disputes and was broadly welcomed", "It successfully reduced strike days by 50% and improved industrial relations", "It abolished the right to strike in essential services but was overturned by the courts"],
        answer: "It set up a National Industrial Relations Court - but the TUC voted not to cooperate and 23.9 million working days were lost in 1972",
        feedback: "The Industrial Relations Act 1971 set up a National Industrial Relations Court with powers to enforce strike ballots and 60-day cooling-off periods. But the TUC formally voted not to cooperate and instructed all unions not to register. Murphy said Heath had 'made the mistake of legislating too quickly, without sufficient consultation'."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was the outcome of the 1972 miners' strike?",
        options: ["The strike was settled by an independent pay board awarding miners a 5% increase", "Heath used emergency powers to break the strike after two days, imprisoning the NUM leadership", "The NUM used flying pickets to bring coal movement to a standstill, winning a 21% wage increase - nearly 3 times what employers offered", "Miners struck for two weeks, accepted a modest increase, and returned to work without incident"],
        answer: "The NUM used flying pickets to bring coal movement to a standstill, winning a 21% wage increase - nearly 3 times what employers offered",
        feedback: "In 1972 the NUM, led by Arthur Scargill, used flying pickets to bring the movement of coal to a standstill. The NUM gained a 21% wage increase - nearly 3 times what employers had originally offered. A major defeat for Heath's government, emboldening the unions significantly."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was Bloody Sunday and what were its consequences?",
        options: ["The Parachute Regiment killed 13 unarmed civilians in Londonderry in 1972 - the British embassy in Dublin was burned and direct rule was imposed", "RUC officers fired on a civil rights march, killing 6 people and triggering the formation of the Provisional IRA", "IRA bombers killed 13 soldiers in Londonderry, leading to the introduction of internment", "Loyalist paramilitaries killed 13 Catholics in Belfast, leading Wilson to deploy British troops"],
        answer: "The Parachute Regiment killed 13 unarmed civilians in Londonderry in 1972 - the British embassy in Dublin was burned and direct rule was imposed",
        feedback: "On Bloody Sunday 1972, troops from the Parachute Regiment killed 13 unarmed civilians in Londonderry. Mass protests followed - the British embassy in Dublin was burned and the Parachute Regiment's Aldershot HQ was bombed. This led to the suspension of Stormont and direct rule from Westminster."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "Why did Heath take Britain into the EEC in 1973?",
        options: ["He joined primarily to access European agricultural subsidies for British farmers", "He was forced to by American pressure and had no personal enthusiasm for European integration", "Heath was very pro-European and saw it as a means to modernise British society - the Commons approved entry 356 to 244", "EEC entry was a condition of the IMF loan that bailed out the British economy in 1972"],
        answer: "Heath was very pro-European and saw it as a means to modernise British society - the Commons approved entry 356 to 244",
        feedback: "Heath was very pro-European and saw EEC membership as a means to modernise British society, believing Britain could no longer act alone in the world. The Commons approved entry 356 votes to 244 and Britain formally joined in January 1973."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "By how much did oil prices rise following the Yom Kippur War?",
        options: ["From 5 to 20 dollars a barrel by end of decade", "From 2 to 10 dollars a barrel by end of decade", "From 3 to 50 dollars a barrel by end of decade", "From 2 to 35 dollars a barrel by end of decade"],
        answer: "From 2 to 35 dollars a barrel by end of decade",
        feedback: "The Yom Kippur War caused OPEC to cut oil supplies to western countries - coinciding with British EEC entry in 1973. Prices spiked from 2 to 35 dollars a barrel by the end of the decade, removing the economic stimulus Britain had hoped for from EEC membership."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was the Barber Boom?",
        options: ["Chancellor Barber removed lending limits for banks - lending rose 37% in 1972, 43% in 1973 - causing an inflation and house price boom", "A period of tight monetary policy that brought inflation down to record lows under Chancellor Barber", "Barber's successful programme of public spending cuts that balanced the budget by 1973", "A failed attempt by Barber to reduce VAT that led to runaway inflation"],
        answer: "Chancellor Barber removed lending limits for banks - lending rose 37% in 1972, 43% in 1973 - causing an inflation and house price boom",
        feedback: "The Barber Boom saw Chancellor Barber remove lending limits for high street banks - lending rose 37% in 1972, 43% in 1973 - causing an inflation and house price boom. This made Heath's subsequent attempts to control inflation through wages policy even more difficult."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What happened when the 1973-74 miners voted on whether to strike?",
        options: ["68% voted to strike - Heath immediately agreed to talks to avoid a confrontation", "91% voted to strike - Heath immediately conceded to all demands to avoid economic paralysis", "81% voted to strike - Heath rejected the TUC's offer to treat miners as a special case and called the Three Day Week", "55% voted to strike - a slim majority that Heath tried to challenge legally"],
        answer: "81% voted to strike - Heath rejected the TUC's offer to treat miners as a special case and called the Three Day Week",
        feedback: "81% of the miners voted to strike after the NUM executive rejected a 13% pay increase. Heath rejected the TUC's offer to treat miners as a special case and announced the Three Day Week, severely restricting electricity. Television ended at 10:30, citizens had to share baths and brush teeth in the dark."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What was the Social Contract under Wilson's second government?",
        options: ["An agreement abolishing the Industrial Relations Act in exchange for a TUC wage limit - but wages rose 19% in 1974 and 23% in 1975", "A formal agreement between all three main parties to maintain the post-war consensus", "A binding legal agreement between employers and unions to submit all disputes to arbitration", "A European-style works council system giving unions representation on company boards"],
        answer: "An agreement abolishing the Industrial Relations Act in exchange for a TUC wage limit - but wages rose 19% in 1974 and 23% in 1975",
        feedback: "Wilson's second government abolished the Industrial Relations Act and introduced the Social Contract - the TUC agreed to a 6 pounds per week limit on wage rises. However, the miners' strike was settled by allowing their full wage claim, encouraging further action. Wages rose 19% in 1974 and 23% in 1975."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What was the 1976 IMF crisis and what were its consequences?",
        options: ["16% inflation and the pound falling to 1.57 dollars forced Healey to seek a 3 billion pound IMF loan - 2.5 billion in cuts followed", "The IMF imposed a 20% devaluation of sterling as a condition of the emergency loan", "Britain refused the IMF loan and cut spending voluntarily, emerging stronger within six months", "Britain was forced to accept IMF supervision of all economic policy for five years"],
        answer: "16% inflation and the pound falling to 1.57 dollars forced Healey to seek a 3 billion pound IMF loan - 2.5 billion in cuts followed",
        feedback: "The 1976 crisis was caused by a huge BOP deficit, 16% inflation, unemployment over 1 million, and the pound falling to 1.57 dollars. Healey asked the IMF for 3 billion pounds, granted on condition of massive cuts. Along with North Sea Oil, by 1977 Britain could repay much of the loan. But it was politically disastrous - Labour lost 4 by-elections and its Commons majority."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What was Callaghan's statement about Keynesian economics and why was it significant?",
        options: ["'Britain must join the ERM to solve inflation' - marking a shift to European monetary discipline", "'Inflation is the enemy of the working class' - signalling a shift to monetarist economics", "'The trade unions must accept that wage restraint is the price of full employment'", "'We used to think you could spend your way out of a recession... I tell you in all candour that that option no longer exists'"],
        answer: "'We used to think you could spend your way out of a recession... I tell you in all candour that that option no longer exists'",
        feedback: "Callaghan said: 'We used to think you could spend your way out of a recession... I tell you in all candour that that option no longer exists.' Some historians argue this was the moment the post-war consensus ended - Labour had made a decisive break from Keynesian economics."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What was the Winter of Discontent 1978-79?",
        options: ["Callaghan proposed limiting wages to 5% at a time of 10% inflation - lorry drivers, rubbish collectors and grave diggers struck, and 29 million working days were lost in 1979", "A series of IRA bombings across mainland Britain that paralysed public life", "Mass unemployment protests sweeping through northern cities in the winter of 1978", "A period of severe blizzards that disrupted the economy and brought down Callaghan's government"],
        answer: "Callaghan proposed limiting wages to 5% at a time of 10% inflation - lorry drivers, rubbish collectors and grave diggers struck, and 29 million working days were lost in 1979",
        feedback: "Callaghan proposed limiting wage increases to 5% at a time of 10% inflation. The Winter of Discontent followed - lorry drivers struck threatening food supplies, school meal workers, rubbish collectors and grave diggers struck. The press labelled Callaghan's relaxed leadership as 'Crisis? What crisis?' 29 million working days were lost in 1979."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What caused Callaghan to call a general election in 1979?",
        options: ["The Liberal Party withdrew from the Lib-Lab Pact, removing his working majority", "Devolution referendums failed to reach the 40% threshold - the SNP withdrew support and a vote of no confidence was passed", "He chose to call an election at the most favourable moment following economic recovery", "Callaghan resigned after losing a vote on Winter of Discontent emergency measures"],
        answer: "Devolution referendums failed to reach the 40% threshold - the SNP withdrew support and a vote of no confidence was passed",
        feedback: "Devolution acts required 40% of the electorate to vote in favour - only 12% of Welsh and 33% of Scots voted yes. Plans were shelved, the SNP withdrew support, a vote of no confidence was passed, and Callaghan was forced to call the general election that Labour lost."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What was the 1975 EEC referendum result?",
        options: ["17 million voted yes, 8 million voted no - avoiding a Labour split as 'no' campaigners could not argue with the democratic result", "Britain voted to leave the EEC, forcing renegotiation of entry terms", "51% yes, 49% no - failing to resolve the issue within Labour", "The referendum returned a 70% yes vote, decisively ending debate"],
        answer: "17 million voted yes, 8 million voted no - avoiding a Labour split as 'no' campaigners could not argue with the democratic result",
        feedback: "In 1975, 17 million voted yes and 8 million voted no. Only 2/3 of the electorate voted. Crucially, it avoided a Labour party split - 'no' campaigners within Labour could not argue with the democratic result. Wilson had promised the referendum precisely to manage deep divisions within his party."
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "How many working days were lost in strikes during the Winter of Discontent in 1979?",
        options: ["Around 10 million", "Around 40 million", "Around 29 million", "Around 15 million"],
        answer: "Around 29 million",
        feedback: "29 million working days were lost in 1979 during the Winter of Discontent - up from 1.75 million in 1963, reflecting how dramatically industrial relations had deteriorated. The press labelled Callaghan's relaxed leadership style as 'Crisis? What crisis?'"
    },
    {
        topic: "Wilson and Callaghan 1974-79",
        question: "What were the results of the Scottish and Welsh devolution referendums in 1979?",
        options: ["Scotland 33% yes, Wales 12% yes - both failing to reach the 40% threshold", "Scotland 45% yes, Wales 30% yes - both failing to reach the 40% threshold", "Scotland 51% yes, Wales 35% yes - both passed but fell short of the required parliamentary margin", "Scotland 40% yes, Wales 20% yes - Scotland passed, Wales failed"],
        answer: "Scotland 33% yes, Wales 12% yes - both failing to reach the 40% threshold",
        feedback: "The devolution referendums required 40% of the electorate to vote in favour. Only 12% of Welsh and 33% of Scots voted yes - both failing the threshold. Plans were shelved, the SNP withdrew support, a vote of no confidence followed, and Callaghan was forced to call the general election Labour lost."
    },
    {
        topic: "Society in the 1970s",
        question: "What progress did women make in the 1970s?",
        options: ["Women achieved equal representation in Parliament and the professions by the mid-1970s", "Margaret Thatcher's election as Conservative leader in 1975 delivered equal opportunities", "The pill on the NHS from 1971, mortgages without male guarantors from 1971, and 1975's Equal Pay, Sex Discrimination, and Employment Protection Acts - though women's wages were still only 70% of men's by 1977", "Full equality was achieved in the workplace by 1979 following the Equal Pay Act"],
        answer: "The pill on the NHS from 1971, mortgages without male guarantors from 1971, and 1975's Equal Pay, Sex Discrimination, and Employment Protection Acts - though women's wages were still only 70% of men's by 1977",
        feedback: "The contraceptive pill became available on the NHS in 1971, women could take out mortgages without male guarantors from 1971, and 1975 saw the Equal Pay Act, Sex Discrimination Act, and Employment Protection Act (maternity leave). The 1976 Domestic Violence Act allowed restraining orders. But women's wages were only 70% of men's by 1977."
    },
    {
        topic: "Society in the 1970s",
        question: "What was the National Front and how significant was it in the 1970s?",
        options: ["An anti-immigration pressure group that successfully lobbied for the 1971 Immigration Act", "It grew to 20,000 members by 1976 - its marches provoked 100 violent incidents including 2 murders, and assaults on minorities rose by a third", "A mainstream party that won 15 seats in the 1979 general election", "A small fringe group with fewer than 1,000 members posing no serious political threat"],
        answer: "It grew to 20,000 members by 1976 - its marches provoked 100 violent incidents including 2 murders, and assaults on minorities rose by a third",
        feedback: "The National Front grew rapidly to 20,000 members by 1976. Its marches provoked violence - 100 incidents over 2.5 years including 2 murders. Assaults on Asians and Afro-Caribbeans rose by a third. But the Rock Against Racism movement attracted 100,000 to a Trafalgar Square concert in opposition."
    },
    {
        topic: "Society in the 1970s",
        question: "What was the 1972 Ugandan Asian crisis and how did Heath respond?",
        options: ["The Ugandan Asians were held in detention camps for six months while Parliament debated", "Heath admitted Ugandan Asians only after enormous US pressure and public protests", "Heath refused entry and they were resettled in Canada and Australia instead", "Idi Amin expelled Asians - 28,000 with British passports were admitted, Heath set up a resettlement board, and most settled prosperously"],
        answer: "Idi Amin expelled Asians - 28,000 with British passports were admitted, Heath set up a resettlement board, and most settled prosperously",
        feedback: "In 1972 Idi Amin expelled Asians from Uganda. The 28,000 with British passports were allowed exemptions from the 1971 Immigration Act. Heath set up a resettlement board. Most settled and lived prosperously - an example of successful managed immigration in contrast to the hostile atmosphere of the era."
    },
    {
        topic: "Society in the 1970s",
        question: "What did punk culture reflect about 1970s Britain?",
        options: ["Bands like the Sex Pistols played loud, fast music with shocking attire - 'God Save the Queen' reached number 2, reflecting social alienation and anger among young people", "Punk was an apolitical musical movement focused purely on fashion", "Punk was a middle class art school movement with little connection to working class experience", "Punk was primarily a response to the dominance of American pop music in the British charts"],
        answer: "Bands like the Sex Pistols played loud, fast music with shocking attire - 'God Save the Queen' reached number 2, reflecting social alienation and anger among young people",
        feedback: "Punks rejected all norms - the Sex Pistols and The Damned played loud, fast music with deliberately shocking attire. 'God Save the Queen' reached number 2 - criticising the monarchy as 'the fascist regime'. Punk reflected the social alienation, anger and hopelessness of young people in the 1970s."
    },
    {
        topic: "Society in the 1970s",
        question: "What environmental developments characterised the 1970s?",
        options: ["A series of nuclear accidents in Britain caused widespread public opposition to atomic power", "Greenpeace UK was founded in 1977, the Torrey Canyon wreck caused massive pollution in 1967, and the People's Party (later Green Party) stood 53 candidates in 1979", "Environmentalism was a fringe concern with little public support in 1970s Britain", "The government introduced strict environmental regulations following the Clean Air Act"],
        answer: "Greenpeace UK was founded in 1977, the Torrey Canyon wreck caused massive pollution in 1967, and the People's Party (later Green Party) stood 53 candidates in 1979",
        feedback: "Photos of Earth from space highlighted its fragility. David Attenborough's 'Life on Earth' showed the beauty of the natural world. The 1967 Torrey Canyon wreck caused massive pollution in SW England. Greenpeace UK was founded in 1977. The People's Party (later Green Party) stood 53 candidates in the 1979 election."
    },
    {
        topic: "Society in the 1970s",
        question: "What percentage of women's wages compared to men's were women earning in 1970, and how had this changed by 1977?",
        options: ["From 59% in 1970 to 70% in 1977", "From 50% in 1970 to 65% in 1977", "From 75% in 1970 to 85% in 1977", "From 45% in 1970 to 55% in 1977"],
        answer: "From 59% in 1970 to 70% in 1977",
        feedback: "Women's wages rose from 59% of men's in 1970 to 70% by 1977 following the Equal Pay Act and Sex Discrimination Act - progress, but still far from equality. The Equal Opportunities Commission set up to enforce the law was largely toothless, completing only 9 investigations in 8 years."
    },
    {
        topic: "Society in the 1970s",
        question: "How many National Front members were there by 1976?",
        options: ["Around 50,000", "Around 20,000", "Around 5,000", "Around 10,000"],
        answer: "Around 20,000",
        feedback: "The National Front grew rapidly to 20,000 members by 1976, rebranding as anti-radical and attracting a broad membership. Its marches provoked 100 incidents of violence over 2.5 years, including 2 murders."
    },
    {
        topic: "Britain and Europe 1970-79",
        question: "What was the 1975 EEC referendum result and why was it significant for Labour?",
        options: ["The referendum returned a 70% yes vote, decisively ending debate", "51% yes, 49% no - failing to resolve the issue within Labour", "17 million voted yes, 8 million voted no - avoiding a Labour split as 'no' campaigners could not argue with the democratic result", "Britain voted to leave the EEC, forcing renegotiation of entry terms under Callaghan"],
        answer: "17 million voted yes, 8 million voted no - avoiding a Labour split as 'no' campaigners could not argue with the democratic result",
        feedback: "In 1975, 17 million voted yes and 8 million voted no. Only 2/3 of the electorate voted. Crucially, it avoided a Labour party split - 'no' campaigners within Labour could not argue with the democratic result. Wilson had promised the referendum precisely to manage deep divisions within his party."
    },
    {
        topic: "Britain and Europe 1970-79",
        question: "What were the unfavourable terms of British EEC entry in 1973?",
        options: ["Britain had to abolish sterling and adopt the European currency immediately", "The Common Agricultural Policy imposed high tariffs on food imports, and the 1973 oil crisis caused a recession removing the hoped-for economic stimulus", "Britain was required to withdraw all troops from Germany within 5 years of entry", "Britain had to give up its UN Security Council seat as a condition of entry"],
        answer: "The Common Agricultural Policy imposed high tariffs on food imports, and the 1973 oil crisis caused a recession removing the hoped-for economic stimulus",
        feedback: "The terms of British EEC entry were unfavourable - the Common Agricultural Policy imposed high tariffs on food imports. The Arab-Israeli War 1973 led to an oil crisis causing a recession across western Europe, removing the economic stimulus Britain had hoped for with its joining."
    },
    {
        topic: "Britain and Europe 1970-79",
        question: "Why did Wilson apply to rejoin EEC negotiations in 1967?",
        options: ["The US threatened to cut financial support unless Britain joined the EEC", "Heath pressured Wilson to apply on behalf of the Conservative opposition", "Wilson was personally enthusiastic about European integration and saw it as Britain's future", "Commonwealth trade was declining, the EEC completed its Customs Union in 1968, and Britain's GDP grew only 2.3% per year vs 4.2% for the Six"],
        answer: "Commonwealth trade was declining, the EEC completed its Customs Union in 1968, and Britain's GDP grew only 2.3% per year vs 4.2% for the Six",
        feedback: "Wilson applied to rejoin EEC negotiations in 1967 because Commonwealth trade was declining as countries diversified their trade after Macmillan made the move to Europe, the EEC completed its Customs Union in July 1968 closing 250 million European consumers to British goods, and Britain's GDP grew only 2.3% per year 1960-70 compared to 4.2% for the Six."
    }
]

const usQs = [
    {
        topic: "Civil War",
        question: "How many states seceded from the Union to form the Confederacy?",
        options: ["11", "13", "7", "9"],
        answer: "11",
        feedback: "A total of 11 states seceded from the Union and set up the Confederacy."
    },
    {
        topic: "Civil War",
        question: "Approximately what percentage of the US population died in the Civil War?",
        options: ["2%", "0.5%", "5%", "1%"],
        answer: "2%",
        feedback: "At least 620,000 soldiers died - roughly 2% of the population in 1861."
    },
    {
        topic: "Civil War",
        question: "How did casualties at the Battle of Antietam compare to American deaths at D-Day?",
        options: ["Twice as many", "Half as many", "Roughly equal", "Three times as many"],
        answer: "Three times as many",
        feedback: "The number of casualties in a single day at Antietam was three times the American deaths at D-Day."
    },
    {
        topic: "Civil War",
        question: "What fraction of Mississippi's state revenue in 1865 was spent on artificial limbs?",
        options: ["1/2", "1/10", "1/3", "1/5"],
        answer: "1/5",
        feedback: "Mississippi spent one fifth of its entire state revenue in 1865 on artificial limbs, illustrating the devastating human cost of the Civil War on the South."
    },
    {
        topic: "Civil War",
        question: "By how much did the North's wealth increase over the course of the 1860s?",
        options: ["Over 50%", "Over 75%", "Over 100%", "Over 25%"],
        answer: "Over 50%",
        feedback: "The North's wealth increased by over 50% over the course of the 1860s, while the South was left economically devastated."
    },
    {
        topic: "Civil War",
        question: "How much had the South invested in slaves in 1860?",
        options: ["2 billion dollars", "3.5 billion dollars", "5 billion dollars", "1 billion dollars"],
        answer: "3.5 billion dollars",
        feedback: "Southern investment in slaves stood at 3.5 billion dollars in 1860. After the Civil War and abolition, that investment became entirely worthless."
    },
    {
        topic: "Civil War",
        question: "Where did Robert E. Lee surrender to Ulysses S. Grant in April 1865?",
        options: ["Petersburg, Virginia", "Richmond, Virginia", "Appomattox Court House", "Gettysburg, Pennsylvania"],
        answer: "Appomattox Court House",
        feedback: "In April 1865, Robert E. Lee surrendered to Ulysses S. Grant at Appomattox Court House, effectively ending the Civil War."
    },
    {
        topic: "Civil War",
        question: "How many soldiers died in the Civil War in total?",
        options: ["Around 200,000", "Around 400,000", "At least 620,000", "Around 800,000"],
        answer: "At least 620,000",
        feedback: "At least 620,000 soldiers died in the Civil War - around 2% of the total population in 1861."
    },
    {
        topic: "Civil War",
        question: "What happened to the plantation system after the Civil War?",
        options: ["It continued largely unchanged under new management", "It was bought up by northern industrialists", "It collapsed - great estates were divided into tenant farms rented to sharecroppers", "It was nationalised by the federal government"],
        answer: "It collapsed - great estates were divided into tenant farms rented to sharecroppers",
        feedback: "The plantation system collapsed after the Civil War, with great estates divided into tenant farms rented to sharecroppers."
    },
    {
        topic: "Civil War",
        question: "What did the 13th Amendment do?",
        options: ["Gave citizenship to all born in the US", "Established equal protection under the law", "Abolished slavery", "Gave voting rights to freed slaves"],
        answer: "Abolished slavery",
        feedback: "The 13th Amendment abolished slavery across the United States."
    },
    {
        topic: "Reconstruction",
        question: "When was the Freedmen's Bureau established, and what was its original intended duration?",
        options: ["1870, two years", "1863, three years", "1865, one year", "1867, five years"],
        answer: "1865, one year",
        feedback: "The Freedmen's Bureau was set up in 1865 to help former slaves with education and employment. It was only supposed to run for one year but was later extended to five years."
    },
    {
        topic: "Reconstruction",
        question: "What did Lincoln's 10% Plan require for a rebel state to be readmitted?",
        options: ["All citizens renounce slavery formally", "50% of electorate pledge loyalty", "10% of electorate pledge future loyalty to the US", "A new state constitution approved by Congress"],
        answer: "10% of electorate pledge future loyalty to the US",
        feedback: "Under the 10% Plan, rebel states could be readmitted if 10% of the electorate agreed to future allegiance to the US and supported existing acts regarding slavery."
    },
    {
        topic: "Reconstruction",
        question: "What did the Radical Republicans' Wade-Davis Bill require?",
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
        options: ["3 votes", "1 vote", "10 votes", "5 votes"],
        answer: "1 vote",
        feedback: "Johnson escaped impeachment by just one vote after an 11-week trial, having promised to enforce Reconstruction acts and stop attacking Congress publicly."
    },
    {
        topic: "Reconstruction",
        question: "What did the 15th Amendment of 1869 guarantee?",
        options: ["Equal pay regardless of race", "Voting rights could not be denied based on race, color or previous servitude", "Citizenship for all born in the US", "Abolition of slavery across the US"],
        answer: "Voting rights could not be denied based on race, color or previous servitude",
        feedback: "The 15th Amendment gave voting rights to all male freedmen - the right to vote could not be denied on the basis of race, color, or previous servitude."
    },
    {
        topic: "Reconstruction",
        question: "Which Supreme Court case weakened the 14th Amendment by preventing individuals being prosecuted for civil rights violations?",
        options: ["US v Reese", "Plessy v Ferguson", "Marbury v Madison", "Cruikshank v US"],
        answer: "Cruikshank v US",
        feedback: "Cruikshank v US undermined the 14th Amendment by ruling that individuals could not be prosecuted for civil rights violations, severely limiting federal protection of Black Americans."
    },
    {
        topic: "Reconstruction",
        question: "What was the outcome of the 1876 presidential election compromise?",
        options: ["Grant was given a third term in office", "Democrats won in exchange for civil rights protections", "Hayes took the presidency provided Republicans withdrew from the South", "The election was re-run in disputed Southern states"],
        answer: "Hayes took the presidency provided Republicans withdrew from the South",
        feedback: "Hayes won the electoral college 184 to 165. As a compromise, he took the presidency on the condition that Republicans withdrew from the South - effectively ending Reconstruction."
    },
    {
        topic: "Reconstruction",
        question: "How many Black Americans served in Congress during Reconstruction?",
        options: ["10", "17", "30", "5"],
        answer: "17",
        feedback: "During Reconstruction, 17 African Americans served in Congress and 600 in state legislatures. By the end of the century this had fallen to just a few scattered local officials."
    },
    {
        topic: "Reconstruction",
        question: "What was the 1873 Colfax Massacre?",
        options: ["Federal troops massacred a KKK gathering in Louisiana", "A massacre of sharecroppers by plantation owners in Mississippi", "A mob of 150-300 white men including KKK massacred a Black militia defending a courthouse", "Union soldiers fired on white supremacist rioters in South Carolina"],
        answer: "A mob of 150-300 white men including KKK massacred a Black militia defending a courthouse",
        feedback: "After a disputed election, a Black militia defended a courthouse fearing a Democratic takeover. A mob of 150-300 white men including KKK members massacred them - as many as 153 may have died."
    },
    {
        topic: "Reconstruction",
        question: "What did US v Reese open the door to?",
        options: ["Federal prosecution of the KKK", "Biased literacy tests and poll taxes to deny African Americans the vote", "Segregation in public schools", "Re-admission of Confederate states without conditions"],
        answer: "Biased literacy tests and poll taxes to deny African Americans the vote",
        feedback: "US v Reese weakened the enforcement acts and the 15th Amendment, allowing denial of the vote outside of race, color, or previous servitude - opening the floor for biased literacy tests, poll taxes, and other disenfranchisement tactics."
    },
    {
        topic: "Reconstruction",
        question: "When was the KKK started and who founded it?",
        options: ["Confederate veterans in Tennessee, 1866", "Former politicians in Mississippi, 1868", "Union veterans in Ohio, 1865", "Plantation owners in Georgia, 1865"],
        answer: "Confederate veterans in Tennessee, 1866",
        feedback: "The KKK was started by Confederate veterans in Tennessee in 1866. Nathan Bedford Forrest, head of the Klan in 1867, estimated more than 500,000 members in the South."
    },
    {
        topic: "Reconstruction",
        question: "How many KKK members did Nathan Bedford Forrest estimate in the South by 1867?",
        options: ["More than 200,000", "More than 100,000", "More than 500,000", "More than 1,000,000"],
        answer: "More than 500,000",
        feedback: "Nathan Bedford Forrest, head of the Klan in 1867, estimated more than 500,000 members in the South. The KKK used systematic violence, economic bullying and intimidation to suppress Black votes."
    },
    {
        topic: "Reconstruction",
        question: "What factors caused Northern enthusiasm for Reconstruction to wane in the early 1870s?",
        options: ["Corruption under Grant, the Panic of 1873, and Northern disassociation from the Black struggle in the South", "Military success suppressing the KKK made Reconstruction seem complete", "Radical Republicans lost control of Congress in the 1870 midterms", "Grant publicly abandoned Reconstruction policy in 1872"],
        answer: "Corruption under Grant, the Panic of 1873, and Northern disassociation from the Black struggle in the South",
        feedback: "Corruption under Grant fouled the political atmosphere, the Panic of 1873 turned Northern attention to economic problems, and many Northern whites had little personal connection to the African American struggle in the South."
    },
    {
        topic: "Reconstruction",
        question: "What was the 1872 Amnesty Act?",
        options: ["It restored voting rights and the right to hold office to almost all former Confederates", "It extended the Freedmen's Bureau for another five years", "It pardoned all Confederate soldiers convicted of war crimes", "It gave freed slaves the right to claim Confederate land"],
        answer: "It restored voting rights and the right to hold office to almost all former Confederates",
        feedback: "The 1872 Amnesty Act restored voting rights and the right to hold office to all but a few hundred former Confederates, weakening Reconstruction by re-empowering the old Confederate class."
    },
    {
        topic: "Reconstruction",
        question: "How many Black Americans were in Confederate state legislatures during Reconstruction?",
        options: ["Around 100", "Around 300", "Around 600", "Around 900"],
        answer: "Around 600",
        feedback: "During Reconstruction, 600 African Americans served in state legislatures. By the end of the century this had fallen to just a few scattered local officials, reflecting the rollback of Black political power."
    },
    {
        topic: "Reconstruction",
        question: "How many Black refugees fled to Nashville in 1868 escaping KKK violence?",
        options: ["500-1,000", "3,000-4,000", "1,000-2,000", "5,000-6,000"],
        answer: "3,000-4,000",
        feedback: "3,000-4,000 Black refugees streamed into Nashville in 1868, escaping KKK violence. The KKK used squads of masked men who broke into houses, shot, whipped and raped inhabitants."
    },
    {
        topic: "Reconstruction",
        question: "How many people were killed in Louisiana between November 1867 and election day 1868?",
        options: ["Around 200", "Over 2,000", "Over 1,000", "Around 500"],
        answer: "Over 1,000",
        feedback: "Over 1,000 people were murdered between November 1867 and election day 1868 in Louisiana. In St. Landry Parish alone, 200-300 Black people were killed and Black prisoners were marched out and executed."
    },
    {
        topic: "Gilded Age",
        question: "What share of American wealth did the richest 9% own in 1890?",
        options: ["81%", "51%", "71%", "61%"],
        answer: "71%",
        feedback: "By 1890, the richest 9% of Americans owned 71% of all wealth, illustrating the extreme inequality of the Gilded Age."
    },
    {
        topic: "Gilded Age",
        question: "By what point had the US surpassed Britain as the world's leading producer of manufactured goods?",
        options: ["By 1870", "By 1913", "By the middle of the 1880s", "By 1900"],
        answer: "By the middle of the 1880s",
        feedback: "By the middle of the 1880s, the US had surpassed Britain as the world's leading producer of manufactured goods and steel - a remarkable rise from being a second-rate power in 1860."
    },
    {
        topic: "Gilded Age",
        question: "What price did Carnegie sell his business to J.P. Morgan for in 1913?",
        options: ["480 million dollars", "350 million dollars", "600 million dollars", "200 million dollars"],
        answer: "480 million dollars",
        feedback: "Carnegie sold his business to J.P. Morgan in 1913 for 480 million dollars, one of the largest business transactions in history at the time."
    },
    {
        topic: "Gilded Age",
        question: "What share of American oil did Rockefeller control by the 1880s?",
        options: ["Half", "Three quarters", "A quarter", "A third"],
        answer: "Half",
        feedback: "By the 1880s Rockefeller controlled half of all American oil. By 1889 his fortune stood at 200 million dollars."
    },
    {
        topic: "Gilded Age",
        question: "What was the Credit Mobilier scandal?",
        options: ["Congressmen voted themselves salary increases paid for by taxpayers", "Railroad companies colluded to fix freight rates across state lines", "12 members of Congress accepted bribes from Credit Mobilier and agreed to ignore its shady dealings", "Jay Gould manipulated the gold market with presidential connections"],
        answer: "12 members of Congress accepted bribes from Credit Mobilier and agreed to ignore its shady dealings",
        feedback: "The Credit Mobilier scandal revealed that 12 members of Congress had accepted bribes from the company and agreed to ignore its corrupt dealings, badly damaging public trust in government."
    },
    {
        topic: "Gilded Age",
        question: "What caused the Panic of 1873?",
        options: ["Overproduction of wheat flooding international markets", "Collapse of Southern banks after Reconstruction ended", "A run on gold following the 1869 Gold Scandal", "Wild financial speculation by railroad companies - Jay Cooke and Co went bankrupt"],
        answer: "Wild financial speculation by railroad companies - Jay Cooke and Co went bankrupt",
        feedback: "The Panic of 1873 was caused by wild financial speculation from railroad companies. When Jay Cooke and Co went bankrupt, NY stocks dropped 10% and 101 banks had failed by month's end."
    },
    {
        topic: "Gilded Age",
        question: "What did the 1883 Pendleton Act establish?",
        options: ["A ban on foreign contract labour", "A merit system of promotions in the civil service", "The Interstate Commerce Commission", "The breakup of Standard Oil"],
        answer: "A merit system of promotions in the civil service",
        feedback: "Chester Arthur pushed for the 1883 Pendleton Act, which created a merit system of promotions and continuity in the civil service, though it initially affected only around 10% of federal employees."
    },
    {
        topic: "Gilded Age",
        question: "How many workers went on strike in the Great Railroad Strike of 1877?",
        options: ["Over 10,000", "Over 100,000", "Over 50,000", "Over 200,000"],
        answer: "Over 100,000",
        feedback: "The 1877 Great Railroad Strike saw over 100,000 workers strike across multiple states after employers repeatedly cut wages to cover losses from the 1873 depression, shutting down rail lines nationwide."
    },
    {
        topic: "Gilded Age",
        question: "What was US Steel - the company J.P. Morgan helped create?",
        options: ["The first 100 million dollar company", "The first 2 billion dollar company", "The first 500 million dollar company", "The first 1 billion dollar company"],
        answer: "The first 1 billion dollar company",
        feedback: "J.P. Morgan inherited 12 million dollars and increased his fortunes through skills as a financier. He was a major force behind the creation of large corporations, including US Steel - the first 1 billion dollar company."
    },
    {
        topic: "Gilded Age",
        question: "How did the US economy grow between 1865 and 1898 in terms of coal and railways?",
        options: ["Coal rose 800%, railways 567%", "Coal rose 200%, railways 800%", "Coal rose 600%, railways 400%", "Coal rose 400%, railways 300%"],
        answer: "Coal rose 800%, railways 567%",
        feedback: "Between 1865 and 1898, coal production rose 800% and railway track mileage rose 567%, reflecting the extraordinary pace of American industrialisation in the Gilded Age."
    },
    {
        topic: "Gilded Age",
        question: "Between 1895 and 1904, how many companies merged into giant corporations?",
        options: ["Over 5,000 into 50", "Over 25,000 into 200", "Over 18,000 into 157", "Over 10,000 into 100"],
        answer: "Over 18,000 into 157",
        feedback: "Between 1895 and 1904, over 18,000 companies merged into just 157 giant corporations, reflecting the massive consolidation of American industry during the Gilded Age."
    },
    {
        topic: "Gilded Age",
        question: "What share of US manufactured goods did America produce in 1870?",
        options: ["15%", "30%", "23%", "10%"],
        answer: "23%",
        feedback: "In 1870, the US produced 23% of the world's manufactured goods. By the middle of the 1880s, the US had surpassed Britain as the world's leading producer of manufactured goods and steel."
    },
    {
        topic: "Gilded Age",
        question: "How much did US steel production grow between 1875 and 1900?",
        options: ["From 500,000 to 80 million tons", "From 100,000 to 10 million tons", "From 360,000 to 60 million tons", "From 200,000 to 20 million tons"],
        answer: "From 360,000 to 60 million tons",
        feedback: "US steel production grew from 360,000 tons in 1875 to 60 million tons per year by 1900, a 166-fold increase reflecting the transformation of American industry during the Gilded Age."
    },
    {
        topic: "Gilded Age",
        question: "What was the NY Customs House and why was it controversial?",
        options: ["A tax office that charged excessive import duties on foreign goods", "A centre of the spoils system employing 1,000 party workers, dominated by senators like Conkling", "A courthouse that tried cases involving corrupt businessmen", "A warehouse that stored confiscated goods from smugglers"],
        answer: "A centre of the spoils system employing 1,000 party workers, dominated by senators like Conkling",
        feedback: "The NY Customs House was a centre of the spoils system, employing 1,000 party workers. Senators like Roscoe Conkling dominated NY politics through control of it. In 1874, metal importers paid Conkling a 50,000 dollar bribe."
    },
    {
        topic: "Gilded Age",
        question: "What share of American sugar did the Sugar Trust control?",
        options: ["70%", "80%", "98%", "90%"],
        answer: "98%",
        feedback: "The Sugar Trust controlled 98% of American sugar, while the tobacco company controlled 90% of cigarette production - examples of the extreme monopoly power achieved during the Gilded Age."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "What did Plessy v Ferguson (1896) rule?",
        options: ["The 14th Amendment applied to private businesses directly", "Literacy tests for voting were illegal under the 15th Amendment", "Segregation was unconstitutional under the 14th Amendment", "Segregation was legal so long as accommodation was equal"],
        answer: "Segregation was legal so long as accommodation was equal",
        feedback: "In 1896, Plessy v Ferguson ruled that segregation was legal provided accommodation was equal - in practice, equality of facilities was often non-existent."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "What was the Mississippi 'understanding clause' of 1890?",
        options: ["Voters had to pay a poll tax to access the ballot", "African Americans had to prove they owned property before voting", "African Americans needed two white witnesses to register to vote", "Voters had to interpret the constitution when read to them, judged by white registrars"],
        answer: "Voters had to interpret the constitution when read to them, judged by white registrars",
        feedback: "Mississippi's 1890 'understanding clause' required voters to give a reasonable interpretation of the constitution when it was read to them - judged entirely by white registrars, making it an effective tool for disenfranchising Black voters."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "How many people were lynched between 1882 and 1899?",
        options: ["Over 500", "Over 1,000", "Over 5,000", "Over 2,500"],
        answer: "Over 2,500",
        feedback: "Between 1882 and 1899, over 2,500 men and women were lynched. In 1892 alone, 161 Black people were lynched."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "How did Booker T. Washington and W.E.B. Du Bois differ in approach?",
        options: ["Washington wanted political struggle; Du Bois favoured economic advancement", "Washington wanted integration; Du Bois wanted separate Black institutions", "Washington emphasised self-help and economic advancement; Du Bois argued for active political struggle", "Both agreed on economics but disagreed on the pace of change"],
        answer: "Washington emphasised self-help and economic advancement; Du Bois argued for active political struggle",
        feedback: "Booker T. Washington focused on self-help and economic advancement. Du Bois called Washington the 'Great Accommodator' and argued instead for active political struggle for civil rights."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "What were Black literacy rates before and after slavery?",
        options: ["40% under slavery, rising to 80% by 1910", "1-2% under slavery, rising to 30% by 1910", "5-10% under slavery, rising to 50% by 1910", "20-30% under slavery, rising to 70% by 1910"],
        answer: "5-10% under slavery, rising to 50% by 1910",
        feedback: "Black literacy rates rose from around 5-10% under slavery to 50% by 1910, reflecting the enormous educational effort of African Americans in the post-Civil War decades despite systematic underfunding of Black schools."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "What was the Springfield Riot of 1908 and what did it lead to?",
        options: ["A race riot after a disputed election, leading to the 15th Amendment being enforced", "A massacre of sharecroppers, leading to federal anti-lynching legislation", "A racially motivated mob attacked Black neighbourhoods, leading to the formation of the NAACP in 1909", "A labour riot linking race and class, leading to the formation of the AFL"],
        answer: "A racially motivated mob attacked Black neighbourhoods, leading to the formation of the NAACP in 1909",
        feedback: "The Springfield Riot saw a racially motivated mob attack Black neighbourhoods following the arrest of two Black men. At least 6 people died and numerous homes were destroyed. It led to the formation of the NAACP in 1909."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "Between 1889 and 1929, how many people were lynched and what proportion were Black?",
        options: ["Around 2,000; 70% were Black", "Around 1,000; 50% were Black", "Around 6,000; 90% were Black", "Nearly 4,000; 85% were Black"],
        answer: "Nearly 4,000; 85% were Black",
        feedback: "Between 1889 and 1929, nearly 4,000 people were lynched - 85% of them Black. Only 50 perpetrators were ever arrested and only 4 were sentenced."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "How many Black people were lynched in 1892 alone?",
        options: ["201", "161", "51", "101"],
        answer: "161",
        feedback: "In 1892, 161 Black people were lynched. Ida B. Wells published these statistics in the Memphis Free Speech in 1892 - in retaliation, a mob destroyed the newspaper's office."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "What did Ida B. Wells do in 1892?",
        options: ["Led a march of 1,500 women in New York protesting racial violence", "Founded the NAACP in response to the Springfield Riot", "Took her anti-discrimination case to the Supreme Court", "Published lynching statistics in Memphis Free Speech - a mob later destroyed her newspaper's office"],
        answer: "Published lynching statistics in Memphis Free Speech - a mob later destroyed her newspaper's office",
        feedback: "Ida B. Wells published lynching statistics in the Memphis Free Speech in 1892. In retaliation, a mob destroyed the newspaper's office, forcing her to continue her campaign from the North."
    },
    {
        topic: "Jim Crow and Civil Rights",
        question: "How did Black literacy rates change from slavery to 1910?",
        options: ["From 1% to 25%", "From 30% to 80%", "From 5-10% to 50%", "From 20% to 70%"],
        answer: "From 5-10% to 50%",
        feedback: "Black literacy rates rose from around 5-10% under slavery to 50% by 1910. The number of Black students in school doubled between 1877 and 1887, though still only two thirds of eligible students were enrolled."
    },
    {
        topic: "Westward Expansion",
        question: "How many acres could be claimed under the 1862 Homestead Act, and for how long?",
        options: ["80 acres for 3 years", "320 acres for 7 years", "240 acres for 4 years", "160 acres for 5 years"],
        answer: "160 acres for 5 years",
        feedback: "The 1862 Homestead Act offered 160 acres in any of 30 domain states, provided the land was cultivated continuously for 5 years. By the end of the Act, over 270 million acres had been claimed and settled."
    },
    {
        topic: "Westward Expansion",
        question: "What was the 1864 Sand Creek Massacre?",
        options: ["A group of settlers were massacred by Comanche raiders in Texas", "US troops clashed with Lakota warriors at a reservation boundary", "Sioux warriors attacked a US Army fort in Colorado", "700 cavalry attacked an undefended Cheyenne tribe, killing and mutilating men, women and children"],
        answer: "700 cavalry attacked an undefended Cheyenne tribe, killing and mutilating men, women and children",
        feedback: "The 1864 Sand Creek Massacre saw 700 untrained, ill-disciplined cavalry troops attack an undefended Cheyenne tribe, killing and mutilating elderly men, women and children - one of the most notorious atrocities of the Indian Wars."
    },
    {
        topic: "Westward Expansion",
        question: "What happened at the Battle of Little Bighorn?",
        options: ["Sitting Bull and Crazy Horse surrendered after being surrounded", "General Sherman negotiated a peace treaty with Sitting Bull", "The US Army successfully rounded up the last Sioux holdouts", "Custer divided his force and attacked without waiting for support - his unit of 210 men was surrounded and all were killed"],
        answer: "Custer divided his force and attacked without waiting for support - his unit of 210 men was surrounded and all were killed",
        feedback: "Custer divided his units into three and attempted to encircle the encampment without waiting for the rest of his force. His unit of 210 men came under attack and all were killed - the most famous US military defeat of the Indian Wars."
    },
    {
        topic: "Westward Expansion",
        question: "What did the 1887 Dawes Act do to Native American land?",
        options: ["Required Native American children to attend boarding schools", "Doubled the size of reservations as compensation", "Granted full US citizenship to all tribal members", "Carved reservations into 160-acre family allotments - surplus land went to non-Native Americans, and total land fell from 138 to 48 million acres by 1934"],
        answer: "Carved reservations into 160-acre family allotments - surplus land went to non-Native Americans, and total land fell from 138 to 48 million acres by 1934",
        feedback: "The Dawes Act carved reservation land into 160-acre allotments for each family head. The rest was declared surplus and given to non-Native Americans - reservation land dropped from 138 million to 48 million acres by 1934, a loss of 65%."
    },
    {
        topic: "Westward Expansion",
        question: "What happened at the Battle of Wounded Knee in 1890?",
        options: ["Native Americans repelled a US Army attack and negotiated a peace treaty", "Nervous cavalry fired into a group of Sioux - 200 Sioux died, many women and children among them", "The last major battle of the Sioux War ended in Native American defeat", "The US Army suppressed a planned uprising before it began"],
        answer: "Nervous cavalry fired into a group of Sioux - 200 Sioux died, many women and children among them",
        feedback: "The 1890 Battle of Wounded Knee saw nervous 7th Cavalry fire into a group of Sioux - 200 Sioux died, many of them women and children. 31 soldiers were also killed. Some describe it as an accidental battle; others as a massacre."
    },
    {
        topic: "Westward Expansion",
        question: "What ended the era of the open range cattle drives?",
        options: ["The closing of the frontier declared by the Census Bureau in 1890", "The invention of refrigerated railcars made long drives obsolete", "Federal legislation prohibited the long drive route", "Two severe winters in 1885-87 killed possibly 90% of Western cattle, ruining thousands of cattlemen"],
        answer: "Two severe winters in 1885-87 killed possibly 90% of Western cattle, ruining thousands of cattlemen",
        feedback: "Two severe winters in 1885-87 resulted in the deaths of millions of Western cattle - possibly 90% of the total - ruining thousands of cattlemen including the Swan Land and Cattle Company of Wyoming."
    },
    {
        topic: "Westward Expansion",
        question: "What was Frederick Jackson Turner's 'Frontier Thesis'?",
        options: ["The closing of the frontier would lead to social conflict in cities", "Manifest Destiny required the US to expand beyond its continental borders", "The West was a source of national division and should be governed separately", "The West acted as a safety valve for discord, created self-reliant individuals, and was central to American identity"],
        answer: "The West acted as a safety valve for discord, created self-reliant individuals, and was central to American identity",
        feedback: "Frederick Jackson Turner's 1893 thesis argued that the West acted as a safety valve for discord and violence, created self-reliant individuals, and was a central part of America's identity of freedom."
    },
    {
        topic: "Westward Expansion",
        question: "What happened to the Buffalo population between 1800 and 1886?",
        options: ["Fell from 50 million to around 1 million", "Fell from 10 million to around 500,000", "Fell from 5 million to around 10,000", "Fell from 30 million to the point where the Smithsonian could not find 25 good specimens"],
        answer: "Fell from 30 million to the point where the Smithsonian could not find 25 good specimens",
        feedback: "In 1800 there were around 30 million Buffalo. By 1886 the Smithsonian Institute could not find 25 'good specimens' - the near-total extermination of the Buffalo was devastating to Native American Plains cultures."
    },
    {
        topic: "Westward Expansion",
        question: "How many acres were granted to railroad companies by 1871?",
        options: ["Almost 50 million acres", "Almost 128 million acres", "Almost 80 million acres", "Almost 200 million acres"],
        answer: "Almost 128 million acres",
        feedback: "By 1871, almost 128 million acres had been granted to Union Pacific and Central Pacific railroad companies. Grants were brought to an end the same year."
    },
    {
        topic: "Westward Expansion",
        question: "What did Captain Richard Henry Pratt say about Native American assimilation in 1892?",
        options: ["'The only good Indian is a dead Indian'", "'A stronger race is gradually displacing a weaker'", "'Kill the Indian in him, and save the man'", "'Civilisation is the only salvation for the native peoples'"],
        answer: "'Kill the Indian in him, and save the man'",
        feedback: "Captain Richard Henry Pratt said in 1892: 'Kill the Indian in him, and save the man' - encapsulating the brutal assimilationist philosophy behind the federal boarding school system."
    },
    {
        topic: "Westward Expansion",
        question: "How many cattle went north on the long drive route between 1866 and 1885?",
        options: ["5.7 million cattle", "8 million cattle", "3 million cattle", "1.5 million cattle"],
        answer: "5.7 million cattle",
        feedback: "Between 1866 and 1885, 5.7 million cattle went north by the long drive route devised by Joseph McCoy in 1867. The era ended with the devastating winters of 1885-87."
    },
    {
        topic: "Westward Expansion",
        question: "How many acres were claimed under the Homestead Act in total?",
        options: ["Over 400 million acres", "Over 200 million acres", "Over 270 million acres", "Over 100 million acres"],
        answer: "Over 270 million acres",
        feedback: "By the end of the Homestead Act, over 270 million acres had been claimed and settled. However, homesteaders frequently did not have access to the best lands, which were claimed by speculators and railroads."
    },
    {
        topic: "Westward Expansion",
        question: "How many Chinese workers helped build the transcontinental railroad?",
        options: ["Around 15,000", "Around 5,000", "Around 25,000", "Around 10,000"],
        answer: "Around 15,000",
        feedback: "Around 15,000 Chinese workers helped build the 700 miles of track connecting the Union Pacific and Central Pacific lines between 1863 and 1869. White workers were paid twice what Chinese workers received."
    },
    {
        topic: "Westward Expansion",
        question: "How much did the amount of land held by Native Americans on reservations fall between 1887 and 1934?",
        options: ["From 80 million to 20 million acres", "From 138 million to 48 million acres", "From 100 million to 60 million acres", "From 200 million to 100 million acres"],
        answer: "From 138 million to 48 million acres",
        feedback: "Reservation land dropped from 138 million to 48 million acres between 1887 and 1934 - a loss of 65% before the Dawes Act was repealed. By the 1880s, most Native Americans were on reservations."
    },
    {
        topic: "Immigration",
        question: "What was the purpose of the 1882 Chinese Exclusion Act?",
        options: ["It banned Chinese immigration for 10 years", "It required Chinese immigrants to pass a literacy test", "It banned all Asian immigration permanently", "It limited Chinese workers to railroad construction"],
        answer: "It banned Chinese immigration for 10 years",
        feedback: "The Chinese Exclusion Act of 1882 banned Chinese immigration for 10 years. By the 1880s there were over 100,000 Chinese in the US, and organisations like the AFL under Samuel Gompers strongly opposed competition from Chinese labourers."
    },
    {
        topic: "Immigration",
        question: "What was the Chinese workers' strike of 1867?",
        options: ["500 Chinese workers struck in San Francisco demanding citizenship rights", "3,000 Chinese railroad workers struck demanding equal pay - the strike failed and food was cut off", "Chinese miners struck against unsafe conditions in Pennsylvania", "Chinese factory workers in New York struck against child labour"],
        answer: "3,000 Chinese railroad workers struck demanding equal pay - the strike failed and food was cut off",
        feedback: "In 1867, 3,000 Chinese workers went on strike demanding equal pay - white workers were paid twice as much. The strike failed and their food supply was cut off in the remote area where they were working."
    },
    {
        topic: "Immigration",
        question: "What opened in 1892 and processed over 12 million arrivals in the following 62 years?",
        options: ["The Port of Boston immigration centre", "Ellis Island", "Castle Garden in New York", "The Port of Baltimore processing centre"],
        answer: "Ellis Island",
        feedback: "Ellis Island opened in 1892 and over the following 62 years more than 12 million immigrants arrived there, facing interrogation, medical inspection, fumigation of clothing, and separation of men and women."
    },
    {
        topic: "Immigration",
        question: "How many immigrants arrived in the US between 1881 and 1900?",
        options: ["9 million", "14 million", "6 million", "3 million"],
        answer: "9 million",
        feedback: "9 million immigrants arrived between 1881 and 1900, with a further 8 million in the preceding two decades. Over 14 million more arrived between 1901 and 1920."
    },
    {
        topic: "Immigration",
        question: "What was the Haymarket Bomb outrage of 1886?",
        options: ["A bomb at a Carnegie steel plant killed several workers", "A peaceful protest turned violent when a bomb was thrown at police, fatally linking the Knights of Labor with radicalism", "Anarchists bombed the New York Customs House in protest", "Railroad workers bombed a scab labour train in Chicago"],
        answer: "A peaceful protest turned violent when a bomb was thrown at police, fatally linking the Knights of Labor with radicalism",
        feedback: "The 1886 Haymarket Bomb outrage saw a peaceful protest turn violent when a bomb was thrown at police, killing several officers. This fatally linked the Knights of Labor with violence and radicalism in the public mind."
    },
    {
        topic: "Immigration",
        question: "What distinguished the AFL from the Knights of Labor?",
        options: ["The AFL supported political action while the Knights focused only on wages", "The AFL admitted only skilled white men and focused on wages and hours, while the Knights of Labor was inclusive to immigrants", "The AFL was founded earlier and was the more established union", "The AFL was more radical and included unskilled workers and immigrants"],
        answer: "The AFL admitted only skilled white men and focused on wages and hours, while the Knights of Labor was inclusive to immigrants",
        feedback: "Led by Samuel Gompers, the AFL admitted only skilled white men and focused on higher wages and shorter working days, winning recognition and collective bargaining agreements from employers. The Knights of Labor was more inclusive, welcoming immigrants."
    },
    {
        topic: "Immigration",
        question: "How many Germans or people with at least one German parent lived in the US in 1914?",
        options: ["Over 5 million", "Over 8 million", "Over 12 million", "Over 2 million"],
        answer: "Over 8 million",
        feedback: "Over 8 million of the 105 million US population had been born in Germany or had at least one German parent - a significant factor in debates over American neutrality at the start of World War I."
    },
    {
        topic: "Immigration",
        question: "How many immigrants arrived in the US between 1890 and 1917?",
        options: ["12 million", "22 million", "17 million", "7 million"],
        answer: "17 million",
        feedback: "Between 1890 and 1917, 17 million immigrants arrived in the US - more from Southern and Eastern Europe than before. This fuelled fears of unassimilable immigrants bringing European radicalism."
    },
    {
        topic: "Immigration",
        question: "How many immigrants arrived in the US between 1901 and 1920?",
        options: ["Over 14 million", "Over 20 million", "Over 5 million", "Over 10 million"],
        answer: "Over 14 million",
        feedback: "Over 14 million immigrants arrived in the US between 1901 and 1920. By 1890, NYC had as many Germans as Hamburg, and Milwaukee had 22 German-language newspapers."
    },
    {
        topic: "US Imperialism",
        question: "What was the USS Maine incident?",
        options: ["Spain attacked the USS Maine after the US imposed trade sanctions on Cuba", "An explosion sank the USS Maine in Havana harbour in February 1898, killing 266 sailors - the press quickly blamed Spain", "The USS Maine ran aground and was seized by Spanish forces", "A US warship deliberately sunk by Spain to provoke war"],
        answer: "An explosion sank the USS Maine in Havana harbour in February 1898, killing 266 sailors - the press quickly blamed Spain",
        feedback: "On 15 February 1898, an explosion sank the USS Maine, killing 266 sailors. The press was quick to blame Spain - 'Remember the Maine, to hell with Spain!' - helping to push the US towards war."
    },
    {
        topic: "US Imperialism",
        question: "What territories did the US acquire following the Spanish-American War?",
        options: ["Cuba, Puerto Rico and Guam", "Hawaii, Guam and the Philippines", "Cuba, Hawaii and Puerto Rico", "The Philippines, Puerto Rico and Guam"],
        answer: "The Philippines, Puerto Rico and Guam",
        feedback: "The 1898 Teller Amendment forswore annexation of Cuba. The US acquired the Philippines, Puerto Rico and Guam, and secured a permanent naval base in Cuba. The Philippines cost 20 million dollars."
    },
    {
        topic: "US Imperialism",
        question: "What was the Roosevelt Corollary?",
        options: ["A trade agreement with Latin American nations guaranteeing American access", "An extension of the Monroe Doctrine asserting the US right to intervene in Latin America", "An extension of the Burlingame Treaty governing trade with Latin America", "A military alliance with Britain and France to counter European colonialism"],
        answer: "An extension of the Monroe Doctrine asserting the US right to intervene in Latin America",
        feedback: "The Roosevelt Corollary was an extension of the Monroe Doctrine asserting that the US had the right to intervene in Latin America in cases of 'chronic wrongdoing or impotence'. It was used to justify taking over Dominican Republic finances in 1905 and military intervention in Nicaragua in 1912."
    },
    {
        topic: "US Imperialism",
        question: "How did the US secure the Panama Canal Zone?",
        options: ["It seized the canal zone from Spain following the Spanish-American War", "It purchased the rights from Colombia for 50 million dollars", "It backed Panama's independence from Colombia in 1903 and secured the canal zone for 10 million dollars", "It built the canal on neutral territory after a multilateral treaty"],
        answer: "It backed Panama's independence from Colombia in 1903 and secured the canal zone for 10 million dollars",
        feedback: "The US backed Panama's independence from Colombia in 1903, sending the cruiser Nashville to prevent Colombians retaking control. The US secured control of the canal zone for 10 million dollars and 250,000 dollars annual rent. The canal opened in 1914."
    },
    {
        topic: "US Imperialism",
        question: "Why did the US annex Hawaii in 1898?",
        options: ["Hawaii was economically dominated by American sugar growers and was a vital stopping station to the Far East", "Congress voted for annexation after a Hawaiian request for statehood", "To establish a naval base following lessons of the Spanish-American War", "To prevent a Japanese takeover of the islands"],
        answer: "Hawaii was economically dominated by American sugar growers and was a vital stopping station to the Far East",
        feedback: "Since 1875 the US had imported Hawaiian sugar duty free, making Hawaii increasingly dependent on the US economy. By the 1890s, 3,000 American sugar growers out of 90,000 Hawaiians dominated the island. Hawaii was also a vital stopping station on the way to the Far East."
    },
    {
        topic: "US Imperialism",
        question: "What was Alfred Thayer Mahan's key argument in 'The Influence of Sea Power Upon History' (1890)?",
        options: ["Free trade and diplomacy were more effective than military power", "The US should avoid overseas entanglements and focus on continental expansion", "The US navy should focus on coastal defence rather than power projection", "The US needed a modern steam fleet and naval bases to become a world power"],
        answer: "The US needed a modern steam fleet and naval bases to become a world power",
        feedback: "Captain Alfred Thayer Mahan's hugely influential 1890 book argued that a modern steam fleet and naval bases - especially in the Caribbean and Pacific - were essential for the US to become a great power."
    },
    {
        topic: "US Imperialism",
        question: "How many Americans were killed in combat in the Spanish-American War?",
        options: ["Fewer than 200", "Around 1,000", "Fewer than 400", "Fewer than 100"],
        answer: "Fewer than 400",
        feedback: "Fewer than 400 Americans were killed in combat in the Spanish-American War, though around 5,000 died from disease. Secretary of State John Hay called it a 'splendid little war'."
    },
    {
        topic: "US Imperialism",
        question: "What was the 1823 Monroe Doctrine?",
        options: ["A warning to European powers against interference or colonisation in the Western Hemisphere", "A military alliance between the US and Britain against European powers", "A treaty establishing US control over the Caribbean Sea", "A trade agreement giving the US preferred trading status in Latin America"],
        answer: "A warning to European powers against interference or colonisation in the Western Hemisphere",
        feedback: "The 1823 Monroe Doctrine warned European powers against interference or colonisation in the Western Hemisphere. The Roosevelt Corollary of 1904 extended this to justify US intervention in Latin American nations."
    },
    {
        topic: "US Imperialism",
        question: "How much did the US pay for the Philippines after the Spanish-American War?",
        options: ["10 million dollars", "50 million dollars", "20 million dollars", "5 million dollars"],
        answer: "20 million dollars",
        feedback: "The Philippines cost the US 20 million dollars - reflecting the commitment to expansion. The US also acquired Puerto Rico and Guam, while the Teller Amendment forswore annexation of Cuba."
    },
    {
        topic: "US Imperialism",
        question: "What was the state of the US navy by the end of the 19th century relative to its economy?",
        options: ["It was ranked 5th in the world despite being one of the largest economies", "It was ranked 10th in the world despite being one of the largest economies", "It was ranked 25th in the world despite being one of the largest economies", "It was ranked 17th in the world despite being one of the largest economies"],
        answer: "It was ranked 17th in the world despite being one of the largest economies",
        feedback: "By the end of the century, the nation's economy was one of the world's largest, but the navy only ranked 17th. In 1882, of 140 ships on the naval list, only 42 were operational."
    },
    {
        topic: "Progressive Era",
        question: "What was President Roosevelt's domestic policy agenda branded as?",
        options: ["The Square Deal", "The Fair Deal", "The New Deal", "The New Nationalism"],
        answer: "The Square Deal",
        feedback: "Roosevelt's domestic policy agenda was called the Square Deal - he was the first president to brand his domestic agenda, setting a trend for future administrations."
    },
    {
        topic: "Progressive Era",
        question: "What action did Roosevelt take against the Northern Securities Company in 1902?",
        options: ["He instructed the attorney general to start anti-trust proceedings - the Supreme Court declared the company illegal in 1904", "He fined the company but allowed it to continue under new regulations", "He asked Congress to pass a law breaking up all railroad monopolies", "He personally negotiated a merger to create a regulated monopoly"],
        answer: "He instructed the attorney general to start anti-trust proceedings - the Supreme Court declared the company illegal in 1904",
        feedback: "In 1902 TR instructed attorney general Philander C. Knox to start proceedings against the Northern Securities company - involving taking on both J.P. Morgan and Rockefeller. In 1904, the Supreme Court declared the company illegal and it was dissolved."
    },
    {
        topic: "Progressive Era",
        question: "What did the 1906 Hepburn Act do?",
        options: ["Gave a federal commission power to inspect railroad books and set maximum rates", "Required all meat to be federally inspected before sale", "Established the first federal income tax on earnings", "Banned child labour in factories"],
        answer: "Gave a federal commission power to inspect railroad books and set maximum rates",
        feedback: "The 1906 Hepburn Act gave a federal government commission the power to inspect the books of railroad companies and lay down maximum rates - a major step in protecting the public from railroad monopoly power."
    },
    {
        topic: "Progressive Era",
        question: "How did Roosevelt resolve the 1902 Anthracite Coal Strike?",
        options: ["He passed emergency legislation forcing both sides to accept arbitration", "He sided with employers and threatened troops against the strikers", "He personally negotiated with union leaders without involving employers", "He summoned both sides and threatened to seize the mines if employers refused arbitration - they ultimately raised wages and offered 9-hour days"],
        answer: "He summoned both sides and threatened to seize the mines if employers refused arbitration - they ultimately raised wages and offered 9-hour days",
        feedback: "In 1902, employers had locked out striking miners. TR summoned both sides and threatened to send in troops if employers refused arbitration. The employers ultimately raised wages and offered 9-hour days."
    },
    {
        topic: "Progressive Era",
        question: "Which journalist is most associated with exposing Standard Oil as a muckraker?",
        options: ["Jacob Riis", "Lincoln Steffens", "Upton Sinclair", "Ida Tarbell"],
        answer: "Ida Tarbell",
        feedback: "Ida Tarbell was one of the leading muckraking journalists, famous for exposing Standard Oil. Upton Sinclair wrote The Jungle exposing Chicago meatpacking, and Lincoln Steffens exposed political corruption in America's cities."
    },
    {
        topic: "Progressive Era",
        question: "What was Taft's 'dollar diplomacy'?",
        options: ["A domestic policy encouraging Americans to invest in Liberty Bonds", "A plan to use American financial aid to stabilise European economies", "A tariff policy tying American trade to the gold standard", "A foreign policy encouraging US investment in Latin America and using government to promote American commercial interests abroad"],
        answer: "A foreign policy encouraging US investment in Latin America and using government to promote American commercial interests abroad",
        feedback: "Dollar diplomacy was Taft's foreign policy - encouraging US investments in South and Central America, the Caribbean and the Far East, and using government officials to promote the sale of American products overseas."
    },
    {
        topic: "Progressive Era",
        question: "What split the Republican Party in the 1912 election?",
        options: ["TR returned to run against Taft, splitting the Republican vote - Democrats 41.8%, Progressives 27.4%, Republicans 23.3%", "A disagreement over the gold standard between eastern and western Republicans", "Taft's dismissal of conservation policies alienated western Republicans", "A scandal involving Taft's cabinet drove progressive Republicans to TR"],
        answer: "TR returned to run against Taft, splitting the Republican vote - Democrats 41.8%, Progressives 27.4%, Republicans 23.3%",
        feedback: "TR was unhappy with Taft's efforts and returned to run again. Unable to win the Republican nomination, he ran as a Progressive. The result: Democrats 41.8%, Progressives 27.4%, Republicans 23.3% - handing Wilson the presidency."
    },
    {
        topic: "Progressive Era",
        question: "How many anti-trust prosecutions did TR pursue in total?",
        options: ["60", "44", "28", "14"],
        answer: "44",
        feedback: "TR pursued 44 anti-trust prosecutions including American Tobacco and Standard Oil, earning him the nickname 'Great Trust-Buster'. Taft actually pursued more - 99 prosecutions - though he backed away from antitrust efforts by 1911."
    },
    {
        topic: "Progressive Era",
        question: "How many acres of forest did TR order placed on federal reserves?",
        options: ["50 million acres", "150 million acres", "200 million acres", "100 million acres"],
        answer: "150 million acres",
        feedback: "TR ordered 150 million acres of forest placed on federal reserves and strictly enforced laws on grazing, mining, and lumbering. Between 1905 and 1909, some 120 million acres of land were taken into public domain."
    },
    {
        topic: "Progressive Era",
        question: "What was the 'Mongrel Tariff' of 1882?",
        options: ["A tariff that doubled rates on manufactured goods from Germany", "A tariff that reduced rates by an average of only 1.47% - far less than the 20-25% recommended", "A tariff that raised rates by an average of 25% across the board", "A tariff that introduced free trade with Britain and France"],
        answer: "A tariff that reduced rates by an average of only 1.47% - far less than the 20-25% recommended",
        feedback: "Arthur's specially appointed committee called for a 20-25% reduction in tariff rates. Congress defied this, passing the 'Mongrel Tariff' 1882, dropping rates by an average of only 1.47%."
    },
    {
        topic: "Progressive Era",
        question: "What was the circulation of McClure's magazine by 1904?",
        options: ["1 million copies", "500,000 copies", "250,000 copies", "750,000 copies"],
        answer: "750,000 copies",
        feedback: "By 1904 McClure's magazine was selling 750,000 copies, and 8 years later Collier's magazine reached 1 million sales per edition. These muckraking publications exposed political and business corruption in most of America's cities."
    },
    {
        topic: "World War I",
        question: "What was the Zimmermann Telegram?",
        options: ["A German pledge to resume unrestricted submarine warfare", "Germany's offer of a ceasefire based on Wilson's 14 Points", "A secret German proposal to Mexico offering to help recover Texas, Arizona and New Mexico if the US declared war", "An intercepted German order to sink the Lusitania"],
        answer: "A secret German proposal to Mexico offering to help recover Texas, Arizona and New Mexico if the US declared war",
        feedback: "German Foreign Secretary Arthur Zimmermann sent a secret telegram to the Mexican German Ambassador proposing an alliance - Germany would help Mexico recover Texas, Arizona and New Mexico if the US went to war. It was intercepted by British intelligence."
    },
    {
        topic: "World War I",
        question: "What was the financial cost of American participation in World War I?",
        options: ["10 billion dollars in total", "33.5 billion dollars in war costs plus 7 billion dollars lent to allies", "20 billion dollars with no loans to allies", "50 billion dollars including reconstruction"],
        answer: "33.5 billion dollars in war costs plus 7 billion dollars lent to allies",
        feedback: "The war cost 33.5 billion dollars plus 7 billion dollars lent to allies. Two thirds of the cost was raised through war bonds - liberty and victory loans - with celebrities like Charlie Chaplin deployed to encourage bond purchases."
    },
    {
        topic: "World War I",
        question: "What were Wilson's 14 Points?",
        options: ["A set of conditions Germany had to meet before the US would end hostilities", "Peace proposals covering collective security, disarmament, open diplomacy, free trade, and national self-determination", "A programme for post-war European reconstruction funded by American loans", "A list of German war crimes submitted to the Paris Peace Conference"],
        answer: "Peace proposals covering collective security, disarmament, open diplomacy, free trade, and national self-determination",
        feedback: "Wilson's 14 Points addressed themes of collective security, disarmament, open diplomacy, free trade, national self-determination, and maintaining orderly international relations - and formed the basis on which Germany agreed to the ceasefire."
    },
    {
        topic: "World War I",
        question: "What was Senator Henry Cabot Lodge's core objection to the Treaty of Versailles?",
        options: ["He opposed the principle of national self-determination as destabilising", "He thought the League gave too much power to Britain and France", "He objected to Article X, which obligated League members to defend one another and could override Congress's war powers", "He believed reparations on Germany were too harsh"],
        answer: "He objected to Article X, which obligated League members to defend one another and could override Congress's war powers",
        feedback: "Lodge's key objection was Article X, which obligated League of Nations members to defend one another - potentially allowing the League to override Congress's constitutional war powers. Wilson refused to accept any amendments and the Senate voted twice against ratification."
    },
    {
        topic: "World War I",
        question: "What was the 'Red Summer' of 1919?",
        options: ["The Palmer Raids targeting radical immigrants across 36 cities", "A wave of communist-inspired strikes across American industrial cities", "The Seattle General Strike spreading to other cities", "Mob violence erupting in over 36 cities - 76 African Americans were lynched by year's end"],
        answer: "Mob violence erupting in over 36 cities - 76 African Americans were lynched by year's end",
        feedback: "Mob violence erupted in over 36 cities in 1919 - the 'Red Summer'. Twelve veterans were dead from lynching and 76 African Americans had been lynched by year's end. An effort by Black sharecroppers in Elaine, Arkansas to organise for better wages led to a massacre with 200 African Americans dead."
    },
    {
        topic: "World War I",
        question: "What was the sinking of the Lusitania in 1915?",
        options: ["A US Navy vessel sunk by German forces in the North Atlantic", "A German supply ship sunk by a British destroyer", "A neutral American cargo ship sunk by Germany", "A British luxury liner sunk by a German submarine - over 1,000 died including 129 Americans, causing Germany to temporarily halt unrestricted U-boat warfare"],
        answer: "A British luxury liner sunk by a German submarine - over 1,000 died including 129 Americans, causing Germany to temporarily halt unrestricted U-boat warfare",
        feedback: "In 1915, the British luxury liner Lusitania was sunk by a German submarine - over 1,000 people died, including 129 Americans. Germany temporarily called off unrestricted U-boat warfare in response to American outrage, before resuming it in 1917."
    },
    {
        topic: "World War I",
        question: "What was the Espionage Act of 1917 and how was it extended?",
        options: ["It banned German-language newspapers, extended to all foreign language media in 1918", "It required registration of all immigrants from enemy nations, extended to neutral nations in 1918", "It authorised surveillance of German-American communities, extended to Irish-Americans in 1918", "It made it a felony to act or write anything the government viewed as seditious, extended by the 1918 Sedition Act"],
        answer: "It made it a felony to act or write anything the government viewed as seditious, extended by the 1918 Sedition Act",
        feedback: "The Espionage Act of 1917 made it a felony to speak, act or write anything the government viewed as seditious. Restrictions were extended with the 1918 Sedition Act, and the American Protective League created a civilian surveillance apparatus."
    },
    {
        topic: "World War I",
        question: "How many Americans served in World War I in total?",
        options: ["Over 6 million", "Over 2 million", "Over 1 million", "Over 4 million"],
        answer: "Over 4 million",
        feedback: "Over 4 million Americans served in WW1, nearly 400,000 of them African American. Most Black troops were assigned to labour duties rather than combat roles, reflecting rigid segregation in the army."
    },
    {
        topic: "World War I",
        question: "By what year did 70% of US exports go to the Allied nations?",
        options: ["1914", "1916", "1917", "1915"],
        answer: "1916",
        feedback: "By 1916, 70% of US exports went to the Allied nations. Trade with the Allies stood at 3 billion dollars compared to just 170 million dollars with Germany - a major economic factor pushing the US towards the Allied side."
    },
    {
        topic: "World War I",
        question: "How many working days were lost from strike action in 1957 in Britain?",
        options: ["Over 2 million", "Over 4 million", "Over 8 million", "Over 12 million"],
        answer: "Over 8 million",
        feedback: "Over 8 million working days were lost from strike action in 1957, highlighting the underlying labour tensions in the British economy during the supposedly prosperous Macmillan years."
    },
    {
        topic: "World War I and African Americans",
        question: "What were conditions like for African American soldiers in World War I?",
        options: ["African Americans were fully integrated and served with distinction", "African American officers commanded integrated units at the front", "The War Department gave Black units the most dangerous frontline assignments", "Rigid segregation meant most Black troops were assigned to labour duties - African American women were not allowed to nurse abroad"],
        answer: "Rigid segregation meant most Black troops were assigned to labour duties - African American women were not allowed to nurse abroad",
        feedback: "There was rigid segregation in the army. Most African American troops were assigned to Services of Supply (SOS) units - retrieving dead soldiers, building roads, working at docks. African American women were not allowed to nurse abroad."
    },
    {
        topic: "World War I and African Americans",
        question: "What was the 'Harlem Hell-fighters' regiment's achievement in World War I?",
        options: ["They were the first all-Black unit to land in France", "They captured the most enemy soldiers of any American regiment", "They served 191 days at the front - more than any other American outfit - never lost a foot of ground, and won the French Croix de Guerre", "They were awarded the Medal of Honor for their defence of the Argonne Forest"],
        answer: "They served 191 days at the front - more than any other American outfit - never lost a foot of ground, and won the French Croix de Guerre",
        feedback: "The 'Harlem Hell-fighters' served 191 days at the front - more than any other American outfit. They never lost a foot of ground to the Germans. Members were awarded the French Croix de Guerre."
    },
    {
        topic: "Prohibition",
        question: "When did the 18th Amendment come into force, banning alcohol?",
        options: ["January 1917", "January 1920", "January 1919", "January 1921"],
        answer: "January 1920",
        feedback: "The 18th Amendment was passed in January 1919 and came into force in January 1920. Less than an hour after spirits became illegal, armed men robbed a Chicago freight train of thousands of dollars' worth of whiskey."
    },
    {
        topic: "Prohibition",
        question: "How widespread was prohibition before the 18th Amendment?",
        options: ["40% of counties were dry by 1906 and a full dozen states by 1909", "Prohibition was exclusively an urban phenomenon", "Only a handful of rural counties were dry before 1919", "Only Southern states had local prohibition before the federal amendment"],
        answer: "40% of counties were dry by 1906 and a full dozen states by 1909",
        feedback: "Prohibition had significant grassroots support well before the 18th Amendment - 40% of the nation's counties were dry by 1906, and a full dozen states had gone dry by 1909."
    },
    {
        topic: "Prohibition",
        question: "What coalition of interests drove Prohibition?",
        options: ["Primarily Northern Progressives and the Women's Christian Temperance Union alone", "The Anti-Saloon League, suffragists, anti-German wartime sentiment, and industrialists like Carnegie and Ford", "Mainly Southern Democrats opposed to the economic power of Northern breweries", "Republican Party leaders who saw Prohibition as a vote-winning rural policy"],
        answer: "The Anti-Saloon League, suffragists, anti-German wartime sentiment, and industrialists like Carnegie and Ford",
        feedback: "The prohibition coalition was remarkably broad - the ASL linked prohibition to suffrage, exploited anti-German hysteria (major breweries like Pabst and Schlitz were German-owned), and industrialists like Carnegie and Ford believed alcohol undercut worker performance."
    },
    {
        topic: "Red Scare",
        question: "What were the Palmer Raids of 1919-20?",
        options: ["Congressional investigations into radical trade union activity", "Attorney General Palmer directed raids across 36 cities - 6,000 arrested, 556 immigrants deported", "Federal raids on KKK headquarters across the South", "Army raids on communist cells in major industrial cities"],
        answer: "Attorney General Palmer directed raids across 36 cities - 6,000 arrested, 556 immigrants deported",
        feedback: "The 1919-20 Palmer Raids saw Attorney General Palmer direct raids across 36 cities - 6,000 were arrested, radicals were seized nationwide, and 556 immigrants were deported. The Supreme Court later ruled that evidence gathered during the raids was illegal."
    },
    {
        topic: "Red Scare",
        question: "What factors fuelled the Red Scare of 1919?",
        options: ["The discovery of a Soviet spy network inside the US government", "A series of communist election victories in state legislatures", "The Bolshevik Revolution, cost of living rising 99% between 1913-19, rapid demobilisation of 4 million troops, anarchist bomb attacks, and widespread strikes", "German propaganda campaigns targeting American workers"],
        answer: "The Bolshevik Revolution, cost of living rising 99% between 1913-19, rapid demobilisation of 4 million troops, anarchist bomb attacks, and widespread strikes",
        feedback: "The Red Scare was fuelled by the 1917 Bolshevik Revolution, the cost of living rising 99% between 1913-19, rapid demobilisation of 4 million troops with inadequate planning, anarchist bomb attacks, and the Seattle General Strike."
    },
    {
        topic: "Red Scare",
        question: "What happened to Sacco and Vanzetti?",
        options: ["They were pardoned by President Harding after evidence of their innocence emerged", "They were deported under the Anarchist Exclusion Act after a political trial", "Two Italian immigrants convicted of robbery and murder in Massachusetts in 1920 in a biased trial - executed in 1927", "They were acquitted after a landmark civil liberties case"],
        answer: "Two Italian immigrants convicted of robbery and murder in Massachusetts in 1920 in a biased trial - executed in 1927",
        feedback: "Sacco and Vanzetti were two Italian immigrants convicted of robbery and murder in Massachusetts in 1920. Their trial was widely condemned as biased and unfair. They were executed in 1927, their case becoming a symbol of anti-immigrant prejudice."
    },
    {
        topic: "Red Scare",
        question: "How many members did the KKK expand to by the mid-1920s?",
        options: ["4 million members", "1 million members", "6 million members", "2 million members"],
        answer: "4 million members",
        feedback: "The KKK expanded to 4 million members by the mid-1920s, rebranding as anti-radical and attracting middle class members. Civil liberties were severely curtailed by the Red Scare - detention without due process became more commonplace."
    },
    {
        topic: "Harding and Normalcy",
        question: "What was Warren Harding's appeal in the 1920 election?",
        options: ["He promised to crush the Red Scare with firm military action", "He called for 'healing not heroics, normalcy not revolution' - higher tariffs, lower taxes, fewer immigrants, and no League of Nations", "He promised to continue Wilson's progressive internationalism", "He ran on expanding civil rights following the race riots of 1919"],
        answer: "He called for 'healing not heroics, normalcy not revolution' - higher tariffs, lower taxes, fewer immigrants, and no League of Nations",
        feedback: "Harding called for 'healing not heroics, normalcy not revolution, serenity not surgery'. His policies appealed broadly after years of war, red scare, race riots and economic hardship. He won 61% of the popular vote."
    },
    {
        topic: "Harding and Normalcy",
        question: "What was innovative about Harding's 1920 election campaign?",
        options: ["He was the first to use opinion polls to target his campaign messages", "It used radio, photography, and Hollywood celebrity surrogates - the first advertising professional to head a national campaign", "He was the first candidate to make a national radio broadcast", "He was the first to campaign specifically in African American communities"],
        answer: "It used radio, photography, and Hollywood celebrity surrogates - the first advertising professional to head a national campaign",
        feedback: "Harding's 1920 front porch campaign used radio, photography, and Hollywood celebrity surrogates - Al Jolson travelled the country on his behalf. Albert Lasker was the first full-time advertising man to head a national campaign, understanding the power of celebrity."
    },
    {
        topic: "Harding and Normalcy",
        question: "By what percentage did Harding defeat Cox in the 1920 election?",
        options: ["55%", "51%", "68%", "61%"],
        answer: "61%",
        feedback: "Harding defeated Cox by the greatest majority in two-party history at that point - 61% of the popular vote. Public exhaustion after WW1, the red scare, race riots and economic hardship made his message of normalcy highly appealing."
    },
    {
        topic: "Populism",
        question: "What was W.J.B.'s famous 'Cross of Gold' speech about?",
        options: ["A call for nationalisation of railroad companies to protect farmers", "A demand for free trade to help farming communities access global markets", "A call to break up banking monopolies controlling agriculture", "An attack on the gold standard and how it destroyed opportunity for farming communities"],
        answer: "An attack on the gold standard and how it destroyed opportunity for farming communities",
        feedback: "W.J.B.'s famous speech - 'You shall not crucify mankind upon a cross of gold' - addressed the gold standard and how it destroyed opportunity for farming communities, making him the vehicle pulling populist voters to the Democrat Party."
    },
    {
        topic: "Populism",
        question: "How did the Populist Party perform in the 1892 election?",
        options: ["They swept the South but failed in the North and West", "Their presidential candidate won 1 million votes, 22 electoral votes, and 5 of 7 House seats in Kansas", "They merged with the Democratic Party before the election", "They won just a handful of local races"],
        answer: "Their presidential candidate won 1 million votes, 22 electoral votes, and 5 of 7 House seats in Kansas",
        feedback: "The 1892 election was a significant early success for the Populists - James B. Weaver won 1 million votes for president, the party won 22 electoral votes and 5 of 7 House seats in Kansas."
    },
    {
        topic: "Populism",
        question: "What were the key grievances of the Populist Party?",
        options: ["Federal government corruption and the spoils system undermining democratic governance", "Excessive immigration driving down wages and undermining American culture", "High import tariffs protecting eastern manufacturers at the expense of farmers", "Unfair transport rates, low farm prices, banks restraining credit, and a gold standard limiting money supply"],
        answer: "Unfair transport rates, low farm prices, banks restraining credit, and a gold standard limiting money supply",
        feedback: "Populists faced no reasonable transport rates - it was cheaper to ship goods from Chicago to Liverpool than across two states - as well as low prices, droughts, political isolation, banks restraining credit, and a gold standard that meant a limited money supply."
    },
    {
        topic: "Populism",
        question: "What was W.J.B. known as and why?",
        options: ["The 'Great Commoner' because he reached out across social and economic divides", "The 'Farm Champion' because he came from a farming family in Nebraska", "The 'Silver Senator' because he campaigned exclusively for free silver coinage", "The 'Great Reformer' because he championed federal regulation of banks"],
        answer: "The 'Great Commoner' because he reached out across social and economic divides",
        feedback: "W.J.B. became known as the 'Great Commoner' because he reached out across social and economic divides. He addressed the gold standard and how it destroyed opportunity for farming communities, becoming the vehicle pulling populist voters to the Democrat Party."
    },
    {
        topic: "Populism",
        question: "What was the GDP growth rate of the US between 1865 and 1898?",
        options: ["Around 3.8% per annum", "Around 2.5% per annum", "Around 5% per annum", "Around 1.5% per annum"],
        answer: "Around 3.8% per annum",
        feedback: "GDP rose by around 3.8% per annum between 1865 and 1898. Between 1865 and 1890, the number of people on farms rose from 10 to 25 million, reflecting the enormous expansion of American agriculture in this period."
    },
    {
        topic: "Populism",
        question: "What was the 1900 Currency Act?",
        options: ["It created the Federal Reserve to manage money supply", "It devalued the dollar by 20% to boost agricultural exports", "It introduced a silver standard for US currency", "It committed the US to the gold standard"],
        answer: "It committed the US to the gold standard",
        feedback: "The 1900 Currency Act committed the US to the gold standard - a major defeat for the Populist movement which had campaigned for free silver coinage to expand the money supply and help indebted farmers."
    }
]

//navigator.serviceWorker.register('./sw.js');

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