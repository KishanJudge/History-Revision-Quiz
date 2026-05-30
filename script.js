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
            getChoice(choice);
        }
        document.getElementById("feedback").style.display = "block";
        document.getElementById("nextQButton").style.display = "block";
        getCorrectOpt(question);
        selected = true;
    }

}

function getChoice(choice) {
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
    document.getElementById(currentGreen).style.backgroundColor = "#21262d";
    document.getElementById(currentGreen).style.color = "white";
    document.getElementById(currentSelect).style.backgroundColor = "#21262d";
    document.getElementById(currentSelect).style.color = "white";
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
            "1945: Labour 146 seat maj; 1950: 5 seat maj; 1951: Tories won 16 seat maj despite 0.8% fewer votes",
            "1945: Labour 100 seat maj; 1950: 15 seat maj; 1951: Tories won 30 seat maj"
        ],
        answer: "1945: Labour 146 seat maj; 1950: 5 seat maj; 1951: Tories won 16 seat maj despite 0.8% fewer votes",
        feedback: "Labour won a 146-seat majority in 1945. By 1950 this fell to 5 seats, and in 1951 the Tories won a 16-seat majority despite receiving 0.8% fewer votes — a quirk of first past the post."
    },
    {
        topic: "Conservative Revival 1945-51",
        question: "Who headed Conservative structural reorganisation after 1945 and what did it achieve?",
        options: [
            "Rab Butler — reformed party finances and introduced the Young Conservative movement",
            "Harold Macmillan — reorganised constituency associations and introduced central funding",
            "Lord Beaverbrook — rebuilt the press wing and expanded membership to 5 million",
            "Lord Woolton — built a fighting fund from small donations, reaching around 3 million members by the early 1950s"
        ],
        answer: "Lord Woolton — built a fighting fund from small donations, reaching around 3 million members by the early 1950s",
        feedback: "Lord Woolton headed reorganisation as party chairman, fathered small member donations to restore finances, and reached around 3 million members by the early 1950s. The Young Conservative movement in 1946 brought in a younger demographic."
    },
    {
        topic: "Conservative Revival 1945-51",
        question: "What did the 1949 'Right Road for Britain' reassure voters about?",
        options: [
            "That Conservatives would dramatically cut the welfare state to balance the budget",
            "That Conservatives would not abandon Attlee's reforms and would protect the welfare state",
            "That Conservatives would renationalise industries privatised under Labour",
            "That Conservatives would pursue a more aggressive foreign policy than Labour"
        ],
        answer: "That Conservatives would not abandon Attlee's reforms and would protect the welfare state",
        feedback: "The Right Road for Britain stressed Tories would not abandon Attlee's reforms and would protect the welfare state. The promise to build 300,000 houses per year also resonated with voters wanting new homes."
    },
    {
        topic: "Conservative Revival 1945-51",
        question: "How did the Cold War assist the Conservative revival after 1945?",
        options: [
            "Conservative defence policy was seen as stronger than Labour's pacifism",
            "Labour's links to Soviet trade unions were exposed by Conservative press campaigns",
            "The Korean War discredited Labour's foreign policy and boosted Conservative support",
            "The Cold War shifted public language from planning and state intervention to enterprise and opportunity — socialism became the enemy"
        ],
        answer: "The Cold War shifted public language from planning and state intervention to enterprise and opportunity — socialism became the enemy",
        feedback: "Wartime state intervention had seemed to justify socialism, but the Cold War shifted the language — enterprise over planning, with socialism recast as the enemy, despite Labour bearing little resemblance to Soviet communism."
    },
    {
        topic: "Conservative Revival 1945-51",
        question: "What were the Conservative groups that Lord Woolton's party reorganisation appealed to?",
        options: [
            "Young voters, middle class, women, and centrist voters wanting moderate policies",
            "Working class voters, trade unionists, northerners, and former Liberal voters",
            "Farmers, small business owners, veterans, and Commonwealth citizens",
            "Church of England members, grammar school pupils, homeowners, and industrialists"
        ],
        answer: "Young voters, middle class, women, and centrist voters wanting moderate policies",
        feedback: "Conservatives appealed to the young via the Young Conservative movement, the middle class through free enterprise and lower tax, women by promising an end to rationing, and centrists through greater recognition of TUs and a limited role for the state."
    },
    {
        topic: "Churchill's Premiership 1951-55",
        question: "What was Churchill's physical and political condition at the start of his second term?",
        options: [
            "He was 77, had already suffered two strokes, suffered another bad one in June 1953, and had a cautious, undogmatic outlook",
            "He was 65, in excellent health, with a clear radical programme",
            "He was 70, suffering from depression, and largely controlled by his cabinet",
            "He was 80 and completely incapacitated — Eden effectively ran the government"
        ],
        answer: "He was 77, had already suffered two strokes, suffered another bad one in June 1953, and had a cautious, undogmatic outlook",
        feedback: "Churchill was 77 at the start of his second term, had already suffered two strokes, and suffered another bad one in June 1953. Paul Addison argues he led the party 'with great vigour and flair towards the middle ground of politics'. He resigned in April 1955."
    },
    {
        topic: "Churchill's Premiership 1951-55",
        question: "What was Butler's economic inheritance in 1951 and how did he respond?",
        options: [
            "A £200mil surplus — he cut taxes and expanded the welfare state",
            "A balanced budget — he maintained existing policies while reducing nationalisation",
            "A £500mil deficit — he devalued the pound and sought an IMF loan",
            "A £700mil balance of payments deficit — he cut imports, credit and food subsidies, and raised the bank rate from 2% to 4%"
        ],
        answer: "A £700mil balance of payments deficit — he cut imports, credit and food subsidies, and raised the bank rate from 2% to 4%",
        feedback: "Butler inherited a £700mil BOP deficit. He responded with savage cuts on imports, credit, and food subsidies, raising the bank rate from 2% to 4%. By 1952 the deficit was wiped out and there was a £259mil surplus."
    },
    {
        topic: "Churchill's Premiership 1951-55",
        question: "What were Churchill's key social achievements 1951-55?",
        options: [
            "Introduction of comprehensive schools, abolition of national service, and the Race Relations Act",
            "Contraceptive pill, abolition of capital punishment, and equal pay for women",
            "University grants, expansion of grammar schools, and the end of the eleven plus",
            "Food rationing abolished 1954, commercial TV introduced 1954, and Macmillan exceeded the 300K houses pledge"
        ],
        answer: "Food rationing abolished 1954, commercial TV introduced 1954, and Macmillan exceeded the 300K houses pledge",
        feedback: "Key social achievements included food rationing abolished in 1954, commercial television introduced in 1954, wartime controls removed, and Macmillan exceeding the housing promise with 327K in 1953 and 354K in 1954."
    },
    {
        topic: "Eden's Premiership",
        question: "What was Eden's record before Suez?",
        options: [
            "He reduced the Conservative majority and introduced popular social reforms",
            "He maintained Churchill's majority unchanged and focused on foreign affairs",
            "He increased the Conservative majority from 17 to 60 — the first PM in 90 years to do so — and oversaw barely 1% unemployment in July 1955",
            "He was widely regarded as a failure from the start, with poor domestic policy"
        ],
        answer: "He increased the Conservative majority from 17 to 60 — the first PM in 90 years to do so — and oversaw barely 1% unemployment in July 1955",
        feedback: "Eden increased the Conservative majority from 17 to 60 — the first PM in 90 years to increase the majority at an election. He oversaw the lowest unemployment since WW2 at barely 1% in July 1955."
    },
    {
        topic: "Eden's Premiership",
        question: "What was the Suez Crisis of 1956?",
        options: [
            "Egypt seized British oil facilities — Britain successfully defended them with French and Israeli help",
            "Nasser blockaded the canal — Britain and the US jointly threatened military action, successfully reopening it",
            "Israel attacked Egypt — Britain and France intervened as neutral peacekeepers but were forced out by the UN",
            "Nasser nationalised the Suez Canal — Britain secretly colluded with France and Israel to invade, but a run on the pound and US refusal to help forced a ceasefire, exposing Britain's inability to act independently"
        ],
        answer: "Nasser nationalised the Suez Canal — Britain secretly colluded with France and Israel to invade, but a run on the pound and US refusal to help forced a ceasefire, exposing Britain's inability to act independently",
        feedback: "Nasser nationalised the Suez Canal in July 1956. Britain secretly colluded with Israel and France — Israel attacked Egypt, providing Britain and France the pretext to intervene. A run on the pound and US refusal of economic support forced a ceasefire. Eden resigned shortly after."
    },
    {
        topic: "Macmillan's Premiership",
        question: "What did Macmillan claim at Bedford Town Football Ground in 1957?",
        options: [
            "'The age of austerity is over — the age of opportunity has begun'",
            "'Britain is back — a proud nation leading the world once more'",
            "'Most of our people have never had it so good' — though adding the cautionary note 'is it too good to last?'",
            "'We shall build a Britain as prosperous as any nation on earth'"
        ],
        answer: "'Most of our people have never had it so good' — though adding the cautionary note 'is it too good to last?'",
        feedback: "Addressing 1,500 people, Macmillan proclaimed 'most of our people have never had it so good' — but also added the cautionary note 'is it too good to last?', showing awareness of underlying economic vulnerabilities."
    },
    {
        topic: "Macmillan's Premiership",
        question: "What was the result of the 1959 general election?",
        options: [
            "A hung parliament — Macmillan formed a minority Conservative government",
            "Labour won by a narrow majority of 4 seats",
            "Conservatives won a landslide of 100 seats, their biggest ever majority",
            "Conservatives gained 20 seats, Labour lost 19, Tories winning 4% more votes"
        ],
        answer: "Conservatives gained 20 seats, Labour lost 19, Tories winning 4% more votes",
        feedback: "The 1959 election was a triumph for Macmillan — Conservatives gained 20 seats, Labour lost 19, and the Tories received 4% more votes. It reflected affluence and Labour's continued divisions."
    },
    {
        topic: "Macmillan's Premiership",
        question: "How did Macmillan use television to political advantage?",
        options: [
            "He hired actors to coach him but his performances were widely regarded as wooden",
            "He refused to appear on TV, believing it was beneath a Prime Minister's dignity",
            "He used TV only for party political broadcasts, refusing interviews",
            "He appeared calm, authoritative and self-assured on TV more than Gaitskell — a cartoonist drew him as Superman in 1957, earning him the 'Supermac' image"
        ],
        answer: "He appeared calm, authoritative and self-assured on TV more than Gaitskell — a cartoonist drew him as Superman in 1957, earning him the 'Supermac' image",
        feedback: "Macmillan rebuilt his presentational skills — calm, aristocratic, wearing expensive Savile Row suits and fixing his lopsided teeth. In 1957 a cartoonist drew him as Superman with a giant No.10 on his tunic. He appeared on TV more than Gaitskell, increasingly important as more people had TVs."
    },
    {
        topic: "Conservative Fall from Power",
        question: "Why did the Conservatives fall from power by 1964?",
        options: [
            "Harold Wilson won a landslide on the strength of his economic programme alone",
            "A major recession in 1963 caused mass unemployment and widespread poverty",
            "The Liberal Party collapsed, with most votes going to Labour",
            "Spy scandals, the Profumo Affair, economic difficulties, the out-of-touch Establishment image, and the selection of Douglas-Home combined to cost the Conservatives power"
        ],
        answer: "Spy scandals, the Profumo Affair, economic difficulties, the out-of-touch Establishment image, and the selection of Douglas-Home combined to cost the Conservatives power",
        feedback: "The Conservative fall combined spy scandals (Blake, Vassall), the Profumo Affair, economic difficulties (878K unemployed by 1963), satire mocking the out-of-touch Establishment, and the selection of old Etonian aristocrat Alec Douglas-Home as PM."
    },
    {
        topic: "Labour Divisions 1951-59",
        question: "What were the key differences between the Bevanites and Gaitskellites?",
        options: [
            "Bevanites supported NATO; Gaitskellites opposed it",
            "Bevanites wanted to abolish Clause IV; Gaitskellites insisted on retaining it",
            "Bevanites wanted larger TU influence, greater state control, and were often unilateralists; Gaitskellites were centre-right, resisted TU dominance, and focused on electability",
            "Bevanites wanted lower taxes; Gaitskellites wanted higher public spending"
        ],
        answer: "Bevanites wanted larger TU influence, greater state control, and were often unilateralists; Gaitskellites were centre-right, resisted TU dominance, and focused on electability",
        feedback: "Bevanites wanted larger TUs with committed left-wingers shaping policy, regarded the welfare state as just the first step towards socialism, and many were unilateralists. Gaitskellites were centre-right, resisted TU dominance, and wanted to move Labour towards electability."
    },
    {
        topic: "Labour Divisions 1951-59",
        question: "What triggered the Bevanite split in 1951?",
        options: [
            "Bevan's refusal to support the Korean War effort",
            "Bevan resigned from cabinet over prescription charges, giving the left wing a leader",
            "Bevan's opposition to Britain's nuclear weapons programme",
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
            "Divisions meant no clear direction, no suggestion of strong leadership, and too much infighting to effectively attack the Conservatives",
            "The divisions led the party to adopt extreme left-wing policies alienating centrist voters",
            "Internal divisions led Gaitskell to defect to the Liberal Party"
        ],
        answer: "Divisions meant no clear direction, no suggestion of strong leadership, and too much infighting to effectively attack the Conservatives",
        feedback: "Labour's divisions meant voters were unsure what policies they'd get. If a leader can't unite their own party, how can they lead the country? Infighting distracted from attacking the opposition. Ppl still associated Labour with austerity and a 'cloth cap' image."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "What characterised the 'stop-go' economic cycle of the 1950s and early 1960s?",
        options: [
            "Alternating periods of high employment and unemployment tied to global commodity prices",
            "A pattern of nationalisation followed by privatisation as governments changed",
            "A cycle of devaluation followed by deflation recurring every three years",
            "Growth leading to overheating through excessive imports and rising wages, with budgets used as short-term electoral tools rather than genuine economic strategy"
        ],
        answer: "Growth leading to overheating through excessive imports and rising wages, with budgets used as short-term electoral tools rather than genuine economic strategy",
        feedback: "Stop-go saw growth lead to overheating through excessive imports and rising wage demands. Budgets were used as short-term measures to buy election votes — policy lagged behind events rather than directing them, suggesting no real economic plan."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "How did Britain's economic performance compare to competitors 1951-64?",
        options: [
            "Britain grew faster than all competitors throughout the period",
            "Industrial production grew 3x quicker in France, 4x in West Germany, 10x in Japan; Britain's world trade share fell from 25.5% to 16.5% between 1950 and 1960",
            "Britain and West Germany grew at roughly equal rates, both outpacing France and Japan",
            "Britain's slower growth was entirely explained by being a mature, already-industrialised economy"
        ],
        answer: "Industrial production grew 3x quicker in France, 4x in West Germany, 10x in Japan; Britain's world trade share fell from 25.5% to 16.5% between 1950 and 1960",
        feedback: "Industrial production grew 3x quicker in France, 4x in West Germany, and 10x in Japan. Britain's share of world trade fell from 25.5% in 1950 to 16.5% in 1960, while Germany and Japan's shares were growing."
    },
    {
        topic: "Economic Developments 1951-64",
        question: "What was 'Butskellism'?",
        options: [
            "The policy of keeping wages artificially low to control inflation, pursued by both parties",
            "The term for the cosy relationship between Conservative ministers and trade union leaders",
            "A portmanteau of Butler and Gaitskell suggesting both parties used broadly similar Keynesian demand management",
            "The shared commitment to the nuclear deterrent across party lines"
        ],
        answer: "A portmanteau of Butler and Gaitskell suggesting both parties used broadly similar Keynesian demand management",
        feedback: "Butskellism — combining Chancellor Butler and Shadow Chancellor Gaitskell — suggested both parties used broadly similar Keynesian demand management. Government expenditure rose from 39% of GDP in 1950 under Labour to 51% in 1960 under the Conservatives."
    },
    {
        topic: "Affluence & Living Standards",
        question: "How did wages and living standards change between 1951 and 1964?",
        options: [
            "Real wages fell slightly as inflation outpaced wage growth throughout the period",
            "Living standards improved only for the middle class — working class wages stagnated",
            "Wages doubled in nominal terms but barely kept pace with inflation",
            "Average male weekly wages rose from around £8 to £18, with real wages rising ahead of prices at nearly 3% per year 1955-60"
        ],
        answer: "Average male weekly wages rose from around £8 to £18, with real wages rising ahead of prices at nearly 3% per year 1955-60",
        feedback: "Average weekly wages rose from around £8 in 1951 to around £18 in 1964. Real wages rose ahead of prices at nearly 3% per year 1955-60. Food rationing ended in 1954, and car sales nearly quadrupled from 1.5 million to 5.5 million 1950-65."
    },
    {
        topic: "Affluence & Living Standards",
        question: "What did the 1959 Mark Abrams survey reveal about social attitudes?",
        options: [
            "That 60% of the population now considered themselves working class despite rising incomes",
            "That 40% of manual labourers considered themselves middle class and were hence more likely to vote Tory",
            "That young people were the most politically engaged generation since the war",
            "That support for the welfare state had collapsed as people became more affluent"
        ],
        answer: "That 40% of manual labourers considered themselves middle class and were hence more likely to vote Tory",
        feedback: "The 1959 Mark Abrams survey found 40% of manual labourers considered themselves middle class and hence more likely to vote Tory. People associated Labour with austerity and a 'cloth cap' image, while Tories were associated with forward-looking, ambitious people."
    },
    {
        topic: "Class & The Establishment",
        question: "What was 'the Establishment' and why was it criticised?",
        options: [
            "A small but powerful group of upper class, publicly-schooled, Oxbridge-educated people governing Britain — criticised for holding the country back through a self-selecting elite",
            "The BBC and broadsheet press, criticised for promoting left-wing values",
            "The trade union leadership that dominated post-war economic policy",
            "The network of Conservative Party donors who funded Macmillan's government"
        ],
        answer: "A small but powerful group of upper class, publicly-schooled, Oxbridge-educated people governing Britain — criticised for holding the country back through a self-selecting elite",
        feedback: "The Establishment was a small but powerful group — upper class, Oxbridge-educated. Macmillan was Eton and Oxford educated with 35 government members related to him by marriage. Alec Douglas-Home's cabinet of 23 included 10 Old Etonians. Social scientists like Richard Hoggart argued Britain needed leaders chosen on merit."
    },
    {
        topic: "Class & The Establishment",
        question: "How did the spy scandals damage Macmillan's government?",
        options: [
            "They had no real political impact as the public was indifferent to Cold War espionage",
            "The scandals only damaged US relations — British public opinion remained supportive",
            "The scandals led directly to Macmillan's resignation in 1962",
            "George Blake (Soviet double agent, 42 years) and John Vassall (KGB blackmail) tarnished intelligence services, damaged US relations, and Macmillan angered the press by imprisoning two journalists — The Times called for a change of government"
        ],
        answer: "George Blake (Soviet double agent, 42 years) and John Vassall (KGB blackmail) tarnished intelligence services, damaged US relations, and Macmillan angered the press by imprisoning two journalists — The Times called for a change of government",
        feedback: "Blake was sentenced to 42 years in 1961. Vassall was a clerk blackmailed by KGB photographs into passing Admiralty documents to Soviet intelligence. Both tarnished the security services. Macmillan angered by press inquiries had two journalists imprisoned — the press turned heavily against him."
    },
    {
        topic: "Class & The Establishment",
        question: "What was the Profumo Affair?",
        options: [
            "A financial scandal in which the Minister for War accepted bribes from defence contractors",
            "A sex scandal involving a junior minister that the press deliberately exaggerated",
            "The revelation that cabinet ministers had attended parties hosted by a Soviet spy",
            "Secretary of State for War John Profumo had an affair with Christine Keeler, who was also linked to a Soviet naval attaché — he lied to Parliament, resigned in June 1963, and the scandal damaged Conservative reputation and added pressure on Macmillan"
        ],
        answer: "Secretary of State for War John Profumo had an affair with Christine Keeler, who was also linked to a Soviet naval attaché — he lied to Parliament, resigned in June 1963, and the scandal damaged Conservative reputation and added pressure on Macmillan",
        feedback: "In 1961 Profumo began an affair with Christine Keeler, who was also linked to Soviet naval attaché Eugene Ivanov. He denied wrongdoing to Parliament in 1963, then admitted lying and resigned. The affair damaged Conservative reputation, fuelled public fascination with sex, class and espionage, and added pressure on Macmillan who resigned later in 1963."
    },
    {
        topic: "Women in the Affluent Society",
        question: "What was the dominant image of women in the 1950s and early 1960s?",
        options: [
            "Women were increasingly entering professional careers and the gender gap was rapidly closing",
            "Women were primarily defined by their role as factory workers following wartime employment",
            "The traditional housewife — cooking, shopping, washing, seeing to the children — reinforced by magazines like Woman's Own and the Kenwood Mixer slogan 'Your servant, madam'",
            "Women were seen as politically active citizens following the suffragette movement"
        ],
        answer: "The traditional housewife — cooking, shopping, washing, seeing to the children — reinforced by magazines like Woman's Own and the Kenwood Mixer slogan 'Your servant, madam'",
        feedback: "Throughout the 50s and 60s men and women lived generally separate lives. The modern housewife was presented as young, stylish and efficient. Educationalist John Newsom argued in 1963 that female education should follow 'broad themes of home-making' including needlework and cooking."
    },
    {
        topic: "Women in the Affluent Society",
        question: "How did women's employment change between 1951 and 1961?",
        options: [
            "Women achieved equal representation in most professional sectors by 1960",
            "Women's employment fell as rising male wages allowed more families to survive on one income",
            "Married women working rose from 1 in 5 in 1951 to 1 in 3 in 1961, though women remained in low-status jobs earning less than two thirds of a man's wage for the same work",
            "Women's employment was static throughout — the marriage bar remained firmly in place"
        ],
        answer: "Married women working rose from 1 in 5 in 1951 to 1 in 3 in 1961, though women remained in low-status jobs earning less than two thirds of a man's wage for the same work",
        feedback: "In 1951, 1 in 5 married women worked; by 1961, 1 in 3 did — made possible by contraception and the breakdown of the marriage bar. But women remained trapped in low-status jobs and in 1958 were paid less than 2/3 of a man's wage for the same job."
    },
    {
        topic: "Youth Culture 1951-64",
        question: "What factors enabled the emergence of a distinct youth culture in the late 1950s?",
        options: [
            "Young people who had not experienced wartime hardship enjoyed greater affluence, financial independence through widely available work, reduced obligations to parents, and national service abolished in 1960",
            "The introduction of comprehensive schools brought young people from different backgrounds together",
            "The Baby Boom generation reached adulthood simultaneously, creating a large peer group",
            "American rock and roll music created a shared cultural identity across class boundaries"
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
            "Mods wore immaculate suits inspired by Italian and French designs, rode Italian scooters, and defined working class aspirations; Rockers wore leather and studs, rode motorcycles, and embraced a loud, raw image"
        ],
        answer: "Mods wore immaculate suits inspired by Italian and French designs, rode Italian scooters, and defined working class aspirations; Rockers wore leather and studs, rode motorcycles, and embraced a loud, raw image",
        feedback: "Mod dress was immaculate — suits crafted from Italian and French designs. Fashion was a rejection of post-war austerity. Rockers were named for their love of rock — dirty, loud, wearing leather and studs, riding motorcycles."
    },
    {
        topic: "Immigration & Race 1951-64",
        question: "What were the main pull factors drawing Commonwealth immigrants to Britain in the 1950s?",
        options: [
            "British government cash grants and subsidised housing for new arrivals",
            "A romanticised image of Britain as the mother country, plentiful unskilled work, and active recruitment drives — London Transport took on 4,000 new employees in 1956, with the NHS particularly reliant on immigrant labour",
            "The 1948 British Nationality Act specifically advertised free movement rights",
            "Relatively high wages and the welfare state benefits available to new arrivals"
        ],
        answer: "A romanticised image of Britain as the mother country, plentiful unskilled work, and active recruitment drives — London Transport took on 4,000 new employees in 1956, with the NHS particularly reliant on immigrant labour",
        feedback: "Pull factors included a romanticised image of Britain, plenty of unskilled work, and active recruitment drives. London Transport took in 4,000 new employees in 1956, and the NHS and public transport were particularly reliant on immigrant labour."
    },
    {
        topic: "Immigration & Race 1951-64",
        question: "What were the 1958 Notting Hill Race Riots?",
        options: [
            "West Indian immigrants attacked police after a series of deportations",
            "Violent riots when white youths attacked West Indians and Black people — 117 arrested, four nights of rioting bringing racial violence to national attention. The Notting Hill Carnival was established the following year in response",
            "A clash between Jamaican and Pakistani immigrant communities over housing",
            "Trade union members rioted against employers hiring immigrants at lower wages"
        ],
        answer: "Violent riots when white youths attacked West Indians and Black people — 117 arrested, four nights of rioting bringing racial violence to national attention. The Notting Hill Carnival was established the following year in response",
        feedback: "The 1958 Notting Hill riots saw white youths attack West Indians and Black people. 117 were arrested. Four nights of rioting brought the issue to national attention. The Notting Hill Carnival was established in 1959 in response, celebrating emerging multiculturalism."
    },
    {
        topic: "Immigration & Race 1951-64",
        question: "What did the Commonwealth Immigrants Act 1962 introduce?",
        options: [
            "It banned all non-white immigration from Commonwealth countries",
            "It introduced a points-based system favouring skilled workers of all nationalities equally",
            "It reaffirmed the 1948 British Nationality Act's guarantee of free entry",
            "It ended free immigration and replaced it with a work voucher scheme with 70% public support, though it effectively discriminated against non-white workers"
        ],
        answer: "It ended free immigration and replaced it with a work voucher scheme with 70% public support, though it effectively discriminated against non-white workers",
        feedback: "The 1962 Act ended free immigration for former colonial subjects and replaced it with a work voucher scheme — Category A (employment arranged), B (skills in short supply), C (all others). It had 70% public support but white workers were more likely to have the skills needed for vouchers."
    },
    {
        topic: "Immigration & Race 1951-64",
        question: "What was the Kelso Cochrane case of 1959?",
        options: [
            "A West Indian bus driver wrongfully dismissed by London Transport whose case led to the Race Relations Act",
            "An Antiguan carpenter stabbed to death by six white youths — police treated it as robbery despite evidence of racial motive, and 1,000 Black and white people lined the streets in solidarity at his funeral",
            "A Caribbean nurse refused employment at a London hospital, exposing NHS racial discrimination",
            "A Jamaican man beaten by police in Brixton, leading to demands for accountability"
        ],
        answer: "An Antiguan carpenter stabbed to death by six white youths — police treated it as robbery despite evidence of racial motive, and 1,000 Black and white people lined the streets in solidarity at his funeral",
        feedback: "Kelso Cochrane was an Antiguan carpenter stabbed to death by six white youths. Despite evidence of racial motive, police investigated it as a robbery, only arrested two who were later released. 1,000 Black and white people lined the streets in solidarity at his funeral."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "What was Churchill's 'three circles of influence' concept?",
        options: [
            "A military strategy dividing the world into American, Soviet, and neutral spheres",
            "A NATO doctrine organising Allied defences into three concentric rings around Western Europe",
            "A foreign policy framework dividing Britain's interests into economic, military, and cultural spheres",
            "Churchill argued Britain sat at the intersection of Europe, the US, and the Commonwealth — claiming it was 'the only country which has a great part in every one of them'"
        ],
        answer: "Churchill argued Britain sat at the intersection of Europe, the US, and the Commonwealth — claiming it was 'the only country which has a great part in every one of them'",
        feedback: "Churchill argued Britain sat at the intersection of three circles of influence — Europe, the US, and the Commonwealth. He claimed Britain was 'the only country which has a great part in every one of them' — justifying reluctance to integrate into European institutions."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "What was Macmillan's 'Winds of Change' speech?",
        options: [
            "A speech to NATO allies calling for a new approach to containing Soviet expansion in Africa",
            "A speech to the UN calling for a new world order based on American and British shared values",
            "A speech to the House of Commons announcing withdrawal of British forces from all African colonies",
            "A speech in the South African Parliament in February 1960 acknowledging independence movements across Africa, marking a decisive shift from suppressing independence to accepting decolonisation"
        ],
        answer: "A speech in the South African Parliament in February 1960 acknowledging independence movements across Africa, marking a decisive shift from suppressing independence to accepting decolonisation",
        feedback: "Macmillan made his 'Winds of Change' speech in Cape Town in February 1960: 'the wind of change is blowing through this continent'. It marked public recognition of African independence and a shift from suppressing movements — as with the brutal Mau Mau response in Kenya."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "Why did Britain initially refuse to join the EEC?",
        options: [
            "Churchill believed the EEC would become a federal superstate and was fundamentally opposed",
            "The City of London successfully lobbied against membership to protect financial services",
            "Britain objected because membership would mean losing economic sovereignty, worried about political union, feared damaging the US special relationship, and 40% of exports went to the Empire/Commonwealth",
            "Britain believed EFTA would be just as economically successful as the EEC"
        ],
        answer: "Britain objected because membership would mean losing economic sovereignty, worried about political union, feared damaging the US special relationship, and 40% of exports went to the Empire/Commonwealth",
        feedback: "Britain objected: it would no longer control its own economy; economic unity might lead to political unity; it feared damaging the special relationship with the US; and 40% of British exports went to the Empire/Commonwealth of 800 million people compared to under 200 million in Europe."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "Why did de Gaulle veto Britain's 1961 EEC application?",
        options: [
            "He objected to Britain's refusal to adopt French as a second EEC official language",
            "He was responding to British opposition to French nuclear testing in the Pacific",
            "He vetoed it because Britain refused to abandon special trade relationships with former colonies",
            "He claimed Britain's economic weaknesses would damage the EEC and it acted as a 'Trojan horse' for American influence — Britain believed his real motive was to preserve French-German dominance"
        ],
        answer: "He claimed Britain's economic weaknesses would damage the EEC and it acted as a 'Trojan horse' for American influence — Britain believed his real motive was to preserve French-German dominance",
        feedback: "De Gaulle claimed Britain's economic issues would weaken the EEC and that it acted as a Trojan horse for American influence. Britain believed his real motive was to ensure continued French-German dominance. The Dutch and Belgians actually wanted Britain to join to counteract this."
    },
    {
        topic: "Foreign Relations 1951-64",
        question: "What were the financial reasons for British decolonisation?",
        options: [
            "The colonies had always been unprofitable — Britain had run them at a loss from the start",
            "American pressure made maintaining colonial possessions politically impossible",
            "Britain could no longer afford to maintain the Empire after WW2 — Palestine alone cost £40 million per year — and as it moved towards the EEC, imperial commitments weakened",
            "Commonwealth independence movements made maintaining any colony militarily impossible"
        ],
        answer: "Britain could no longer afford to maintain the Empire after WW2 — Palestine alone cost £40 million per year — and as it moved towards the EEC, imperial commitments weakened",
        feedback: "Britain could no longer afford the Empire after WW2. Palestine cost £40 million per year with one tenth of British armed forces there. Post-war debts made the Empire unsustainable, and as Britain moved towards the EEC, replacing Empire with Commonwealth was less expensive."
    },
    {
        topic: "Post-War Consensus",
        question: "What is the main evidence that a post-war consensus existed?",
        options: [
            "Both parties agreed on immigration controls, nuclear deterrence, and EEC membership",
            "Both parties agreed to abandon nationalisation and pursue free market economics after 1951",
            "Both parties committed to the welfare state, used Keynesian economics (Butskellism), continued the housing pledge, agreed on decolonisation, and maintained trade union consultation",
            "Both parties supported British entry into the EEC from its founding in 1957"
        ],
        answer: "Both parties committed to the welfare state, used Keynesian economics (Butskellism), continued the housing pledge, agreed on decolonisation, and maintained trade union consultation",
        feedback: "Evidence for consensus includes: both parties committed to the welfare state (expenditure on social services rose from 39.2% to 43% of total public expenditure 1951-55); Butskellism in Keynesian economics; Conservatives continued Labour's housing pledge; agreement on decolonisation; and TU consultation as shared policy."
    },
    {
        topic: "Post-War Consensus",
        question: "What is the main evidence against a genuine post-war consensus?",
        options: [
            "The parties fought bitterly over NATO membership and the nuclear deterrent throughout the period",
            "The Conservatives abolished the welfare state in 1955 when they felt electorally secure",
            "The parties disagreed on every major policy area — consensus was a myth invented by historians",
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
            "Labour was seen as a fresh start suited to a modern world — Wilson's youthful image, 'white heat of technology' agenda, Conservative scandals, and the out-of-touch Douglas-Home gave Labour a 4-seat majority",
            "The Liberal Party collapsed, with most of its votes going to Labour"
        ],
        answer: "Labour was seen as a fresh start suited to a modern world — Wilson's youthful image, 'white heat of technology' agenda, Conservative scandals, and the out-of-touch Douglas-Home gave Labour a 4-seat majority",
        feedback: "Labour was considered a fresh start — creating the Department of Economic Affairs, National Plan, Department of Technology, and seven new universities. Wilson at 48 was younger and more modern than Home. Conservative scandals had damaged their image. Labour won a 4-seat majority in 1964, growing to 96 seats in 1966."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "What was the 1967 devaluation of the pound and how did Wilson handle it?",
        options: [
            "The pound was devalued by 5% — Wilson handled it calmly and it caused little political damage",
            "The pound was devalued by 10% — Wilson successfully blamed the Conservative legacy",
            "The pound was devalued by 25% — immediately boosting exports",
            "The pound was devalued by 14% from $2.80 to $2.40 — Wilson's ill-judged TV broadcast appeared to deny the severity, Callaghan resigned as Chancellor, and it was a political catastrophe"
        ],
        answer: "The pound was devalued by 14% from $2.80 to $2.40 — Wilson's ill-judged TV broadcast appeared to deny the severity, Callaghan resigned as Chancellor, and it was a political catastrophe",
        feedback: "In November 1967 the pound was devalued by 14% from $2.80 to $2.40. Wilson's ill-judged TV broadcast appeared to deny the severity. Callaghan resigned as Chancellor, swapping roles with Roy Jenkins. It was a political catastrophe for the government."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "What was 'In Place of Strife' and why did it fail?",
        options: [
            "A successful trade union reform programme that reduced strikes by 50%",
            "Barbara Castle's 1969 White Paper proposing strike ballots and fines for rule-breaking — it met with extreme protest from the TUC and Labour Party, with Callaghan opposing it, and Wilson accepted defeat",
            "A pay agreement between the TUC and government that successfully held wages down",
            "A redundancy protection act giving workers the right to appeal against unfair dismissal"
        ],
        answer: "Barbara Castle's 1969 White Paper proposing strike ballots and fines for rule-breaking — it met with extreme protest from the TUC and Labour Party, with Callaghan opposing it, and Wilson accepted defeat",
        feedback: "'In Place of Strife' was Barbara Castle's January 1969 White Paper proposing strike ballots and fines for rule-breaking. It met with extreme protests from the TUC and Labour Party. Home Secretary Callaghan opposed it. Wilson accepted defeat — reforms were needed but Labour could not carry them through."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "What did the 1965 LSE study by Abel-Smith and Townsend reveal about poverty?",
        options: [
            "That poverty had been virtually eliminated by the welfare state — fewer than 1% were in genuine hardship",
            "That poverty was exclusively concentrated in the elderly and could be solved by raising pensions",
            "That poverty had risen from 7.8% in 1953-54 to 14.2% in 1960, with over 2 million children in low income households and up to 3 million elderly never claiming entitled benefits",
            "That poverty was overwhelmingly caused by unemployment rather than low wages"
        ],
        answer: "That poverty had risen from 7.8% in 1953-54 to 14.2% in 1960, with over 2 million children in low income households and up to 3 million elderly never claiming entitled benefits",
        feedback: "The study showed poverty had risen from 7.8% in 1953-54 to 14.2% in 1960. Over 2 million children were in low income households, and up to 3 million elderly never claimed their entitled benefits. It led to the Child Poverty Action Group being set up in March 1965."
    },
    {
        topic: "Wilson's Labour Governments 1964-70",
        question: "Why did Labour lose the 1970 general election?",
        options: [
            "Wilson resigned before the election and Labour failed to unite behind a new leader",
            "Heath ran a brilliant campaign winning over traditional Labour voters in northern cities",
            "The 1967 devaluation caused a deep recession from which Labour never recovered",
            "Traditional supporters felt the government had failed — key industries declined, unemployment rose from 400K to 600K, and ongoing issues with the pound, poverty, and trade unions eroded support"
        ],
        answer: "Traditional supporters felt the government had failed — key industries declined, unemployment rose from 400K to 600K, and ongoing issues with the pound, poverty, and trade unions eroded support",
        feedback: "Many traditional supporters felt the government had failed to live up to its promises. Key industries — shipbuilding, coal mining, railway — continued to decline. Unemployment rose from 400K to just over 600K by 1970. The end of pay restraint meant steep wage increases and inflation regardless."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What were the cases of Derek Bentley and Ruth Ellis, and how did they shape opinion on capital punishment?",
        options: [
            "Both were exonerated after wrongful convictions, demonstrating the risk of executing the innocent",
            "Both were convicted for murders they clearly committed but the brutality of their executions caused public revulsion",
            "Bentley was hanged despite having a mental age of a child while his younger accomplice who fired the shot could not be; Ellis was the last woman executed — her abusive partner had caused her a miscarriage — 600 letters were sent to the Home Secretary calling for a reprieve",
            "Both were pardoned posthumously by Parliament, leading directly to the abolition debate"
        ],
        answer: "Bentley was hanged despite having a mental age of a child while his younger accomplice who fired the shot could not be; Ellis was the last woman executed — her abusive partner had caused her a miscarriage — 600 letters were sent to the Home Secretary calling for a reprieve",
        feedback: "Bentley had a mental age of a child yet was hanged because his younger accomplice Craig, who fired the shot, was too young to hang. Ruth Ellis shot an abusive and unfaithful boyfriend who had caused her a miscarriage by punching her in the stomach. 600 letters called for a reprieve. Both cases shaped opinion ahead of the 1965 abolition."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What was the background to the Sexual Offences Act 1967?",
        options: [
            "The Act was introduced following a series of high-profile prosecutions of prominent gay men",
            "American pressure to modernise Britain's laws as a condition of continued financial support",
            "The Act was introduced following a government inquiry into sexual crimes against women",
            "The 1957 Wolfenden Report had called for decriminalisation of homosexual acts in private — backbencher Leo Abse led the campaign. The age of consent was set at 21, privacy was narrowly defined, and Abse later said the Act would be criticised for not going far enough"
        ],
        answer: "The 1957 Wolfenden Report had called for decriminalisation of homosexual acts in private — backbencher Leo Abse led the campaign. The age of consent was set at 21, privacy was narrowly defined, and Abse later said the Act would be criticised for not going far enough",
        feedback: "The 1957 Wolfenden Report called for decriminalisation. The Homosexual Law Reform Society campaigned since 1958. Backbencher Leo Abse led the campaign resulting in the 1967 Act. However, the age of consent was 21, privacy was narrowly defined, and Abse concluded the Act would be criticised for not going far enough."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What was the situation with abortion before the 1967 Abortion Act?",
        options: [
            "Abortion was legal but unavailable on the NHS, causing inequality of access",
            "Abortion was legal only when the mother's life was at risk, requiring three doctors' approval",
            "Abortion was legal in all circumstances up to 12 weeks",
            "Private clinics were only accessible to upper classes while others relied on dangerous backstreet abortions — 100-200K illegal abortions per year, 35K hospital admissions. The Thalidomide disaster swayed public opinion massively"
        ],
        answer: "Private clinics were only accessible to upper classes while others relied on dangerous backstreet abortions — 100-200K illegal abortions per year, 35K hospital admissions. The Thalidomide disaster swayed public opinion massively",
        feedback: "Private clinics were only accessible to upper classes. Others relied on dangerous backstreet abortions — 100-200K illegal abortions per year with 35K admitted to hospital. The Thalidomide disaster, in which a drug caused horrible birth defects from 1959-62, massively swayed public opinion. The Act permitted termination within 28 weeks with consent of two doctors."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What did the Divorce Reform Act 1969 change?",
        options: [
            "It banned divorce for the first five years of marriage",
            "It extended legal aid to cover divorce proceedings for the first time",
            "It made divorce available on demand after a 6-month cooling off period",
            "It removed the requirement to prove fault — couples could divorce after 2 years separation if both agreed, or 5 years if only one agreed. Divorce rates rose from 7% of marriages in the 1950s to nearly half by the 1970s"
        ],
        answer: "It removed the requirement to prove fault — couples could divorce after 2 years separation if both agreed, or 5 years if only one agreed. Divorce rates rose from 7% of marriages in the 1950s to nearly half by the 1970s",
        feedback: "The Divorce Reform Act 1969 removed the requirement to prove fault, ending the need for private investigators only the wealthy could afford. Couples could divorce after 2 years separation if both agreed, or 5 years if only one agreed. Divorce rates rose from 7% of marriages in the 1950s to nearly half by the 1970s."
    },
    {
        topic: "Liberal Legislation 1960s",
        question: "What did the Theatre Act 1968 achieve?",
        options: [
            "It imposed new censorship rules on theatre to counteract the permissive society",
            "It introduced government funding for regional theatres for the first time",
            "It required all theatre productions to carry age ratings similar to film certificates",
            "It abolished stage censorship — scripts had previously needed to be licensed through the Lord Chamberlain's office. Writers began experimenting with new styles, and performances like 'Hair' and 'Oh Calcutta!' featured nudity"
        ],
        answer: "It abolished stage censorship — scripts had previously needed to be licensed through the Lord Chamberlain's office. Writers began experimenting with new styles, and performances like 'Hair' and 'Oh Calcutta!' featured nudity",
        feedback: "The Theatre Act 1968 abolished stage censorship. Until this point scripts had to be licensed through the Lord Chamberlain's office. Backed by Labour backbencher George Strauss and supported by Roy Jenkins, it enabled writers to experiment with new styles — 'Hair' and 'Oh Calcutta!' soon featured nudity."
    },
    {
        topic: "Social & Cultural Change 1960s",
        question: "How did television transform British society in the 1960s?",
        options: [
            "Television remained a luxury item throughout the 1960s, only reaching 30% of households by 1970",
            "Television was exclusively a BBC monopoly until 1970 maintaining strict public broadcasting standards",
            "From two thirds of the population never having seen a TV in 1949, TV was a social necessity by the early 1960s — 13 million licence holders by 1964. ITV's Coronation Street had over 20 million viewers by October 1961",
            "Television primarily reinforced conservative values — the BBC refused anything that challenged British culture"
        ],
        answer: "From two thirds of the population never having seen a TV in 1949, TV was a social necessity by the early 1960s — 13 million licence holders by 1964. ITV's Coronation Street had over 20 million viewers by October 1961",
        feedback: "Two thirds of the population had never seen a TV in 1949. The 1953 Coronation took viewers from 1.5 million to 3 million overnight. By 1964 there were 13 million licence holders. ITV launched in 1955 — Lord Reith likened it to 'smallpox, bubonic plague and the black death'. Coronation Street had 20+ million viewers by October 1961."
    },
    {
        topic: "Social & Cultural Change 1960s",
        question: "How did pirate radio emerge and how did the government respond?",
        options: [
            "Pirate radio was immediately suppressed by the Post Office, which jammed all unlicensed broadcasts",
            "Pirate radio was tolerated as a harmless novelty and eventually absorbed into the BBC without legislation",
            "The government licensed pirate stations as commercial radio, creating a mixed broadcasting economy",
            "Radio Caroline launched in 1964 from a ship off the Essex coast broadcasting popular music. The government introduced the Marine Broadcasting Act 1967 to shut down offshore stations, then launched Radio One recruiting former pirate DJs"
        ],
        answer: "Radio Caroline launched in 1964 from a ship off the Essex coast broadcasting popular music. The government introduced the Marine Broadcasting Act 1967 to shut down offshore stations, then launched Radio One recruiting former pirate DJs",
        feedback: "At the start of the 1960s the BBC had no station for popular music. Radio Caroline launched in 1964 from a ship off the Essex coast. The government introduced the Marine Broadcasting Act 1967 to shut down offshore stations, then launched Radio One — recruiting former pirate DJs like Tony Blackburn."
    },
    {
        topic: "Social & Cultural Change 1960s",
        question: "What were the limits of the 'permissive society'?",
        options: [
            "There were no significant limits — British society was transformed root and branch by liberal attitudes",
            "Religious opposition from Catholic and Anglican churches successfully blocked most permissive legislation",
            "The permissive society was limited entirely to London with no impact on provincial Britain",
            "A 1969 New Society survey showed only 5% welcomed easier laws as the most important change; 77% thought too much publicity was given to sex; and surveys found most young people were virgins on marriage"
        ],
        answer: "A 1969 New Society survey showed only 5% welcomed easier laws as the most important change; 77% thought too much publicity was given to sex; and surveys found most young people were virgins on marriage",
        feedback: "A New Society survey in 1969 showed only 5% welcomed easier laws as the most important 60s change. 77% thought too much publicity was given to sex, and 71% believed murderers ought to be hanged. Surveys by Schofield and Gorer found promiscuity was not common teenage behaviour — most were virgins on marriage."
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
        feedback: "Women sewing machinists at Ford's Dagenham plant walked out in 1968, halting car production. The regrading left them 15% below the male rate. Barbara Castle intervened — their pay was raised to 8% below men's rate. Only by 1984 was 95% of men's rate secured. It led directly to the 1970 Equal Pay Act."
    },
    {
        topic: "Women's Rights 1964-70",
        question: "What were the key women's rights legislative achievements of 1967-70?",
        options: [
            "Equal Pay Act, Sex Discrimination Act, and the right to vote in all elections",
            "Introduction of maternity leave, childcare subsidies, and the right to apply for mortgages independently",
            "Abolition of the marriage bar, equal access to university, and the right to serve on juries",
            "Matrimonial Homes Act, Abortion Act, Family Planning Act, Divorce Reform Act, Matrimonial Property Act recognising domestic work as a financial contribution, and Equal Pay Act"
        ],
        answer: "Matrimonial Homes Act, Abortion Act, Family Planning Act, Divorce Reform Act, Matrimonial Property Act recognising domestic work as a financial contribution, and Equal Pay Act",
        feedback: "Key legislation included: Matrimonial Homes Act 1967 (equal right of occupation), Abortion Act 1967, Family Planning Act 1967 (pill for all women), Divorce Reform Act 1969, Matrimonial Property Act 1970 (recognising domestic work as financial contribution), and Equal Pay Act 1970."
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
        feedback: "Male comrades on the left expected women to 'lick envelopes and make tea rather than make speeches'. Popular publications like Woman's Own constantly revisited 'getting and keeping your man'. Sexual freedom led to new objectification — women were increasingly sexualised rather than liberated."
    },
    {
        topic: "Immigration & Race 1964-70",
        question: "What was the Commonwealth Immigrants Act 1968 and why was it controversial?",
        options: [
            "It banned all new Commonwealth immigration regardless of passport status",
            "It introduced a language test for all Commonwealth immigrants seeking permanent residence",
            "It reduced work vouchers to 8,500 per year with broad parliamentary support",
            "Triggered by the Kenyan Asian influx, it restricted UK citizenship to those with at least one parent or grandparent born in the UK — effectively excluding Kenyan Asians with British passports. 35 Labour, 15 Tory, and all Liberal MPs voted against it"
        ],
        answer: "Triggered by the Kenyan Asian influx, it restricted UK citizenship to those with at least one parent or grandparent born in the UK — effectively excluding Kenyan Asians with British passports. 35 Labour, 15 Tory, and all Liberal MPs voted against it",
        feedback: "When Kenya gained independence in 1963, 40K Asians held British passports. 13K arrived in the first two months of 1967 alone. The emergency Act restricted citizenship to those with at least one parent or grandparent born in the UK — effectively excluding Kenyan Asians. Incredibly divisive — 35 Labour, 15 Tory, and all Liberal MPs voted against it."
    },
    {
        topic: "Immigration & Race 1964-70",
        question: "What was Enoch Powell's 'Rivers of Blood' speech?",
        options: [
            "A measured parliamentary speech calling for immigration controls, widely supported by both parties",
            "A speech predicting racial violence — 'I seem to see the Tiber foaming with much blood' — arguing the Race Relations Bill would give 'the black man the whip hand over the white man'. Heath sacked him from the Shadow Cabinet, yet 74% of a poll supported Powell",
            "A private letter to the Prime Minister leaked to the press calling for voluntary repatriation",
            "A House of Commons speech that led directly to the Race Relations Act 1968 being strengthened"
        ],
        answer: "A speech predicting racial violence — 'I seem to see the Tiber foaming with much blood' — arguing the Race Relations Bill would give 'the black man the whip hand over the white man'. Heath sacked him from the Shadow Cabinet, yet 74% of a poll supported Powell",
        feedback: "Powell's speech predicted racial violence: 'I seem to see the Tiber foaming with much blood'. He argued the Race Relations Bill would mean 'the black man will have the whip hand over the white man'. Heath sacked him from the shadow cabinet, yet 74% of a poll supported Powell, 80% wanted stricter controls, and he received 43K letters within weeks."
    },
    {
        topic: "Northern Ireland 1964-70",
        question: "What was the Battle of the Bogside in 1969?",
        options: [
            "An IRA attack on the RUC that killed 15 police officers",
            "A loyalist attack on Catholic homes in Belfast that triggered British Army deployment",
            "A siege of the Bogside by British troops that ended with IRA surrender",
            "Skirmishes after the Apprentice Boys marched near the Catholic Bogside rapidly escalated into a full-scale uprising — the RUC used tear gas; 8 were killed, at least 750 injured, and £2.25 million in damage was caused"
        ],
        answer: "Skirmishes after the Apprentice Boys marched near the Catholic Bogside rapidly escalated into a full-scale uprising — the RUC used tear gas; 8 were killed, at least 750 injured, and £2.25 million in damage was caused",
        feedback: "The Apprentice Boys were permitted to march through Londonderry, passing close to the Catholic Bogside. Skirmishes rapidly escalated into a full-scale uprising. The RUC used tear gas and baton charges. 8 were killed by the RUC and B Specials, at least 750 injured, and £2.25 million in compensation was owed for 180 homes and buildings damaged."
    },
    {
        topic: "Education Reform 1960s",
        question: "What was Tony Crosland's Circular 10/65?",
        options: [
            "It ordered all local authorities to immediately convert their grammar schools to comprehensives",
            "It created the polytechnic system by converting technical colleges into degree-awarding institutions",
            "It introduced the national curriculum for the first time, standardising education across all schools",
            "Rather than ordering comprehensivisation, it requested it — making funding for new school buildings available only for comprehensives. Crosland privately declared his intention to 'destroy every f***ing grammar school in England'"
        ],
        answer: "Rather than ordering comprehensivisation, it requested it — making funding for new school buildings available only for comprehensives. Crosland privately declared his intention to 'destroy every f***ing grammar school in England'",
        feedback: "Crosland accelerated the shift to comprehensives via Circular 10/65, making funding for new school buildings only available for comprehensives. He privately declared: 'If it's the last thing I do, I'm going to destroy every f***ing grammar school in England. And Wales. And Northern Ireland.' Change had already begun — 90 of 146 authorities were moving to comprehensives by 1962."
    },
    {
        topic: "Education Reform 1960s",
        question: "What was the Open University and why was Wilson proud of it?",
        options: [
            "A network of evening classes bringing degree-level education to factory workers",
            "A government-funded adult literacy programme that expanded into higher education",
            "Wilson later said it was what he most wanted to be remembered for — high quality degree-level learning for those who had never attended campus universities, taught by radio and TV. First students began January 1971. By 1980 it had 70K students, awarding more degrees than Oxbridge",
            "A distance learning programme exclusively for women returning to work after raising children"
        ],
        answer: "Wilson later said it was what he most wanted to be remembered for — high quality degree-level learning for those who had never attended campus universities, taught by radio and TV. First students began January 1971. By 1980 it had 70K students, awarding more degrees than Oxbridge",
        feedback: "Wilson said the Open University was what he most wanted to be remembered for. Jennie Lee was appointed to handle the project — her working class background was crucial. First students began January 1971, taught by radio and TV. Tory Ian Macleod called it 'blithering nonsense'. By 1980 it had 70K students, awarding more degrees than Oxbridge."
    },
    {
        topic: "Wilson & Foreign Policy",
        question: "How did Wilson handle British military commitment to Vietnam?",
        options: [
            "Wilson sent 5,000 British troops under pressure from President Johnson",
            "Wilson offered naval support but refused to commit ground troops",
            "Wilson never sent a single regular soldier to Vietnam — historians regard this as a significant achievement given the enormous pressure from Johnson and Britain's need for US support over Rhodesia",
            "Wilson supported the US position publicly but privately lobbied Johnson for a ceasefire"
        ],
        answer: "Wilson never sent a single regular soldier to Vietnam — historians regard this as a significant achievement given the enormous pressure from Johnson and Britain's need for US support over Rhodesia",
        feedback: "Wilson never sent a single regular soldier to Vietnam. He needed US support for Rhodesian sanctions, and Americans wanted British involvement in Vietnam. He got Kosygin to agree to an American-approved peace plan, until Johnson changed his mind at the last minute. Cooper recalled he 'had never seen anyone quite so angry' as Wilson."
    },
    {
        topic: "Wilson & Foreign Policy",
        question: "What was the Rhodesia Crisis and why did it embarrass Wilson?",
        options: [
            "Wilson successfully negotiated a peaceful transition to Black majority rule in Rhodesia by 1970",
            "Wilson sent troops to Rhodesia to enforce sanctions, leading to a minor military conflict",
            "Rhodesia agreed to Black majority rule in 1968 following effective British economic sanctions",
            "Wilson met Smith aboard HMS Tiger and HMS Fearless — Smith agreed to packages then rejected them at home both times. Sandbrook called it 'hardly a more obvious symbol of British government's fading reputation' than failing to control its own colonists"
        ],
        answer: "Wilson met Smith aboard HMS Tiger and HMS Fearless — Smith agreed to packages then rejected them at home both times. Sandbrook called it 'hardly a more obvious symbol of British government's fading reputation' than failing to control its own colonists",
        feedback: "By mid-1966 Smith's regime had dug in — sanctions had evaporated as Rhodesia traded through Mozambique and South Africa. Wilson met Smith aboard HMS Tiger in 1966 and HMS Fearless in 1968 — both times Smith agreed to packages then rejected them. Sandbrook said it symbolised 'British government's fading reputation'."
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
            "Heath declared a 'new style of government' aiming to reduce state intervention — but inflation rose to 15% by end of 1971, BOP deficit reached nearly £1 billion, and unemployment exceeded 850K by 1973"
        ],
        answer: "Heath declared a 'new style of government' aiming to reduce state intervention — but inflation rose to 15% by end of 1971, BOP deficit reached nearly £1 billion, and unemployment exceeded 850K by 1973",
        feedback: "Heath entered office declaring a 'new style of government' — a Tory 'quiet revolution' reducing state intervention. But inflation rose to 15% by end of 1971, and by 1973 the BOP deficit was nearly £1 billion with unemployment over 850K. Chancellor Ian Macleod died weeks into the government."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was Heath's 'U-Turn' of 1972?",
        options: [
            "Heath reversed his pro-European stance and demanded renegotiation of EEC terms",
            "Heath reversed his industrial relations legislation and reached a compromise with the TUC",
            "Heath called a snap election to seek a new mandate for his economic policies",
            "Heath returned to controlling prices and incomes — contradicting his free market approach — bailing out Upper Clyde Shipbuilders, nationalising Rolls-Royce. Marr said he was 'behaving like a Wilson-era socialist'"
        ],
        answer: "Heath returned to controlling prices and incomes — contradicting his free market approach — bailing out Upper Clyde Shipbuilders, nationalising Rolls-Royce. Marr said he was 'behaving like a Wilson-era socialist'",
        feedback: "In 1972 Heath announced a return to controlling prices and incomes — directly contradicting his original free market approach. He bailed out failing companies like Upper Clyde Shipbuilders and nationalised Rolls-Royce. Marr said he was 'behaving like a Wilson-era socialist'. The 1972 Industry Act gave unprecedented powers of industrial intervention."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was the Industrial Relations Act 1971 and why did it fail?",
        options: [
            "It successfully reduced strike days by 50% and improved industrial relations",
            "It introduced compulsory arbitration for all industrial disputes and was broadly welcomed",
            "It abolished the right to strike in essential services but was overturned by the courts",
            "It set up a National Industrial Relations Court — but the TUC voted not to cooperate, instructing all unions not to register. Murphy said Heath had 'legislated too quickly without consultation'. 23.9 million working days were lost in 1972"
        ],
        answer: "It set up a National Industrial Relations Court — but the TUC voted not to cooperate, instructing all unions not to register. Murphy said Heath had 'legislated too quickly without consultation'. 23.9 million working days were lost in 1972",
        feedback: "The Industrial Relations Act 1971 set up a National Industrial Relations Court with powers to enforce strike ballots and 60-day cooling-off periods. But the TUC formally voted not to cooperate and instructed all unions not to register. Murphy said Heath had 'made the mistake of legislating too quickly, without sufficient consultation'."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was the outcome of the 1972 miners' strike?",
        options: [
            "Miners struck for two weeks, accepted a modest increase, and returned to work without incident",
            "Heath used emergency powers to break the strike after two days, imprisoning the NUM leadership",
            "The strike was settled by an independent pay board awarding miners a 5% increase",
            "The NUM used flying pickets to bring coal movement to a standstill — the NUM gained a 21% wage increase, nearly 3 times what employers offered — a major defeat for Heath's government"
        ],
        answer: "The NUM used flying pickets to bring coal movement to a standstill — the NUM gained a 21% wage increase, nearly 3 times what employers offered — a major defeat for Heath's government",
        feedback: "In 1972 the NUM, led by Arthur Scargill, used flying pickets to bring the movement of coal to a standstill. The NUM gained a 21% wage increase — nearly 3 times what employers had originally offered. A major defeat for Heath's government, emboldening the unions significantly."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "What was Bloody Sunday and what were its consequences?",
        options: [
            "IRA bombers killed 13 soldiers in Londonderry, leading to the introduction of internment",
            "RUC officers fired on a civil rights march, killing 6 people and triggering the formation of the Provisional IRA",
            "Loyalist paramilitaries killed 13 Catholics in Belfast, leading Wilson to deploy British troops",
            "Troops from the Parachute Regiment killed 13 unarmed civilians in Londonderry in 1972 — mass protests followed, the British embassy in Dublin was burned, and direct rule from Westminster was imposed"
        ],
        answer: "Troops from the Parachute Regiment killed 13 unarmed civilians in Londonderry in 1972 — mass protests followed, the British embassy in Dublin was burned, and direct rule from Westminster was imposed",
        feedback: "On Bloody Sunday 1972, troops from the Parachute Regiment killed 13 unarmed civilians in Londonderry. Mass protests followed — the British embassy in Dublin was burned and the Parachute Regiment's Aldershot HQ was bombed. This led to the suspension of Stormont and direct rule from Westminster."
    },
    {
        topic: "Heath's Government 1970-74",
        question: "Why did Heath take Britain into the EEC in 1973?",
        options: [
            "He was forced to by American pressure and had no personal enthusiasm for European integration",
            "He joined primarily to access European agricultural subsidies for British farmers",
            "EEC entry was a condition of the IMF loan that bailed out the British economy in 1972",
            "Heath was very pro-European and saw it as a means to modernise British society — the Commons approved entry 356 votes to 244, and Britain formally joined in January 1973"
        ],
        answer: "Heath was very pro-European and saw it as a means to modernise British society — the Commons approved entry 356 votes to 244, and Britain formally joined in January 1973",
        feedback: "Heath was very pro-European and saw EEC membership as a means to modernise British society, believing Britain could no longer act alone in the world. The Commons approved entry 356 votes to 244 and Britain formally joined in January 1973. However, the Common Agricultural Policy imposed high food import tariffs."
    },
    {
        topic: "Wilson & Callaghan 1974-79",
        question: "What was the Social Contract under Wilson's second government?",
        options: [
            "A formal agreement between all three main parties to maintain the post-war consensus",
            "An agreement with the TUC abolishing the Industrial Relations Act in exchange for a £6/week wage limit — but the miners' full wage claim was settled immediately, wages rose 19% in 1974 and 23% in 1975",
            "A binding legal agreement between employers and unions to submit all disputes to arbitration",
            "A European-style works council system giving unions representation on company boards"
        ],
        answer: "An agreement with the TUC abolishing the Industrial Relations Act in exchange for a £6/week wage limit — but the miners' full wage claim was settled immediately, wages rose 19% in 1974 and 23% in 1975",
        feedback: "Wilson's second government abolished the Industrial Relations Act and introduced the Social Contract — the TUC agreed to a £6/week limit on wage rises. However, the miners' strike was settled by allowing their full wage claim, encouraging further action. Wages rose 19% in 1974 and 23% in 1975. Unions grew in confidence."
    },
    {
        topic: "Wilson & Callaghan 1974-79",
        question: "What was the 1976 IMF crisis and what were its consequences?",
        options: [
            "Britain refused the IMF loan and cut spending voluntarily, emerging stronger within six months",
            "The IMF imposed a 20% devaluation of sterling as a condition of the emergency loan",
            "Britain was forced to accept IMF supervision of all economic policy for five years",
            "A huge BOP deficit, 16% inflation, and the pound falling to $1.57 forced Healey to ask the IMF for a £3 billion loan. £2.5 billion in cuts followed — economically successful but politically disastrous; Labour lost 4 by-elections and its Commons majority"
        ],
        answer: "A huge BOP deficit, 16% inflation, and the pound falling to $1.57 forced Healey to ask the IMF for a £3 billion loan. £2.5 billion in cuts followed — economically successful but politically disastrous; Labour lost 4 by-elections and its Commons majority",
        feedback: "The 1976 crisis was caused by a huge BOP deficit, 16% inflation, unemployment over 1 million, and the pound falling to $1.57. Healey asked the IMF for £3 billion, granted on condition of massive cuts. Along with North Sea Oil, by 1977 Britain could repay much of the loan. But it was politically disastrous — Labour lost 4 by-elections and its Commons majority."
    },
    {
        topic: "Wilson & Callaghan 1974-79",
        question: "What was Callaghan's statement about Keynesian economics and why was it significant?",
        options: [
            "'Inflation is the enemy of the working class' — signalling a shift to monetarist economics",
            "'The trade unions must accept that wage restraint is the price of full employment'",
            "'Britain must join the ERM to solve inflation' — marking a shift to European monetary discipline",
            "'We used to think you could spend your way out of a recession... I tell you in all candour that that option no longer exists' — seen by some historians as the moment the post-war consensus ended"
        ],
        answer: "'We used to think you could spend your way out of a recession... I tell you in all candour that that option no longer exists' — seen by some historians as the moment the post-war consensus ended",
        feedback: "Callaghan said: 'We used to think you could spend your way out of a recession... I tell you in all candour that that option no longer exists.' Some historians argue this was the moment the post-war consensus ended — Labour had made a decisive break from Keynesian economics, anticipating the Thatcherite shift that would follow."
    },
    {
        topic: "Wilson & Callaghan 1974-79",
        question: "What was the Winter of Discontent 1978-79?",
        options: [
            "A period of severe blizzards that disrupted the economy and brought down Callaghan's government",
            "A series of IRA bombings across mainland Britain that paralysed public life",
            "Mass unemployment protests sweeping through northern cities in the winter of 1978",
            "Callaghan proposed limiting wages to 5% at a time of 10% inflation — strikes followed from lorry drivers, school meal workers, rubbish collectors and grave diggers. 29 million working days were lost in 1979. Press labelled his relaxed response as 'Crisis? What crisis?'"
        ],
        answer: "Callaghan proposed limiting wages to 5% at a time of 10% inflation — strikes followed from lorry drivers, school meal workers, rubbish collectors and grave diggers. 29 million working days were lost in 1979. Press labelled his relaxed response as 'Crisis? What crisis?'",
        feedback: "Callaghan proposed limiting wage increases to 5% at a time of 10% inflation. The Winter of Discontent followed — lorry drivers struck threatening food supplies, school meal workers, rubbish collectors and grave diggers struck. The press labelled Callaghan's relaxed leadership as 'Crisis? What crisis?' 29 million working days were lost in 1979."
    },
    {
        topic: "Wilson & Callaghan 1974-79",
        question: "What caused Callaghan to call a general election in 1979?",
        options: [
            "He chose to call an election at the most favourable moment following economic recovery",
            "The Liberal Party withdrew from the Lib-Lab Pact, removing his working majority",
            "Callaghan resigned after losing a vote on Winter of Discontent emergency measures",
            "Scottish and Welsh devolution referendums failed to reach the 40% threshold — the SNP withdrew support, a vote of no confidence was passed, forcing the election that Labour lost"
        ],
        answer: "Scottish and Welsh devolution referendums failed to reach the 40% threshold — the SNP withdrew support, a vote of no confidence was passed, forcing the election that Labour lost",
        feedback: "Devolution acts required 40% of the electorate to vote in favour — only 12% of Welsh and 33% of Scots voted yes. Plans were shelved, the SNP withdrew support, a vote of no confidence was passed, and Callaghan was forced to call the general election that Labour lost."
    },
    {
        topic: "Society in the 1970s",
        question: "What progress did women make in the 1970s?",
        options: [
            "Full equality was achieved in the workplace by 1979 following the Equal Pay Act",
            "Women achieved equal representation in Parliament and the professions by the mid-1970s",
            "Margaret Thatcher's election as Conservative leader in 1975 delivered equal opportunities",
            "The pill was available on the NHS from 1971, women could take out mortgages without male guarantors from 1971, and 1975 saw the Equal Pay Act, Sex Discrimination Act, and Employment Protection Act — though women's wages were still only 70% of men's by 1977"
        ],
        answer: "The pill was available on the NHS from 1971, women could take out mortgages without male guarantors from 1971, and 1975 saw the Equal Pay Act, Sex Discrimination Act, and Employment Protection Act — though women's wages were still only 70% of men's by 1977",
        feedback: "The contraceptive pill became available on the NHS in 1971, women could take out mortgages without male guarantors from 1971, and 1975 saw the Equal Pay Act, Sex Discrimination Act, and Employment Protection Act (maternity leave). The 1976 Domestic Violence Act allowed restraining orders. But the Equal Opportunities Commission was toothless — women's wages were only 70% of men's by 1977."
    },
    {
        topic: "Society in the 1970s",
        question: "What was the National Front and how significant was it in the 1970s?",
        options: [
            "A small fringe group with fewer than 1,000 members posing no serious political threat",
            "A mainstream party that won 15 seats in the 1979 general election",
            "An anti-immigration pressure group that successfully lobbied for the 1971 Immigration Act",
            "It grew rapidly to 20K members by 1976, its marches provoked violence with 100 incidents over 2.5 years including 2 murders, and assaults on Asians and Afro-Caribbeans rose by a third"
        ],
        answer: "It grew rapidly to 20K members by 1976, its marches provoked violence with 100 incidents over 2.5 years including 2 murders, and assaults on Asians and Afro-Caribbeans rose by a third",
        feedback: "The National Front grew rapidly to 20K members by 1976. Its marches provoked violence — 100 incidents over 2.5 years including 2 murders. Assaults on Asians and Afro-Caribbeans rose by a third. The skinhead movement became linked to the NF and football hooliganism. But the Rock Against Racism movement attracted 100K to a Trafalgar Square concert in opposition."
    },
    {
        topic: "Society in the 1970s",
        question: "What was the 1972 Ugandan Asian crisis and how did Heath respond?",
        options: [
            "Heath refused entry and they were resettled in Canada and Australia instead",
            "The Ugandan Asians were held in detention camps for six months while Parliament debated their status",
            "Heath admitted Ugandan Asians only after enormous US pressure and public protests",
            "Idi Amin expelled Asians from Uganda — 28K with British passports were allowed exemptions from the 1971 Act, Heath set up a resettlement board, and most settled prosperously in Britain"
        ],
        answer: "Idi Amin expelled Asians from Uganda — 28K with British passports were allowed exemptions from the 1971 Act, Heath set up a resettlement board, and most settled prosperously in Britain",
        feedback: "In 1972 Idi Amin expelled Asians from Uganda. The 28K with British passports were allowed exemptions from the 1971 Immigration Act. Heath set up a resettlement board. Most settled and lived prosperously — an example of successful managed immigration in contrast to the hostile atmosphere of the era."
    },
    {
        topic: "Society in the 1970s",
        question: "What did punk culture reflect about 1970s Britain?",
        options: [
            "Punk was an apolitical musical movement focused purely on fashion",
            "Punk was a middle class art school movement with little connection to working class experience",
            "Punk was primarily a response to the dominance of American pop music in the British charts",
            "Bands like the Sex Pistols played loud, fast music with deliberately shocking attire — 'God Save the Queen' reached number 2, criticising the monarchy as 'the fascist regime'. Punk reflected social alienation, anger and hopelessness of young people in the decade"
        ],
        answer: "Bands like the Sex Pistols played loud, fast music with deliberately shocking attire — 'God Save the Queen' reached number 2, criticising the monarchy as 'the fascist regime'. Punk reflected social alienation, anger and hopelessness of young people in the decade",
        feedback: "Punks rejected all norms — the Sex Pistols and The Damned played loud, fast music with deliberately shocking attire. 'God Save the Queen' reached number 2 — criticising the monarchy as 'the fascist regime'. Punk reflected the social alienation, anger and hopelessness of young people in the 1970s."
    },
    {
        topic: "Society in the 1970s",
        question: "What environmental developments characterised the 1970s?",
        options: [
            "Environmentalism was a fringe concern with little public support in 1970s Britain",
            "A series of nuclear accidents in Britain caused widespread public opposition to atomic power",
            "The government introduced strict environmental regulations following the Clean Air Act",
            "Photos of Earth from space highlighted its fragility; Greenpeace UK was founded in 1977; the 1967 Torrey Canyon wreck caused massive pollution; and the People's Party emerged in 1973 (later the Green Party), standing 53 candidates in 1979"
        ],
        answer: "Photos of Earth from space highlighted its fragility; Greenpeace UK was founded in 1977; the 1967 Torrey Canyon wreck caused massive pollution; and the People's Party emerged in 1973 (later the Green Party), standing 53 candidates in 1979",
        feedback: "Photos of Earth from space highlighted its fragility. David Attenborough's 'Life on Earth' showed the beauty of the natural world. The 1967 Torrey Canyon wreck caused massive pollution in SW England. Greenpeace UK was founded in 1977. The People's Party (later Green Party) stood 53 candidates in the 1979 election."
    },
    {
        topic: "Britain & Europe 1970-79",
        question: "What was the 1975 EEC referendum result and why was it significant for Labour?",
        options: [
            "The vote was close — 51% yes — and failed to resolve the issue within Labour",
            "Britain voted to leave the EEC, forcing renegotiation of entry terms under Callaghan",
            "The referendum returned a 70% yes vote, decisively ending debate",
            "17 million voted yes, 8 million voted no — it avoided a Labour party split as 'no' campaigners within Labour could not argue with the democratic result"
        ],
        answer: "17 million voted yes, 8 million voted no — it avoided a Labour party split as 'no' campaigners within Labour could not argue with the democratic result",
        feedback: "In 1975, 17 million voted yes and 8 million voted no. Only 2/3 of the electorate voted. Crucially, it avoided a Labour party split — 'no' campaigners within Labour could not argue with the democratic result. Wilson had promised the referendum precisely to manage deep divisions within his party over European membership."
    }
]

