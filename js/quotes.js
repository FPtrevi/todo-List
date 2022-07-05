const quotes = [
    {
      quote: "나는 포도나무요 너희는 가지라 그가 내 안에, 내가 그 안에 거하면 사람이 열매를 맣이 맺나니 나를 떠나서는 너희가 아무것도 할 수 없음이라",
      author: "요한복음 15:5",
    },
    {
      quote: "나 곧 내 영혼은 여호와를 기다리며 나는 주의 말씀을 바라는도다",
      author: "시편 130:5",
    },
    {
      quote:
        "여호와는 네게 복을 주시고 너를 지키시기를 원하며",
      author: "민수기 6:24",
    },
    {
      quote: "너희는 마음에 근심하지 말라 하나님을 믿으니 또 나를 믿으라",
      author: "요한복음 14:1",
    },
    {
      quote: "하나님 앞에서는 율법을 듣는 자가 의인이 아니요 오직 율법을 행하는 자라야 의롭다하심을 얻으리니",
      author: "로마서 2:13",
    },
    {
      quote: "여호와를 경외하며 그의 길을 걷는 자마다 복이 있도다",
      author: "시편 128:1",
    },
    {
      quote: "이도 만군의 여호와께로부터 난 것이라 그의 경영은 기묘하며 지혜는 광대하니라",
      author: "이사야 28:29",
    },
    {
      quote: "내가 율법이나 선지자를 폐하러 온 줄로 생각하지말라 폐하러 온 것이 아니요 완전하게 하려 함이라",
      author: "마가복음 5:17",
    },
    {
      quote: "아무것도 염려하지 말고 다만 모든 일에 기도와 간구로 너의 구할것을 감사함으로 하나님께 아뢰라",
      author: "빌립보서 4:6",
    },
    {
      quote: "믿음이 없이는 하나님을 기쁘시게 하지 못하나니 하나님께 나아가는 자는 반드시 그가 계신 것과 또한 그거 자기를 찾는 자들에게 상 주시는 이심을 믿어야 할지니라",
      author: "히브리서 11:6",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;