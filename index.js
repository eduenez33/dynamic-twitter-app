var users = {

    user1 : {
        userName: '@elonmusk',
        displayName: 'Elon Musk',
        joinedDate: 'June 2009',
        followingCount: 103,
        followerCount: 47900000,
        avatarURL: 'assets/elonmusk.jpg',
        coverPhotoURL: 'assets/elonmusk-cover.jpeg',
        tweets: [
            {
                text: 'I admit to judging books by their cover',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Starship to the moon',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    },
    
    user2 : {
        userName: '@BillGates',
        displayName: 'Bill Gates',
        joinedDate: 'June 2009',
        followingCount: 274,
        followerCount: 53800000,
        avatarURL: 'assets/billgates.jpg',
        coverPhotoURL: 'assets/billgates-cover.jpeg',
        tweets: [
            {
                text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    }

};
var urlParams = new URLSearchParams(window.location.search);
urlParams.append('user', 'user1');
function whichUser() {
    return users[urlParams.get('user')];
}


document.querySelector('header').innerHTML = `
    <h3>${whichUser().displayName}  
    <span class="fa-stack fa-2x">
        <i class="fas fa-certificate fa-stack-2x"></i>
        <i class="fas fa-check fa-stack-1x fa-inverse"></i>
    </span>
    </h3>
    <p class='light'>${whichUser().tweets.length} Tweets</p>
`;

document.querySelector('.banner').style.backgroundImage = `url(${whichUser().coverPhotoURL})`;

function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}

document.querySelector('.profile-details').innerHTML = `
    <div class="profile-details-content">
        <img src="${whichUser().avatarURL}" class="profile-picture">
        <div class="username">
            <h2>${whichUser().displayName}  
            <span class="fa-stack fa-2x">
                <i class="fas fa-certificate fa-stack-2x"></i>
                <i class="fas fa-check fa-stack-1x fa-inverse"></i>
            </span>
            </h2>
            <p class='light'>${whichUser().userName}</p>
        </div>
        <p class='light'><i class="far fa-calendar-alt"></i> Joined ${whichUser().joinedDate}</p>
        <div class="follow-details">
            <p><span>${numFormatter(whichUser().followingCount)}</span> Following</p>
            <p><span>${numFormatter(whichUser().followerCount)}</span> Followers</p>
        </div>
    </div>
`;

whichUser().tweets.forEach(function(row, i){
    var tweetDiv = document.createElement('div');
    tweetDiv.innerHTML = `
        <img src='${whichUser().avatarURL}' />
        <div class='tweet-content'>
            <div class="username">
                <h4>${whichUser().displayName}
                <span class="fa-stack fa-2x">
                    <i class="fas fa-certificate fa-stack-2x"></i>
                    <i class="fas fa-check fa-stack-1x fa-inverse"></i>
                </span>
                </h4>
                <p class='light'>${whichUser().userName}</p>
                <p class='light spacer-dot'>.</p>
                <p class='light'>${row.timestamp.slice(0, 9)}</p>
            </div>
            <p>${row.text}</p>
        </div>
    `;
    document.querySelector('.tweets').appendChild(tweetDiv);
});