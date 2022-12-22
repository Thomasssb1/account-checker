data = {
  "Facebook":{
      "url": "www.facebook.com",
      "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png"
  },
  "Twitter":{
      "url": "www.twitter.com",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/512px-Twitter-logo.svg.png"
  },
  "Instagram":{
      "url": "www.instagram.com",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
  },
  "LinkedIn":{
      "url": "www.linkedin.com/in",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
  },
  "Pinterest":{
      "url": "www.pinterest.com",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
  },
  "Reddit":{
      "url": "www.reddit.com/user",
      "icon": "https://www.redditinc.com/assets/images/site/reddit-logo.png"
  }
}

function handleResize() {
  const div = document.getElementById("input-div");
  const width = window.innerWidth;
  const height = window.innerHeight;
  const newWidth = (0.49*width).toString();

  div.style.width = newWidth.concat("px");
}

window.addEventListener('resize', handleResize);


function checkAccounts() {
  const form = document.getElementById("input-div");
  const elements = form.querySelectorAll("input");
  console.log(form);
  console.log(elements);

  const divParent = document.getElementById('div-social-holder');
  const inputField = document.getElementById('email-username');

  divParent.innerHTML = "";

  const keys = Object.keys(data);
  for (let x=0; x<keys.length; x++){
    let parent = document.createElement('div');
    let icon = document.createElement('img');

    let textParent = document.createElement('div');
    let title = document.createElement('div');
    let username = document.createElement('a');

    icon.src = data[keys[x]]['icon']
    title.innerHTML = keys[x];
    username.innerHTML = inputField.value;

    parent.id = "div-social";
    icon.id = "image-social";
    title.classList.add('title-social');
    username.classList.add('title-social');
    username.style.fontSize = "24px";
    username.style.marginLeft = "15px";
    username.style.color = "#52A7F5";
    username.href = `https://${data[keys[x]]['url']}/${inputField.value.replace(" ", "")}`;

    textParent.appendChild(title);
    textParent.appendChild(username);

    parent.appendChild(icon);
    parent.appendChild(textParent);
    divParent.appendChild(parent);
  }
  const bottomBar = document.getElementById("div-bottom")
  bottomBar.style.display = "none";
}