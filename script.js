document.getElementById("us").addEventListener("click", onStart);

function onStart() {
//main program
/*
    set of questions. then we have 4 choices for each, 
    one correct.
    have a fuller explanation for the correct choice, 
    which shows in feedback
*/
const usPaper = "US";
displayQ(usPaper);

//check which paper is selected
}

function displayQ(paper) {
    if (paper == "US") {
        const Q = chooseQ(usQs);

        
        document.getElementById("qTopic").textContent = Q.topic;
        document.getElementById("qTitle").textContent = Q.question;

        document.getElementById("op1").textContent = Q.options[0];
        document.getElementById("op2").textContent = Q.options[1];
        document.getElementById("op3").textContent = Q.options[2];
        document.getElementById("op4").textContent = Q.options[3];
        

        const answer = Q.answer;
        const feedback = Q.feedback;

    }
}

function chooseQ(questions) {
    const randomQ = questions[Math.floor(Math.random() * questions.length)];
    return randomQ;
}

const britishQs = [
    {
         
        /*
        topic: 
        question:
        options:
        answer: 
        feedback:
        */

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





