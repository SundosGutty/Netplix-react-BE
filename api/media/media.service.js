const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
}

async function query(filterBy) {
    try {
        const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('media')
        var medias = await collection.find(criteria).toArray()
        return medias
    } catch (err) {
        logger.error('cannot find medias', err)
        throw err
    }
}

async function getById(mediaId) {
    try {
        const collection = await dbService.getCollection('media')
        const media = collection.findOne({ '_id': ObjectId(mediaId) })
        return media
    } catch (err) {
        logger.error(`while finding media ${mediaId}`, err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    const txtCriteria = { $regex: filterBy.term, $options: 'i' }
    criteria.$or = [{ genre: txtCriteria }, { title: txtCriteria }]
    return criteria
}

const gMedia = [
    {
        title: 'Tiger King',
        description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
        genre: 'documentaries',
        component: 'documentaries',
        maturity: '18',
        slug: 'tiger-king',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/zBtG5ckG/tiger-king.jpg',
        trailer: 'https://www.youtube.com/watch?v=acTdxsoa428'

    },
    {
        title: 'Amanda Knox',
        description: 'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
        genre: 'documentaries',
        component: 'documentaries',
        maturity: '12',
        slug: 'amanda-knox',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/GmF392jN/amanda-knox.jpg',
        trailer: 'https://www.youtube.com/watch?v=f5SFjSxzS7M'
    },
    {
        title: 'Citizenfour',
        description:
            'Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.',
        genre: 'documentaries',
        component: 'documentaries',
        maturity: '12',
        slug: 'citizenfour',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/9MnCsqW4/citizenfour.jpg',
        trailer: 'https://www.youtube.com/watch?v=XiGwAvd5mvM'
    },
    {
        title: 'Super Size Me',
        description:
            "Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds",
        genre: 'documentaries',
        component: 'documentaries',
        maturity: '12',
        slug: 'super-size-me',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/59DFCXwN/super-size-me.jpg',
        trailer: 'https://www.youtube.com/watch?v=GRPSeVyrd68'
    },
    {
        title: 'Man on Wire',
        description:
            "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
        genre: 'documentaries',
        component: 'documentaries',
        maturity: '12',
        slug: 'man-on-wire',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/GmC8X67W/man-on-wire.jpg',
        trailer: 'https://www.youtube.com/watch?v=Cz6oddi0mts'
    },
    {
        title: 'The Office',
        description:
            'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
        genre: 'comedies',
        component: 'comedies',
        maturity: '15',
        slug: 'the-office',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/SQYnkmw0/the-office.jpg',
        trailer: 'https://www.youtube.com/watch?v=gO8N3L_aERg'
    },
    {
        title: 'Arrested Development',
        description:
            'The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.',
        genre: 'comedies',
        component: 'comedies',
        maturity: '15',
        slug: 'arrested-development',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/FRdHrxCb/arrested-development.jpg',
        trailer: 'https://www.youtube.com/watch?v=vzVhPCMAxWQ'
    },
    {
        title: 'Curb Your Enthusiasm',
        description:
            'Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.',
        genre: 'comedies',
        component: 'comedies',
        maturity: '15',
        slug: 'curb-your-enthusiasm',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/sgjfQz0g/curb-your-enthusiasm.jpg',
        trailer: 'https://www.youtube.com/watch?v=zRCMPMGDN00'
    },
    {
        title: 'Family Guy',
        description:
            'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
        genre: 'comedies',
        component: 'comedies',
        maturity: '15',
        slug: 'family-guy',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/zX5865NF/family-guy.jpg',
        trailer: 'https://www.youtube.com/watch?v=Le1x2To-e6g'
    },
    {
        title: 'South Park',
        description:
            'Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.',
        genre: 'comedies',
        component: 'comedies',
        maturity: '15',
        slug: 'south-park',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/VvmpGftS/south-park.jpg',
        trailer: 'https://www.youtube.com/watch?v=qzEoBrr9gRA'
    },
    {
        title: 'Peppa Pig',
        description:
            'Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.',
        genre: 'children',
        component: 'children',
        maturity: '0',
        slug: 'peppa-pig',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/25WtCbFb/peppa-pig.jpg',
        trailer: 'https://www.youtube.com/watch?v=Oozdpz12Ejo'
    },
    {
        title: 'Dora The Explorer',
        description:
            'Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.',
        genre: 'children',
        component: 'children',
        maturity: '0',
        slug: 'dora-the-explorer',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/bJT3vQGJ/dora-the-explorer.jpg',
        trailer: 'https://www.youtube.com/watch?v=E9rx1TnmTSo'
    },
    {
        title: 'PAW Patrol',
        description:
            'Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.',
        genre: 'children',
        component: 'children',
        maturity: '0',
        slug: 'paw-patrol',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/MTdmwq4f/paw-patrol.jpg',
        trailer: 'https://www.youtube.com/watch?v=LRMTr2VZcr8'
    },
    {
        title: 'Arthur',
        description:
            'Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.',
        genre: 'children',
        component: 'children',
        maturity: '0',
        slug: 'arthur',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/3NkmHpmz/arthur.jpg',
        trailer: 'https://www.youtube.com/watch?v=kQbcrMgqKWQ'
    },
    {
        title: 'SpongeBob',
        description:
            'A yellow sea sponge named SpongeBob SquarePants lives in the city of Bikini Bottom deep in the Pacific Ocean. ',
        genre: 'children',
        component: 'children',
        maturity: '0',
        slug: 'spongebob',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/26KLT6MG/spongebob.jpg',
        trailer: 'https://www.youtube.com/watch?v=a2cowVH03Xo'
    },
    {
        title: 'Making a Murderer',
        description:
            'Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.',
        genre: 'crime',
        component: 'crime',
        maturity: '18',
        slug: 'making-a-murderer',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/G3TxVwKt/making-a-murderer.jpg',
        trailer: 'https://www.youtube.com/watch?v=qxgbdYaR_KQ'
    },
    {
        title: 'Long Shot',
        description:
            'An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.',
        genre: 'crime',
        component: 'crime',
        maturity: '18',
        slug: 'long-shot',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/q7g3KyZq/long-shot.jpg',
        trailer: 'https://www.youtube.com/watch?v=PDxISykYRc4'
    },
    {
        title: 'The Confession Killer',
        description:
            'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson, although his sentence would be commuted to life in prison in 1998.',
        genre: 'crime',
        component: 'crime',
        maturity: '18',
        slug: 'the-confession-killer',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/HsZWyRG0/the-confession-killer.jpg',
        trailer: 'https://www.youtube.com/watch?v=mWPbC9Fp-yk'
    },
    {
        title: 'The Innocent Man',
        description:
            'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson.',
        genre: 'crime',
        component: 'crime',
        maturity: '18',
        slug: 'the-innocent-man',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/dtxv1Cd4/the-innocent-man.jpg',
        trailer: 'https://www.youtube.com/watch?v=4LYiAEV_XnA'
    },
    {
        title: 'The Staircase',
        description:
            "In 2001 novelist Michael Peterson's wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon",
        genre: 'crime',
        component: 'crime',
        maturity: '18',
        slug: 'the-staircase',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/RFM2GCKW/the-staircase.jpg',
        trailer: 'https://www.youtube.com/watch?v=Bvv97sCcruY'
    },
    {
        title: 'Good Will Hunting',
        description:
            'Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.',
        genre: 'feel-good',
        component: 'feel-good',
        maturity: '12',
        slug: 'good-will-hunting',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/pdvSXV0s/good-will-hunting.jpg',
        trailer: 'https://www.youtube.com/watch?v=ReIJ1lbL-Q8'
    },
    {
        title: 'Forrest Gump',
        description:
            'Forrest Gump, a man with a low IQ, joins the army for service where he meets Dan and Bubba. However, he cannot stop thinking about his childhood sweetheart Jenny Curran, whose life is messed up.',
        genre: 'feel-good',
        component: 'feel-good',
        maturity: '12',
        slug: 'forrest-gump',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/tgr8SQ5D/forrest-gump.jpg',
        trailer: 'https://www.youtube.com/watch?v=bLvqoHBptjg'
    },
    {
        title: 'Juno',
        description:
            "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
        genre: 'feel-good',
        component: 'feel-good',
        maturity: '12',
        slug: 'juno',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/Wzc8SXQX/juno.jpg',
        trailer: 'https://www.youtube.com/watch?v=K0SKf0K3bxg'
    },
    {
        title: 'Midnight In Paris',
        description:
            'Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.',
        genre: 'feel-good',
        component: 'feel-good',
        maturity: '12',
        slug: 'midnight-in-paris',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/SQLfk70b/midnight-in-paris.jpg',
        trailer: 'https://www.youtube.com/watch?v=FAfR8omt-CY'
    },
    {
        title: 'School of Rock',
        description:
            "Dewey Finn, an amateur rock enthusiast, slyly takes up his friend's substitute teacher's job. Bearing no qualifications for it, he instead starts training the students to form a band.",
        genre: 'feel-good',
        component: 'feel-good',
        maturity: '12',
        slug: 'school-of-rock',
        type: 'tv-serie',
        img: 'https://i.postimg.cc/NMGtPkm7/school-of-rock.jpg',
        trailer: 'https://www.youtube.com/watch?v=TExoc0MG4I4'
    },
    {
        title: 'The Prestige',
        description:
            'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
        genre: 'drama',
        component: 'drama',
        maturity: '15',
        slug: 'the-prestige',
        type: 'movie',
        img: 'https://i.postimg.cc/L4wdzpCV/the-prestige.jpg',
        trailer: 'https://www.youtube.com/watch?v=RLtaA9fFNXU'
    },
    {
        title: 'Fight Club',
        description:
            'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
        genre: 'drama',
        component: 'drama',
        maturity: '15',
        slug: 'fight-club',
        type: 'movie',
        img: 'https://i.postimg.cc/43JjJNyX/fight-club.jpg',
        trailer: 'https://www.youtube.com/watch?v=qtRKdVHc-cE'
    },
    {
        title: 'Kings Speech',
        description:
            'King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.',
        genre: 'drama',
        component: 'drama',
        maturity: '15',
        slug: 'kings-speech',
        type: 'movie',
        img: 'https://i.postimg.cc/vTfd42sy/kings-speech.jpg',
        trailer: 'https://www.youtube.com/watch?v=EcxBrTvLbBM'
    },
    {
        title: 'The Revenant',
        description:
            'Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.',
        genre: 'drama',
        component: 'drama',
        maturity: '15',
        slug: 'the-revenant',
        type: 'movie',
        img: 'https://i.postimg.cc/ZYpkFQGt/the-revenant.jpg',
        trailer: 'https://www.youtube.com/watch?v=LoebZZ8K5N0'
    },
    {
        title: 'The Social Network',
        description:
            'Mark Zuckerberg creates a social networking site, Facebook, with the help of his friend Eduardo Saverin. But soon, a string of lies tears their relationship apart even as Facebook connects people.',
        genre: 'drama',
        component: 'drama',
        maturity: '12',
        slug: 'the-social-network',
        type: 'movie',
        img: 'https://i.postimg.cc/85vY4FnB/the-social-network.jpg',
        trailer: 'https://www.youtube.com/watch?v=lB95KLmpLR4'
    },
    {
        title: 'Shutter Island',
        description:
            'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
        genre: 'suspense',
        component: 'suspense',
        maturity: '15',
        slug: 'shutter-island',
        type: 'movie',
        img: 'https://i.postimg.cc/TPgjHrfw/shutter-island.jpg',
        trailer: 'https://www.youtube.com/watch?v=5iaYLCiq5RM'
    },
    {
        title: 'Gone Girl',
        description:
            'Nick Dunne discovers that the entire media focus has shifted on him when his wife Amy Dunne disappears on the day of their fifth wedding anniversary.',
        genre: 'suspense',
        component: 'suspense',
        maturity: '15',
        slug: 'gone-girl',
        type: 'movie',
        img: 'https://i.postimg.cc/gk7vzM0j/gone-girl.jpg',
        trailer: 'https://www.youtube.com/watch?v=2-_-1nJf8Vg'
    },
    {
        title: 'Prisoners',
        description:
            "When the police take time to find Keller Dover's daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life.",
        genre: 'suspense',
        component: 'suspense',
        maturity: '15',
        slug: 'prisoners',
        type: 'movie',
        img: 'https://i.postimg.cc/MTzBPN9P/prisoners.jpg',
        trailer: 'https://www.youtube.com/watch?v=bpXfcTF6iVk'
    },
    {
        title: 'Seven',
        description:
            'A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.',
        genre: 'suspense',
        component: 'suspense',
        maturity: '15',
        slug: 'seven',
        type: 'movie',
        img: 'https://i.postimg.cc/02hwRbtJ/seven.jpg',
        trailer: 'https://www.youtube.com/watch?v=znmZoVkCjpI'
    },
    {
        title: 'Zodiac',
        description:
            'Robert Graysmith, a cartoonist by profession, finds himself obsessively thinking about the Zodiac killer. He uses his puzzle-solving abilities to get closer to revealing the identity of the killer.',
        genre: 'suspense',
        component: 'suspense',
        maturity: '15',
        slug: 'zodiac',
        type: 'movie',
        img: 'https://i.postimg.cc/hvffNBTr/zodiac.jpg',
        trailer: 'https://www.youtube.com/watch?v=yNncHPl1UXg'
    },
    {
        title: 'Hotel Transylvania',
        description:
            'Dracula, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Jonathan, a human.',
        genre: 'children',
        component: 'children',
        maturity: '0',
        slug: 'hotel-transylvania',
        type: 'movie',
        img: 'https://i.postimg.cc/cLQ6pTgV/hotel-transylvania.jpg',
        trailer: 'https://www.youtube.com/watch?v=q4RK3jY7AVk'
    },
    {
        title: 'Despicable Me',
        description:
            'Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.',
        genre: 'children',
        component: 'children',
        maturity: '0',
        slug: 'despicable-me',
        type: 'movie',
        img: 'https://i.postimg.cc/9Fzq4G4k/despicable-me.jpg',
        trailer: 'https://www.youtube.com/watch?v=zzCZ1W_CUoI'
    },
    {
        title: 'Frozen',
        description:
            'Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.',
        genre: 'children',
        component: 'children',
        maturity: '0',
        slug: 'frozen',
        type: 'movie',
        img: 'https://i.postimg.cc/vBmB6sqs/frozen.jpg',
        trailer: 'https://www.youtube.com/watch?v=TbQm5doF_Uc'
    },
    {
        title: 'Spirited Away',
        description:
            'In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.',
        genre: 'children',
        component: 'children',
        maturity: '0',
        slug: 'spirited-away',
        type: 'movie',
        img: 'https://i.postimg.cc/mgGgyMXV/spirited-away.jpg',
        trailer: 'https://www.youtube.com/watch?v=ByXuk9QqQkk'
    },
    {
        title: 'Up',
        description:
            "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
        genre: 'children',
        component: 'children',
        maturity: '0',
        slug: 'up',
        type: 'movie',
        img: 'https://i.postimg.cc/s2jftzRh/up.jpg',
        trailer: 'https://www.youtube.com/watch?v=ORFWdXl_zJ4'
    },
    {
        title: 'Joker',
        description:
            'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.',
        genre: 'thriller',
        component: 'thriller',
        maturity: '15',
        slug: 'joker',
        type: 'movie',
        img: 'https://i.postimg.cc/C5qwjLbW/joker.jpg',
        trailer: 'https://www.youtube.com/watch?v=t433PEQGErc'
    },
    {
        title: 'A Quiet Place',
        description:
            'The Abbott family must now face the terrors of the outside world as they fight for survival in silence. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
        genre: 'thriller',
        component: 'thriller',
        maturity: '15',
        slug: 'a-quiet-place',
        type: 'movie',
        img: 'https://i.postimg.cc/T2zDBKN5/a-quiet-place.jpg',
        trailer: 'https://www.youtube.com/watch?v=WR7cc5t7tv8'
    },
    {
        title: 'Black Swan',
        description:
            'Nina, a ballerina, gets the chance to play the White Swan, Princess Odette. But she finds herself slipping into madness when Thomas, the artistic director, decides that Lily might fit the role better.',
        genre: 'thriller',
        component: 'thriller',
        maturity: '15',
        slug: 'black-swan',
        type: 'movie',
        img: 'https://i.postimg.cc/g02X38jQ/black-swan.jpg',
        trailer: 'https://www.youtube.com/watch?v=5jaI1XOB-bs'
    },
    {
        title: 'Nightcrawler',
        description:
            'Louis Bloom, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them.',
        genre: 'thriller',
        component: 'thriller',
        maturity: '15',
        slug: 'nightcrawler',
        type: 'movie',
        img: 'https://i.postimg.cc/66v7V96W/nightcrawler.jpg',
        trailer: 'https://www.youtube.com/watch?v=u1uP_8VJkDQ'
    },
    {
        title: 'The Silence of The Lambs',
        description:
            'Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.',
        genre: 'thriller',
        component: 'thriller',
        maturity: '15',
        slug: 'the-silence-of-the-lambs',
        type: 'movie',
        img: 'https://i.postimg.cc/SxDjQRdr/the-silence-of-the-lambs.jpg',
        trailer: 'https://www.youtube.com/watch?v=W6Mm8Sbe__o'
    },
    {
        title: 'A Star Is Born',
        description:
            'After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.',
        genre: 'romance',
        component: 'romance',
        maturity: '15',
        slug: 'a-star-is-born',
        type: 'movie',
        img: 'https://i.postimg.cc/Fz5HCLF9/a-star-is-born.jpg',
        trailer: 'https://www.youtube.com/watch?v=nSbzyEJ8X9E'
    },
    {
        title: 'Blue Valentine',
        description:
            'Dean and Cynthia are married with a daughter and their marriage is about to fall apart. Both come from dysfunctional families and struggle to make sense of their relationship.',
        genre: 'romance',
        component: 'romance',
        maturity: '15',
        slug: 'blue-valentine',
        type: 'movie',
        img: 'https://i.postimg.cc/Z5KKQZmy/blue-valentine.jpg',
        trailer: 'https://www.youtube.com/watch?v=aILx69WrRhQ'
    },
    {
        title: 'La La Land',
        description:
            'Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin...',
        genre: 'romance',
        component: 'romance',
        maturity: '15',
        slug: 'la-la-land',
        type: 'movie',
        img: 'https://i.postimg.cc/pdmV2ZpW/la-la-land.jpg',
        trailer: 'https://www.youtube.com/watch?v=0pdqf4P9MB8'
    },
    {
        title: 'The Notebook',
        description:
            "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from Alzheimer's, on a daily basis out of his notebook.",
        genre: 'romance',
        component: 'romance',
        maturity: '15',
        slug: 'the-notebook',
        type: 'movie',
        img: 'https://i.postimg.cc/C5sSvr6N/the-notebook.jpg',
        trailer: 'https://www.youtube.com/watch?v=yDJIcYE32NU'
    },
    {
        title: 'Titanic',
        description:
            'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.',
        genre: 'romance',
        component: 'romance',
        maturity: '15',
        slug: 'titanic',
        type: 'movie',
        img: 'https://i.postimg.cc/DZVh7396/titanic.jpg',
        trailer: 'https://www.youtube.com/watch?v=kVrqfYjkTdQ'
    },

]
