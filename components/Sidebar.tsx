const chatMessages = [
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  // ... I tak dalej, aż do 20 wiadomości
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  // ... I tak dalej, aż do 20 wiadomości
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  // ... I tak dalej, aż do 20 wiadomości
];

export const Sidebar = () => {
  return (
    <aside className="bg-slate-900  text-white w-80 top-18 fixed flex-col h-full flex p-1 justify-evenly">
      <ul className="flex flex-col gap-1 w-full h-[78%] overflow-y-scroll">
        {chatMessages.map((i) => {
          return (
            <li
              key={i.date.toString()}
              className="bg-slate-700  flex-col rounded-lg p-0.5 flex"
            >
              <p className="font-extralight">{i.nick}</p>
              <p>{i.content}</p>
            </li>
          );
        })}
      </ul>
      <form className="mx-0.5 gap-1 flex justify-between mb-6">
        <input className="rounded-md" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </aside>
  );
};
