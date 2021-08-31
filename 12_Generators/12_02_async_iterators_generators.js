//Асинхронные итераторы и генераторы

//Итератор:

let range = {
  from: 1,
  to: 10,
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,
      async next() {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};
// (async () => {
//   for await (let value of range) {
//     console.log(value);
//   }
// })();

//Генератор:

async function* asyncGen(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i;
  }
}

// (async () => {
//   let gen = asyncGen(1, 10);
//   for await (let val of gen) {
//     console.log(val);
//   }
// })();

//Асинхронно перебираемые объекты

let newAsync = {
  from: 1,
  to: 10,

  async *[Symbol.asyncIterator]() {
    for (let value = this.from; value <= this.to; value++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      yield value;
    }
  },
};
// (async () => {
//   for await (let value of newAsync) {
//     console.log(value);
//   }
// })();

//Пример из жизни: воруем у гитхаба

let repo = "javascript-tutorial/en.javascript.info";

async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, {
      headers: { "User-Agent": "Our script" },
    });
    const body = await response.json();

    let nextPage = response.headers.get("Link").match(/<(.*?)>; rel="next"/);
    nextPage = nextPage && nextPage[1];

    url = nextPage;

    for (let commit of body) {
      yield commit;
    }
  }
}

// (async () => {
//   let count = 0;
//   for await (const commit of fetchCommits(repo)) {
//     console.log(commit.author.login);
//     if (++count === 10) break;
//   }
// })();
