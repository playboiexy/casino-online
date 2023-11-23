export const Welcome = () => {
  const user = {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  };

  return (
    <div className="bg-base-100 sm:text-2xl flex text-white p-24 rounded-xl container pattern shadow-xl shadow-zinc-950">
      <p className="font-bold"> Welcome Back, </p>{" "}
      <p className=""> {user.nick}</p>
    </div>
  );
};