const usQs = [
    {
        topic: "Reconstruction",
        question: "When was the Freedmen's Bureau established, and what was its original intended duration?",
        options: ["1863, three years", "1865, one year", "1867, five years", "1870, two years"],
        answer: "1865, one year",
        feedback: "The Freedmen's Bureau was set up in 1865 to help former slaves with education and employment. It was only supposed to run for one year but was later extended to five years."
    },
    {
        topic: "Civil War",
        question: "How many states seceded from the Union to form the Confederacy?",
        options: ["7", "9", "11", "13"],
        answer: "11",
        feedback: "A total of 11 states seceded from the Union and set up the Confederacy."
    },
    {
        topic: "Civil War",
        question: "Approximately what percentage of the US population died in the Civil War?",
        options: ["0.5%", "1%", "2%", "5%"],
        answer: "2%",
        feedback: "At least 620,000 soldiers died — roughly 2% of the population in 1861."
    },
    {
        topic: "Civil War",
        question: "How did casualties at the Battle of Antietam compare to American deaths at D-Day?",
        options: ["Roughly equal", "Twice as many", "Three times as many", "Half as many"],
        answer: "Three times as many",
        feedback: "The number of casualties in a single day at Antietam was three times the American deaths at D-Day."
    },
    {
        topic: "Civil War",
        question: "What fraction of Mississippi's state revenue in 1865 was spent on artificial limbs?",
        options: ["1/10", "1/5", "1/3", "1/2"],
        answer: "1/5",
        feedback: "Mississippi spent one fifth of its entire state revenue in 1865 on artificial limbs, illustrating the devastating human cost of the Civil War on the South."
    },
    {
        topic: "Civil War",
        question: "By how much did the North's wealth increase over the course of the 1860s?",
        options: ["Over 25%", "Over 50%", "Over 75%", "Over 100%"],
        answer: "Over 50%",
        feedback: "The North's wealth increased by over 50% over the course of the 1860s, while the South was left economically devastated."
    },
    {
        topic: "Civil War",
        question: "How much had the South invested in slaves in 1860, and what happened to that investment after the war?",
        options: ["$1bil, reduced by half", "$2bil, reduced by half", "$3.5bil, now worthless", "$5bil, reduced by a quarter"],
        answer: "$3.5bil, now worthless",
        feedback: "Southern investment in slaves stood at $3.5 billion in 1860. After the Civil War and abolition, that investment became entirely worthless."
    },
    {
        topic: "Civil War",
        question: "What happened to the plantation system after the Civil War?",
        options: ["It was nationalised by the federal government", "It continued largely unchanged under new management", "It collapsed — great estates were divided into tenant farms rented to sharecroppers", "It was bought up by northern industrialists"],
        answer: "It collapsed — great estates were divided into tenant farms rented to sharecroppers",
        feedback: "The plantation system collapsed after the Civil War, with great estates divided into tenant farms rented to sharecroppers."
    },
    {
        topic: "Civil War",
        question: "Where did Robert E. Lee surrender to Ulysses S. Grant in April 1865?",
        options: ["Richmond, Virginia", "Gettysburg, Pennsylvania", "Appomattox Court House", "Petersburg, Virginia"],
        answer: "Appomattox Court House",
        feedback: "In April 1865, Robert E. Lee surrendered to Ulysses S. Grant at Appomattox Court House, effectively ending the Civil War."
    },
    {
        topic: "Civil War",
        question: "What did Grant's 120,000-man army achieve at Richmond and Petersburg?",
        options: ["Negotiated a peace treaty", "Smashed Confederate lines, ending a 9-month siege", "Forced a Confederate retreat to Georgia", "Captured Jefferson Davis"],
        answer: "Smashed Confederate lines, ending a 9-month siege",
        feedback: "Grant's 120,000-man army smashed Confederate lines at Richmond and Petersburg, ending a nine-month siege and precipitating Lee's surrender."
    },
    {
        topic: "Reconstruction",
        question: "What did Lincoln's 10% Plan of April 1864 require for a rebel state to be readmitted to the Union?",
        options: ["50% of electorate pledge loyalty", "All citizens renounce slavery", "10% of electorate pledge future loyalty to the US", "A new state constitution approved by Congress"],
        answer: "10% of electorate pledge future loyalty to the US",
        feedback: "Under the 10% Plan, rebel states could be readmitted if 10% of the electorate agreed to future allegiance to the US, supported existing acts regarding slavery, and allowed African American voting."
    },
    {
        topic: "Reconstruction",
        question: "What did the Radical Republicans' Wade-Davis Bill require, in contrast to Lincoln's 10% Plan?",
        options: ["5% of electorate to pledge loyalty", "50% of electorate to take a much tougher oath, excluding ex-Confederates from government roles", "Full citizenship for all freed slaves immediately", "Military tribunals for Confederate leaders"],
        answer: "50% of electorate to take a much tougher oath, excluding ex-Confederates from government roles",
        feedback: "The Radical Republicans' Wade-Davis Bill required 50% of the electorate to take a much tougher loyalty oath and excluded ex-Confederates from roles in government."
    },
    {
        topic: "Reconstruction",
        question: "What were Andrew Johnson's key aims for Reconstruction?",
        options: ["Punishment of Confederate leaders and full equality for African Americans", "Restore states as quickly as possible, with amnesty and conciliation over punishment", "Military occupation of the South for at least a decade", "Immediate redistribution of plantation land to freed slaves"],
        answer: "Restore states as quickly as possible, with amnesty and conciliation over punishment",
        feedback: "Johnson wanted to restore states as quickly as possible, preferring amnesty and conciliation over punishment. He was committed to state's rights and strong presidential leadership."
    },
    {
        topic: "Reconstruction",
        question: "What was the Radical Republicans' position on Reconstruction?",
        options: ["Quick restoration with minimal conditions", "Congress should have the final say, with punishment and complete equality for African Americans", "Presidential authority should lead the process", "Former Confederate states should be treated as conquered territories permanently"],
        answer: "Congress should have the final say, with punishment and complete equality for African Americans",
        feedback: "Radical Republicans believed Congress should have the final say in Reconstruction, and called for punishment of the South and complete equality for African Americans."
    },
    {
        topic: "Reconstruction",
        question: "How did Andrew Johnson handle Reconstruction without calling Congress into special session?",
        options: ["He delegated authority to military governors", "He used executive authority alone", "He worked through the Supreme Court", "He relied on state governors to decide their own terms"],
        answer: "He used executive authority alone",
        feedback: "Johnson did not call Congress into special session for his Reconstruction, instead using executive authority alone — a move that enraged Radical Republicans."
    },
    {
        topic: "Reconstruction",
        question: "What voting restrictions did Andrew Johnson impose in his Reconstruction plan?",
        options: ["He extended voting to all men including freed slaves", "He limited voting to those who qualified under pre-secession rules — no African American vote", "He allowed African American voting in former Confederate states only", "He imposed a literacy test for all voters"],
        answer: "He limited voting to those who qualified under pre-secession rules — no African American vote",
        feedback: "Johnson limited voting to those who qualified under pre-secession rules, effectively excluding African Americans from the vote entirely."
    },
    {
        topic: "Reconstruction",
        question: "What was the 1867 Tenure of Office Act?",
        options: ["It gave the president unlimited power to appoint cabinet members", "It limited presidential power to remove office holders, after Johnson purged Republican civil servants", "It established the civil service merit system", "It gave Congress power to veto presidential appointments"],
        answer: "It limited presidential power to remove office holders, after Johnson purged Republican civil servants",
        feedback: "The 1867 Tenure of Office Act limited the president's power to remove office holders after Johnson purged the federal civil service of Republicans. Johnson vetoed it, calling it unconstitutional."
    },
    {
        topic: "Reconstruction",
        question: "What triggered the House of Representatives formally impeaching Andrew Johnson?",
        options: ["His pardon of Confederate generals", "His veto of the Reconstruction Act 1867", "He dismissed Secretary of War Edwin Stanton in defiance of Congress's overruling of his suspension", "His public speeches attacking Radical Republicans"],
        answer: "He dismissed Secretary of War Edwin Stanton in defiance of Congress's overruling of his suspension",
        feedback: "Congress overruled Johnson's suspension of Stanton, but Johnson dismissed him anyway. A few days later, the House formally impeached him by a vote of 126 to 47."
    },
    {
        topic: "Reconstruction",
        question: "By how many votes did Andrew Johnson escape conviction at his impeachment trial?",
        options: ["1", "3", "5", "10"],
        answer: "1",
        feedback: "Johnson escaped impeachment by just one vote after an 11-week trial, having promised to enforce Reconstruction acts and stop attacking Congress publicly."
    },
    {
        topic: "Reconstruction",
        question: "What did the 15th Amendment of 1869 guarantee?",
        options: ["Abolition of slavery", "Citizenship for all born in the US", "The right to vote could not be denied on grounds of race, color, or previous servitude", "Equal pay regardless of race"],
        answer: "The right to vote could not be denied on grounds of race, color, or previous servitude",
        feedback: "The 15th Amendment gave voting rights to all male freedmen — the right to vote could not be denied on the basis of race, color, or previous servitude."
    },
    {
        topic: "Reconstruction",
        question: "What did Frederick Douglass say about Grant's role in African American enfranchisement?",
        options: ["He called Grant a reluctant ally who did the minimum required", "He said 'To him, more than any other man, the negro owes his enfranchisement'", "He criticised Grant for not going far enough", "He praised Grant's military rather than political record"],
        answer: "He said 'To him, more than any other man, the negro owes his enfranchisement'",
        feedback: "Frederick Douglass remarked in regard to Grant: 'To him, more than any other man, the negro owes his enfranchisement.' Grant had pushed for the 15th Amendment and used federal troops to fight white terror."
    },
    {
        topic: "Reconstruction",
        question: "What was the 1872 Amnesty Act?",
        options: ["It restored voting rights and the right to hold office to almost all former Confederates", "It pardoned all Confederate soldiers convicted of war crimes", "It extended the Freedmen's Bureau for another five years", "It gave freed slaves the right to claim Confederate land"],
        answer: "It restored voting rights and the right to hold office to almost all former Confederates",
        feedback: "The 1872 Amnesty Act restored voting rights and the right to hold office to all but a few hundred former Confederates, weakening Reconstruction by re-empowering the old Confederate class."
    },
    {
        topic: "Reconstruction",
        question: "What was the 1873 Colfax Massacre?",
        options: ["Federal troops massacred a KKK gathering in Louisiana", "A mob of 150–300 white men, including KKK members, massacred a black militia defending a courthouse after a disputed election", "Union soldiers fired on white supremacist rioters in South Carolina", "A massacre of sharecroppers by plantation owners in Mississippi"],
        answer: "A mob of 150–300 white men, including KKK members, massacred a black militia defending a courthouse after a disputed election",
        feedback: "After a disputed election, a black militia defended a courthouse fearing a Democratic takeover. A mob of 150–300 white men including KKK members massacred them — as many as 153 may have died."
    },
    {
        topic: "Reconstruction",
        question: "Which Supreme Court case weakened the 14th Amendment by preventing individuals from being prosecuted for civil rights violations?",
        options: ["US v Reese", "Plessy v Ferguson", "Cruikshank v US", "Marbury v Madison"],
        answer: "Cruikshank v US",
        feedback: "Cruikshank v US undermined the 14th Amendment by ruling that individuals could not be prosecuted for civil rights violations, severely limiting federal protection of Black Americans."
    },
    {
        topic: "Reconstruction",
        question: "What did US v Reese open the door to?",
        options: ["Federal prosecution of the KKK", "Biased literacy tests and poll taxes to deny African Americans the vote", "Segregation in public schools", "The re-admission of Confederate states without conditions"],
        answer: "Biased literacy tests and poll taxes to deny African Americans the vote",
        feedback: "US v Reese weakened the enforcement acts and the 15th Amendment, allowing denial of the vote outside of race, color, or previous servitude — opening the floor for biased literacy tests, poll taxes, and other disenfranchisement tactics."
    },
    {
        topic: "Reconstruction",
        question: "What was the outcome of the 1876 presidential election compromise?",
        options: ["Democrats won the presidency in exchange for civil rights protections", "Hayes took the presidency provided Republicans withdrew from the South", "Grant was given a third term", "The election was re-run in disputed Southern states"],
        answer: "Hayes took the presidency provided Republicans withdrew from the South",
        feedback: "Hayes won the electoral college 184 to 165. As a compromise, he took the presidency on the condition that Republicans withdrew from the South — effectively ending Reconstruction."
    },
    {
        topic: "Reconstruction",
        question: "How did Black political representation change between Reconstruction and the end of the century?",
        options: ["It stayed roughly the same", "It grew significantly as African Americans gained more political experience", "17 African Americans served in Congress and 600 in state legislatures during Reconstruction, falling to a few scattered local officials by century's end", "It was never significant even during Reconstruction"],
        answer: "17 African Americans served in Congress and 600 in state legislatures during Reconstruction, falling to a few scattered local officials by century's end",
        feedback: "During Reconstruction, 17 African Americans served in Congress and 600 in state legislatures. By the end of the century this had fallen to just a few scattered local officials, reflecting the rollback of Black political power."
    },
    {
        topic: "Reconstruction",
        question: "What factors caused Northern enthusiasm for Reconstruction to wane by the early 1870s?",
        options: ["Military success in suppressing the KKK made Reconstruction seem complete", "Corruption under Grant, the Panic of 1873, and Northern disassociation from the African American struggle in the South", "The Radical Republicans lost control of Congress in the 1870 midterms", "President Grant publicly abandoned Reconstruction policy"],
        answer: "Corruption under Grant, the Panic of 1873, and Northern disassociation from the African American struggle in the South",
        feedback: "Corruption under Grant fouled the political atmosphere, the Panic of 1873 turned Northern attention to economic problems, and many Northern whites had little personal connection to the African American struggle in the South."
    },
    {
        topic: "Reconstruction",
        question: "What was the KKK's origin and early membership estimate?",
        options: ["Founded by Union veterans in Ohio 1865, 100K members", "Started by Confederate veterans in Tennessee 1866; Nathan Bedford Forrest estimated over 500K members in the South by 1867", "Founded in Mississippi 1868, 200K members by 1870", "Started by plantation owners in Georgia 1865, 300K members"],
        answer: "Started by Confederate veterans in Tennessee 1866; Nathan Bedford Forrest estimated over 500K members in the South by 1867",
        feedback: "The KKK was started by Confederate veterans in Tennessee in 1866. Nathan Bedford Forrest, head of the Klan in 1867, estimated more than 500,000 members in the South."
    },
    {
        topic: "Reconstruction",
        question: "How did white supremacist groups suppress Black votes during Reconstruction?",
        options: ["Exclusively through legal challenges in courts", "Through systematic violence, economic bullying, bribery, and intimidation", "By lobbying Congress to restrict voting rights", "Through ballot counting manipulation only"],
        answer: "Through systematic violence, economic bullying, bribery, and intimidation",
        feedback: "White supremacist groups including the KKK used systematic violence, economic bullying, and intimidation to suppress Black votes. Some African Americans were paid money or offered supplies or land rents just to stay away from the polls."
    },
    {
        topic: "Gilded Age",
        question: "What share of American wealth did the richest 9% of Americans own in 1890?",
        options: ["51%", "61%", "71%", "81%"],
        answer: "71%",
        feedback: "By 1890, the richest 9% of Americans owned 71% of all wealth, illustrating the extreme inequality of the Gilded Age."
    },
    {
        topic: "Gilded Age",
        question: "By what point had the US surpassed Britain as the world's leading producer of manufactured goods and steel?",
        options: ["1870", "Middle of the 1880s", "1900", "1913"],
        answer: "Middle of the 1880s",
        feedback: "By the middle of the 1880s, the US had surpassed Britain as the world's leading producer of manufactured goods and steel — a remarkable rise from being a second-rate power in 1860."
    },
    {
        topic: "Gilded Age",
        question: "What was Carnegie's strategy of vertical integration?",
        options: ["Merging with competitors to form a cartel", "Controlling all processes from extracting ore to finished product, achieving high quality steel at lower costs", "Buying up railroad companies to control transport costs", "Investing in overseas markets to expand sales"],
        answer: "Controlling all processes from extracting ore to finished product, achieving high quality steel at lower costs",
        feedback: "Carnegie's vertical integration meant controlling all processes from extracting ore to the finished product, delivering high quality steel at lower costs and squeezing out competitors."
    },
    {
        topic: "Gilded Age",
        question: "What was Carnegie's 'Gospel of Wealth' (1889) about?",
        options: ["Why industrialists had a moral duty to break up monopolies", "His philanthropic philosophy — the obligations of the wealthy to give back to society", "Why free markets benefited all Americans", "The importance of railroad expansion for national prosperity"],
        answer: "His philanthropic philosophy — the obligations of the wealthy to give back to society",
        feedback: "Carnegie's 1889 'Gospel of Wealth' explained his philanthropic philosophy. He went on to support some 3,000 public libraries and fund around 7,000 church organs."
    },
    {
        topic: "Gilded Age",
        question: "What price did Carnegie sell his business to J.P. Morgan for, and when?",
        options: ["$200mil in 1900", "$480mil in 1913", "$350mil in 1905", "$600mil in 1915"],
        answer: "$480mil in 1913",
        feedback: "Carnegie sold his business to J.P. Morgan in 1913 for $480 million, one of the largest business transactions in history at the time."
    },
    {
        topic: "Gilded Age",
        question: "What was the result of the 1892 Homestead Strike at Carnegie's plant?",
        options: ["Workers won a major pay increase", "Carnegie negotiated directly with union leaders", "Carnegie refused to cooperate with workers and government troops were called in", "The plant was shut down permanently"],
        answer: "Carnegie refused to cooperate with workers and government troops were called in",
        feedback: "Carnegie refused to cooperate with workers during the 1892 Homestead Strike, resulting in government troops being called in to restore order — exposing the gap between his philanthropic rhetoric and his treatment of workers."
    },
    {
        topic: "Gilded Age",
        question: "What share of American oil did Rockefeller control by the 1880s, and what was his fortune by 1889?",
        options: ["A quarter of oil; $50mil fortune", "A third of oil; $100mil fortune", "Half of American oil; $200mil fortune", "Three quarters of oil; $400mil fortune"],
        answer: "Half of American oil; $200mil fortune",
        feedback: "By the 1880s Rockefeller controlled half of all American oil. By 1889 his fortune stood at $200 million."
    },
    {
        topic: "Gilded Age",
        question: "What was the Credit Mobilier scandal?",
        options: ["Jay Gould and Jim Fisk manipulated the gold market with presidential connections", "12 members of Congress accepted bribes from Credit Mobilier and agreed to ignore its shady dealings", "Congressmen voted themselves major salary increases", "Railroad companies colluded to fix freight rates across state lines"],
        answer: "12 members of Congress accepted bribes from Credit Mobilier and agreed to ignore its shady dealings",
        feedback: "The Credit Mobilier scandal revealed that 12 members of Congress had accepted bribes from the company and agreed to ignore its corrupt dealings, badly damaging public trust in government."
    },
    {
        topic: "Gilded Age",
        question: "What was the 1869 Gold Scandal?",
        options: ["The US Treasury ran out of gold reserves after the Civil War", "Friends of Grant — Jay Gould and Jim Fisk — spread rumours that Grant would not sell government gold, bought up the market and profited", "Congress authorised an illegal gold reserve to fund Reconstruction", "Gold miners bribed government officials to prevent regulation of gold prices"],
        answer: "Friends of Grant — Jay Gould and Jim Fisk — spread rumours that Grant would not sell government gold, bought up the market and profited",
        feedback: "Jay Gould and Jim Fisk spread rumours that Grant would not allow the government to sell its gold, bought up much of the remaining gold, and sold at the peak. They paid vast sums to Grant's brother-in-law Abel Corbin as part of the scheme."
    },
    {
        topic: "Gilded Age",
        question: "What caused the Panic of 1873?",
        options: ["Collapse of Southern banks after Reconstruction ended", "Overproduction of wheat flooding international markets", "Wild financial speculation by railroad companies — Jay Cooke & Co went bankrupt", "A run on gold following the Gold Scandal"],
        answer: "Wild financial speculation by railroad companies — Jay Cooke & Co went bankrupt",
        feedback: "The Panic of 1873 was caused by wild financial speculation from railroad companies. When Jay Cooke & Co went bankrupt, NY stocks dropped 10% and 101 banks had failed by month's end."
    },
    {
        topic: "Gilded Age",
        question: "What was the 1883 Pendleton Act?",
        options: ["It broke up the Standard Oil monopoly", "It established a merit system of promotions in the civil service", "It banned foreign contract labour", "It created the Interstate Commerce Commission"],
        answer: "It established a merit system of promotions in the civil service",
        feedback: "Chester Arthur pushed for the 1883 Pendleton Act, which created a merit system of promotions and continuity in the civil service, though it initially affected only around 10% of federal employees."
    },
    {
        topic: "Gilded Age",
        question: "What was the Great Railroad Strike of 1877?",
        options: ["Railroad owners locked out workers demanding safety improvements", "Over 100,000 workers went on strike across multiple states after repeated wage cuts, shutting down rail lines", "Chinese railroad workers struck for equal pay", "Railroad workers protested against the Pendleton Act"],
        answer: "Over 100,000 workers went on strike across multiple states after repeated wage cuts, shutting down rail lines",
        feedback: "The 1877 Great Railroad Strike saw over 100,000 workers strike across multiple states after employers repeatedly cut wages to cover losses from the 1873 depression, shutting down rail lines nationwide."
    },
    {
        topic: "Gilded Age",
        question: "How did J.P. Morgan make his fortune?",
        options: ["He inherited $12 million and increased his wealth through skills as a financier", "He founded Standard Oil and monopolised the American petroleum industry", "He built the transcontinental railroad and profited from land grants", "He manufactured steel and undercut Carnegie's prices"],
        answer: "He inherited $12 million and increased his wealth through skills as a financier",
        feedback: "J.P. Morgan inherited $12 million and increased his fortunes through his skills as a financier. He was a major force behind the creation of large corporations, including US Steel — the first $1 billion company."
    },
    {
        topic: "Gilded Age",
        question: "What did the 1873 Salary Grab involve?",
        options: ["Railroad executives voted themselves bonuses using public funds", "Congressmen voted themselves major salary increases, only stopped by public protest", "President Grant doubled the salaries of cabinet members", "Factory owners illegally withheld wages from immigrant workers"],
        answer: "Congressmen voted themselves major salary increases, only stopped by public protest",
        feedback: "In the 1873 Salary Grab, congressmen voted major salary increases across the board. It was only brought to an end by public protest, badly damaging the reputation of Congress."
    },
    {
        topic: "Gilded Age",
        question: "How did the US economy grow between 1865 and 1898?",
        options: ["Coal production rose 400%, railway track mileage rose 300%", "Coal production rose 800%, railway track mileage rose 567%", "Coal production rose 600%, railway track mileage rose 400%", "Coal production rose 200%, railway track mileage rose 800%"],
        answer: "Coal production rose 800%, railway track mileage rose 567%",
        feedback: "Between 1865 and 1898, coal production rose 800% and railway track mileage rose 567%, reflecting the extraordinary pace of American industrialisation in the Gilded Age."
    },
    {
        topic: "Gilded Age",
        question: "What was William Henry Vanderbilt worth at his death in 1885?",
        options: ["Over $10 million", "Over $50 million", "Over $100 million", "Over $200 million"],
        answer: "Over $100 million",
        feedback: "William Henry Vanderbilt died in 1885 as the richest person in the US, worth over $100 million during his lifetime."
    },
    {
        topic: "Gilded Age",
        question: "Between 1895 and 1904, how many companies merged into giant corporations?",
        options: ["Over 5,000 companies merged into 50 corporations", "Over 10,000 companies merged into 100 corporations", "Over 18,000 companies merged into 157 giant corporations", "Over 25,000 companies merged into 200 corporations"],
        answer: "Over 18,000 companies merged into 157 giant corporations",
        feedback: "Between 1895 and 1904, over 18,000 companies merged into just 157 giant corporations, reflecting the massive consolidation of American industry during the Gilded Age."
    },
    {
        topic: "Jim Crow & Civil Rights",
        question: "What did Plessy v Ferguson (1896) rule?",
        options: ["Segregation was unconstitutional", "Segregation was legal so long as accommodation was equal", "Literacy tests for voting were illegal", "The 14th Amendment applied to private businesses"],
        answer: "Segregation was legal so long as accommodation was equal",
        feedback: "In 1896, Plessy v Ferguson ruled that segregation was legal provided accommodation was equal — in practice, equality of facilities was often non-existent."
    },
    {
        topic: "Jim Crow & Civil Rights",
        question: "What was the Mississippi 'understanding clause' of 1890?",
        options: ["African Americans had to prove they owned property before voting", "Voters had to give a reasonable interpretation of the constitution when read to them, determined by white registrars", "African Americans needed two white witnesses to register to vote", "Voters had to pay a $1 poll tax to access the ballot"],
        answer: "Voters had to give a reasonable interpretation of the constitution when read to them, determined by white registrars",
        feedback: "Mississippi's 1890 'understanding clause' required voters to give a reasonable interpretation of the constitution when it was read to them — judged entirely by white registrars, making it an effective tool for disenfranchising Black voters."
    },
    {
        topic: "Jim Crow & Civil Rights",
        question: "How many people were lynched between 1882 and 1899?",
        options: ["Over 500", "Over 1,000", "Over 2,500", "Over 5,000"],
        answer: "Over 2,500",
        feedback: "Between 1882 and 1899, over 2,500 men and women were lynched. In 1892 alone, 161 Black people were lynched."
    },
    {
        topic: "Jim Crow & Civil Rights",
        question: "What did Ida B. Wells do in 1892?",
        options: ["Founded the NAACP in response to the Springfield Riot", "Published lynching statistics in Memphis Free Speech — a mob later destroyed her newspaper's office", "Led a march of 1,500 women in New York protesting racial violence", "Took her anti-discrimination case to the Supreme Court"],
        answer: "Published lynching statistics in Memphis Free Speech — a mob later destroyed her newspaper's office",
        feedback: "Ida B. Wells published lynching statistics in the Memphis Free Speech in 1892. In retaliation, a mob destroyed the newspaper's office, forcing her to continue her campaign from the North."
    },
    {
        topic: "Jim Crow & Civil Rights",
        question: "How did Booker T. Washington and W.E.B. Du Bois differ in their approach to Black advancement?",
        options: ["Washington wanted political struggle; Du Bois favoured economic self-improvement", "Washington emphasised self-help and economic advancement; Du Bois called him the 'Great Accommodator' and wanted active political struggle for civil rights", "Both agreed on economic advancement but disagreed on the pace", "Washington wanted integration; Du Bois wanted separate Black institutions"],
        answer: "Washington emphasised self-help and economic advancement; Du Bois called him the 'Great Accommodator' and wanted active political struggle for civil rights",
        feedback: "Booker T. Washington focused on self-help and economic advancement. Du Bois called Washington the 'Great Accommodator' and argued instead for active political struggle for civil rights."
    },
    {
        topic: "Jim Crow & Civil Rights",
        question: "What was Black literacy rates before and after slavery?",
        options: ["Around 20–30% under slavery, rising to 70% by 1910", "Around 5–10% under slavery, rising to 50% by 1910", "Around 1–2% under slavery, rising to 30% by 1910", "Around 40% under slavery, rising to 80% by 1910"],
        answer: "Around 5–10% under slavery, rising to 50% by 1910",
        feedback: "Black literacy rates rose from around 5–10% under slavery to 50% by 1910, reflecting the enormous educational effort of African Americans in the post-Civil War decades despite systematic underfunding of Black schools."
    },
    {
        topic: "Jim Crow & Civil Rights",
        question: "What was the Springfield Riot of 1908 and what did it lead to?",
        options: ["A race riot following a disputed election, leading to the 15th Amendment being enforced", "A racially motivated mob attacked Black neighbourhoods following arrests of two Black men — leading to the formation of the NAACP in 1909", "A massacre of sharecroppers, leading to federal anti-lynching legislation", "A labour riot linking race and class, leading to the formation of the AFL"],
        answer: "A racially motivated mob attacked Black neighbourhoods following arrests of two Black men — leading to the formation of the NAACP in 1909",
        feedback: "The Springfield Riot saw a racially motivated mob attack Black neighbourhoods following the arrest of two Black men. At least 6 people died and numerous homes and businesses were destroyed. It led to the reformation of the NAACP in 1909."
    },
    {
        topic: "Jim Crow & Civil Rights",
        question: "Between 1889 and 1929, how many people were lynched in the US and what proportion were Black?",
        options: ["Around 1,000 people; 50% were Black", "Around 2,000 people; 70% were Black", "Nearly 4,000 people; 85% were Black", "Around 6,000 people; 90% were Black"],
        answer: "Nearly 4,000 people; 85% were Black",
        feedback: "Between 1889 and 1929, nearly 4,000 people were lynched — 85% of them Black. Only 50 perpetrators were ever arrested and only 4 were sentenced."
    },
    {
        topic: "Westward Expansion",
        question: "How many acres could be claimed under the 1862 Homestead Act, and for how long did the land need to be cultivated?",
        options: ["80 acres for 3 years", "160 acres for 5 years", "320 acres for 7 years", "240 acres for 4 years"],
        answer: "160 acres for 5 years",
        feedback: "The 1862 Homestead Act offered 160 acres in any of 30 domain states, provided the land was cultivated continuously for 5 years. By the end of the Act, over 270 million acres had been claimed and settled."
    },
    {
        topic: "Westward Expansion",
        question: "Who filed the first homestead claim, and when?",
        options: ["Joseph McCoy, 4th July 1862", "Daniel Freeman, 1st January 1863", "Joseph Glidden, 1st March 1863", "Frederick Turner, 4th July 1865"],
        answer: "Daniel Freeman, 1st January 1863",
        feedback: "The first homestead was claimed by Daniel Freeman on 1st January 1863, the very first day the Homestead Act came into force."
    },
    {
        topic: "Westward Expansion",
        question: "What hardships did settlers on the Great Plains face?",
        options: ["Mostly financial — land was expensive and banks refused loans", "Floods, heat, drought, grasshopper invasions, isolation, and cripplingly high freight charges and loan interest rates", "Primarily conflict with railroad companies over land rights", "Native American resistance was the primary threat to settlers"],
        answer: "Floods, heat, drought, grasshopper invasions, isolation, and cripplingly high freight charges and loan interest rates",
        feedback: "Settlers faced floods, heat, drought, and grasshopper invasions that covered the ground 15cm deep. Isolation was extreme — nearest neighbours were often miles away. Land was cheap but horses, livestock, wagons, and fencing were not, and freight charges and loan interest rates were cripplingly high."
    },
    {
        topic: "Westward Expansion",
        question: "What triggered the Great Sioux War of 1876?",
        options: ["Construction of the Northern Pacific Railroad through Lakota territory", "Discovery of gold in the Black Hills and the government demanding all Native Americans move to reservations", "The Sand Creek Massacre and Army retaliation", "The failure of the Dawes Act negotiations"],
        answer: "Discovery of gold in the Black Hills and the government demanding all Native Americans move to reservations",
        feedback: "Prospectors found gold near the Black Hills in 1874. The government demanded all Native Americans go to reservations by January 1876, ignoring Sioux treaty rights under the Treaty of Laramie 1868. Leaders like Sitting Bull and Crazy Horse refused."
    },
    {
        topic: "Westward Expansion",
        question: "What happened at the Battle of Little Bighorn?",
        options: ["General Sherman negotiated a peace treaty with Sitting Bull", "George Custer divided his force and attempted to encircle a Native encampment — his unit of 210 men was attacked and all were killed", "The US Army successfully rounded up the last Sioux holdouts", "Sitting Bull and Crazy Horse surrendered after being surrounded"],
        answer: "George Custer divided his force and attempted to encircle a Native encampment — his unit of 210 men was attacked and all were killed",
        feedback: "Custer divided his units into three and attempted to encircle the encampment without waiting for the rest of his force. His unit of 210 men came under attack and all were killed — the most famous US military defeat of the Indian Wars."
    },
    {
        topic: "Westward Expansion",
        question: "What was the 1864 Sand Creek Massacre?",
        options: ["Sioux warriors attacked a US Army fort in Colorado", "700 untrained cavalry troops attacked an undefended Cheyenne tribe, killing and mutilating elderly men, women and children", "A group of settlers were massacred by Comanche raiders in Texas", "US troops clashed with Lakota warriors at a reservation boundary"],
        answer: "700 untrained cavalry troops attacked an undefended Cheyenne tribe, killing and mutilating elderly men, women and children",
        feedback: "The 1864 Sand Creek Massacre saw 700 untrained, ill-disciplined cavalry troops attack an undefended Cheyenne tribe, killing and mutilating elderly men, women and children — one of the most notorious atrocities of the Indian Wars."
    },
    {
        topic: "Westward Expansion",
        question: "What did the 1887 Dawes Act do to Native American reservation land?",
        options: ["Doubled the size of reservations as compensation for earlier land seizures", "Carved reservations into 160-acre family allotments, with 'surplus' land given to non-Native Americans", "Granted full US citizenship to all tribal members", "Required Native American children to attend federal boarding schools"],
        answer: "Carved reservations into 160-acre family allotments, with 'surplus' land given to non-Native Americans",
        feedback: "The Dawes Act carved reservation land into 160-acre allotments for each family head. The rest was declared surplus and given to non-Native Americans — reservation land dropped from 138 million to 48 million acres by 1934, a loss of 65%."
    },
    {
        topic: "Westward Expansion",
        question: "What was Captain Richard Henry Pratt's famous quote about Native American assimilation?",
        options: ["'A stronger race is gradually displacing a weaker'", "'Kill the Indian in him, and save the man'", "'The only good Indian is a dead Indian'", "'Civilisation is the only salvation for the native peoples'"],
        answer: "'Kill the Indian in him, and save the man'",
        feedback: "Captain Richard Henry Pratt said in 1892: 'Kill the Indian in him, and save the man' — encapsulating the brutal assimilationist philosophy behind the federal boarding school system."
    },
    {
        topic: "Westward Expansion",
        question: "What happened at the Battle of Wounded Knee in 1890?",
        options: ["Native Americans successfully repelled a US Army attack and negotiated a peace treaty", "Nervous 7th Cavalry fired into a group of Sioux — 200 Sioux died, including many women and children, and 31 soldiers were killed", "The last major battle of the Great Sioux War ended in a Native American defeat", "The US Army suppressed a planned Native American uprising before it started"],
        answer: "Nervous 7th Cavalry fired into a group of Sioux — 200 Sioux died, including many women and children, and 31 soldiers were killed",
        feedback: "The 1890 Battle of Wounded Knee saw nervous 7th Cavalry fire into a group of Sioux — 200 Sioux died, many of them women and children. 31 soldiers were also killed. Some describe it as an accidental battle; others as a massacre."
    },
    {
        topic: "Westward Expansion",
        question: "What ended the era of the open range cattle drives?",
        options: ["The invention of refrigerated railcars made long drives obsolete", "Two severe winters in 1885–87 killed possibly 90% of Western cattle, ruining thousands of cattlemen", "The closing of the frontier declared by the Census Bureau in 1890", "Federal legislation prohibited the long drive route"],
        answer: "Two severe winters in 1885–87 killed possibly 90% of Western cattle, ruining thousands of cattlemen",
        feedback: "Two severe winters in 1885–87 resulted in the deaths of millions of Western cattle — possibly 90% of the total — ruining thousands of cattlemen including the Swan Land & Cattle Company of Wyoming."
    },
    {
        topic: "Westward Expansion",
        question: "What was the Oklahoma Land Rush of 1889?",
        options: ["Congress opened former Native American land for free settlement — 100,000 people surrounded the district at dawn; by sundown every available lot was claimed", "The US Army auctioned off former Confederate land in Oklahoma to the highest bidder", "A gold rush drew thousands of settlers to Oklahoma Territory", "The federal government offered free land to African American settlers as part of Reconstruction"],
        answer: "Congress opened former Native American land for free settlement — 100,000 people surrounded the district at dawn; by sundown every available lot was claimed",
        feedback: "After the Creeks and Seminoles were forced to surrender their rights to the Oklahoma District for nearly $4.2 million, Congress opened the land. On the morning of the opening, 100,000 people surrounded the district; by sundown every available lot was claimed."
    },
    {
        topic: "Westward Expansion",
        question: "What was Frederick Jackson Turner's 'Frontier Thesis'?",
        options: ["The West was a source of national division and should be governed separately", "The West acted as a safety valve for discord, created self-reliant individuals, and was central to American identity and freedom", "Manifest Destiny required the US to expand beyond its continental borders", "The closing of the frontier would inevitably lead to social conflict in American cities"],
        answer: "The West acted as a safety valve for discord, created self-reliant individuals, and was central to American identity and freedom",
        feedback: "Frederick Jackson Turner's 1893 thesis argued that the West acted as a safety valve for discord and violence, created self-reliant individuals, and was a central part of America's identity of freedom."
    },
    {
        topic: "Westward Expansion",
        question: "What happened to the Buffalo population between 1800 and 1886?",
        options: ["Fell from 30 million to a point where the Smithsonian Institute could not find 25 'good specimens'", "Fell from 10 million to around 500,000", "Fell from 5 million to around 10,000", "Fell from 50 million to around 1 million"],
        answer: "Fell from 30 million to a point where the Smithsonian Institute could not find 25 'good specimens'",
        feedback: "In 1800 there were around 30 million Buffalo. By 1886 the Smithsonian Institute could not find 25 'good specimens' — the near-total extermination of the Buffalo was devastating to Native American Plains cultures that depended on them."
    },
    {
        topic: "Westward Expansion",
        question: "How diverse were the 40,000 cowboys who roamed the Plains in the 20 years after the Civil War?",
        options: ["Almost entirely white American-born workers", "Around a third were Mexican, African American, Asian or Native American", "Mostly recent immigrants from Ireland and Germany", "Roughly half were African American, reflecting post-war migration patterns"],
        answer: "Around a third were Mexican, African American, Asian or Native American",
        feedback: "Around 40,000 cowboys roamed the Plains in the 20 years after the Civil War — a diverse group, with around a third being Mexican, African American, Asian or Native American, earning just $25–30 a month for gruelling 18-hour days."
    },
    {
        topic: "Immigration",
        question: "What was the purpose of the 1882 Chinese Exclusion Act?",
        options: ["It banned all Asian immigration permanently", "It banned Chinese immigration for 10 years", "It required Chinese immigrants to pass a literacy test", "It limited Chinese workers to railroad construction only"],
        answer: "It banned Chinese immigration for 10 years",
        feedback: "The Chinese Exclusion Act of 1882 banned Chinese immigration for 10 years. By the 1880s there were over 100,000 Chinese in the US, and organisations like the AFL under Samuel Gompers strongly opposed competition from Chinese labourers."
    },
    {
        topic: "Immigration",
        question: "What was the Chinese workers' strike of 1867?",
        options: ["500 Chinese workers struck in San Francisco demanding citizenship rights", "3,000 Chinese railroad workers struck demanding equal pay — the strike failed and their food supply was cut off in a remote area", "Chinese miners struck against unsafe conditions in Pennsylvania coal mines", "Chinese factory workers in New York struck demanding an end to child labour"],
        answer: "3,000 Chinese railroad workers struck demanding equal pay — the strike failed and their food supply was cut off in a remote area",
        feedback: "In 1867, 3,000 Chinese workers went on strike demanding equal pay — white workers were paid twice as much. The strike failed and their food supply was cut off in the remote area where they were working."
    },
    {
        topic: "Immigration",
        question: "What opened in 1892 and processed over 12 million arrivals in the following 62 years?",
        options: ["The Port of Boston immigration centre", "Ellis Island", "Castle Garden in New York", "The Port of Baltimore processing centre"],
        answer: "Ellis Island",
        feedback: "Ellis Island opened in 1892 and over the following 62 years more than 12 million immigrants arrived there, facing interrogation, medical inspection, fumigation of clothing, and separation of men and women. Chalk marks on clothing could signal medical or psychological issues that might preclude entry."
    },
    {
        topic: "Immigration",
        question: "What were the push factors driving immigration to the US in the late 19th century?",
        options: ["War and military conscription in European nations", "Agricultural depression in Germany and mismanagement of land by absentee landlords in Ireland, as well as anti-Semitic persecution in Russia", "High taxes and feudal land ownership across Southern Europe", "Political revolutions and instability across Central Europe"],
        answer: "Agricultural depression in Germany and mismanagement of land by absentee landlords in Ireland, as well as anti-Semitic persecution in Russia",
        feedback: "Push factors included agricultural depression in Germany, mismanagement of land by absentee landlords in Ireland, and Russian Jews escaping anti-Semitic persecution following the assassination of Alexander II."
    },
    {
        topic: "Immigration",
        question: "What was the Haymarket Bomb outrage of 1886?",
        options: ["Railroad workers bombed a scab labour train in Chicago", "A peaceful protest turned violent when a bomb was thrown at police — this linked the Knights of Labor with violence and radicalism in the public mind", "Anarchists bombed the New York Customs House in protest at the spoils system", "A bomb at a Carnegie steel plant killed several workers during a strike"],
        answer: "A peaceful protest turned violent when a bomb was thrown at police — this linked the Knights of Labor with violence and radicalism in the public mind",
        feedback: "The 1886 Haymarket Bomb outrage saw a peaceful protest turn violent when a bomb was thrown at police, killing several officers. This fatally linked the Knights of Labor with violence and radicalism in the public mind."
    },
    {
        topic: "Immigration",
        question: "What distinguished the American Federation of Labor (AFL) from the Knights of Labor?",
        options: ["The AFL was more radical and included unskilled workers and immigrants", "The AFL admitted only skilled white men and focused on higher wages and shorter working days, while the Knights of Labor was inclusive to immigrants", "The AFL supported political action while the Knights focused only on wages", "The AFL was founded earlier and was the more established union"],
        answer: "The AFL admitted only skilled white men and focused on higher wages and shorter working days, while the Knights of Labor was inclusive to immigrants",
        feedback: "Led by Samuel Gompers, the AFL admitted only skilled white men and focused on higher wages and shorter working days, winning recognition and collective bargaining agreements from employers. The Knights of Labor was more inclusive, welcoming immigrants."
    },
    {
        topic: "Immigration",
        question: "How many immigrants arrived in the US between 1881 and 1900?",
        options: ["3 million", "6 million", "9 million", "14 million"],
        answer: "9 million",
        feedback: "9 million immigrants arrived between 1881 and 1900, with a further 8 million in the preceding two decades. Over 14 million more arrived between 1901 and 1920."
    },
    {
        topic: "US Imperialism",
        question: "What was the Roosevelt Corollary, and what did it justify?",
        options: ["An extension of the Monroe Doctrine asserting the US right to intervene in cases of 'chronic wrongdoing or impotence' in Latin America", "A trade agreement with Latin American nations guaranteeing American commercial access", "A military alliance with Britain and France to counter European colonialism", "A congressional resolution authorising the construction of the Panama Canal"],
        answer: "An extension of the Monroe Doctrine asserting the US right to intervene in cases of 'chronic wrongdoing or impotence' in Latin America",
        feedback: "The Roosevelt Corollary was an extension of the Monroe Doctrine asserting that the US had the right to intervene in Latin America in cases of 'chronic wrongdoing or impotence'. It was used to justify taking over Dominican Republic finances in 1905 and military intervention in Nicaragua in 1912."
    },
    {
        topic: "US Imperialism",
        question: "What territories did the US acquire following the Spanish-American War?",
        options: ["Cuba, Puerto Rico and Guam", "The Philippines, Puerto Rico and Guam", "Hawaii, Guam and the Philippines", "Cuba, Hawaii and Puerto Rico"],
        answer: "The Philippines, Puerto Rico and Guam",
        feedback: "The 1898 Teller Amendment forswore annexation of Cuba. The US acquired the Philippines, Puerto Rico and Guam, and secured a permanent naval base in Cuba. The Philippines cost $20 million."
    },
    {
        topic: "US Imperialism",
        question: "What was the USS Maine incident?",
        options: ["A US warship was deliberately sunk by Spain to provoke a war", "An explosion sank the USS Maine in Havana harbour in February 1898, killing 266 sailors — the press quickly blamed Spain", "Spain attacked the USS Maine after the US imposed trade sanctions on Cuba", "The USS Maine accidentally ran aground and was seized by Spanish forces"],
        answer: "An explosion sank the USS Maine in Havana harbour in February 1898, killing 266 sailors — the press quickly blamed Spain",
        feedback: "On 15 February 1898, an explosion sank the USS Maine, killing 266 sailors. The press was quick to blame Spain — 'Remember the Maine, to hell with Spain!' — helping to push the US towards war."
    },
    {
        topic: "US Imperialism",
        question: "What was Alfred Thayer Mahan's key argument in 'The Influence of Sea Power Upon History' (1890)?",
        options: ["The US should avoid overseas entanglements and focus on continental expansion", "The US needed a modern steam fleet and naval bases to become a world power", "Free trade and diplomacy were more effective than military power", "The US navy should focus on coastal defence rather than power projection"],
        answer: "The US needed a modern steam fleet and naval bases to become a world power",
        feedback: "Captain Alfred Thayer Mahan's hugely influential 1890 book argued that a modern steam fleet and naval bases — especially in the Caribbean and Pacific — were essential for the US to become a great power."
    },
    {
        topic: "US Imperialism",
        question: "How did the US secure the Panama Canal Zone?",
        options: ["It purchased the rights from Colombia for $50 million", "It backed Panama's independence from Colombia in 1903, sending a cruiser to prevent Colombian forces retaking control, and secured the canal zone for $10 million plus annual rent", "It built the canal on neutral territory after a multilateral treaty", "It seized the canal zone from Spain following the Spanish-American War"],
        answer: "It backed Panama's independence from Colombia in 1903, sending a cruiser to prevent Colombian forces retaking control, and secured the canal zone for $10 million plus annual rent",
        feedback: "The US backed Panama's independence from Colombia in 1903, sending the cruiser Nashville to prevent Colombians retaking control. The US secured control of the canal zone for $10 million and $250,000 annual rent. The canal opened in 1914."
    },
    {
        topic: "US Imperialism",
        question: "What was 'preclusive imperialism', and who coined the term?",
        options: ["TR's policy of pre-emptive military strikes on unstable states, coined by Henry Cabot Lodge", "Countries taking on colonies to prevent other nations doing so, coined by William Langer", "The US policy of buying territory before European powers could colonise it, coined by Alfred Mahan", "Building naval bases before rivals could, coined by Theodore Roosevelt"],
        answer: "Countries taking on colonies to prevent other nations doing so, coined by William Langer",
        feedback: "Preclusive imperialism was a term used by historian William Langer to describe the dynamic whereby countries took on colonies to prevent other nations from doing so — a key motivation for American expansion."
    },
    {
        topic: "US Imperialism",
        question: "Why did the US annex Hawaii in 1898?",
        options: ["To prevent a Japanese takeover of the islands", "Hawaii had become economically dependent on the US since 1875 — by the 1890s 3,000 American sugar growers dominated the economy — and it was a vital stopping station to the Far East", "To establish a naval base following the lessons of the Spanish-American War", "Congress voted for annexation after a Hawaiian request for statehood"],
        answer: "Hawaii had become economically dependent on the US since 1875 — by the 1890s 3,000 American sugar growers dominated the economy — and it was a vital stopping station to the Far East",
        feedback: "Since 1875 the US had imported Hawaiian sugar duty free, making Hawaii increasingly dependent on the US economy. By the 1890s, 3,000 American sugar growers out of 90,000 Hawaiians dominated the island. Hawaii was also a vital stopping station on the way to the Far East."
    },
    {
        topic: "Progressive Era",
        question: "What was President Roosevelt's domestic policy agenda branded as?",
        options: ["The New Deal", "The Fair Deal", "The Square Deal", "The New Nationalism"],
        answer: "The Square Deal",
        feedback: "Roosevelt's domestic policy agenda was called the Square Deal — he was the first president to brand his domestic agenda, setting a trend for future administrations."
    },
    {
        topic: "Progressive Era",
        question: "What action did Roosevelt take against the Northern Securities Company in 1902?",
        options: ["He personally negotiated a merger to create a more regulated monopoly", "He instructed attorney general Philander C. Knox to start anti-trust proceedings — the Supreme Court declared the company illegal in 1904 and it was dissolved", "He asked Congress to pass a law breaking up all railroad monopolies", "He fined the company but allowed it to continue operating under new regulations"],
        answer: "He instructed attorney general Philander C. Knox to start anti-trust proceedings — the Supreme Court declared the company illegal in 1904 and it was dissolved",
        feedback: "In 1902 TR instructed attorney general Philander C. Knox to start proceedings against the Northern Securities company — involving taking on both J.P. Morgan and Rockefeller. In 1904, the Supreme Court declared the company illegal and it was dissolved. TR went on to 44 anti-trust prosecutions."
    },
    {
        topic: "Progressive Era",
        question: "What did the 1906 Hepburn Act do?",
        options: ["Banned child labour in factories", "Gave a federal commission power to inspect railroad books and lay down maximum rates", "Established the first federal income tax", "Required all meat to be federally inspected before sale"],
        answer: "Gave a federal commission power to inspect railroad books and lay down maximum rates",
        feedback: "The 1906 Hepburn Act gave a federal government commission the power to inspect the books of railroad companies and lay down maximum rates — a major step in protecting the public from railroad monopoly power."
    },
    {
        topic: "Progressive Era",
        question: "How did Roosevelt resolve the 1902 Anthracite Coal Strike?",
        options: ["He sided with the employers and threatened to use troops against the strikers", "He summoned both sides and threatened to send troops to seize the mines if employers refused arbitration — employers eventually raised wages and offered 9-hour days", "He passed emergency legislation forcing both sides to accept federal arbitration", "He personally negotiated a deal with union leaders without involving employers"],
        answer: "He summoned both sides and threatened to send troops to seize the mines if employers refused arbitration — employers eventually raised wages and offered 9-hour days",
        feedback: "In 1902, employers had locked out striking miners. TR summoned both sides and threatened to send in troops if employers refused arbitration. The employers ultimately raised wages and offered 9-hour days — a landmark moment in presidential intervention in labour disputes."
    },
    {
        topic: "Progressive Era",
        question: "What was Roosevelt's conservation record?",
        options: ["He opened up 50 million acres of federal land for commercial development", "He ordered 150 million acres of forest placed on federal reserves and organised the 1908 National Conservation Conference", "He passed the Pure Food and Drug Act but did little on land conservation", "He proposed conservation measures but was blocked by Congress"],
        answer: "He ordered 150 million acres of forest placed on federal reserves and organised the 1908 National Conservation Conference",
        feedback: "TR ordered 150 million acres of forest placed on federal reserves and strictly enforced laws on grazing, mining, and lumbering. He organised the 1908 National Conservation Conference, and between 1905 and 1909 some 120 million acres of land were taken into public domain."
    },
    {
        topic: "Progressive Era",
        question: "Which journalist is most associated with exposing Standard Oil as a muckraker?",
        options: ["Upton Sinclair", "Lincoln Steffens", "Ida Tarbell", "Jacob Riis"],
        answer: "Ida Tarbell",
        feedback: "Ida Tarbell was one of the leading muckraking journalists, famous for exposing Standard Oil. Upton Sinclair wrote The Jungle exposing Chicago meatpacking, and Lincoln Steffens exposed political corruption in America's cities."
    },
    {
        topic: "Progressive Era",
        question: "What was Taft's 'dollar diplomacy'?",
        options: ["A domestic policy encouraging Americans to invest in Liberty Bonds", "A foreign policy encouraging US bank investments and trade in Latin America, the Caribbean and the Far East, using the government to promote US commercial interests abroad", "A tariff policy tying American trade agreements to the gold standard", "A plan to use American financial aid to stabilise European post-war economies"],
        answer: "A foreign policy encouraging US bank investments and trade in Latin America, the Caribbean and the Far East, using the government to promote US commercial interests abroad",
        feedback: "Dollar diplomacy was Taft's foreign policy — encouraging US investments in South and Central America, the Caribbean and the Far East, and using government officials to promote the sale of American products overseas, fashioning the US as a tool of economic diplomacy."
    },
    {
        topic: "Progressive Era",
        question: "What split the Republican Party and led to the 1912 election result?",
        options: ["A disagreement over the gold standard between eastern and western Republicans", "TR's return to run against Taft after growing frustration with Taft's conservatism — TR ran as a Progressive, splitting the Republican vote", "Taft's dismissal of Roosevelt's conservation policies alienated western Republicans", "A scandal involving Taft's cabinet that drove progressive Republicans to support TR"],
        answer: "TR's return to run against Taft after growing frustration with Taft's conservatism — TR ran as a Progressive, splitting the Republican vote",
        feedback: "TR was unhappy with Taft's efforts and returned to run again. Unable to win the Republican nomination, he ran as a Progressive (National Progressive Party). The result: Democrats 41.8%, Progressives 27.4%, Republicans 23.3% — handing Wilson the presidency."
    },
    {
        topic: "Progressive Era",
        question: "What were the key features of the Progressive movement?",
        options: ["Lower tariffs, fewer immigrants, and a return to the gold standard", "Greater government control of business, women's suffrage, prohibition, trade union recognition, and social insurance schemes", "Isolationism in foreign policy and laissez-faire economics at home", "Expansion of the military and aggressive foreign policy combined with domestic free trade"],
        answer: "Greater government control of business, women's suffrage, prohibition, trade union recognition, and social insurance schemes",
        feedback: "Progressives wanted greater government control of business, women's suffrage, prohibition, trade union recognition, insurance schemes for unemployment, sickness and old age, compensation for injury, and protection against adulterated food."
    },
    {
        topic: "Progressive Era",
        question: "What was the Payne-Aldrich Tariff controversy under Taft?",
        options: ["Taft pushed through sweeping tariff cuts against congressional opposition", "Taft threatened to veto any insufficient reductions but then signed a bill with only modest reductions — later calling it the best tariff bill Congress ever passed, alienating progressives", "The tariff raised rates so high it caused an economic recession", "Congress passed the tariff over Taft's veto, humiliating him publicly"],
        answer: "Taft threatened to veto any insufficient reductions but then signed a bill with only modest reductions — later calling it the best tariff bill Congress ever passed, alienating progressives",
        feedback: "Taft had threatened to veto an insufficient tariff reductions bill but still signed the Payne-Aldrich Tariff, with only modest reductions. He later claimed it was the best tariff bill ever passed by Congress. This alienated progressives who saw high tariffs as the 'mother of trusts'."
    },
    {
        topic: "World War I",
        question: "What was the Zimmermann Telegram?",
        options: ["A German pledge to resume unrestricted submarine warfare against Allied shipping", "A secret German proposal to Mexico — if the US declared war on Germany, Germany would help Mexico recover Texas, Arizona and New Mexico", "An intercepted German order to sink the Lusitania", "Germany's offer of a ceasefire based on Wilson's 14 Points"],
        answer: "A secret German proposal to Mexico — if the US declared war on Germany, Germany would help Mexico recover Texas, Arizona and New Mexico",
        feedback: "German Foreign Secretary Arthur Zimmermann sent a secret telegram to the Mexican German Ambassador proposing an alliance — Germany would help Mexico recover Texas, Arizona and New Mexico if the US went to war. It was intercepted by British intelligence and helped push the US into the war."
    },
    {
        topic: "World War I",
        question: "What was the financial cost of American participation in World War I?",
        options: ["$10 billion in total war costs", "$33.5 billion in war costs plus $7 billion lent to allies", "$20 billion in war costs with no loans to allies", "$50 billion including post-war reconstruction costs"],
        answer: "$33.5 billion in war costs plus $7 billion lent to allies",
        feedback: "The war cost $33.5 billion plus $7 billion lent to allies. Two thirds of the cost was raised through war bonds — liberty and victory loans — with celebrities like Charlie Chaplin deployed to encourage bond purchases."
    },
    {
        topic: "World War I",
        question: "What were Wilson's 14 Points?",
        options: ["A list of German war crimes submitted to the Paris Peace Conference", "Peace proposals themed around collective security, disarmament, open diplomacy, free trade, and national self-determination", "A set of conditions Germany had to meet before the US would end hostilities", "A programme for the post-war reconstruction of Europe funded by American loans"],
        answer: "Peace proposals themed around collective security, disarmament, open diplomacy, free trade, and national self-determination",
        feedback: "Wilson's 14 Points addressed themes of collective security, disarmament, open diplomacy, free trade, national self-determination, and maintaining orderly international relations — and formed the basis on which Germany agreed to the ceasefire."
    },
    {
        topic: "World War I",
        question: "What was Senator Henry Cabot Lodge's core objection to the Treaty of Versailles?",
        options: ["He believed the reparations on Germany were too harsh and would cause instability", "He objected to Article X, which obligated League members to defend one another and could override Congress's war powers", "He thought the League gave too much power to Britain and France", "He opposed the principle of national self-determination as destabilising"],
        answer: "He objected to Article X, which obligated League members to defend one another and could override Congress's war powers",
        feedback: "Lodge's key objection was Article X, which obligated League of Nations members to defend one another — potentially allowing the League to override Congress's constitutional war powers. Wilson refused to accept any amendments and the Senate voted twice against ratification."
    },
    {
        topic: "World War I",
        question: "How did Wilson attempt to get the Treaty of Versailles ratified after Senate resistance?",
        options: ["He brokered a compromise with Lodge, accepting some reservations", "He threatened to call a general election on the issue", "He went on a national speaking tour — 8,000 miles, 40 speeches in 22 days — before collapsing from a stroke in October", "He asked the Supreme Court to rule on the constitutionality of the Senate's refusal"],
        answer: "He went on a national speaking tour — 8,000 miles, 40 speeches in 22 days — before collapsing from a stroke in October",
        feedback: "Wilson refused to accept any significant reservations or amendments and launched a national speaking tour — 8,000 miles, 40 speeches in 22 days — to take his case directly to the public. In October he collapsed from a stroke. The Senate voted twice against ratification, both times failing to get a two-thirds majority."
    },
    {
        topic: "World War I",
        question: "What was the sinking of the Lusitania in 1915?",
        options: ["A US Navy vessel sunk by German forces in the North Atlantic", "A British luxury liner sunk by a German submarine — over 1,000 died including 129 Americans. Germany initially called off unrestricted U-boat warfare but resumed it in 1917", "A German supply ship sunk by a British destroyer, drawing the US into the conflict", "A neutral American cargo ship sunk by Germany, triggering a diplomatic crisis"],
        answer: "A British luxury liner sunk by a German submarine — over 1,000 died including 129 Americans. Germany initially called off unrestricted U-boat warfare but resumed it in 1917",
        feedback: "In 1915, the British luxury liner Lusitania was sunk by a German submarine — over 1,000 people died, including 129 Americans. Germany temporarily called off unrestricted U-boat warfare in response to American outrage, before resuming it in 1917."
    },
    {
        topic: "World War I",
        question: "What was the 'Red Summer' of 1919?",
        options: ["A wave of communist-inspired strikes across American industrial cities", "Mob violence erupting in over 36 cities, with 12 veterans lynched and 76 African Americans lynched by year's end", "The Palmer Raids targeting radical immigrants across 36 cities", "The Seattle General Strike spreading to other cities across the country"],
        answer: "Mob violence erupting in over 36 cities, with 12 veterans lynched and 76 African Americans lynched by year's end",
        feedback: "Mob violence erupted in over 36 cities in 1919 — the 'Red Summer'. Twelve veterans were dead from lynching and 76 African Americans had been lynched by year's end. An effort by Black sharecroppers in Elaine, Arkansas to organise for better wages led to a massacre with 200 African Americans dead."
    },
    {
        topic: "World War I",
        question: "What was Wilson's stated justification for entering World War I?",
        options: ["To protect American trade routes and commercial interests in Europe", "To fight against autocracy and make the world safe for democracy", "To fulfil treaty obligations with Britain and France", "To prevent German control of Mexico following the Zimmermann Telegram"],
        answer: "To fight against autocracy and make the world safe for democracy",
        feedback: "Wilson framed the war as a fight against autocracy — 'the world must be made safe for democracy' — a framing reinforced by the 1917 Russian Revolution replacing the autocratic Tsar with a more democratic government."
    },
    {
        topic: "World War I",
        question: "What was the Espionage Act of 1917 and how was it extended?",
        options: ["It authorised surveillance of German-American communities, extended to include Irish-Americans in 1918", "It made it a felony to speak, act or write anything the government viewed as seditious, extended with the 1918 Sedition Act", "It banned German language newspapers, extended to ban all foreign language media in 1918", "It required registration of all immigrants from enemy nations, extended to include neutral nations in 1918"],
        answer: "It made it a felony to speak, act or write anything the government viewed as seditious, extended with the 1918 Sedition Act",
        feedback: "The Espionage Act of 1917 made it a felony to speak, act or write anything the government viewed as seditious. Restrictions were extended with the 1918 Sedition Act, and the American Protective League created a civilian surveillance apparatus."
    },
    {
        topic: "World War I & African Americans",
        question: "What were conditions like for African American soldiers in World War I?",
        options: ["African Americans were fully integrated into all units and served with distinction", "Rigid segregation — most Black troops were assigned to labour duties, often without proper training or equipment. AA women were not allowed to nurse abroad", "African American officers commanded integrated units at the front", "The War Department gave African American units the most dangerous frontline assignments"],
        answer: "Rigid segregation — most Black troops were assigned to labour duties, often without proper training or equipment. AA women were not allowed to nurse abroad",
        feedback: "There was rigid segregation in the army. Most African American troops were assigned to Services of Supply (SOS) units — retrieving dead soldiers, building roads, working at docks. AA women were not allowed to nurse abroad. White Southern officers accused the 92nd Division of being 'rapists, malcontents and incompetent soldiers'."
    },
    {
        topic: "World War I & African Americans",
        question: "What was the 'Harlem Hell-fighters' regiment's achievement in World War I?",
        options: ["They were the first all-Black unit to land in France", "They served 191 days at the front — more than any other American outfit — never lost a foot of ground, and members were awarded the French Croix de Guerre", "They captured the most enemy soldiers of any American regiment", "They were awarded the Medal of Honor for their defence of the Argonne Forest"],
        answer: "They served 191 days at the front — more than any other American outfit — never lost a foot of ground, and members were awarded the French Croix de Guerre",
        feedback: "The 'Harlem Hell-fighters' served 191 days at the front — more than any other American outfit. They never lost a foot of ground to the Germans. Members were awarded the French Croix de Guerre."
    },
    {
        topic: "Prohibition",
        question: "When did the 18th Amendment come into force, banning alcohol?",
        options: ["January 1917", "January 1919", "January 1920", "January 1921"],
        answer: "January 1920",
        feedback: "The 18th Amendment was passed in January 1919 and came into force in January 1920. Less than an hour after spirits became illegal, armed men robbed a Chicago freight train of thousands of dollars' worth of whiskey."
    },
    {
        topic: "Prohibition",
        question: "What coalition of interests drove Prohibition?",
        options: ["Mainly Southern Democrats opposed to the economic power of Northern breweries", "A broad coalition including the Anti-Saloon League, suffragists, wartime anti-German sentiment, industrialists like Carnegie and Ford, and southern whites and Booker T. Washington who saw alcohol as undermining Black progress", "Primarily Northern Progressives and the Women's Christian Temperance Union", "Republican Party leaders who saw Prohibition as a vote-winning policy in rural states"],
        answer: "A broad coalition including the Anti-Saloon League, suffragists, wartime anti-German sentiment, industrialists like Carnegie and Ford, and southern whites and Booker T. Washington who saw alcohol as undermining Black progress",
        feedback: "The prohibition coalition was remarkably broad — the ASL linked prohibition to suffrage, exploited anti-German hysteria (major breweries like Pabst and Schlitz were German-owned), industrialists like Carnegie and Ford believed alcohol undercut worker performance, and Booker T. Washington believed alcohol undermined Black progress."
    },
    {
        topic: "Prohibition",
        question: "How widespread was prohibition before the 18th Amendment?",
        options: ["Only a handful of rural counties were dry before 1919", "40% of counties were dry by 1906 and a full dozen states by 1909", "Only Southern states had local prohibition before the federal amendment", "Prohibition was exclusively an urban phenomenon before the federal amendment"],
        answer: "40% of counties were dry by 1906 and a full dozen states by 1909",
        feedback: "Prohibition had significant grassroots support well before the 18th Amendment — 40% of the nation's counties were dry by 1906, and a full dozen states had gone dry by 1909."
    },
    {
        topic: "Red Scare",
        question: "What were the Palmer Raids of 1919–20?",
        options: ["Federal raids on KKK headquarters across the South following racial violence", "Attorney General Palmer directed raids across 36 cities — 6,000 were arrested and 556 immigrants deported. The Supreme Court later ruled evidence gathered was illegal", "Army raids on communist cells in major industrial cities following the Seattle Strike", "Congressional investigations into radical trade union activity following the Homestead Strike"],
        answer: "Attorney General Palmer directed raids across 36 cities — 6,000 were arrested and 556 immigrants deported. The Supreme Court later ruled evidence gathered was illegal",
        feedback: "The 1919–20 Palmer Raids saw Attorney General Palmer direct raids across 36 cities — 6,000 were arrested, radicals were seized nationwide, and 556 immigrants were deported. The Supreme Court later ruled that evidence gathered during the raids was illegal."
    },
    {
        topic: "Red Scare",
        question: "What happened to Sacco and Vanzetti?",
        options: ["They were acquitted after a landmark civil liberties case", "Two Italian immigrants convicted of robbery and murder in Massachusetts in 1920 in a biased and unfair trial — they were executed in 1927", "They were deported under the Anarchist Exclusion Act after a political trial", "They were pardoned by President Harding after evidence of their innocence emerged"],
        answer: "Two Italian immigrants convicted of robbery and murder in Massachusetts in 1920 in a biased and unfair trial — they were executed in 1927",
        feedback: "Sacco and Vanzetti were two Italian immigrants convicted of robbery and murder in Massachusetts in 1920. Their trial was widely condemned as biased and unfair. They were executed in 1927, their case becoming a symbol of anti-immigrant prejudice."
    },
    {
        topic: "Red Scare",
        question: "What factors fuelled the Red Scare of 1919?",
        options: ["The discovery of a Soviet spy network inside the US government", "The 1917 Bolshevik Revolution, cost of living rising 99% between 1913–19, rapid demobilisation of 4 million troops, bomb attacks by anarchists, and widespread strikes", "A series of communist election victories in state legislatures", "German propaganda campaigns targeting American workers after the war"],
        answer: "The 1917 Bolshevik Revolution, cost of living rising 99% between 1913–19, rapid demobilisation of 4 million troops, bomb attacks by anarchists, and widespread strikes",
        feedback: "The Red Scare was fuelled by the 1917 Bolshevik Revolution, the cost of living rising 99% between 1913–19, rapid demobilisation of 4 million troops with inadequate planning, anarchist bomb attacks, the Seattle General Strike, and May Day riots in cities like Boston and New York."
    },
    {
        topic: "Harding & Normalcy",
        question: "What was Warren Harding's appeal in the 1920 election?",
        options: ["He promised to continue Wilson's progressive internationalism", "He called for 'healing not heroics, normalcy not revolution' — higher tariffs, lower taxes, fewer immigrants, and rejection of the League of Nations, appealing after years of war, red scare, and economic hardship", "He promised to crush the Red Scare with firm military action", "He ran on a platform of expanding civil rights following the race riots of 1919"],
        answer: "He called for 'healing not heroics, normalcy not revolution' — higher tariffs, lower taxes, fewer immigrants, and rejection of the League of Nations, appealing after years of war, red scare, and economic hardship",
        feedback: "Harding called for 'healing not heroics, normalcy not revolution, serenity not surgery'. His policies of higher tariffs, lower taxes, fewer immigrants and rejection of the League of Nations appealed broadly. Public exhaustion after WW1, the red scare, race riots and economic hardship made normalcy attractive. He won 61% of the popular vote."
    },
    {
        topic: "Harding & Normalcy",
        question: "What was innovative about Harding's 1920 election campaign?",
        options: ["He was the first candidate to make a national radio broadcast", "It was the first front porch campaign to use radio, photography, and Hollywood celebrity surrogates — Albert Lasker was the first full-time advertising man to head a national campaign", "He was the first presidential candidate to campaign specifically in African American communities", "He was the first to use opinion polls to target his campaign messages"],
        answer: "It was the first front porch campaign to use radio, photography, and Hollywood celebrity surrogates — Albert Lasker was the first full-time advertising man to head a national campaign",
        feedback: "Harding's 1920 front porch campaign used radio, photography, and Hollywood celebrity surrogates — Al Jolson travelled the country on his behalf. Albert Lasker was the first full-time advertising man to head a national campaign, understanding the power of celebrity."
    },
    {
        topic: "Populism",
        question: "What was W.J.B.'s famous 'Cross of Gold' speech about?",
        options: ["A call to break up the banking monopolies that controlled American agriculture", "An attack on the gold standard and how it destroyed opportunity for farming communities, pulling populist voters towards the Democrat Party", "A call for the nationalisation of railroad companies to protect farmers", "A demand for free trade to help farming communities access global markets"],
        answer: "An attack on the gold standard and how it destroyed opportunity for farming communities, pulling populist voters towards the Democrat Party",
        feedback: "W.J.B.'s famous speech — 'You shall not crucify mankind upon a cross of gold' — addressed the gold standard and how it destroyed opportunity for farming communities, making him the vehicle pulling populist voters to the Democrat Party."
    },
    {
        topic: "Populism",
        question: "What were the key grievances of the Populist (People's) Party?",
        options: ["Excessive immigration driving down wages and undermining American culture", "No reasonable transport rates, farmers facing low prices and droughts, politically isolated, banks restraining credit, and the gold standard limiting money supply", "High import tariffs protecting eastern manufacturers at the expense of farmers", "Federal government corruption and the spoils system undermining democratic governance"],
        answer: "No reasonable transport rates, farmers facing low prices and droughts, politically isolated, banks restraining credit, and the gold standard limiting money supply",
        feedback: "Populists faced no reasonable transport rates — it was cheaper to ship goods from Chicago to Liverpool than across two states — as well as low prices, droughts, political isolation, banks restraining credit, and a gold standard that meant a limited money supply."
    },
    {
        topic: "Populism",
        question: "How did the Populist Party perform in the 1892 election?",
        options: ["They won just a handful of local races and failed to elect anyone to Congress", "Their presidential candidate James B. Weaver won 1 million votes, they won 22 electoral votes and 5 of 7 House seats in Kansas", "They swept the South but failed to make inroads in the North or West", "They merged with the Democratic Party before the election took place"],
        answer: "Their presidential candidate James B. Weaver won 1 million votes, they won 22 electoral votes and 5 of 7 House seats in Kansas",
        feedback: "The 1892 election was a significant early success for the Populists — James B. Weaver won 1 million votes for president, the party won 22 electoral votes and 5 of 7 House seats in Kansas."
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