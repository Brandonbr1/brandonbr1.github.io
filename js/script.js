"use strict";
const darkButton = document.getElementById('them-switch');
const theme = localStorage.getItem('theme');
const element = document.body;
var isLight = localStorage.getItem('light-mode');


function EmailRevil() {
if (window.confirm('click ok to email me')) 
{
window.location.href='https://mailhide.io/e/ZlwLh5pW';
};
}

function DsGet() {
  alert('jerios#2143')
}

function McFourmsGet() {
  if (window.confirm('would you like to go to my McFourms(press ok) ')) 
  {
  window.location.href='https://www.minecraftforum.net/members/brandon7579898/threads';
  };
  }

function PMCGet() {
  if (window.confirm('would you like to go to my PMC profile(press ok) ')) 
  {
  window.location.href='https://www.planetminecraft.com/member/mohammedbrandon/';
  };
  }

function RedditGet() {
  if (window.confirm('would you like to go to my reddit(press ok) ')) 
  {
  window.location.href='https://www.reddit.com/user/Thedemon_slayerlove';
  };
  }

function CurseGet() {
if (window.confirm('would you like to go to my curse(press ok) ')) 
{
window.location.href='https://www.curseforge.com/members/brandonmohammed666/projects';
};
}

function TwitShow() {
  if (window.confirm('Click Ok to go to my Twitter ')) 
  {
  window.location.href='https://twitter.com/BrandonM666_';
  };
  }

function GithubGet() {
if (window.confirm('Click Ok to go to my Github ')) 
{
window.location.href='https://bit.ly/Brandonbr1Git';
};
}

function myFunction() {
    year = document.getElementById("theyear").innerHTML = "Years";
    let x = Math.floor((Math.random() * 100) + 1);
    document.getElementById("demo").innerHTML = x;
    document.getElementById("theyear").innerHTML = x;
};





  };
  // light mode switcher

  if (theme) {
    element.classList.add(theme);
    isLight && body.classList.add('light-mode');
  }

  function ToggleBtn() {
    var element = document.body;
    element.classList.toggle("light-mode");

    localStorage.setItem('theme', 'light-mode');

};
// from https://css-tricks.com/add-a-service-worker-to-your-site/


if (navigator && navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js');
}
