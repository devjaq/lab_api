"use strict";

$(document).ready(function(){ 

  $.get('https://www.reddit.com/r/wholesomegifs.json', (test) => {
    test.data.children.forEach((element) => {
      for (let i = 0; i < 10; i++) {
      // console.log(element);
      console.log(element.data);
      let post = element.data;
      
      

      $("body").append(`<div class="content" id="${post.id}" url="${post.url}">
      <h3><a href="https://www.reddit.com${post.permalink}">${post.title}</a></h3>
      <p><a href="${post.url}"><img class="thumbnail" src="${post.thumbnail}" alt="image"></a>
      <p>${post.selftext}</p>
      <p>posted by ${post.author}  |  there are ${post.num_comments} comments.</p>
      </div>`)
      }
    }); // end of forEach
      
    $(document).on("click", ".thumbnail", (e) => {
      console.log($(e.target).parent()[0].attributes.url.value);
      let urlTarget = $(e.target).parent()[0].attributes;
      // console.log()

      // $(".popup").append(`<video>
      // <source src="https://i.imgur.com/Am83pvJ.mp4" type="video/mp4"></video>`)

      // https://i.imgur.com/Am83pvJ.mp4

      // .toggleClass("hide");
    })
      
    // console.log(data.data.children);
    console.log("space");
    

  }); // end of get data thing

}); // end of document ready